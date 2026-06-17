---
date: 2026-03-23
title: "pre_tax_price odstraněno z REST Admin API order line items"
title_en: "Removal of pre_tax_price from the Order REST Admin API"
slug: pretax-price-removed-rest
zdroj: https://shopify.dev/changelog/removal-of-pretaxprice-from-the-order-rest-admin-api
shrnuto_dne: 2026-04-29

kategorie: [breaking-change]
api_oblast: admin
api_verze: []
nalehavost: vysoka
customer_facing: false

ucinnost_od: 2026-03-23

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše integrace primárně používá GraphQL Admin API (23+ order methods). Pokud někde používáme REST Admin API pro order data, je nutné migrovat. Doporučení Shopify: GraphQL Admin API."
dotcene_klienty: []

kontext:
  background: |
    Pole `pre_tax_price` (a jeho párové `pre_tax_price_set`) existovalo na order line items v REST Admin API jako speciální rozšíření výhradně pro obchody využívající integraci Avalara AvaTax 1.0. Nejednalo se o standardní pole dostupné všem obchodům, ale o doplněk spjatý s konkrétní daňovou službou třetí strany.

    Avalara AvaTax 1.0 integrace byla Shopify označena za zastaralou v únoru 2025, čímž ztratila pole `pre_tax_price` svůj účel. REST Admin API obecně představuje starší vrstvu Shopify rozhraní, která je postupně nahrazována GraphQL Admin API nabízejícím strukturovanější přístup k datům prostřednictvím typovaných polí a `MoneyBag` objektů.

    V GraphQL Admin API jsou daňové a cenové informace na `LineItem` dostupné přes pole jako `originalUnitPriceSet`, `discountedUnitPriceSet`, `taxLines` a `discountAllocations`. Cenu před zdaněním lze odvodit kombinací těchto polí, případně nové pole `priceAfterAllDiscountsBeforeTaxesSet` dostupné od verze API 2026-07 tento výpočet přímo zpřístupňuje.

    Odstranění `pre_tax_price` je součástí širšího trendu ukončování REST API polí, která nemají přímý ekvivalent ve standardním GraphQL schématu — viz paralelní odebrání `DraftOrderLineItem.grams` nebo deprecace `LineItem.weight` v rámci stejného cyklu API verzí.
  zdroje:
    - title: "Removal of pre_tax_price from the Order REST Admin API"
      url: "https://shopify.dev/changelog/removal-of-pretaxprice-from-the-order-rest-admin-api"
    - title: "LineItem objekt — GraphQL Admin API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem"
    - title: "LineItem.priceAfterAllDiscountsBeforeTaxesSet v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/lineitem-price-after-discounts-before-taxes/"
    - title: "DraftOrderLineItem.grams pole odstraněno v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/draftorderlineitem-grams-removed/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Pole pre_tax_price je odstraněno z REST Admin API order line items — používat GraphQL Admin API."
tagy: [order, rest-api, deprecation, breaking, tax]
editions_release: spring-2026
---

## Co se mění
Pole `pre_tax_price` na order line items v **REST Admin API** je **odstraněno**. Pro výpočet částky před DPH použít GraphQL Admin API (typicky `originalUnitPriceSet` mínus tax allocations) nebo provést výpočet aplikačně.

## Časová osa
- **2026-03-23** — pole odstraněno z REST API

## Dopad pro nás
**Pro vývojáře:**
Naše integrace stojí primárně na GraphQL Admin API (máme 23+ metod). Ale pokud někde voláme REST endpoint typu `GET /admin/api/2024-X/orders/{id}.json` a parsujeme `pre_tax_price`, je nutné migrovat. Doporučuji grep `pre_tax_price` napříč repem.

**Pro PM / PO:**
Pokud klient čte tax-related data z naší integrace, je dobré ověřit konzistenci po migraci.

## Použití v Integrátoru
**Možná** — máme overhead pro REST API existují (legacy)? Doporučuji rychle prověřit grep před deployem na klienty s REST integrací.

## Rizika a edge cases
- Tax kalkulace v exportech do ERP/účetnictví musí být double-check po migraci
- Některé starší klientské integrace mohou stále používat REST — investigate
