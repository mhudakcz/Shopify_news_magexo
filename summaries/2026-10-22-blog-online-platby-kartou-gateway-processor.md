---
date: 2026-10-22
title: "On-line platby kartou: platební brána vs. zpracovatel plateb"
slug: blog-online-platby-kartou-gateway-processor
zdroj: https://www.shopify.com/cz/blog/online-platby-kartou
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čistě edukační článek bez API dopadu. Dává se využít jako reference při diskusi o volbě platebního řešení, protože od výběru brány a zpracovatele se odvíjí payment gateway a metoda, které čteme z objednávek pro reporting a párování plateb."
dotcene_klienty: []
souvisejici: [blog-platba-kartou, blog-prijimani-plateb-online, blog-integrace-platebni-brany]
tldr: "Shopify Blog CZ vysvětluje, že on-line platba kartou potřebuje dvě části: platební bránu (virtuální terminál, který bezpečně sbírá údaje) a zpracovatele plateb (prostředník mezi bankou obchodníka a bankou zákazníka). Shopify Payments obě role spojuje do jednoho nástroje bez samostatného obchodního účtu."
tagy: [payments, platebni-brana, processor, shopify-payments, cz]
zdroj_kanal: blog
kontext:
  background: |
    Článek stojí na přirovnání k odeslání balíčku. Zpracovatel plateb (payment processor) je jako distribuční síť přepravní společnosti, která zásilku skutečně doveze, a platební brána (payment gateway) je jako schránka, do které se zásilka vhodí. Pro on-line platbu kartou jsou potřeba obě části a obchodník se bez nich neobejde, pokud chce přijímat karty na internetu. Na jedné transakci se přitom podílí nejméně pět stran: obchodník, zákazník, banka obchodníka (acquirer), banka zákazníka (issuer) a zpracovatel plateb.

    Zpracovatel je prostředník mezi bankou obchodníka a bankou zákazníka. Předá údaje o transakci kartové síti a bance zákazníka, ta platbu schválí nebo zamítne, zpracovatel o výsledku informuje banku obchodníka a buď připíše peníze, nebo oznámí zamítnutí všem zúčastněným. Brána je naproti tomu virtuální terminál, tedy on-line obdoba fyzického platebního terminálu v kamenném obchodě. Bezpečně sbírá platební údaje zákazníka (typicky přes SSL šifrování) a předává je zpracovateli. Mezi výhody brány Shopify řadí efektivitu (platby bez fyzické karty, propojení s účetním softwarem, automatický záznam prodejů), bezpečnost a možnost nabídnout více platebních metod a typů karet, což může snížit opouštění košíku.

    Shopify Payments podle článku spojuje funkce brány i zpracovatele do jednoho nástroje integrovaného v pokladně, takže obchodník nepotřebuje samostatného externího poskytovatele ani obchodní účet. U objednávek zpracovaných přes Shopify Payments, Shop Pay, Shop Pay Installments a PayPal Express se podle článku neúčtují externí transakční poplatky. Článek nezmiňuje GoPay, ComGate, Stripe ani PayU, nezabývá se PCI DSS ani 3D Secure a neuvádí konkrétní výši poplatků. Pro české obchodníky je proto důležité doplnit kontext z jiných zdrojů. Lokální poskytovatelé jako GoPay nebo ComGate obvykle nabízejí bránu spolu s akvizicí a bankovními tlačítky, která jsou na českém trhu rozšířená. Stripe a PayU fungují obdobně jako celková platformní řešení. Dostupnost Shopify Payments pro konkrétní zemi obchodu je nutné ověřit v administraci. Starší shrnutí v našem archivu uvádějí, že pro ČR nativní řešení dostupné nebylo, zatímco novější zmínky o Klarně přes Shopify Payments v ČR naznačují posun, takže spoléhat na jedno z toho bez kontroly nelze.
  zdroje:
    - title: "Shopify: On-line platby kartou: platební brána vs. zpracovatel plateb"
      url: "https://www.shopify.com/cz/blog/online-platby-kartou"
    - title: "Shopify: Jak funguje platba kartou?"
      url: "https://www.shopify.com/cz/blog/jak-funguje-platba-kartou"
    - title: "Shopify: Přijímání plateb on-line"
      url: "https://www.shopify.com/cz/blog/prijimani-plateb-online"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je
Edukativní blogový článek na Shopify.com/cz, který vysvětluje rozdíl mezi platební bránou (payment gateway) a zpracovatelem plateb (payment processor). Používá přirovnání k balíčku: zpracovatel je distribuční síť, brána je schránka, a pro platbu kartou on-line jsou potřeba obě části. Zpracovatel působí jako prostředník mezi bankou obchodníka a bankou zákazníka, předává transakci kartové síti a po schválení nebo zamítnutí informuje banku obchodníka. Brána je virtuální platební terminál, který bezpečně sbírá údaje o kartě a předává je zpracovateli.

Tok platby má pět kroků. Zákazník zadá údaje na bráně, brána je ověří a bezpečně předá zpracovateli, ten transakci pošle kartové síti a bance zákazníka, banka platbu schválí nebo zamítne a zpracovatel o výsledku informuje banku obchodníka. Z toho vyplývá, že na jedné platbě se podílí nejméně pět stran. Článek dále uvádí, že Shopify Payments spojuje bránu i zpracovatele do jednoho nástroje v pokladně, bez samostatného obchodního účtu a bez externích transakčních poplatků u Shopify Payments, Shop Pay, Shop Pay Installments a PayPal Express. FAQ na konci odpovídá, že firmy přijímající jen hotovost, šeky nebo převody bránu ani zpracovatele nepotřebují, ale přijdou o zákazníky preferující karty, a že brána a poskytovatel spolupracují, ale nejsou zaměnitelné.

Článek je zjevně určen začátečníkům a nezabývá se českým trhem. GoPay, ComGate, Stripe ani PayU nezmiňuje, PCI DSS ani 3D Secure také ne, a konkrétní výši poplatků neuvádí. Srovnání s lokálními poskytovateli proto zůstává na čtenáři. Obecně platí, že GoPay a ComGate dodávají bránu s akvizicí a bankovními tlačítky, kdežto Stripe a PayU jsou širší platformy. Konkrétní podmínky a poplatky je třeba brát z ceníků jednotlivých poskytovatelů, ne z tohoto článku.

## Pro koho je to relevantní
Pro obchodníky a PM, kteří začínají s on-line prodejem nebo vybírají platební řešení, a pro sales a discovery hovory, kde je potřeba jednoduše vysvětlit, proč e-shop nestačí jen brána a co obnáší obchodní účet. Článek navazuje na dřívější primery o platbě kartou, přijímání plateb on-line a integraci platební brány, takže tvoří spíš doplňkový referenční obsah než novinku.

Pro vývojáře žádná nová API funkcionalita nevzniká a nalehavost je nízká. Technický dopad je jen nepřímý: volba brány a zpracovatele ovlivňuje, jaká payment gateway a platební metoda se objeví v datech objednávky, a tedy i reporting, účetní export a párování plateb. Před doporučením Shopify Payments konkrétnímu obchodníkovi je potřeba ověřit jeho dostupnost pro zemi obchodu, protože článek tuto otázku pro ČR neřeší a naše starší shrnutí si v ní částečně odporují.
