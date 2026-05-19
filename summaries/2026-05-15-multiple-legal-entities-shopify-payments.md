---
date: 2026-05-15
title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
title_en: "Sell from multiple legal entities in the same country using Shopify Payments"
slug: multiple-legal-entities-shopify-payments
zdroj: https://changelog.shopify.com/posts/sell-from-multiple-legal-entities-in-the-same-country-using-shopify-payments
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost, integrace]
api_oblast: billing
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Více legal entities přes Markets je strukturní změna. Pokud klient má B2B + D2C oddělené, naše order sync flow může potřebovat split podle entity (různé fakturační údaje, různé bankovní účty)."
dotcene_klienty: []
souvisejici: [customize-checkout-accounts-by-market]

tldr: "Merchant může nakonfigurovat více Shopify Payments účtů v jednom storu přes Markets — prodej online a retail pod různými legal entities, různé entities pro různé retail lokace, oddělení B2B a D2C."
tagy: [shopify-payments, markets, b2b, legal-entity, multi-entity]
---

## Co se mění
**Shopify Payments** rozšířený o **multi-entity** support — merchant v jednom Shopify storu konfiguruje **více Shopify Payments účtů** vázaných na **různé legal entities** (různé IČO/DIČ, různé bankovní účty) přes Markets. Use cases:
- **Online vs. retail** pod oddělenými entities
- **Různé retail lokace** s vlastními entities
- **Oddělené B2B a D2C** sales pod různými entities

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace syncuje orders + payouts s ERP/účetnictvím, je třeba ověřit jak Admin API expozuje entity per order. Pravděpodobně přes location nebo market context. Sync flow → vyfiltrovat podle entity, propsat do správného účtu v ERP.

**Pro PM / PO:**
**Velká karta pro B2B + retail kombinace klienty** — typicky distributor s vlastním e-shopem. Předtím vyžadovalo multiple stores; teď stačí jeden.

## Použití v Integrátoru
**Možná** — relevantní pro klienty s komplexní legal structure. Audit při onboardingu.
