---
date: 2026-04-17
title: "MOST_RELEVANT řazení pro CollectionSortOrder v 2026-07"
title_en: "Added MOST_RELEVANT value for CollectionSortOrder"
slug: mostrelevant-collectionsortorder
zdroj: https://shopify.dev/changelog/added-mostrelevant-value-for-collectionsortorder
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme product/collection methods v shopify-client. MOST_RELEVANT je nový enum value pro řazení produktů v kolekci — využití závisí, jestli klient potřebuje relevantní řazení mimo manuálně nastavené."
dotcene_klienty: []

kontext:
  background: |
    Enum `CollectionSortOrder` existuje v Shopify GraphQL Admin API jako výčtový typ, který určuje pořadí produktů v kolekcích — používá se například v mutaci `collectionUpdate` při poli `sortOrder`. Před verzí 2026-07 nabízel osm hodnot: `ALPHA_ASC` a `ALPHA_DESC` (abecední řazení), `BEST_SELLING` (prodejnost), `CREATED` a `CREATED_DESC` (datum přidání produktu), `MANUAL` (manuální pořadí nastavené merchantem), `PRICE_ASC` a `PRICE_DESC` (cena).

    Hodnota `MOST_RELEVANT` je devátou, nově přidanou možností a je součástí širšího trendu Shopify směrem k relevančnímu řazení obsahu řízeného daty. Podobný princip relevance-rankingu Shopify dlouhodobě využívá ve vyhledávání na Storefront API (Predictive Search, Search & Discovery app) a v doporučeních produktů.

    Přidání `MOST_RELEVANT` na úrovni Admin API umožňuje toto chování programaticky nastavit jako výchozí sort order kolekce — tedy bez manuálního zásahu merchantem. Konkrétní algoritmus relevance Shopify nezveřejňuje, ale obecně kombinuje signály jako prodejnost, datum přidání produktu a další interní metriky.
  zdroje:
    - title: "Shopify Changelog: Added MOST_RELEVANT value for CollectionSortOrder"
      url: "https://shopify.dev/changelog/added-mostrelevant-value-for-collectionsortorder"
    - title: "Shopify Docs: CollectionSortOrder enum (2026-07)"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/enums/CollectionSortOrder"
  generated_at: 2026-06-05T15:00:00Z
  model: claude-sonnet-4-5
tldr: "Nový enum MOST_RELEVANT pro řazení produktů v kolekcích od API 2026-07."
tagy: [collection, sort, product]
editions_release: spring-2026
---

## Co se mění
GraphQL Admin API verze **2026-07** přidává hodnotu `MOST_RELEVANT` do enumu `CollectionSortOrder`. Lze ji použít jako sort order pro kolekce, kdy Shopify automaticky určuje pořadí podle relevance (chování determinováno interně, typicky kombinace prodejů, recence a tagů).

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, enum dostupný

## Dopad pro nás
**Pro vývojáře:**
Pokud někde nastavujeme/čteme `sortOrder` na kolekcích, lze použít novou hodnotu. Nemá to backwards compat dopad — staré hodnoty fungují dál.

**Pro PM / PO:**
Klientům nabízíme automatické řazení produktů „relevantně" bez manuální údržby. Vhodné pro storefronty s velkým katalogem.

## Použití v Integrátoru
**Možná** — nesahá přímo na žádnou existující metodu, ale pokud klient chce nastavit sort order na kolekci přes naši integraci, lze nově použít `MOST_RELEVANT`.
