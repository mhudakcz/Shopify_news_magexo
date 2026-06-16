---
date: 2026-06-11
title: "Streamlined Metaobject API: nová `values` property v 2026-07"
title_en: "Streamlined Metaobject API"
slug: streamlined-metaobject-api
zdroj: https://shopify.dev/changelog/streamlined-metaobject-api
shrnuto_dne: 2026-06-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Metaobject CRUD flow — relevantní pro klienty s custom data modely."
dotcene_klienty: []
souvisejici:
  - "fielddefinitions-optional-metaobject-create"
  - "createdat-updatedat-metaobject-definition"
  - "removing-private-publicread-enums-metaobjects"
kontext:
  background: |
    Metaobjects jsou v Shopify flexibilní custom data typy, které umožňují definovat vlastní strukturované objekty — například recenze, FAQ položky, produktové specifikace nebo interní datové záznamy. Každý metaobject má definici (MetaobjectDefinition) s pojmenovanými poli různých typů, a samotné instance těchto objektů nesou hodnoty těchto polí.

    Dosavadní Admin GraphQL API pro metaobjects pracovalo s polem `fields` — tedy polem objektů, kde každý element obsahoval klíč a hodnotu. Při čtení bylo potřeba procházet pole a manuálně mapovat klíče na hodnoty; při zápisu bylo nutné sestavit pole s explicitními key-value objekty a postarat se o serializaci a deserializaci dat aplikací. Tento vzor byl funkční, ale zbytečně verbose pro běžné CRUD operace.

    Nová `values` property, dostupná od API verze 2026-07, tento pattern výrazně zjednodušuje. Při čtení vrací `values` přímo JSON-compatible objekt připravený k použití bez nutnosti manuální deserializace. Při zápisu (create/update) přijímá JSON-style objekt odpovídající klíčům definice metaobjectu — API zajistí serializaci automaticky. Vynechaná pole jsou při update automaticky smazána (replace semantika), takže výsledný kód je přehlednější a méně náchylný k chybám. Stávající `field` a `fields` properties zůstávají dostupné pro případy, kde je potřeba metadata polí (např. informace o `type`) nebo patch-style update zachovávající nepozměněná pole.
  zdroje:
    - title: "Shopify Changelog: Streamlined Metaobject API"
      url: "https://shopify.dev/changelog/streamlined-metaobject-api"
    - title: "Admin GraphQL API: Metaobjects"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Admin GraphQL API 2026-07 přidává `values` property na metaobjects, která umožňuje číst i zapisovat data jako přímý JSON objekt bez manuální serializace/deserializace — zjednodušuje CRUD operace a snižuje boilerplate kód."
tagy: [metaobject, admin, json, simplification]
zdroj_kanal: dev-changelog
---

## Co se mění

Od API verze 2026-07 lze při dotazování metaobjectů použít novou property `values`, která vrací všechna pole jako jediný JSON-compatible objekt — přímo připravený k použití v aplikaci bez nutnosti iterovat přes pole `fields` a manuálně mapovat klíče na hodnoty.

Stejná property funguje i pro mutace (`metaobjectCreate`, `metaobjectUpdate`): místo sestavování pole `{ key, value }` objektů stačí předat JSON-style objekt s klíči odpovídajícími definici metaobjectu. API se postará o serializaci automaticky. Pozor na sémantiku: vynechaná pole jsou při update automaticky smazána — jde tedy o replace, ne patch. Pro patch-style chování (zachování nepozměněných polí) je nadále nutné použít stávající `fields` property.

Starší properties `field` a `fields` jsou zachovány a nadále fungují. Jsou vhodné pro případy, kde je potřeba metadata polí jako `type`, nebo právě pro patch-style updates.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-11 | Oznámení v Shopify Changelogu |
| 2026-07-01 | Dostupnost v API verzi 2026-07 |

## Dopad pro nás

Změna je čistě aditivní — žádný existující kód se nerozbije. Pro nové implementace nebo refaktoring stávajícího kódu pracujícího s metaobjects přináší `values` property příležitost zjednodušit read/write logiku a snížit množství boilerplate kódu.

Pokud někde v integraci serializujeme/deserializujeme metaobject fields ručně, lze tyto části přepsat s využitím `values`. Největší přínos bude tam, kde pracujeme s metaobjecty s větším počtem polí nebo kde jsou data metaobjectů zpracovávána programaticky.

## Použití v Integrátoru

Integrátor využívá metaobjects pro custom data modely klientů — `values` property je relevantní pro jakýkoliv CRUD flow nad metaobjecty. Při příští práci s metaobject read/write kódem zvážit migraci na `values` pro čistší implementaci. Změna nevyžaduje okamžitou akci, ale při upgradu na API verzi 2026-07 ji zahrnout do revize dotčených queries a mutací.
