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

tldr: "API 2026-04: paymentProcessingPolicy umožňuje vytvořit objednávku ze subscription bez aktivní platby."
tagy: [subscription, billing, recurring, order]
---

## Co se mění
Subscription billing attempt v API **2026-04** podporuje pole `paymentProcessingPolicy`, které umožňuje vytvořit objednávku **i když platba selže nebo není dostupná validní payment method**. Order vznikne v unpaid stavu — lze pak řešit retry, manual settlement atd.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Subscriptions/Selling Plans API zatím neintegrujeme. Pokud bychom v budoucnu napojili klienta s recurring billing, je to relevantní.
