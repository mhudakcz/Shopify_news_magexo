---
date: 2026-10-16
title: "Batch fulfillment — vyřídit až 250 objednávek najednou (pick, print, pack)"
title_en: "Fulfill orders in batches"
slug: fulfill-orders-in-batches
zdroj: https://changelog.shopify.com/posts/fulfill-orders-in-batches
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o UI workflow v Shopify Admin a changelog nezmiňuje žádné API; dotkne se nás jen tehdy, pokud naše sync aplikace reagují na vytvoření fulfillmentu nebo trackingu, protože batch jich může vytvořit až 250 v krátkém sledu."
dotcene_klienty: []
souvisejici: [mark-fulfillments-delivered-without-tracking, editions-spring-2026-operations, blog-shopify-shipping-vs-shipstation]
tldr: "Shopify Admin nově umožňuje seskupit až 250 fulfillmentů do jedné batche a společně je vychystat, nakoupit štítky, vytisknout dokumenty a zabalit, s přizpůsobitelným vícekrokovým workflow a přiřazením pracovníka ke každému kroku."
tagy: [fulfillment, batches, picking, packing, shipping-labels, workflow, operations]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Batch fulfillment (hromadné vychystávání) je v logistice standardní technika, jak zrychlit sklad. Místo toho, aby picker pro každou objednávku obešel sklad zvlášť, vezme se skupina objednávek, vytiskne se jeden společný pick list se součtem všech potřebných produktů, zboží se vychystá najednou a teprve při balení se rozdělí do jednotlivých zásilek. Čím víc objednávek a čím víc překrývajících se SKU, tím větší úspora kroků. Dosud se v Shopify Adminu fulfillovalo převážně po jedné objednávce, a kdo potřeboval hromadný postup, sáhl po aplikaci třetí strany nebo po externím WMS.

    Shopify nyní tuto možnost přidává přímo do Adminu. Merchant může seskupit až 250 fulfillmentů podle libovolného kritéria, například podle typu produktu nebo cílové destinace, a zpracovat je jako jednu jednotku. Výchozí workflow má tři kroky: Pick (tisk pick listu s produkty ze všech objednávek v batchi), Print (jedním klikem nákup shipping labelů pro celou batch a společný tisk packing slipů, štítků a celních formulářů) a Pack (skenování položek s okamžitou zvukovou a barevnou zpětnou vazbou, zelená fajfka pro správnou položku, chybový tón a červená ikona pro špatnou nebo nadbytečnou). Kroky i akce lze přidávat, mazat, přejmenovávat a přeuspořádávat tažením, u každého kroku se dá zvolit, které dokumenty se tisknou, a lze k němu přiřadit konkrétního člena týmu.

    Funkce zapadá do dlouhodobé linie provozních vylepšení Shopify, jako je ruční označování fulfillmentů za doručené nebo automatický nákup štítků ve Flow. Post je stručný a odkazuje na článek v Shopify Help Center. Neuvádí dostupnost podle plánu, cenu, harmonogram rolloutu ani žádnou změnu API, takže tyto body je nutné ověřit v Adminu konkrétního obchodu.
  zdroje:
    - title: "Shopify: Fulfill orders in batches"
      url: "https://changelog.shopify.com/posts/fulfill-orders-in-batches"
    - title: "Označení fulfillments bez trackingu jako delivered"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/mark-fulfillments-delivered-without-tracking/"
    - title: "Editions Spring '26: Operations"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-operations/"
    - title: "Shopify Shipping vs ShipStation — srovnání služeb"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-shopify-shipping-vs-shipstation/"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Admin přidává **batch fulfillment**. Merchant vybere objednávky na stránce Orders, klikne na **Create batch** a Shopify je zpracuje jako jednu skupinu. Batch pojme **až 250 fulfillmentů** a lze ji sestavit podle kritérií, jako je typ produktu nebo cílová destinace. Shopify umí také automaticky vytvořit batch z nejnovějších nevyřízených (unfulfilled) objednávek.

Výchozí workflow se skládá ze tří kroků:

- **Pick:** tisk společného pick listu s produkty ze všech objednávek v batchi.
- **Print:** nákup shipping labelů pro všechny objednávky najednou a následný hromadný tisk packing slipů, štítků a celních formulářů (customs forms).
- **Pack:** skenování položek. Správná položka dá zvukový signál a zelenou fajfku, špatná nebo nadbytečná chybový tón a červenou ikonu.

Workflow je přizpůsobitelné. Kroky lze přidávat, mazat a přejmenovávat, k libovolnému kroku lze přidat další akce, kroky i akce se přeuspořádávají tažením, u každého kroku se volí tištěné dokumenty a ke každému kroku lze přiřadit člena týmu. Tím vzniká jednoduchý warehouse proces přímo v Adminu, bez nutnosti externího nástroje.

Changelog **neuvádí** dostupnost podle plánu, cenu ani rollout, ani žádné nové GraphQL pole, mutaci nebo webhook. Podrobnosti odkazuje do Shopify Help Center.

## Časová osa

- **2026-05-03** — Personál může označit fulfillmenty bez carrier trackingu jako delivered.
- **2026-06-17** — Editions Spring '26 (téma Operations) přináší mimo jiné automatický nákup shipping labelů ve Flow.
- **2026-10-16** — Shopify zveřejňuje changelog post o batch fulfillmentu v Adminu.
- **Dostupnost podle plánu a regionu** — v postu neuvedena, je nutné ověřit v konkrétním obchodě.

## Dopad pro nás

**Pro vývojáře:** Žádná změna API v postu není, takže nic nemusíme upravovat. Jako hypotézu k ověření na development storu je dobré sledovat, jak se fulfillmenty vytvořené z batche projeví na straně Admin API a webhooků. Pokud budou vznikat stejně jako při ručním vyřízení (FulfillmentOrder a Fulfillment s trackingem), změna je pro naše aplikace neviditelná. Pozor ale na **burst**: jedna batch může během krátké doby vytvořit až 250 fulfillmentů, a tedy stejný počet eventů. Aplikace, které na fulfillment nebo tracking reagují odesláním do ERP, WMS nebo e-mailové služby, by měly mít frontu a ošetřené rate limity. Post tyto detaily nepotvrzuje, jde o předpoklad.

**Pro PM / PO:** Je to **nová příležitost** u merchantů s vlastním skladem a vyšším objemem objednávek, kde operations tým dnes fulfilluje po jedné objednávce. Batch s pick listem a skenováním při balení může zkrátit čas na objednávku a snížit chybovost, a to bez nákupu WMS. Hodí se jako téma pro konzultaci provozních procesů a pro srovnání s aplikacemi třetích stran (například ShipStation). Přínos nemají merchanti, jejichž fulfillment dělá 3PL nebo externí WMS. Před doporučením je třeba ověřit, zda je funkce dostupná v plánu a na trhu daného obchodu, a zda nákup štítků přes Shopify funguje s přepravci, které merchant používá. Naléhavost je střední: není to breaking change, ale je to rychlé vítězství pro provozní týmy.

## Použití v Integrátoru

Přímo **nepoužíváme**, jde o UI workflow v Adminu bez zmíněného API. Pokud některý projekt synchronizuje fulfillmenty nebo tracking do externího systému, je vhodné ověřit, že batch vytváří standardní fulfillmenty a eventy, a otestovat chování při dávce 250 položek.
