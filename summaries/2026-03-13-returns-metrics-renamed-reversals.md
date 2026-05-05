---
date: 2026-03-13
title: "Returns metrics přejmenovány na 'reversals'"
title_en: "Returns metrics renamed to reversals"
slug: returns-metrics-renamed-reversals
zdroj: https://changelog.shopify.com/posts/returns-metrics-renamed-to-reversals
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [breaking-change, fyi]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics field rename. Naše integrace nedělají reporting nad Returns metrics."
tldr: "Analytics field 'Sales returns' přejmenován na 'Sales reversals'; 'Returned quantity' na 'Reversed quantity' — odlišuje order adjustments od fyzických returns."
tagy: [analytics, returns, naming]
---

## Co se mění
Analytics field rename:
- **„Sales returns"** → **„Sales reversals"**
- **„Returned quantity"** → **„Reversed quantity"**

Cíl: odlišit **order adjustments** (např. discount po objednání) od **fyzických returns** (zákazník vrátil zboží).

## Použití v Integrátoru
**Nepoužíváme** — analytics field rename, naše integrace ho nečtou.
