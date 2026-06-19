---
date: 2026-06-17
title: "Bubble + sunburst charts v Shopify Analytics (rozšíření scatter+radar)"
title_en: "Visualize data with bubble and sunburst charts in Analytics"
slug: bubble-sunburst-charts-analytics
zdroj: https://changelog.shopify.com/posts/visualize-your-data-with-bubble-and-sunburst-charts-in-analytics
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Analytics rozšíření může být relevantní při prezentaci výkonnostních dat klientům nebo při tvoření vlastních reportů v rámci customizace dashboardu."
dotcene_klienty: []
souvisejici:
  - "scatter-plots-radar-charts-analytics"
  - "compare-multiple-metrics-chart"
  - "cumulative-metrics-analytics"
tldr: "Shopify Analytics dostalo dva nové typy grafů — bubble chart (zobrazuje tři metriky najednou) a sunburst chart (hierarchické rozdělení kategorií) — dostupné přímo ve visualization pickeru při tvorbě reportů."
tagy: [analytics, chart, bubble, sunburst, visualization]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Analytics postupně rozšiřuje sadu vizualizačních nástrojů pro vlastní reporty. Po scatter plotech a radar charts (červen 2026) přicházejí dva nové typy grafů: bubble chart a sunburst chart. Oba jsou dostupné přes visualization picker při vytváření nebo úpravě reportů v sekci Analytics v administraci.

    Bubble chart umožňuje vynést tři různé metriky najednou do jednoho grafu — osa X, osa Y a velikost bublin každá reprezentují jinou hodnotu. Typické využití: produkty s vysokým objemem prodejů, které zároveň mají vysokou míru vrácení zboží. Jde o výrazné rozšíření oproti dosavadním dvourozměrným grafům, kde bylo možné sledovat vždy jen vztah dvou metrik.

    Sunburst chart vizualizuje hierarchické struktury — tedy jak se celkové hodnoty rozkládají do vnořených kategorií. Obchodník například okamžitě vidí, které produktové kategorie tvoří největší podíl tržeb, a zároveň, které podkategorie uvnitř nich vedou. Tento pohled dříve vyžadoval ruční sestavení tabulky nebo export do externího nástroje.

    Obě novinky navazují na trend posledních měsíců, kdy Shopify systematicky posiluje nativní analytické možnosti platformy (scatter ploty, radar charts, cumulative metrics, targets), a přibližuje je možnostem specializovaných BI nástrojů jako Looker nebo Power BI — bez nutnosti exportu dat.
  zdroje:
    - title: "Shopify: Visualize data with bubble and sunburst charts in Analytics"
      url: "https://changelog.shopify.com/posts/visualize-your-data-with-bubble-and-sunburst-charts-in-analytics"
    - title: "Shopify Help Center: Bubble chart"
      url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/custom-reports/selecting-visualizations#bubble-chart"
    - title: "Shopify Help Center: Sunburst chart"
      url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/custom-reports/selecting-visualizations#sunburst"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify Analytics přidává dva nové typy vizualizací dostupné ve visualization pickeru při vytváření nebo úpravě vlastních reportů:

**Bubble chart** — zobrazuje tři metriky současně v jednom grafu. Pozice bubliny (osa X a Y) odpovídá dvěma metrikám, velikost bubliny pak třetí. Umožňuje odhalovat outliers a vícerozměrné vzorce, které by klasický čárový nebo sloupcový graf nezachytil (příklad: produkty s vysokým objemem prodejů a zároveň vysokou mírou vrácení).

**Sunburst chart** — hierarchická vizualizace pro pochopení, jak se agregovaná hodnota rozkládá do vnořených kategorií. Vnější prstence reprezentují podkategorie, vnitřní kruh souhrn. Vhodné pro analýzu produktového portfolia podle kategorií a podkategorií.

Oba grafy jsou dostupné ihned — bez nutnosti aktivace nebo změny plánu.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-04 | Přidány scatter ploty a radar charts do Analytics |
| 2026-06-17 | Dostupnost bubble charts a sunburst charts |

## Dopad pro nás

Jde o rozšíření nativních analytických možností platformy, které se týká přímo administrace eshopu. Pro naše klienty to znamená, že mohou buildovat sofistikovanější vlastní reporty bez exportu do externího BI nástroje.

Z pohledu vývoje a integrace nejde o API změnu — oba chart typy jsou dostupné pouze přes UI Shopify administrace. Žádný kód není potřeba měnit.

Praktické využití: klienti s větším produktovým katalogem a potřebou vícerozměrné analýzy (prodejní objem vs. marže vs. míra vrácení) mají nový nástroj přímo v administraci.

## Použití v Integrátoru

Přímá relevance je nízká — bubble a sunburst charts jsou čistě UI funkce v administraci, nejsou exponovány přes Admin API ani GraphQL. Nepřímá relevance může nastat při prezentaci výkonnostních dat klientům nebo při doporučování analytického workflow — v takovém případě lze nativní vizualizace zmínit jako alternativu k exportu dat do externích nástrojů.
