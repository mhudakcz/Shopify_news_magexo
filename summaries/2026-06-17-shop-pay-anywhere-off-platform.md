---
date: 2026-06-17
title: "Shop Pay i mimo Shopify — dostupný pro jakoukoli značku na jakékoli platformě"
title_en: "Shop Pay available to any brand on any platform (off-Shopify)"
slug: shop-pay-anywhere-off-platform
zdroj: https://help.shopify.com/en/manual/payments/shop-pay/shop-pay-on-any-platform
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shop Pay off-platform integrace probíhá přes Shop Pay Wallet API — relevantní pro klienty nebo projekty, kde nabízíme checkout řešení na platformách jiných než Shopify."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-payments", "rejection-reason-codes-payments-apps", "editions-spring-2026-shop-app"]
editions_release: spring-2026
kontext:
  background: |
    Shop Pay je accelerated checkout tlačítko Shopify, které zákazníkům s existujícím Shop účtem umožňuje dokončit nákup jedním klepnutím — bez znovu zadávání doručovací adresy, platební karty ani hesla. Síť Shop Pay čítá přes 250 milionů uložených zákazníků, kteří si tyto údaje uložili při předchozím nákupu na jakémkoli Shopify obchodě. Výsledkem je prokazatelně vyšší konverzní míra oproti standardnímu checkoutu i vůči ostatním accelerated checkout tlačítkům (Apple Pay, Google Pay, PayPal). Součástí nabídky jsou i Shop Pay Installments — bezúročné splátky dostupné v USA, Kanadě a Velké Británii.

    Historicky byl Shop Pay výhradně svázán s Shopify storefrontem. Brand provozující e-commerce na jiné platformě (WooCommerce, Magento, BigCommerce, vlastní React aplikace, headless implementace) neměl k Shop Pay přístup, bez ohledu na to, zda splňoval podmínky Shopify Payments. Toto omezení bylo strategickým oplocením Shopify ekosystému — Shop Pay bylo konkurenční výhoda, která tlačila merchanty k Shopify jako plnohodnotné platformě.

    Shopify Editions Spring '26 toto mění zásadní otočkou. Shop Pay je nově dostupný pro jakékoli brand na jakékoli platformě prostřednictvím **Shop Pay Wallet API**. Merchant musí aktivovat Shopify Payments (čímž se stává klientem Shopify platební infrastruktury), ale nepotřebuje migrovat svůj store. Do svého checkoutu pak zapojí Shop Pay tlačítko přes API a získá přístup k celé Shop Pay síti. Technická integrace vyžaduje vývojářské zkušenosti s REST/GraphQL API nebo spolupráci s Shopify Partnerem.

    Jde o strategicky nejvýznamnější krok v historii Shop Pay. Shopify se přesouvá z pozice "platforma, která má skvělý checkout" do pozice "platební infrastruktura pro celý internet" — analogie ke Stripe (payment gateway) nebo Bolt (one-click checkout). Tento krok otevírá Shopify jako payment infrastructure provider pro trh, kde jinak dominují Stripe Link a Bolt. Pro merchanty na Shopify se nic nemění; nová možnost je additivní. Pro trh jako celek to znamená, že 250M+ Shop Pay shoppeři jsou nově dosažitelní i z platforem mimo Shopify.
  zdroje:
    - title: "Shopify Help: Shop Pay on any platform (off-Shopify)"
      url: "https://help.shopify.com/en/manual/payments/shop-pay/shop-pay-on-any-platform"
    - title: "Shopify Editions Spring '26: Payments theme overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shop Pay se poprvé otevírá mimo Shopify — jakákoli značka na jakékoli platformě může přes Shop Pay Wallet API integrovat one-tap checkout s přístupem k 250M+ uloženým shopperům."
tagy: [editions, shop-pay, off-platform, payments, omnichannel]
zdroj_kanal: editions
---

## Co se mění

Shopify od Editions Spring '26 umožňuje integrovat Shop Pay button do checkoutu na **libovolné e-commerce platformě** — bez nutnosti, aby merchant provozoval Shopify store. Přístup je podmíněn aktivací Shopify Payments (plné KYC, podpora v dané zemi), ale store může běžet na WooCommerce, Magento, BigCommerce, vlastní headless platformě nebo libovolném jiném řešení.

Technická integrace probíhá přes **Shop Pay Wallet API** a zahrnuje:

- Registraci přes enterprise landing page pro Shop Pay off-platform
- Aktivaci Shopify Payments v admin nastavení (jako standalone payment processor)
- Získání API credentials: Shop ID, Client ID, Admin API token, Storefront API token
- Implementaci Shop Pay tlačítka dle dokumentace Shop Pay Wallet API
- Propojení checkout domény v Shopify admin

Po integraci zákazníci s existujícím Shop účtem vidí Shop Pay button v checkoutu, pre-fill doručovacích a platebních údajů probíhá automaticky a platba je dokončena jedním klepnutím. Shop Pay Installments (bezúročné splátky) jsou součástí nabídky v podporovaných zemích. Zákazníkovi přibude tracking zásilek v Shop app.

Podmínky pro off-platform integraci:

- Checkout sbírá e-mail zákazníka před zpracováním platby
- Business splňuje podmínky Shopify Payments
- Provoz ve státě podporovaném Shopify Payments
- Vývojářský tým s API zkušenostmi nebo spolupráce s Shopify Partnerem
- Výplaty musí být nakonfigurovány do 21 dnů od první platby, jinak jsou transakce automaticky refundovány

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; funkce označena jako **live**
- (Enterprise onboarding probíhá přes sign-up na Shop Pay landing page — přesný roll-out timeline není publikován)

## Dopad pro nás

**Pro vývojáře:**
Shop Pay Wallet API je nové REST/GraphQL rozhraní pro integraci Shop Pay tlačítka mimo Shopify storefront. Pro projekty, kde stavíme nebo spravujeme checkout na non-Shopify platformě (headless, custom, migrace), je to reálná možnost výrazně zvýšit konverzi bez přechodu celého storu na Shopify. Technická integrace je srovnatelná s integrací Stripe Elements nebo PayPal JS SDK — vyžaduje implementaci na frontend (tlačítko) i backend (session management, webhook zpracování). Nutno počítat s Shopify Payments jako payment procesorem — merchant musí splnit podmínky Shopify Payments (dostupnost dle země, KYC).

**Pro PM / PO:**
Jde o novou hodnotovou nabídku pro klienty, kteří neběží na Shopify nebo uvažují o headless/composable architektuře: Shop Pay přináší konkurenční výhodu accelerated checkout bez vendor lock-in na Shopify platformu. Otázka k prověření u stávajících nebo potenciálních klientů: jaký mají konverzní dropout v checkoutu a zda jsou v zemích s podporou Shopify Payments. Pokud ano, Shop Pay off-platform je argument pro audit jejich checkout stacku.

## Použití v Integrátoru

Integrace Shop Pay Wallet API je možná v rámci custom checkout projektů — relevantní zejména pro headless nebo non-Shopify e-commerce, kde řešíme platební flow na klíč.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Payments](/Shopify_news_magexo/zmena/editions-spring-2026-payments/)
