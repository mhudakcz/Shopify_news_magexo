---
date: 2026-04-01
title: "Payment method identifier povinný pro customerPaymentMethodRemoteCreate v 2026-07"
title_en: "Payment method identifier now required for customerPaymentMethodRemoteCreate"
slug: payment-method-identifier-required
zdroj: https://shopify.dev/changelog/payment-method-identifier-now-required-for-customerpaymentmethodremotecreate
shrnuto_dne: 2026-04-29

kategorie: [breaking-change]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se ukládání externích payment methods (Stripe, Authorize.net, Braintree). Neděláme custom payment processing."
dotcene_klienty: []

kontext:
  background: |
    Mutace `customerPaymentMethodRemoteCreate` slouží k importu platebních metod uložených v externích platebních bránách (Stripe, Authorize.net, Braintree) přímo do Shopify zákaznického profilu. Každá brána přiřazuje své platební metody vlastním interním identifikátorem — například Stripe používá `paymentMethodId`, Authorize.net `customerPaymentProfileId` a Braintree `paymentMethodToken`. Shopify tato pole sdružuje pod společné označení „identifier".

    Historicky bylo identifier pole v GraphQL schématu označeno jako volitelné, i když pro skutečné zpracování platby bylo vždy nutné. Tato nekonzistence mezi schématem a funkčním chováním mohla vést k záludným chybám za běhu — mutace by se zdánlivě přijala, ale platební metoda by nebyla funkční. Změna v API 2026-07 toto sjednocuje: pole je nyní povinné na úrovni schématu i za běhu.

    Mutace se využívá především při migraci zákazníků s existujícími subscription kontrakty z externích systémů na Shopify Subscriptions API. Validace probíhá asynchronně — Shopify nejprve ověří identifikátor u příslušné brány, než platební metodu označí jako plně funkční. Vyžaduje oprávnění `write_customers` a `write_customer_payment_methods`.

    Tato změna je součástí širšího zpřísňování Subscriptions API v roce 2026: stejná verze přidává pole `actor` pro auditní záznam billing attempts a umožňuje vytvářet subscription contracts i bez přiřazené platební metody.
  zdroje:
    - title: "Shopify Changelog: Payment method identifier now required for customerPaymentMethodRemoteCreate"
      url: "https://shopify.dev/changelog/payment-method-identifier-now-required-for-customerpaymentmethodremotecreate"
    - title: "Shopify Docs: customerPaymentMethodRemoteCreate mutation"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate"
    - title: "Subscription contracts bez payment method"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contracts-without-payment-methods/"
    - title: "actor pole na subscription contract a billing attempt mutacích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/actor-field-subscription-billing/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-07 vyžaduje identifier pole pro Stripe/Authorize.net/Braintree v customerPaymentMethodRemoteCreate."
tagy: [payment, breaking, stripe, braintree]
---

## Co se mění
Mutace `customerPaymentMethodRemoteCreate` v API **2026-07** vyžaduje povinné `identifier` pole pro **Stripe**, **Authorize.net** a **Braintree** input objekty. Bez identifier mutace selže s validation error.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, identifier povinný

## Použití v Integrátoru
**Nepoužíváme** — týká se ukládání externích payment methods (typicky pro recurring/subscription billing). Neděláme custom payment processing.
