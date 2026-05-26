---
date: 2026-05-23
title: "Čitelnější payout balance a reserve info v Shopify Payments"
title_en: "Clearer payout balance and reserve information in Shopify Payments"
slug: clearer-payout-balance-shopify-payments
zdroj: https://changelog.shopify.com/posts/clearer-payout-balance-and-reserve-information-in-shopify-payments
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-26

kategorie: [fyi]
api_oblast: billing
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "UI změna v Shopify Payments dashboardu. Naše integrace finance vrstvu nesahá."
dotcene_klienty: []

tldr: "Payouts page má jasnější labeling — 'To be paid' přejmenováno na 'Payout balance' s vysvětlujícím textem o tom, jak se počítá."
tagy: [payments, payout, ui, balance]
---

## Co se mění
**Shopify Payments Payouts page** má cleaner labeling:
- **„To be paid" → „Payout balance"** (jasnější název)
- Doprovodný explanatory text o tom, jak se balance vypočítá (gross sales − fees − reserves − holds)

UI-only změna, žádná API nebo logic.

## Použití v Integrátoru
**Nepoužíváme** — finance UI feature.
