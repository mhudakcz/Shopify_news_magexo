---
date: 2026-02-04
title: "Single-view analytics napříč více Shopify stores"
title_en: "Single-View Analytics for Multiple Stores"
slug: single-view-analytics-multi-store
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "UI feature v Shopify Admin pro multi-store organizace. Naše integrace operují per store, agregace v admin UI nás přímo neimpaktuje."
dotcene_klienty: []

kontext:
  background: |
    Shopify Organization je funkce dostupná pro plán Shopify Plus, která umožňuje spravovat více samostatných obchodů pod jednou centrální správou. Merchant tak může provozovat například oddělené B2B a DTC obchody, regionální varianty pro různé trhy nebo více značek — každý store má vlastní katalog, platby a nastavení, ale všechny patří pod jednu organizaci s centralizovanou správou uživatelů a fakturace.

    Historicky museli správci multi-store setups přepínat mezi jednotlivými admin panely, aby získali přehled o celkové výkonnosti. Každý store měl vlastní Analytics dashboard, bez možnosti srovnání nebo agregace. Tato fragmentace komplikovala strategické rozhodování, zejména pro klienty s desítkami stores nebo s kombinací B2B a DTC kanálů pod jednou střechou.

    Single-view analytics přináší konsolidovaný pohled na výkonnost celé organizace v jednom místě — obchodní manažeři vidí agregované metriky a zároveň mohou filtrovat nebo porovnávat jednotlivé stores. Tato funkce navazuje na širší trend v Shopify Admin analytics: v návaznosti na ni přibyly nástroje jako metric targets (KPI cíle s vizuálním gauge), kumulativní vizualizace metrik v čase a insights pro trendovou analýzu.

    Multi-store analytika je součástí Shopify iniciativy Winter 2026 „Renaissance", která klade důraz na centralizaci reportingu a lepší podpůrné nástroje pro enterprise a B2B segmenty.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Shopify Plus organizations"
      url: "https://help.shopify.com/en/manual/shopify-plus/organizations"
    - title: "Analytics metric targets v Admin GraphQL API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/analytics-metric-targets-admin-api/"
    - title: "Kumulativní metriky v čase v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cumulative-metrics-analytics/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Multi-store organizace vidí org-wide performance v jedné view, filtrují po stores, porovnávají metriky."
tagy: [analytics, multi-store, organization, b2b]
---

## Co se mění
Shopify Admin nově nabízí **org-wide analytics view** — pokud klient má více Shopify stores (typicky B2B + DTC, nebo více regionálních stores), vidí performance napříč všemi storey, filtruje po store, porovnává metriky.

## Použití v Integrátoru
**Nepoužíváme** — UI feature v Shopify Admin. Pro klienty s multi-store setupem (např. mezinárodní expanze) vhodné poukazem.
