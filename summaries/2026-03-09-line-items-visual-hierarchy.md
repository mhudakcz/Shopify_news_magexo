---
date: 2026-03-09
title: "Vylepšená vizuální hierarchie line items v orders a returns"
title_en: "Improved visual hierarchy for line items in orders and returns"
slug: line-items-visual-hierarchy
zdroj: https://changelog.shopify.com/posts/improved-visual-hierarchy-for-line-items-in-orders-and-returns
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [fyi]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin UI redesign."
kontext:
  background: |
    Line item je základní datová jednotka objednávky — reprezentuje jednu řádkovou položku v nákupním košíku nebo objednávce. Každý line item zahrnuje informace o produktu, variantě, množství, ceně, slevách, daních a případných dalších atributech. V Shopify Adminu se line items zobrazují na stránkách objednávek, vrácení, draft objednávek a zásilek.

    Původní zobrazení line items v Shopify Adminu bylo historicky textově husto a nepřehledné — metadata, slevy i ceny byly prezentovány lineárně bez vizuální hierarchie. S nárůstem komplexity objednávek (bundles, discount allocations, fulfillment splits, komponenty) se potřeba přehledného UI stala kritičtější. Shopify kontinuálně redesignuje Admin UI v rámci svého Design Systému Polaris, přičemž konzistence komponent across stránkami je klíčovým cílem.

    Prakticky to znamená, že merchanté mohou nyní rychleji skenovat velké objednávky — seskupené ceny redukují vizuální šum, hover detaily umožňují hluboký vhled bez opuštění stránky a collapsible metadata footer udržuje interface čistý. Tato změna doplňuje ostatní Admin UI vylepšení jako sjednocení search a filter baru na stránkách objednávek a produktů. Tyto redesigny nemají dopad na chování Admin API.

  zdroje:
    - title: "Shopify Changelog: Improved visual hierarchy for line items in orders and returns"
      url: "https://changelog.shopify.com/posts/improved-visual-hierarchy-for-line-items-in-orders-and-returns"
    - title: "Shopify Changelog: Search, filter a saved views pro Orders a Products"
      url: "https://changelog.shopify.com/posts/search-filter-and-saved-views-for-orders-products-and-more"
    - title: "Shopify Archive: LineItem.weight pole v Admin API (2026-07)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/lineitem-weight-public-admin-api/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Line items v ordered/returns mají konzistentní layout, group pricing s hover details, collapsible metadata footer pro rychlejší scan."
tagy: [admin, line-item, ux]
---

## Co se mění
Line items v Orders a Returns přestrukturovány: konzistentní layout, **grouped pricing** s hover detaily, collapsible metadata footer. Lepší scan-ability pro merchanty.

## Použití v Integrátoru
**Nepoužíváme** — UI redesign.
