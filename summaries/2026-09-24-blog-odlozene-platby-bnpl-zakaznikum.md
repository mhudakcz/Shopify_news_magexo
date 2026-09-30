---
date: 2026-09-24
title: "Odložené platby — jak fungují a proč je nabídnout zákazníkům"
slug: blog-odlozene-platby-bnpl-zakaznikum
zdroj: https://www.shopify.com/cz/blog/odlozene-platby
shrnuto_dne: 2026-09-30
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud z objednávky čteme payment gateway nebo platební metodu pro reporting či účetní export, odložené platby (Klarna, Twisto, Skip Pay) se objeví jako další hodnota; jinak jde o čistě informační článek bez API dopadu."
dotcene_klienty: []
souvisejici: [blog-buy-now-pay-later-4-poskytovatele, klarna-more-countries, shop-pay-installments-multiple-business-entities]
tldr: "Shopify Blog CZ vysvětluje tři typy odložených plateb (BNPL), jejich ekonomiku (fee 3,99–4,99 % + 8,50 Kč) a poskytovatele v ČR — Klarna, Twisto, Skip Pay, Home Credit, Platím Pak."
tagy: [bnpl, buy-now-pay-later, klarna, deferred-payments, checkout, conversion]
zdroj_kanal: blog
kontext:
  background: |
    Odložené platby (Buy Now, Pay Later, BNPL) umožňují zákazníkovi objednat zboží hned a zaplatit až později. Článek rozlišuje tři varianty. První je zaplacení celé částky později v horizontu přibližně 14–30 dní, což je v podstatě digitální obdoba dobírky. Druhá je platba na třetiny, tedy tři stejné splátky bez úroků. Třetí jsou klasické splátky na 6–24 měsíců, které už jsou zpoplatněné úrokem (RPSN) a blíží se spotřebitelskému úvěru. Z hlediska obchodníka je důležité, že jde vždy o službu externího poskytovatele, který se stará o posouzení bonity i o vymáhání.

    Mechanika v checkoutu je jednoduchá: zákazník dá produkt do košíku, zvolí odloženou platbu, poskytovatel během několika sekund vyhodnotí bonitu a transakci schválí nebo zamítne. E-shop pak dostane peníze bez ohledu na to, jak zákazník později splácí. Riziko nesplacení tedy nese poskytovatel, ne obchodník. Shopify jako hlavní přínosy uvádí méně opuštěných košíků, vyšší konverzi (především u dražšího zboží), vyšší průměrnou hodnotu objednávky a stabilnější cash flow. Konkrétní procentuální lift článek v české verzi nezmiňuje; tržní odhady se u BNPL typicky pohybují zhruba v rozmezí 20–30 % konverze, ale výsledek se liší podle oboru a ceny košíku, takže jde o orientační hodnotu, ne o garanci. Starší přehledový článek z archivu cituje ze Shopify zdrojů až 50 % vyšší průměrnou hodnotu objednávky a až 28 % méně opuštěných košíků.

    Pro český trh článek jmenuje Klarnu (mezinárodní standard), Twisto (domácí průkopník), Skip Pay (vlastní ČSOB), Home Credit (zaměřený na splátky) a Platím Pak (provozuje Raiffeisenbank). Transakční poplatky se pohybují v pásmu 3,99–4,99 % + 8,50 Kč za transakci, tedy výrazně výš než u běžné karty. Při refundaci se poplatek obchodníkovi nevrací. Praktická upozornění z článku: pokud poskytovatel zákazníka zamítne, musí v košíku zůstat alternativní způsob platby; vratky a refundace se spravují složitěji; integrace se liší podle platformy; a schvalovací proces poskytovatele bývá přísný. U Klarny v Shopify stačí aktivace v Nastavení > Platby přes Shopify Payments, bez samostatného Klarna účtu. Dostupnost závisí na tom, zda je pro danou zemi obchodu Shopify Payments k dispozici a Klarna povolena.
  zdroje:
    - title: "Shopify: Odložené platby — jak fungují a proč je nabídnout zákazníkům"
      url: "https://www.shopify.com/cz/blog/odlozene-platby"
    - title: "Shopify: 4 oblíbení poskytovatelé Buy Now Pay Later pro podniky"
      url: "https://www.shopify.com/cz/blog/buy-now-pay-later"
    - title: "Klarna nově dostupná v ČR a 7 dalších zemích"
      url: "https://www.shopify.com/editions/winter2026"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je
Edukativní blogový článek na Shopify.com/cz, který vysvětluje, co jsou odložené platby (BNPL), jak probíhají v checkoutu a proč je zvážit v e-shopu. Rozlišuje tři typy: zaplacení celé částky později (14–30 dní), platbu na třetiny bez úroků a splátky na 6–24 měsíců s RPSN. Popisuje průběh transakce: zákazník zvolí odloženou platbu, poskytovatel během sekund posoudí bonitu a obchod dostane peníze hned, zatímco riziko nesplacení přebírá poskytovatel.

Článek uvádí přínosy (méně opuštěných košíků, vyšší konverze u dražších produktů, vyšší AOV, stabilnější cash flow) i náklady a omezení. Fee se pohybuje kolem 3,99–4,99 % + 8,50 Kč za transakci a při refundaci se nevrací. Je potřeba mít v košíku záložní platební metodu pro případ zamítnutí, počítat se složitější správou vratek a s rozdílnou integrací podle platformy. Jmenovaní poskytovatelé pro ČR jsou Klarna, Twisto, Skip Pay (ČSOB), Home Credit a Platím Pak (Raiffeisenbank). Klarna se v Shopify zapíná přes Shopify Payments v Nastavení > Platby.

Jde o lokalizovaný obsahový článek, ne o změnu produktu ani API. Navazuje na dřívější přehled BNPL poskytovatelů a na rozšíření Klarny do ČR přes Shopify Payments, takže české obchodníky ukotvuje v domácích poskytovatelích, které ten starší přehled neřešil.

## Pro koho je to relevantní
Hlavně pro obchodníky s vyšší průměrnou hodnotou košíku (elektronika, nábytek, sport, móda s vyšší cenovkou), kde odložená platba nejčastěji pomáhá dokončit nákup. Pro sales a PM rozhovory je to dobrý podklad pro srovnání variant: Klarna přes Shopify Payments je nejjednodušší cesta bez vlastní smlouvy, zatímco Twisto nebo Skip Pay typicky vyžadují samostatnou integraci (app nebo gateway) a vlastní smluvní vztah. Při rozhodování je třeba srovnat fee 3,99–4,99 % + 8,50 Kč s očekávaným nárůstem konverze a AOV a počítat s tím, že fee se při vratkách nevrací.

Pro vývojáře žádná nová API funkcionalita nevzniká. Jediný technický dopad je v datech: pokud se z objednávky čte platební brána nebo metoda (reporting, účetní export, párování plateb), přibydou nové hodnoty pro BNPL poskytovatele a u refundací stojí za to ověřit, jak se promítají do párování plateb. Nalehavost je nízká, jde o referenční informaci.
