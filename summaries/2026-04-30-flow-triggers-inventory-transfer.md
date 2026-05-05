---
date: 2026-04-30
title: "Flow: nové triggery pro inventory transfer (completed, ready to ship)"
title_en: "Flow: New triggers for inventory transfer completed and inventory transfer ready to ship"
slug: flow-triggers-inventory-transfer
zdroj: https://changelog.shopify.com/posts/flow-new-triggers-for-inventory-transfers-completed-and-inventory-transfer-ready-to-ship
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api, nova-prilezitost, integrace]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods. Flow triggers jsou alternativa k webhookům — pokud klient používá Flow pro automation, naše integrace může předat event tam přes API. Pokud máme custom WMS sync, Flow může nahradit/doplnit část logiky."
tldr: "Shopify Flow má 2 nové triggery pro inventory transfers: ready to ship (transfer připraven k odeslání) a completed (transfer plně přijat na cílové lokaci)."
tagy: [flow, inventory, transfer, automation, webhook]
---

## Co se mění
Shopify **Flow** (no-code automation engine) přidává **2 nové triggery**:
- **`Inventory transfer ready to ship`** — fires když je transfer připraven k odeslání (zboží picked, status změněn)
- **`Inventory transfer completed`** — fires když je transfer plně přijat na cílové lokaci

Cíl: automatizovat workflow kolem skladových transferů (notifikace, ERP sync, status updates).

## Dopad pro nás
**Pro vývojáře:**
Flow triggers jsou alternativa k webhookům. Pokud máme klienta s custom WMS sync, můžeme zvážit:
- **Use Flow trigger + custom action**: jednodušší než hostovat vlastní webhook handler
- **Use webhook**: víc kontrolu, ale víc kódu na naší straně

Naše inventory methods (`updateInventoryItem`, `setInventoryOnHandQuantities`) zůstávají beze změny.

**Pro PM / PO:**
Nice pro B2B/multi-warehouse klienty. Flow umožňuje merchantovi nakonfigurovat „když transfer dorazí, pošli email / vytvoř task / aktualizuj custom systém" bez kódu.

## Použití v Integrátoru
**Možná** — pokud klient potřebuje notifikační/sync flow kolem transferů, Flow + tyto triggery jsou lehčí variantou než custom integrace. Můžeme to nabídnout jako component řešení.
