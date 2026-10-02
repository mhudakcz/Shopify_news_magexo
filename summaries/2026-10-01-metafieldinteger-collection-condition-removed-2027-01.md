---
date: 2026-10-01
title: "metafieldInteger collection condition odstraněn v API 2027-01 (breaking)"
title_en: "metafieldInteger collection condition removed in API version 2027-01"
slug: metafieldinteger-collection-condition-removed-2027-01
zdroj: https://shopify.dev/changelog/posts/metafieldinteger-collection-condition-removed-in-api-version-2027-01
shrnuto_dne: 2026-10-02
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše integrace vytváří nebo čte kolekce s podmínkou na integer metafield přes metafieldInteger, musí před přechodem na API 2027-01 přejít na metafieldInt a posílat value jako String, jinak mutations i queries selžou."
dotcene_klienty: []
souvisejici: [new-collection-model-apis-ga, collections-multi-source-variants, automaticdiscounts-query-removed-2027-01]
tldr: "Shopify v Admin GraphQL API 2027-01 odstraňuje inputy a typy metafieldInteger pro podmínky zdrojů kolekcí; apps musí přejít na metafieldInt a hodnotu value posílat jako String místo Int."
tagy: [admin-graphql-api, metafields, collections, breaking, deprecation, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Kolekce v Shopify se od API verze 2026-07 skládají z composable zdrojů (`CollectionSource`), které nahradily dřívější monolitický `ruleSet`. Zdroj typu conditions obsahuje podmínky (tag, typ, cena, metafield), na jejichž základě se produkty do kolekce přidávají automaticky. Metafield podmínky se v něm zadávají přes typované inputy, z nichž jeden byl určen pro integer metafieldy: `metafieldInteger` s hodnotou typu `Int`.

    V API verzi 2027-01 Shopify tento integer-specifický vstup odstraňuje a nahrazuje jej názvem `metafieldInt`. Změna se týká čtyř prvků schématu: typů `CollectionSourceInclusionConditionMetafieldInteger` a `CollectionSourceInclusionConditionMetafieldIntegerRelation` a polí `metafieldInteger` v inputech `CollectionSourceInclusionConditionInput` a `CollectionSourceInclusionConditionUpdateInput`. Nejde jen o přejmenování. Pole `value` se mění z `Int` na `String`, takže každá hodnota musí být po migraci předána jako řetězec (například `"2000"` místo `2000`).

    Podle changelogu zůstává stará syntaxe funkční do API verze 2026-10, kde se integer podmínky už resolvují na nový typ `CollectionSourceInclusionConditionMetafieldInt`. Shopify proto doporučuje migraci otestovat právě na 2026-10 a teprve potom povýšit na 2027-01. Jde o další z řady breaking změn naplánovaných na API 2027-01, které navazují na přechod kolekcí na nový model zdrojů.
  zdroje:
    - title: "Shopify: metafieldInteger collection condition removed in API version 2027-01"
      url: "https://shopify.dev/changelog/posts/metafieldinteger-collection-condition-removed-in-api-version-2027-01"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Od Admin GraphQL API verze **2027-01** zmizí ze schématu integer-specifické podmínky pro zdroje kolekcí. Apps, které je dosud používají, musí přejít na jejich `metafieldInt` ekvivalenty. Konkrétně se nahrazují čtyři prvky:

| Odstraněno v 2027-01 | Náhrada |
|---|---|
| `CollectionSourceInclusionConditionMetafieldInteger` | `CollectionSourceInclusionConditionMetafieldInt` |
| `CollectionSourceInclusionConditionMetafieldIntegerRelation` | `CollectionSourceInclusionConditionMetafieldIntRelation` |
| `CollectionSourceInclusionConditionInput.metafieldInteger` | `CollectionSourceInclusionConditionInput.metafieldInt` |
| `CollectionSourceInclusionConditionUpdateInput.metafieldInteger` | `CollectionSourceInclusionConditionUpdateInput.metafieldInt` |

Klíčový rozdíl mimo samotný název: pole `value` je nově typu `String`, ne `Int`. Zápis (mutation input) vypadá takto:

```graphql
# Před
metafieldInteger: { definitionId: "gid://shopify/MetafieldDefinition/1", relation: GREATER_THAN, value: 2000 }

# Po
metafieldInt: { definitionId: "gid://shopify/MetafieldDefinition/1", relation: GREATER_THAN, value: "2000" }
```

U čtení se mění inline fragment:

```graphql
# Před
... on CollectionSourceInclusionConditionMetafieldInteger { relation value }

# Po
... on CollectionSourceInclusionConditionMetafieldInt { relation value }
```

Migrace tedy zahrnuje přejmenování všech referencí v queries a mutations a převod všech hodnot integer podmínek na řetězce. Pozor i na kód, který hodnotu `value` čte zpět: po změně dostane `String`, takže případné číselné porovnání nebo serializace v klientovi musí s tím počítat.

## Časová osa

- **2026-10-01** — Shopify zveřejnil changelog o odstranění `metafieldInteger` podmínek v API 2027-01.
- **API 2026-10** — stará syntaxe stále funguje; integer podmínky se v této verzi resolvují na typ `CollectionSourceInclusionConditionMetafieldInt`. Shopify doporučuje migraci otestovat právě zde.
- **API 2027-01 (leden 2027)** — `metafieldInteger` inputy a typy už ve schématu nejsou. Dotazy a mutations, které je používají, selžou.

## Dopad pro nás

**Pro vývojáře:** Je potřeba vyhledat v kódu všechny výskyty `metafieldInteger` a `CollectionSourceInclusionConditionMetafieldInteger` (včetně `...Relation`) v GraphQL dokumentech, generovaných typech i testovacích fixtures. Pak je nahradit za `metafieldInt` varianty a hodnoty `value` posílat jako `String`. Po změně schématu je nutné přegenerovat GraphQL typy proti 2026-10 a později 2027-01 a otestovat vytvoření, update i čtení kolekcí s integer podmínkou na development store. Pokud kód zpracovává `value` z odpovědi jako číslo, je potřeba doplnit explicitní parsování. Protože změna začíná být viditelná už v 2026-10, je nejbezpečnější migrovat teď a ne až při přechodu na 2027-01.

**Pro PM / PO:** Jde o breaking change s pevným termínem vázaným na API 2027-01, ne o postupný sunset. Dotčené jsou jen apps a interní tooling, které programově spravují automatizované kolekce s podmínkou na integer metafield (například pořadí, skladová hodnota nebo číselný atribut produktu). Merchanti, kteří si takové kolekce skládají ručně v adminu, dotčeni nejsou. U klientů s automatizovaným merchandisingem stojí za to ověřit s vývojáři, zda se `metafieldInteger` v kódu vyskytuje, a zařadit migraci do plánu před povinným upgradem na 2027-01. Změna je malá, ale snadno se přehlédne, protože typ `value` se mění z čísla na řetězec.

## Použití v Integrátoru

Možná — pokud naše integrace zakládá nebo synchronizuje automatizované kolekce s podmínkou na integer metafield, musí se před přechodem na API 2027-01 přepsat na `metafieldInt` a posílat `value` jako řetězec.

## Související

- Nový Collection model a APIs nyní GA (`ruleSet` nahrazen `sources`)
- Kolekce podporují multi-source a variant-level (admin UI redesign)
- Query automaticDiscounts odstraněn v Admin API 2027-01 (další breaking změna v 2027-01)
