---
date: 2026-08-25
title: "Správa předplatného — vysvětlení a nejlepší aplikace"
slug: blog-sprava-predplatneho-nejlepsi-aplikace
zdroj: https://www.shopify.com/cz/blog/sprava-predplatneho
shrnuto_dne: 2026-08-28
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Popisuje volbu mezi Shopify Subscriptions a aplikacemi třetích stran (Recharge, Appstle, Seal) — relevantní jako podklad při poptávce subscription e-shopu, bez konkrétní API novinky."
dotcene_klienty: []
souvisejici: [subscription-disclosure-checkout-update, built-for-shopify-returns-subscriptions-customer-account-api, subscription-contract-calculation-api-early-access]
tldr: "Blogový článek vysvětluje princip subscription managementu (fakturace, obnovování, churn) a srovnává aplikace pro předplatné od zdarma dostupného Shopify Subscriptions po pokročilé Recharge, Appstle, Seal a Subi."
tagy: [subscription, management, apps, recurring-billing, retention, mrr]
zdroj_kanal: blog
kontext:
  background: |
    Článek patří do edukativní řady Shopify blogových textů a vysvětluje, co obnáší správa předplatného (subscription management) — tedy řízení celého životního cyklu předplatitele od prvního nákupu přes opakovanou fakturaci, obnovování a úpravy objednávky až po zrušení. Zdůrazňuje, že jde o víc než jen "opakovaně naúčtovat platbu": patří sem i koordinace zásob s předvídatelnou poptávkou, zákaznický self-service portál pro správu vlastního předplatného a sledování metrik jako opakující se příjem (MRR), míra odchodu zákazníků (churn) a hodnota zákazníka za dobu vztahu (LTV).
    Druhá polovina textu srovnává konkrétní aplikace z Shopify App Store. Nativní **Shopify Subscriptions** je zdarma a hodí se pro jednoduché start-up případy. Mezi placenými alternativami článek jmenuje **Subi** (9–79 USD/měsíc), **Seal** (4,95–380 USD/měsíc), **Appstle** (10–100 USD/měsíc) a **Recharge** (99–499 USD/měsíc) jako řešení pro firmy s vyššími nároky na flexibilitu cyklů, slev nebo škálovatelnost, dále zmiňuje Ordergroove, Propel a Recurpay jako další možnosti. Volba mezi nimi by měla vycházet z velikosti byznysu a složitosti požadovaných pravidel (např. míchání produktů v jednom předplatném, pauzování cyklu, věrnostní odměny).
    Text připomíná i právní rámec platný v Česku — DPH, zákonné právo spotřebitele odstoupit od smlouvy do 14 dnů a povinnosti vyplývající z GDPR — jako oblasti, které musí obchodník při nastavení předplatného ošetřit bez ohledu na zvolenou aplikaci. Nejde o změnu Shopify platformy ani API, ale o obsahový/poradenský materiál cílený na obchodníky zvažující zavedení nebo výměnu subscription řešení.
  zdroje:
    - title: "Shopify: Správa předplatného — vysvětlení a nejlepší aplikace"
      url: "https://www.shopify.com/cz/blog/sprava-predplatneho"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Článek vysvětluje pojem subscription management jako komplexní řízení opakujícího se vztahu se zákazníkem — nejen fakturaci, ale i obnovování předplatného, úpravy obsahu objednávky, komunikaci se zákazníkem a práci se zásobami tak, aby odpovídaly předvídatelné poptávce z předplatných. Zdůrazňuje roli zákaznického portálu (customer portal), kde si předplatitel sám upraví frekvenci doručení, pozastaví nebo zruší předplatné bez nutnosti kontaktovat podporu, a roli klíčových metrik — opakující se měsíční příjem (MRR), míra odchodu (churn) a celoživotní hodnota zákazníka (LTV) — jako ukazatelů zdraví subscription byznysu.

Druhá část je praktické srovnání aplikací dostupných v Shopify App Store: nativní **Shopify Subscriptions** zdarma pro jednodušší case, a placené alternativy **Subi**, **Seal**, **Appstle** a **Recharge** (od jednotek po stovky USD měsíčně) pro firmy s náročnějšími požadavky na flexibilitu billing cyklů, bundling produktů nebo škálovatelnost. Doplňkově jsou zmíněny i Ordergroove, Propel a Recurpay. Text uzavírá připomínkou právních povinností relevantních i pro české obchodníky — DPH, 14denní právo na odstoupení od smlouvy a GDPR.

## Pro koho je to relevantní

Text je určen obchodníkům, kteří zvažují zavedení nebo změnu subscription modelu na svém e-shopu, a je to čistě edukativní/srovnávací obsah bez nové Shopify funkce či API změny. Pro nás je to užitečný podkladový materiál při poptávkách klientů s prodejem na předplatné — pomáhá rychle vysvětlit rozdíl mezi nativním Shopify Subscriptions a aplikacemi třetích stran (Recharge, Appstle, Seal) a jaké faktory (velikost byznysu, složitost billing pravidel, potřeba customer portálu) rozhodují o výběru. Tematicky navazuje na dřívější změny týkající se subscription disclosure v checkoutu, Built for Shopify požadavků na Customer Account API pro subscription apps a nového SubscriptionContractCalculation API.
