---
date: 2026-04-13
title: "Search, filter a saved views pro Orders, Products v Adminu"
title_en: "Search, filter, and saved views for Orders, Products, and more"
slug: search-filter-saved-views-orders-products
zdroj: https://changelog.shopify.com/posts/search-filter-and-saved-views-for-orders-products-and-more
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin UI improvement, naše API queries fungují stejně jako dřív."
kontext:
  background: |
    Saved views jsou pojmenované konfigurace sloužící k opakovanému zobrazení dat s přednastavenými filtry, výběrem sloupců a řazením. Jde o běžný prvek v podnikových systémech (ERP, CRM), kde uživatelé pracují se stovkami až tisíci záznamů a potřebují rychle přepínat mezi různými perspektivami — například „nezaplacené objednávky za tento týden" nebo „produkty bez skladových zásob".

    Shopify Admin historicky nabízel filtry a vyhledávání jako oddělené komponenty, přičemž každá sekce (Orders, Products, Customers) měla vlastní implementaci. Postupnou unifikací UI — jejíž součástí jsou i dřívější redesigny jako vizuální hierarchie line items (březen 2026) nebo přepracování nastavení dopravy — Shopify konsoliduje interakční vzory napříč celou administrací. Motivací je snížení kognitivní zátěže obchodníků, kteří spravují více sekcí denně.

    Nový sjednocený bar propojuje fulltextové vyhledávání, inline filtrovací značky a přepínání saved views do jediného ovládacího prvku. Klávesové zkratky (mezerník pro filtry, uvozovky pro přesné shody) navazují na konvence zavedené v nástrojích pro vývojáře a power users. Integrace se Sidekick AI umožňuje přímou navigaci na filtrované pohledy přirozeným jazykem.

    Funkcionalita saved views doplňuje rozšíření filtrovacích možností Order API (Winter 2026), kde přibyly server-side filtry podle metafieldů, celkové hodnoty a váhy. Společně tvoří koherentní přístup k práci s daty — jak z pohledu obchodníka v Adminu, tak z pohledu vývojáře přistupujícího přes API.
  zdroje:
    - title: "Shopify Changelog: Search, filter, and saved views"
      url: "https://changelog.shopify.com/posts/search-filter-and-saved-views-for-orders-products-and-more"
    - title: "Order filtering: custom metafields, total value, weight"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/more-order-filtering-capabilities/"
    - title: "POS inline search suggestions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-find-products-inline-search/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Admin pages kombinují search, filtry a saved views v jednom baru. Klávesové zkratky a integrace se Sidekick pro rychlou navigaci."
tagy: [admin, search, filter, saved-views, ux]
---

## Co se mění
Admin pages (Orders, Products, Customers, Discounts, atd.) mají sjednocený **search + filter + saved views** bar. Klávesové zkratky pro rychlý přístup, integrace se **Sidekick** AI pro contextual help.

## Použití v Integrátoru
**Nepoužíváme** — UI improvement v Adminu, naše API queries beze změny.
