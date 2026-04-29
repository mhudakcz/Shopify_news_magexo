---
date: 2026-02-04
title: "Rules for Order Review: dynamická pravidla pro schvalování objednávek"
title_en: "Create Rules for Order Review"
slug: rules-order-review-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme order methods. Order review pravidla se konfigurují v admin UI. Pokud klient chce custom approval workflow s našou integrací, lze sledovat přes order webhooks/queries."
dotcene_klienty: []

tldr: "Merchant nastaví dynamická pravidla, které objednávky vyžadují schválení (po hodnotě, počtu položek, kupujícím atd.)."
tagy: [b2b, order, review, approval, workflow]
---

## Co se mění
Merchant může definovat **pravidla**, kdy je B2B objednávka označena jako „pending review" a vyžaduje manuální schválení. Filtr může být na hodnotu objednávky, kupujícího (company location), počet položek, kombinace. Užitečné pro fraud prevention a credit management.

## Dopad pro nás
**Pro vývojáře:**
Order webhooks budou doručovat orders s nově možným statusem „pending review". Naše integrace, která syncuje orders do downstream systému, by měla tento stav respektovat — ne syncovat orders dokud nejsou schválené.

**Pro PM / PO:**
Pomáhá B2B klientům, kde sales tým chce kontrolovat větší objednávky než půjdou do fulfillment.

## Použití v Integrátoru
**Možná** — vyžaduje review naší order sync logiky, jestli správně rozeznává „pending review" stav.
