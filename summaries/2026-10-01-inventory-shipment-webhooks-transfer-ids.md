---
date: 2026-10-01
title: "Inventory shipment webhooks obsahují inventory transfer IDs"
title_en: "Inventory shipment webhooks include inventory transfer IDs"
slug: inventory-shipment-webhooks-transfer-ids
zdroj: https://shopify.dev/changelog/posts/inventory-shipment-webhooks-include-inventory-transfer-ids
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud odebíráme webhooky inventory_shipments/*, nové pole inventory_transfer_id umožní napárovat zásilku na zdrojový transfer bez dalšího dotazu do Admin API."
dotcene_klienty: []
souvisejici: [inventory-shipments-canceled-receive-action, inventory-transfer-webhooks-origin-destination, purchase-orders-create-inventory-transfers]
tldr: "Všech osm webhook topics inventory_shipments/* nese od API verze 2026-10 pole inventory_transfer_id, takže lze zásilku spárovat se zdrojovým transferem bez dalšího Admin API dotazu."
tagy: [events, webhooks, inventory, shipments, transfers]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Inventory transfer je v Shopify záznam o přesunu zásob mezi lokacemi nebo od dodavatele do skladu. Fyzické doručení transferu se modeluje pomocí inventory shipmentů: jeden transfer může mít více shipmentů (částečné dodávky), každý má vlastní položky, tracking a stav (draft, in transit, received). Shopify o každé změně shipmentu informuje sadou webhooků inventory_shipments/*.

    Dosud payload těchto webhooků neříkal, ke kterému transferu shipment patří. Aplikace, která dostala například inventory_shipments/receive_items, musela po přijetí eventu zavolat Admin API, dohledat shipment a z něj odvodit související transfer. U integrací, které sledují celý řetězec od purchase order přes transfer až po příjem na skladu, to znamenalo jeden dodatečný dotaz na každý event, navíc s rizikem rate limitů při větších objemech.

    Nové pole inventory_transfer_id řeší přesně tento join. Odpovídá trendu posledních měsíců, kdy Shopify obohacuje inventory webhooky o kontext, aby se dalo obejít bez pollingu: nejdřív location ID u transfer webhooků, poté rozšířený receive flow u shipmentů a nyní vazba shipmentu na transfer. Změna je čistě aditivní, existující handlery se nerozbijí.
  zdroje:
    - title: "Shopify: Inventory shipment webhooks include inventory transfer IDs"
      url: "https://shopify.dev/changelog/posts/inventory-shipment-webhooks-include-inventory-transfer-ids"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Webhooky pro inventory shipmenty nově obsahují pole `inventory_transfer_id`. Podle changelogu slouží k tomu, aby bylo možné určit, ke kterému záznamu `inventory_transfer` (pokud nějakému) daný shipment patří. Aplikace tak může spárovat shipment event se zdrojovým transferem přímo z payloadu, bez dalšího dotazu do Admin API.

Pole se týká všech osmi topics `inventory_shipments/*`:

- `inventory_shipments/create`
- `inventory_shipments/delete`
- `inventory_shipments/add_items`
- `inventory_shipments/remove_items`
- `inventory_shipments/update_item_quantities`
- `inventory_shipments/mark_in_transit`
- `inventory_shipments/receive_items`
- `inventory_shipments/update_tracking`

Jde o aditivní změnu bez breaking changes. Pole dostanou subscriptions na API verzi 2026-10 a novější, na starších verzích se v payloadu neobjeví. Zdrojový changelog neuvádí ukázku payloadu ani přesný formát hodnoty, ten je proto potřeba ověřit v dokumentaci Events and webhooks nebo na reálném testovacím eventu. Formulace „pokud nějakému" naznačuje, že shipment nemusí být vždy navázaný na transfer, takže konzument by měl počítat i s chybějící nebo prázdnou hodnotou.

## Časová osa

- 2026-09-18 (12:00 ET) – pole je dostupné v API verzi 2026-10
- 2026-10-01 – zveřejněn changelog Shopify
- Starší verze API – pole se v payloadu nevyskytuje, je nutné přepnout subscription na 2026-10+

## Dopad pro nás

**Pro vývojáře:** Pokud už zpracováváme webhooky `inventory_shipments/*`, stačí po přechodu subscription na verzi 2026-10 začít číst `inventory_transfer_id` a použít ho jako klíč pro join s transferem v naší databázi nebo cache. Odpadá follow-up Admin API dotaz na každý event, což snižuje latenci i spotřebu API limitů. Handler by měl korektně zvládnout situaci, kdy pole chybí nebo je prázdné (shipment bez transferu), a zůstat idempotentní, protože webhooky mohou být doručeny opakovaně. Existující kód se změnou nerozbije, protože jde o nové pole v payloadu.

**Pro PM / PO:** Naléhavost je nízká, jde o technické zjednodušení bez dopadu na merchant-facing UI. Přínos mají hlavně ERP a WMS integrace, které sledují tok zboží od purchase order přes inventory transfer až po příjem na skladu. Spolu s automaticky vytvářenými transfery z purchase orders a s location ID v payloadu transfer webhooků tak vzniká úplnější event-driven obraz celého řetězce bez pollingu. Je to příležitost zjednodušit a zrychlit stávající synchronizaci příjmů, ne akutní povinnost.

## Použití v Integrátoru

Možná – pokud sledujeme příjem a stav skladových zásilek přes webhooky `inventory_shipments/*`, můžeme nové pole využít k přímému napárování shipmentu na transfer a zrušit dodatečné dotazy do Admin API. Stojí za to to zvážit při příští úpravě webhook handlerů a přechodu na API verzi 2026-10.
