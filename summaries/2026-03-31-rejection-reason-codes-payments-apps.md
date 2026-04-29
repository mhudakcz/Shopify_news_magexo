---
date: 2026-03-31
title: "Granulárnější rejection reason codes v Payments Apps API"
title_en: "New rejection reason codes in Payments Apps API"
slug: rejection-reason-codes-payments-apps
zdroj: https://shopify.dev/changelog/new-rejection-reason-codes-in-payments-apps-graphql-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: billing
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Payments Apps. Neděláme platební aplikace."
dotcene_klienty: []
souvisejici: [mtls-payments-cert-renewal]

tldr: "Payments Apps API 2026-04 přidává granulárnější kódy odmítnutí v PaymentSessionStateRejectedReason enumu."
tagy: [payments, rejection, enum]
---

## Co se mění
Payments Apps API verze **2026-04** rozšiřuje enum `PaymentSessionStateRejectedReason` o granulárnější rejection codes — místo obecných důvodů (typu `OTHER`) lze nyní vyjádřit specifická failure mode (insufficient funds, fraud, expired card atd.).

## Použití v Integrátoru
**Nepoužíváme** — Payments Apps API. Neděláme platební aplikace.
