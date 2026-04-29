---
date: 2026-02-04
title: "Compare-at prices v B2B catalogs přes Admin (bez CSV/API)"
title_en: "Compare-at Prices in Catalogs"
slug: compare-at-prices-catalogs
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme catalog methods (createCatalog, updateCatalogContext atd.) pro B2B price lists. Compare-at prices lze nyní nastavit přímo v admin UI bez nutnosti CSV nebo API hacks."
dotcene_klienty: []
souvisejici: [erp-systems-integration-b2b]

tldr: "Compare-at prices (přeškrtnutá cena) lze nově nastavit v B2B catalogs přímo z Adminu, bez CSV importu nebo API workaroundu."
tagy: [b2b, catalog, pricing, compare-at]
---

## Co se mění
Pro B2B price-list catalogs (typicky tier pricing pro různé skupiny zákazníků) lze nyní nastavit **compare-at prices** (přeškrtnutá MSRP cena) **přímo v Shopify Adminu** — předtím to vyžadovalo CSV import nebo API hack. Užitečné pro „MSRP vs. wholesale" pricing.

## Použití v Integrátoru
**Možná** — máme catalog methods. Pokud klient zatím setuploval compare-at přes naše API workarounds, může nyní přejít na admin UI. Nebo lze rozšířit naše integrace o explicit compareAtPrice field v catalog mutations.
