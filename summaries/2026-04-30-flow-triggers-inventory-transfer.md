---
date: 2026-04-30
title: "Flow: nové triggery pro inventory transfer (completed, ready to ship)"
title_en: "Flow: New triggers for inventory transfer completed and inventory transfer ready to ship"
slug: flow-triggers-inventory-transfer
zdroj: https://changelog.shopify.com/posts/flow-new-triggers-for-inventory-transfers-completed-and-inventory-transfer-ready-to-ship
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-api, nova-prilezitost, integrace]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods. Flow triggers jsou alternativa k webhookům — pokud klient používá Flow pro automation, naše integrace může předat event tam přes API. Pokud máme custom WMS sync, Flow může nahradit/doplnit část logiky."
kontext:
  background: |
    Shopify Flow je no-code automatizační engine integrovaný přímo do administrace Shopify. Obchodníci v něm sestavují workflows ze tří komponent: trigger (spouštěcí událost), podmínka (volitelné filtrování) a akce (provedená operace). Triggery reprezentují události, které nastávají v obchodě nebo v navázaných aplikacích — například změna stavu objednávky, aktualizace zákazníka nebo právě pohyb zásob. Flow je dostupné bez nutnosti psát kód a umožňuje spouštět libovolné akce třetích stran.

    Inventory transfer je entita reprezentující přesun zásoby mezi dvěma lokacemi v rámci jednoho obchodu — typicky ze skladu do kamenné prodejny nebo mezi pobočkami. Transfer prochází stavovým cyklem (Draft → Ready to Ship → In Transit → Completed) a Shopify rozšiřuje ekosystém nástrojů pro správu tohoto toku od zavedení multi-location inventory v roce 2018. Donedávna nebylo možné na stavové přechody transferů reagovat ve Flow — obchodníci museli využívat buď ruční kroky, nebo vlastní webhook handlery.

    Přidání triggerů `Inventory transfer ready to ship` a `Inventory transfer completed` do Flow umožňuje reagovat na tyto klíčové stavové přechody deklarativně, bez hostování vlastní infrastruktury. Typické automatizace zahrnují odeslání notifikace přijímající lokaci, aktualizaci logistického dashboardu nebo spuštění následného úkolu po přijetí zásoby. Tento přístup je méně technicky náročný než vlastní webhook handler a zároveň se plně integruje do stávajících Flow workflows.

    Nové triggery navazují na souběžné úpravy transfer workflow — redesign procesu zavádí volitelný stav „Ready to Ship" jako přípravu před fyzickým odesláním, přičemž právě na tento stav nyní Flow trigger reaguje. Jde o součást širšího trendu rozšiřování Flow o pokrytí celého životního cyklu skladových a logistických operací.
  zdroje:
    - title: "Flow: New triggers for inventory transfer completed and inventory transfer ready to ship"
      url: "https://changelog.shopify.com/posts/flow-new-triggers-for-inventory-transfers-completed-and-inventory-transfer-ready-to-ship"
    - title: "Shopify Flow – triggery (developer dokumentace)"
      url: "https://shopify.dev/docs/apps/flow/triggers"
    - title: "Redesign inventory transfers — jednodušší workflow"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simpler-inventory-transfers/"
    - title: "Flow: nové 'Get data' akce pro workflows a inventory items"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-new-actions-get-data/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
