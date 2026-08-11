---
date: 2026-08-01
title: "Built for Shopify: nové requirements pro Fulfillment services apps"
title_en: "Updated Built for Shopify requirements for Fulfillment services apps"
slug: built-for-shopify-fulfillment-services-requirements
zdroj: https://shopify.dev/changelog/updated-built-for-shopify-requirements-for-fulfillment-services-apps
shrnuto_dne: 2026-08-11
kategorie: [fyi, deprecation]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Relevantní pouze pokud bychom pro fulfillment/3PL integraci cílili na Built for Shopify certifikaci — v tom případě se nás týkají upravené prahy pro completion rate a response time."
dotcene_klienty: []
souvisejici: [built-for-shopify-returns-subscriptions-customer-account-api, fulfillmentorderreportprogress, shipping-line-fulfillmentorderlineitem]
tldr: "Shopify uvolnil tři Built for Shopify požadavky pro fulfillment services apps (completion rate a response time na fulfillment/cancellation requesty) — bez nutné akce, méně aplikací tak nyní certifikaci splní."
tagy: [built-for-shopify, fulfillment, apps, compliance, quality]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Built for Shopify je certifikační program, který ve výsledcích App Store zvýrazňuje aplikace splňující nejvyšší standardy kvality, výkonu a integrace. Pro kategorii Fulfillment services apps (typicky 3PL a warehouse partneři napojení přes fulfillment service API) definuje program sadu operačních metrik — jak spolehlivě a rychle aplikace zpracovává fulfillment ordery, reaguje na požadavky merchanta a na cancellation requesty.

    Shopify nyní upravil tři z těchto požadavků, aby lépe odpovídaly reálnému provozu fulfillment operací. Konkrétně jde o sekci 5.8.2 (Complete fulfillment orders), kde byl snížen práh požadované completion rate u přiřazených fulfillment orderů, a sekce 5.8.6 (Respond to fulfillment requests), kde bylo prodlouženo časové okno pro odpověď a zároveň snížena požadovaná míra odezvy. U sekce 5.8.7 (Respond to cancellation requests) bylo prodlouženo pouze časové okno. Samotná metodika měření (co a jak se počítá) se nemění — mění se jen prahové hodnoty a lhůty.

    Jde tedy o rozvolnění, nikoliv zpřísnění: cílem je rozšířit okruh fulfillment aplikací, které mohou reálně dosáhnout a udržet Built for Shopify status. Změna se týká výhradně kategorie Fulfillment services apps — ostatní kategorie a ostatní Built for Shopify požadavky zůstávají beze změny. Evaluace probíhá automaticky, takže aplikace, které dříve na certifikaci nedosahovaly, mohou nyní kritéria splnit bez jakéhokoliv zásahu.
  zdroje:
    - title: "Shopify: Updated Built for Shopify requirements for Fulfillment services apps"
      url: "https://shopify.dev/changelog/updated-built-for-shopify-requirements-for-fulfillment-services-apps"
    - title: "Shopify Docs: Build for fulfillment services"
      url: "https://shopify.dev/docs/apps/fulfillment/build-for-fulfillment-services"
    - title: "Shopify Docs: Built for Shopify overview"
      url: "https://shopify.dev/docs/apps/launch/built-for-shopify"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify upravil tři requirementy Built for Shopify pro **Fulfillment services apps** (3PL a warehouse integrace):

- **5.8.2 Complete fulfillment orders** — snížen práh požadované completion rate pro přiřazené fulfillment ordery.
- **5.8.6 Respond to fulfillment requests** — prodlouženo časové okno pro odpověď a snížena požadovaná míra odezvy.
- **5.8.7 Respond to cancellation requests** — prodlouženo časové okno pro odpověď na cancellation requesty.

Metodika měření zůstává stejná, mění se jen konkrétní prahy a lhůty. Jiné kategorie aplikací a ostatní Built for Shopify požadavky touto změnou nejsou dotčeny.

## Časová osa

- **1. 8. 2026** — nové (uvolněné) prahy platí, evaluace probíhá automaticky bez nutnosti čehokoliv nastavovat.

## Dopad pro nás

**Pro vývojáře:** Žádná akce není nutná — Shopify to v changelogu explicitně uvádí. Pokud bychom v budoucnu vyvíjeli nebo provozovali fulfillment service app usilující o Built for Shopify status, jde o dobrou zprávu: dosažení a udržení certifikace je nyní snazší, protože metriky completion rate a response time mají benevolentnější prahy.

**Pro PM / PO:** Relevantní jen v kontextu vlastní fulfillment/3PL aplikace s Built for Shopify ambicí. Pro klientské projekty, kde jen konzumujeme Shopify fulfillment API (bez vlastní registrované fulfillment service app), nemá tato změna žádný přímý dopad.

## Použití v Integrátoru

Netýká se přímo — Integrátor nekonzumuje Built for Shopify certifikaci fulfillment services apps, pouze používá standardní fulfillment/3PL API. Relevance by nastala pouze v hypotetickém scénáři, kdy bychom sami vyvíjeli fulfillment service app s cílem certifikace.
