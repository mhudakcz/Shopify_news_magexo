---
date: 2026-06-23
title: "B2B discounts nově automaticky aktivované u nových B2B store i eligible existujících"
title_en: "B2B discounts are now enabled by default for new B2B stores"
slug: b2b-discounts-default-new-stores
zdroj: https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores
shrnuto_dne: 2026-06-23
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-23
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme slevy nebo onboarding nových B2B stores, nemusíme již řešit manuální aktivaci přes Support."
dotcene_klienty: []
souvisejici:
  - "b2b-for-all-merchants"
  - "target-discounts-specific-markets"
  - "compare-at-prices-catalogs"
tldr: "B2B discounts jsou od 23. 6. 2026 aktivované automaticky pro všechny nové B2B stores i eligible existující — odpadá nutnost kontaktovat Shopify Support."
tagy: [b2b, discounts, defaults, onboarding]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    B2B discounts (automatické slevy a discount codes pro B2B zákazníky) byly historicky opt-in funkce — merchant musel před jejich použitím explicitně kontaktovat Shopify Support a požádat o aktivaci na své store. Tato bariéra zpomalovala onboarding nových B2B stores a přidávala zbytečné tření do procesu nastavení volume pricing a B2B promo akcí.

    Shopify tuto situaci mění: od 23. června 2026 jsou B2B discounts aktivovány automaticky u všech nových B2B stores bez jakékoliv akce ze strany merchantů. Zároveň dochází k proaktivní aktivaci u eligible existujících stores — konkrétně těch, které nemají žádné aktivní ani naplánované slevy (a tedy jim automatická aktivace nemůže narušit stávající konfiguraci).

    Praktický dopad pro merchanty je zjednodušení celého onboarding flow: nové B2B store může ihned po vytvoření pracovat se slevami bez čekání na Support. U discount eligibility je ale třeba dbát na nastavení sekce Eligibility — pokud merchant použije targeting „All customers", „Specific customers" nebo „Customer segments", sleva se automaticky vztahuje na B2B i non-B2B publikum. Pro oddělení publik je nutné v eligibility explicitně nastavit B2B company location markets versus Region markets.
  zdroje:
    - title: "Shopify: B2B discounts are now enabled by default for new B2B stores"
      url: "https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores"
  generated_at: 2026-06-23T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

B2B discounts (automatické slevy i discount codes cílené na B2B zákazníky) se od **23. června 2026** aktivují automaticky — bez nutnosti žádat Shopify Support.

Změna se týká:

- **Nových B2B stores** — discounts jsou aktivovány ihned při vytvoření store.
- **Eligible existujících B2B stores** — automatická aktivace proběhne u těch, které nemají žádné aktivní ani naplánované slevy. Stores s existující discount konfigurací zůstávají beze změny.

Po aktivaci mohou merchanté cílit slevy na B2B zákazníky pomocí sekce **Eligibility** v nastavení discounts — konkrétně výběrem **B2B company location markets**. Pokud eligibility není explicitně nastavena na B2B markets, slevy nastavené na „All customers" nebo „Customer segments" se aplikují na B2B i non-B2B publikum zároveň.

## Časová osa

| Datum | Událost |
|---|---|
| Před 2026-06-23 | B2B discounts jsou opt-in; aktivace vyžaduje kontakt Shopify Support |
| **2026-06-23** | Automatická aktivace pro nové B2B stores a eligible existující |

## Dopad pro nás

Z pohledu integračního partnera jde o **nízkou prioritu** — jedná se o platformovou změnu bez dopadu na API nebo existující integrační kód. Při onboardingu nových B2B klientů na Shopify lze od teď předpokládat, že funkce discounts je dostupná out-of-the-box a není potřeba vést klienty přes Support request.

Pokud implementujeme automatické slevy nebo discount flows pro B2B stores, je dobré ověřit, že eligibility v discount konfiguraci explicitně odlišuje B2B a non-B2B audience — jinak hrozí nechtěné aplikování slev na retail zákazníky.

## Použití v Integrátoru

Přímý dopad na integrátorový kód není. Změna se projeví v onboardingové dokumentaci a checklistech pro nové B2B projekty — krok „aktivace discounts přes Support" lze z procesu vypustit. Pokud integrujeme discount management přes Admin API, chování API se nemění; mění se pouze výchozí stav store-level konfigurace.
