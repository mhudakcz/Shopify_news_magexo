---
date: 2026-05-03
title: "Označení fulfillments bez trackingu jako delivered"
title_en: "Mark fulfillments without tracking as delivered"
slug: mark-fulfillments-delivered-without-tracking
zdroj: https://changelog.shopify.com/posts/mark-fulfillments-without-tracking-as-delivered
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme fulfillment methods (createFulfillment, getFulfillmentOrderByOrderId atd.). Tato UI změna umožňuje merchantovi manuálně označit delivery — pokud naše integrace syncuje fulfillment statusy, může se hodit i programaticky."
kontext:
  background: |
    Fulfillment v Shopify označuje proces přípravy a fyzického odeslání zboží zákazníkovi. Každý fulfillment je vázán na FulfillmentOrder — moderní GraphQL entitu, která od verze API 2023-07 zastřešuje celý životní cyklus plnění objednávky od přidělení po doručení. Fulfillment může mít různé stavy; stav "delivered" signalizuje úspěšné předání zásilky příjemci.

    Shopify historicky navázal stav doručení na carrier tracking — systém předpokládá, že zásilka má přiřazené sledovací číslo a statusy se aktualizují automaticky z dat dopravce. Pro merchanty s lokálními nebo nestandardními kurýry (rozvoz vlastními vozy, regionální přepravci bez API integrace) tak neexistoval nativní způsob, jak delivery potvrdit bez ručního obcházení. Tato mezera vedla k neúplným datům v administraci a zhoršené zákaznické komunikaci.

    Manuální označení jako delivered rozšiřuje správu objednávek i na modely mimo standardizované shipping integrace. Funkce je přístupná z Fulfilled card i hromadně přes Orders page, což zrychluje operativní zpracování zejména pro obchody s vyšším objemem místních doručení. Pro vývojářské integrace přináší nový možný stav fulfillmentu bez přítomnosti tracking eventu, který je třeba správně zachytit v downstream systémech.

    Tato změna doplňuje širší sadu nástrojů pro granulární fulfillment reporting — spolu s mutací fulfillmentOrderReportProgress (API 2026-04) a polem shippingLine na FulfillmentOrderLineItem (API 2026-07) Shopify systematicky zpřesňuje viditelnost logistického procesu pro merchanty i jejich integrační partnery.
  zdroje:
    - title: "Shopify Changelog: Mark fulfillments without tracking as delivered"
      url: "https://changelog.shopify.com/posts/mark-fulfillments-without-tracking-as-delivered"
    - title: "Shopify Apps: Fulfillment overview"
      url: "https://shopify.dev/docs/apps/fulfillment"
    - title: "Shopify News Archive: fulfillmentOrderReportProgress"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/fulfillmentorderreportprogress/"
    - title: "Shopify News Archive: shipping-line-fulfillmentorderlineitem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shipping-line-fulfillmentorderlineitem/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Personál může nově označit shipping fulfillments bez carrier trackingu jako delivered přímo z Fulfilled card nebo Orders page — pomáhá merchantům s nepodporovanými carriery udržovat přesný delivery status."
tagy: [fulfillment, delivery, admin-ui]
---

## Co se mění
V Shopify Adminu lze nyní **manuálně označit fulfillment jako delivered** i bez carrier trackingu. Funguje na Fulfilled card a Orders page. Užitečné pro merchanty s lokálními kurýry nebo carrier mimo standardní integrace.

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace syncuje fulfillment status do downstream systému (ERP, CRM), nově se může objevit `delivered` status i bez tracking eventu. Naše `getOrdersFulfillmentOrdersWithLineItemsByOrderIds` query může vrátit tento stav.

## Použití v Integrátoru
**Možná** — fulfillment methods používáme. Doporučuji ověřit, jestli sync flow správně handluje delivered status bez tracking number.
