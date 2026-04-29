---
date: 2026-03-17
title: "isActive pole na InventoryLevel v 2026-04"
title_en: "Add isActive field to InventoryLevel"
slug: isactive-field-inventorylevel
zdroj: https://shopify.dev/changelog/add-isactive-field-to-inventorylevel
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem). isActive flag rozliší aktivní a deaktivované inventory levels — užitečné pro filtraci."
dotcene_klienty: []
souvisejici: [includeinactive-arg-inventorylevels]

tldr: "API 2026-04 přidává isActive boolean na InventoryLevel pro rozlišení aktivních a deaktivovaných úrovní."
tagy: [inventory, inventory-level, status]
---

## Co se mění
Typ `InventoryLevel` v Admin GraphQL API verze **2026-04** má nové pole `isActive: Boolean`. Rozlišuje **aktivní** inventory levels (počítané do dostupnosti, mohou se měnit) od **deaktivovaných** (zachovaná historie, ale nepočítají se).

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Naše inventory queries mohou nově filtrovat aktivní vs. neaktivní levels. Užitečné při sync inventury — neaktivní levels často naznačují uzavřené sklady, které netřeba synchronizovat.

**Pro PM / PO:**
Cleaner inventory data pro klienty s mnoha lokacemi.

## Použití v Integrátoru
**Ano** — máme `inventoryActivate` a další methods. Po upgrade na 2026-04 lze přidat `isActive` selektor do queries.

## Související
- [includeInactive argument na inventoryLevels](../zmena/2026-03-17-includeinactive-arg-inventorylevels/)
