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

kontext:
  background: |
    FulfillmentOrder je základní entita Shopify fulfillment pipeline — reprezentuje skupinu položek objednávky, která má být zpracována jednou konkrétní fulfillment službou nebo skladem. Každý FulfillmentOrder prochází stavovým automatem (OPEN → IN_PROGRESS → atd.) a slouží jako rozhraní mezi merchantem a subjektem zajišťujícím fyzické vychystání a odeslání zboží.

    Shopify rozlišuje dva typy správy fulfillment orderů: objednávky spravované merchantem a objednávky přidělené registrované fulfillment službě (typicky 3PL nebo WMS). Před zavedením dedikované mutace neměly 3PL systémy standardizovaný způsob, jak průběžně informovat merchantův obchod o stavu práce — vývojáři se uchylovali ke kombinaci fulfillment eventů, metafieldů nebo vlastních tagů. Shopify fulfillment service API existuje dlouhodobě, ale granulární progress reporting na úrovni FulfillmentOrder byl dosud chybějícím článkem.

    Nová mutace vyžaduje scope `write_assigned_fulfillment_orders` nebo `write_merchant_managed_fulfillment_orders` spolu s oprávněním `fulfill_and_ship_orders`, takže je dostupná pouze aplikacím s explicitně registrovanou fulfillment službou. Výsledkem volání je přechod orderu do stavu IN_PROGRESS s volitelnou textovou poznámkou (max. 256 znaků), přičemž Shopify automaticky odešle merchant webhook `fulfillment_orders/progress_reported`. Tento přístup standardizuje audit trail a zlepšuje viditelnost logistického procesu pro merchant i zákazníka.
  priklad: |
    mutation {
      fulfillmentOrderReportProgress(
        id: "gid://shopify/FulfillmentOrder/123"
        progressReport: { reasonNotes: "Picking started" }
      ) {
        fulfillmentOrder { id status }
        userErrors { field message }
      }
    }
  zdroje:
    - title: "Shopify Changelog: fulfillmentOrderReportProgress GraphQL mutation"
      url: "https://shopify.dev/changelog/report-fulfillment-order-progress-with-new-fulfillmentorderreportprogress-graphql-mutation"
    - title: "Shopify Admin GraphQL: fulfillmentOrderReportProgress mutation"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReportProgress"
    - title: "Shopify News Archive: shipping-line-fulfillmentorderlineitem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shipping-line-fulfillmentorderlineitem/"
    - title: "Shopify News Archive: mark-fulfillments-delivered-without-tracking"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/mark-fulfillments-delivered-without-tracking/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
