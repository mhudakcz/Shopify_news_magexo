---
date: 2026-10-12
title: "Co je GMV — definice a jak na výpočet (2027)"
slug: blog-co-je-gmv-vypocet-2027
zdroj: https://www.shopify.com/cz/blog/gmv
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čistě edukativní článek o metrice GMV bez dopadu na API; relevantní jen jako podklad pro reporting a pro merchanty provozující marketplace nebo multi-vendor model."
dotcene_klienty: []
souvisejici: [blog-ecommerce-metriky, set-track-targets-shopify-analytics, blog-stockx-jak-prodavat]
tldr: "Shopify CZ blog vysvětluje metriku GMV (hrubá hodnota prodaného zboží před slevami, vratkami a dopravou), její výpočet, rozdíl oproti tržbám u marketplace i DTC značek a šest tipů, jak GMV zvyšovat."
tagy: [gmv, gross-merchandise-value, metrics, finance, marketplace, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    GMV (Gross Merchandise Value, hrubá hodnota zboží) je celková peněžní hodnota zboží prodaného za dané období, měřená před odečtením slev, vratek a nákladů na dopravu. Je to ukazatel objemu prodejů, nikoli ziskovosti. Vzorec je jednoduchý: prodejní cena položky krát počet prodaných kusů, u více produktů se součty sčítají. Příklad z článku: 200 náhrdelníků po 1 000 Kč a 150 náramků po 500 Kč dávají dohromady GMV 275 000 Kč.

    Klíčový je rozdíl mezi GMV a tržbami (revenue). U DTC značek, které prodávají vlastní zboží, jsou obě hodnoty podobné, ale nikdy zcela shodné, protože tržby se uvádějí až po vratkách a slevách. U marketplace je rozdíl zásadní: GMV zahrnuje celou hodnotu nákupů provedených přes platformu, zatímco tržby platformy tvoří jen provize nebo podíl z prodeje. Dvě firmy se stejným GMV 1 mil. Kč tak mohou mít velmi odlišné tržby a odlišnou ekonomiku. Článek také uvádí, že investoři GMV sledují jako signál poptávky a stability prodejů; samostatné téma oceňování marketplace firem ale výslovně nerozebírá.

    Zmíněna jsou i omezení metriky: GMV neříká nic o marži, definice se mezi firmami liší (zahrnutí dopravy, daní, vratek), obchodní model zkresluje srovnání a GMV může růst i při klesajícím počtu aktivních či opakovaných zákazníků. Proto článek doporučuje číst GMV spolu s tržbami, mírou konverze, CAC, AOV a ziskovou marží. Na konci uvádí šest tipů na růst GMV: doprava zdarma nad prahem, upselling a cross-selling, produktové balíčky (Shopify Bundles), uvážlivé slevy, jednodušší checkout (včetně Shop Pay) a prodej do zahraničí přes Shopify Markets. Průzkum Shopify z listopadu 2025 podle článku ukázal, že 77 % obchodníků sleduje prodeje či tržby, ale méně než polovina sleduje marži, AOV nebo konverzi.
  zdroje:
    - title: "Shopify: Co je GMV — definice a jak na výpočet (2027)"
      url: "https://www.shopify.com/cz/blog/gmv"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify CZ blog v edukativním článku vysvětluje, co znamená GMV (Gross Merchandise Value), jak se počítá a proč se nerovná tržbám. GMV je hrubý objem prodaného zboží za období před odečtením slev, vratek a dopravy. Slouží jako rychlý přehled o tom, kolik zboží obchod nebo platforma prodala, ale o ziskovosti nevypovídá nic. Článek ukazuje základní vzorec (cena krát počet kusů) na konkrétním příkladu a rozlišuje dva světy: u DTC značek jsou GMV a tržby blízké, u marketplace je GMV celý objem transakcí a tržby jsou jen provize platformy.

Druhá část textu se věnuje praktickému použití. GMV pomáhá sledovat trendy a sezónnost, ladit cenovou strategii a komunikovat s investory, ale má omezení (nejednotné definice, zkreslení obchodním modelem, slepota vůči marži a retenci). Článek proto doporučuje kombinovat ho s tržbami, konverzí, CAC, AOV a ziskovou marží, a uzavírá šesti tipy na zvýšení GMV: práh pro dopravu zdarma, upselling a cross-selling, balíčky přes Shopify Bundles, uvážlivé slevy, jednodušší objednávka a expanze přes Shopify Markets.

Pozn. ke kontextu valuace: investoři v textu figurují jako uživatelé metriky pro posouzení poptávky a stability prodejů, ale samotné oceňování marketplace businessů článek neodvozuje. Takové použití je obecná praxe, nikoli obsah tohoto textu.

## Pro koho je to relevantní

Článek je obecný a čistě informační, bez jakékoli změny v Shopify platformě, API nebo adminu, proto nalehavost nízká a kategorie fyi. Nejvíc užitku z něj mají merchanti a product owneři na straně obchodníka, kteří řeší reporting a KPI, a týmy, které připravují dashboardy nebo exporty z Shopify Analytics či ShopifyQL a potřebují jednotnou definici toho, co se do GMV počítá a co ne.

Specificky se hodí pro obchodníky provozující marketplace nebo multi-vendor model (například přes Shopify Collective nebo vlastní řešení s více prodejci), kde je rozdíl mezi GMV a tržbami platformy zásadní a kde je nutné předem určit, zda se do GMV počítá doprava, daně a vratky. Pro čistě DTC e-shopy je praktičtější sledovat čisté tržby a marži a GMV brát jako doplňkovou metriku. Související čtení: přehled 20 klíčových ecommerce metrik a nastavení cílů v Shopify Analytics.
