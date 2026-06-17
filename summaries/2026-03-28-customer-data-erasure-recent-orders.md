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

kontext:
  background: |
    Webhook `customers/redact` je součástí Shopify compliance API, které umožňuje zákazníkům uplatnit právo na výmaz osobních údajů podle nařízení GDPR a zákona CCPA. Shopify jej odesílá aplikacím ve chvíli, kdy merchant požádá o smazání dat konkrétního zákazníka. Payload obsahuje ID zákazníka, e-mail, telefonní číslo a seznam ID objednávek, které mají být redigovány. Aplikace musí přijetí webhooků potvrdit stavovým kódem 2xx a data smazat do 30 dnů.

    Historicky Shopify tento webhook pozastavoval až na 180 dnů od poslední objednávky zákazníka — záměrem bylo ponechat merchantovi čas na vyřízení případných refundů nebo jiných poobjednávkových operací. Tento přístup však komplikoval compliance plánování, protože čas doručení webhooků nebyl předvídatelný a závisel na aktivitě zákazníka. Požadavky GDPR přitom obecně ukládají povinnost reagovat na žádost o výmaz do jednoho měsíce.

    Nové jednotné 10-denní okno přináší předvídatelnost a zjednodušuje návrh compliance procesů pro vývojáře aplikací i merchanty. Systémy, které záznamy zákazníků uchovávají (CRM, analytické platformy, marketingové nástroje), mohou nově přesněji naplánovat automatizované mazání. Výjimkou zůstávají scénáře s nevydanými dárkovými kartami, kde Shopify zpracování záměrně podrží.

    Tato změna úzce souvisí s dalšími aspekty správy zákaznických dat v Shopify ekosystému, jako je zpracování marketingového souhlasu nebo synchronizace zákaznických profilů přes externí identity providery.
  zdroje:
    - title: "Shopify Changelog: Updated handling of customer data erasure requests with recent orders"
      url: "https://shopify.dev/changelog/updated-handling-of-customer-data-erasure-requests-with-recent-orders"
    - title: "Shopify Docs: Privacy law compliance – customers/redact webhook"
      url: "https://shopify.dev/docs/apps/build/privacy-law-compliance"
    - title: "Změna: Marketing consent na přihlašovací stránce zákazníka"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-consent-customer-signin/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Customer data erasure požadavky se nově zpracují 10 dnů po odeslání bez ohledu na recency objednávek."
tagy: [gdpr, compliance, webhook, customers-redact]
editions_release: spring-2026
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
