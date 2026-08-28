---
date: 2026-08-25
title: "Generátor čárových kódů — nejlepší aplikace pro malé firmy"
slug: blog-generator-carovych-kodu-aplikace-male-firmy
zdroj: https://www.shopify.com/cz/blog/generator-carovych-kodu
shrnuto_dne: 2026-08-28
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-25
pouzivame_v_integratoru: ne
dukaz_integratoru: "Článek srovnává aplikace třetích stran pro tisk čárových kódů a štítků, nejde o změnu Shopify API ani o nic, co bychom implementovali na naší straně."
dotcene_klienty: []
souvisejici: [barcode-inventory-shipments, bin-locations-order-printer, purchase-orders-create-inventory-transfers]
tldr: "Shopify blog přehledově srovnává generátory čárových kódů a aplikace pro tisk štítků, vysvětluje rozdíl mezi standardizovanými GTIN kódy (UPC/EAN) a interními SKU kódy pro vlastní sklad."
tagy: [barcodes, inventory, sku, apps, retail, small-business]
zdroj_kanal: blog
kontext:
  background: |
    Generátor čárových kódů je nástroj, který z textového nebo číselného vstupu vytvoří strojově čitelný kód — sled čar a mezer (1D) nebo čtvercový vzor (2D) — určený k vytištění na produkt, obal nebo skladový štítek. Podle článku patří mezi nejběžnější jednorozměrné standardy UPC (12místný kód typický pro severoamerický maloobchod), EAN (mezinárodní standard, EAN-13 pro běžné zboží a EAN-8 pro malé předměty) a alfanumerické Code 39/128 pro komplexnější data. Dvourozměrné kódy jako QR, Data Matrix nebo PDF417 pak nesou více informací a čte je kamera mobilu nebo skener.

    Klíčové je rozlišení mezi GTIN kódy a interními SKU čárovými kódy. GTIN (Global Trade Item Number) zastřešuje formáty UPC a EAN — jde o globálně jedinečná čísla, která se typicky kupují nebo registrují přes organizaci GS1, a jsou potřeba všude tam, kde produkt putuje mimo vlastní sklad: na Amazonu, v Google Shopping feedu nebo u velkoobchodních partnerů. Naproti tomu interní SKU čárový kód si obchodník vytváří sám, libovolně, bez externí registrace — slouží čistě pro vlastní evidenci skladu, rychlejší odbavení na pokladně (POS) a párování fyzického zboží s produktovým záznamem v administraci. Pro malou firmu prodávající jen ve vlastním e-shopu nebo kamenné prodejně tak často stačí interní SKU kód; GTIN je nutný až ve chvíli, kdy zboží vstupuje na externí tržiště nebo do velkoobchodního řetězce.

    Článek dále shrnuje konkrétní generátory a aplikace: bezplatný online generátor přímo od Shopify (bez instalace), a placené Shopify aplikace pro tisk štítků jako EasyScan (od 9,99 USD/měsíc, s uchováváním vygenerovaných kódů), Yanet (bezplatná varianta do 200 štítků měsíčně), SingleTec (zdarma do 20 kódů, poté 3,99 USD/měsíc), QRPro (bezplatná aplikace zaměřená na QR kódy) a Multi-Label Barcodes (9,99 USD/měsíc po zkušební verzi, pro hromadný tisk štítků různých produktů). Přínos pro malé firmy je podle článku hlavně v zjednodušení správy zásob, snížení chyb při prodeji, zrychlení odbavení u pokladny a celkově vyšší provozní efektivitě skladu i prodejny.
  zdroje:
    - title: "Shopify: Generátor čárových kódů — nejlepší aplikace pro malé firmy"
      url: "https://www.shopify.com/cz/blog/generator-carovych-kodu"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Jde o přehledový článek ze Shopify CZ blogu určený obchodníkům, kteří teprve řeší, jak fyzicky označit zboží čárovými kódy. Vysvětluje základní typy kódů (UPC, EAN, Code 39/128 jako 1D formáty; QR, Data Matrix, PDF417 jako 2D formáty) a hlavně praktický rozdíl mezi standardizovanými GTIN kódy — které je potřeba registrovat přes GS1 a používají se při prodeji mimo vlastní e-shop (marketplace, velkoobchod) — a interními SKU čárovými kódy, které si firma volně vytváří sama jen pro svou skladovou evidenci a pokladní systém. Druhá polovina článku pak srovnává konkrétní generátory a aplikace dostupné na Shopify App Store, od bezplatného vestavěného generátoru přes levné aplikace pro tisk štítků (EasyScan, Yanet, SingleTec, QRPro) až po nástroje pro hromadný tisk více produktů najednou (Multi-Label Barcodes).

Obsahově se nejedná o technickou novinku ani změnu Shopify API — je to edukativní "how-to" materiál kombinovaný se srovnáním aplikací třetích stran, podobně jako jiné poradenské články ze Shopify blogu.

## Pro koho je to relevantní

Článek je určen zejména malým a začínajícím obchodníkům s fyzickým skladem nebo kamennou prodejnou, kteří teprve zavádějí systematické značení zboží a chtějí zrychlit vychystávání objednávek nebo odbavení na pokladně. Pro MageXo jde o doplňkový referenční materiál spíše než akční položku — nevyžaduje žádný zásah do kódu, API ani konfigurace obchodu. Užitečný je jako podklad při konzultacích s klienty, kteří řeší základy inventory managementu, přechod z ručního značení na čárové kódy, nebo potřebují vysvětlit rozdíl mezi GTIN a interním SKU kódem před tím, než začnou prodávat na externích tržištích. Souvisí tematicky s dalšími novinkami kolem čárových kódů a skladové logistiky v Shopify (barcode pole u inventory shipments, bin locations v Order Printeru, propojení purchase orders s inventory transfery), které jsou technicky relevantnější pro vývojářský tým.
