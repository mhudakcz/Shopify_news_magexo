---
date: 2026-02-04
title: "Combine Bundle Options v Shopify Bundles app"
title_en: "Combine Bundle Options"
slug: combine-bundle-options
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Bundles je oficiální Shopify aplikace. Naše integrace bundles direct neimplementují, čteme produkty/varianty přes standardní queries."
dotcene_klienty: []

tldr: "Shopify Bundles app umí kombinovat options (např. velikost + délka) v jednom bundlu."
tagy: [bundle, product, variant, app]
---

## Co se mění
**Shopify Bundles app** podporuje kombinaci více **product options** v rámci jednoho bundlu — např. produkt s variantami velikost × délka × barva, kde bundle vybírá kombinaci jako celek.

## Použití v Integrátoru
**Nepoužíváme** přímo — Bundles je merchant-installed app. Naše product queries vrátí bundle jako standardní produkt s variants. Pokud klient bundle aktivně používá, čtení dat zůstává stejné.
