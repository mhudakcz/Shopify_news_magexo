---
date: 2026-07-24
title: "Shopify Shipping vs ShipStation — srovnání služeb"
slug: blog-shopify-shipping-vs-shipstation
zdroj: https://www.shopify.com/cz/blog/shopify-shipping-vs-shipstatio
shrnuto_dne: 2026-07-28
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Obecný srovnávací blog bez vazby na konkrétní API, ale témata carrier rates a shipping profiles se dotýkají naší integrátorské práce kolem dopravy u klientů."
dotcene_klienty: []
souvisejici: [blog-eshop-doprava-jak-odesilat, blog-logisticky-system, carrier-services-no-auto-shipping-profile]
tldr: "Shopify blog srovnává vestavěné Shopify Shipping s třetistranovým ShipStation — ceny, funkce, multikanálovost a dostupnost slevových štítků v ČR."
tagy: [shipping, shopify-shipping, shipstation, comparison, fulfillment, logistics]
zdroj_kanal: blog
kontext:
  background: |
    Shopify Shipping je nativní nástroj přímo v Shopify adminu, který obchodníkům umožňuje nakupovat přepravní štítky, počítat sazby a tisknout dokumenty bez opuštění platformy. Je zahrnutý v každém tarifu od Basic výše a cílí na obchodníky, kteří prodávají jen přes vlastní e-shop a chtějí jednoduché řešení „vše v jednom" bez nutnosti učit se další software. ShipStation je naproti tomu samostatná třetistranová aplikace se zvláštním předplatným, která se napojuje na Shopify i na řadu dalších prodejních kanálů současně (Amazon, eBay, Etsy, WooCommerce, BigCommerce, Magento) a nabízí pokročilejší automatizaci přepravních pravidel a hromadné zpracování objednávek.
    Rozdíl mezi nástroji se nejvíc projeví u obchodníků s vyšším objemem zásilek nebo těch, kteří prodávají na více platformách zároveň — tam ShipStation nabízí centralizovaný pracovní postup a sofistikovanější automatizaci (např. přiřazování přepravců podle pravidel, hromadný tisk štítků, notifikace skladu). Naopak menší e-shopy prodávající výhradně přes Shopify obvykle vystačí s vestavěným řešením, které se hladce integruje do zbytku administrace a nevyžaduje další integraci ani samostatné náklady navíc. Cenový rozdíl je citelný — ShipStation účtuje samostatné měsíční předplatné podle objemu zásilek, zatímco Shopify Shipping je součástí již placeného tarifu.
    Pro český trh je klíčové omezení: nákup zlevněných přepravních štítků přes Shopify Shipping není v ČR aktuálně dostupný, takže tuzemští obchodníci typicky řeší sazby přímo s přepravci (Zásilkovna, PPL, DPD, GLS, Česká pošta, DHL Express, UPS, FedEx) nebo přes carrier services napojené na shipping profily. Volba mezi nativním a třetistranovým nástrojem tak u nás často závisí spíš na počtu prodejních kanálů a míře potřebné automatizace než na přímé úspoře na štítcích.
  zdroje:
    - title: "Shopify: Shopify Shipping vs ShipStation — srovnání služeb"
      url: "https://www.shopify.com/cz/blog/shopify-shipping-vs-shipstatio"
    - title: "Shopify News Archive: Jak odesílat produkty zákazníkům — e-shop doprava"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-eshop-doprava-jak-odesilat/"
    - title: "Shopify News Archive: Jak navrhnout efektivní logistický systém pro obchod"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-logisticky-system/"
    - title: "Shopify News Archive: Carrier services nebudou automaticky přidávány do default shipping profile"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/carrier-services-no-auto-shipping-profile/"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Článek na Shopify blogu srovnává dvě cesty, jak řešit přepravu objednávek v e-commerce: vestavěné Shopify Shipping a samostatnou aplikaci ShipStation. Shopify Shipping je zahrnuté v každém předplatném platformy (od cca 499 Kč/měsíc) a nabízí jednoduché, nákladově efektivní řešení pro tisk štítků a výpočet sazeb přímo v adminu — bez nutnosti instalovat další nástroj. ShipStation naopak funguje jako samostatná aplikace s vlastním předplatným (od 14,99 USD/měsíc za 50 zásilek, výše podle objemu) a vyniká pokročilou automatizací přepravních pravidel, hromadným zpracováním objednávek a napojením na více prodejních kanálů zároveň — nejen na Shopify, ale i na Amazon, eBay, Etsy, WooCommerce, BigCommerce nebo Magento.

Text dále popisuje, kdy dává smysl který nástroj: Shopify Shipping se hodí obchodníkům prodávajícím výhradně přes vlastní e-shop, kteří chtějí jednoduchý pracovní postup bez učení složitého software. ShipStation je naopak vhodnější pro obchodníky s více prodejními kanály, vyšším objemem zásilek nebo potřebou sofistikovanější automatizace (např. automatické upozornění skladu na expresní doručení nebo označení objednávek s vysokou hodnotou pro dodatečné ověření). Článek zmiňuje i důležité omezení pro český trh — nákup zlevněných štítků přes Shopify Shipping zde není aktuálně dostupný, takže tuzemští obchodníci pracují spíš přímo s přepravci jako Packeta, PPL, DPD, GLS, Česká pošta, DHL Express, UPS a FedEx.

## Pro koho je to relevantní

Jde o obecný přehledový obsah bez vazby na konkrétní Shopify API — přímo se nedotýká žádné integrace, kterou u klientů stavíme. Tematicky ale navazuje na naši integrátorskou práci kolem carrier services a shipping profiles, kde podobné otázky (kolik prodejních kanálů obchodník má, jak moc potřebuje automatizovat přepravní pravidla, jestli vystačí s nativním řešením nebo potřebuje třetistrannou aplikaci) řešíme prakticky při návrhu dopravní logiky pro klienty. Užitečné jako referenční obsah při konzultacích s obchodníky, kteří zvažují, zda zůstat u vestavěných nástrojů Shopify nebo investovat do specializované shipping aplikace.
