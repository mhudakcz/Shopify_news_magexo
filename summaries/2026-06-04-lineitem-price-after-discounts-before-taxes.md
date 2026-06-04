---
date: 2026-06-04
title: "LineItem.priceAfterAllDiscountsBeforeTaxesSet v 2026-07"
title_en: "LineItem.priceAfterAllDiscountsBeforeTaxesSet field now available"
slug: lineitem-price-after-discounts-before-taxes
zdroj: https://shopify.dev/changelog/lineitem-priceafteralldiscountsbeforetaxesset-field-now-available
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 23+ order methods (getOrder, getAllOrders, getLineItemsByOrderId atd.). Nové pole zjednodušuje order export do ERP — částka po slevách, před taxes — což odpovídá REST current_subtotal_price_set."
dotcene_klienty: []
souvisejici: [lineitem-weight-public-admin-api, pretax-price-removed-rest]

tldr: "GraphQL Admin API 2026-07 přidává pole `priceAfterAllDiscountsBeforeTaxesSet` na LineItem (ekvivalent REST `current_subtotal_price_set`). Pro export do ERP / účetnictví. _Původně publikováno 27. 4. 2026 (audit doplnění)._"
tagy: [order, line-item, price, discount, tax, admin-api]
---

## Co se mění
Typ `LineItem` v Admin GraphQL API verze **2026-07** dostává nové pole `priceAfterAllDiscountsBeforeTaxesSet`. Vrací **částku po aplikování všech slev, ale před tax kalkulací** (pre-tax subtotal). Ekvivalent REST API `current_subtotal_price_set` field.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Order export flow do ERP/účetnictví obvykle potřebuje rozdělit:
1. Gross (před slevami)
2. **Po slevách, před taxes** ← nově přístupné z jednoho field
3. After taxes (total)

Dosud bylo nutné mít separátně discount allocations + line item price. Nově jeden field. Backwards compatible — existing queries fungují.

## Použití v Integrátoru
**Ano** — máme heavy order use. Po upgrade na 2026-07 lze refactor export flow na cleaner field.

## Související
- [LineItem.weight v 2026-07](../zmena/lineitem-weight-public-admin-api/)
- [pre_tax_price odstraněno z REST](../zmena/pretax-price-removed-rest/)
