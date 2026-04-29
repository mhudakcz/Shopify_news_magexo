---
date: 2026-03-17
title: "includeInactive argument pro inventoryLevels v 2026-04"
title_en: "Add includeInactive argument to inventoryLevels and inventoryLevel fields"
slug: includeinactive-arg-inventorylevels
zdroj: https://shopify.dev/changelog/add-includeinactive-argument-to-inventorylevels-and-inventorylevel-fields
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme inventory methods. Argument includeInactive umožňuje query načíst i deaktivované inventory levels (defaultně skryté)."
dotcene_klienty: []
souvisejici: [isactive-field-inventorylevel]

tldr: "API 2026-04: argument includeInactive umožňuje query inactive inventory levels."
tagy: [inventory, inventory-level, query]
---

## Co se mění
Pole `inventoryLevels` a `inventoryLevel` v Admin GraphQL API verze **2026-04** mají volitelný argument `includeInactive: Boolean`. Defaultně `false` — vrátí jen aktivní levels (kompatibilní s předchozím chováním). Při `true` zahrne i deaktivované.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Ano** — máme inventory methods. Defaultní chování zůstává — backwards compatible. Pokud chceme audit/history view, lze argument využít.

## Související
- [isActive pole na InventoryLevel](../zmena/2026-03-17-isactive-field-inventorylevel/)
