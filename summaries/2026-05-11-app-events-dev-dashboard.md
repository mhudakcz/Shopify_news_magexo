---
date: 2026-05-11
title: "App Events: usage a performance data v Dev Dashboardu"
title_en: "App Events: See app usage and performance data in your Dev Dashboard"
slug: app-events-dev-dashboard
zdroj: https://shopify.dev/changelog/app-events-see-app-usage-and-performance-data-in-your-dev-dashboard
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "App Events API umožňuje custom event tracking pro naše custom integrace. Pokud bychom chtěli measure usage / billing klientových operací, je to nová možnost."
dotcene_klienty: []
souvisejici: [shopify-app-pricing-usage-subscriptions]

tldr: "App Events API umožňuje posílat události do Shopify single endpointu. Data se zobrazí v Dev Dashboard Logs vedle webhooks a API calls. Events lze převést na usage-based billing přes Shopify App Pricing."
tagy: [app-events, dev-dashboard, billing, usage, monitoring]
---

## Co se mění
**App Events API** umožňuje app developerům posílat **vlastní events** na Shopify single endpoint. Tyto events se zobrazí v **Dev Dashboard Logs** vedle webhooks a API calls — sjednocený view o aktivitě app pro merchant.

Klíčové: events lze **konvertovat na usage-based billing charges** přes nový Shopify App Pricing — měření aktivity → fakturace klientovi.

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom chtěli vidět granular usage data o naší integraci (kolik orders / customers / produktů jsme syncovali za klienta), App Events lze využít. Buď čistě pro monitoring, nebo pro **usage-based billing** (přes Shopify App Pricing).

**Pro PM / PO:**
Pokud někdy budeme nabízet integraci s billing model „pay per X synced records", tahle kombinace App Events + App Pricing dovolí to implementovat nativně přes Shopify.

## Použití v Integrátoru
**Možná** — relevantní hlavně pokud budeme dělat usage-based pricing. Pro stávající flat-fee integrace nemá direct dopad.

## Související
- [Shopify App Pricing — charge for usage/subscriptions](../zmena/shopify-app-pricing-usage-subscriptions/)
