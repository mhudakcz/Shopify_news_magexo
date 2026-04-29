---
date: 2026-04-02
title: "Shopify zpřístupňuje B2B features všem plánům (nejen Plus)"
title_en: "Shopify brings native B2B features to millions more merchants"
slug: b2b-for-all-merchants
zdroj: https://www.shopify.com/news/b2b-for-all
zdroj_kanal: product-news
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
api_verze: []
nalehavost: vysoka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše B2B integrace dosud cílily primárně na Shopify Plus klienty. Otevření B2B na Basic/Grow/Advanced rozšiřuje target audience. Naše customer/draft order/catalog methods fungují stejně napříč plány."
dotcene_klienty: []
souvisejici: [erp-systems-integration-b2b, edi-workflows-crstl-sps]

tldr: "Shopify rozšiřuje nativní B2B features na Basic, Grow a Advanced plány — bez příplatku, integrované přímo do core."
tagy: [b2b, plus, plan, expansion]
---

## Co se mění
Shopify představil zásadní strategické rozšíření: **B2B features** (companies, payment terms, tier pricing, B2B catalogs, customer accounts s rolemi) se rozšiřují z exkluzivního Plus plánu na **Basic, Grow a Advanced** — **bez příplatku**. Spolu s tím **Shopify Flow, Markets a Shopify Payments** budou pro B2B fungovat stejně jako pro DTC.

Klíčový citát z Shopify oznámení: B2B je „built directly into the core of our platform, not as a bolt-on" — žádné samostatné systémy nebo plug-iny.

## Dopad pro nás
**Pro vývojáře:**
Naše B2B integrace fungují přes Admin GraphQL API a stejné endpointy běží napříč Shopify plány. Žádný breaking change. Ale **rozšiřuje se okruh potenciálních klientů** — merchanti, kteří dosud používali plug-iny pro B2B na Basic/Grow/Advanced, mohou přejít na nativní řešení a chtít integraci.

**Pro PM / PO:**
**Velký moment pro náš sales pipeline.** Klienti, co dosud byli na Basic/Grow/Advanced a chtěli B2B, ale neměli budget na Plus, jsou teď eligible. Worth proaktivně oslovit existující DTC klienty s prefix „máme B2B aspirace, ale Plus byl moc drahý" — nyní lze.

## Použití v Integrátoru
**Možná** — naše stávající B2B integrace stojí na standardním Admin API. Pokud klient přejde z plug-in B2B (typicky third-party app jako Wholesale Hero) na nativní, budeme možná muset upravit data flow (jiná struktura companies, payment terms).

## Související
- [Nativní ERP integrace](../zmena/erp-systems-integration-b2b/)
- [EDI workflows pro B2B](../zmena/edi-workflows-crstl-sps/)
