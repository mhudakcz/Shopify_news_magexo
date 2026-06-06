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

kontext:
  background: |
    `MetaobjectDefinition` je typ v Shopify Admin GraphQL API, který funguje jako schéma pro vlastní datové struktury v obchodě. Každá definice určuje název, typ, přístupová pravidla a sadu polí (`fieldDefinitions`), podle nichž se pak vytvářejí jednotlivé metaobjekty — konkrétní záznamy s hodnotami.

    Metaobjekty byly do Shopify Admin API uvedeny jako flexibilní alternativa k metafields pro ukládání strukturovaných vlastních dat. Zatímco metafields se váží na existující typy (produkt, varianta, zákazník), metaobjekty definují zcela nové entity libovolného tvaru. Definice jako celek je záznamem konfigurace — v dosavadní API ji šlo vytvořit, upravit nebo smazat, ale bez informace o tom, kdy k tomu došlo.

    Přidání `createdAt` a `updatedAt` sjednocuje `MetaobjectDefinition` s ostatními Shopify typy, kde timestampy patří ke standardní sadě polí (produkt, objednávka, definice metafields). Umožňuje vývojářům sestavit přírůstkovou synchronizaci: místo plného výpisu definic stačí periodicky dotazovat jen ty změněné po daném čase. Jde o konzistentní přístup, který Shopify postupně rozšiřuje napříč Admin API za účelem snížení datového zatížení při integracích.
  zdroje:
    - title: "Changelog: Adding createdAt and updatedAt fields to MetaobjectDefinition objects"
      url: "https://shopify.dev/changelog/adding-createdat-and-updatedat-fields-to-metaobjectdefinition-objects"
    - title: "Shopify Admin GraphQL API: MetaobjectDefinition"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition"
    - title: "fieldDefinitions volitelné v metaobjectDefinitionCreate"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/fielddefinitions-optional-metaobject-create/"
    - title: "Odstranění deprecated PRIVATE/PUBLIC_READ enumů na metaobject definitions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/removing-private-publicread-enums-metaobjects/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-04: MetaobjectDefinition má pole createdAt a updatedAt timestamps."
tagy: [metaobject, definition, timestamps, audit]
---

## Co se mění
Typ `MetaobjectDefinition` v API **2026-04** má nová timestamp pole `createdAt` a `updatedAt`. Užitečné pro audit (kdy byla definice naposled změněna) a sync logiku (delta query — jen nedávno změněné).

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Ano** — `getMetaobjectDefinitionByType` nově může vrátit timestamps. Užitečné pokud cachujeme metaobject schema klientskou stranou — invalidate cache na základě `updatedAt`.
