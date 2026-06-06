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

kontext:
  background: |
    Rejection reason codes jsou standardizované identifikátory, které platební aplikace předávají Shopify při zamítnutí transakce. V Payments Apps API jsou tyto kódy definovány výčtovým typem (enumem) `PaymentSessionStateRejectedReason`, jenž se používá jako hodnota pole `code` v inputu `PaymentSessionRejectionReasonInput` a zároveň jako pole `reason` v objektu `PaymentSessionStateRejected`. Platební aplikace tak sdělují, proč konkrétní platební relace skončila neúspěchem.

    Historicky enum nabízel jen omezený počet obecných hodnot — například `OTHER` nebo `RISKY` — které nestačily pro přesný popis příčiny selhání. Shopify proto v rámci Payments Apps API (verze 2026-04) enum výrazně rozšířila na více než 50 hodnot. Přibyly kódy jako `INSUFFICIENT_FUNDS`, `FRAUD_SUSPECTED`, `AUTHENTICATION_REQUIRED`, `EXPIRED_CARD`, `INVALID_CVC` nebo `MERCHANT_RULE`. Starší kód `RISKY` byl označen jako deprecated ve prospěch přesnějšího `FRAUD_SUSPECTED`. Zároveň bylo přidáno pole `source`, které specifikuje, zda odmítnutí iniciovalo `NETWORK` (vydavatel karty nebo karetní síť) nebo `PROVIDER` (samotný zpracovatel platby).

    Granulární kódy odmítnutí zlepšují viditelnost pro obchodníky i pro vývojáře platebních aplikací. Přesný důvod zamítnutí umožňuje například lépe segmentovat neúspěšné objednávky, aktivovat smysluplné retry strategie nebo zobrazit zákazníkovi srozumitelné chybové hlášení. Tato změna je součástí dlouhodobého trendu, kdy Shopify zpřesňuje rozhraní Payments Apps API, paralelně například s posílením bezpečnosti (mTLS certifikáty) nebo rozšířením podpory lokálních platebních metod.
  zdroje:
    - title: "Shopify Changelog: New rejection reason codes in Payments Apps GraphQL API"
      url: "https://shopify.dev/changelog/new-rejection-reason-codes-in-payments-apps-graphql-api"
    - title: "Shopify Docs: PaymentSessionStateRejectedReason enum"
      url: "https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateRejectedReason"
    - title: "Shopify archive: mTLS klientský certifikát pro Payments Apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/mtls-payments-cert-renewal/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Payments Apps API 2026-04 přidává granulárnější kódy odmítnutí v PaymentSessionStateRejectedReason enumu."
tagy: [payments, rejection, enum]
---

## Co se mění
Payments Apps API verze **2026-04** rozšiřuje enum `PaymentSessionStateRejectedReason` o granulárnější rejection codes — místo obecných důvodů (typu `OTHER`) lze nyní vyjádřit specifická failure mode (insufficient funds, fraud, expired card atd.).

## Použití v Integrátoru
**Nepoužíváme** — Payments Apps API. Neděláme platební aplikace.
