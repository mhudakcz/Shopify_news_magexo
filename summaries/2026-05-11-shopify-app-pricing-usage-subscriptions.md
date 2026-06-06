---
date: 2026-05-11
title: "Shopify App Pricing: usage + subscriptions billing kombinace"
title_en: "Shopify App Pricing: charge for usage, recurring subscriptions, or both"
slug: shopify-app-pricing-usage-subscriptions
zdroj: https://shopify.dev/changelog/shopify-app-pricing-charge-for-usage-recurring-subscriptions-or-both
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api, nova-prilezitost]
api_oblast: billing
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Billing model pro apps publikované do Shopify App Store. Naše integrace běží jako custom apps (per klient), tak App Pricing nepoužíváme přímo. Ale pokud bychom někdy publikovali public app, je to relevantní."
dotcene_klienty: []
souvisejici: [app-events-dev-dashboard]

kontext:
  background: |
    Shopify App Pricing je nativní monetizační systém pro aplikace v Shopify App Store — vývojář definuje cenový model a Shopify zpracovává fakturaci přímo vůči obchodníkovi. Systém nahradil dřívější Managed Pricing a integruje se s Partner Dashboardem, kde se celá konfigurace odehrává bez nutnosti vlastní platební infrastruktury.

    Historicky nabízel App Store pouze jednoduché fixní měsíční předplatné nebo jednorázové poplatky. S rostoucí složitostí aplikací (AI nástroje, API-intensive integrace) přestával tento model vyhovovat — vývojáři potřebovali fakturovat na základě skutečného využití. Shopify proto přidal usage-based billing napojený na App Events API: app posílá vlastní události (např. zpracovaná objednávka, synchronizovaný produkt) a Shopify je agreguje do faktur s podporou tří cenových struktur — pevná, progresivní a objemová.

    Kombinovaný model (subscription + usage) umožňuje nabídnout základní plán s garantovaným přístupem a přidávat variabilní složku za nadstandardní využití. Obchodník vidí transparentní přehled plánu a nadcházejících poplatků přímo v Shopify Adminu. Pro vývojáře jsou dostupné API pro čtení stavu předplatného v reálném čase i historická billing data vhodná pro reporting a reconciliation.

    S App Events API — samostatně dostupným pro monitoring a logging — tvoří App Pricing ucelenou platformu pro měření a monetizaci. Oba systémy jsou vzájemně propojené: events odeslané přes App Events API lze přímo mapovat na usage metery definované v Partner Dashboardu.
  zdroje:
    - title: "Shopify Changelog: App Pricing — charge for usage, recurring subscriptions, or both"
      url: "https://shopify.dev/changelog/shopify-app-pricing-charge-for-usage-recurring-subscriptions-or-both"
    - title: "App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify App Pricing (dřív Managed Pricing) nyní podporuje subscriptions i usage-based charges konfigurované z Partner Dashboardu. Nové APIs poskytují real-time subscription status a historical billing data."
tagy: [billing, app-pricing, subscriptions, usage]
---

## Co se mění
**Shopify App Pricing** (dřív Managed Pricing) se rozšiřuje:
- **Subscriptions** (recurring monthly/yearly) — již existující
- **Usage-based charges** — nově, konfigurovatelné per event type
- **Kombinace** — base subscription + extra usage charges

Nová APIs poskytují:
- **Real-time subscription status**
- **Historical billing data** pro reporting / reconciliation

Konfigurace v **Partner Dashboardu**.

## Použití v Integrátoru
**Možná** — relevantní jen pokud publikujeme public app. Naše custom apps tomu nepodléhají.
