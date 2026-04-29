---
date: 2026-04-01
title: "Tagy na slevách v Admin API od 2026-04"
title_en: "Add Tags to Discounts"
slug: add-tags-to-discounts
zdroj: https://shopify.dev/changelog/add-tags-to-discounts
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme discount methods (createDiscountCodeBasic, getAllDiscountCodes, getDiscountCode). Pole tags lze přidat do queries pro lepší organizaci a filtraci slev."
dotcene_klienty: []
souvisejici: [scannable-discount-codes-qr]

tldr: "Od API 2026-04 lze taggovat slevy v Admin API pro lepší organizaci a filtrování."
tagy: [discount, tags, organization]
---

## Co se mění
API verze **2026-04** zavádí pole `tags` na slevách (`DiscountCode`, `DiscountAutomatic`) v Admin GraphQL API. Tagy umožňují labelovat slevy a později filtrovat — např. `kampan-zima-2026`, `b2b-only`, `vip-tier`.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pole `tags` lze přidat do existujících discount queries (`getAllDiscountCodes`, `getDiscountCode`). Při zápisu (`createDiscountCodeBasic`) lze tagy nastavit. Žádný breaking change — pole je opt-in.

**Pro PM / PO:**
Vhodné pro klienty s velkým počtem slev — usnadní reporting (např. „kolik objednávek prošlo přes slevu z kampaně X"). Nice-to-have feature.

## Použití v Integrátoru
**Možná** — přidat tags do discount queries pokud konkrétní klient potřebuje granulárnější tracking/filtraci. Vyžaduje upgrade na 2026-04.
