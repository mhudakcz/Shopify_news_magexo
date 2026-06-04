---
date: 2026-06-02
title: "cartLinesUpdate a cartLinesRemove přijímají view_key (Storefront API 2026-07)"
title_en: "Identify cart lines by view_key in cartLinesUpdate and cartLinesRemove"
slug: cart-line-mutations-view-key
zdroj: https://shopify.dev/changelog/cart-line-mutations-accept-view-key
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api]
api_oblast: storefront
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Storefront Cart API. Pokud klient má custom headless storefront a my mu poskytujeme cart manipulation, lze nově identifikovat lines přes view_key (typicky odvozený z product variant + properties)."
dotcene_klienty: []
souvisejici: [storefront-cart-discount-fields, product-unavailable-buyer-location-warning]

tldr: "Storefront API 2026-07: `cartLinesUpdate` přijímá `viewKey` (per input) a `cartLinesRemove` přijímá `viewKeys` list. Alternativa k `id` / `lineIds` — mutually exclusive. Backwards compatible."
tagy: [storefront, cart, view-key, mutations]
---

## Co se mění
Storefront GraphQL API verze **2026-07** rozšiřuje dvě cart mutace o identifikaci přes **`view_key`** (místo či vedle `id`):
- **`cartLinesUpdate`** — každý input může mít `viewKey` namísto `id`
- **`cartLinesRemove`** — přijímá `viewKeys` array namísto `lineIds`

`view_key` je deterministický identifier vázaný na variant + properties kombinaci (stabilnější než `id` při refresh / re-create cart line). **Mutually exclusive** s id-based identifikací — jedno NEBO druhé v rámci jedné mutace.

**Backwards compatible:** existující integrace s `id` / `lineIds` fungují beze změny.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud klient má **headless storefront** s custom cart UI nad naší integrací, `view_key` může zjednodušit cart manipulation (zejména „dedup-update" flow, kde nevíš jistě, jestli line byla recreated mezi requesty). Pro náš Admin-API-first stack přímý dopad žádný.

**Pro PM / PO:**
Žádná akce. Pro klienty s headless / custom storefronts je to quality-of-life pro frontend devy.

## Použití v Integrátoru
**Možná** — Storefront Cart API direct nepoužíváme, ale pokud někdy povedeme headless projekt, view_key je preferovaná cesta.

## Související
- [PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION warning v Cart](../zmena/product-unavailable-buyer-location-warning/)
- [Nová discount pole v Storefront Cart](../zmena/storefront-cart-discount-fields/)
