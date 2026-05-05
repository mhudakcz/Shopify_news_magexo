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
dukaz_integratoru: "find-shopify-method 'analytics' a 'target' vrátily 0 metod v shopify-client. Aktuálně nepracujeme s analytics metric targets."
dotcene_klienty: []
souvisejici: []

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
Aktuálně analytics endpointy v `shopify-client` neexistují (`find-shopify-method "analytics"` a `"target"` vrátily prázdno). Pokud klient chce externě spravovat cíle (typicky z vlastního BI, ERP nebo dashboardu), můžeme přidat tenký wrapper kolem těchto čtyř operations.

**Pro PM / PO:**
Nice-to-have rozšíření pro klienty s reportingem orientovaným na cíle. Použitelné jako add-on k „Magexo dashboard" — sync cílů z klientského BI do Shopify Adminu, kde je vidí celý merchant tým bez nutnosti otevírat samostatné nástroje.

## Použití v Integrátoru
**Nepoužíváme** — analytics metric targets jsou nová feature, žádný stávající klient zatím nemá integraci nad Shopify analytics. Lze přidat na vyžádání.

## Rizika a edge cases
- Cíle jsou **per-shop**, ne per-user — viditelné celému týmu merchanta
- Žádné webhook subscriptions zatím — pokud chceme reagovat na změnu cíle externě, je nutné pollovat
