---
date: 2026-06-12
title: "viewKey pole nově dostupné na CartLine v Storefront API 2026-07"
title_en: "Read a cart line's viewKey from the CartLine type"
slug: cart-line-view-key-field
zdroj: https://shopify.dev/changelog/cart-line-view-key-field
shrnuto_dne: 2026-06-16
kategorie: [nova-api]
api_oblast: storefront
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Storefront cart flow — relevantní pro klienty s Hydrogen/custom storefronts."
dotcene_klienty: []
souvisejici: ["cart-line-mutations-view-key", "storefront-cart-discount-fields"]
kontext:
  background: |
    `view_key` je deterministický identifikátor cart line odvozený z kombinace variant ID a vlastních atributů (properties). Vznikl jako reakce na problém při práci s více slevovými řádky najednou — kdy bylo obtížné na klientské straně spárovat mutační vstup s konkrétní line ve výsledné odpovědi serveru, protože `id` je přiřazeno serverem a mění se při re-create scénářích.

    V Storefront API 2026-07 přibyla nejprve podpora pro odesílání `view_key` do mutací `cartLinesUpdate` a `cartLinesRemove` (changelog 2026-06-02). Tím Shopify umožnil frontend klientům identifikovat cart line deterministicky, bez nutnosti znát serverové `id`. Nyní je cyklus dokončen: typ `CartLine` vrací pole `viewKey` zpět v odpovědi, takže klient může jednoduše ověřit, která line odpovídá jeho vstupu — tzv. **read-after-write** pattern.

    V praxi to zjednodušuje implementaci headless storefront cart UI (Hydrogen, Next.js Commerce, vlastní React/Vue frontendy). Při aktualizaci nebo mazání lines klient pošle operaci s `view_key`, a v odpovědi rovnou přečte `viewKey` na každém `CartLine` node — párování je okamžité a spolehlivé bez dalšího GET dotazu. Změna je plně aditivní; existující logika postavená na UUID `id` funguje beze změny.
  zdroje:
    - title: "Shopify Changelog: CartLine viewKey field"
      url: "https://shopify.dev/changelog/cart-line-view-key-field"
    - title: "Shopify Changelog: Cart line mutations accept view_key"
      url: "https://shopify.dev/changelog/cart-line-mutations-accept-view-key"
    - title: "Storefront API 2026-07: cartLinesUpdate"
      url: "https://shopify.dev/docs/api/storefront/2026-07/mutations/cartLinesUpdate"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Storefront API 2026-07: `CartLine` type nyní vrací pole `viewKey`, které odpovídá `view_key` odeslanému v `cartLinesUpdate` / `cartLinesRemove`. Dokončuje read-after-write cyklus — headless cart implementace mohou spolehlivě párovat response line s mutation inputem bez extra GET dotazu."
tagy: [cart, view-key, storefront, headless]
zdroj_kanal: dev-changelog
---

## Co se mění
Storefront GraphQL API verze **2026-07** přidává pole `viewKey` na typ `CartLine`. Toto pole vrací hodnotu, která odpovídá `view_key` odeslanému klientem v mutacích `cartLinesUpdate` a `cartLinesRemove`.

```graphql
query CartLines($cartId: ID!) {
  cart(id: $cartId) {
    lines(first: 10) {
      edges {
        node {
          id
          viewKey
        }
      }
    }
  }
}
```

Změna je **čistě aditivní** — existující integrace používající UUID `id` fungují beze změny.

## Časová osa
- **2026-06-02** — Mutace `cartLinesUpdate` a `cartLinesRemove` začínají přijímat `view_key` jako vstupní identifikátor (předchůdce této změny)
- **2026-06-12** — Oznámení: typ `CartLine` vrací `viewKey` v odpovědi
- **2026-07-01** — API verze 2026-07 vstupuje v platnost

## Dopad pro nás
**Pro vývojáře:**
Pokud projekt využívá headless storefront s custom cart UI nad Storefront API, `viewKey` v odpovědi `CartLine` uzavírá read-after-write smyčku: klient odešle operaci s `view_key`, a response line lze rovnou spárovat bez dalšího síťového dotazu. Pro Admin-API-first stack přímý dopad žádný.

**Pro PM / PO:**
Žádná povinná akce. Pro klienty s Hydrogen nebo custom headless storefrontem jde o quality-of-life zlepšení pro frontend devy — jednodušší, spolehlivější cart manipulation.

## Použití v Integrátoru
**Možná** — Storefront Cart API přímo nepoužíváme, ale pro headless projekty klientů, kde se spravuje cart flow přes naši vrstvu, je `viewKey` na `CartLine` preferovaná cesta pro párování mutation input ↔ response. Přínos roste spolu s komplexností košíku (více lines, slevové stackingy, dedup-update scénáře).
