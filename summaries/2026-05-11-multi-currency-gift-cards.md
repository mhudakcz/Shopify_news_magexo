---
date: 2026-05-11
title: "Multi-currency gift cards: prodej v měně zákazníka"
title_en: "Sell gift cards in your customers' local currency"
slug: multi-currency-gift-cards
zdroj: https://changelog.shopify.com/posts/sell-gift-cards-in-your-customers-local-currency
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
nalehavost: stredni
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Gift cards mají v Admin API svoje methods. Pokud klient prodává gift cards a má mezinárodní zákazníky, multi-currency setup může vyžadovat update naší fulfillment / order sync flow."
dotcene_klienty: []
souvisejici: [customize-checkout-accounts-by-market]

kontext:
  background: |
    Gift cards jsou v Shopify digitální poukazy s pevně stanovenou hodnotou, které zákazníci nakupují jako dárek nebo přidělují sami sobě. V Admin GraphQL API jsou reprezentovány objektem GiftCard s poli jako initialValue, balance (typ MoneyV2) a expiresOn. Tradičně byly vždy denominovány v primární měně storu.

    Shopify Markets, spuštěné jako platforma pro cross-border prodej, umožňují provozovat jeden store pro více geografických trhů s vlastními cenami, měnami a daňovými pravidly. Přirozeným problémem bylo, že gift cards zůstávaly vázány na měnu storu — kanadský zákazník viděl hodnotu v USD, což snižovalo atraktivitu produktu a komplikovalo účetnictví. Multi-currency podpora gift cards tento gap uzavírá a logicky navazuje na obecnou filosofii Markets: každý trh by měl zákazníkovi nabídnout lokálně relevantní zážitek.

    Z praktického hlediska přibývá do ekosystému nový rozměr pro integrační flow: gift card objekty v API mohou nyní nést různé hodnoty currencyCode. Systémy pro účtování, loyalitu nebo ERP synchronizaci musí být schopny tuto rozmanitost zpracovat. Klíčové je rozhodnutí při vydání karty — single-market (uplatnění jen v dané měně, bez kurzového rizika) nebo multi-market (uplatnění kdekoliv s konverzí v době uplatnění) — a toto nastavení nelze po vydání změnit.

    Gift cards v kontextu mezinárodního prodeje úzce souvisejí s dalšími Markets funkcemi jako přizpůsobení checkoutu per market nebo podpora více právních entit přes Shopify Payments, které společně tvoří ucelenou infrastrukturu pro globální obchod.
  zdroje:
    - title: "Sell gift cards in your customers' local currency — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/sell-gift-cards-in-your-customers-local-currency"
    - title: "GiftCard — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard"
    - title: "Customizace checkoutu a customer accounts per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/"
    - title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Multi-currency gift cards s flexible redemption — z USD storu lze prodávat EUR, CAD, GBP karty s currency-locked hodnotou. Volby pro single nebo multi-market redemption."
tagy: [gift-card, multi-currency, international, markets]
---

## Co se mění
**Gift cards** mohou být nyní vystavené v **měně zákazníka**, ne jen v měně storu:
- Z USD storu lze prodávat EUR / CAD / GBP / ... karty
- **Currency-locked value** — karta má hodnotu pevně v dané měně
- Konfigurace redemption: **single-market** (jen ta měna) nebo **multi-market** (currency conversion při uplatnění)

## Dopad pro nás
**Pro vývojáře:**
Gift card sync s ERP / loyalty systémem může nově dostávat různé currency labels. Naše Admin API queries by měly číst `currencyCode` na gift card objektu pro správné účetní zaúčtování.

**Pro PM / PO:**
Pro klienty s mezinárodním prodejem (Markets aktivní) — appealing feature pro gift / promo programy.

## Použití v Integrátoru
**Možná** — pokud klient prodává gift cards přes naši integraci, prověřit, že sync flow správně handluje currency.
