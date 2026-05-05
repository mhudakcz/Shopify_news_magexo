---
date: 2026-04-01
title: "Product bundles a komponenty na draft order status v Customer Accounts"
title_en: "Product bundles and their components now represented on draft order status page in customer accounts"
slug: product-bundles-draft-order-customer-account
zdroj: https://changelog.shopify.com/posts/product-bundles-and-their-components-now-represented-on-draft-order-status-page-in-customer-accounts
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme draft order methods. Customer Account API je separate, ale customer-facing reprezentace bundlů koresponduje s components polem na DraftOrderLineItem."
tldr: "Draft order status v Customer Accounts (logged-in zákazník) zobrazí bundles a jejich komponenty pro lepší přehlednost — aligned s API změnou (line item components na draft orders)."
tagy: [customer-account, draft-order, bundle, components]
souvisejici: [line-item-components-draft-orders-customer-account]
---

## Co se mění
**Draft order status page** v Customer Accounts (logged-in zákazník vidí svoje quotation/draft orders) nově zobrazí **bundles a jejich komponenty** přehledně rozepsané. Customer vidí, co konkrétně bundle obsahuje.

Souvisí s [Line item components na draft orders v Customer Account API](../zmena/line-item-components-draft-orders-customer-account/) z dev changelogu.

## Použití v Integrátoru
**Možná** — naše Admin draft order methods (`getDraftOrderDetail`) už dnes pracují s components. Customer Account API je separate čtecí vrstva, kterou aktivně neimplementujeme.
