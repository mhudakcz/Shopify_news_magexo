---
date: 2026-04-15
title: "Nová CSS proměnná --shopify-safe-area-inset-bottom pro mobilní embedded apps"
title_en: "New CSS variable for mobile safe area insets"
slug: css-variable-mobile-safe-area
zdroj: https://shopify.dev/changelog/new-css-variable-for-mobile-safe-area-insets
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se embedded apps běžících v Shopify Mobile přes App Bridge. Neděláme embedded apps."
dotcene_klienty: []

tldr: "App Bridge poskytuje --shopify-safe-area-inset-bottom CSS variable pro embedded apps na Shopify Mobile."
tagy: [app-bridge, mobile, css]
---

## Co se mění
App Bridge v embedded apps běžících v Shopify Mobile poskytuje novou CSS proměnnou `--shopify-safe-area-inset-bottom`, která vyplňuje hodnotu safe area (notch, home indicator) — pro prevenci překrytí obsahu systémovými prvky.

## Použití v Integrátoru
**Nepoužíváme** — neděláme embedded apps běžící uvnitř Shopify Mobile přes App Bridge.
