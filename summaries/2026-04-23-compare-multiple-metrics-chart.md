---
date: 2026-04-23
title: "Compare multiple metrics na jednom chartu v Analytics"
title_en: "Compare multiple metrics on one chart"
slug: compare-multiple-metrics-chart
zdroj: https://changelog.shopify.com/posts/compare-multiple-metrics-on-one-chart
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics UI feature."
kontext:
  background: |
    Shopify Analytics je vestavěný reportingový nástroj dostupný všem merchantům, který umožňuje sledovat klíčové obchodní ukazatele přímo v administraci eshopu. Grafy v analytickém prostředí dlouhodobě zobrazovaly vždy jen jednu metriku najednou, což nutilo uživatele přepínat mezi různými reporty pro získání ucelené představy.

    V roce 2025–2026 Shopify výrazně investoval do analytického ekosystému — přibyl ShopifyQL dotazovací jazyk, funkce pro sledování cílů (targets), anotace událostí a kumulativní pohledy na data. Multi-metrické grafy jsou součástí tohoto širšího trendu přibližovat merchantům analytické možnosti, které dříve vyžadovaly externí nástroje jako Google Looker nebo Tableau.

    Prakticky tato funkce umožňuje například sledovat vývoj tržeb a konverzního poměru na jednom grafu — sloupcový graf znázorňuje objem (volume), spojnicový graf zobrazuje procentuální ukazatel (rate). Každá osa Y se škáluje samostatně, takže metriky různých jednotek jsou přehledně čitelné. Funkce je dostupná v exploracích, uložených reportech i na nástěnce.

    Rozšíření vizualizací v Analytics navazuje na souběžné novinky jako data-driven insights a kumulativní metriky, které společně posouvají analytiku Shopify směrem k samoobslužné business intelligence.
  zdroje:
    - title: "Compare multiple metrics on one chart — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/compare-multiple-metrics-on-one-chart"
    - title: "Kumulativní metriky v čase v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cumulative-metrics-analytics/"
    - title: "Data-driven insights v analytics dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/data-driven-insights-analytics-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Analytics nově podporuje multi-metric line charts s až 4 metrikami a novou bar-and-line vizualizaci pro porovnání volume a rate metrik."
tagy: [analytics, charts, visualization]
---

## Co se mění
Analytics dashboard umí **multi-metric line charts** (až 4 metriky najednou) a novou **bar-and-line** vizualizaci pro porovnání objemových a procentuálních metrik (např. orders + conversion rate).

## Použití v Integrátoru
**Nepoužíváme** — UI feature.
