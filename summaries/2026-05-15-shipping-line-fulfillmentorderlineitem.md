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

kontext:
  background: |
    FulfillmentOrderLineItem je GraphQL objekt Shopify Admin API reprezentující jednu položku v rámci FulfillmentOrder — tedy skupiny produktů přidělených konkrétní fulfillment službě nebo skladu. Každá taková položka sleduje množství k vychystání, produktová metadata a logistické atributy jako `requiresShipping`. ShippingLine je přidružený objekt popisující dopravní metodu: obsahuje název, kód a zdroj přepravní služby přiřazené k danné části objednávky.

    Shopify zavedl FulfillmentOrder API jako moderní náhradu za starší plochý model fulfillmentu (dostupný od API 2022-07). V komplexních scénářích — například při kombinaci více doručovacích profilů nebo přidělení položek různým skladům — mohla jedna objednávka obsahovat více FulfillmentOrderů s odlišnými shipping metodami. Informaci o přepravci přitom bylo nutné dohledat přes parent `Order.shippingLines`, což si vyžadovalo extra round-trip a ruční spárování.

    Přidání `shippingLine` přímo na `FulfillmentOrderLineItem` v API 2026-07 tuto mezeru uzavírá. Fulfillment aplikace, WMS integrace a 3PL konektory nyní mohou získat shipping method v jediném dotazu bez dodatečné navigace přes Order. To je zvláště přínosné pro obchody se split fulfillmentem nebo mixed-carrier scénáři, kde přesná identifikace dopravce na úrovni položky určuje, do jakého toku WMS záznam vstoupí.

    Tato změna navazuje na sérii fulfillment API vylepšení — spolu s mutací `fulfillmentOrderReportProgress` (API 2026-04) a možností označit fulfillment jako doručený bez trackingu tvoří Shopify konzistentní vrstvu pro granulární viditelnost logistického procesu.
  zdroje:
    - title: "Shopify Changelog: Shipping line field now available on FulfillmentOrderLineItem"
      url: "https://shopify.dev/changelog/shipping-line-field-now-available-on-fulfillmentorderlineitem"
    - title: "Shopify Admin GraphQL: FulfillmentOrderLineItem object"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem"
    - title: "Shopify News Archive: fulfillmentOrderReportProgress"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/fulfillmentorderreportprogress/"
    - title: "Shopify News Archive: mark-fulfillments-delivered-without-tracking"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/mark-fulfillments-delivered-without-tracking/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
