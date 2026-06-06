---
date: 2026-05-15
title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
title_en: "Sell from multiple legal entities in the same country using Shopify Payments"
slug: multiple-legal-entities-shopify-payments
zdroj: https://changelog.shopify.com/posts/sell-from-multiple-legal-entities-in-the-same-country-using-shopify-payments
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost, integrace]
api_oblast: billing
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Více legal entities přes Markets je strukturní změna. Pokud klient má B2B + D2C oddělené, naše order sync flow může potřebovat split podle entity (různé fakturační údaje, různé bankovní účty)."
dotcene_klienty: []
souvisejici: [customize-checkout-accounts-by-market]

kontext:
  background: |
    Právní entita (legal entity) je registrovaný podnikatelský subjekt se samostatným IČO, DIČ a bankovním účtem, který nese vlastní právní a daňové povinnosti. Ve Shopify kontextu se jedná o propojení platebního účtu s konkrétní firmou nebo pobočkou — každá entita zpracovává platby a výplaty odděleně, což je klíčové pro finanční výkaznictví a daňovou uzávěrku.

    Shopify historicky řešilo více entit primárně prostřednictvím samostatných storů nebo tzv. expansion stores, což generovalo duplicitní administraci, oddělené katalogy a složitou správu skladu. Produkt Markets, spuštěný jako nástroj pro mezinárodní expanzi, se postupně rozrůstá o možnosti pokrývající i domácí trh — multi-entity podpora je přirozeným rozšířením této platformy pro firmy, které nepotřebují více zemí, ale potřebují více právních identit.

    Prakticky jsou multi-entity konfigurace relevantní zejména pro holdingové struktury, distributory s vlastním retailem a firmy kombinující B2B velkoobchod s D2C prodejem. Každý market může být svázán s jiným Shopify Payments účtem, což ovlivňuje tok výplat (payouts) a jejich mapování v účetních systémech. Vývojáři integrující ERP nebo účetní software musí ověřit, jak API exponuje entitu per objednávka — nejpravděpodobněji přes market nebo location kontext.

    Trend naznačuje, že Shopify posiluje koncept jednoho storu jako dostatečného pro komplexní obchodní struktury — v kombinaci s Markets, B2B funkcemi a checkout customizací per market jde o součást širší strategie snižovat potřebu multi-store architektur.
  zdroje:
    - title: "Sell from multiple legal entities in the same country using Shopify Payments"
      url: "https://changelog.shopify.com/posts/sell-from-multiple-legal-entities-in-the-same-country-using-shopify-payments"
    - title: "Customize checkout and customer accounts by market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/"
    - title: "Shopify zpřístupňuje B2B features všem plánům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
    - title: "Čitelnější payout balance a reserve info v Shopify Payments"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/clearer-payout-balance-shopify-payments/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Merchant může nakonfigurovat více Shopify Payments účtů v jednom storu přes Markets — prodej online a retail pod různými legal entities, různé entities pro různé retail lokace, oddělení B2B a D2C."
tagy: [shopify-payments, markets, b2b, legal-entity, multi-entity]
---

## Co se mění
**Shopify Payments** rozšířený o **multi-entity** support — merchant v jednom Shopify storu konfiguruje **více Shopify Payments účtů** vázaných na **různé legal entities** (různé IČO/DIČ, různé bankovní účty) přes Markets. Use cases:
- **Online vs. retail** pod oddělenými entities
- **Různé retail lokace** s vlastními entities
- **Oddělené B2B a D2C** sales pod různými entities

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace syncuje orders + payouts s ERP/účetnictvím, je třeba ověřit jak Admin API expozuje entity per order. Pravděpodobně přes location nebo market context. Sync flow → vyfiltrovat podle entity, propsat do správného účtu v ERP.

**Pro PM / PO:**
**Velká karta pro B2B + retail kombinace klienty** — typicky distributor s vlastním e-shopem. Předtím vyžadovalo multiple stores; teď stačí jeden.

## Použití v Integrátoru
**Možná** — relevantní pro klienty s komplexní legal structure. Audit při onboardingu.
