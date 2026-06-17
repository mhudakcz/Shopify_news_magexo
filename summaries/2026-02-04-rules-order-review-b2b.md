---
date: 2026-02-04
title: "Rules for Order Review: dynamická pravidla pro schvalování objednávek"
title_en: "Create Rules for Order Review"
slug: rules-order-review-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme order methods. Order review pravidla se konfigurují v admin UI. Pokud klient chce custom approval workflow s našou integrací, lze sledovat přes order webhooks/queries."
dotcene_klienty: []

kontext:
  background: |
    Schvalovací workflow objednávek (order approval / order review) je standardní součástí B2B obchodních procesů, kde nákupní oddělení kupujícího nebo prodejní tým dodavatele musí ručně potvrdit transakci dříve, než postoupí do fulfillmentu. Typickými spouštěči jsou překročení úvěrového limitu, nestandardní kombinace produktů nebo noví zákazníci bez ověřené platební historie. Tento mechanismus je běžný v ERP systémech jako SAP nebo Oracle, kde tvoří součást procesu order-to-cash.

    Shopify B2B se jako samostatná vrstva platformy vyvíjí od roku 2022 a postupně přebírá funkce, které dříve vyžadovaly třetí strany nebo rozsáhlé zakázkové implementace. Shopify Functions — serverless výpočetní vrstva umožňující rozšíření obchodní logiky přímo v Shopify infrastruktuře — jsou klíčovým stavebním blokem této funkce. Funkcionalita je vázána na plán Shopify Plus, kde je B2B nativně dostupné bez dalších aplikací pro správu firemních zákazníků (company, company location, buyer roles).

    V praxi tato funkce uzavírá mezeru mezi jednoduchým Shopify storefront a komplexními B2B požadavky na kontrolu objednávek. Navazuje na širší sadu nástrojů vydaných ve Winter 2026 Editions — včetně dynamických platebních podmínek a ERP integrací — a společně tvoří ucelenou platformu pro řízení celého B2B obchodního cyklu. Stav „pending review" je dostupný přes Admin API a webhooky, což umožňuje integraci s externími systémy pro schvalování.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Dynamic Payment Terms and Deposits B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/dynamic-payment-terms-deposits-b2b/"
    - title: "ERP Systems Integration for B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/erp-systems-integration-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
