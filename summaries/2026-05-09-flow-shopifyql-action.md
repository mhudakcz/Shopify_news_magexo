---
date: 2026-05-09
title: "Flow: nová akce pro získání analytics dat přes ShopifyQL"
title_en: "Flow: New action to get analytics data using ShopifyQL"
slug: flow-shopifyql-action
zdroj: https://changelog.shopify.com/posts/flow-new-action-to-get-analytics-data-using-shopifyql
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-12

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow + ShopifyQL combo. Flow workflows nepoužíváme přímo, naše integrace běží server-side."
dotcene_klienty: []
souvisejici: [flow-new-actions-get-data, shopifyql-matches-customer-behavior]

kontext:
  background: |
    ShopifyQL je proprietární dotazovací jazyk Shopify navržený specificky pro e-commerce analytiku. Syntaxí připomíná SQL — dotazy se skládají z povinných klauzulí FROM a SHOW, doplněných volitelnými WHERE, GROUP BY nebo ORDER BY. Pracuje s daty o tržbách, sezeních, zákaznících a zásobách přímo z analytického backendu Shopify. Spouštět ho lze přes GraphQL Admin API, vestavěný editor v administraci nebo Python SDK.

    Shopify Flow je no-code automatizační engine dostupný přímo v administraci. Workflow se skládá z triggeru (spouštěcí událost), volitelných podmínek a akcí. Dosud Flow pracovalo výhradně s transakčními a event daty — tedy s informacemi o konkrétních objektech jako objednávka nebo zákazník vzniklý v daném okamžiku. Analytická data (agregované metriky, trendy, historické srovnání) do workflows vstupovat nemohla.

    Nová akce „Get analytics data using ShopifyQL" tento předěl ruší. Výsledek ShopifyQL dotazu — například celkové tržby za posledních 7 dní nebo počet seancí — se stává proměnnou, kterou lze použít v podmínkách i dalších akcích. Merchant tak může postavit workflow reagující na skutečný obchodní výkon: upozornění při poklesu tržeb, automatické označení produktu při dosažení prodejního milníku nebo pravidelný Slack report.

    Tato funkce navazuje na sérii rozšíření Flow o akce typu „Get data" z března 2026 a souběžně rozvíjí ShopifyQL mimo analytický editor — jako sdílený základ pro automatizaci napříč Shopify platformou.
  zdroje:
    - title: "Flow: New action to get analytics data using ShopifyQL – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/flow-new-action-to-get-analytics-data-using-shopifyql"
    - title: "ShopifyQL – Shopify Developers"
      url: "https://shopify.dev/docs/api/shopifyql"
    - title: "Flow: nové 'Get data' akce pro workflows"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-new-actions-get-data/"
    - title: "MATCHES operator v ShopifyQL pro filtraci dle chování zákazníků"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopifyql-matches-customer-behavior/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Nová Flow akce typu 'Get analytics data using ShopifyQL' — workflow může vytáhnout sales, sessions, inventory data jako proměnnou a použít je pro conditions a další actions."
tagy: [flow, shopifyql, analytics, automation]
---

## Co se mění
Shopify **Flow** dostává novou akci **„Get analytics data using ShopifyQL"**:
- Workflow zadá ShopifyQL query (sales, sessions, inventory, custom metriky)
- Výsledek se uloží jako workflow variable
- Lze ho použít pro **conditions** (např. „pokud sales < X, pošli alert") nebo **další actions**

Spojuje analytics data s automation flow bez nutnosti custom kódu.

## Použití v Integrátoru
**Nepoužíváme** — Flow internal feature. Můžeme klientovi nabídnout jako alternativu k custom reporting middleware.

## Související
- [Flow nové 'Get data' akce](../zmena/flow-new-actions-get-data/)
- [MATCHES operator v ShopifyQL](../zmena/shopifyql-matches-customer-behavior/)
