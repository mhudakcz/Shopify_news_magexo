---
date: 2026-05-06
title: "Více admin intents podporuje Settings (notifications, payments, gift cards…)"
title_en: "More admin intents now support Settings"
slug: more-admin-intents-settings
zdroj: https://shopify.dev/changelog/more-admin-intents-now-support-settings
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-07

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin intents jsou App Bridge feature pro routing v embedded apps. Neimplementujeme embedded apps."
dotcene_klienty: []
souvisejici: [admin-intents-settings]

tldr: "7 nových Settings intents pro admin apps — editors pro notifications, payment capture, gift cards, delivery profiles, business details s contextual overlays."
tagy: [app-bridge, intents, settings]
---

## Co se mění
Admin intents (App Bridge feature pro deep-linking do Shopify Adminu z embedded apps) podporují **7 nových Settings editors**:
- Notifications
- Payment capture
- Gift cards
- Delivery profiles
- Business details
- (a 2 další)

Apps mohou otevřít editor s **contextual overlay** (modálem nad jejich aplikací).

## Použití v Integrátoru
**Nepoužíváme** — App Bridge feature pro embedded apps. Naše integrace běží server-side, ne jako embedded UI.
