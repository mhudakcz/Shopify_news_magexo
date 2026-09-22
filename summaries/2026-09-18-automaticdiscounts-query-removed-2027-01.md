---
date: 2026-09-18
title: "Query automaticDiscounts odstraněn v Admin API 2027-01 (breaking)"
title_en: "The automaticDiscounts query is removed in API version 2027-01"
slug: automaticdiscounts-query-removed-2027-01
zdroj: https://shopify.dev/changelog/automaticdiscounts-query-is-removed-in-api-version-2027-01
shrnuto_dne: 2026-09-22
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-09-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor čte automatické slevy přes query automaticDiscounts, musí před nástupem API 2027-01 přejít na discountNodes s filtrem method:automatic, jinak dotazy přestanou fungovat."
dotcene_klienty: []
souvisejici: [discounts-allocator-function-api-preview-ended, purchase-type-filtering-app-discounts-enforced, draftorder-discount-warning-pricerule-removed]
tldr: "Shopify v Admin GraphQL API verzi 2027-01 odstraňuje query automaticDiscounts i typy DiscountAutomaticConnection/DiscountAutomaticEdge - apps musí přejít na discountNodes s filtrem method:automatic."
tagy: [admin-graphql-api, discounts, automatic-discounts, breaking, action-required, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v Admin GraphQL API verzi 2027-01 odstraňuje query `automaticDiscounts` a s ní i typy `DiscountAutomaticConnection` a `DiscountAutomaticEdge`. Šlo o samostatnou query surface určenou výhradně pro automatické slevy (automatic discounts), tedy slevy aplikované bez slevového kódu.

    Motivací je sjednocení discount API do jediné query surface, `discountNodes`, která pokrývá jak automatické, tak kódové (code-based) slevy pod jedním rozhraním se stejnou search syntaxí a jednotným stránkováním. Odpadá tak nutnost slučovat výsledky ze dvou oddělených dotazů, pokud app potřebuje pracovat s oběma typy slev zároveň. Krok navazuje na širší přechod Shopify discount ekosystému na Shopify Functions a sjednocený model slev, kde už dřívější tvrdé rozdělení na Automatic vs. Code přestává dávat smysl na úrovni API.

    Migrace spočívá v náhradě volání `automaticDiscounts` za `discountNodes` s parametrem `query: "method:automatic"`, přičemž inline fragmenty (např. `... on DiscountAutomaticBxgy`) se přesouvají o úroveň hlouběji, na pole `discount` uvnitř `DiscountNode`. Apps si dále musí přegenerovat GraphQL typy proti verzi 2027-01 a migraci otestovat na development store před nasazením do produkce.
  zdroje:
    - title: "Shopify: The automaticDiscounts query is removed in API version 2027-01"
      url: "https://shopify.dev/changelog/automaticdiscounts-query-is-removed-in-api-version-2027-01"
  generated_at: 2026-09-22T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify odstraňuje z Admin GraphQL API (verze 2027-01) query `automaticDiscounts` spolu s podpůrnými typy `DiscountAutomaticConnection` a `DiscountAutomaticEdge`. Apps, které dosud čtou automatické slevy přes toto dedikované pole, musí přejít na obecnou query `discountNodes` s filtrem `query: "method:automatic"`, která nově pokrývá automatické i kódové slevy pod jedním rozhraním se stejnou search syntaxí a stránkováním.

Struktura odpovědi se také mění — typové fragmenty na konkrétní druh slevy (např. `DiscountAutomaticBxgy`) se nově zanořují o úroveň hlouběji, na pole `discount` v rámci `DiscountNode`, místo přímo na `nodes`.

## Časová osa

- **2026-09-18** — Shopify oznámil odstranění query `automaticDiscounts` a souvisejících typů v Admin GraphQL API 2027-01.
- **API 2027-01** — po vydání této verze již `automaticDiscounts` v Admin GraphQL API neexistuje; apps, které na ni migrovaly ze starších verzí, musí do té doby přejít na `discountNodes`.

## Dopad pro nás

**Pro vývojáře:** Kdekoliv se v kódu volá `automaticDiscounts(...)`, je potřeba dotaz přepsat na `discountNodes(query: "method:automatic", ...)` a přesunout inline fragmenty na konkrétní typy slev (`DiscountAutomaticBxgy` apod.) pod pole `discount` u `DiscountNode`. Součástí migrace je i přegenerování GraphQL typů proti API 2027-01 a otestování na development store, protože jde o strukturální (nejen jmennou) změnu dotazu.

**Pro PM / PO:** Jde o breaking change s jasným action-required termínem vázaným na přechod na API 2027-01, ne o postupný sunset. U klientů, kde app nebo interní tooling pracuje s automatickými slevami přes Admin API, je vhodné si u vývojářského týmu ověřit, zda se `automaticDiscounts` v kódu vyskytuje, a naplánovat migraci před povinným upgradem na 2027-01.

## Použití v Integrátoru

Možná — pokud Integrátor někde čte automatické slevy přes `automaticDiscounts`, je nutné dotaz před přechodem na API 2027-01 přepsat na `discountNodes` s filtrem `method:automatic`; jinak start pokazí čtení dat o automatických slevách.

## Související

- [Discounts Allocator Function API — preview ukončeno](../zmena/discounts-allocator-function-api-preview-ended/)
- [Purchase-type filtering pro app discounts vynucováno](../zmena/purchase-type-filtering-app-discounts-enforced/)
- [priceRule odstraněn z DraftOrderDiscountNotAppliedWarning](../zmena/draftorder-discount-warning-pricerule-removed/)
