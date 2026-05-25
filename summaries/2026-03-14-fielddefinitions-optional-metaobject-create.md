---
date: 2026-03-14
title: "fieldDefinitions volitelné v metaobjectDefinitionCreate"
title_en: "Making fieldDefinitions optional in metaobjectDefinitionCreate"
slug: fielddefinitions-optional-metaobject-create
zdroj: https://shopify.dev/changelog/making-fielddefinitions-optional-in-metaobjectdefinitioncreate
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Používáme createMetaobjectDefinition v naší integraci. Pole fieldDefinitions je nyní volitelné — lze vytvořit definici a pole přidávat postupně."
dotcene_klienty: []

tldr: "Od dubna 2026 je fieldDefinitions argument volitelný v metaobjectDefinitionCreate."
tagy: [metaobject, definition, dx]
---

## Co se mění
Mutace `metaobjectDefinitionCreate` má od **dubna 2026** argument `fieldDefinitions` jako **volitelný**. Lze vytvořit prázdnou definici a fields přidávat postupně přes `metaobjectDefinitionUpdate`. Cíl: lepší DX pro programatické vytváření definic.

## Časová osa
- **2026-04-01** — chování aktivní

## Dopad pro nás
**Pro vývojáře:**
Naše `createMetaobjectDefinition` calls mohou být volně bez `fieldDefinitions`. Konkrétně užitečné, pokud máme dvoustupňový setup: nejdřív vytvořit definici (pro získání ID/handle), pak doplnit fields.

## Použití v Integrátoru
**Ano** — `createMetaobjectDefinition` je v naší integraci. Backwards compatible change.
