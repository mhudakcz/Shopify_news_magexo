---
date: 2026-08-10
title: "Shop Campaigns performance data v analytics apps (přes ShopifyQL)"
title_en: "See Shop Campaigns performance in your analytics tools"
slug: shop-campaigns-performance-analytics-tools
zdroj: https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools
shrnuto_dne: 2026-08-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient používá BI/reporting nástroj napojený na ShopifyQL, může nově zobrazit i výkon Shop Campaigns vedle ostatních marketingových kanálů."
dotcene_klienty: []
souvisejici: [shopify-analytics-full-stack-app-platform, campaign-autopilot-ai-marketing, shopifyql-matches-customer-behavior]
tldr: "Shopify zpřístupnil data o výkonu Shop Campaigns (ad spend, ROAS, CAC) přes ShopifyQL, takže je teď vidí i externí analytics a BI nástroje."
tagy: [shop-campaigns, analytics, roas, ad-spend, cac, apps, shopifyql]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shop Campaigns je Shopify nástroj pro placenou propagaci produktů v rámci Shop app a přidružených kanálů. Dosud byl výkon těchto kampaní vidět prakticky jen v samotném Shopify adminu, což znesnadňovalo konsolidovaný pohled na marketingový mix pro merchanty, kteří výdaje a výkon sledují v externích nástrojích.
    Tato novinka otevírá data o výkonu Shop Campaigns přes ShopifyQL (schéma marketing/shop_campaign_insights, verze 2026-07). K dispozici jsou metriky jako výdaje na reklamu, tržby, počet objednávek, ROAS, průměrná hodnota objednávky a CAC, a to i v segmentaci podle skupin zákazníků a časových období. Díky tomu si mohou analytics a BI nástroje (typicky např. Triple Whale, Northbeam, Elevar, nebo obecné nástroje jako Power BI, Tableau, Looker Studio) natáhnout data o Shop Campaigns stejnou cestou jako u ostatních marketingových kanálů.
    Pro merchanta jde o čistě datovou/reportingovou novinku bez dopadu na checkout nebo store-front. Prakticky se projeví tam, kde je Shopify napojen na externí reporting vrstvu přes ShopifyQL nebo kde je potřeba postavit vlastní dashboard zahrnující Shop Campaigns.
  zdroje:
    - title: "Shopify: See Shop Campaigns performance in your analytics tools"
      url: "https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšířil ShopifyQL o nové schéma `marketing/shop_campaign_insights` (verze 2026-07), které vystavuje výkonnostní data Shop Campaigns. Analytics a BI nástroje napojené přes ShopifyQL k němu teď mají přístup stejně jako k datům z jiných marketingových kanálů.

Mezi dostupné metriky patří výdaje na reklamu (ad spend), tržby, počet objednávek, ROAS, průměrná hodnota objednávky a CAC – s možností segmentace podle skupiny zákazníků a časového období. Merchant tak může Shop Campaigns zahrnout do stejného reportu nebo dashboardu, kde už sleduje ostatní placené kanály, bez ručního exportu dat z admina.

Změna je čistě na straně reportingu/dat. Nemění nic na tom, jak Shop Campaigns funguje, jak se zadávají nebo jak vypadá checkout – jen otevírá data ven přes ShopifyQL.

## Časová osa

- 2026-08-10 – zveřejněno v Shopify merchant changelogu, data přes ShopifyQL dostupná od tohoto data

## Dopad pro nás

**Pro vývojáře:** Pokud stavíme nebo udržujeme reportingové řešení napojené na ShopifyQL (vlastní dashboard, export do BI nástroje), je teď možné doplnit dotaz o schéma `marketing/shop_campaign_insights` a přidat Shop Campaigns metriky bez nutnosti řešit samostatnou integraci. Jinak jde o pasivní novinku – nevyžaduje žádný zásah, pokud klient tato data aktivně nechce.

**Pro PM / PO:** Relevantní zejména pro klienty, kteří aktivně používají Shop Campaigns a mají zároveň externí analytics/BI vrstvu (Power BI, Tableau, Looker Studio apod.) nebo třetí-stranou marketing analytics app. Lze to zmínit jako doplňkovou možnost při rozšiřování reportingu, není to nic urgentního ani něco, co by vyžadovalo proaktivní akci bez podnětu klienta.

## Použití v Integrátoru

Přímé využití je nízké – jde o data-only novinku pro ShopifyQL reporting. Relevantní by byla jen v situaci, kdy bychom pro klienta stavěli vlastní reporting/dashboard řešení a klient by zároveň aktivně používal Shop Campaigns.
