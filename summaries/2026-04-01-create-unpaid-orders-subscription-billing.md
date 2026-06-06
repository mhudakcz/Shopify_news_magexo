---
date: 2026-04-01
title: "Vytvoření nezaplacených objednávek z subscription billing attempts"
title_en: "Create unpaid orders from subscription billing attempts"
slug: create-unpaid-orders-subscription-billing
zdroj: https://shopify.dev/changelog/create-unpaid-orders-from-subscription-billing-attempts
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Shopify Subscriptions API. Aktuálně subscription contracts neimplementujeme."
dotcene_klienty: []

kontext:
  background: |
    Subscription billing attempt je akce v Shopify Subscriptions API, která spustí fakturační cyklus předplatného a pokusí se zákazníkovi účtovat platbu. Výsledkem úspěšného pokusu je nová objednávka. Billing attempts jsou dostupné přes mutaci `subscriptionBillingAttemptCreate` v Admin GraphQL API.

    Shopify Subscriptions API (součást Selling Plans) umožňuje merchantům nabízet opakované nákupy — produkty dodávané v pravidelných intervalech s automatickým fakturováním. Historicky billing attempt selhal, pokud zákazník neměl platnou platební metodu. To vedlo ke ztrátě objednávky i zákazníka, přestože obě strany měly zájem v odběru pokračovat.

    Nové pole `paymentProcessingPolicy` s hodnotou `SKIP_PAYMENT_AND_CREATE_UNPAID_ORDER` toto chování mění: objednávka se vytvoří okamžitě bez blokace platbou. Merchant ji pak může vyrovnat manuálně, vystavit fakturu nebo zákazníka přesměrovat k úhradě — bez ztráty záznamu o objednávce. Hodí se zejména pro B2B segmenty nebo zákazníky preferující faktury.

    Součástí stejné vlny API 2026-04 je i možnost vytvářet subscription contracts bez `paymentMethodId`, což umožňuje onboarding předplatitelů před zadáním platební karty. Od API 2026-07 přibude pole `actor` pro auditní záznam, kdo billing attempt inicioval.
  zdroje:
    - title: "Shopify Changelog: Create unpaid orders from subscription billing attempts"
      url: "https://shopify.dev/changelog/create-unpaid-orders-from-subscription-billing-attempts"
    - title: "Shopify Docs: Build a subscription contract"
      url: "https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract"
    - title: "Subscription contracts bez payment method"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contracts-without-payment-methods/"
    - title: "actor pole na subscription contract a billing attempt mutacích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/actor-field-subscription-billing/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-04: paymentProcessingPolicy umožňuje vytvořit objednávku ze subscription bez aktivní platby."
tagy: [subscription, billing, recurring, order]
---

## Co se mění
Subscription billing attempt v API **2026-04** podporuje pole `paymentProcessingPolicy`, které umožňuje vytvořit objednávku **i když platba selže nebo není dostupná validní payment method**. Order vznikne v unpaid stavu — lze pak řešit retry, manual settlement atd.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Subscriptions/Selling Plans API zatím neintegrujeme. Pokud bychom v budoucnu napojili klienta s recurring billing, je to relevantní.
