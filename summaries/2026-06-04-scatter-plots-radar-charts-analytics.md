---
date: 2026-06-04
title: "Scatter plots a radar charts v Shopify Analytics"
title_en: "Scatter plots and radar charts are now in Shopify Analytics"
slug: scatter-plots-radar-charts-analytics
zdroj: https://changelog.shopify.com/posts/scatter-plots-and-radar-charts-are-now-in-shopify-analytics
shrnuto_dne: 2026-06-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-04
pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics UI feature, naší integrace se netýká."
dotcene_klienty: []
souvisejici: [compare-multiple-metrics-chart, cumulative-metrics-analytics, annotations-analytics-events]
kontext:
  background: |
    Shopify Analytics je nativní analytická platforma přímo v administraci Shopify. Součástí jsou custom reports — vlastní zprávy, které si merchantové sestavují z dostupných metrik pomocí query jazyka ShopifyQL. Při tvorbě nebo editaci zprávy s kompatibilními daty je k dispozici visualization picker, nástroj pro výběr vhodného typu grafu. Do tohoto pickeru Shopify nově přidalo scatter plots a radar charts.

    Scatter plot (bodový diagram) zobrazuje vztah mezi dvěma metrikami — každý datový bod je vykreslen jako tečka v souřadnicovém prostoru. Radar chart (pavoučí/radarový graf) pak umožňuje porovnávat více metrik najednou na jednom plátně; výsledný tvar grafu vizuálně odhaluje silné a slabé stránky srovnávaných entit. Oba typy jsou standardní datavizualizační nástroje, které byly dosud dostupné pouze přes externí tabulkové procesory nebo BI nástroje.

    Pro e-commerce reporting přináší scatter plot okamžitý přehled o korelacích — například tržby versus prodané jednotky na produkt (identifikace položek s vysokým objemem, ale nízkou marží) nebo počet sessions versus konverzní poměr na zdroj provozu (zjištění, které kanály skutečně konvertují). Radar chart umožňuje porovnat kategorie produktů podle více metrik zároveň — průměrná hodnota objednávky, konverzní poměr a míra vrácení — bez nutnosti přepínat mezi jednotlivými grafy. Obě funkce eliminují potřebu exportovat data z Shopify do externích nástrojů pro základní analytické účely.
  zdroje:
    - title: "Shopify Changelog: Scatter and radar charts"
      url: "https://changelog.shopify.com/posts/scatter-plots-and-radar-charts-are-now-in-shopify-analytics"
    - title: "Shopify Help: Custom reports"
      url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/custom-reports"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6
tldr: "Shopify Analytics přidalo scatter plots a radar charts do visualization pickeru v custom reports — merchantové teď mohou vizualizovat vztahy mezi dvěma metrikami (scatter) nebo porovnávat více metrik najednou (radar) přímo v administraci bez exportu dat."
tagy: [analytics, chart, scatter, radar, report]
zdroj_kanal: merchant-changelog
---

## Co se mění

Shopify rozšířilo visualization picker v custom reports o dva nové typy grafů:

- **Scatter plot** — bodový diagram pro vizualizaci vztahu mezi dvěma metrikami (např. tržby vs. prodané jednotky, sessions vs. konverzní poměr).
- **Radar chart** — pavoučí/radarový graf pro simultánní porovnání více metrik napříč kategoriemi nebo segmenty.

Oba typy jsou dostupné okamžitě pro kompatibilní datové sady při vytváření nebo editaci custom reportu.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-04 | Funkce dostupná všem merchantům v Shopify Analytics |

## Dopad pro nás

Jde o UI funkci nativní analytiky Shopify. Naše integrace (Integrátor) nepracuje s Shopify Analytics API ani s custom reports, takže tato změna nemá žádný přímý technický dopad. Relevantní je pouze jako produkt pro klienty, kteří aktivně využívají custom reports.

Pokud klienti reportují potřebu pokročilejší vizualizace dat, je vhodné upozornit na tuto funkci jako nativní alternativu k exportu do Google Sheets nebo Power BI.

## Použití v Integrátoru

Nepoužíváme. Integrátor nepracuje s Shopify Analytics ani visualization pickerem. Žádná akce není nutná.
