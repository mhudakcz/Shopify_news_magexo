---
date: 2026-04-29
title: "Analytics metric targets v Admin GraphQL API"
title_en: "Analytics metric targets now available in the GraphQL Admin API"
slug: analytics-metric-targets-admin-api
zdroj: https://shopify.dev/changelog/analytics-metric-targets-now-available-in-the-graphql-admin-api
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-04-30

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "interní MCP check a 'target' vrátily 0 metod v shopify-client. Aktuálně nepracujeme s analytics metric targets."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    GraphQL Admin API je primární programatické rozhraní pro přístup k datům a funkcím Shopify obchodu. Na rozdíl od REST API nabízí typovaný schéma-first přístup, kde klient přesně specifikuje, která pole potřebuje. Přidání analytických operací do tohoto API znamená, že cíle metrik jsou plnohodnotnou součástí datového modelu obchodu — nikoliv jen UI prvkem bez programatického přístupu.

    Shopify Analytics API historicky umožňovalo pouze čtení reportů přes `read_reports` scope. Mutace pro zápis analytických dat jsou novinkou, která rozšiřuje `write_reports` scope o nový účel: správu cílů. Vývojáři tak mohou stavět aplikace, které přenášejí KPI definované v externích BI systémech (Google Looker, Metabase, interní Excel exporty) přímo do Shopify Adminu, kde jsou viditelné celému merchant týmu bez nutnosti přístupu do externího nástroje.

    Klíčový aspekt je symetrie s merchant UI: cíle vytvořené přes API se zobrazují vedle cílů zadaných ručně v administraci, v identickém vizuálním formátu s gauge ukazatelem. Tato symetrie je vzorem, který Shopify opakovaně aplikuje — API a UI jako dvě rovnocenná rozhraní ke stejným datům. Pro vývojáře to znamená, že aplikace mohou enrichovat nativní Shopify prostředí bez nutnosti vlastního dashboardu.

    Z hlediska scopes je nutné požádat o `read_reports` pro čtení a `write_reports` pro vytváření a úpravu cílů. Absence webhook podpory pro změny cílů (k datu vydání) znamená, že synchronizace z externích systémů je jednosměrná nebo vyžaduje polling.
  zdroje:
    - title: "Analytics metric targets now available in the GraphQL Admin API — Shopify Dev Changelog"
      url: "https://shopify.dev/changelog/analytics-metric-targets-now-available-in-the-graphql-admin-api"
    - title: "Nastavení a tracking cílů v Shopify Analytics (merchant UI)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/set-track-targets-shopify-analytics/"
    - title: "Kumulativní metriky v čase v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cumulative-metrics-analytics/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Čtyři nové GraphQL operations (analyticsTargets, …Create, …Update, …Delete) pro správu číselných cílů metrik — obrat, conversion rate, AOV — v Shopify Admin. Cíle doprovází vizuální gauge s aktuálním progresem."
tagy: [analytics, target, kpi, dashboard]
---

## Co se mění
GraphQL Admin API zavádí **čtyři nové operations** pro správu *metric targets* — číselných cílů (KPI) pro analytics metriky (např. „obrat 1M USD do konce kvartálu", „conversion rate > 3 %", „AOV nad $50"). Cíle doplňuje vizuální gauge v Shopify Adminu, který zobrazuje aktuální progres.

| Operace | Účel |
|---|---|
| `analyticsTargets` | Query — list existujících cílů |
| `analyticsTargetCreate` | Mutation — vytvořit cíl |
| `analyticsTargetUpdate` | Mutation — upravit cíl |
| `analyticsTargetsDelete` | Mutation — smazat cíl |

## Dopad pro nás
**Pro vývojáře:**
Aktuálně analytics endpointy v `shopify-client` neexistují (interní MCP check a `"target"` vrátily prázdno). Pokud klient chce externě spravovat cíle (typicky z vlastního BI, ERP nebo dashboardu), můžeme přidat tenký wrapper kolem těchto čtyř operations.

**Pro PM / PO:**
Nice-to-have rozšíření pro klienty s reportingem orientovaným na cíle. Použitelné jako add-on k „Magexo dashboard" — sync cílů z klientského BI do Shopify Adminu, kde je vidí celý merchant tým bez nutnosti otevírat samostatné nástroje.

## Použití v Integrátoru
**Nepoužíváme** — analytics metric targets jsou nová feature, žádný stávající klient zatím nemá integraci nad Shopify analytics. Lze přidat na vyžádání.

## Rizika a edge cases
- Cíle jsou **per-shop**, ne per-user — viditelné celému týmu merchanta
- Žádné webhook subscriptions zatím — pokud chceme reagovat na změnu cíle externě, je nutné pollovat
