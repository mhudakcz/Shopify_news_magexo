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

kontext:
  background: |
    Cart token je unikátní řetězec, který Shopify generuje při vzniku nákupního košíku a přiřazuje mu jej jako identifikátor session. Jde o trvalý odkaz na celý životní cyklus košíku — od prvního přidání zboží až po dokončení objednávky nebo opuštění. Hodnota se nemění po dobu existence košíku, takže slouží jako spolehlivý klíč pro spárování různých událostí v životním cyklu jedné nákupní session.

    Pole `cart_token` existuje v Shopify REST Admin API od jeho rané éry a bylo standardní součástí order exportů. Přechod ekosystému na GraphQL Admin API byl však do nedávna poznamenán chybějící paritou — vývojáři migrující z REST museli token obcházet nebo ho kombinovat s jinými identifikátory. Přidání `cartToken` do GraphQL sjednocuje oba přístupy a navazuje na dlouhodobý trend Shopify: REST a GraphQL Admin API by měla nabízet funkčně srovnatelné datové modely, přičemž GraphQL je deklarovanou budoucností platformy.

    Nejčastější využití zahrnuje abandoned cart recovery (spárování nedokončeného košíku s výslednou objednávkou), attribution analýzu a debugování checkout flow. V kombinaci s analytics nebo CRM systémy umožňuje `cartToken` sledovat celou konverzní cestu zákazníka — od chvíle, kdy poprvé přidal produkt do košíku, až po finální nákup — a to v jednom GraphQL dotazu bez nutnosti volat REST endpoint.

  zdroje:
    - title: "Shopify Changelog: New field cartToken added to the Order GraphQL Admin API"
      url: "https://shopify.dev/changelog/new-field-carttoken-added-to-the-order-graphql-admin-api"
    - title: "Shopify Archive: Odebrání pre_tax_price z REST Order API (REST→GraphQL migrace)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pretax-price-removed-rest/"
    - title: "Shopify Archive: Storefront cart discount fields v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-cart-discount-fields/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
