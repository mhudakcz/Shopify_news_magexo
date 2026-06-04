---
date: 2026-06-04
title: "Ship + pickup v jedné objednávce (Plus/Enterprise feature preview)"
title_en: "Ship and pickup in one order now available in feature preview"
slug: ship-and-pickup-one-order-preview
zdroj: https://shopify.dev/changelog/ship-and-pickup-in-one-order-feature-preview
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: stredni
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Multi-fulfillment-method order = order s více fulfillment orders s různými delivery methods. Naše fulfillment + order sync flow musí ošetřit case kdy order má mix shipping + pickup."
dotcene_klienty: []
souvisejici: [local-pickup-checkout-redesign, pickup-in-store-b2b]

tldr: "**Action Required pro Plus/Enterprise.** Single checkout = customer si vybere ship nebo pickup **per položku**. Order obsahuje multiple fulfillment orders s různými delivery methods — apps musí ošetřit. _Původně publikováno 6. 5. 2026 (audit doplnění)._"
tagy: [checkout, fulfillment, pickup, plus, enterprise, feature-preview]
---

## Co se mění
**Plus / Enterprise** merchanti mohou aktivovat **mixed fulfillment** v jednom checkoutu — zákazník si u každé položky vybere:
- **Shipping** (klasické doručení)
- **Pickup** (vyzvednutí v prodejně)

Důsledek: objednávka obsahuje **multiple fulfillment orders** s různými delivery methods. Aplikace pracující s fulfillment orders, line items nebo checkout extensions **musí toto reflektovat** — jinak hrozí broken UX nebo nesprávná data.

## Dopad pro nás
**Pro vývojáře:**
Naše `getFulfillmentOrderByOrderId`, `getOrdersFulfillmentOrdersWithLineItemsByOrderIds` queries vrátí více fulfillment orders per order — sync flow do WMS/ERP musí to ošetřit (typicky: split per delivery method, nebo merge s flag).

Konkrétně: checkout extensions, custom apps reading line item shipping context, ERP exporters — všechno potenciálně postižené.

**Pro PM / PO:**
Pro Plus klienty s mixed retail + e-com je to **velký feature**. Pro klienta s WMS integrací znamená rework — naplánovat do roadmapy.

## Použití v Integrátoru
**Možná** — záleží na klientovi. Pokud má retail + ship + WMS, je třeba audit naší fulfillment sync logiky.

## Rizika a edge cases
- Apps neaktualizované na multi-fulfillment-order pattern budou silently chybovat
- ERP/WMS exporters mohou míchat pickup orders se shipping (špatné routing)
- Customer-facing emails: nutné updatu šablon pro mixed-delivery confirmation
