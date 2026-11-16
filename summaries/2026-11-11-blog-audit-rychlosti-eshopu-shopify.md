---
date: 2026-11-11
title: "Audit rychlosti e-shopu na Shopify: Proč zrychlení přináší konverze?"
slug: blog-audit-rychlosti-eshopu-shopify
zdroj: https://www.shopify.com/cz/blog/audit-rychlosti-eshopu
shrnuto_dne: 2026-11-16
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Rychlost storefrontu ovlivňují šablony, aplikace a skripty třetích stran, které u klientských projektů nasazujeme a můžeme je auditovat."
dotcene_klienty: []
souvisejici: [blog-shopify-algolia-enterprise-architektura, blog-graphql-vs-rest-enterprise-commerce-2027, store-activity-log-new]
tldr: "Shopify popisuje, jak číst přehledy výkonu webu (LCP, INP, CLS) a které úpravy, hlavně úklid aplikací, skriptů třetích stran a obrázků, nejvíce zrychlí e-shop a zvýší konverze."
tagy: [performance, rychlost, core-web-vitals, konverze, seo, audit]
zdroj_kanal: blog
kontext:
  background: |
    Článek na českém blogu Shopify vysvětluje, jak provést audit rychlosti e-shopu a proč na něm záleží pro konverze. Shopify o sobě tvrdí, že infrastrukturu řeší samo: globální hosting, CDN, cache, kompresi, minifikaci CSS a JavaScriptu i automatickou optimalizaci obrázků. Zbytek výkonu ovlivňuje značka svými rozhodnutími, tedy šablonou, aplikacemi a kódem třetích stran.

    Článek pracuje s Core Web Vitals. LCP (rychlost načtení hlavního obsahu) má cíl do 2,5 s, INP (odezva na interakci) do 200 ms a CLS (vizuální stabilita) do 0,1. Hodnotí se 75. percentil reálných návštěvníků a výsledek spadá do kategorií Dobré, Mírné nebo Špatné. Podle dat citovaných v článku jsou pro tržby nejdůležitější LCP a INP. Uváděné statistiky (každých 100 ms zpoždění znamená pokles konverzí o 3,5 %, LCP 2,5 s odpovídá zhruba o 30 % nižší konverzi než LCP 1,5 s, případová studie Molekule) pocházejí od Shopify a nejsou nezávisle ověřené. Článek je navíc označen rokem 2026 i 2027.

    Praktická část doporučuje začít v Analytice přehledem výkonu webu: nejdřív vývoj v čase, potom typ stránky a nakonec konkrétní URL. Nejčastější příčiny zpomalení jsou aplikace a skripty třetích stran, nekomprimované obrázky a videa, příliš mnoho sekcí na stránce a velké kolekce bez stránkování. Doporučené kroky: odstranit nepoužívané aplikace včetně zbytků kódu v šabloně, vyčistit tag manager, zmenšit obrázky, zjednodušit layout a ověřit opravy v PageSpeed Insights. Audit se vyplatí před hlavní sezónou, po redesignu nebo při nevysvětlitelném poklesu tržeb.
  zdroje:
    - title: "Shopify: Audit rychlosti e-shopu na Shopify: Proč zrychlení přináší konverze?"
      url: "https://www.shopify.com/cz/blog/audit-rychlosti-eshopu"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify na svém českém blogu shrnuje, jak auditovat rychlost obchodu a jak z výsledků odvodit konkrétní kroky. Výchozím bodem jsou přehledy výkonu webu v administraci (souhrn v sekci Šablony, podrobnosti v Analytice) a metriky Core Web Vitals: LCP do 2,5 s, INP do 200 ms a CLS do 0,1, vždy podle 75. percentilu reálných návštěvníků. Článek zdůrazňuje, že platforma sama řeší hosting, CDN, kompresi a optimalizaci obrázků, takže hlavní prostor pro zlepšení leží v šabloně, aplikacích a skriptech třetích stran.

Konkrétní doporučení jsou nenáročná a nevyžadují přestavbu: odinstalovat nepoužívané aplikace a uklidit jejich zbytky v kódu šablony, zredukovat skripty třetích stran a tag manager, zmenšit obrázky, omezit počet sekcí a stránkovat velké kolekce. Čísla o dopadu na konverze a případová studie pocházejí od Shopify a jsou marketingového charakteru, proto je berte jako orientační.

## Pro koho je to relevantní

Jde o informativní článek bez dopadu na API nebo integrace, takže nalehavost je nízká. Je užitečný pro projektové manažery, vývojáře šablon a konzultanty, kteří připravují audit klientského obchodu, zejména před hlavní prodejní sezónou nebo po redesignu. U našich projektů se nejčastěji vyplatí zkontrolovat, kolik kódu přidávají nainstalované aplikace a skripty třetích stran, protože právě ty článek uvádí jako hlavní příčinu zpomalení. Souvisí také s architektonickými rozhodnutími u větších obchodů, například s vyhledáváním a volbou API.
