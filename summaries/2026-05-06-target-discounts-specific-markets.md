---
date: 2026-05-06
title: "Cílení slev na konkrétní markets přes DiscountContextInput"
title_en: "Target discounts to specific markets"
slug: target-discounts-specific-markets
zdroj: https://shopify.dev/changelog/target-discounts-to-specific-markets
zdroj_kanal: dev-changelog
editions_release: spring-2026
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

kontext:
  background: |
    DiscountContextInput je vstupní GraphQL objekt v Admin API, který definuje, pro koho je sleva dostupná. Doposud podporoval tři volby: všichni zákazníci (all), konkrétní zákazníci (customers) nebo segmenty zákazníků (customerSegments). Tyto volby jsou vzájemně výlučné — vždy se vybírá právě jedna.

    Shopify Markets je funkce umožňující prodejcům provozovat více regionálních trhů z jediného obchodu, přičemž každý trh může mít vlastní ceny, měnu, jazyk i podmínky dopravy. S rozšiřováním B2B funkcionalit (dostupných od roku 2026 i mimo plán Plus) vznikl přirozený požadavek na granulárnost slev: obchodníci potřebují cílit slevy nejen na zákaznické segmenty, ale přímo na konkrétní tržní kontexty — ať jde o zeměpisný region, maloobchodní pobočku nebo B2B partnera.

    Přidání pole markets do DiscountContextInput vyplňuje tuto mezeru. Slevy lze nově svázat s konkrétním Shopify Market objektem, přičemž pod-trhy stejného typu dědí nastavení nadřazeného trhu. Tato možnost doplňuje také rozšiřující se sadu discount-related API změn v API verzi 2026-07, jako jsou nová pole v Storefront cart typech nebo tracking slev přes UTM kampaně.

  zdroje:
    - title: "Target discounts to specific markets — Shopify Changelog"
      url: "https://shopify.dev/changelog/target-discounts-to-specific-markets"
    - title: "DiscountContextInput — Shopify GraphQL Admin API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput"
    - title: "Shopify zpřístupňuje B2B features všem plánům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
    - title: "Tracking slev s marketing campaigns (UTM)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/track-discounts-marketing-campaigns/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
