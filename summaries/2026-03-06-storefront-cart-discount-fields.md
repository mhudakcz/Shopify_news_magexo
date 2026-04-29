---
date: 2026-03-06
title: "Nová discount pole v Storefront API cart types od 2026-07"
title_en: "New discount fields in the Storefront API's cart types"
slug: storefront-cart-discount-fields
zdroj: https://shopify.dev/changelog/new-discount-fields-in-the-storefront-cart-graphql-api
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation, nova-api]
api_oblast: storefront
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Máme storefront discount methods minimálně, primárně pracujeme s Admin API. Pokud klient má custom storefront (Hydrogen/headless), může být relevantní."
dotcene_klienty: []
souvisejici: [add-tags-to-discounts]

tldr: "Storefront API 2026-07 deprecuje cart.discountAllocations; nahrazují discountApplications a sourceDiscountApplication."
tagy: [storefront, cart, discount, deprecation]
---

## Co se mění
Storefront API verze **2026-07** **deprecuje** pole `cart.discountAllocations` a zavádí nová strukturovanější pole:
- **`discountApplications`** — všechny aplikované discounts na cart, včetně typu a hodnoty
- **`sourceDiscountApplication`** — odkaz z `lineItem.discountAllocation` na konkrétní discount application

Cíl: čistší model pro headless storefronts, kde frontend renderuje detailní discount breakdown.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, deprecation oznámeno

## Dopad pro nás
**Pro vývojáře:**
Naše integrace primárně používá Admin API. Storefront API používáme minimálně. Pokud klient má **Hydrogen** nebo jiný headless storefront a my mu poskytujeme cart enrichment přes Storefront API, je třeba migrovat.

**Pro PM / PO:**
Týká se klientů s custom frontendem (typicky agency-built storefronts).

## Použití v Integrátoru
**Nepoužíváme** — Storefront API discount fields aktivně nečteme. V budoucnu, pokud napojíme headless flow, použít nový model.
