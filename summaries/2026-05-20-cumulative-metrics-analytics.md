---
date: 2026-05-20
title: "Kumulativní metriky v čase v Analytics"
title_en: "View cumulative metrics over time in Analytics"
slug: cumulative-metrics-analytics
zdroj: https://changelog.shopify.com/posts/view-cumulative-metrics-over-time-in-analytics
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-21

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics UI feature."
dotcene_klienty: []
souvisejici: [set-track-targets-shopify-analytics]

kontext:
  background: |
    Running total (kumulativní součet) je způsob zobrazení dat, při němž každý datový bod grafu nezobrazuje hodnotu za dané období zvlášť, ale součet všech předchozích hodnot od začátku zvoleného časového rozsahu. Výsledkem je vzestupná křivka, která vizuálně ukazuje celkový objem akumulovaný ke konkrétnímu dni — namísto kolísavého denního průběhu.

    Shopify Analytics tradičně zobrazoval metriky jako periodické hodnoty (denní, týdenní, měsíční), což je vhodné pro porovnávání výkonnosti mezi obdobími. Kumulativní pohled však doplňuje jiný úhel: umožňuje sledovat, zda je merchant na trajektorii splnění cíle do konce měsíce nebo kvartálu. Tato potřeba narůstá spolu s funkcí Targets, kterou Shopify vydal dříve téhož roku a která umožňuje přiřadit konkrétní číselný benchmark každé metrice.

    Prakticky cumulative toggle kombinuje tři vrstvy najednou: aktuální kumulativní průběh, cílovou referenční linku (pokud je target nastaven) a kumulativní srovnání se stejným obdobím předchozího roku. Merchant tak na jediném grafu vidí odpověď na otázku „jsem napřed nebo pozadu oproti loňsku a splním svůj cíl?". Funkce aktivovaná přes ShopifyQL příkazem `WITH CUMULATIVE_VALUES` je dostupná i v uložených reportech.

    Kumulativní vizualizace je součástí širší analytické expanze Shopify v roce 2025–2026 zahrnující multi-metrické grafy, anotace událostí a data-driven insights — soubor nástrojů posouvajících vestavěnou analytiku směrem k samoobslužné business intelligence.
  zdroje:
    - title: "View cumulative metrics over time in Analytics — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/view-cumulative-metrics-over-time-in-analytics"
    - title: "Nastavení a tracking cílů v Shopify Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/set-track-targets-shopify-analytics/"
    - title: "Compare multiple metrics na jednom chartu v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/compare-multiple-metrics-chart/"
    - title: "Annotations: kontext store events přímo v analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/annotations-analytics-events/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Analytics přidává kumulativní vizualizaci metrik — running totals v čase, srovnání proti cílům, layered prior-period comparison pro trend analýzu."
tagy: [analytics, visualization, cumulative, kpi]
---

## Co se mění
Analytics dashboard má novou **cumulative visualization** option:
- Toggle pro running total místo period total
- Srovnání proti targets v čase
- Layered prior-period comparison

Užitečné pro tracking goal progress během měsíce/kvartálu.

## Použití v Integrátoru
**Nepoužíváme** — UI feature.
