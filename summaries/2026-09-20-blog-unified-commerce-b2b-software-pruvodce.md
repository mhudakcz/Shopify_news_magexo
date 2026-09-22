---
date: 2026-09-20
title: "Průvodce B2B softwarem pro unified commerce a jeho funkce"
slug: blog-unified-commerce-b2b-software-pruvodce
zdroj: https://www.shopify.com/cz/blog/unified-commerce
shrnuto_dne: 2026-09-22
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-20
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Popisuje ERP napojeni a jednotny data model napric kanaly, coz je relevantni referencni ramec pro B2B projekty s vice prodejnimi kanaly."
dotcene_klienty: []
souvisejici: [blog-b2b-e-commerce-integrace, erp-systems-integration-b2b, blog-headless-commerce-b2b-implementace]
tldr: "Unified commerce sjednocuje data o produktech, cenach, skladu a objednavkach do jednoho modelu pro vsechny prodejni kanaly, coz na rozdil od omnichannel pristupu odstranuje roztristene backend systemy."
tagy: [unified-commerce, b2b, software, omnichannel, integration, erp]
zdroj_kanal: blog
kontext:
  background: |
    Shopify v tomto průvodci rozlišuje unified commerce od omnichannel přístupu. Zatímco omnichannel propojuje jen front-end kanály (web, POS, marketplace, sales rep) a nechává backend systémy roztříštěné, unified commerce staví na jednom společném data modelu, ke kterému mají všechny kanály real-time přístup. Každá transakce se tak odkazuje na stejný zdroj pravdy - stejné produkty, ceny, sklad i historii objednávek.

    Podle výzkumu McKinsey z roku 2024 citovaného v článku požaduje třetina B2B zákazníků osobní kontakt, třetina preferuje vzdálenou komunikaci a poslední třetina chce plně digitální self-service, který navíc roste nejrychleji. Na to reaguje architektura postavená na čtyřech pilířích: jednotný data model a pohled na zákazníka (včetně kontaktů, schvalovacích hierarchií, smluvních cen a platebních podmínek), real-time API orchestrace přes GraphQL/REST a webhooky, cenotvorba a schvalovací workflow podle role přihlášeného uživatele a nativní konektory na ERP/CRM systémy typu NetSuite, Microsoft Dynamics, Infor, Acumatica nebo Brightpearl pro okamžitou synchronizaci objednávek, skladu a financí.

    Článek dokládá dopad na číslech - firmy s unified commerce hlásí průměrně 8,9% růst GMV a 53% růst hodnoty zákazníka v prvním roce při 36% nižším TCO. Uvádí case studies (Simon Pearce, Tony's Chocolonely, The Conran Shop), kde konsolidace více systémů do jedné platformy zkrátila migraci na řádově měsíce (typicky 3-6, v jednom případě 92 dní), odstranila výpadky checkoutu a umožnila souběžný provoz DTC i B2B katalogu se stejnými daty o skladu a ceně.
  zdroje:
    - title: "Shopify: Průvodce B2B softwarem pro unified commerce a jeho funkce"
      url: "https://www.shopify.com/cz/blog/unified-commerce"
  generated_at: 2026-09-22T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Článek vysvětluje rozdíl mezi omnichannel a unified commerce přístupem v B2B prodeji. Omnichannel podle Shopify propojuje jednotlivé prodejní kanály (webshop, POS, sales rep, marketplace) navenek, ale data o produktech, cenách a skladu zůstávají v oddělených systémech propojených přes middleware. Unified commerce naproti tomu staví na jediném data modelu - jeden katalog, jeden sklad, jedna cenová logika - ke kterému všechny kanály přistupují v reálném čase přes API a webhooky.

Pro B2B segment z toho plynou konkrétní důsledky: zákazník uvidí stejnou smluvní cenu a dostupnost bez ohledu na to, jestli objednává přes e-shop, portál nebo obchodního zástupce; sklad se aktualizuje okamžitě při každé transakci s auditní stopou; a napojení na ERP/CRM (NetSuite, Microsoft Dynamics, Infor, Acumatica, Brightpearl) drží finanční a skladová data synchronizovaná bez ručních exportů. Článek to dokládá case studies, kde konsolidace více oddělených systémů do jedné platformy zkrátila implementaci na jednotky měsíců a odstranila výpadky způsobené nesourodými backend systémy.

## Pro koho je to relevantní

Relevantní je to hlavně pro B2B a wholesale projekty, kde zákazník kombinuje více prodejních kanálů najednou - typicky e-shop plus obchodní zástupce plus fyzický prodej nebo marketplace - a kde dosavadní řešení drží data o skladu, cenách nebo objednávkách v oddělených systémech propojených ad-hoc integracemi. Užitečný je i jako referenční rámec při plánování napojení na ERP/CRM systém, kdy je potřeba obhájit přechod na jeden sdílený data model místo udržování více paralelních zdrojů pravdy.
