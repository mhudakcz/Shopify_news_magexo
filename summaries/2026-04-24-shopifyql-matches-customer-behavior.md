---
date: 2026-04-24
title: "MATCHES operator v ShopifyQL pro filtraci dle chování zákazníků"
title_en: "Use MATCHES in ShopifyQL to filter by what customers did"
slug: shopifyql-matches-customer-behavior
zdroj: https://changelog.shopify.com/posts/use-matches-in-shopifyql-to-filter-by-what-customers-did
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "ShopifyQL je query language pro Analytics, my analytics queries nepoužíváme."
tldr: "ShopifyQL podporuje MATCHES operator ve WHERE klauzuli pro filtrování reportů podle vzorců chování zákazníků — sjednocuje logiku s Customer Segmentation."
tagy: [shopifyql, analytics, customer-segmentation, matches]
---

## Co se mění
**ShopifyQL** (analytics query language) přidává **`MATCHES`** operator do WHERE klauzule. Lze filtrovat reporty podle behaviorálních vzorců zákazníků (typicky „nakoupil X, ale nenakoupil Y", „returner customer", apod.). Logika sjednocena s Customer Segmentation.

## Použití v Integrátoru
**Nepoužíváme** — ShopifyQL queries pro analytics neimplementujeme.
