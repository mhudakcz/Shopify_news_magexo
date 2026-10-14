---
date: 2026-10-11
title: "Shopify Shop App — přizpůsobte si prezentaci své značky"
slug: blog-shopify-shop-app-prizpusobeni-znacky
zdroj: https://www.shopify.com/cz/blog/shopify-shop-app
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o nastavení v administraci Shopify a v aplikaci Shop bez dopadu na API, přímý technický zásah to nevyžaduje. Týká se jen obchodů, které prodávají přes kanál Shop."
dotcene_klienty: []
souvisejici: [customize-shop-product-pages-blocks, editions-spring-2026-shop-app, shop-cross-device-cart-sync-faster-checkout]
tldr: "Shopify na blogu shrnuje, jak si merchant může v aplikaci Shop upravit produktové stránky (bloky, sekce, šablony), zvolit přímý nebo doporučující prodej a nastavit personalizovaný obchod s připnutými kolekcemi, menu a slevovými kódy."
tagy: [shop-app, shop, branding, customization, retention]
zdroj_kanal: blog
kontext:
  background: |
    Shop je spotřebitelská nákupní aplikace Shopify, přes kterou zákazníci objevují značky, nakupují jedním kliknutím a sledují zásilky. Pro merchanta je to zároveň prodejní kanál mimo vlastní storefront. Podle blogového článku aplikaci využívají miliony ověřených zákazníků a Shopify za prodej přes ni neúčtuje žádné další poplatky, zákaznický vztah a data zůstávají obchodníkovi.
    Článek je českým shrnutím toho, jak se dá v Shopu ovlivnit prezentace značky a produktů. Hlavní část tvoří editor produktových stránek s bloky a sekcemi, nastavení způsobu dokončení objednávky (přímo v aplikaci, nebo přesměrováním do e-shopu) a personalizovaná úvodní stránka obchodu s kartami Pokračovat v prohlížení a Pro vás, připnutými kolekcemi, navigačním menu a slevovými kódy. Blokový editor produktových stránek jsme už popisovali jako samostatnou novinku, tento článek ho zasazuje do širšího kontextu práce s kanálem Shop.
    Z pohledu merchanta jde o provozní a marketingové nastavení, ne o vývojářskou změnu. Žádné API ani nový přepínač pro integrace článek nepřináší a uvedené přínosy (více prokliků, vyšší konverze, nižší míra opuštění stránky) jsou očekávání autora, nikoli naměřená data. Související novinky o synchronizaci košíků mezi zařízeními a o přesunu webové části Shopu na shop.com jsou popsány samostatně.
  zdroje:
    - title: "Shopify: Shopify Shop App — přizpůsobte si prezentaci své značky"
      url: "https://www.shopify.com/cz/blog/shopify-shop-app"
    - title: "Customizace product detail pages na Shop appce přes blocks"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-shop-product-pages-blocks/"
    - title: "Editions Spring '26: Shop app — AI search, omnichannel a Shop Minis"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-shop-app/"
    - title: "Shop: rychlejší checkout + synchronizované košíky napříč zařízeními"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shop-cross-device-cart-sync-faster-checkout/"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify na svém českém blogu shrnuje tři oblasti, ve kterých si merchant může v aplikaci Shop upravit, jak se jeho značka a produkty zákazníkům zobrazují. Všechno se nastavuje v administraci Shopify přes prodejní kanál Shop a nevyžaduje kód.

**1. Produktové stránky v Shopu.** Do editoru Shop se přidávají bloky a sekce, na jednu produktovou stránku lze použít až 2 sekce. K dispozici je 5 typů bloků: obrázek (lifestylové fotky, tabulky velikostí, vizuály značky), video, prezentace (karusel obrázků a videí s popisky), skupina produktů (až 4 související produkty) a video s možností nákupu, kde jsou produkty označené přímo ve videu. Pomocí šablon produktů lze pro různé produkty nebo kategorie nastavit odlišné sekce, například jinou pro oblečení a jinou pro elektroniku. Úpravy se podle článku projeví v aplikaci i na webové verzi Shopu.

**2. Způsob dokončení objednávky.** Merchant volí mezi dvěma režimy. U přímého prodeje (nativního) zákazník dokončí nákup přímo v aplikaci Shop. U doporučujícího prodeje je zákazník přesměrován do e-shopu, což se hodí pro produkty s personalizací nebo složitými variantami. Režim lze nastavit pro celý obchod i pro jednotlivé produkty, nastavení najde merchant v části Shop, Nastavení, Prodej.

**3. Personalizovaný obchod v Shopu.** Zákazník vidí kartu Pokračovat v prohlížení s naposledy zobrazenými položkami a kartu Pro vás s doporučeními z doporučovacího systému Shopu. Merchant sám určuje, které kolekce se připnou nahoru (typicky bestsellery nebo novinky, v administraci Shop, Obchod, Přizpůsobit), může pod záhlaví aplikace přidat navigační menu a nastavit, aby se slevové kódy zobrazovaly v nabídkovém kanálu každého nakupujícího.

Článek je psaný spíš marketingově než technicky. Uvádí očekávané přínosy, tedy více prokliků, vyšší konverzi a nižší míru opuštění stránky, ale žádná naměřená čísla ani výsledky testů. Nezabývá se banery a logy v rámci Shopu, oznámeními, integrací Shop Pay ani synchronizací košíku, takže tato témata je třeba hledat v samostatných novinkách.

## Pro koho je to relevantní

Hlavně pro merchanty a e-commerce manažery, kteří prodávají nebo chtějí prodávat přes kanál Shop. Jde o příležitost, jak si bez vývoje vylepšit prezentaci produktů v aplikaci: stačí využít bloky a šablony produktů, připnout správné kolekce a zvolit, zda se má objednávka dokončit v aplikaci, nebo na vlastním e-shopu. Rozhodnutí o režimu prodeje má smysl dělat podle typu sortimentu. Produkty s personalizací nebo složitými variantami jsou vhodnější pro doporučující prodej, jednoduché produkty zvládne přímý prodej v aplikaci.

Pro vývojáře není nutná žádná akce, článek nepřináší žádné API, žádnou změnu v theme ani v integracích. Jediná praktická souvislost je u obchodů s přímým prodejem v Shopu: objednávky z aplikace se objeví v administraci jako objednávky z kanálu Shop, což stojí za zohlednění při reportingu a při párování zdrojů prodeje.

Pro PM a PO je to informativní novinka s nízkou naléhavostí. Hodí se jako podnět při rozhovorech o rozšíření prodejních kanálů nebo o zvýšení konverzí, ale bez zásahu a bez termínu. Dopad na výsledky je nejlépe sledovat v analytice po zapnutí úprav. Jelikož článek žádná čísla neuvádí, nelze z něj odvodit konkrétní očekávaný přínos.
