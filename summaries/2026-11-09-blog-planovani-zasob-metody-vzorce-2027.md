---
date: 2026-11-09
title: "Plánování zásob: metody, vzorce i nástroje (2027)"
slug: blog-planovani-zasob-metody-vzorce-2027
zdroj: https://www.shopify.com/cz/blog/planovani-zasob
shrnuto_dne: 2026-11-11
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Plánování zásob stojí nad daty o skladových stavech a prodejích, která naše synchronizace přenáší, takže jde o užitečný kontext pro konverzaci s obchodníky."
dotcene_klienty: []
souvisejici: [stock-counts-shopify-admin, blog-kategorie-produktu-zasoby-2026, editions-fall-2026-fulfillment]
tldr: "Shopify blog shrnuje metody plánování zásob (časové řady, kauzální, kvalitativní) a základní vzorce pro pojistnou zásobu a bod doobjednání, plus přehled nástrojů od aplikací po ERP."
tagy: [inventory-planning, demand-forecasting, zasoby, metriky, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Plánování zásob předpovídá budoucí poptávku z historických prodejů, sezonnosti, tržních podmínek a nákladů na dodávky. Cílem je mít zboží k dispozici včas a nevázat kapitál v přebytcích. Článek odlišuje plánování (odhad poptávky) od doplňování zásob (konkrétní nákupní objednávky a rozdělení zboží mezi sklady).

    Z metod popisuje plánování trendů, grafické, kvalitativní, kvantitativní (časové řady jako klouzavé průměry, exponenciální vyrovnávání a lineární regrese, nebo plánování řízené poptávkou) a kauzální, které hledá příčiny poptávky, například slevy, reklamu, svátky nebo počasí. U většiny firem je podle článku nejpřesnější kombinace kvantitativních a kvalitativních přístupů.

    Vzorce jsou jednoduché. Průměrné denní prodeje jsou roční prodeje děleno 365, poptávka během dodací lhůty je dodací lhůta ve dnech krát denní prodeje, pojistná zásoba je maximální denní prodej krát maximální dodací lhůta minus poptávka během lhůty (příklad 10 × 15 − 50 = 100 ks) a bod doobjednání je poptávka během lhůty plus pojistná zásoba (150 ks). Pojem EOQ se zmiňuje jen slovně bez vzorce, ABC analýza v článku není. Stocky ani Cin7 se v textu neobjevují.
  zdroje:
    - title: "Shopify: Plánování zásob: metody, vzorce i nástroje (2027)"
      url: "https://www.shopify.com/cz/blog/planovani-zasob"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Obecný edukační článek na Shopify blogu o tom, jak plánovat zásoby. Rozlišuje plánování a doplňování, přehledně shrnuje kvantitativní, kvalitativní a kauzální metody a uvádí čtyři základní vzorce (denní prodeje, poptávka v dodací lhůtě, pojistná zásoba, bod doobjednání) s číselným příkladem. Z nástrojů zmiňuje aplikace v Shopify, syncX, Inventory Planner by Sage a Prediko pro menší obchody, ERP typu NetSuite pro větší firmy, Shopify POS pro sjednocení prodejny a skladu a AI asistenta Sidekick. Praktická doporučení: porovnávat srovnatelná období, odfiltrovat vliv slev, segmentovat katalog a revidovat prognózu aspoň jednou za čtvrtletí a před sezonou.

## Pro koho je to relevantní

Pro obchodníky, kteří chtějí do řízení zásob vnést strukturu, a pro konzultanty, kteří jim to vysvětlují. Pro vývoj žádná změna API ani chování platformy nevyplývá. Nepřímo je užitečné jako kontext: bod doobjednání a pojistná zásoba závisejí na přesných skladových stavech a skutečných dodacích lhůtách, tedy na datech, která přenášejí integrace s ERP a WMS. Související novinky o inventurách a skladových přesunech jsou v odkazovaných položkách.
