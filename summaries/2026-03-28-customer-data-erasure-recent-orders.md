---
date: 2026-03-28
title: "Customer data erasure: 10 dnů wait nezávisle na recency objednávek"
title_en: "Updated handling of customer data erasure requests with recent orders"
slug: customer-data-erasure-recent-orders
zdroj: https://shopify.dev/changelog/updated-handling-of-customer-data-erasure-requests-with-recent-orders
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, integrace]
api_oblast: webhooks
api_verze: []
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-03-28

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme pubsub webhook subscriptions methods. Pokud poslouchám customers/redact webhooky pro GDPR compliance flow, načasování zpracování requestů se mění."
dotcene_klienty: []

tldr: "Customer data erasure požadavky se nově zpracují 10 dnů po odeslání bez ohledu na recency objednávek."
tagy: [gdpr, compliance, webhook, customers-redact]
---

## Co se mění
Customer **data erasure requests** (GDPR/CCPA "right to be forgotten") se nově zpracovávají **10 dnů po odeslání**, **bez ohledu** na to, kdy zákazník naposled objednal. Dříve Shopify zdržoval erasure pokud byly nedávné orders (pro audit/refund flow). Nově je window jednotný.

## Časová osa
- **2026-03-28** — nový policy nasazen

## Dopad pro nás
**Pro vývojáře:**
Pokud naslouchám webhooku `customers/redact` (typicky kvůli mazání customer dat z naší DB při GDPR požadavku), je timing **deterministický** — 10 dnů po requestu. Žádný breaking change na payload, jen jistota, že webhook přijde fix-time po request.

**Pro PM / PO:**
Pomáhá při GDPR compliance — víme, že do 10 dnů musíme mít data smazaná i u nás. Vhodné komunikovat klientům, kteří mají GDPR DPA s námi.

## Použití v Integrátoru
**Možná** — máme `getWebhookSubscriptions` a related pubsub methods. Pokud subscribe na `customers/redact` topic, tento change je relevantní.

## Rizika a edge cases
- Refund/return flow s objednávkou těsně před erasure requestem může mít konflikt — Shopify vyřeší typicky vrácením peněz na původní payment method, ale zákazník už nebude existovat
