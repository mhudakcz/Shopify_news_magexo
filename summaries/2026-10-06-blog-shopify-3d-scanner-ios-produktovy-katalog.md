---
date: 2026-10-06
title: "Shopify 3D scanner pro iOS — vylepšete produktový katalog"
slug: blog-shopify-3d-scanner-ios-produktovy-katalog
zdroj: https://www.shopify.com/cz/blog/shopify-3d-scanner
shrnuto_dne: 2026-10-08
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klienti začnou nahrávat 3D modely přes mobilní aplikaci, může se u jejich produktů objevit nový typ media, který je potřeba počítat při exportech, feedech a práci s Catalog API."
dotcene_klienty: []
souvisejici: [catalog-search-filter-by-media-type, blog-virtualni-zkusebni-kabinky, blog-vybaveni-produktova-fotografie]
tldr: "Shopify mobilní aplikace pro iOS umí naskenovat produkt iPhonem Pro, vytvořit z něj 3D model a přidat ho rovnou k produktu bez dalšího softwaru nebo studia."
tagy: [3d-scanner, ios, product-catalog, ar, media, shopify-tools]
zdroj_kanal: blog
kontext:
  background: |
    3D modely produktů se na e-shopech dlouho používaly hlavně u větších značek, protože jejich výroba vyžadovala specializovaný hardware, externí službu nebo fotografické studio. Merchant tak buď investoval stovky až tisíce dolarů za jeden produkt, nebo se 3D obsahu vzdal úplně. Shopify už delší dobu podporuje 3D modely jako typ product media a umí je zobrazit v galerii produktu i v AR náhledu na zařízeních, která to umožňují. Úzkým místem tedy nebyla platforma, ale samotná tvorba modelu.

    Nová funkce v mobilní aplikaci Shopify pro iOS tuhle bariéru snižuje. Merchant otevře aplikaci, v přehledu produktů vybere existující produkt nebo založí nový, zvolí Add media a spustí 3D scanner. Potom produkt naskenuje podle pokynů na obrazovce, zkontroluje hotový model a přidá ho k produktu. Podle článku stačí k vytvoření modelu méně než 20 minut a nejsou potřeba žádné zkušenosti s 3D. Funkce je dostupná bez příplatku. Požadavkem je iPhone v řadě Pro s iOS 17 nebo novějším; LiDAR senzor článek přímo nezmiňuje.

    Shopify ve článku uvádí praktická doporučení pro kvalitní výsledek. Skenovaný předmět by měl být větší než zhruba 8 cm ve všech rozměrech, scéna osvětlená měkkým rovnoměrným přirozeným světlem, kolem předmětu by měl být dost volného místa a pozadí by mělo být světlejší než produkt. Na skenování je dobré vyhradit 10 až 15 minut v klidu a počítat s tím, že první pokus nemusí být ten nejlepší. Článek tvrdí, že 3D model pomáhá zvýšit konverzi, protože zákazník vidí produkt ze všech stran a může si ho promítnout do vlastního prostoru, a že tím mohou klesat vratky i zátěž zákaznické podpory. Konkrétní čísla (procenta nárůstu konverze) článek neuvádí a takové hodnoty je třeba brát jako orientační marketingové tvrzení, ne jako garantovaný efekt. Článek také nepopisuje formáty souborů ani technické detaily AR náhledu.
  zdroje:
    - title: "Shopify: Shopify 3D scanner pro iOS — vylepšete produktový katalog"
      url: "https://www.shopify.com/cz/blog/shopify-3d-scanner"
    - title: "Catalog search: filtrování podle media type"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/catalog-search-filter-by-media-type/"
    - title: "Virtuální zkušební kabinky: průvodce pro maloobchodníky (2026)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-virtualni-zkusebni-kabinky/"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify rozšiřuje mobilní aplikaci pro iOS o 3D scanner, který z fyzického produktu vytvoří 3D model přímo v telefonu. Postup je jednoduchý: v aplikaci otevřete produkt (nebo založíte nový), zvolíte Add media, spustíte 3D scanner a podle pokynů na obrazovce předmět nasnímáte. Hotový model zkontrolujete a přidáte k produktu, kde se z něj stane běžné product media vedle fotek a videí.

Podle Shopify je potřeba jen iPhone Pro s iOS 17 a samotná aplikace, žádný další software ani hardware. Tvorba má trvat do 20 minut a funkce je bez příplatku. Pro dobrý výsledek doporučuje Shopify skenovat předměty větší než zhruba 8 cm, při měkkém přirozeném světle, se světlejším pozadím a s dostatkem volného místa kolem předmětu.

Z pohledu platformy jde o zpřístupnění tvorby obsahu, ne o novou technickou schopnost. 3D modely jako typ media Shopify podporuje už dříve (v Catalog API se objevují vedle obrázků a videí, viz související změna s filtrem podle media type). Nově je levnější a rychlejší je vyrobit. Článek sice slibuje vyšší konverzi a méně vratek, ale konkrétní čísla neuvádí, takže přínos je nutné ověřit na vlastních produktech.

## Pro koho je to relevantní

Jde o nízkoprioritní novinku a pro většinu našich projektů nevyžaduje žádnou akci. Relevantní je hlavně pro klienty, kteří prodávají fyzické produkty, u nichž záleží na tvaru, velikosti a materiálu (nábytek, dekorace, doplňky, obuv, drobné spotřební zboží), a kteří dosud neměli rozpočet na profesionální 3D scan. Pro takové klienty může být zajímavé doporučit vyzkoušet scanner na několika bestsellerech a sledovat dopad na konverzi a vratky.

Z technického pohledu stojí za pozornost dvě věci. Za prvé, až klienti začnou 3D modely nahrávat, objeví se u jejich produktů nový typ media, s nímž musí počítat exporty, feedy do marketplaců a případné vlastní skripty nad Catalog API. Za druhé, kvalita telefonem skenovaných modelů bude proměnlivá a v šablonách je dobré ověřit, jak se model zobrazuje v galerii produktu a v AR náhledu. Skenování zvládne přímo merchant, takže na naší straně nevzniká žádná povinná práce; jde o příležitost k doporučení a případné úpravě šablony.
