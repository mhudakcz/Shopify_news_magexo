---
date: 2026-10-28
title: "Shopify Protect enterprise — block fraud před order + win disputes + custom rules"
title_en: "Shopify Protect enterprise"
slug: shopify-protect-enterprise-fraud-rules
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zdroj k Protectu neuvádí žádné API ani webhooky. Pokud pro obchody řešíme automatizace nad rizikem objednávek, import objednávek do ERP nebo zpracování sporů, mění blokace před autorizací platby to, které objednávky vůbec vzniknou, a nová vlastní pravidla se mohou překrývat s logikou, kterou už máme postavenou jinde."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-payments", "blog-ecommerce-fraud-prevention", "staff-permissions-payments-payouts-disputes-tax"]
editions_release: fall-2026
tldr: "Editions Fall '26 popisuje Shopify Protect jako vrstvu nad rizikem a spory: rizikové objednávky blokuje už před autorizací platby v checkoutu, ke sporům automaticky přikládá důkazy včetně potvrzení doručení od dopravce a AI připravuje odpověď pro konkrétní banku, a merchant si může psát vlastní pravidla nad rizikovými signály, zpětně je testovat a dostávat upozornění na pokles výkonu. Sekce je na stránce označená jako rolling out soon, rozšíření ochrany před chargebacky mimo Shop Pay je coming soon. Stránka neuvádí datum, plán, regionální dostupnost ani API, a podle našeho archivu byl Protect dosud jen pro USA, takže pro české obchody je to zatím směr k ověření, ne funkce k plánování."
tagy: [shopify-protect, fraud, disputes, chargeback, rules, enterprise]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Protect byl dosud v našem archivu popsán úzce: jako krytí fraudulentních chargebacků u vybraných Shop Pay objednávek, dostupné pro merchanty v USA (viz přehled fraud prevention z Shopify blogu). Pro české obchody nebyl k dispozici. Hlavní nástroje, které čeští merchanti reálně používali, byly fraud analysis ve Shopify Payments (označení objednávky jako low, medium nebo high risk), ruční review, automatizace přes Shopify Flow a aplikace třetích stran s vlastní garancí.

    Editions Fall '26 (Exponential, 28. října 2026) dává Protectu v tématu Payments mnohem širší rámec. Podle stránky Shopify automaticky blokuje rizikové objednávky před autorizací platby v checkoutu, ukazuje na stránce objednávek, které faktory zvýšily risk level, nabízí vlastní reporty o platebním riziku a sporech, ke sporům přikládá potvrzení doručení od dopravce a generuje AI odpovědi pro každý chargeback podle banky, kontextu obchodu a reason kódu. Navíc si merchant může psát vlastní pravidla nad rizikovými signály, které si zvolí, zpětně je otestovat proti minulým objednávkám a dostat upozornění, když jejich výkon začne driftovat. Pravidla vedou odkaz na aplikaci Shopify Protect v App Store.

    Stav je potřeba číst opatrně. Celá sekce Protect je na stránce označená jako rolling out soon a rozšíření reimbursementu za fraudulentní chargebacky i na objednávky mimo Shop Pay jako coming soon. Stránka neuvádí datum, plán, regionální dostupnost, cenu ani API. Jediné číslo je tvrzení Shopify, že s Protectem se vyhrává o 60 % více sporů typu product not received. Chybí k němu období i zdroj, takže ho bereme jako marketingové tvrzení, ne jako měření.
  zdroje:
    - title: "Shopify Editions Fall '26 (Payments, Shopify Protect)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Payments"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-payments/"
    - title: "Archiv: E-commerce fraud prevention (Shopify blog)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-ecommerce-fraud-prevention/"
    - title: "Archiv: Nové staff permissions pro platby, výplaty, spory a daně"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/staff-permissions-payments-payouts-disputes-tax/"
    - title: "Archiv: Editions Spring '26 — Payments"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-payments/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 v tématu Payments skládá pod značku **Shopify Protect** tři věci, které dosud byly rozdělené nebo chyběly: blokování rizika, pomoc se spory a vlastní pravidla. Sekce je na stránce označená jako **rolling out soon**.

**1. Blokace před autorizací platby.** Shopify podle stránky automaticky blokuje vysoce rizikové objednávky ještě před tím, než je platba v checkoutu autorizovaná. Dosavadní model byl opačný: objednávka vznikla, dostala risk level a řešilo se to následně (ručně, přes Flow nebo aplikací třetí strany). Důležitá nuance: stránka mluví o **autorizaci platby**, ne o vytvoření objednávky. Prakticky to znamená, že z blokovaného pokusu nevznikne zaplacená objednávka, ale co přesně uvidí kupující a zda zůstane abandoned checkout, stránka neuvádí.

**2. Spory s důkazy a AI.** Shopify sám skládá podklady, které banka potřebuje. U tvrzení, že zásilka nedorazila, přikládá potvrzení doručení od dopravce, a AI generuje odpověď na každý chargeback podle banky držitele karty, kontextu obchodu a reason kódu. Rozšíření reimbursementu za fraudulentní chargebacky i na objednávky mimo Shop Pay je **coming soon**. Pozor na formulaci: Shopify slibuje, že vám pomůže spory vyhrávat, ne že je vyhraje automaticky. Představa o auto-win je naše zkratka, zdroj ji neříká.

**3. Vlastní pravidla.** Merchant si píše pravidla nad rizikovými signály, které si zvolí, **zpětně je otestuje** proti minulým objednávkám (backtesting) a dostává upozornění, když výkon pravidla driftuje, tedy začne blokovat jiné objednávky, než kdy bylo původně zamýšleno. Pravidla odkazují na aplikaci Shopify Protect v App Store.

K tomu přibývá **vysvětlení rizikových faktorů** na stránce objednávek (proč objednávka dostala svůj risk level) a **vlastní reporty** o platebním riziku a sporech.

**Co stránka neříká:**

- **Datum.** Rolling out soon není datum. Sekce nemá termín a u jednotlivých položek nejsou jisté ani stavy: náš přehled [Payments](/Shopify_news_magexo/zmena/editions-fall-2026-payments/) vede část položek jako live, samotná sekce o Protectu mluví o rolling out soon. Před jakýmkoli slibem to ověřit přímo v adminu a v App Store.
- **Region a plán.** Žádná zmínka o zemích ani tarifech. Slovo enterprise je naše interpretace, protože backtesting, drift alerty a vlastní pravidla jsou nástroje blízké enterprise fraud týmům. Stránka neříká, že jde jen o plán Plus.
- **API.** Žádné API, webhooky ani export výsledků pravidel se nezmiňují.
- **Které signály a jaké akce.** Neuvádí, jaké rizikové signály lze v pravidlech použít ani zda pravidlo umí kromě zablokování i zařadit objednávku do ručního review.
- **Cena.** Neuvádí poplatky za Protect ani za blokování.
- **Dosavadní omezení.** Podle archivu byl Protect určený pro USA a krytí se týkalo vybraných Shop Pay objednávek. Že se to mění i pro Evropu, Fall '26 nepotvrzuje.

## Časová osa

- **2026-06-17** — Spring '26 Payments: hlubší pohled na spory, ML proti card testingu a monitoring chargeback rate ([editions-spring-2026-payments](/Shopify_news_magexo/zmena/editions-spring-2026-payments/))
- **2026-07-07** — nové staff permissions, mimo jiné pro správu sporů ([staff-permissions-payments-payouts-disputes-tax](/Shopify_news_magexo/zmena/staff-permissions-payments-payouts-disputes-tax/))
- **2026-10-12** — přehled fraud prevention na Shopify blogu, Protect jako USA a Shop Pay záležitost ([blog-ecommerce-fraud-prevention](/Shopify_news_magexo/zmena/blog-ecommerce-fraud-prevention/))
- **2026-10-28** — Editions Fall '26: Protect s blokací před autorizací, AI odpověďmi na spory a vlastními pravidly, sekce rolling out soon
- **Bez data** — rozšíření ochrany před chargebacky mimo Shop Pay (coming soon), dostupnost pro ČR a EU neuvedena

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné, stránka neoznamuje žádnou změnu API. Dotknout se nás ale může změna toho, co do systému vůbec doteče:

- **Méně objednávek v toku.** Pokud Shopify zablokuje rizikový pokus před autorizací, objednávka nevznikne a nedorazí ani webhook, ani import do ERP. Metriky, které porovnávají počet pokusů o checkout s počtem objednávek, se budou chovat jinak a rozdíl nebude chyba synchronizace.
- **Automatizace nad rizikem.** Flow workflow a naše vlastní logika, které dnes reagují na risk level hotové objednávky (zadržení, zrušení, tag), budou dostávat méně vstupů, a pokud je Protect s vlastními pravidly zapnutý, vznikne překryv rozhodovací logiky. Je potřeba předem určit, která vrstva rozhoduje jako první. U obchodů, které dnes používají fraud aplikaci třetí strany, platí totéž.
- **Spory.** Pokud zpracováváme data o sporech nebo je dodáváme do účetnictví, ověřit, zda se s AI odpověďmi a automaticky přikládanými důkazy mění obsah nebo stavy sporů. Konkrétní podobu v API zdroj neuvádí a je třeba ji dohledat v API referenci a v dokumentaci aplikace.
- **Vlastní pravidla jsou mimo kód.** Pravidla se píšou v aplikaci a stránka k nim neuvádí export ani API. Nevíme tedy, zda půjdou verzovat nebo číst programově. Pro audit a předávání mezi týmy to je zatím slabé místo.

Doporučený postup: sledovat objevení se aplikace a dokumentace, jakmile bude dostupná na vývojovém nebo testovacím obchodě, vyzkoušet backtesting na reálné historii a zdokumentovat, jaké objednávky by pravidla blokovala.

**Pro PM / PO:** Příležitost je u obchodů, které dnes platí za fraud službu třetí strany, mají vysoký podíl chargebacků (cross-border, elektronika, drahé zboží) nebo trápí ruční review podezřelých objednávek. Blokace před platbou, předpřipravené důkazy a AI odpovědi na spory můžou ušetřit práci a ztráty a vlastní pravidla s backtestem jsou zajímavá pro obchody s rozumnou historií objednávek.

Co se nedá slíbit: dostupnost pro české obchody. Podle archivu byl Protect určený pro USA a Fall '26 tuto hranici neruší ani nepotvrzuje. Pokud se na něj merchant zeptá, odpověď je zatím: je to směr, ověříme dostupnost a podmínky. Dále počítat s rizikem falešných blokací. Zablokovaný poctivý zákazník je ztracená tržba, kterou v budoucnu nikdo neuvidí jako objednávku, takže pravidla je nutné nasazovat opatrně a s backtestem.

Nalehavost je vysoká, protože se to týká přímo tržeb a ztrát, a protože se blíží Black Friday a vánoční špička, kdy fraud i chargebacky rostou. Vysoká nalehavost ale neznamená okamžitou implementaci: nemáme datum ani region. Akce je rychle ověřit dostupnost pro naše země a tarify, projít merchanty se zvýšeným rizikem a připravit si seznam objednávek a pravidel, na kterých by se backtesting dal vyzkoušet.

## Použití v Integrátoru

**Možná** — pokud pro obchody stavíme automatizace nad rizikem objednávek, importy do ERP nebo zpracování sporů, změní blokace před autorizací množství objednávek v toku a vlastní pravidla se mohou překrývat s naší logikou. Až bude Protect dostupný, prověřit jeho dopad na tyto napojení a rozhodnout, která vrstva rozhoduje jako první.
