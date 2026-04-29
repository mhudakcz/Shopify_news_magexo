---
date: 2026-03-13
title: "createdAt a updatedAt na MetaobjectDefinition od 2026-04"
title_en: "Adding createdAt and updatedAt fields to MetaobjectDefinition objects"
slug: createdat-updatedat-metaobject-definition
zdroj: https://shopify.dev/changelog/adding-createdat-and-updatedat-fields-to-metaobjectdefinition-objects
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme metaobject methods včetně getMetaobjectDefinitionByType. Přidání timestamp fields umožňuje audit a sync logiku."
dotcene_klienty: []

tldr: "API 2026-04: MetaobjectDefinition má pole createdAt a updatedAt timestamps."
tagy: [metaobject, definition, timestamps, audit]
---

## Co se mění
Typ `MetaobjectDefinition` v API **2026-04** má nová timestamp pole `createdAt` a `updatedAt`. Užitečné pro audit (kdy byla definice naposled změněna) a sync logiku (delta query — jen nedávno změněné).

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Ano** — `getMetaobjectDefinitionByType` nově může vrátit timestamps. Užitečné pokud cachujeme metaobject schema klientskou stranou — invalidate cache na základě `updatedAt`.
