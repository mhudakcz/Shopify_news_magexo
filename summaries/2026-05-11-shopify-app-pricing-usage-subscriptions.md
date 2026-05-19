---
date: 2026-05-11
title: "Shopify App Pricing: usage + subscriptions billing kombinace"
title_en: "Shopify App Pricing: charge for usage, recurring subscriptions, or both"
slug: shopify-app-pricing-usage-subscriptions
zdroj: https://shopify.dev/changelog/shopify-app-pricing-charge-for-usage-recurring-subscriptions-or-both
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api, nova-prilezitost]
api_oblast: billing
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Billing model pro apps publikované do Shopify App Store. Naše integrace běží jako custom apps (per klient), tak App Pricing nepoužíváme přímo. Ale pokud bychom někdy publikovali public app, je to relevantní."
dotcene_klienty: []
souvisejici: [app-events-dev-dashboard]

tldr: "Shopify App Pricing (dřív Managed Pricing) nyní podporuje subscriptions i usage-based charges konfigurované z Partner Dashboardu. Nové APIs poskytují real-time subscription status a historical billing data."
tagy: [billing, app-pricing, subscriptions, usage]
---

## Co se mění
**Shopify App Pricing** (dřív Managed Pricing) se rozšiřuje:
- **Subscriptions** (recurring monthly/yearly) — již existující
- **Usage-based charges** — nově, konfigurovatelné per event type
- **Kombinace** — base subscription + extra usage charges

Nová APIs poskytují:
- **Real-time subscription status**
- **Historical billing data** pro reporting / reconciliation

Konfigurace v **Partner Dashboardu**.

## Použití v Integrátoru
**Možná** — relevantní jen pokud publikujeme public app. Naše custom apps tomu nepodléhají.
