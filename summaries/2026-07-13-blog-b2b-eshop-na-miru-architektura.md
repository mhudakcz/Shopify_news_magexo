---
date: 2026-07-13
title: "Jak B2B e-shop na míru a správná architektura podporují růst firmy"
slug: blog-b2b-eshop-na-miru-architektura
zdroj: https://www.shopify.com/cz/blog/b2b-eshop-na-miru
shrnuto_dne: 2026-07-16
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Popisuje architektonická rozhodnutí (composable commerce, custom vs. SaaS, integrace ERP/CRM/PIM) přímo relevantní pro návrh a scoping B2B implementací."
dotcene_klienty: []
souvisejici: [blog-uspesne-b2b-eshopy, blog-b2b-e-commerce-integrace, blog-b2b-strategie-2026]
tldr: "Článek vysvětluje, proč je pro škálování B2B businessu klíčová architektura e-shopu a proč composable přístup na platformě jako Shopify často vychází lépe než čistě custom řešení."
tagy: [b2b, architektura, ecommerce, custom, growth]
zdroj_kanal: blog
kontext:
  background: |
    Article se věnuje otázce, kterou si dřív nebo později položí každá rostoucí B2B firma: postavit e-shop na míru od základu, nebo stavět na existující platformě? B2B prodej má oproti B2C jiné nároky — smluvní ceny místo pevného ceníku, víceúrovňové schvalování objednávek, fakturace a úvěrové linky namísto okamžité platby kartou, hierarchie firemních účtů s více uživateli a řádově vyšší objemy i hodnoty objednávek. Architektura, která tohle všechno unese, musí zvládnout správu individuálních cen a katalogů podle segmentu zákazníka, schvalovací workflow s rolemi a auditními záznamy, bezpečnostní požadavky typu GDPR a PCI DSS, a hlavně hladkou integraci s ERP, CRM a PIM systémy přes API.
    Text mapuje vývoj architektonických přístupů: staré monolity byly spolehlivé, ale pomalé a nepružné na změny; čisté mikroslužby slibovaly flexibilitu, ale v praxi přinesly zbytečnou provozní složitost. Jako střední cestu popisuje composable commerce — silné jednotné jádro doplněné modulárními komponentami, které lze zapojovat podle potřeby. Právě tímto směrem jde i Shopify, když do core platformy postupně přidává nativní B2B funkce (kurátorované katalogy, personalizované ceny, samoobslužné portály) bez nutnosti stavět je od nuly.
    Prakticky se to ukazuje na srovnání nákladů a času: článek uvádí případ firmy Carrier, kde tradiční custom e-shop vyšel na 2 miliony dolarů a rok vývoje, zatímco srovnatelná funkcionalita na Shopify stála 100 000 dolarů a byla hotová za 30 dní. Podobně firma Tony's Chocolonely díky modernizaci architektury dosáhla 2,5násobně rychlejšího načítání stránek a udržela dvouciferný růst, Filtrous ušetřila support týmu 10 hodin týdně a Shopify jako platforma vykazuje o 36 % lepší celkové náklady vlastnictví (TCO) než konkurenční řešení. Pro migraci ze starého systému doporučuje článek fázovaný přístup podle segmentů nebo regionů, paralelní běh starého a nového systému a důkladné testování integrací, aby se minimalizovalo riziko výpadku. Úspěch pak doporučuje měřit kombinací technických metrik (rychlost, dostupnost, odezva API), uživatelských metrik (adopce, konverze, úspěšnost vyhledávání) a operačních metrik (frekvence nasazení, čas vývoje, chybovost).
  zdroje:
    - title: "Shopify: Jak B2B e-shop na míru a správná architektura podporují růst firmy"
      url: "https://www.shopify.com/cz/blog/b2b-eshop-na-miru"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Článek se ptá, jestli se B2B firmě víc vyplatí e-shop postavený na míru od nuly, nebo řešení na existující platformě — a odpovídá jednoznačně ve prospěch druhé varianty, pokud je platforma dostatečně flexibilní. Vychází z toho, že B2B commerce má jiné nároky než běžný B2C e-shop: smluvní ceny podle zákazníka, schvalovací procesy u objednávek, fakturaci místo platby kartou a firemní účty s více uživateli a rolemi. Architektura, která to všechno unese, se podle textu neobejde bez integrace s ERP, CRM a PIM systémy a bez schopnosti škálovat databáze i infrastrukturu s růstem objemu objednávek.

Jako ideální model popisuje composable commerce — pevné jádro doplněné o vyměnitelné moduly — na rozdíl od starých monolitů (pomalé, nepružné) i čistých mikroslužeb (zbytečně komplexní provoz). Konkrétní čísla dávají tvrzení váhu: custom e-shop firmy Carrier stál 2 miliony dolarů a rok vývoje, zatímco srovnatelné řešení na Shopify vyšlo na 100 000 dolarů a 30 dní. K tomu přidává příklady jako Tony's Chocolonely (2,5× rychlejší načítání) nebo Filtrous (10 hodin ušetřeného supportu týdně) a obecné číslo 36% lepšího TCO oproti konkurenci. Závěrem doporučuje při migraci postupovat po fázích, běžet nějakou dobu paralelně se starým systémem a měřit úspěch kombinací technických, uživatelských a provozních metrik.

## Pro koho je to relevantní

Jde o edukativní blogový obsah zaměřený na B2B firmy a jejich rozhodovatele, kteří zvažují rebuild nebo modernizaci e-shopové architektury. Přímý dopad na naši práci nemá — nejde o novou funkci ani API — ale argumentace (composable commerce, srovnání custom vs. platforma, integrace ERP/CRM/PIM) je užitečný referenční materiál při scopingu a obhajobě architektonických rozhodnutí u B2B klientů.
