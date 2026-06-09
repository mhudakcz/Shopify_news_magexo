---
date: 2026-06-05
title: "Inventory transfer webhooks: origin + destination location ID v 2026-07"
title_en: "Inventory transfer webhooks include origin and destination location IDs"
slug: inventory-transfer-webhooks-origin-destination
zdroj: https://shopify.dev/changelog/inventory-transfer-webhooks-include-origin-and-destination-location-ids-and-mutation-documentation-clarified
shrnuto_dne: 2026-06-08
kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se inventory transfer webhook payload — relevantní pro klienty s multi-location warehouse setupem."
dotcene_klienty: []
souvisejici:
  - simpler-inventory-transfers
  - flow-triggers-inventory-transfer
  - inventorytransferdelete-invalid-state
kontext:
  background: |
    Inventory transfers v Shopify představují přesuny zboží mezi lokacemi (sklady, pobočky). Každý transfer prochází
    stavovým cyklem (DRAFT → READY_TO_SHIP → IN_PROGRESS → COMPLETED) a při přechodu mezi stavy Shopify odesílá
    webhook eventy (např. `inventory_transfers/complete`). Dosud tyto webhooky neobsahovaly přímé identifikátory
    zdrojové a cílové lokace — vývojáři museli provést dodatečný API dotaz na detail transferu, aby zjistili, odkud
    a kam zboží putuje.

    Shopify v posledních kvartálech masivně rozšiřuje inventory ecosystem: redesign transferů (simpler inventory
    transfers, 2026-05), Flow triggery pro transfer events (2026-04), barcode workflow pro shipments (2026-03) a nyní
    enrichment webhook payloadu. Trend je jasný — Shopify posouvá multi-location inventory management na úroveň,
    kde lze celý tok řídit automatizovaně bez polling API calls.

    Přidání `origin.id` a `destination.id` (ve formátu Global ID, např. `gid://shopify/Location/123`) do šesti
    transfer webhook topics umožňuje systémům třetích stran (WMS, ERP, logistické platformy) okamžitě
    identifikovat lokace bez dodatečného volání. To snižuje latenci reakce, počet API requestů a usnadňuje
    real-time orchestraci přesunů zásob v multi-warehouse prostředí.
  zdroje:
    - title: "Shopify Changelog: Inventory transfer webhooks origin/destination"
      url: "https://shopify.dev/changelog/inventory-transfer-webhooks-include-origin-and-destination-location-ids-and-mutation-documentation-clarified"
    - title: "Shopify Changelog: Simpler inventory transfers"
      url: "https://changelog.shopify.com/posts/simpler-inventory-transfers"
    - title: "Shopify Changelog: Flow triggers for inventory transfer"
      url: "https://changelog.shopify.com/posts/flow-new-triggers-for-inventory-transfers-completed-and-inventory-transfer-ready-to-ship"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6
tldr: "Od API verze 2026-07 obsahují všechny inventory transfer webhooky pole origin.id a destination.id s Global ID lokací — odpadá nutnost dodatečného API volání pro identifikaci skladu. Zároveň byla upřesněna dokumentace mutací inventoryTransferSetItems a inventoryTransferRemoveItems."
tagy: [inventory, transfer, webhook, location, admin]
zdroj_kanal: dev-changelog
---

## Co se mění

Od API verze **2026-07** šest inventory transfer webhook topics nově obsahuje pole `origin` a `destination` s identifikátorem lokace:

**Dotčené webhook topics:**
- `inventory_transfers/add_items`
- `inventory_transfers/update_item_quantities`
- `inventory_transfers/remove_items`
- `inventory_transfers/ready_to_ship`
- `inventory_transfers/cancel`
- `inventory_transfers/complete`

**Nová pole v payloadu:**
```json
{
  "origin": { "id": "gid://shopify/Location/123" },
  "destination": { "id": "gid://shopify/Location/456" }
}
```

ID jsou ve formátu Shopify Global ID. Pokud subscription používá starší API verzi nebo transfer nemá standardní location zdroj, pole se v payloadu nevyskytnou (nejsou `null`, pouze chybí).

**Upřesněná dokumentace mutací:**

`inventoryTransferSetItems` — na transferech ve stavu READY_TO_SHIP nebo IN_PROGRESS nastavuje quantity pouze do `processableQuantity`; nulová quantity je validní pouze na DRAFT transferu (jinak `INVALID_QUANTITY` error).

`inventoryTransferRemoveItems` — funguje na DRAFT a READY_TO_SHIP transferech; prázdný seznam `transferLineItemIds` je nyní dokumentován jako no-op (žádná akce). Zachovává allocated/shipped quantity.

Tři error kódy mají nově popisnější zprávy (kódy samotné se nemění):
- `READY_TO_SHIP_TRANSFER_REQUIRES_AT_LEAST_ONE_ITEM`
- `ALL_QUANTITY_SHIPPED`
- `ITEM_PRESENT_ON_DRAFT_SHIPMENT_WITH_ZERO_QUANTITY`

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-05 | Změna dostupná v unstable API verzi |
| 2026-07-01 | Stabilní API verze 2026-07 |

## Dopad pro nás

**Integrace a vlastní aplikace:** Pokud nás nebo klienta zajímají inventory transfery v real-time (WMS napojení, ERP sync, automatické notifikace skladu), nové pole v webhook payloadu eliminuje potřebu follow-up API volání pro zjištění lokací. Webhook nově obsahuje vše potřebné pro základní routing.

**Zpracování webhooků:** Stávající handlery fungují beze změny — nová pole jsou aditivní. Doporučujeme přidat jejich zpracování při příští iteraci webhook logiky, zejména pokud klient provozuje více než dvě lokace.

**Dokumentační upřesnění mutací:** Pokud v integraci používáme `inventoryTransferSetItems` nebo `inventoryTransferRemoveItems`, stojí za to ověřit, zda naše implementace odpovídá nově zdokumentovanému chování (zejména nulová quantity na non-DRAFT transferech).

## Použití v Integrátoru

Relevantní pro klienty s **multi-location warehouse setupem**, kde se inventory transfery automatizují nebo napojují na WMS/ERP systémy. Nové location ID v payloadu umožní:

- Okamžité směrování notifikací na správný sklad bez additional API call
- Jednodušší logiku mapování lokací v event-driven architektuře
- Spolehlivější audit trail přesunů zásob v kombinaci s Flow triggery (`flow-triggers-inventory-transfer`)

Doporučení: při návrhu nových inventory integrations stavět na 2026-07 API a využívat obohacený webhook payload jako primární zdroj location context.
