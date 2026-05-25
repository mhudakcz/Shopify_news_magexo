---
date: 2026-02-04
title: "Order filtering: custom metafields, total value, weight"
title_en: "More Order Filtering Capabilities"
slug: more-order-filtering-capabilities
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 23+ order methods (getAllOrders, getOrdersWithoutTag, getOrdersByNameOrderSync atd.). Filtrace podle metafields/value/weight rozšiřuje naše query options bez nutnosti client-side filteringu."
dotcene_klienty: []
souvisejici: []

tldr: "Admin a Order API nyní filtrují objednávky podle custom metafields, total value, weight."
tagy: [order, filter, metafield, query]
---

## Co se mění
Shopify Admin a Order API rozšiřují filter options při dotazování objednávek o:
- **Custom metafields** — filtrovat podle hodnoty libovolného metafieldu na orderu
- **Total value** — filtrovat podle celkové ceny (včetně rozsahů)
- **Weight** — filtrovat podle váhy (užitečné pro shipping/3PL flows)

## Dopad pro nás
**Pro vývojáře:**
Naše order queries mohou nově filtrovat server-side místo načíst all + filtrovat client-side. Šetří API calls a paměť při sync velkých objemů. Konkrétně `getAllOrders`, `getOrdersWithoutTag`, custom queries v naší integraci lze rozšířit.

**Pro PM / PO:**
Lepší reporting pro klienty — např. „dej mi všechny orders nad 10K EUR z poslední čtvrtletí" je teď jeden query.

## Použití v Integrátoru
**Ano** — naše order sync flow může těžit. Doporučuji projít vyšší-objem queries a zvážit filter migration.
