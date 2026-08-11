---
date: 2026-08-10
title: "Shop Campaigns performance data přes ShopifyQL (ad spend, ROAS, CAC)"
title_en: "Shop Campaigns performance data now available via ShopifyQL"
slug: shop-campaigns-shopifyql
zdroj: https://shopify.dev/changelog/shop-campaigns-shopifyql
shrnuto_dne: 2026-08-11
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta stavíme reporting nebo dashboard nad ShopifyQL, nový schéma umožňuje doplnit metriky Shop Campaigns (ad spend, ROAS, CAC) bez nutnosti řešit nový scope."
dotcene_klienty: []
souvisejici: [shopifyql-matches-customer-behavior, flow-shopifyql-action, campaign-autopilot-ai-marketing]
tldr: "Admin GraphQL API nabízí nové schéma shop_campaign_insights — přes ShopifyQL lze dotazovat výkon Shop Campaigns (ad spend, sales, ROAS, CAC) se stávajícím scope read_reports."
tagy: [admin-graphql-api, shopifyql, shop-campaigns, analytics, ads, roas]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shop Campaigns jsou Shopify nativní nástroj pro spouštění reklam napříč kanály (Google, Meta, TikTok) přímo z adminu, bez nutnosti řešit reklamní účty a manuální reporting mimo Shopify. Merchant nastaví rozpočet a cíl kampaně a Shopify se postará o distribuci a optimalizaci.
    Do teď byla performance data těchto kampaní vidět jen v adminovém UI. Vývojáři analytických a reportingových aplikací je nemohli programově vytáhnout a spojit s dalšími obchodními metrikami (tržby, objednávky, LTV) do jednoho vlastního dashboardu.
    Novým schématem shop_campaign_insights v ShopifyQL se to mění — data o ad spend, ROAS a CAC jsou nyní dostupná stejnou cestou jako ostatní analytics dotazy, což zapadá do širšího trendu posledních měsíců (MATCHES operátor, Flow akce pro ShopifyQL, cumulative metrics), kdy Shopify postupně otevírá analytics engine pro aplikace třetích stran.
  zdroje:
    - title: "Shopify: Shop Campaigns performance data now available via ShopifyQL"
      url: "https://shopify.dev/changelog/shop-campaigns-shopifyql"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Admin GraphQL API dostává nové schéma `shop_campaign_insights`, které lze dotazovat přes existující pole `shopifyqlQuery`. Aplikace tak mohou získat performance metriky Shop Campaigns — ad spend, sales, počet objednávek, ROAS, average order value a average customer acquisition cost (CAC) — na úrovni jednotlivé kampaně nebo segmentu zákazníků.

Data lze segmentovat podle:
- názvu kampaně,
- segmentu zákazníků,
- časového období (od hodinových po roční intervaly, v časové zóně obchodu).

Pro přístup není potřeba žádný nový scope — stačí stávající `read_reports`, který analytics aplikace už typicky mají. Pokud tedy aplikace už dnes používá `shopifyqlQuery`, integrace nových metrik je otázka rozšíření dotazu, ne nového OAuth flow.

## Časová osa

- **10. 8. 2026** — schéma `shop_campaign_insights` dostupné v ShopifyQL přes Admin GraphQL API.

## Dopad pro nás

**Pro vývojáře:** Rozšíření se hodí především u analytics/reporting projektů, kde už točíme ShopifyQL dotazy (`shopifyqlQuery`) — nové schéma se přidává bez nutnosti žádat o nový scope. Stojí za to nahlédnout do referenční dokumentace `shop_campaign_insights` a ShopifyQL API reference, než se pouštíme do vlastního dotazu, kvůli přesným názvům polí a dostupným agregacím.

**Pro PM / PO:** Relevantní hlavně pro klienty, kteří aktivně používají Shop Campaigns a chtějí mít ad spend, ROAS a CAC vidět v jednom vlastním dashboardu vedle tržeb a objednávek, ne jen v adminovém UI Shopify. Nízká urgentnost — nejde o breaking change, jde o novou možnost, kterou lze zmínit při plánování analytics feature.

## Použití v Integrátoru

Pokud pro klienta stavíme nebo rozšiřujeme reporting nad ShopifyQL, dává smysl doplnit metriky Shop Campaigns do stejného dotazu — bez dopadu na existující scope nastavení.
