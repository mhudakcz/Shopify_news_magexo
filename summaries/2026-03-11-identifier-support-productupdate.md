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
dukaz_integratoru: "Máme updateProduct, upsertProduct v shopify-client/admin/products (30+ product methods total). Identifier argument umožňuje update bez explicit ID lookup."
dotcene_klienty: []

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
**Ano** — máme `updateProduct`, `upsertProduct`, `getProductByIdentifier` v `shopify-client/admin/products`. Po upgrade na 2026-04 lze refaktorovat naše bulk sync flow.

## Rizika a edge cases
- `customId` musí být nakonfigurován v admin panelu klienta (Custom ID metafield)
- Při kolizi více productů se stejným handle/customId mutace selže s validation error
