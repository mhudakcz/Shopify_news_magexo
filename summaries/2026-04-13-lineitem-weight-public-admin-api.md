---
date: 2026-04-13
title: "LineItem.weight pole veřejně dostupné v Admin API od 2026-07"
title_en: "LineItem.weight field now available in public Admin API"
slug: lineitem-weight-public-admin-api
zdroj: https://shopify.dev/changelog/lineitem-weight-field-now-available-in-public-admin-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 23+ order methods včetně getOrder, getAllOrders, getLineItemsByOrderId. Nové weight pole na LineItem lze přidat do queries pro shipping/logistic flow."
dotcene_klienty: []
souvisejici: [draftorderlineitem-grams-removed]

tldr: "Od API 2026-07 LineItem v Admin API obsahuje pole weight (s value + unit) místo jen grams."
tagy: [order, line-item, weight, shipping]
---

## Co se mění
Od API verze **2026-07** je na typu `LineItem` v Admin GraphQL API veřejně dostupné pole `weight`, které vrací **value + unit** (např. `{ value: 1.5, unit: KILOGRAMS }`) místo původního scalar pole `grams`. Použití `weight` je flexibilnější (podporuje různé jednotky a přesnost).

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, pole `weight` veřejně přístupné

## Dopad pro nás
**Pro vývojáře:**
Pokud čteme váhu line itemů pro shipping/logistic kalkulace, doporučuji přejít z `grams` na `weight { value, unit }`. Pole `grams` může být v budoucích verzích deprecated (na DraftOrderLineItem už je odstraněno v 2026-07 — viz souvisejicí).

**Pro PM / PO:**
Bez přímého dopadu pro koncového klienta, ale ulehčuje práci s objednávkami v různých jednotkách (lb, oz, g, kg). Vhodné pro mezinárodní/B2B klienty.

## Použití v Integrátoru
**Ano** — máme 23+ order methods (`getOrder`, `getAllOrders`, `getLineItemsByOrderId`, `getOrdersWithoutTag` atd.). Nové pole `weight` lze přidat do queries pro shipping/fulfilment flow. Žádný breaking change na našich existujících queries.

## Související
- [DraftOrderLineItem.grams odstraněno v 2026-07](../zmena/2026-04-11-draftorderlineitem-grams-removed/)
