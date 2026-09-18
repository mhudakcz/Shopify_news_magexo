---
date: 2026-09-15
title: "Catalog search: filtrování podle media type"
title_en: "Filter Catalog search results by media type"
slug: catalog-search-filter-by-media-type
zdroj: https://shopify.dev/changelog/filter-catalog-search-results-by-media-type
shrnuto_dne: 2026-09-18
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nástroje nad Catalog API pro AI agenty nebo AR/3D shopping flow, filtr podle media type nám ušetří ruční procházení produktů kvůli chybějícím assetům."
dotcene_klienty: []
souvisejici: [shopify-catalog-api-deep-dive, sponsored-products-catalog-api, storefront-catalog-mcp-ucp]
tldr: "Shopify Catalog API teď umí filtrovat výsledky vyhledávání podle typu media (obrázek, video, 3D model) a vrací video i 3D assety vedle obrázků."
tagy: [catalog, search, filter, media-type, products, admin]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Catalog API (Global Catalog) slouží primárně AI agentům a shopping nástrojům k vyhledávání a načítání produktů napříč celým ekosystémem Shopify merchantů přes standardizované metody `search_catalog`, `get_product` a `lookup_catalog`. Doteď tyto metody vracely hlavně obrázky produktů — video a 3D modely, i když je merchant měl nahrané, nebyly součástí odpovědi ani se podle nich nedalo filtrovat.

    Nová changelog položka mění obě věci najednou. Zaprvé, všechny tři zmíněné endpointy teď vedle obrázků vrací i video a 3D model assety. Zadruhé přibyl volitelný filtr `catalog.filters.media`, který přijímá hodnoty `image`, `video` nebo `model_3d`. Pokud zadáte víc hodnot najednou, kombinují se logikou AND — vrátí se jen produkty, které mají všechny požadované typy media současně. Neznámý typ media request nezhodí chybou, jen se zmíní v response message, což je rozumné chování pro postupně rostoucí seznam podporovaných typů.

    Nové media typy (video, 3D model) vyžadují draftovou verzi Shopify global Catalog extension (`dev.shopify.catalog.global`). Podle Shopify je motivace jasná: bez filtru museli vývojáři nejdřív natáhnout produkty, projít je a ručně vyřadit ty bez použitelného media — typicky u AR náhledů, 3D prohlížečů nebo camera-first nakupování, kde je konkrétní typ assetu podmínkou pro funkčnost. Filtr tenhle krok eliminuje a URL assetů vrací rovnou v odpovědi.
  zdroje:
    - title: "Shopify: Filter Catalog search results by media type"
      url: "https://shopify.dev/changelog/filter-catalog-search-results-by-media-type"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

`search_catalog`, `get_product` a `lookup_catalog` v Catalog API teď vedle obrázků vrací i video a 3D model assety a podporují nový volitelný filtr `catalog.filters.media` s hodnotami `image`, `video` a `model_3d`. Víc hodnot se kombinuje přes AND — vrátí se jen produkty, které mají všechny vyžadované typy media zároveň. Neznámé hodnoty filtru nezpůsobí chybu, jen se objeví v response message. Video a 3D assety navíc vyžadují draftovou verzi Shopify global Catalog extension (`dev.shopify.catalog.global`).

## Časová osa

- 2026-09-15 — změna live v Catalog API (dev-changelog)

## Dopad pro nás

**Pro vývojáře:** Pokud někdo stavěl nad Catalog API vlastní logiku pro filtrování produktů podle dostupného media (např. hledání produktů bez 3D modelu kvůli doplnění), tenhle ruční pattern (fetch → kontrola → zahození) teď nahradí jeden parametr requestu. Pro práci s video/3D assety je potřeba mít zapnutou draftovou verzi `dev.shopify.catalog.global` extension.

**Pro PM / PO:** Jde o nízkoprioritní rozšíření admin/agentic API bez dopadu na běžící klientská řešení — relevantní jen pokud plánujeme nebo stavíme AI shopping agenty, AR náhledy nebo podobné funkce nad Shopify Global Catalog.

## Použití v Integrátoru

Aktuálně nemáme use-case, který by Catalog API s filtrem media type přímo využíval. Je to potenciálně zajímavé, pokud bychom v budoucnu stavěli nástroje pro AI agenty nebo AR/3D prezentaci produktů nad Global Catalog.
