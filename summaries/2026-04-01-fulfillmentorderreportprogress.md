---
date: 2026-04-01
title: "fulfillmentOrderReportProgress mutace pro 3PL progress reporting"
title_en: "Report Fulfillment Order progress with new fulfillmentOrderReportProgress GraphQL mutation"
slug: fulfillmentorderreportprogress
zdroj: https://shopify.dev/changelog/report-fulfillment-order-progress-with-new-fulfillmentorderreportprogress-graphql-mutation
shrnuto_dne: 2026-04-29

kategorie: [nova-api, integrace]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 6 fulfillment methods (createFulfillment, getFulfillmentOrderByOrderId atd.). Nová mutace umožňuje 3PL/warehouse partnerovi reportovat progress fulfillment orderu — vhodné pokud integrace propojuje WMS/3PL systém."
dotcene_klienty: []
souvisejici: []

tldr: "API 2026-04: 3PL nově reportuje progress fulfillment orderů přes fulfillmentOrderReportProgress (s webhook + status notes)."
tagy: [fulfillment, 3pl, webhook, logistics]
---

## Co se mění
API verze **2026-04** zavádí mutaci `fulfillmentOrderReportProgress`, která umožňuje **3PL** (third-party logistics) nebo warehouse partnerovi reportovat průběžný stav fulfillment orderu — s volitelným status note. Změna spouští **webhook** pro merchanta o aktualizaci progresu.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace propojuje klienta s 3PL/WMS systémem (např. odesílání objednávek do skladu, příjem statusů zpět), tato mutace nahrazuje custom workaroundy. Místo updatovat order tags nebo metafields lze nyní volat dedicated mutaci. Webhook poslouchá merchant, takže notification flow je jednodušší.

**Pro PM / PO:**
Nice-to-have pro klienty s WMS integrací — lepší tracking visibility, čistší audit trail.

## Použití v Integrátoru
**Možná** — máme `createFulfillment`, `createFulfillmentEvent` v naší integraci. Pokud nějaký klient potřebuje granulární progress reporting (např. „picking", „packed", „shipped"), tato mutace je čistší než custom event flow.

## Rizika a edge cases
- Pouze pro registered fulfillment service apps
- Webhook subscription musí být aktivní na merchant straně
