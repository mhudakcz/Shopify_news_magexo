---
date: 2026-04-24
title: "MATCHES operator v ShopifyQL pro filtraci dle chování zákazníků"
title_en: "Use MATCHES in ShopifyQL to filter by what customers did"
slug: shopifyql-matches-customer-behavior
zdroj: https://changelog.shopify.com/posts/use-matches-in-shopifyql-to-filter-by-what-customers-did
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "ShopifyQL je query language pro Analytics, my analytics queries nepoužíváme."
kontext:
  background: |
    ShopifyQL je proprietární dotazovací jazyk Shopify navržený specificky pro e-commerce analytiku. Syntaxí připomíná SQL, ale je zaměřen na commerce entity jako objednávky, zákazníci, produkty a sessiony. Spouštět ho lze přes GraphQL Admin API, vestavěný editor v administraci nebo Python SDK. Klíčovým stavebním kamenem je klauzule WHERE, která umožňuje filtraci výsledků — MATCHES je rozšíření této klauzule pro tzv. semi-join výrazy, tedy filtrování přes kolekce propojených entit.

    MATCHES operátor byl do ShopifyQL přidán proto, aby behaviorální logika Customer Segmentation (funkce pro tvorbu zákaznických segmentů) mohla být zrcadlově použita i v Analytics reportech. Segmenty jako „zákazník, který nakoupil produkt X v posledních 30 dnech" byly dříve definovatelné v segmentaci, ale analytické dotazy takový výraz nepodporovaly. MATCHES tento rozdíl smazává: výraz `WHERE products_purchased MATCHES (quantity >= 2, date >= -30d)` funguje konzistentně v obou nástrojích.

    Z praktického hlediska umožňuje MATCHES filtrovat zákazníky nejen podle toho, kdo jsou (demografika, lokace), ale podle toho, co udělali — nákupy, objednávky, e-mailové interakce nebo prohlížené produkty. To přináší hlubší segmentaci přímo v analytickém reportu bez nutnosti přechodu do Customer Segmentation. Funkce je dostupná přes ShopifyQL editor v sekci Analytics Shopify administrace a je relevantní zejména pro merchants s komplexnějšími potřebami zákaznické analýzy.

    ShopifyQL se dále rozvíjí i jako základ pro Flow automatizace — nová akce „Get analytics data using ShopifyQL" ve Flow umožňuje využít výsledky dotazů jako proměnné v automatizovaných workflow.
  priklad: |
    FROM customers
    SHOW customer_id, email
    WHERE products_purchased MATCHES (quantity >= 2, date >= -30d)
  zdroje:
    - title: "Use MATCHES in ShopifyQL to filter by what customers did – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/use-matches-in-shopifyql-to-filter-by-what-customers-did"
    - title: "ShopifyQL – Shopify Developers"
      url: "https://shopify.dev/docs/api/shopifyql"
    - title: "Flow: nová akce pro získání analytics dat přes ShopifyQL"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-shopifyql-action/"
    - title: "Spot trends s novými Analytics insights"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/spot-trends-analytics-insights/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "ShopifyQL podporuje MATCHES operator ve WHERE klauzuli pro filtrování reportů podle vzorců chování zákazníků — sjednocuje logiku s Customer Segmentation."
tagy: [shopifyql, analytics, customer-segmentation, matches]
---

## Co se mění
**ShopifyQL** (analytics query language) přidává **`MATCHES`** operator do WHERE klauzule. Lze filtrovat reporty podle behaviorálních vzorců zákazníků (typicky „nakoupil X, ale nenakoupil Y", „returner customer", apod.). Logika sjednocena s Customer Segmentation.

## Použití v Integrátoru
**Nepoužíváme** — ShopifyQL queries pro analytics neimplementujeme.
