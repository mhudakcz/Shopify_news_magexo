---
date: 2026-10-22
title: "Shopify Reports a Shopify Analytics: průvodce pro začátečníky"
slug: blog-shopify-reports-analytics-pruvodce
zdroj: https://www.shopify.com/cz/blog/shopify-reports
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Edukační obsah bez API změny, ale užitečný jako onboardingový podklad pro merchanty, kteří řeší reporting, ShopifyQL a metapole jako dimenze."
dotcene_klienty: []
souvisejici: [blog-ecommerce-metriky, daily-insights-analytics-ai, shopifyql-matches-customer-behavior]
tldr: "Shopify CZ blog vysvětluje začátečníkům, kde v administraci najdou přehledy, jak jsou rozdělené do deseti kategorií (Akvizice, Chování, Zákazníci, Zásoby, Marketing, Objednávky, Zisk, POS, Prodej, Finance) a kdy sáhnout po vlastních průzkumech a ShopifyQL."
tagy: [reports, analytics, shopifyql, zacatecnici, dashboard]
zdroj_kanal: blog
kontext:
  background: |
    Shopify Analytics je vestavěná analytická vrstva administrace, která je dostupná ve všech tarifech. Základní webová analytika je součástí každého plánu, pokročilejší přehledy a funkce jsou vyhrazené vyšším tarifům. Článek zavádí důležité rozlišení: přehledy (Shopify Reports) ukazují, co se v obchodě stalo, zatímco analýza má vysvětlit, proč se to stalo a co s tím dělat dál. Přehledy najdete v administraci pod Analytika, Přehledy a členové týmu k nim potřebují příslušné oprávnění.

    Výchozí přehledy jsou podle článku seskupené do deseti kategorií. Akvizice sleduje zdroje a lokality návštěvníků, Chování popisuje konverze, vyhledávání a výkon webu, Zákazníci obsahuje kohortovou a RFM analýzu a poměr nových a vracejících se zákazníků. Skladové zásoby nabízejí mimo jiné ABC analýzu, míru prodeje a odhad zbývajících dnů zásoby, Marketing přiřazuje tržby kampaním a UTM odkazům. Dále jsou tu kategorie Objednávky, Zisk (jen u položek se známou pořizovací cenou), Maloobchodní tržby pro POS, Prodej (včetně AOV) a Finance s platbami, daněmi a dárkovými kartami. U DPH článek upozorňuje, že přehledy mohou sloužit jako podklad, ale nenahrazují účetnictví ani konzultaci s daňovým poradcem.

    Přehledový panel (Overview dashboard) má přizpůsobitelné karty, srovnání období, denní Insights, cílové hodnoty metrik a Live view pro sledování aktivity v reálném čase například při Black Friday. Pro hlubší práci slouží vlastní přehledy a průzkumy, kde přidáváte metriky, dimenze, filtry a vizualizace, případně editor dotazů ShopifyQL. Jako dimenze a filtry lze použít i metapole produktů, variant, zákazníků a objednávek. Článek výslovně neřeší export do CSV ani plánované rozesílání přehledů přímo v Analytics. Pro automatické souhrny doporučuje Shopify Flow a pro plánované zasílání kompletních přehledů externí reportingové aplikace z App Store (například Report Pundit, Data Export IO, BeProfit, Report Toaster nebo Mipler). Článek také nespecifikuje, že by ShopifyQL byl omezen na konkrétní tarif, takže dostupnost doporučujeme ověřit přímo v administraci konkrétního obchodu.
  zdroje:
    - title: "Shopify: Shopify Reports a Shopify Analytics: průvodce pro začátečníky"
      url: "https://www.shopify.com/cz/blog/shopify-reports"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Článek je úvodní průvodce reportingem na Shopify. Vysvětluje rozdíl mezi přehledy a analýzou: přehledy odpovídají na otázku, co se stalo (tržby, relace, objednávky), analýza hledá příčiny a navazující kroky. Ukazuje, kde se přehledy v administraci nacházejí (Analytika, Přehledy), jak je Shopify rozděluje do deseti výchozích kategorií a jak z nich lze vytvořit vlastní průzkum přidáním metrik, dimenzí, filtrů a vizualizací. Pro pokročilejší dotazy slouží editor ShopifyQL, kde se výsledky obnoví opětovným spuštěním dotazu.

Praktická část se věnuje přehledovému panelu a jeho nástrojům: denním Insights (dostávají je obchody s průměrně alespoň 10 objednávkami týdně za posledních šest měsíců), cílovým hodnotám metrik a Live view. Článek doporučuje začít u panelu, každý den projít Insights a před hlubší analýzou si formulovat otázku, na jejímž základě půjde udělat rozhodnutí. Jako příklad uvádí prodejní trychtýř od návštěvy kategorie až po nákup. Zdůrazňuje také, že neexistuje univerzální dobrá hodnota konverze, a proto se má obchod srovnávat především s vlastní historií a cíli. Doplňuje i FAQ o přesnosti dat: součty se mohou lišit kvůli definicím metrik, časovým pásmům, vratkám, nastavení soukromí a zpoždění zpracování.

Co článek neřeší, je rozpis přehledů po tarifech a také export do CSV či plánování přehledů přímo v Analytics. Pokud by se někdo ptal na export do CSV, scheduling nebo omezení ShopifyQL jen na tarif Plus, zdrojový text to nepotvrzuje. Tyto body proto prezentujte jako nutné ověřit v administraci konkrétního obchodu, ne jako fakt z článku.

## Pro koho je to relevantní

Hlavně pro majitele a provozní manažery menších a středních obchodů, kteří s Shopify Analytics teprve začínají a potřebují mapu toho, kde co hledat. Marketéři ocení kategorii Marketing s UTM přehledy a doporučení porovnávat náklady na kampaně s počtem nových zákazníků, provozní týmy kategorii Skladové zásoby s ABC analýzou a odhadem dní zásoby. Pro české obchody je užitečné upozornění, že finanční a daňové přehledy nejsou náhradou účetnictví ani DPH evidence.

Pro nás jde o čistě edukační obsah bez API změny a bez nutnosti zásahu do implementací. Hodí se jako odkaz pro onboarding merchantů a jako rozcestník k navazujícím novinkám z oblasti Analytics: denní Insights, cílové hodnoty metrik, ShopifyQL operátor MATCHES nebo metapole lokací jako dimenze v přehledech. U merchantů, kteří chtějí automatický reporting do e-mailu nebo Slacku, je rozumné probrat možnosti Shopify Flow a externích reportingových aplikací, protože nativní plánování kompletních přehledů článek nepopisuje.
