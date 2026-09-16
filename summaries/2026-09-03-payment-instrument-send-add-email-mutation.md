---
date: 2026-09-03
title: "Nová mutation paymentInstrumentSendAddEmail — email link pro přidání platební metody u subscriptions"
title_en: "New paymentInstrumentSendAddEmail mutation"
slug: payment-instrument-send-add-email-mutation
zdroj: https://shopify.dev/changelog/new-paymentinstrumentsendaddemail-mutation
shrnuto_dne: 2026-09-15
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-03
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Relevantní pro dunning workflow u subscriptions - recovery expirované karty bez nutnosti stavět vlastní emailovou logiku a self-service tok pro doplnění platby."
dotcene_klienty: []
souvisejici: [subscription-contracts-without-payment-methods, payment-method-identifier-required, create-unpaid-orders-subscription-billing]
tldr: "Admin GraphQL API má novou mutaci paymentInstrumentSendAddEmail, která pošle zákazníkovi email se scoped odkazem pro přidání platební metody k subscription, objednávce nebo draft objednávce."
tagy: [admin-graphql-api, payment-instrument, subscriptions, email, dunning]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Do teď Admin API umožňovalo přes mutace jako customerPaymentMethodRemoteCreate spravovat nebo aktualizovat platební metodu, kterou zákazník už měl na účtu, ale chybělo přímé řešení situace, kdy platební metoda chybí úplně - typicky u subscription kontraktu, kde vypršela platnost karty, nebo u objednávky založené bez platebních údajů. Aplikace musely stavět vlastní emailové notifikace a přesměrovávat zákazníka do vlastního rozhraní pro zadání platby, což znamenalo extra vývoj i bezpečnostní riziko kolem nakládání s platebními daty mimo Shopify.

    Nová mutace paymentInstrumentSendAddEmail tento krok standardizuje. Vývojář zadá typ zdrojového objektu a jeho ID přes argument mandate (resourceType: SUBSCRIPTIONS, ORDERS nebo DRAFT_ORDERS, resourceId jako numerické ID), a Shopify zákazníkovi odešle email se scoped odkazem vedoucím přímo k doplnění platební metody pro daný konkrétní zdroj - bez nutnosti přihlášení do zákaznického účtu. Volitelný argument email umožňuje nastavit odesílací adresu (from) a přidat příjemce do kopie (bcc). Mutace vyžaduje scope write_customers a spadá pod pravidla pro ochranu citlivých zákaznických dat.

    Kontext zapadá do širšího trendu, kterým Shopify v posledních měsících zpřísňuje a zároveň zpřehledňuje práci s platebními metodami kolem subscriptions - od možnosti založit subscription contract bez paymentMethodId (API 2026-04), přes vytváření nezaplacených objednávek z neúspěšných billing attempts (API 2026-04), až po povinné identifier pole u customerPaymentMethodRemoteCreate (API 2026-07). paymentInstrumentSendAddEmail tuto skládačku doplňuje o poslední krok - standardní způsob, jak zákazníka po neúspěšném pokusu o platbu bezpečně vrátit do procesu doplnění platby, tedy klíčový kus dunning workflow pro recovery expirovaných karet.
  zdroje:
    - title: "Shopify: New paymentInstrumentSendAddEmail mutation"
      url: "https://shopify.dev/changelog/new-paymentinstrumentsendaddemail-mutation"
    - title: "Vytvoření nezaplacených objednávek z subscription billing attempts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/create-unpaid-orders-subscription-billing/"
    - title: "Payment method identifier povinný pro customerPaymentMethodRemoteCreate v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/payment-method-identifier-required/"
  generated_at: 2026-09-15T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Admin GraphQL API dostává novou mutaci `paymentInstrumentSendAddEmail`, která zákazníkovi pošle email s odkazem pro přidání platební metody k subscription kontraktu, objednávce nebo draft objednávce. Odkaz je scoped přímo na daný zdroj a zákazník ho může použít bez přihlášení do svého účtu.

Vstupní argument `mandate` určuje typ zdroje (`resourceType`: `SUBSCRIPTIONS`, `ORDERS` nebo `DRAFT_ORDERS`) a jeho `resourceId` (numerické ID, ne GID). Volitelný argument `email` umožňuje nastavit odesílací adresu (`from`) a přidat kopii příjemců (`bcc`).

```graphql
mutation {
  paymentInstrumentSendAddEmail(
    mandate: { resourceType: SUBSCRIPTIONS, resourceId: "1234567890" }
  ) {
    customer {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```

Mutace vyžaduje scope `write_customers` a podléhá pravidlům pro ochranu citlivých zákaznických dat. Jde o čistě aditivní změnu - žádné existující API se neláme, přijetí je dobrovolné.

## Časová osa

- **3. 9. 2026** — mutace `paymentInstrumentSendAddEmail` dostupná v Admin GraphQL API (API verze 2026-10)

## Dopad pro nás

**Pro vývojáře:** Odpadá nutnost stavět vlastní emailovou notifikaci a bezpečný formulář pro doplnění platební metody u subscriptions, objednávek nebo draft objednávek bez platby na file. Stačí zavolat mutaci se správným `mandate` a Shopify zajistí doručení i scoped odkaz.

**Pro PM / PO:** Otevírá se čistá cesta pro tři use case: dunning recovery po neúspěšném pokusu o platbu u subscription, B2B onboarding, kdy se objednávka zakládá dřív než zákazník zadá platbu, a self-service doplnění platební metody bez nutnosti kontaktovat podporu.

## Použití v Integrátoru

Možná relevance - pokud u klienta řešíme subscription dunning (expirovaná karta) nebo B2B tok, kde se objednávka zakládá bez platby předem, tato mutace nahrazuje custom emailovou logiku standardním Shopify řešením. Zatím žádný konkrétní projekt subscription contracts takto nevyužívá, ale stojí za zvážení při návrhu recovery flow.
