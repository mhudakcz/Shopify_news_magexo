---
date: 2026-02-04
title: "EDI workflows: nativní sync z Crstl a SPS Commerce do Shopify draft orders"
title_en: "Shopify and EDI Workflows Connect"
slug: edi-workflows-crstl-sps
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 9 draft order methods (createDraftOrder, calculateDraftOrder, completeDraftOrder atd.). Pokud klient potřebuje EDI příjem POs, nativní Crstl/SPS integrace je alternativa k naší custom Edi-to-Shopify pipeline."
dotcene_klienty: []
souvisejici: [erp-systems-integration-b2b]

kontext:
  background: |
    EDI (Electronic Data Interchange) je standardizovaný formát pro elektronickou výměnu obchodních dokumentů mezi firemními systémy — nejčastěji nákupních objednávek (Purchase Orders), faktur a potvrzení dodávek. Jde o technologii s desetiletou historií, která je v B2B a velkoobchodním světě stále dominantní: velké maloobchodní řetězce a distributoři ji vyžadují jako podmínku spolupráce.

    V Shopify ekosystému slouží draft orders jako mezistupeň mezi přijatou objednávkou a finálně potvrzenou transakcí. Obchodník ji může zkontrolovat, upravit ceny nebo platební podmínky a teprve poté převést na plnohodnotnou objednávku. Tato mezifáze je klíčová právě pro B2B, kde jsou objednávky rozsáhlejší a vyžadují schválení.

    Crstl a SPS Commerce jsou dva přední poskytovatelé EDI sítí, kteří propojují tisíce dodavatelů s velkými odběrateli. Jejich nativní napojení na Shopify znamená, že příchozí Purchase Order od retailového partnera se bez přepsání automaticky promítne jako draft order přímo v administraci, čímž odpadá vlastní middleware nebo manuální import.

    Tato integrace navazuje na širší strategii Shopify zaměřenou na B2B — vedle nativních ERP konektorů (NetSuite, Sage, Acumatica) jde o další krok ke kompletnímu velkoobchodnímu řešení bez závislosti na custom infrastruktuře.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Nativní B2B integrace s NetSuite, BrightPearl, Sage, Acumatica, Fulfil"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/erp-systems-integration-b2b/"
    - title: "Dynamické payment terms a deposits pro B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/dynamic-payment-terms-deposits-b2b/"
    - title: "Shopify Admin GraphQL: draftOrderCreate"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "EDI POs z Crstl a SPS Commerce se nyní auto-syncují jako Shopify draft orders bez custom middleware."
tagy: [edi, b2b, draft-order, integration, crstl, sps-commerce]
---

## Co se mění
Shopify nativně podporuje příjem **EDI Purchase Orders** z dvou hlavních EDI providerů — **Crstl** a **SPS Commerce**. POs se automaticky převedou na **Shopify draft orders**, kde je merchant může schválit a převést na finální order.

## Dopad pro nás
**Pro vývojáře:**
Pokud klient má B2B partnera, který komunikuje přes EDI (typicky velkoobchody, retail řetězce), tahle nativní integrace nahrazuje custom EDI-to-Shopify pipeline. Naše `createDraftOrder` flow zůstává jako záloha pro non-EDI scénáře nebo komplexní transformace.

**Pro PM / PO:**
Discovery question pro B2B klienty: „máte EDI partnery? Používáte Crstl nebo SPS?" Pokud ano, šance ušetřit jim náklady na custom EDI middleware.

## Použití v Integrátoru
**Možná** — nahrazuje subset toho, co děláme přes draft orders u některých B2B klientů. Stojí za to projít portfolio a identifikovat case studies.
