---
date: 2026-10-22
title: "AI doporučování: Kompletní průvodce"
slug: blog-ai-doporucovani-pruvodce
zdroj: https://www.shopify.com/cz/blog/ai-doporucovani
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přehled typů doporučovacích algoritmů a nativního nastavení v Search & Discovery je užitečný podklad při konzultacích o upsellu, cross-sellu a volbě mezi nativním řešením a aplikací třetí strany."
dotcene_klienty: []
souvisejici: [blog-personalizace-eshopu-zakaznicky-zazitek-2027, blog-co-je-ai-vyuziti-ecommerce-2026, blog-ai-customer-service-ecommerce-strategie-2027]
tldr: "Shopify blog vysvětluje, jak fungují AI doporučovací systémy (content-based, collaborative filtering a hybrid), kam je v e-shopu umístit, jaké metriky sledovat a jak začít s nativním nastavením v Search & Discovery."
tagy: [ai, recommendations, personalizace, konverze, upsell, cross-sell]
zdroj_kanal: blog
kontext:
  background: |
    Článek definuje AI doporučování, často označované jako recommendation engine, jako využití strojového učení k tomu, aby se návštěvníkům zobrazovaly produkty, služby nebo obsah odpovídající jejich vkusu. Vstupem jsou demografické údaje, chování při procházení, recenze, historie vyhledávání, minulé nákupy a atributy produktů. Hlavní přínosy jsou snazší objevování produktů, vyšší průměrná hodnota objednávky (AOV) díky upsellu a cross-sellu a vyšší retence. Jako příklad je uveden případ kosmetické skupiny Orveon Global, která po nasazení doporučovacích modulů na platformě Nosto uvádí nárůst AOV o 10 až 15 procent napříč značkami. Takové číslo pochází od vendora nebo jeho partnera, takže je rozumné brát ho jako marketingové tvrzení.

    Technicky nejzajímavější část je srovnání tří typů algoritmů. Content-based doporučování páruje atributy produktů (kategorie, materiál, cenové pásmo, tagy, texty) s tím, co zákazník viděl nebo koupil, takže funguje i v nikách s malým množstvím behaviorálních dat, ale hrozí příliš úzký výběr téměř identických položek. Collaborative filtering hledá vzorce v chování zákazníků s podobným vkusem (klasické bloky zákazníci také koupili), ale potřebuje dostatek návštěvnosti a objednávek. Hybrid kombinuje obojí, nabízí nejvyšší přesnost a nejširší pokrytí katalogu, ale vyžaduje složitější nastavení a průběžnou optimalizaci. Praktické pravidlo článku zní, že při málo datech se vyplatí content-based, při vysoké návštěvnosti collaborative a při požadavku na maximální přesnost hybrid. Zmíněn je také problém cold startu u nových obchodů a nových produktů.

    Z hlediska nasazení článek doporučuje začít jedním umístěním s vysokým nákupním záměrem, typicky stránkou produktu nebo košíkem, a sledovat CTR, konverzní poměr a AOV oproti baseline. Další umístění jsou post-purchase doporučení (doplnění zásob, související kategorie, transakční e-maily), u nichž se měří opakované nákupy. Na straně Shopify je jmenována nativní funkce Search & Discovery, kde lze ručně vybrat až 10 komplementárních a až 10 souvisejících produktů na stránku produktu a kombinovat je s automaticky generovanými doporučeními. Dále je zmíněn Shopify Sidekick jako obecný AI asistent (nikoli doporučovací engine), aplikace Shopcast jako třetí strana a integrace Google Cloud Discovery AI u obchodu Rainbow Shops, který uvádí nárůst objemu vyhledávání na webu o 48 procent. Rebuy ani LimeSpot se v článku nevyskytují. Z pohledu GDPR upozorňuje na nutnost jasných informací o soukromí, správného cookie consentu a smlouvy o zpracování osobních údajů s externím poskytovatelem doporučování.
  zdroje:
    - title: "Shopify: AI doporučování: Kompletní průvodce"
      url: "https://www.shopify.com/cz/blog/ai-doporucovani"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify CZ blog z 22. října 2026 je edukativní průvodce AI doporučováním pro e-shopy. Vysvětluje, že recommendation engine využívá strojové učení nad daty o chování zákazníků a atributech produktů a zobrazuje relevantní nabídky na homepage, stránce produktu, v košíku nebo po nákupu. Jádrem textu je srovnání tří přístupů. Content-based doporučování stojí na atributech produktů a hodí se do nik s málo daty, collaborative filtering vychází z chování podobných zákazníků a potřebuje vysokou návštěvnost, hybrid obojí kombinuje za cenu složitějšího nastavení. Každý přístup má v článku uvedené hlavní omezení a příklad použití.

Praktická část popisuje tři typická umístění (stránka produktu, košík, post-purchase), metriky pro jejich vyhodnocení (CTR, konverzní poměr, AOV, míra opakovaných nákupů) a šestikrokový postup od výběru jednoho umístění přes úklid produktových dat až po testování a postupné rozšiřování. Nativní možností na Shopify je Search & Discovery, kde merchant ručně vybere až 10 komplementárních a až 10 souvisejících produktů a může je kombinovat s automatickými doporučeními. Z aplikací třetích stran je zmíněna Shopcast, platforma Nosto (v citaci případové studie Orveon Global) a Google Cloud Discovery AI (případ Rainbow Shops). Rebuy ani LimeSpot článek nezmiňuje, takže srovnání nativního řešení a plnohodnotných aplikací musí obchodník dohledat jinde. Čísla z případových studií (10 až 15 procent AOV, 48 procent vyhledávání) jsou vendor-sourced a je vhodné je ověřit u primárních zdrojů. Text také krátce upozorňuje na cold start problém a na požadavky GDPR, tedy transparentní informace o soukromí, cookie consent a smlouvu o zpracování dat s externím poskytovatelem.

## Pro koho je to relevantní

Pro merchanty a jejich marketingové či e-commerce týmy, které zvažují, jak zvýšit AOV a konverzi pomocí upsellu a cross-sellu, a potřebují srozumitelný rámec pro volbu mezi content-based, collaborative a hybrid přístupem podle objemu dat v obchodě. Pro nás je článek užitečný jako argumentační podklad při konzultacích o tom, kdy stačí nativní Search & Discovery a kdy se vyplatí aplikace třetí strany, a jako připomínka, že kvalita produktových dat (kategorie, atributy, tagy) je předpokladem pro jakékoli doporučování.

Nejde o změnu platformy ani API a nevyžaduje to žádnou akci ani technický zásah. Je to orientační čtení, které navazuje na obecnější články o personalizaci a využití AI v e-commerce.
