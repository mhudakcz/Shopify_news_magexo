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

tldr: "API 2026-07 vyžaduje identifier pole pro Stripe/Authorize.net/Braintree v customerPaymentMethodRemoteCreate."
tagy: [payment, breaking, stripe, braintree]
---

## Co se mění
Mutace `customerPaymentMethodRemoteCreate` v API **2026-07** vyžaduje povinné `identifier` pole pro **Stripe**, **Authorize.net** a **Braintree** input objekty. Bez identifier mutace selže s validation error.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, identifier povinný

## Použití v Integrátoru
**Nepoužíváme** — týká se ukládání externích payment methods (typicky pro recurring/subscription billing). Neděláme custom payment processing.
