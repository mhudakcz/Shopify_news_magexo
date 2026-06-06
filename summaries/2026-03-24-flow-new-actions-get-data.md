---
date: 2026-03-24
title: "Flow: nové 'Get data' akce pro workflows, abandoned checkouts, inventory, pages"
title_en: "Flow: New actions to get data about workflow runs, abandoned checkouts, inventory items, catalogs, and pages"
slug: flow-new-actions-get-data
zdroj: https://changelog.shopify.com/posts/flow-new-actions-to-get-data-about-workflow-runs-abandoned-checkouts-inventory-items-catalogs-and-pages
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow je no-code automation. Pokud klient používá Flow + naše data, tyto akce mohou nahradit část custom logiky."
kontext:
  background: |
    Shopify Flow je no-code automatizační engine integrovaný přímo do administrace Shopify. Obchodníci v něm sestavují workflows z trojice komponent: trigger (spouštěcí událost), podmínka (volitelné filtrování) a akce (provedená operace). Flow je dostupné bez nutnosti psát kód a podporuje jak nativní Shopify události, tak akce třetích stran přes app extensions.

    Kategorie akcí „Get data" představuje specifický typ akcí odlišný od standardních jednozdrojových operací. Zatímco běžná akce pracuje s jedním objektem (například jednou objednávkou), akce typu „Get data" spustí dotaz s filtry a vrátí seznam až 100 záznamů najednou. Tento princip dávkového načítání umožňuje budovat složitější analytické nebo iterační workflows přímo v rozhraní Flow bez externího middleware.

    Praktický přínos spočívá v tom, že merchanté mohou slučovat data z různých oblastí e-shopu do jednoho workflow — například kombinovat stav skladových položek s daty o nedokončených nákupech pro cílenou automatizaci. Flow přitom funguje nad stejnými daty jako Shopify Admin API, takže výsledky jsou konzistentní s hodnotami viditelnými v administraci.

    Trend rozšiřování „Get data" akcí je součástí širšího směřování Shopify Flow k plnohodnotnému reportovacímu a automatizačnímu nástroji — vedle těchto akcí přibyla například i možnost dotazovat analytická data přes ShopifyQL nebo pracovat s historií spuštění workflows.
  zdroje:
    - title: "Flow: New actions to get data about workflow runs, abandoned checkouts, inventory items, catalogs, and pages"
      url: "https://changelog.shopify.com/posts/flow-new-actions-to-get-data-about-workflow-runs-abandoned-checkouts-inventory-items-catalogs-and-pages"
    - title: "Shopify Flow – dokumentace pro vývojáře"
      url: "https://shopify.dev/docs/apps/flow"
    - title: "Flow: nové triggery pro inventory transfer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-triggers-inventory-transfer/"
    - title: "Flow: nová akce pro analytics data přes ShopifyQL"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-shopifyql-action/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shopify Flow přidává 4 nové 'Get data' akce — vrací až 100 resources: workflow runs, abandoned checkouts, inventory items, pages. Pro pokročilé workflow building."
tagy: [flow, automation, get-data]
souvisejici: [flow-triggers-inventory-transfer, flow-more-fields-admin-api]
---

## Co se mění
Shopify **Flow** přidává 4 nové akce typu **„Get data"** vracející až 100 záznamů:
- **Workflow runs**
- **Abandoned checkouts**
- **Inventory items**
- **Pages**

Cíl: stavět pokročilé workflow nad Shopify daty bez custom kódu.

## Použití v Integrátoru
**Možná** — pokud klient používá Flow + my dodáváme data odjinud, tyto akce mohou ušetřit middleware. Stojí za zmínit u B2B klientů s automation needs.
