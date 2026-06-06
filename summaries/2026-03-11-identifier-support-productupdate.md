---
date: 2026-03-11
title: "productUpdate podporuje identifier (id, handle, customId)"
title_en: "Identifier support added to the productUpdate mutation"
slug: identifier-support-productupdate
zdroj: https://shopify.dev/changelog/identifier-support-added-to-the-productupdate-mutation
shrnuto_dne: 2026-04-29

kategorie: [nova-api, integrace]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme updateProduct, upsertProduct v naší integraci (30+ product methods total). Identifier argument umožňuje update bez explicit ID lookup."
dotcene_klienty: []

kontext:
  background: |
    Mutace `productUpdate` je základní stavební kámen Admin GraphQL API pro správu produktového katalogu v Shopify. Historicky vyžadovala, aby volající systém znal interní Shopify ID produktu — globální identifikátor ve formátu `gid://shopify/Product/123`. To znamenalo nutnost provést předběžný dotaz (zpravidla `product(handle: "...")`) jen kvůli získání tohoto ID.

    Shopify Admin GraphQL API existuje od roku 2019 a postupně nahrazuje starší REST Admin API. Jedním z dlouhodobých friction pointů při integraci externích systémů — zejména ERP, PIM nebo skladových systémů — bylo právě toto dvoukolové vyhledávání produktu. Nový vstupní objekt `ProductIdentifierInput` je součástí širšího trendu DX (developer experience) zlepšení, kdy Shopify přidává flexibilní identifikátory napříč API (podobný vzor byl zaveden např. u zákazníků přes `customerIdentifier`).

    `ProductIdentifierInput` přijímá právě jedno z polí: `id` (globální GID), `handle` (URL-přívětivý textový slug) nebo `customId` (hodnota vlastního metafieldu definovaného obchodníkem). Díky tomu lze produkty aktualizovat přímo z externího systému pomocí jeho vlastního klíče, bez mezikroku přes GET endpoint. To snižuje latenci, počet API volání a celkovou složitost integračního kódu.

    Tento vzor flexibilní identifikace pravděpodobně Shopify rozšíří i na další mutace (varianty, kolekce), jak roste důraz na přímou integraci ERP a PIM systémů s Shopify bez nutnosti lokálního mapování interních ID.
  zdroje:
    - title: "Identifier support added to the productUpdate mutation — Shopify Changelog"
      url: "https://shopify.dev/changelog/identifier-support-added-to-the-productupdate-mutation"
    - title: "ProductIdentifierInput — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductIdentifierInput"
    - title: "Publish/unpublish product variants nezávisle od produktu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Mutace productUpdate od 2026-04 přijímá identifier (id, handle, customId) — méně round-tripů."
tagy: [product, update, dx, lookup]
---

## Co se mění
Mutace `productUpdate` v API **2026-04** přijímá nový argument `identifier` typu `ProductIdentifierInput` — lze předat **id, handle, nebo customId**. Bez nutnosti předem volat get by handle a získat ID. Užitečné při bulk syncs z externího systému (typicky ERP), kde znáš jen SKU/external ID.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
`updateProduct` a `upsertProduct` lze refaktorovat — místo dvou volání (`getProductByHandle` → `productUpdate(id)`) jedno volání s `identifier: { handle: "..." }`. Šetří round-trip při bulk operations.

**Pro PM / PO:**
Performance benefit při sync s ERP — rychlejší údržba katalogu.

## Použití v Integrátoru
**Ano** — máme `updateProduct`, `upsertProduct`, `getProductByIdentifier` v naší integraci. Po upgrade na 2026-04 lze refaktorovat naše bulk sync flow.

## Rizika a edge cases
- `customId` musí být nakonfigurován v admin panelu klienta (Custom ID metafield)
- Při kolizi více productů se stejným handle/customId mutace selže s validation error
