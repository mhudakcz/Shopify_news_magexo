---
date: 2026-07-15
title: "ExchangeLineItem: nová pole productId, title, variantSku, variantTitle (2026-10)"
title_en: "productId, title, variantSku, and variantTitle fields added to ExchangeLineItem"
slug: exchangelineitem-new-fields
zdroj: https://shopify.dev/docs/api/admin-graphql/2026-10/objects/ExchangeLineItem#fields
shrnuto_dne: 2026-07-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud čteme Return/exchange data, ušetříme dodatečný lookup na Product/ProductVariant."
dotcene_klienty: []
souvisejici: [pos-returns-exchanges-cart, returns-metrics-renamed-reversals, built-for-shopify-returns-subscriptions-customer-account-api]
tldr: "ExchangeLineItem má nově přímo productId, title, variantSku a variantTitle, takže při dotazu na výměnu zboží (exchange) v rámci vratky není potřeba samostatný lookup na Product nebo ProductVariant."
tagy: [admin-graphql-api, exchange, returns, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    ExchangeLineItem je objekt v Admin GraphQL API, který reprezentuje položku určenou k výměně (exchange) v rámci procesu vratky (Return). Používá se typicky, když zákazník vrací produkt a místo refundace žádá jiný produkt nebo variantu – ExchangeLineItem pak nese informace o tom, co bylo za původní položku vyměněno, včetně množství ke zpracování (processableQuantity, processedQuantity, unprocessedQuantity). Objekt je dostupný přes pole exchangeLineItems na objektu Return a vyžaduje scope read_returns.
    Do verze 2026-10 obsahoval ExchangeLineItem pouze odkazy jako productId a variantId ve smyslu ID, ale bez čitelných doprovodných údajů typu název produktu nebo SKU – ty bylo nutné dohledávat samostatným dotazem na Product/ProductVariant. Nově přidaná pole productId, title, variantSku a variantTitle ukládají tyto hodnoty jako snapshot z okamžiku vytvoření vratky (return creation time), podobně jako to funguje u LineItem na objednávce.
    Prakticky to znamená, že integrace pracující s vratkami a výměnami (např. reporting, zákaznický servis, synchronizace se skladovým/ERP systémem) mohou v jediném GraphQL dotazu na Return získat kompletní čitelný přehled o vyměňovaném produktu bez nutnosti dalšího roundtripu na Product nebo ProductVariant. To zjednodušuje kód i snižuje počet API volání, což se počítá do rate limitů.
  zdroje:
    - title: "Shopify: productId, title, variantSku, and variantTitle fields added to ExchangeLineItem"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-10/objects/ExchangeLineItem#fields"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Objekt `ExchangeLineItem` v Admin GraphQL API (verze 2026-10) získává čtyři nová pole:

- **`productId`** (ID) – identifikátor produktu v okamžiku vytvoření vratky
- **`title`** (String) – název produktu v okamžiku vytvoření vratky
- **`variantSku`** (String) – SKU varianty v okamžiku vytvoření vratky
- **`variantTitle`** (String) – název varianty v okamžiku vytvoření vratky

Do teď musela aplikace, která chtěla zobrazit nebo zpracovat detail exchange položky (např. „zákazník si místo trička M vyměnil za trička L"), dodatečně dotahovat produkt nebo variantu přes samostatný dotaz, protože `ExchangeLineItem` nesl jen syrová ID (`variantId`, případně deprecated `lineItem`). Nová pole fungují jako snapshot – uchovávají hodnoty platné v čase vytvoření vratky, takže zůstávají stabilní i pokud se produkt později přejmenuje nebo smaže.

## Časová osa

- **2026-07-15** – změna zveřejněna v Shopify dev docs (Admin GraphQL API 2026-10)
- Dostupné ve verzi API **2026-10**

## Dopad pro nás

**Pro vývojáře:** Pokud čteme `Return.exchangeLineItems` (např. při reportingu vratek, synchronizaci s ERP/skladem, nebo v zákaznickém servisu), můžeme nová pole rovnou zahrnout do query a ušetřit dodatečný lookup na `Product`/`ProductVariant` – méně API volání, jednodušší kód, menší zátěž na rate limit.

**Pro PM / PO:** Jde o drobné, nedisruptivní rozšíření schématu bez breaking change. Nevyžaduje žádnou akci, pokud aktuálně exchange položky nezpracováváme; je ale dobré o něm vědět pro budoucí návrhy integrací týkajících se vratek a výměn.

## Použití v Integrátoru

Pokud bychom v budoucnu implementovali práci s Return/exchange daty (např. detailní reporting vratek), nová pole ušetří jeden dodatečný GraphQL dotaz na produkt/variantu.
