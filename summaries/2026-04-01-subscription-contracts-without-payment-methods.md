---
date: 2026-04-01
title: "Subscription contracts bez payment method"
title_en: "Create subscriptions contracts without payment methods"
slug: subscription-contracts-without-payment-methods
zdroj: https://shopify.dev/changelog/create-subscriptions-contracts-without-payment-methods
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Subscription Contracts API. Aktuálně subscription contracts neimplementujeme."
dotcene_klienty: []
souvisejici: [create-unpaid-orders-subscription-billing]

kontext:
  background: |
    Subscription contract je objekt v Shopify Admin GraphQL API, který definuje opakovaný nákup zákazníka — obsahuje fakturační a dodací politiku, seznam produktů, frekvenci záloh a vazbu na platební metodu zákazníka. Správa kontraktů probíhá přes mutace `subscriptionContractCreate` a `subscriptionContractAtomicCreate`, jež vyžadují scope `write_own_subscription_contracts`.

    Shopify Subscriptions API je součástí širšího rámce Selling Plans, který merchantům umožňuje nabízet opakované dodávky se automatickým fakturováním. Historicky bylo pole `paymentMethodId` při zakládání kontraktu povinné, což znemožňovalo vytvořit kontrakt dříve, než zákazník zadal platební údaje. To komplikovalo onboardingové toky i migrace z externích systémů (například z nástrojů jako Recharge nebo ChargeBee), kde platební data nejsou okamžitě k dispozici.

    Volitelnost `paymentMethodId` od API 2026-04 umožňuje oddělit fázi sjednání předplatného od fáze zadání platby. Merchant nebo partnerská aplikace může kontrakt připravit předem a platební metodu doplnit až při prvním billing attempt. Příbuzná změna ve stejné verzi API přidává pole `paymentProcessingPolicy` pro billing attempts, které umožňuje vytvořit nezaplacenou objednávku i bez aktivní platební metody.

    Tento trend pokračuje v API 2026-07, kde přibývá pole `actor` pro audit trail — sledování, zda billing attempt inicioval zákazník, merchant nebo automatizace partnerské aplikace.
  zdroje:
    - title: "Shopify Changelog: Create subscription contracts without payment methods"
      url: "https://shopify.dev/changelog/create-subscriptions-contracts-without-payment-methods"
    - title: "Shopify Docs: SubscriptionContract object"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract"
    - title: "Vytvoření nezaplacených objednávek z subscription billing attempts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/create-unpaid-orders-subscription-billing/"
    - title: "actor pole na subscription contract a billing attempt mutacích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/actor-field-subscription-billing/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-04 umožňuje vytvořit subscription contract i bez paymentMethodId (volitelné)."
tagy: [subscription, contract, payment]
editions_release: spring-2026
---

## Co se mění
Mutace pro vytvoření subscription contract v API **2026-04** mají pole `paymentMethodId` jako **volitelné**. Lze tedy vytvořit kontrakt předem (např. při onboardingu klienta) a payment method přidat později.

## Použití v Integrátoru
**Nepoužíváme** — Subscription Contracts API zatím neintegrujeme.
