---
date: 2026-10-28
title: "Editions Fall '26: Payments — Shopify Protect, nový checkout a platby pro enterprise"
slug: editions-fall-2026-payments
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Payments téma Editions je převážně merchant-facing a zdroj u jednotlivých položek neuvádí žádné API. Část položek (vlastní checkout pole, platby po právních entitách, vlastní risk pravidla, daň podle místa odeslání, market fees) se ale může dotknout checkout customizací, napojení platebních providerů, účetních exportů a výpočtu daní u obchodů, které stavíme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026"]
editions_release: fall-2026
tldr: "Fall '26 skládá platební novinky do dvou linií. Checkout dostává vizuální refresh (dlaždicové platební metody, stacked formulář, vlastní checkout pole, animace na thank-you stránce, Apple Pay přes QR) a Payments se posouvá k enterprise nástrojům (Shopify Protect s vlastními pravidly a backtestingem, platby po právních entitách, compliance pro high-value goods). Managed Markets s cenami včetně cel a daní a fixní dopravou se stává výchozí cestou pro mezinárodní prodej. Z 28 položek je 18 live, 8 coming soon a 2 early access; pro české merchanty žádná přímo lokální novinka, nejvíc se jich dotkne checkout refresh."
tagy: [editions, payments, "fall-2026", checkout, fraud, disputes, shopify-protect, managed-markets, tax, multi-entity, payouts, shop-pay]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions jsou dvakrát ročně koncentrované release events, které shrnují měsíce changelog práce do jednoho narativu. Fall '26 s názvem Exponential vyšel 28. 10. 2026 a téma Payments v něm obsahuje 28 položek. Zdrojová stránka téma neopatřuje žádným sloganem ani úvodním textem, otevírá rovnou položkou Shopify Protect. Přehled proto seskupuje položky do pěti skupin: fraud a spory, daně a mezinárodní prodej, platební metody a schvalování, výplaty a reporting a checkout.

    Pro čtení je důležité rozlišovat stav. Většina položek je označena jako live, ale část (rozšíření ochrany před chargebacky, HSA/FSA, vlastní checkout pole, dlaždicové platební metody, animace na thank-you stránce, Apple Pay přes QR, stacked formulář a zastřešující značka Shopify Protect) je zatím coming soon. Shop Pay Installments v Austrálii a market fees jsou v early access. Mnoho novinek je navíc výslovně omezeno na USA (spravovaná daň z prodeje, daň podle místa odeslání, ML schvalování plateb, HSA/FSA), takže se do české praxe promítnou hlavně nepřímo, přes checkout a mezinárodní prodej.
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Editions přehled (předchozí releases)"
      url: "https://www.shopify.com/editions"
    - title: "Shopify changelog: Guaranteed flat-rate shipping, now with Managed Markets"
      url: "https://changelog.shopify.com/posts/guaranteed-flat-rate-shipping-now-in-managed-markets"
    - title: "Shopify changelog: Refreshed payment method design in checkout"
      url: "https://changelog.shopify.com/posts/refreshed-payment-method-design-in-checkout"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem téma je

Payments je jedno z témat Shopify Editions Fall '26 (Exponential, 28. 10. 2026) a zahrnuje 28 položek. Zdrojová stránka je nechává bez úvodního sdělení, ale shluky jsou čitelné: fraud a spory (osm položek, od blokování rizikových checkoutů přes AI odpovědi na chargebacky až po vlastní pravidla), daně a mezinárodní prodej, platební metody, výplaty a reporting a nakonec checkout. Většina položek je už live (18), osm je coming soon a dvě jsou v early access.

Strategicky se téma opírá o dvě linie. První je **refresh checkoutu**: dlaždicové platební metody místo radio buttonů, stacked formulář s přehlednějšími chybami, vlastní checkout pole, animace přechodu na thank-you stránku a Apple Pay přes QR kód pro prohlížeče mimo Safari. Druhá je **Payments jako enterprise vrstva**: Shopify Protect s vlastními risk pravidly, backtestingem a upozorněním na drift, více platebních providerů po právních entitách, compliance kroky pro high-value goods a market fees. Dispute insights, chargeback monitoring a multi-entity prodej z jara ([Spring '26 Payments](/Shopify_news_magexo/zmena/editions-spring-2026-payments/)) se tu skládají do ucelenějšího produktu. K tomu se přidává **Managed Markets** s cenami včetně cel a daní a fixní dopravou, které Shopify posouvá jako výchozí cestu pro mezinárodní prodej (podle archivu ukončil DDU, zavedl duty-inclusive pricing a nově i garantovanou flat-rate dopravu).

---

## Top 3 highlights

### 1. Shopify Protect — fraud před objednávkou, spory s AI, vlastní pravidla

Shopify Protect je zastřešující balíček, který míří na tři místa: blokuje vysoce rizikové checkouty ještě před autorizací platby, pomáhá vyhrávat spory a dovoluje psát vlastní pravidla nad risk signály. U sporů Shopify sám skládá důkazy: u neautorizovaných transakcí dodá data o kartě, účtence a autentizaci, u tvrzení, že zásilka nedorazila, přiloží potvrzení o doručení od dopravce, a AI připraví odpověď pro konkrétní banku podle kontextu obchodu a reason kódu. Na stránce objednávky je nově vidět, které faktory zvedly risk level, a vznikají vlastní reporty o riziku a sporech. Rozšíření reimbursementu za fraud chargebacky i na objednávky mimo Shop Pay je zatím coming soon.

**Pro merchanty:** méně ruční práce se sbíráním podkladů ke sporům a lepší vysvětlitelnost rozhodnutí (proč byla objednávka označena jako riziková). Podle dřívějších článků v archivu (viz [fraud prevention na Shopify blogu](/Shopify_news_magexo/zmena/blog-ecommerce-fraud-prevention/)) byl Shopify Protect určen pro USA a pro české merchanty nebyl dostupný. Editions přehled regionální dostupnost neuvádí, takže před slibováním čehokoli je nutné ověřit ji v dokumentaci.

**Pro vývojáře:** pravidla v aplikaci Shopify Protect se dají zpětně otestovat (backtesting) a systém upozorňuje na drift jejich výkonu. To je blíž enterprise fraud tooling než dřívějšímu nastavení v adminu. Zdroj nezmiňuje API, webhooky ani export výsledků pravidel. U obchodů, které dnes používají fraud aplikaci třetí strany, bude nutné vyřešit překryv rozhodovací logiky.

### 2. Managed Markets — ceny včetně cel a daní a fixní doprava

Managed Markets nabízí mezinárodní ceny, které rovnou obsahují cla a daně, a v checkoutu fixní sazbu za dopravu. Shopify uvádí o 50 % vyšší mezinárodní konverzi u značek, které to používají (jde o tvrzení Shopify, ne o nezávislé měření). Archiv skládá postupný příběh: od srpna už jen DDP (viz [ukončení DDU](/Shopify_news_magexo/zmena/managed-markets-ending-ddu-support/)), automatické [duty-inclusive pricing](/Shopify_news_magexo/zmena/managed-markets-duties-inclusive-pricing/) a nově [garantovaná flat-rate doprava](/Shopify_news_magexo/zmena/guaranteed-flat-rate-shipping-managed-markets/) se sazbami Standard a Express a garancí ceny štítků FedEx a DHL Express.

**Pro merchanty:** předvídatelná cena dopravy a žádná skrytá cla pro zahraničního kupujícího snižují tření v cross-border checkoutu. Trade-off podle archivu je, že sazby spravuje Managed Markets a merchant je ručně neupraví. Podle archivu je služba určena pro prodejce z vybraných zemí (zmiňováno USA, UK a Kanada), takže pro české merchanty jde spíš o signál směru než o funkci k okamžitému zapnutí. Dostupnost je potřeba ověřit v Help Center.

**Pro vývojáře:** shipping lines a payout data u objednávek z Managed Markets vznikají podle pravidel Managed Markets, ne podle vlastních sazeb obchodu, což je vhodné ověřit u ERP a fulfillment napojení. Prakticky blízký termín: od **1. 11. 2026** platí [EU product identifiers na labelech](/Shopify_news_magexo/zmena/eu-product-identifiers-shopify-shipping-labels/) u Shopify Shipping a Managed Markets (bez povinného S-PID nebo prohlášení o jeho absenci label nevznikne).

### 3. Refresh checkoutu — dlaždice, stacked formulář, vlastní pole, Apple Pay přes QR

Checkout dostává pět viditelných změn, všechny zatím označené jako coming soon (tři z nich jako rolling out soon): dlaždicové platební metody místo radio buttonů (v archivu už je [záznam o novém designu](/Shopify_news_magexo/zmena/refreshed-payment-method-design-checkout/): dlaždice se zobrazí, když merchant nabízí čtyři nebo méně metod, jinak zůstává seznam), stacked formulář s těsnějším layoutem a snáze nalezitelnými chybami u polí, vlastní checkout pole (text, datum, checkbox, výběr) pro pokyny k doručení nebo vzkaz k dárku, animace přechodu z platby na potvrzení objednávky a Apple Pay přes QR kód pro zákazníky v prohlížečích mimo Safari, kteří zaplatí iPhonem.

**Pro merchanty:** u dlaždic nebyla podle archivu potřeba žádná konfigurace. Vlastní pole mohou pokrýt typické české potřeby jako poznámku pro kurýra nebo preferované datum doručení (je to náš odhad použití, zdroj konkrétní příklady neuvádí kromě doručovacích pokynů a dárkových vzkazů). Vedle toho už v archivu je [předvyplnění naposledy použité platební metody](/Shopify_news_magexo/zmena/checkout-default-last-used-payment-method/).

**Pro vývojáře:** vlastní checkout pole se částečně překrývají s checkout UI extensions a metafieldy. Zdroj neříká, kam se hodnoty ukládají a jak se čtou přes API, takže dokud to není zdokumentované, nelze rozhodnout o nahrazení existujících extensions. Stacked layout a dlaždice je rozumné projít na vizuální regrese u obchodů s vlastním checkout brandingem a extensions.

---

## Dopad pro CZ/EU merchanty

- **Přímé lokální novinky: žádné.** Nové lokální metody (MB WAY, OXXO, Alipay, WeChat Pay, Satispay, Scalapay, GrabPay) míří mimo ČR, HSA/FSA, spravovaná daň z prodeje, daň podle místa odeslání a ML schvalování plateb jsou US-only.
- **Nepřímé a použitelné:** checkout refresh (týká se každého obchodu na Shopify checkoutu), Shop Pay vedle stávajícího providera (pokud merchant používá bránu třetí strany, ověřit dostupnost a podmínky pro CZ), výplaty a activity report pro merchanty na Shopify Payments, a Managed Markets jako směr pro cross-border.
- **Ověřit před slibováním:** regionální dostupnost Shopify Protect a Managed Markets pro české obchody.

---

## Všechny položky

Číslování odpovídá pořadí v přehledu tématu. Zdrojová stránka vede některé položky odděleně (například automatické blokování high-risk checkoutů je samostatný řádek u Shopify Protect, Shop Pay a Installments pro multi-entity mají každý svůj řádek). Zde jsou seskupeny do 28 položek. Odkaz v posledním sloupci vede na samostatný článek v archivu tam, kde existuje.

### Pro merchanty

#### Fraud, risk a spory

| # | Název | Co přináší | Status | Archiv |
|---|-------|-----------|--------|--------|
| 1 | **Shopify Protect** | Zastřešující balíček: blokování vysoce rizikových checkoutů před autorizací platby, AI pomoc se spory a vlastní fraud pravidla. Jednotlivé komponenty jsou na stránce vedeny jako live. | coming soon (zastřešující značka) | — |
| 2 | **Risk explanations** | Na stránce objednávek je vidět, které faktory zvedly risk level. | live | — |
| 3 | **Custom payment reports** | Vlastní reporty o platebním riziku a sporech. | live | — |
| 4 | **Extended chargeback protection** | Reimbursement za fraud chargebacky se rozšiřuje i na objednávky mimo Shop Pay. | coming soon | — |
| 5 | **Unauthorized chargeback evidence** | Automaticky dodané důkazy (karta, účtenka, autentizace), že nákup provedl zákazník. | live | — |
| 6 | **Proof of delivery** | Při tvrzení, že objednávka nedorazila, se do sporu přiloží potvrzení doručení od dopravce. | live | — |
| 7 | **AI chargeback responses** | AI odpovědi na chargebacky šité na míru bance podle kontextu obchodu a reason kódu. | live | — |

#### Daně a mezinárodní prodej

| # | Název | Co přináší | Status | Archiv |
|---|-------|-----------|--------|--------|
| 9 | **Managed sales tax (US)** | Shopify Tax počítá, vybírá a odvádí state sales tax v USA za novější obchody. | live | — |
| 10 | **Managed Markets** | Mezinárodní ceny včetně cel a daní a fixní sazba dopravy v checkoutu. | live | [guaranteed flat-rate shipping](/Shopify_news_magexo/zmena/guaranteed-flat-rate-shipping-managed-markets/) · [duty-inclusive pricing](/Shopify_news_magexo/zmena/managed-markets-duties-inclusive-pricing/) · [EU identifikátory na labelech](/Shopify_news_magexo/zmena/eu-product-identifiers-shopify-shipping-labels/) |
| 11 | **Tax by ship-from location** | Daň v USA se počítá podle místa, odkud objednávka odchází. | live | [US daň dle fulfillment location](/Shopify_news_magexo/zmena/us-tax-calculation-fulfillment-location-routing/) · UK obdoba: [UK VAT dle fulfillment location](/Shopify_news_magexo/zmena/uk-vat-fulfillment-location-accuracy/) |
| 26 | **Market fees** | Poplatky nastavené per market pro produkty a kolekce, vybírané v checkoutu, s reportingem. | early access | — |

#### Platební metody a schvalování

| # | Název | Co přináší | Status | Archiv |
|---|-------|-----------|--------|--------|
| 12 | **ML authorization** | Machine learning zvyšuje podíl US online plateb schválených napoprvé. | live | — |
| 17 | **Shop Pay alongside existing providers** | Shop Pay a lokální metody lze nabídnout vedle providera třetí strany ve stejném obchodě. | live | [Shop Pay v kontextu (blog)](/Shopify_news_magexo/zmena/blog-shop-pay-checkout-nejvykonnejsi/) |
| 18 | **More local methods (MB WAY, OXXO)** | Přibývají Alipay, WeChat Pay, Satispay, Scalapay, GrabPay a online varianty MB WAY a OXXO. | live | příbuzné z jara: [lokální metody v Evropě](/Shopify_news_magexo/zmena/local-payment-methods-more-countries/) |
| 20 | **HSA/FSA (US)** | Platba pre-tax HSA/FSA prostředky v Shop Pay, způsobilost řeší Truemed. | coming soon | — |
| 21 | **Shop Pay Installments v Austrálii** | Splátky pro australské obchody. | early access | — |

#### Výplaty a reporting

| # | Název | Co přináší | Status | Archiv |
|---|-------|-----------|--------|--------|
| 15 | **Activity report** | Rozpis tržeb, refundů, poplatků a úprav podle období nebo měny. | live | [Payments activity report](/Shopify_news_magexo/zmena/shopify-payments-balance-activity-report/) |
| 16 | **Multi-currency payouts** | Výplaty ve více měnách pro Austrálii, Francii, Singapur a Hongkong (plány Advanced a Plus). | live | [Austrálie a Francie](/Shopify_news_magexo/zmena/multi-currency-payouts-australia-france/) · [US, HK a SG (jaro)](/Shopify_news_magexo/zmena/multi-currency-payout-expansion/) |
| 19 | **Payouts view** | Přehled zaplacených a čekajících výplat s časem připsání a rozklikávacími detaily. | live | [Payouts page redesign](/Shopify_news_magexo/zmena/payouts-page-redesign-list-view/) |

#### Checkout UX

| # | Název | Co přináší | Status | Archiv |
|---|-------|-----------|--------|--------|
| 24 | **Tiled payment methods** | Kompaktní vizuální dlaždice místo radio buttonů. | coming soon (rolling out soon) | [Nový design payment metod](/Shopify_news_magexo/zmena/refreshed-payment-method-design-checkout/) |
| 28 | **Stacked checkout form** | Těsnější layout formuláře a lépe dohledatelné chyby u polí. | coming soon | — |
| 25 | **Thank-you celebration animation** | Animovaný přechod z platby na potvrzení objednávky. | coming soon (rolling out soon) | — |
| 27 | **Apple Pay via QR** | Platba iPhonem po naskenování QR kódu v prohlížečích mimo Safari. | coming soon | — |

### Pro vývojáře a pokročilé nastavení (enterprise)

| # | Název | Co přináší | Status | Archiv |
|---|-------|-----------|--------|--------|
| 8 | **Rule backtesting + drift alerts** | Vlastní risk pravidla v aplikaci Shopify Protect lze zpětně otestovat a sledovat upozornění na pokles jejich výkonu. | live | — |
| 13 | **Multi-entity payments** | K jednotlivým právním entitám lze připojit další platební providery vedle Shopify Payments. | live | základ z jara: [více legal entities](/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/) |
| 14 | **High-value goods compliance** | Před prodejem zboží s vysokou hodnotou je nutné v adminu splnit compliance kroky. | live | — |
| 22 | **Shop Pay + Installments pro multi-entity** | Shop Pay je dostupný i pro multi-entity byznysy mimo Shopify (spravované z jednoho storu) a Shop Pay Installments lze nabídnout všem způsobilým entitám z jednoho adminu. | live | [Installments na více entitách](/Shopify_news_magexo/zmena/shop-pay-installments-multiple-business-entities/) · [Shop Pay mimo Shopify (jaro)](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/) |
| 23 | **Custom checkout fields** | Vlastní pole v checkoutu (text, datum, checkbox, výběr) například pro pokyny k doručení nebo vzkaz k dárku. | coming soon (rolling out soon) | — |

Položky 8, 13, 14, 22 a 26 (market fees) mají společného jmenovatele: Shopify přidává nástroje pro obchody s více právními entitami, více markety a složitějším risk nebo compliance profilem.

---

## Co tu ještě nemáme

Z 28 položek má 7 přímou oporu v archivu (10, 11, 15, 16, 19, 22, 24). Zbylých 21 existuje zatím jen v tomto overview a ve zdroji Editions, u 13 a 18 jen jako příbuzné články z jara.

- **Shopify Protect a celý fraud blok (1 až 8)** — žádný samostatný záznam o blokování před autorizací, risk explanations, vlastních reportech, důkazech pro neautorizované chargebacky, proof of delivery, AI odpovědích ani o pravidlech s backtestingem. Chybí také regionální dostupnost, ceny a případné API.
- **Rozšíření chargeback ochrany mimo Shop Pay (4)** a **HSA/FSA přes Truemed (20)** — obě jsou coming soon a obě zjevně míří na USA.
- **Spravovaná daň z prodeje v USA (9) a ML schvalování plateb (12)** — jen jedna věta v Editions, bez podmínek způsobilosti.
- **High-value goods (14)** — nevíme, jaké zboží a které compliance kroky se myslí. Zdroj to nespecifikuje.
- **Shop Pay vedle stávajícího providera (17) a nové lokální metody (18)** — chybí seznam podporovaných zemí a providerů.
- **Shop Pay Installments v Austrálii (21) a market fees (26)** — early access, bez detailů o způsobilosti a poplatcích.
- **Vlastní checkout pole (23), thank-you animace (25), Apple Pay přes QR (27) a stacked formulář (28)** — coming soon, bez dokumentace. U vlastních polí je klíčová otázka, kam se hodnoty ukládají a jak je číst přes API.

Podrobnosti se obvykle objeví v changelogu, Help Center nebo na shopify.dev, až se položky začnou zpřístupňovat. Hub k celému releasu je níže.

---

## Související články v archivu

- [Managed Markets: ukončení DDU](/Shopify_news_magexo/zmena/managed-markets-ending-ddu-support/) a [EU zrušení a vrácení do 14 dnů](/Shopify_news_magexo/zmena/managed-markets-eu-buyer-cancellation-returns/) — kontext k Managed Markets pro EU kupující.
- [Ochrana před neočekávanými přesměrováními](/Shopify_news_magexo/zmena/checkout-protection-unexpected-redirects/) — potvrzení před odchodem z Online Store na externí web. Tematicky blízké ochraně kupujících, ale mimo seznam položek tohoto tématu.
- [Fraud prevention (Shopify blog, CZ)](/Shopify_news_magexo/zmena/blog-ecommerce-fraud-prevention/) — obecný přehled typů fraudu a chargeback managementu.

---

## Zpět na hub

Viz: [Shopify Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
