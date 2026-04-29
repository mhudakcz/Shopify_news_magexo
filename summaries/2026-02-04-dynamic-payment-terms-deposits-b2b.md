---
date: 2026-02-04
title: "Dynamické payment terms a deposits pro B2B"
title_en: "Dynamic Payment Terms and Deposits"
slug: dynamic-payment-terms-deposits-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme draft order methods. Pokud klient potřebuje custom payment terms (Net 30, deposit 20% atd.) a aktuálně to řešíme custom logikou, nativní podpora přes third-party app může nahradit část implementace."
dotcene_klienty: []
souvisejici: [edi-workflows-crstl-sps, erp-systems-integration-b2b]

tldr: "Shopify B2B umožňuje přes third-party / custom apps nastavit dynamic payment terms a deposits dle pravidel."
tagy: [b2b, payment-terms, deposit, draft-order]
---

## Co se mění
Shopify B2B otevírá API pro **dynamic payment terms** (např. „Net 30 pro klienty s historií objednávek > 1 rok, jinak Net 7") a **deposits** (požadavek 20 % zálohy před odesláním). Pravidla se konfigurují přes third-party apps nebo custom Shopify Functions.

## Dopad pro nás
**Pro vývojáře:**
Pokud klient řešení payment terms vyžaduje custom rules (např. „klient X má speciální podmínky"), můžeme buď použít existující app nebo postavit custom Function. Naše draft order workflow může číst tyto terms a propsat je do ERP.

**Pro PM / PO:**
Velká karta pro B2B klienty — flexibilita platebních podmínek je často diferenciátor. Pokud klient řekne „chceme různé Net podmínky pro různé tier zákazníky", tohle je odpověď.

## Použití v Integrátoru
**Možná** — třída B2B klientů s komplexním credit management. Doporučuji projít portfolio.
