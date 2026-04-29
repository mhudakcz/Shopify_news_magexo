---
date: 2026-04-01
title: "access pole na StandardMetaobjectDefinitionTemplate v 2026-07"
title_en: "Adding access field to StandardMetaobjectDefinitionTemplate"
slug: access-field-standardmetaobjectdefinitiontemplate
zdroj: https://shopify.dev/changelog/adding-access-field-to-standardmetaobjectdefinitiontemplate
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme metaobject methods včetně createMetaobjectDefinition. Standard templates jsou předdefinované templaty (např. pro produkty). Nové access pole zobrazí pravidla pro Storefront API."
dotcene_klienty: []
souvisejici: [removing-private-publicread-enums-metaobjects, app-owned-metaobjects-without-scopes]

tldr: "StandardMetaobjectDefinitionTemplate má nové access pole pro zobrazení Storefront API pravidel."
tagy: [metaobject, access, storefront, template]
---

## Co se mění
API verze **2026-07** přidává pole `access` na typ `StandardMetaobjectDefinitionTemplate`. Pole zobrazuje access pravidla šablony pro **Storefront API** — usnadňuje pochopit, jaký storefront read access daný template umožňuje.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Použití v Integrátoru
**Ano** — používáme metaobject methods. Pokud čteme/zobrazujeme standard templates v UI klientovi (např. picker pro typ metaobjektu), lze přidat `access` selector pro lepší kontext.
