---
date: 2026-04-27
title: "Nastavení a tracking cílů v Shopify Analytics"
title_en: "Set and track targets in Shopify Analytics"
slug: set-track-targets-shopify-analytics
zdroj: https://changelog.shopify.com/posts/set-and-track-targets-in-shopify-analytics
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "UI feature v Shopify Analytics. API ekvivalent existuje (analyticsTargetCreate atd. — viz dev changelog), ale aktuálně analytics methods nepoužíváme."
kontext:
  background: |
    Targets (cíle) v Shopify Analytics jsou číselné benchmarky, které merchant přiřadí konkrétní metrice — například cílovému obratu, počtu objednávek nebo míře konverze — pro zvolené časové období. Nejde o automatizaci ani alert, ale o vizuální referenční hodnotu sloužící k orientaci celého merchant týmu.

    Shopify Analytics existuje v různé podobě od počátků platformy, avšak dlouhodobě chyběla nativní podpora pro goal-setting přímo v adminu. Merchants tak museli kombinovat Shopify reporty s externími nástroji jako Google Sheets nebo BI platformami. Targets funkce tuto mezeru uzavírá a propojuje KPI tracking s prostředím, kde merchant každodenně pracuje.

    Funkcionalita je součástí širší expanze Shopify Analytics v roce 2025–2026, která zahrnuje kumulativní vizualizace metrik, denně generované AI insights (Sidekick) a srovnávací grafy více metrik najednou. Targets jsou zároveň dostupné přes GraphQL Admin API (analyticsTargetCreate, analyticsTargetUpdate, analyticsTargetsDelete), což umožňuje jejich správu programaticky — například synchronizaci cílů z externího BI systému do Shopify Adminu.

    Vizuální gauge zobrazující procentuální plnění a počet zbývajících dní je navržen pro rychlé denní čtení bez nutnosti otevírat složité reporty, čímž podporuje datově řízenou kulturu napříč celým obchodním týmem.
  zdroje:
    - title: "Set and track targets in Shopify Analytics (Merchant Changelog)"
      url: "https://changelog.shopify.com/posts/set-and-track-targets-in-shopify-analytics"
    - title: "Analytics metric targets v Admin GraphQL API (Dev Changelog)"
      url: "https://shopify.dev/changelog/analytics-metric-targets-now-available-in-the-graphql-admin-api"
    - title: "Kumulativní metriky v čase v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cumulative-metrics-analytics/"
    - title: "Data-driven insights v analytics dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/data-driven-insights-analytics-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Merchant nastaví performance cíle pro klíčové metriky s vizuálními gauges sledujícími progress real-time, customizable per metric, filter, time period až 2 roky."
tagy: [analytics, targets, kpi, dashboard]
souvisejici: [analytics-metric-targets-admin-api]
---

## Co se mění
Analytics dashboard umožňuje **nastavit cíle (targets)** pro klíčové KPI: revenue, orders, conversion rate atd. Cíle lze customizovat per metric, segment a time period (až 2 roky). Vizuální gauges ukazují progress v reálném čase.

Toto je **merchant-side UI** k API endpointům, které byly oznámené v [Analytics metric targets v Admin API](../zmena/analytics-metric-targets-admin-api/).

## Použití v Integrátoru
**Nepoužíváme** — UI nadstavba nad analyticsTarget API endpointy. Pokud bychom v budoucnu napojili analytics (typicky kvůli reporting flow do BI nástrojů), API endpointy z dev changelogu jsou cesta.
