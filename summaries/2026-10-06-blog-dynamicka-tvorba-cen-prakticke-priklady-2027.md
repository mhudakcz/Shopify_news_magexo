---
date: 2026-10-06
title: "Dynamická tvorba cen — jak funguje a praktické příklady (2027)"
slug: blog-dynamicka-tvorba-cen-prakticke-priklady-2027
zdroj: https://www.shopify.com/cz/blog/dynamicka-tvorba-cen
shrnuto_dne: 2026-10-08
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Článek zmiňuje Shopify Functions a aplikace pro automatické přeceňování, takže může sloužit jako podklad při konzultacích o cenových pravidlech, ale nemění žádné API ani chování platformy."
dotcene_klienty: []
souvisejici: [blog-b2b-cenotvorba, shopify-smart-pricing-app, blog-jak-stanovit-cenu-produktu-kalkulacka]
tldr: "Shopify blog vysvětluje dynamickou tvorbu cen (spouštěče, typy, rizika včetně důvěry zákazníků a právního rámce v EU) a popisuje čtyřkrokový postup zavedení na Shopify od cenového dna a stropu až po sledování metrik."
tagy: [dynamic-pricing, pricing, strategy, ai, demand-based, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Dynamická tvorba cen znamená průběžnou úpravu prodejní ceny podle tržních signálů, jako jsou poptávka, stav zásob, ceny konkurence nebo čas. Článek ji odlišuje od pevných cen (všichni vidí stále stejnou cenu), od variabilních cen (změny podle předem daného harmonogramu) a od personalizovaných cen (různí zákazníci vidí ve stejný okamžik různé ceny podle své historie, polohy nebo zařízení). Dynamické ceny platí pro všechny stejně, mění se ale s podmínkami na trhu. Typickými příklady jsou letecké společnosti, hotely, sdílené jízdy typu Uber a Bolt nebo prodejci vstupenek.

    Systém funguje na dvou principech: buď reaguje v reálném čase během minut či hodin, nebo uplatňuje plánovaná pravidla se spouštěči, například vyšší sazby o víkendu nebo slevu u zásob, které se dlouho neprodávají. Článek uvádí šest typů (podle času, poptávky, zásob, geografické, podle segmentu a množstevní) a čtyři běžné spouštěče: poptávku, zásoby, konkurenci a načasování. Na straně e-commerce zmiňuje například použití aplikace Prisync pro Shopify při nákupních svátcích a elektronické regálové štítky v kamenném maloobchodu. K elasticitě poptávky uvádí vzorec procentní změna množství dělená procentní změnou ceny.

    Zásadní část se věnuje rizikům. Článek cituje průzkumy, podle kterých roste frustrace zákazníků z proměnlivých cen a velká část spotřebitelů by přestala nakupovat u značky, která by jim na základě jejich dat účtovala více. Jako varovný příklad uvádí Instacart, který po vyšetřování ukončil cenovou strategii řízenou umělou inteligencí. Z právního hlediska článek uvádí, že dynamické oceňování je v EU obecně legální, pokud je transparentní a nevede ke klamání, a připomíná GDPR včetně pravidel pro profilování a povinnost uvádět při oznámení slevy nejnižší cenu za posledních 30 dnů. Doporučený postup zavedení na Shopify má čtyři kroky: nastavit cenové dno, strop a výjimky, vybrat 2 až 3 datové vstupy a frekvenci aktualizací, využít Shopify Functions pro pravidla na úrovni pokladny a průběžně sledovat konverzi, marži, obrátku zásob, elasticitu a AOV.
  zdroje:
    - title: "Shopify: Dynamická tvorba cen — jak funguje a praktické příklady (2027)"
      url: "https://www.shopify.com/cz/blog/dynamicka-tvorba-cen"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Jde o edukativní blogový příspěvek, který vysvětluje, co je dynamická tvorba cen, jak funguje a jak ji prakticky zavést v e-shopu na Shopify. Základní myšlenkou je, že cena není pevná hodnota, ale reaguje na data: historické prodeje, návštěvnost, stav skladu, ceny konkurence, denní dobu, sezonu nebo místní události. Článek rozlišuje čtyři spouštěče (poptávka, zásoby, konkurence, načasování) a šest typů dynamického oceňování od časového přes geografické až po množstevní. Z praktických příkladů zmiňuje Prisync pro automatické sledování konkurence a přeceňování katalogu, studentské slevy značek jako Gymshark nebo Allbirds jako formu segmentového oceňování a lokalizované ceny pro zahraniční zákazníky přes Managed Markets.

Praktická část navrhuje čtyři kroky. Nejprve definovat mantinely: cenové dno (náklady plus minimální marže), cenový strop a výjimky pro vlajkové produkty. Pak vybrat jen 2 až 3 spouštěče a frekvenci aktualizací podle tempa trhu. Třetím krokem je použití Shopify Functions pro pravidla ceny nebo slevy v košíku bez zásahu do šablony. Nakonec sledovat metriky: konverzní poměr a obrátku zásob týdně, hrubou marži a AOV měsíčně a elasticitu podle položky čtvrtletně. Pro menší obchody článek doporučuje začít jednoduchým pravidlem, například slevou u zboží, které se 7 dní neprodalo.

Významnou část tvoří rizika. Článek upozorňuje na ztrátu důvěry zákazníků a vnímání nespravedlnosti, na obavy z personalizovaných cen a na provozní složitost včetně chybějící integrace dat v marketingových týmech. Právní rámec shrnuje tak, že v EU je dynamické oceňování obecně legální při dodržení transparentnosti, přičemž je potřeba hlídat informování o automatizovaném rozhodování u smluv na dálku, GDPR a pravidlo nejnižší ceny za posledních 30 dnů při oznámení slevy. Část uvedených čísel pochází z průzkumů a tvrzení třetích stran, takže je vhodné brát je jako orientační, ne jako ověřená fakta.

## Pro koho je to relevantní

Pro MageXo jde o referenční materiál, ne o akční položku. Nemění se žádné API, chování checkoutu ani datový model cen. Hodí se hlavně pro konzultace s klienty, kteří uvažují o automatizaci cen nebo o reakci na ceny konkurence, a pro vysvětlení, proč začít malým počtem pravidel s pevným cenovým dnem a stropem a nenasazovat složité algoritmy hned.

Pro vývojáře je zajímavé jen to, že článek jako technický prostředek pro pravidla v košíku uvádí Shopify Functions, případně externí nástroje typu Prisync pro sledování konkurence. Pokud klient bude chtít cenovou logiku nad rámec nativních funkcí, bude potřeba posoudit, zda stačí slevová pravidla v pokladně, nebo je nutná změna základní ceny produktu přes Admin API.

Pro PM a PO je důležité hlídat dvě věci. Za prvé právní rámec: u českých a evropských e-shopů je kritická transparentnost, ochrana osobních údajů a správné uvádění původní ceny při slevách, a pokud by se cena personalizovala podle zákazníka, vyžaduje to samostatné posouzení. Za druhé reputační riziko: příliš agresivní zdražování ve špičce může poškodit důvěru a loajalitu zákazníků, proto je dobré mít vždy definované výjimky a jasnou komunikaci. Související kontext najdete v přehledech o B2B cenotvorbě, nativní aplikaci Shopify Smart Pricing a základním stanovení ceny produktu.
