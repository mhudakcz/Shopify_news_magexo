---
date: 2026-11-04
title: "Jak vypočítat jednotkovou cenu? Praktický návod a kalkulačka"
slug: blog-jednotkova-cena-kalkulacka
zdroj: https://www.shopify.com/cz/blog/jednotkova-cena
shrnuto_dne: 2026-11-06
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jednotková cena se v českých e-shopech zobrazuje z dat o produktu (objem, hmotnost, cena), která často pocházejí z ERP synchronizace, takže může jít o doplňovaná pole."
dotcene_klienty: []
souvisejici: [eu-product-identifiers-shopify-shipping-labels, editions-fall-2026-merchandising, contextual-pricing-audit-trail]
tldr: "Shopify blog vysvětluje, jak spočítat jednotkovou cenu (celková cena děleno množství ve stejné jednotce) a odlišuje ji od jednotkových nákladů; je to obecný návod, ne novinka platformy."
tagy: [cenotvorba, jednotkova-cena, kalkulator, retail, eu-regulace]
zdroj_kanal: blog
kontext:
  background: |
    Jednotková cena je částka za jednu měrnou jednotku, například kilogram, litr nebo kus. Zákazníkovi umožňuje srovnat balení různé velikosti. V EU navazuje na povinnost uvádět u balených produktů cenu za jednotku (směrnice 98/6/ES), v Česku ji implementuje zákon o cenách.

    Článek na Shopify blogu je obecný edukační text pro začínající obchodníky. Uvádí vzorec (celková cena děleno počet jednotek), postup s převodem na společnou jednotku a příklady, například džus nebo papírové utěrky. Oddělené téma jsou jednotkové náklady, tedy součet fixních a variabilních nákladů na kus, který slouží ke stanovení minimální prodejní ceny.

    Článek sám nepopisuje směrnici 98/6/ES ani technickou implementaci v Shopify. Zmínka o metafieldech nebo vlastním Liquid kódu v něm není. Tento kontext je doplněn pouze jako vysvětlení souvislostí, konkrétní implementace v šabloně je samostatné téma.
  zdroje:
    - title: "Shopify: Jak vypočítat jednotkovou cenu? Praktický návod a kalkulačka"
      url: "https://www.shopify.com/cz/blog/jednotkova-cena"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify blog v češtině vysvětluje, jak spočítat jednotkovou cenu. Postup má čtyři kroky: zjistit celkovou cenu, určit množství a jednotku, převést obojí na stejnou jednotku (gramy na kilogramy, mililitry na litry) a cenu vydělit množstvím. Příklady: džus 128 Kč za 2 l vychází na 64 Kč za litr, utěrky 262 Kč za 8 rolí na 32,75 Kč za roli, omáčka 67 Kč za 500 ml na 134 Kč za litr.

Druhá část se věnuje jednotkovým nákladům na modelu výroby svíček: fixní náklady 126 000 Kč měsíčně a variabilní 84 Kč na kus při 2 000 kusech dávají 147 Kč na svíčku. Jako kalkulačku článek doporučuje tabulkový procesor a kalkulačku ziskové marže od Shopify. Text je obecný návod, žádná nová funkce platformy.

## Pro koho je to relevantní

Hlavně pro obchodníky s balenými produkty (potraviny, drogerie, kosmetika), kde je zobrazení jednotkové ceny v EU povinné. Pro implementační týmy je to spíš připomínka, že data pro výpočet (množství, jednotka) musí být u produktů kvalitně vedená. Samotné zobrazení na Shopify se řeší v šabloně nebo přes metafieldy, což článek neřeší. Související kontext viz poznámky k EU identifikátorům produktů a merchandisingu z Editions podzim 2026.
