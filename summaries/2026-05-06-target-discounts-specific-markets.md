---
date: 2026-05-06
title: "Cílení slev na konkrétní markets přes DiscountContextInput"
title_en: "Target discounts to specific markets"
slug: target-discounts-specific-markets
zdroj: https://shopify.dev/changelog/target-discounts-to-specific-markets
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-07

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme discount methods (createDiscountCodeBasic, getDiscountCode, getAllDiscountCodes). Nové markets option v DiscountContextInput rozšiřuje možnosti — pokud klient potřebuje per-market slevy, lze přidat do existujících mutací."
dotcene_klienty: []
souvisejici: []

tldr: "DiscountContextInput podporuje od API 2026-07 markets option pro cílení slev na konkrétní regionální markets, retail lokace nebo B2B company locations. Eligibility lze kombinovat se stávajícími možnostmi."
tagy: [discount, markets, b2b, targeting]
---

## Co se mění
GraphQL Admin API přidává v `DiscountContextInput` typu nové **markets** pole. Lze cílit slevu na:
- **Regional markets** — konkrétní země / oblasti
- **Retail locations** — POS pobočky
- **B2B company locations** — konkrétní B2B partnery

Market eligibility lze kombinovat se stávajícími eligibility kritérii (customer segments, product / collection scope).

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Naše discount mutace (`createDiscountCodeBasic` atd.) mohou nově předávat `markets` parametr v `DiscountContextInput`. Backwards compatible — pokud markets nepředáme, sleva se chová jako dosud (global).

**Pro PM / PO:**
Užitečné pro **B2B / multi-market** klienty: „dejme 10% slevu jen pro CZ retail" nebo „discount jen pro B2B partnera X". Šetří workaround přes customer tags.

## Použití v Integrátoru
**Možná** — existing discount methods, opt-in field. Stojí za nabídnutím klientům, kteří mají Markets nastavené.
