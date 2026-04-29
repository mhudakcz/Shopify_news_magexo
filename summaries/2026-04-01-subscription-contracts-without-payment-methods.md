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

tldr: "API 2026-04 umožňuje vytvořit subscription contract i bez paymentMethodId (volitelné)."
tagy: [subscription, contract, payment]
---

## Co se mění
Mutace pro vytvoření subscription contract v API **2026-04** mají pole `paymentMethodId` jako **volitelné**. Lze tedy vytvořit kontrakt předem (např. při onboardingu klienta) a payment method přidat později.

## Použití v Integrátoru
**Nepoužíváme** — Subscription Contracts API zatím neintegrujeme.
