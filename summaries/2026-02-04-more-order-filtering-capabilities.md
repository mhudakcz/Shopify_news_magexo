---
date: 2026-02-04
title: "Order filtering: custom metafields, total value, weight"
title_en: "More Order Filtering Capabilities"
slug: more-order-filtering-capabilities
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
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

kontext:
  background: |
    Filtrování objednávek v Shopify Admin GraphQL API probíhá prostřednictvím parametru `query` u dotazu `orders`. Tento parametr přijímá řetězec složený z klíčových slov, operátorů a komparátorů — umožňuje kombinovat libovolný počet kritérií do jednoho server-side dotazu.

    Historicky byly dostupné základní filtry jako stav platby (`financial_status`), stav plnění (`fulfillment_status`), datum vytvoření nebo e-mail zákazníka. Metafields na objednávkách bylo možné ukládat, ale jejich přímá filtrace v query chyběla — vývojáři museli načíst větší sady dat a filtrovat na straně klienta, což zvyšovalo počet API volání a spotřebu paměti. Shopify Winter '26 tuto mezeru zaplnil přidáním tří nových filter keys.

    Nové klíče mají konkrétní syntaxi: metafield se zadává jako `metafields.{namespace}.{key}:{hodnota}`, celková cena jako `current_total_price:>=1000` (podporuje plovoucí čísla a rozsahy), váha jako `total_weight:>=5kg` (s jednotkami g, kg, lb, oz). Filtr váhy je zvláště relevantní pro fulfilment a 3PL toky, kde se rozhoduje o dopravci na základě hmotnosti zásilky.

    Tato změna úzce souvisí s přidáním pole `weight` na typ `LineItem` v API 2026-07, které nahrazuje skalární pole `grams` strukturou `{ value, unit }`. Obě novinky společně budují konzistentnější datový model pro práci s hmotností objednávek napříč API.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Shopify Admin GraphQL API – orders query"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/queries/orders"
    - title: "LineItem.weight pole veřejně dostupné v Admin API od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/lineitem-weight-public-admin-api/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
