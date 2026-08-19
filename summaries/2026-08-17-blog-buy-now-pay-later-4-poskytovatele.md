---
date: 2026-08-17
title: "4 oblíbení poskytovatelé Buy Now Pay Later pro podniky"
slug: blog-buy-now-pay-later-4-poskytovatele
zdroj: https://www.shopify.com/cz/blog/buy-now-pay-later
shrnuto_dne: 2026-08-19
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud čteme payment method / gateway z objednávky pro reporting nebo ERP sync, BNPL poskytovatel se může objevit jako další hodnota — informační přehled bez přímého API dopadu."
dotcene_klienty: []
souvisejici: [klarna-more-countries, blog-integrace-platebni-brany, blog-prijimani-plateb-online]
tldr: "Shopify Blog CZ shrnuje 4 (a víc) BNPL poskytovatele — Klarna, Afterpay, Affirm, Zip a další — a jak splátkové platby ovlivňují konverzi a fees pro obchodníka."
tagy: [bnpl, payments, klarna, afterpay, financing, checkout]
zdroj_kanal: blog
kontext:
  background: |
    Buy Now, Pay Later (BNPL) je platební model, kdy zákazník rozdělí platbu za nákup do několika splátek — obvykle bezúročných, pokud platí včas — nebo ji odloží na pozdější datum. Obchod přitom dostane celou platbu okamžitě od BNPL poskytovatele, který na sebe bere riziko případného nesplacení. Podle článku roste podíl BNPL na celosvětové hodnotě e-commerce transakcí z 2,9 % na odhadovaných 5,3 % a obchodníci, kteří BNPL nabízejí, hlásí až o 50 % vyšší průměrnou hodnotu objednávky a až o 28 % méně opuštěných košíků.

    Článek představuje širší přehled poskytovatelů než jen čtyři z titulku: Shop Pay Installments (Shopify vlastní řešení postavené na Affirmu, dostupné zatím jen v USA), Affirm, Afterpay, Sezzle, PayPal Pay in 4, Klarna, Zip a Splitit. Většina z nich se do Shopify checkoutu zapojuje buď přímo přes Shopify Payments (Klarna, Afterpay, Shop Pay Installments), nebo jako samostatná app z App Store — v tom případě si obchodník řeší integraci a nastavení fees zvlášť, mimo agregovaný účet Shopify Payments.

    Z pohledu obchodníka je klíčová ekonomika: merchant platí poskytovateli transakční fee (podobně jako u kartové platby), zákazník obvykle nic navíc neplatí, pokud splácí podle plánu, a chargeback riziko je z velké části přenesené na BNPL poskytovatele. Nevýhodou je nerovnoměrná geografická dostupnost — řada řešení (typicky Shop Pay Installments) cílí primárně na USA — a rozdílné schvalovací procesy podle poskytovatele. Pro ČR merchanty je dnes prakticky nejrelevantnější Klarna, dostupná přímo přes Shopify Payments od začátku roku 2026.
  zdroje:
    - title: "Shopify: 4 oblíbení poskytovatelé Buy Now Pay Later pro podniky"
      url: "https://www.shopify.com/cz/blog/buy-now-pay-later"
  generated_at: 2026-08-19T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je
Přehledový blogový článek na Shopify.com/cz vysvětluje princip Buy Now, Pay Later (BNPL) a představuje hlavní poskytovatele, se kterými se obchodník na Shopify může setkat — Klarnu, Afterpay, Affirm, Zip, Sezzle, PayPal Pay in 4, Splitit a vlastní Shop Pay Installments. Popisuje, jak BNPL funguje z pohledu merchanta: obchod dostane platbu okamžitě, zákazník splácí ve splátkách, poskytovatel nese riziko nesplacení a účtuje si za to transakční fee. Článek uvádí i konkrétní čísla — až 50% nárůst průměrné hodnoty objednávky a až 28% pokles opuštěných košíků u obchodů, které BNPL nabízejí, plus odhad růstu podílu BNPL na celosvětových e-commerce transakcích z 2,9 % na 5,3 %.

## Pro koho je to relevantní
Jde o obsahový/edukativní materiál, ne o novou funkci nebo API změnu — vhodný jako reference pro obchodní/sales rozhovory s klienty, kteří zvažují zavedení splátkových plateb do checkoutu (typicky e-shopy s vyšší průměrnou hodnotou objednávky). Pro CZ klienty je prakticky nejdůležitější zmíněná Klarna, dostupná přímo přes Shopify Payments; ostatní poskytovatele (Affirm, Afterpay, Shop Pay Installments) jsou zatím vázané hlavně na USA trh. Žádný přímý dopad na naše API integrace — pokud čteme payment method z objednávky, jde jen o další možnou hodnotu v enumu.
