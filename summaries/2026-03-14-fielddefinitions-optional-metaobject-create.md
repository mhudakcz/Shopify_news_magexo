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

kontext:
  background: |
    Metaobject definice (MetaobjectDefinition) je schéma, které popisuje strukturu vlastního datového typu v Shopify. Každá definice určuje název (type), popisek a sadu polí (fieldDefinitions) — každé pole má svůj klíč, datový typ (text, číslo, reference na produkt apod.) a validační pravidla. Samotné záznamy (metaobjects) pak odpovídají tomuto schématu a jsou uloženy jako strukturovaná data v obchodě.

    Metaobjekty byly do Shopify přidány jako obecnější náhrada za metafields pro komplexní struktury: umožňují vytvářet libovolné datové modely (například FAQ, tým, produkt sezóny) bez nutnosti externí databáze. Mutace metaobjectDefinitionCreate je vstupním bodem celého životního cyklu — bez ní nelze vytvářet záznamy. Historicky vyžadovala alespoň jedno pole v fieldDefinitions, což komplikovalo scénáře, kdy se schéma buduje dynamicky nebo ve více krocích.

    Volitelnost fieldDefinitions umožňuje dvoustupňový setup: nejprve vytvořit "prázdnou" definici (a získat handle nebo ID), a teprve v druhém kroce doplnit pole přes metaobjectDefinitionUpdate. To zjednodušuje programatické provisioning definic v aplikacích, které generují schéma dynamicky nebo podle konfigurace od uživatele.

    Tato změna zapadá do série úprav metaobject API v roce 2026: přidání timestamps (createdAt/updatedAt), zrušení deprecated access enumů (PRIVATE/PUBLIC_READ) a uvolnění požadavku na access scopes pro app-owned metaobjects.
  zdroje:
    - title: "Shopify Changelog: Making fieldDefinitions optional in metaobjectDefinitionCreate"
      url: "https://shopify.dev/changelog/making-fielddefinitions-optional-in-metaobjectdefinitioncreate"
    - title: "Shopify Docs: metaobjectDefinitionCreate mutation"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate"
    - title: "Archiv: createdAt a updatedAt na MetaobjectDefinition od 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/createdat-updatedat-metaobject-definition/"
    - title: "Archiv: App-owned metaobjects ($app prefix) nepotřebují access scopes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-owned-metaobjects-without-scopes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
