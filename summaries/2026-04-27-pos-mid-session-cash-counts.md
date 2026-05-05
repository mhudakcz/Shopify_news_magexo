---
date: 2026-04-27
title: "Mid-session cash counts v POS"
title_en: "Mid-session cash counts"
slug: pos-mid-session-cash-counts
zdroj: https://changelog.shopify.com/posts/mid-session-cash-counts
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-specific cash drawer feature. Neimplementujeme POS extensions."
tldr: "Personál může počítat hotovost kdykoli během aktivní směny a verifikovat drawer amount bez uzavření session — counts se automaticky logují pro reconciliation."
tagy: [pos, cash, register]
---

## Co se mění
**Mid-session cash counts**: personál v POS může nyní spočítat hotovost a ověřit drawer amount **kdykoli během směny**, bez nutnosti session zavřít. Všechny counts se logují pro končené reconciliation.

## Použití v Integrátoru
**Nepoužíváme** — POS cash management feature.
