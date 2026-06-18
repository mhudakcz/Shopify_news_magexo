---
date: 2026-06-17
title: "Shopify Smart Pricing app — AI tipy na cenotvorbu"
title_en: "Shopify Smart Pricing app — AI pricing tips"
slug: shopify-smart-pricing-app
zdroj: https://apps.shopify.com/shopify-smart-pricing
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme cenotvorbu nebo reportovací workflow pro klienty, Smart Pricing může být relevantní doplněk k vlastním analytickým řešením."
dotcene_klienty: []
souvisejici: [editions-spring-2026, us-retailers-adjust-prices-collective, spot-trends-analytics-insights]
editions_release: spring-2026
kontext:
  background: |
    Shopify Smart Pricing je nativní Shopify app dostupná zdarma, která generuje AI-based pricing recommendations na úrovni jednotlivých produktů. Na základě analýzy prodejní historie, stavu skladu, nákladů a sezónních vzorců app navrhuje konkrétní akce — zdražení i zlevnění — s cílem optimalizovat marži bez nutnosti manuálního sledování.

    Cenotvorba v e-commerce je tradičně reaktivní: obchodníci mění ceny ad hoc na základě intuice, občasných výprodejů nebo sledování konkurence. AI-driven přístup, kde systém sám identifikuje příležitosti (pomaloobrátové produkty vhodné ke slevě, bestsellery s prostorem pro markup), je logickým rozšířením analytické sady, kterou Shopify postupně buduje od verze Shopify Analytics přes ShopifyQL až po Sidekick.

    App se usazuje na průsečíku Shopify Admin a dat z checkoutu — pracuje s cost-of-goods-sold (COGS) daty, inventory levels a sales velocity. Obchodník dostane dashboard s doporučeními (markdowns/markups), může je selektivně přijmout jedním klikem nebo ignorovat. Pro US trh je navíc k dispozici A/B price testing, který umožní reálně testovat cenové varianty před plošným zavedením.

    Technicky app nevyžaduje žádné API integrace ze strany třetích stran — jde o first-party Shopify řešení s přístupem k web pixels, store analytics a produktovým datům. Rating 3.7 hvězdičky (20 recenzí při launchi) naznačuje, že app je funkční, ale reporting capabilities jsou zatím omezenější oproti specializovaným pricing nástrojům na trhu.
  zdroje:
    - title: "Shopify Smart Pricing app"
      url: "https://apps.shopify.com/shopify-smart-pricing"
    - title: "Editions Spring '26: Online — Storefront, customer accounts, B2B, Collective"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify vydal zdarma dostupnou Smart Pricing app, která pomocí AI analyzuje prodeje, sklad a náklady a navrhuje konkrétní úpravy cen produktů pro maximalizaci marže."
tagy: [editions, pricing, ai, analytics]
zdroj_kanal: editions
---

## O čem to je

Shopify Smart Pricing je nová first-party app, která přináší AI-powered pricing recommendations přímo do Shopify Admin. App analyzuje data každého produktu zvlášť — prodejní historii (sales velocity), aktuální inventory levels, cost of goods (COGS) a sezónní vzorce poptávky — a na základě toho navrhuje, kde cenu zvýšit (markup pro rychloobrátové zboží) a kde snížit (markdown pro slow movers).

Obchodník vidí doporučení v přehledném dashboardu, může je přijmout jedním klikem nebo odmítnout. App automaticky aktualizuje tipy, takže doporučení jsou vždy aktuální. Pro vybrané US obchodníky je k dispozici A/B price testing, který umožní testovat cenové varianty na reálném provozu před plošnou změnou.

App je dostupná zdarma, nepotřebuje žádnou dodatečnou konfiguraci API a pracuje čistě s daty v rámci Shopify ekosystému.

## Časová osa

- 2025-06-20 — launch Smart Pricing app na Shopify App Store
- 2026-06-17 — Editions Spring '26 announce, app presentována jako součást Online tématu

## Dopad pro nás

**Pro vývojáře:**
Smart Pricing je čistě merchant-facing app bez veřejného API — není co integrovat na technické úrovni. App využívá interní Shopify data (web pixels, analytics, COGS), takže pro custom pricing logiku nebo export doporučení do externích systémů by bylo nutné pracovat se standardními Admin API endpointy pro produkty a price rules. Pokud klient chce pricing automation nad rámec toho, co app nabízí, zůstává řešením Shopify Functions (price rule functions) nebo webhooks na product/inventory update eventy.

**Pro PM / PO:**
Pro klienty, kteří manuálně spravují ceny desítek až stovek SKU, jde o nízkonákladový způsob, jak začít s data-driven cenotvorbou bez investice do specializovaného pricing softwaru. Vhodné zmínit zejména u klientů s velkým katalogem, výraznými sezónními výkyvy nebo problémem s přebytečnými zásobami. App je zdarma, takže neexistuje finanční bariéra pro vyzkoušení. Omezení: A/B testing jen pro US, reportovací možnosti jsou zatím základní.

## Použití v Integrátoru

Přímá integrace není relevantní — app funguje jako standalone Shopify Admin tool. V kontextu integračních projektů je zajímavá jako vzor pro pricing signal (COGS + inventory + sales velocity), pokud klient řeší podobnou logiku ve vlastním systému.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Online](/Shopify_news_magexo/zmena/editions-spring-2026-online/)
