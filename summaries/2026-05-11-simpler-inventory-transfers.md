---
date: 2026-05-11
title: "Redesign inventory transfers — jednodušší workflow, optional shipments"
title_en: "Simpler inventory transfers"
slug: simpler-inventory-transfers
zdroj: https://changelog.shopify.com/posts/simpler-inventory-transfers
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities). Transfer workflow má nový UI a flow, ale Admin API mutace pro transfer zůstávají; sync flow s WMS může nově procházet i 'Ready to Ship' status."
dotcene_klienty: []
souvisejici: [flow-triggers-inventory-transfer, print-packing-slips-inventory-transfers]

kontext:
  background: |
    Inventory transfers jsou entitou správy zásob v Shopify reprezentující plánovaný přesun položek mezi dvěma lokacemi — například ze skladu do kamenné prodejny nebo mezi sklady. Jde o základní stavební blok multi-location inventory, který Shopify zavedl v roce 2018, a od té doby je soustavně rozšiřován o API mutace, stavové přechody a integraci s dalšími nástroji administrace.

    Původní workflow transferu bylo navrženo primárně kolem fyzické zásilky: obchodník musel vždy explicitně vytvořit přepravu, zadat tracking číslo a procházet přepravní formulář — i tehdy, když šlo o přesun zboží v rámci jedné budovy bez kurýra. Tato rigidita způsobovala tření zejména pro maloobchodníky s více provozovnami nebo sklady, kteří interní relocations prováděli bez zapojení přepravce. Redesign vychází z potřeby modelovat skutečné logistické scénáře, nikoli jen zásilkové procesy.

    Volitelný stav „Ready to Ship" doplňuje životní cyklus transferu o přípravnou fázi před fyzickým odesláním — a právě na tento stav navazuje nový Shopify Flow trigger `Inventory transfer ready to ship`, který umožňuje automatizovat reakce (notifikace, ERP sync) bez nutnosti vlastní webhookové infrastruktury. Propojení s purchase orders pak centralizuje nákladové informace: merchant vidí pořizovací cenu zásoby v kontextu jejího pohybu, což zjednodušuje reconciliaci na straně účetnictví nebo WMS.

    Redesign je součástí širšího trendu, kdy Shopify sjednocuje POS, fulfillment a inventory management do jednotného operačního modelu pro omnichannel obchodníky.
  zdroje:
    - title: "Simpler inventory transfers — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/simpler-inventory-transfers"
    - title: "InventoryTransfer — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer"
    - title: "Flow: nové triggery pro inventory transfer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-triggers-inventory-transfer/"
    - title: "Print packing slips pro inventory transfers"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/print-packing-slips-inventory-transfers/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Inventory transfer workflow redesignovaný — optional shipment creation, inline tracking info, optional 'Ready to Ship' status a možnost link purchase orders pro cost tracking. Lepší viditelnost na transfer page."
tagy: [inventory, transfer, workflow, ux]
---

## Co se mění
Inventory transfer workflow v Adminu má **kompletní redesign**:
- **Optional shipment creation** — transfer bez fyzické přepravy (např. relocations v jedné budově)
- **Inline tracking info** přímo na transfer page (ne přes klik do detailu)
- **Optional 'Ready to Ship' status** — preparation phase před actual ship
- **Link purchase orders** — propojení transferu s PO pro cost tracking
- Vyšší viditelnost statusu na transfer page

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace syncuje inventory transfers do WMS / ERP, nově se mohou objevit transfers v **Ready to Ship** stavu (mezi Draft a In Transit). Sync flow by měl rozeznat — typicky synchronizovat až od In Transit.

**Pro PM / PO:**
Klienti s multi-location setupem dostávají uživatelsky lepší flow. Žádný velký impact, ale stojí za zmínit při ESN/multi-warehouse discussion.

## Použití v Integrátoru
**Možná** — UI redesign s minor API/status implications. Audit sync flow pro nový status.

## Související
- [Flow: nové triggery pro inventory transfer](../zmena/flow-triggers-inventory-transfer/)
- [Print packing slips pro inventory transfers](../zmena/print-packing-slips-inventory-transfers/)
