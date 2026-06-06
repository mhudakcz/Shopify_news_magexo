---
date: 2026-03-13
title: "Tracking slev s marketing campaigns (UTM)"
title_en: "Track discounts with marketing campaigns"
slug: track-discounts-marketing-campaigns
zdroj: https://changelog.shopify.com/posts/track-discount-promotions-with-marketing-campaigns
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Marketing analytics feature."
kontext:
  background: |
    UTM parametry (Urchin Tracking Module) jsou standardizované URL parametry — `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` a `utm_content` — které analytické nástroje (Google Analytics, Shopify Analytics) používají k identifikaci původu návštěvy. Merchant je manuálně přidává do odkazů sdílených v e-mailových kampaních, sociálních sítích nebo reklamních platforem, aby mohl v reportech oddělit organický provoz od placeného.

    Shopify Marketing Campaigns je funkce v administraci, která slouží k seskupování marketingových aktivit do pojmenovaných kampaní. Historicky bylo napojení slev na kampaně ruční záležitostí — merchant musel UTM parametry sestavit samostatně a manuálně je přilepit ke sdílenému odkazu. Tím vznikaly chyby (překlepy, nekonzistentní názvy kampaní) a reporty trpěly neúplnými daty.

    Propojení discount shareable links s marketing campaigns a automatickým vkládáním UTM identifikátorů odstraňuje tuto manuální vrstvu. Shopify při výběru kampaně sestaví parametry sledování automaticky z metadat kampaně, takže obchodník vidí v Marketing reports, která konkrétní slevová akce přinesla konverze, aniž by musel zasahovat do URL. Výsledkem je přesnější atribuce příjmů ke kampaním.

    Tento přístup zapadá do širšího trendu, kdy Shopify sjednocuje správu slev s marketingovými nástroji — souběžně přibyla podpora tagů na slevách (API 2026-04) pro lepší segmentaci a filtraci, a analytics dashboard rozšiřuje možnosti korelace store events s obchodními metrikami.
  zdroje:
    - title: "Track discount promotions with marketing campaigns – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/track-discount-promotions-with-marketing-campaigns"
    - title: "Shopify Archive: Tagy na slevách v Admin API od 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/add-tags-to-discounts/"
    - title: "Shopify Archive: Marketing automations se přesouvají 24. 3."
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-automations-moving/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Discount shareable links umožňují vybrat marketing campaign a automaticky přidávat UTM identifiers — snadnější tracking výkonnosti v marketing reports."
tagy: [discount, marketing, utm, campaign, analytics]
---

## Co se mění
**Discount shareable links** (sdílené URL s aplikovaným discount kódem) umožňují přiřadit **marketing campaign**. Shopify automaticky přidává **UTM identifiers** k těmto linkům, takže lze snadno měřit výkonnost v marketing reports.

## Použití v Integrátoru
**Nepoužíváme** — marketing analytics feature.
