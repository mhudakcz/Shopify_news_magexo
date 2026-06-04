---
date: 2026-06-04
title: "Checkout And Accounts Configuration API — unified branding"
title_en: "Checkout And Accounts Configuration API for unified branding"
slug: checkout-accounts-configuration-api
zdroj: https://shopify.dev/changelog/checkout-and-accounts-configuration-api-for-unified-branding-across-checkout-customer-accounts-and-sign-in
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Plus-only branding API. Naše integrace nesahá na checkout branding config."
dotcene_klienty: []
souvisejici: [unified-branding-checkout-customer-accounts, refreshed-signin-page-customer-accounts]

tldr: "Nové unified API (2026-04) konsoliduje checkout profile a branding APIs pro Shopify Plus — konzistentní branding napříč checkout, customer accounts i sign-in. Market-specific overrides. _Původně publikováno 13. 5. 2026 (audit doplnění)._"
tagy: [checkout, branding, customer-account, plus, configuration-api]
---

## Co se mění
API verze **2026-04** zavádí **Checkout And Accounts Configuration API** — konsoliduje rozházené APIs pro:
- Checkout profil
- Customer accounts branding
- Sign-in stránku
- Market-specific customization

Plus merchanti tak řídí branding 3 vrstev z jednoho API.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Nepoužíváme** — Plus branding feature. Pro klienty s Plus + multi-market reference.
