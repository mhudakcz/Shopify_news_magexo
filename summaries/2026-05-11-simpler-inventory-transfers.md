---
date: 2026-05-11
title: "Redesign inventory transfers — jednodušší workflow, optional shipments"
title_en: "Simpler inventory transfers"
slug: simpler-inventory-transfers
zdroj: https://changelog.shopify.com/posts/simpler-inventory-transfers
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities). Transfer workflow má nový UI a flow, ale Admin API mutace pro transfer zůstávají; sync flow s WMS může nově procházet i 'Ready to Ship' status."
dotcene_klienty: []
souvisejici: [flow-triggers-inventory-transfer, print-packing-slips-inventory-transfers]

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
