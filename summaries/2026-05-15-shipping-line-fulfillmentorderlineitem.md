---
date: 2026-05-15
title: "shippingLine pole na FulfillmentOrderLineItem v 2026-07"
title_en: "Shipping line field now available on FulfillmentOrderLineItem"
slug: shipping-line-fulfillmentorderlineitem
zdroj: https://shopify.dev/changelog/shipping-line-field-now-available-on-fulfillmentorderlineitem
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 6 fulfillment methods (createFulfillment, getFulfillmentOrderByOrderId, getOrdersFulfillmentOrdersWithLineItemsByOrderIds atd.). Pole shippingLine na FulfillmentOrderLineItem zjednoduší identifikaci shipping method bez nutnosti samostatného query do order shipping lines."
dotcene_klienty: []

tldr: "Od API 2026-07 lze přímo na FulfillmentOrderLineItem queryovat shippingLine — vrací ShippingLine asociovaný s fulfillment order line itemem. Zjednodušuje order management a fulfillment app flow."
tagy: [fulfillment, shipping, line-item]
---

## Co se mění
GraphQL Admin API verze **2026-07** přidává pole `shippingLine` na typ `FulfillmentOrderLineItem`. Vrací `ShippingLine` objekt s informacemi o použité shipping method (title, cost, carrier). Předtím bylo nutné dotazovat shipping lines samostatně přes parent order.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Při sync fulfillment orderů do WMS / 3PL systému lze nově získat shipping method přímo z line item bez nested query. Naše `getOrdersFulfillmentOrdersWithLineItemsByOrderIds` query lze rozšířit o `shippingLine { title price carrier }`. Méně round-tripů, jednodušší kód.

**Pro PM / PO:**
Quality-of-life improvement pro fulfillment integrace. Klient s 3PL napojeným přes nás dostane přesnější / rychlejší shipping data.

## Použití v Integrátoru
**Ano** — máme heavy fulfillment use. Po upgrade na 2026-07 lze refactor query selektorů.
