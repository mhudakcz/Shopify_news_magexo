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
tldr: "Merchant nastaví performance cíle pro klíčové metriky s vizuálními gauges sledujícími progress real-time, customizable per metric, filter, time period až 2 roky."
tagy: [analytics, targets, kpi, dashboard]
souvisejici: [analytics-metric-targets-admin-api]
---

## Co se mění
Analytics dashboard umožňuje **nastavit cíle (targets)** pro klíčové KPI: revenue, orders, conversion rate atd. Cíle lze customizovat per metric, segment a time period (až 2 roky). Vizuální gauges ukazují progress v reálném čase.

Toto je **merchant-side UI** k API endpointům, které byly oznámené v [Analytics metric targets v Admin API](../zmena/analytics-metric-targets-admin-api/).

## Použití v Integrátoru
**Nepoužíváme** — UI nadstavba nad analyticsTarget API endpointy. Pokud bychom v budoucnu napojili analytics (typicky kvůli reporting flow do BI nástrojů), API endpointy z dev changelogu jsou cesta.
