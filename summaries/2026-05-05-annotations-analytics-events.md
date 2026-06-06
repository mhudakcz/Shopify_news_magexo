---
date: 2026-05-05
title: "Annotations: kontext store events přímo v analytics"
title_en: "Annotations bring store event context directly to your analytics"
slug: annotations-analytics-events
zdroj: https://changelog.shopify.com/posts/annotations-bring-store-event-context-directly-to-your-analytics
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-07

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics UI feature."
kontext:
  background: |
    Annotations jsou vizuální značky vkládané přímo do grafů analytických reportů, které zobrazují, kdy nastala konkrétní událost v obchodě. Nejde o samostatný report, ale o vrstvu přidanou do stávajících vizualizací: merchant najedede myší na marker a okamžitě vidí popis události, aniž by musel přepínat do jiné části adminu.

    Shopify Analytics v období 2025–2026 prochází výraznou expanzí zaměřenou na kauzální porozumění datům. Zatímco dřívější grafy ukazovaly, co se dělo s metrikami, chyběl přímý pohled na to, proč k pohybům docházelo. Annotations tuto mezeru uzavírají tím, že korelují obchodní akce — publikaci produktu, instalaci aplikace, nasazení šablony nebo systémové změny definic metrik — s časovou osou výkonnostních ukazatelů.

    Funkce pokrývá tři kategorie událostí: produktové události (publikování a zrušení publikování), změny obchodu (nová šablona, instalace či odinstalace aplikace) a systémové události (zpoždění dat nebo úpravy definic metrik). Produktové anotace jsou řazeny podle revenue impactu, takže merchant vidí nejprve ty události, které měly největší obchodní dopad. Aktivace nevyžaduje žádnou konfiguraci — stačí zvolit možnost „Show annotations" v panelu vizualizace.

    Annotations doplňují souběžně vydané funkce jako výkonnostní Targets, kumulativní metriky a multi-metrické grafy, které společně posouvají analytiku Shopify směrem k samoobslužné business intelligence dostupné přímo v adminu.
  zdroje:
    - title: "Annotations bring store event context directly to your analytics – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/annotations-bring-store-event-context-directly-to-your-analytics"
    - title: "Data-driven insights v analytics dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/data-driven-insights-analytics-dashboard/"
    - title: "Nastavení a tracking cílů v Shopify Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/set-track-targets-shopify-analytics/"
    - title: "Compare multiple metrics na jednom chartu v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/compare-multiple-metrics-chart/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Vizuální annotations s color-coded markery zobrazují store events vedle analytics dat. Lze filtrovat podle typu (product publishes, system events) a product annotations jsou řazené podle revenue impactu."
tagy: [analytics, annotations, events, dashboard]
---

## Co se mění
**Annotations** v Analytics dashboardu zobrazují **store events** (publikace produktu, systémové změny, app installations) **vedle metrik** jako vizuální markery:
- **Color-coded** podle typu eventu
- Filtrace podle event types
- Product annotations **řazené podle revenue impactu** — vidíš nejdřív, co mělo největší dopad

Cíl: spojit „co se stalo ve storu" s „proč se hnuly metriky".

## Použití v Integrátoru
**Nepoužíváme** — Analytics UI feature.
