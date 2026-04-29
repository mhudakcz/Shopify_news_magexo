---
date: 2026-02-04
title: "Pickup in Store pro B2B zákazníky"
title_en: "Pickup in Store for B2B"
slug: pickup-in-store-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme draft order a fulfillment methods. B2B pickup flow vyžaduje konkrétní setup na úrovni location + delivery method, naše integrace mohou číst/zapisovat objednávky včetně pickup option."
dotcene_klienty: []

tldr: "B2B zákazníci si mohou v checkoutu zvolit vyzvednutí v prodejně místo doručení."
tagy: [b2b, fulfillment, pickup, checkout]
---

## Co se mění
**Pickup in Store** doručovací metoda je nyní k dispozici pro **B2B kupující** v Shopify checkoutu. Dříve byla omezena na DTC zákazníky. Spojuje B2B objednávky s offline distribučními uzly merchanta.

## Použití v Integrátoru
**Možná** — pokud klient s B2B aktivuje pickup, naše integrace by měla správně přečíst delivery option a propsat ho do downstream systému (ERP, fulfillment).
