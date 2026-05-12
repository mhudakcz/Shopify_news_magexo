---
date: 2026-05-09
title: "Flow: nová akce pro získání analytics dat přes ShopifyQL"
title_en: "Flow: New action to get analytics data using ShopifyQL"
slug: flow-shopifyql-action
zdroj: https://changelog.shopify.com/posts/flow-new-action-to-get-analytics-data-using-shopifyql
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-12

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow + ShopifyQL combo. Flow workflows nepoužíváme přímo, naše integrace běží server-side."
dotcene_klienty: []
souvisejici: [flow-new-actions-get-data, shopifyql-matches-customer-behavior]

tldr: "Nová Flow akce typu 'Get analytics data using ShopifyQL' — workflow může vytáhnout sales, sessions, inventory data jako proměnnou a použít je pro conditions a další actions."
tagy: [flow, shopifyql, analytics, automation]
---

## Co se mění
Shopify **Flow** dostává novou akci **„Get analytics data using ShopifyQL"**:
- Workflow zadá ShopifyQL query (sales, sessions, inventory, custom metriky)
- Výsledek se uloží jako workflow variable
- Lze ho použít pro **conditions** (např. „pokud sales < X, pošli alert") nebo **další actions**

Spojuje analytics data s automation flow bez nutnosti custom kódu.

## Použití v Integrátoru
**Nepoužíváme** — Flow internal feature. Můžeme klientovi nabídnout jako alternativu k custom reporting middleware.

## Související
- [Flow nové 'Get data' akce](../zmena/flow-new-actions-get-data/)
- [MATCHES operator v ShopifyQL](../zmena/shopifyql-matches-customer-behavior/)
