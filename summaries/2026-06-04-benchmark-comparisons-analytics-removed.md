---
date: 2026-06-04
title: "Benchmark Comparisons v Analytics končí 19. 5."
title_en: "Benchmark Comparisons in Analytics will be removed on May 19th"
slug: benchmark-comparisons-analytics-removed
zdroj: https://changelog.shopify.com/posts/benchmark-comparisons-in-analytics-will-be-removed-on-may-19th
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-06-04

kategorie: [deprecation]
api_oblast: admin
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-05-19

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics UI feature retirement. Naše integrace Analytics UI nesahá."
dotcene_klienty: []

kontext:
  background: |
    Benchmarking v e-commerce analytice je technika srovnávání vlastních výkonnostních ukazatelů s externím referenčním bodem — obvykle anonymizovaným průměrem podobně velkých nebo stejně zaměřených obchodů. Smyslem je přidat interpretační rámec k datům: „Konverzní poměr 1,8 % je dobrý nebo špatný?" dostane odpověď teprve v porovnání s oborovým standardem. Benchmark Comparisons v Shopify Analytics implementovala tento princip jako vestavěnou vrstvu přímo v reportech, bez nutnosti exportu do externího BI nástroje.

    Shopify tuto funkci budoval na agregovaných datech z anonymizovaných transakcí napříč platformou, čímž vytvářel jeden z největších e-commerce benchmarkových datasetů na světě. Přesto se ukázalo, že srovnávání s „průměrem peer merchantů" mělo omezené praktické využití: merchanté s unikátním produktovým mixem nebo nišovým zaměřením se do generických kategorií obtížně zařazovali a výsledné benchmarky byly méně relevantní než vlastní historická data.

    Shopify proto přechází na přístup zaměřený na vlastní cíle: funkce Metric Targets umožňuje každému merchantovi definovat si vlastní KPI thresholdy a sledovat plnění přímo v grafu. AI asistent Sidekick pak poskytuje personalizovaná doporučení na základě konkrétních dat daného obchodu — místo srovnávání s anonymním průměrem nabízí kontextualizovanou analýzu. Tento posun od externího benchmarkingu k internímu goal-trackingu kopíruje trend v moderní business intelligence.
  zdroje:
    - title: "Benchmark Comparisons in Analytics will be removed on May 19th — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/benchmark-comparisons-in-analytics-will-be-removed-on-may-19th"
    - title: "Kumulativní metriky v čase v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cumulative-metrics-analytics/"
    - title: "Annotations: kontext store events přímo v analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/annotations-analytics-events/"
    - title: "Data-driven insights v analytics dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/data-driven-insights-analytics-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Funkce Benchmark Comparisons (porovnání s peer merchanty) v Shopify Analytics byla odstraněna 19. 5. 2026. Náhrada: nové insights funkce (annotations, cumulative metrics). _Původně publikováno 7. 5. 2026 (audit doplnění)._"
tagy: [analytics, deprecation, benchmarks]
---

## Co se mění
**Benchmark Comparisons** (funkce, která porovnávala metriky vlastního shopu vs. anonymizovaný průměr podobných merchantů) byla **odstraněna 19. 5. 2026**. Shopify investuje do nových insights nástrojů (annotations, cumulative metrics, Sidekick insights).

## Použití v Integrátoru
**Nepoužíváme** — Analytics UI feature.
