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
