---
date: 2026-07-27
title: "SubscriptionContractCalculation API — early access pro výpočet subscription contracts"
title_en: "SubscriptionContractCalculation API now available in early access"
slug: subscription-contract-calculation-api-early-access
zdroj: https://shopify.dev/changelog/subscription-contract-calculation-api-now-available-in-early-access
shrnuto_dne: 2026-08-14
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Subscription contracts zatím neimplementujeme, ale calculate → commit lifecycle by usnadnil budoucí price preview a dunning workflows, pokud subscriptions přidáme."
dotcene_klienty: []
souvisejici: [subscription-contracts-without-payment-methods, actor-field-subscription-billing, create-unpaid-orders-subscription-billing]
tldr: "Shopify uvolnil v early access nové Admin GraphQL API SubscriptionContractCalculation, které přes cyklus calculate → poll → commit dopředu spočítá ceny, slevy a daně subscription kontraktu, jako nástupce staršího SubscriptionDraft."
tagy: [admin-graphql-api, subscriptions, contracts, calculation, early-access]
zdroj_kanal: dev-changelog
kontext:
  background: |
    SubscriptionContractCalculation je nový objekt v Admin GraphQL API, který Shopify nabízí jako nástupce dosavadního `SubscriptionDraft`. Zatímco práce s draftem vyžadovala desítky dílčích mutací pro sestavení a úpravu kontraktu, nové API stahuje celý proces do jednoho stavu-bez-stavu (stateless) cyklu: merchant nebo aplikace pošle požadovaný tvar kontraktu, Shopify jej spočítá přes stejný unifikovaný checkout engine, který se používá i pro běžné objednávky, a teprve po potvrzení se výsledek zapíše.

    Cyklus má tři kroky. Nejprve mutace `subscriptionContractCreateCalculate`, `subscriptionContractUpdateCalculate` nebo `subscriptionBillingCycleContractEditCalculate` odešle zamýšlenou změnu ke spočítání. Poté se přes query `subscriptionContractCalculation` (nebo webhooky `subscription_contract_calculations/succeed` a `subscription_contract_calculations/fail`) čeká na výsledek — dry-run náhled obsahující kompletní součty za položky, dopravu, daně, cla i slevy, aniž by se cokoliv reálně uložilo. Až když je náhled v pořádku, mutace `subscriptionContractCalculationCommit` jej trvale zapíše do kontraktu. Pole, která se v požadavku vynechají, zůstávají beze změny, takže aplikace posílá jen to, co se skutečně mění.

    Díky napojení na checkout engine nově funguje i pro subscription kontrakty totéž, co dřív fungovalo jen pro klasické objednávky — bundle produkty, cart transform funkce a delivery customization Functions se v kalkulaci zohlední automaticky. To zároveň odstraňuje riziko, že by se výpočet cen pro předplatná dřív nebo později rozešel s výpočtem pro běžný checkout. API je zatím v early access na release candidate verzi 2026-10; `SubscriptionDraft` bude zastaralý (deprecated) až v okamžiku všeobecné dostupnosti (GA), takže není urgence k okamžité migraci.
  zdroje:
    - title: "Shopify: SubscriptionContractCalculation API now available in early access"
      url: "https://shopify.dev/changelog/subscription-contract-calculation-api-now-available-in-early-access"
    - title: "Subscription contracts bez payment method"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contracts-without-payment-methods/"
    - title: "actor pole na subscription contract a billing attempt mutacích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/actor-field-subscription-billing/"
  generated_at: 2026-08-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify zpřístupnil v early access nové Admin GraphQL API **SubscriptionContractCalculation** — náhradu za dosavadní `SubscriptionDraft` pro tvorbu a úpravu subscription kontraktů. Místo desítky+ draft mutací nabízí jediný cyklus **calculate → poll → commit**:

- **Calculate** — mutace `subscriptionContractCreateCalculate`, `subscriptionContractUpdateCalculate` nebo `subscriptionBillingCycleContractEditCalculate` pošle požadovaný tvar kontraktu ke spočítání.
- **Poll** — query `subscriptionContractCalculation` (nebo webhooky `subscription_contract_calculations/succeed` / `.../fail`) vrátí neměnný (immutable) náhled s celkovými cenami za položky, dopravu, daně, cla a slevy — vše "na zkoušku", bez zápisu do kontraktu.
- **Commit** — mutace `subscriptionContractCalculationCommit` teprve výsledek trvale uloží.

Výpočet běží přes stejný unifikovaný checkout engine jako běžné objednávky, takže nově funguje i s bundle produkty, cart transform a delivery customization Functions — a ceny se pro subscriptions a klasický checkout nemohou dlouhodobě rozejít.

## Časová osa

- **27. 7. 2026** — API dostupné v early access na release candidate verzi 2026-10.
- **GA (termín zatím neoznámen)** — `SubscriptionDraft` bude po dosažení všeobecné dostupnosti nového API označen jako deprecated.

## Dopad pro nás

**Pro vývojáře:** Aplikace, které dnes vytvářejí, upravují nebo editují subscription kontrakty přes `SubscriptionDraft`, budou dřív nebo později muset migrovat na nový cyklus — Shopify k tomu má samostatnou migrační dokumentaci. Aplikace, které kontrakty jen čtou nebo řeší jejich stav přes vyhrazené mutace, nejsou dotčeny. Protože jde o early access na RC verzi, jde zatím spíš o věc ke sledování než k okamžité implementaci.

**Pro PM / PO:** Praktický přínos je hlavně v možnosti spočítat dopředu (dry-run) přesnou cenu, slevu i daně změny předplatného — typicky pro "preview" ceny při change plan UI nebo pro dunning scénáře (řešení neúspěšné platby), aniž by se cokoliv závazně zapsalo. Pro klientské projekty bez vlastní subscription logiky nemá tato změna přímý dopad.

## Použití v Integrátoru

Subscription contracts v Integrátoru zatím neimplementujeme. Pokud bychom v budoucnu subscriptions přidávali, calculate → commit lifecycle by byl přirozeným základem pro price-preview a dunning funkcionalitu.
