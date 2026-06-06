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

kontext:
  background: |
    `view_key` je deterministický identifikátor cart line odvozený z kombinace variant ID a vlastních atributů (properties). Na rozdíl od interního `id`, který Shopify přiřazuje každé cart line dynamicky, je `view_key` stabilní a předvídatelný — frontend ho může vypočítat lokálně bez nutnosti čekat na serverovou odpověď.

    Storefront API existuje od raných dob Shopify Plus a slouží headless a custom storefront implementacím. Cart mutace (`cartLinesAdd`, `cartLinesUpdate`, `cartLinesRemove`) jsou základem každé custom cart UI. Historicky bylo nutné sledovat `id` každé line — problém nastával při „re-create" scénářích, kdy cart line dostala nové `id` po obnovení nebo přepočtu košíku. `view_key` tento problém řeší tím, že identifikace je deterministicky odvozená ze vstupních dat, nikoli přiřazená serverem.

    Prakticky tato změna nejvíce pomáhá headless storefront projektům (Hydrogen, Next.js Commerce, vlastní React/Vue frontendy), kde frontend drží lokální stav košíku. Při „dedup-update" flow — kdy se neví, zda line stále existuje pod stejným `id` — umožňuje `view_key` spolehlivou aktualizaci bez předchozího GET dotazu na celý košík.

    Změna je čistě aditivní; integrace postavené na `id` / `lineIds` fungují beze změny. `view_key` a `id` jsou vzájemně exkluzivní v rámci jedné mutace, nelze je kombinovat.
  zdroje:
    - title: "Shopify Changelog: Cart line mutations accept view_key"
      url: "https://shopify.dev/changelog/cart-line-mutations-accept-view-key"
    - title: "Storefront API: cartLinesUpdate mutace"
      url: "https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate"
    - title: "Nová discount pole v Storefront API cart types od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-cart-discount-fields/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
