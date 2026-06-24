---
date: 2026-06-22
title: "Purchase orders automaticky vytvářejí inventory transfery při ready-to-receive"
title_en: "Purchase orders now create transfers to move inventory"
slug: purchase-orders-create-inventory-transfers
zdroj: https://changelog.shopify.com/posts/purchase-orders-now-create-transfers-to-move-inventory
shrnuto_dne: 2026-06-23
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s inventory transfers a purchase orders přes Admin API — propojení PO → transfer zjednodušuje sync flow se sklady (WMS) a eliminuje potřebu manuálního vytváření transfer záznamu na straně klienta."
dotcene_klienty: []
souvisejici:
  - "simpler-inventory-transfers"
  - "inventory-transfer-metafields-admin-api"
  - "flow-triggers-inventory-transfer"
tldr: "Shopify nyní při přechodu purchase order do stavu 'ready to receive' automaticky generuje linked inventory transfer, což eliminuje manuální duplikaci dat a umožňuje receiving přes admin i POS."
tagy: [purchase-order, inventory, transfer, fulfillment, automation]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Purchase orders (nákupní objednávky) v Shopify slouží k evidenci objednávek zboží od dodavatelů. Obchodník v nich specifikuje produkty, množství, ceny a dohodnuté podmínky. Dosud však bylo příjem zboží a fyzický pohyb inventáře řízeno samostatně přes inventory transfers — dva oddělené záznamy, které musely být vytvářeny a spravovány ručně.

    Inventory transfers jsou záznamy pohybu zásob mezi lokacemi nebo od dodavatele do skladu. Umožňují sledovat, kolik kusů dorazilo, kolik ještě čeká, a jaké náklady (přeprava, clo) jsou s dodávkou spojeny. Jejich propojení s purchase order bylo dříve pouze volitelné a záviselo na manuálním úkonu ze strany obchodníka.

    Od 22. června 2026 Shopify automaticky vytvoří linked inventory transfer ve chvíli, kdy je purchase order označena jako ready for receipt. Přijímání zboží pak probíhá přímo na tomto transferu — a to jak z admin rozhraní, tak z POS terminálu na prodejně, kde zásilka fyzicky dorazí. Tato změna je klíčová pro merchants s multi-location warehouse setupem, kteří dosud museli duplikovat data z PO do transferu ručně.

    Praktický přínos je přímý: partial deliveries jsou nativně podporovány prostřednictvím více shipmentů na jednom transferu, záznamy zůstávají vzájemně propojeny pro auditní stopu, a autofill cen z předchozích objednávek nebo produktové stránky snižuje chybovost při zadávání dat. CSV import line items zrychluje onboarding pro obchodníky s větším SKU portfoliem.
  zdroje:
    - title: "Shopify: Purchase orders now create transfers to move inventory"
      url: "https://changelog.shopify.com/posts/purchase-orders-now-create-transfers-to-move-inventory"
    - title: "Shopify Help: Creating inventory transfers from purchase orders"
      url: "https://help.shopify.com/en/manual/products/inventory/purchase-orders/creating-inventory-transfers"
  generated_at: 2026-06-23T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify propojuje purchase orders s inventory transfers do jednoho automatizovaného workflow. Jakmile je purchase order označena jako **ready for receipt**, systém automaticky vygeneruje linked inventory transfer se stejným dodavatelem, line items a množstvím.

Hlavní změny:

- **Automatické vytvoření transferu** — při přechodu PO do ready-to-receive stavu vznikne transfer bez manuálního zásahu.
- **Flexibilní receiving** — zboží lze přijmout jak z Shopify Admin, tak přímo z POS terminálu na prodejně, kde zásilka dorazí.
- **Partial deliveries** — jeden transfer podporuje více shipmentů, takže rozložené dodávky nevyžadují zakládání nových záznamů.
- **Trvalé propojení záznamů** — transfer zůstává linked na původní purchase order, což umožňuje auditní stopu (co bylo objednáno, co dorazilo, za jakou cenu).
- **Autofill cen** — purchase orders se nově automaticky předvyplňují poslední nákupní cenou nebo cenou z produktové stránky.
- **CSV import** — line items lze hromadně nahrát přes CSV soubor pro rychlé zakládání větších objednávek.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-22 | Funkce dostupná pro všechny merchants |

Funkce je součástí postupného rozšiřování inventory management nástrojů po Spring 2026 Editions (viz `simpler-inventory-transfers` z května 2026).

## Dopad pro nás

Tato změna se týká merchantů, kteří provozují více skladových lokací nebo kombinují online prodej s kamennou prodejnou. Eliminuje manuální krok duplikace dat z PO do transferu — což v praxi snižuje chybovost a zkracuje čas potřebný k zaúčtování příjmu zboží.

Pro merchants s WMS integrací nebo EDI workflow je důležité ověřit, zda jejich integrace nečeká na manuálně vytvořený transfer nebo nepracuje s PO a transferem jako s nezávislými objekty bez vzájemné reference. Automaticky generovaný transfer bude mít `purchase_order` reference hned při vytvoření.

Customer-facing dopad je nulový — změna se odehrává výhradně na straně back-office inventory managementu.

## Použití v Integrátoru

Integrátor pracuje s inventory transfers a purchase orders přes Shopify Admin API. Propojení PO → transfer je relevantní v těchto scénářích:

1. **WMS sync** — pokud integrátor vytváří nebo synchronizuje inventory transfers ze skladového systému, nová automatická vazba na PO může kolidovat s existující logikou vytváření transferů. Je potřeba ověřit, zda WMS side neočekává vytvoření transferu na vlastní popud, nebo zda nedojde k duplicitnímu záznamu.

2. **Receiving workflow** — merchants, kteří používají Integrátor pro řízení příjmu zboží, mohou nově těžit z toho, že transfer je automaticky dostupný k receivingu hned po potvrzení objednávky dodavatelem — bez nutnosti dalšího API volání pro vytvoření transferu.

3. **Audit a reporting** — linked PO reference na transferu zjednodušuje mapování nákladů na objednávky v reportingových pipeline.

Doporučené kroky: zkontrolovat stávající integrace pracující s `inventoryTransferCreate` mutací a ověřit, zda jejich logika počítá s případem, kdy transfer pro dané PO již existuje.
