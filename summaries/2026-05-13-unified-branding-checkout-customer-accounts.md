---
date: 2026-05-13
title: "Unified branding napříč checkout, customer accounts a sign-in"
title_en: "Unified branding customization across checkout and customer accounts"
slug: unified-branding-checkout-customer-accounts
zdroj: https://changelog.shopify.com/posts/draft-unified-branding-customization-across-checkout-and-customer-accounts
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Checkout/account branding config. Naše integrace branding nesahá."
dotcene_klienty: []
souvisejici: [customize-checkout-accounts-by-market]

tldr: "Checkout branding settings se nyní aplikují konzistentně napříč checkout, customer accounts i sign-in stránkami. Konfigurace logo / colors / typography na jednom místě, až 20 reusable brand colors."
tagy: [branding, checkout, customer-account, ui-config]
---

## Co se mění
**Branding settings** (logo, barvy, typografie) konfigurované přes Checkout And Accounts Configuration API se nyní aplikují **konzistentně napříč 3 vrstvy**:
1. **Checkout**
2. **Customer accounts**
3. **Sign-in pages**

Předtím každá vrstva měla vlastní branding config. Nově: jeden config = všude. Plus podpora pro **až 20 reusable brand colors**.

## Použití v Integrátoru
**Nepoužíváme** — branding je merchant config v Adminu.
