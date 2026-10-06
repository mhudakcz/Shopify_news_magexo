---
date: 2026-10-01
title: "ShopifyQL 2026-10: nové Shop Campaigns metrics + dimensions"
title_en: "New Shop Campaigns metrics and dimensions in ShopifyQL API version 2026-10"
slug: shop-campaigns-shopifyql-2026-10-metrics
zdroj: https://shopify.dev/changelog/posts/new-shop-campaigns-metrics-and-dimensions-on-api-version-2026-10
shrnuto_dne: 2026-10-06
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme reporting nebo dashboard nad ShopifyQL, můžeme nově rozpadnout výkon Shop Campaigns podle země a tržby podle kampaně; jinak se nás změna netýká."
dotcene_klienty: []
souvisejici: [shop-campaigns-shopifyql, shopifyql-response-parsewarnings, release-notes-2026-10]
tldr: "ShopifyQL ve verzi API 2026-10 přidává do schématu shop_campaign_insights metriku shop_campaign_orders a dimenze country a country_code a do schématu sales čtyři dimenze s názvem, handle, cílem a měnou kampaně; změna je aditivní a nevyžaduje žádnou akci."
tagy: [shopifyql, shop-campaigns, metrics, dimensions, analytics, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    ShopifyQL je dotazovací jazyk Shopify pro e-commerce analytiku. Syntaxí připomíná SQL (FROM, SHOW, GROUP BY, SINCE) a běží nad analytickými schématy, například sales nebo marketing. Aplikace ho volají přes Admin GraphQL API polem shopifyqlQuery a pro přístup stačí scope read_reports.
    Shop Campaigns jsou nativní nástroj Shopify pro placenou propagaci produktů přímo z administrace. Jejich výkon bylo dlouho vidět jen v admin UI. V srpnu 2026 Shopify otevřel tato data v ShopifyQL přes schéma shop_campaign_insights (ad spend, tržby, ROAS, CAC), takže je mohly číst i vlastní dashboardy a BI nástroje.
    Novinka ve verzi 2026-10 toto schéma doplňuje o rozměr, který chyběl: geografii a propojení s prodejními daty. Kampaně lze rozpadnout podle země a naopak tržby ze schématu sales lze přiřadit ke konkrétní kampani. Jde o další krok v postupném otevírání analytics enginu pro aplikace třetích stran, vedle operátoru MATCHES, pole parseWarnings nebo analytics-queryable metafields.
  zdroje:
    - title: "Shopify: New Shop Campaigns metrics and dimensions in ShopifyQL API version 2026-10"
      url: "https://shopify.dev/changelog/posts/new-shop-campaigns-metrics-and-dimensions-on-api-version-2026-10"
    - title: "Shopify: ShopifyQL 2026-10 schema sales"
      url: "https://shopify.dev/docs/api/shopifyql/2026-10/schemas/sales_revenue/sales"
    - title: "Shopify: ShopifyQL 2026-10 schema shop_campaign_insights"
      url: "https://shopify.dev/docs/api/shopifyql/2026-10/schemas/marketing/shop_campaign_insights"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Verze ShopifyQL 2026-10 rozšiřuje dva existující datasety o pole související se Shop Campaigns.

**Schéma `shop_campaign_insights`** (marketing):
- metrika `shop_campaign_orders`: počet objednávek spojených se Shop Campaigns,
- dimenze `country`: země, ve které kampaň běžela nebo odkud objednávky přišly,
- dimenze `country_code`: dvoupísmenný kód téže země.

**Schéma `sales`** (sales_revenue), čtyři nové dimenze pro rozpad prodejů podle kampaně, která je přivedla:
- `shop_campaign_name`,
- `shop_campaign_handle`,
- `shop_campaign_target_name`,
- `shop_campaign_currency_code`.

Changelog uvádí dva příklady dotazů. První kombinuje objednávky a ad spend podle země, druhý rozpadá prodeje podle názvu kampaně:

```
FROM shop_campaign_insights
SHOW shop_campaign_orders, shop_campaign_ad_spend
GROUP BY country_code
SINCE -30d
```

```
FROM sales
SHOW total_sales, orders
GROUP BY shop_campaign_name
SINCE -30d
```

Rozsah je užší, než by se mohlo zdát z kontextu předchozích novinek. Post nepřidává nové metriky pro impressions, clicks, conversions ani ROAS. O výdajích na reklamu se zmiňuje jen v příkladu přes již existující metriku `shop_campaign_ad_spend`. Přesné názvy, datové typy a dostupné agregace je proto potřeba ověřit v referenci obou schémat pro verzi 2026-10, než se pole zapíšou do produkčních dotazů.

Změna je aditivní. Changelog výslovně uvádí, že žádná akce není nutná. Dotčené jsou aplikace, které spouštějí ShopifyQL dotazy na verzi 2026-10 nebo novější; doporučení je přepnout dotazy na tuto verzi a otestovat je proti obchodům, které Shop Campaigns skutečně používají.

## Časová osa

- **1. 10. 2026:** post zveřejněn v developer changelogu, verze API 2026-10 (2026-10-01).
- **2. 10. 2026:** changelog uvádí jako datum účinnosti změny.
- **Bez termínu povinné akce:** nová pole jsou dostupná jen ve verzi 2026-10 a novější; dotazy na starších verzích zůstávají beze změny.

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbije a nic není nutné měnit. Pokud ale máme nebo stavíme reporting nad `shopifyqlQuery`, nová pole umožní dvě konkrétní věci. Za prvé rozpad výkonu kampaní podle země (`country`, `country_code`) včetně počtu objednávek (`shop_campaign_orders`), což dosud v `shop_campaign_insights` chybělo. Za druhé napojení kampaní na prodejní data: ze schématu `sales` lze skupinovat podle `shop_campaign_name` nebo `shop_campaign_handle` a mít tržby a objednávky vedle sebe bez složitého párování mezi dvěma datasety. Dimenze `shop_campaign_currency_code` se hodí, pokud obchod prodává ve více měnách a je potřeba správně sčítat částky. Používejte kombinaci s `parseWarnings`, aby se o případné deprecation polí zjistilo dřív než při výpadku reportu. Scope zůstává `read_reports`, ale ověřte ho u každé aplikace zvlášť.

**Pro PM / PO:** Nízká naléhavost, jde o drobné rozšíření analytics API bez vlivu na checkout nebo storefront. Relevantní je hlavně pro merchanty, kteří aktivně používají Shop Campaigns a chtějí vidět výkon kampaní podle trhů nebo přiřadit tržby ke konkrétní kampani v jednom vlastním dashboardu. Pro ostatní je to pasivní novinka. Dá se zmínit při plánování rozšíření reportingu, bez proaktivní akce.

## Použití v Integrátoru

Přímé použití zatím nevidíme: relevantní je jen tam, kde pro projekt stavíme reporting nebo dashboard nad ShopifyQL a merchant zároveň používá Shop Campaigns. Pak jde o malé rozšíření stávajícího dotazu o dimenze `country_code` nebo `shop_campaign_name`.
