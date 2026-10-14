---
date: 2026-10-11
title: "RFM analýza — průvodce definicí a segmentací zákazníků"
slug: blog-rfm-analyza-segmentace-zakazniku
zdroj: https://www.shopify.com/cz/blog/rfm-analyza
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přehledový merchant-facing článek o RFM segmentaci a zabudovaném RFM reportu v Shopify analytice; užitečný podklad při konzultacích o zákaznických segmentech, retenci a cílených e-mailových kampaních, bez dopadu na API nebo naše synchronizace."
dotcene_klienty: []
souvisejici: [blog-personalizace-eshopu-zakaznicky-zazitek-2027, shopifyql-matches-customer-behavior, segment-query-function-syntax-updated]
tldr: "Shopify blog vysvětluje RFM analýzu (Recency, Frequency, Monetary): zákazníky hodnotí na škále 1 až 5 podle toho, jak nedávno, jak často a za kolik nakoupili, a z toho odvozuje segmenty pro cílené kampaně, retenci a efektivnější marketingové výdaje; Shopify má RFM zabudované v reportech zákazníků."
tagy: [rfm, segmentation, customer-analytics, retention, marketing]
zdroj_kanal: blog
kontext:
  background: |
    RFM je klasická metoda zákaznické analytiky, která hodnotí chování zákazníků ve třech rozměrech: recency (jak dávno zákazník naposledy nakoupil), frequency (jak často nakupuje) a monetary (kolik celkově utratil). Každému rozměru se přiřadí skóre na škále 1 až 5, kde 5 je nejlepší hodnota, a hranice jednotlivých stupňů si může obchodník upravit podle svého modelu. Výsledná tři čísla se dají číst samostatně, sečíst (rozsah 3 až 15) nebo zprůměrovat (rozsah 1 až 5). Cílem je přestat oslovovat všechny stejně a místo toho přizpůsobit komunikaci skupinám, které se chovají podobně.

    Článek uvádí několik příkladů segmentů a doporučených strategií. Zákazníci s vysokým skóre ve všech třech rozměrech jsou nejvěrnější a hodí se pro VIP akce a exkluzivní uvedení produktů. Zákazníci s vysokou útratou, ale nižší aktuálností a frekvencí reagují na prémiové produkty a komunikaci zaměřenou na luxus. Zákazníci s vysokou aktuálností a střední frekvencí či útratou mají rostoucí zájem, takže dává smysl vzdělávací obsah a přednostní přístup k novým kolekcím. Zákazníci s klesající aktuálností, ale dříve vysokou frekvencí a útratou jsou ohroženi odchodem a potřebují kampaň na znovuzapojení. Samotný systém Shopify používá pojmenování jako šampioni nebo spící zákazníci. Doporučuje se sledovat každý rozměr zvlášť (například klesající frekvence u dříve silného zákazníka je včasné varování) a skóre přepočítávat zhruba podle nákupního cyklu, tedy měsíčně u častých nákupů nebo čtvrtletně u pomalejších.

    Praktický postup má pět kroků: zvolit nástroj s vestavěnou RFM analýzou (ruční výpočet je u tisíců zákazníků nepraktický), nastavit segmenty automaticky nebo vlastní definicí publik, spárovat každý segment s vhodnou kampaní, sledovat výkon (opakované nákupy, průměrná hodnota objednávky, customer lifetime value) a porovnávat výsledky napříč segmenty. Využití je popsáno v e-mailových a marketingových kampaních (VIP předprodeje, nabídky předplatného, doplňková doporučení), v retenci (e-mail se slevou při poklesu aktuálnosti, krátká SMS při poklesu frekvence, zásah zákaznického servisu při výrazném poklesu útraty) a v efektivitě výdajů (cílení na 2 000 nejcennějších zákazníků místo plošných 10 000 kontaktů a nižší náklady na získání zákazníka díky práci se stávající základnou). Shopify nabízí RFM přímo v reportech zákazníků, kde se zákazníci automaticky hodnotí na škále 1 až 5 a zařazují do skupin, a u každého segmentu ukazuje konverzi, průměrný počet dní od poslední objednávky, objem nákupů a útratu. Doplňují to předpřipravené analytické dashboardy a segmenty zákazníků pro cílené kampaně. Věrnostní programy jsou v textu zmíněny jen okrajově, bez vlastní kapitoly.
  zdroje:
    - title: "Shopify: RFM analýza — průvodce definicí a segmentací zákazníků"
      url: "https://www.shopify.com/cz/blog/rfm-analyza"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify CZ blog z 11. října 2026 představuje RFM analýzu jako jednoduchý způsob, jak segmentovat zákazníky podle nákupního chování. Metoda hodnotí tři rozměry: recency (jak nedávno zákazník nakoupil), frequency (jak často nakupuje) a monetary (kolik utratil). Každý rozměr dostane skóre 1 až 5, výsledek lze číst po jednotlivých osách, jako součet (3 až 15) nebo průměr (1 až 5). Ukázkový výpočet v textu: skóre 4, 3 a 5 dává průměr 4.

Z kombinací skóre vznikají segmenty, ke kterým článek přiřazuje doporučený obsah komunikace: nejvěrnější zákazníky pozvat na VIP akce a exkluzivní uvedení produktů, zákazníky s vysokou útratou oslovit prémiovými produkty, rostoucí zákazníky podpořit vzdělávacím obsahem a přednostním přístupem ke kolekcím a ohrožené zákazníky s klesající aktuálností vrátit cílenou kampaní. V retenci text navrhuje reagovat podle toho, která osa klesá: e-mail se slevou při poklesu aktuálnosti, SMS o novinkách při poklesu frekvence a zásah zákaznického servisu při výrazném poklesu útraty. Z hlediska výdajů zdůrazňuje cílení na menší skupinu nejcennějších zákazníků místo plošného rozesílání a s tím související nižší náklady na získání zákazníka.

Shopify má RFM zabudované v reportech zákazníků, kde zákazníky automaticky hodnotí na škále 1 až 5 a řadí do skupin (používá například označení šampioni a spící zákazníci). U každého segmentu report ukazuje konverzi, průměrný počet dní od poslední objednávky, objem nákupů a útratu. Článek doporučuje skóre přepočítávat zhruba podle nákupního cyklu, měsíčně u častých nákupů a čtvrtletně u pomalejších, a výkon segmentů sledovat přes opakované nákupy, průměrnou hodnotu objednávky a customer lifetime value. Věrnostní programy jsou zmíněny jen okrajově a články o loyalty programech tu čekat nelze. Jde o marketingově laděný přehled určený obchodníkům, bez technického rozboru a bez nových API nebo funkcí platformy.

## Pro koho je to relevantní

Pro merchanty a jejich marketingové týmy, kteří řeší retenci, opakované nákupy a efektivnější využití rozpočtu na e-mail a SMS kampaně a hledají srozumitelný způsob, jak rozdělit zákaznickou základnu. Pro nás je článek užitečný jako orientační podklad při konzultacích o zákaznických segmentech, automatizacích ve Shopify Flow a cílení kampaní, případně jako argument, proč využít nativní RFM report místo ruční analýzy v tabulkách. Technicky na něj navazují segmenty definované přes segment query language a analytické dotazy v ShopifyQL, ke kterým máme samostatné shrnutí. Nejde o změnu v platformě ani API, takže nevyžaduje žádnou akci ani technický zásah, jen jako orientační čtení.
