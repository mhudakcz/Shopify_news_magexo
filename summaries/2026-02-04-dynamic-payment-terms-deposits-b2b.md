---
date: 2026-02-04
title: "Dynamické payment terms a deposits pro B2B"
title_en: "Dynamic Payment Terms and Deposits"
slug: dynamic-payment-terms-deposits-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
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

kontext:
  background: |
    Payment terms (platební podmínky) jsou smluvně sjednané lhůty a způsoby úhrady mezi prodejcem a kupujícím. V B2B prostředí jde typicky o schémata jako Net 30 (zaplatit do 30 dnů od vystavení faktury), zálohové platby (deposit) před odesláním zboží nebo splátkové harmonogramy. Shopify reprezentuje tyto podmínky objektem PaymentTerms, který lze připojit k objednávkám i draft orders a obsahuje pole jako paymentTermsType, dueInDays a seznam PaymentSchedule.

    Shopify B2B jako samostatná platforma vzniklo kolem roku 2022 a od té doby prochází rychlým rozvojem. Dosud bylo nastavení payment terms v Shopify relativně statické — merchant mohl přiřadit šablonu podmínek company location, ale bez možnosti automatizovaného výběru podle kontextu objednávky. Winter 2026 Editions tuto mezeru uzavírá a přináší dynamická pravidla řízená logikou Shopify Functions, která jsou výhradně dostupná na Shopify Plus.

    Praktický dopad je největší pro B2B prodejce s různorodou zákaznickou základnou: mohou automaticky přiřadit Net 7 novým odběratelům, Net 30 ověřeným partnerům a vyžadovat 20% zálohu u zakázek nad určitou hodnotu. Vše se propíše do draft orders a navazujících objednávek, které lze dále synchronizovat s ERP systémy. Sousední funkce jako Rules for Order Review nebo nativní ERP integrace (NetSuite, Sage) z téhož vydání tvoří ucelený rámec pro řízení B2B obchodního cyklu.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "PaymentTerms — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms"
    - title: "ERP Systems Integration for B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/erp-systems-integration-b2b/"
    - title: "Rules for Order Review B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rules-order-review-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
