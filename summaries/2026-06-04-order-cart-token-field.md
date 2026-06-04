---
date: 2026-06-04
title: "Order.cartToken v GraphQL Admin API (2026-07)"
title_en: "New cartToken field added to the Order object"
slug: order-cart-token-field
zdroj: https://shopify.dev/changelog/new-field-carttoken-added-to-the-order-graphql-admin-api
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme order methods (23+). cartToken je užitečný pro spárování order s cart session — typicky pro tracking konverze nebo abandoned cart recovery flow."
dotcene_klienty: []
souvisejici: [pretax-price-removed-rest]

tldr: "Pole `cartToken` na Order v GraphQL Admin API 2026-07 — ekvivalent REST `cart_token`. Token cartu, ze kterého order vznikl. Pro tracking + spárování abandoned cart flow. _Původně publikováno 12. 5. 2026 (audit doplnění)._"
tagy: [order, cart, token, tracking]
---

## Co se mění
GraphQL Admin API verze **2026-07** přidává pole `cartToken` na typ `Order`. Vrací token cartu, ze kterého objednávka vznikla — stejný token, který byl už dříve k dispozici v REST API jako `cart_token`. Konsoliduje GraphQL s REST.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pro tracking + analytics: lze nyní v jednom GraphQL queries spárovat order s cart session (abandoned cart recovery, attribution analysis). Naše order queries lze rozšířit o `cartToken` selektor.

## Použití v Integrátoru
**Ano** — order export do analytics/CRM systému může nově ulehčit attribution. Po upgrade na 2026-07.
