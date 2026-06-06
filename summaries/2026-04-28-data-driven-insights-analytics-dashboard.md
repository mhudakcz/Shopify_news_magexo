---
date: 2026-04-28
title: "Data-driven insights v analytics dashboardu"
title_en: "Data-driven insights now appear on your analytics dashboard"
slug: data-driven-insights-analytics-dashboard
zdroj: https://changelog.shopify.com/posts/data-driven-insights-now-appear-on-your-analytics-dashboard
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics dashboard feature v Shopify Admin UI. Není API."
kontext:
  background: |
    Data-driven insights jsou automaticky generované souhrny, které systém produkuje analýzou obchodních dat — tržeb, relací, plnění objednávek a zákaznického chování — bez ručního zadávání dotazů. Na rozdíl od statických reportů, kde merchant sám hledá vzorce, insights přinášejí prioritizované nálezy přímo na úvodní stránku dashboardu.

    Shopify Analytics prošel v období 2025–2026 výraznou expanzí: přibyly kumulativní vizualizace metrik, srovnávací grafy, nastavení výkonnostních cílů (Targets) i vizuální anotace store eventů. Denně generované insights jsou dalším krokem v přechodu z pasivního reportingu k proaktivnímu upozorňování — systém sám rozhoduje, co je pro daný obchod v daný den nejrelevantnější.

    Integrace se Sidekickem mění způsob práce s analytickými daty: místo exportu do externího BI nástroje merchant klikne na konkrétní nález a AI asistent je okamžitě připraven v kontextu daného insightu. Tato vazba doplňuje ekosystém nástrojů, jako jsou ShopifyQL (dotazovací jazyk pro analytics), Annotations (zobrazení store eventů vedle metrik) nebo Analytics Targets (sledování KPI plnění).

    Posun k automatizovaným insightům snižuje potřebu analytické expertízy na straně merchanta a zpřístupňuje datově řízenou kulturu i menším obchodům, pro které by jinak bylo continuous monitoring příliš časově náročné.
  zdroje:
    - title: "Data-driven insights now appear on your analytics dashboard – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/data-driven-insights-now-appear-on-your-analytics-dashboard"
    - title: "Spot trends s novými Analytics insights"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/spot-trends-analytics-insights/"
    - title: "Nastavení a tracking cílů v Shopify Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/set-track-targets-shopify-analytics/"
    - title: "Annotations: kontext store events přímo v analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/annotations-analytics-events/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Analytics dashboard ukazuje denně generované business insights — top 5 nálezů podle dopadu, status badges, integrace se Sidekick AI pro follow-up otázky."
tagy: [analytics, insights, ai, sidekick, dashboard]
---

## Co se mění
Analytics dashboard v Adminu nově zobrazuje **denně generované insights** — top 5 nálezů řazených podle business impactu (např. „pokles konverze ve čtvrtek", „růst prodeje produktu X"). Každý insight má status badge a integraci se **Sidekick** (AI asistent) pro follow-up otázky.

## Použití v Integrátoru
**Nepoužíváme** — pure Admin UI / AI feature. Pro klienty s velkou produktovou maticí ale stojí za zmínit jako quick-win automatický monitoring.
