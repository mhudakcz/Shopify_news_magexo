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

kontext:
  background: |
    StandardMetaobjectDefinitionTemplate je předdefinovaná šablona v Shopify Admin GraphQL API, která slouží jako vzorová konfigurace pro rychlé a konzistentní vytváření definic metaobjectů. Na rozdíl od ručně sestavené `MetaobjectDefinition` nabízí šablona předem nakonfigurovanou strukturu polí, capabilities a zobrazovací metadata — například šablona pro produktové recenze nebo autorské profily. Merchant nebo vývojář ji použije jako výchozí bod při vytváření nové definice metaobjektu místo návrhu od nuly.

    Metaobjecty v Shopify mají granulární model řízení přístupu: `MetaobjectAdminAccess` určuje, kdo smí data číst a zapisovat přes Admin API, zatímco `MetaobjectStorefrontAccess` řídí přístup z veřejného Storefront API. Storefront přístup je klíčový pro headless a kompozitní commerce architektury, kde frontend aplikace čtou data přímo přes Storefront API bez mezivrstvy. Dosud nebylo snadné zjistit, jaká přístupová pravidla standardní šablona implicitně nastavuje — vývojář to musel dohledat v dokumentaci nebo si šablonu nejprve aplikovat a zpětně přečíst.

    Nové pole `access` na `StandardMetaobjectDefinitionTemplate` tuto mezeru odstraňuje: vrací nastavení Storefront API access přímo v dotazu na seznam dostupných šablon. Vývojáři tak mohou předem ověřit, zda šablona odpovídá požadovanému přístupovému modelu jejich storefrontu, a vybrat správnou šablonu bez trial-and-error. Tato změna navazuje na souběžné úpravy v API 2026-07 — zejména odstranění deprecated enum hodnot `PRIVATE` a `PUBLIC_READ` z `MetaobjectAdminAccess`.
  zdroje:
    - title: "Shopify Changelog: Adding access field to StandardMetaobjectDefinitionTemplate"
      url: "https://shopify.dev/changelog/adding-access-field-to-standardmetaobjectdefinitiontemplate"
    - title: "Shopify Docs: StandardMetaobjectDefinitionTemplate (Admin GraphQL)"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate"
    - title: "Archiv: Odstranění PRIVATE/PUBLIC_READ enumů na metaobject definitions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/removing-private-publicread-enums-metaobjects/"
    - title: "Archiv: App-owned metaobjects bez access scopes (2026-04)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-owned-metaobjects-without-scopes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "StandardMetaobjectDefinitionTemplate má nové access pole pro zobrazení Storefront API pravidel."
tagy: [metaobject, access, storefront, template]
---

## Co se mění
API verze **2026-07** přidává pole `access` na typ `StandardMetaobjectDefinitionTemplate`. Pole zobrazuje access pravidla šablony pro **Storefront API** — usnadňuje pochopit, jaký storefront read access daný template umožňuje.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Použití v Integrátoru
**Ano** — používáme metaobject methods. Pokud čteme/zobrazujeme standard templates v UI klientovi (např. picker pro typ metaobjektu), lze přidat `access` selector pro lepší kontext.
