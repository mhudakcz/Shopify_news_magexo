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

kontext:
  background: |
    Shopify B2B je sada nativních nástrojů pro velkoobchodní prodej přímo v rámci platformy. Zahrnuje firemní profily (Companies) s přiřazenými kontakty a rolemi, individuální katalogy produktů s vlastními cenami a objemovými slevami, platební podmínky umožňující odložené platby (net terms), uložené platební karty a správu nákupních objednávek. Jde o plnohodnotnou alternativu k tradičním B2B řešením postaveným na oddělených systémech.

    Shopify B2B bylo původně spuštěno jako součást Shopify Plus a po dobu několika let se vyvíjelo výhradně pro merchants s velkým objemem a složitými požadavky. Přístup k těmto funkcím byl podmíněn předplatným Plus plánu, který je výrazně dražší než standardní plány. Velkoobchodní prodej na nižších plánech byl řešen výhradně třetími aplikacemi (jako Wholesale Hero nebo Wholesale Club), což znamenalo fragmentaci dat a vyšší složitost provozu.

    Zpřístupnění B2B na plánech Basic, Grow a Advanced otevírá velkoobchodní prodej stovkám tisíc merchantů, kteří dříve neměli přístup k nativnímu řešení. Klíčová je přitom integrace s dalšími core funkcemi platformy — Shopify Flow umožňuje automatizaci B2B workflow, Markets pokrývá mezinárodní B2B prodej a Shopify Payments zajišťuje zpracování plateb. Dle dat Shopify průměrný uživatel nativního B2B zaznamenává nárůst sebeobslužných objednávek o 33 % v průběhu šesti měsíců.

    Rozšíření B2B mimo Plus plán signalizuje strategický posun Shopify — platforma se snaží stát univerzálním řešením pro merchants všech velikostí a obchodních modelů, nikoliv jen pro DTC segment.
  zdroje:
    - title: "Shopify brings native B2B features to millions more merchants"
      url: "https://www.shopify.com/news/b2b-for-all"
    - title: "Nativní B2B integrace s ERP systémy (Winter 2026)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/erp-systems-integration-b2b/"
    - title: "Dynamické payment terms a deposits pro B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/dynamic-payment-terms-deposits-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
