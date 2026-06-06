---
date: 2026-05-01
title: "actor pole na subscription contract a billing attempt mutacích"
title_en: "Add actor field to subscription contract and billing attempt mutations"
slug: actor-field-subscription-billing
zdroj: https://shopify.dev/changelog/add-actor-field-to-subscription-contract-and-billing-attempt-mutations
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Subscription contracts API neimplementujeme. interní MCP check vrátil prázdno."
dotcene_klienty: []
souvisejici: [create-unpaid-orders-subscription-billing, subscription-contracts-without-payment-methods]

kontext:
  background: |
    Pole `actor` v kontextu API designu reprezentuje princip atribuce — záznam o tom, která entita je zodpovědná za konkrétní operaci. Tento vzor je základem audit logů: každá mutace nese informaci o svém původci, což umožňuje zpětnou rekonstrukci událostí bez dohledávání serverových logů.

    Shopify Subscriptions API — součást rámce Selling Plans — spravuje opakované nákupy přes tři klíčové objekty: selling plan (šablona podmínek), subscription contract (konkrétní dohoda se zákazníkem) a billing attempt (pokus o fakturaci v daném cyklu). Mutace pro tyto objekty jsou dostupné jak v Admin GraphQL API, tak v Customer Account API. Historicky neexistoval standardizovaný způsob, jak rozlišit, zda akci inicioval zákazník přes svůj portál, obchodník ručně, nebo automatizace partnerské aplikace.

    Prakticky pole `actor` usnadňuje ladění a reporting: vývojáři mohou filtrovat billing attempts podle původce a diagnostikovat, proč byl kontrakt upraven nebo pokus zopakován. Zákazníci i merchant týmy mohou v portálu vidět, kdo akci provedl — relevantní zejména v B2B nebo compliance kontextech.

    Tato změna navazuje na API 2026-04, kde přibyly volitelné `paymentMethodId` při vytváření kontraktů a `paymentProcessingPolicy` pro generování nezaplacených objednávek z billing attempts.
  zdroje:
    - title: "Shopify Changelog: Add actor field to subscription contract and billing attempt mutations"
      url: "https://shopify.dev/changelog/add-actor-field-to-subscription-contract-and-billing-attempt-mutations"
    - title: "Shopify Docs: Build with subscriptions"
      url: "https://shopify.dev/docs/apps/build/purchase-options/subscriptions"
    - title: "Vytvoření nezaplacených objednávek z subscription billing attempts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/create-unpaid-orders-subscription-billing/"
    - title: "Subscription contracts bez payment method"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contracts-without-payment-methods/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Subscription mutace mají od API 2026-07 nové pole actor pro tracking, kdo akci inicioval — customer, merchant, nebo automatizace partner appky. Dostupné napříč billing a contract mutacemi v Admin a Customer Account API."
tagy: [subscription, contract, billing, audit, actor]
---

## Co se mění
V API verze **2026-07** přibývá pole `actor` na **subscription contract a billing attempt mutace**. Hodnota identifikuje, **kdo akci inicioval**: `customer` (sám zákazník), `merchant` (manuální akce v Adminu), nebo `partner_app` (automatizace třetí strany). Cíl: lepší **audit trail** pro recurring billing.

Pole je dostupné napříč Admin GraphQL API i Customer Account API mutacemi týkajícími se subscriptions.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, pole `actor` dostupné

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom v budoucnu zapojili Shopify Subscriptions API pro klienta, čtení `actor` pole pomáhá při debug nebo reportingu (např. „kdo zrušil subscription — zákazník nebo billing attempt selhal").

**Pro PM / PO:**
Bez okamžitého impactu. Pokud klient má subscription billing přes externí systém (ChargeBee, Recharge), tohle se ho netýká.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Subscriptions / Selling Plans API neintegrujeme. interní MCP check vrátil prázdné metody.

## Související
- [Vytvoření nezaplacených objednávek z subscription billing attempts](../zmena/create-unpaid-orders-subscription-billing/)
- [Subscription contracts bez payment method](../zmena/subscription-contracts-without-payment-methods/)
