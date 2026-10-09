---
date: 2026-10-06
title: "7 taktik pro e-shopy — jak na různé druhy slev v 2027"
slug: blog-druhy-slev-7-taktik-eshop-2027
zdroj: https://www.shopify.com/cz/blog/druhy-slev
shrnuto_dne: 2026-10-08
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o strategický přehled pro merchanty, ne o změnu API. Popisované mechaniky (Buy X Get Y, automatic discounts, slevové kódy, kombinace slev) ale odpovídají objektům, které při práci s objednávkami a slevami běžně čteme a reportujeme."
dotcene_klienty: []
souvisejici: [rollouts-discounts-schedule-and-test, multiple-product-discounts-same-item, blog-b2b-cenotvorba]
tldr: "Shopify CZ blog shrnuje sedm slevových taktik (BOGO, dárek k nákupu, sleva na první objednávku, odstupňované slevy, personalizované slevy, flash sale, VIP early access) a čtyři pojistky marže; klíčová rada zní nejdřív určit cíl a teprve pak vybrat mechaniku."
tagy: [discounts, promotions, pricing, strategies, ecommerce, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Slevy patří k nejrychlejším nástrojům, jak zvýšit konverzi, ale zároveň nejsnáze poškodí marži i vnímání značky. Článek na českém blogu Shopify z 6. října 2026 (zhruba 21 minut čtení) proto na úvod staví příklad britské kosmetické značky Doll Beauty, která na jaře 2026 oznámila odchod z TikTok Shop, protože platforma vyžadovala neustálé snižování cen a oslabovala tím značku budovanou roky. Autoři zároveň uvádějí data Salsify (Q2 2025), podle nichž 62 % spotřebitelů označilo časově omezené slevy za hlavní důvod dokončení nákupu. Slevová strategie je v textu definována jako rámec, který určuje, kdy, komu a za jakým účelem se cena snižuje, a zároveň jako diagnostický nástroj, který ukazuje chování zákazníků.

    Sedm popsaných taktik pokrývá celé spektrum od jednoduchých po segmentované. BOGO (1+1) využívá takzvaný zero-price efekt, ale nebuduje dlouhodobý vztah, takže se hodí na velké objemy, výprodej starých zásob nebo uvedení nového produktu. Dárek k nákupu (free gift with purchase) zvyšuje vnímanou hodnotu bez snížení ceny, ale musí odpovídat fázi vztahu zákazníka se značkou. Sleva na první objednávku řeší propast mezi konverzí nových návštěvníků (kolem 1–2 %) a vracejících se zákazníků (kolem 4,5–6 %); článek ale upozorňuje, že plošná sleva 50 % zvedla zisk na návštěvníka jen o 13,6 %, zatímco přesnější cenová úprava na úrovni produktů o 54,7 %. Odstupňované slevy podle útraty fungují nejlépe, když první práh leží zhruba 10–20 % nad průměrnou hodnotou objednávky (AOV), jinak vzniká slevová mrtvá zóna. Personalizované slevy cílí na segmenty podle chování a očekávané hodnoty zákazníka, flash sale spoléhá na urgenci a FOMO v okně 24–72 hodin a VIP early access chrání plnou marži před přeprodejem a posiluje loajální zákazníky.

    Praktická část srovnává slevové kódy (kontrola, atribuce kampaní a influencerů, ale tření při checkoutu) s automatickými slevami (bez kódu, vhodné na tiery, BOGO a free-shipping prahy, ale slabší atribuce), popisuje pravidla kombinování a nabízí čtyři pojistky marže: prahy nad průměrem nebo mediánem objednávky, omezení použití, doby trvání a způsobilých produktů, testování hloubky slevy před opakováním a upřednostnění dárků a bundlů před procentuálními slevami. Doplňují ji doporučení, co zlevňovat (ABC analýza zásob v Shopify Analytics), jak dlouho kampaň držet (týden pro tématické akce, 48 hodin pro launche) a jak prezentovat slevu (Rule of 100: procenta pro ceny pod 100 USD, absolutní částky nad ní).
  zdroje:
    - title: "Shopify: 7 taktik pro e-shopy — jak na různé druhy slev v 2027"
      url: "https://www.shopify.com/cz/blog/druhy-slev"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Článek je rozsáhlý praktický průvodce slevovými strategiemi pro e-shopy, postavený na tezi, že sleva má fungovat jako cílený nástroj, ne jako reflex. Začíná u cíle (získat nové zákazníky, vyprodat zásoby, odměnit loajální nebo reaktivovat uspané) a teprve k němu přiřazuje mechaniku. Nové zákazníky mají přivést slevy na první objednávku, ale jen tehdy, když je konverze nových návštěvníků dvakrát až třikrát nižší než u vracejících se a poměr CLV:CAC je nad zhruba 3:1. Zásoby se podle autorů mají čistit cílenými bundly, nikoli plošnou slevou, pokud je problém soustředěný na konkrétní produkty. Loajalitu a reaktivaci řeší segmentované slevy, u nichž je potřeba mít dost dat o tom, co dané zákazníky motivuje. Zmíněná data Gorgias uvádějí, že opakovaní zákazníci tvoří zhruba pětinu databáze, ale generují přes 40 % tržeb.

Z implementačního pohledu se článek opírá o nativní funkce Shopify: Buy X Get Y pro BOGO a základní dárky (sleva 100 % na dárkový produkt), jednorázové kódy na zákazníka pro první objednávku, B2B katalogy pro objemové ceny, nativní automatické slevy cílené na zákaznické segmenty a Launchpad pro plánování flash sales včetně automatického návratu stavu e-shopu. Pokročilé scénáře, jako jsou vícestupňové dárky nebo automatické přidání do košíku, vyžadují aplikaci nebo vlastní logiku přes Shopify Functions. U kombinování slev připomíná, že slevy na dopravu lze kombinovat se slevami na produkt či objednávku, ale na objednávku se uplatní jen jedna sleva na dopravu, a že u dvou produktových slev na stejnou položku se použije ta větší. Zmiňuje také limity: u automatických slev až 25 aktivních najednou, u kódů až 100 zákaznických segmentů na jeden kód.

Nejcennější část tvoří čtyři pojistky marže a doplňující úvahy. Práh pro dopravu zdarma nebo tier by měl ležet nad průměrnou či mediánovou hodnotou objednávky, aby se neslevňovaly nákupy, které by proběhly i bez slevy. Použití je dobré limitovat počtem kódů, dobou, kolekcemi a unikátními kódy pro příjemce. Hloubku slevy je třeba testovat: v uvedeném testu Intelligems nižší plochá cena 39,99 USD bez objemové slevy zdvojnásobila konverzi i tržby na návštěvníka oproti ceně 49,99 USD s objemovou slevou. Dárky a bundly často fungují lépe než procenta, což ilustruje případ Who Is Elijah s nárůstem AOV o 46 %. Dále článek radí zlevňovat vybrané kolekce místo celého katalogu (paradox of choice), vybírat položky podle ABC analýzy v Analytics a držet kratší okna, aby se zákazníci nenaučili čekat na další akci.

## Pro koho je to relevantní

Text je určený především merchantům a e-commerce manažerům, kteří plánují slevové kampaně na přelomu let 2026 a 2027, včetně sezóny Black Friday a Vánoc. Hodí se jako argumentační podklad při konzultacích o promo strategii: pomůže vysvětlit, proč plošná procentuální sleva často není nejlepší volba, jak nastavit prahy a kombinace slev a kdy sáhnout po kódech místo automatických slev (a naopak). Pro nás jde o čistě informativní materiál bez API dopadu, ale s praktickými vazbami na slevové objekty, které řešíme při práci s objednávkami a reportingem, například atribuce přes kódy versus automatické slevy a pravidla kombinování. Na související novinky o plánování a testování slev v Rollouts a o kombinování více produktových slev na jedné položce navazují samostatné články v archivu.
