---
date: 2026-04-01
title: "Multi-channel support pro sales channel apps"
title_en: "Multi-channel support for sales channel apps"
slug: multi-channel-sales-channel-apps
zdroj: https://shopify.dev/changelog/multi-channel-support-for-sales-channel-apps
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se sales channel apps (typicky integrace s externími marketplaces — Amazon, Google Shopping). Neděláme sales channel apps."
dotcene_klienty: []

tldr: "Sales channel apps mohou nyní mít více kanálů per shop s oddělenými specifikacemi."
tagy: [sales-channel, marketplace, multi-channel]
---

## Co se mění
Aplikace typu **Sales Channel** (oficiální klasifikace v Shopify pro integrace prodávající přes externí marketplace — Amazon, Google Shopping, Facebook atd.) mohou v API 2026-04 mít **více kanálů per shop** s oddělenými specifikacemi a accounts. Dříve byl 1 kanál per app per shop.

## Použití v Integrátoru
**Nepoužíváme** — neděláme sales channel apps. Naše integrace jsou typicky data-sync (ERP, marketplace) bez Sales Channel klasifikace.
