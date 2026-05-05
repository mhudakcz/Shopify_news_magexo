---
date: 2026-03-11
title: "Tracking app activity a permissions ze Settings"
title_en: "Track app activity and permissions from Settings"
slug: track-app-activity-permissions
zdroj: https://changelog.shopify.com/posts/track-app-activity-and-permissions-from-settings
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "App audit UI v Adminu. Naše custom apps mohou být v něm vidět, ale ze strany merchant view, ne developer view."
tldr: "Settings > Apps zobrazí Admin API activity, data privacy access, app history a Pixel connections — pro informované rozhodování o app stack merchanta."
tagy: [admin, apps, audit, security, privacy]
---

## Co se mění
**Settings > Apps** zobrazuje:
- **Admin API activity** per app (volání, frequency)
- **Data privacy access** detaily (GDPR-relevant)
- **App history** (instalace / updates)
- **Pixel connections**

Cíl: merchant vidí, co konkrétní app dělá, a může se rozhodnout, jestli ji chce.

## Použití v Integrátoru
**Nepoužíváme** — Admin UI feature. Pro našich klientech znamená, že naše integrace bude lépe viditelné v jejich app audit (pro security review apod.).
