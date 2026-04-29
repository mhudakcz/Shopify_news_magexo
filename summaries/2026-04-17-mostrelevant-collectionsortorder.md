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

tldr: "Nový enum MOST_RELEVANT pro řazení produktů v kolekcích od API 2026-07."
tagy: [collection, sort, product]
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
