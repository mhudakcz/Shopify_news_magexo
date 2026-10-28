---
date: 2026-10-28
title: "Managed sales tax (US) — Shopify calc + collect + remit US state sales tax automaticky"
title_en: "Managed sales tax (US)"
slug: managed-sales-tax-us-automated
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Výpočet i odvod daně probíhá uvnitř Shopify Tax a Editions k položce neuvádí žádné API, takže na straně integrace se nic nerozbíjí. Dotkne se nás jen u amerických obchodů, kde synchronizujeme daňové řádky, refundy nebo tax reporty do ERP či účetnictví, případně kde se dosud používala aplikace třetí strany pro výpočet a odvod daně."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-payments", "us-tax-calculation-fulfillment-location-routing", "tax-return-shipping-fees-us"]
editions_release: fall-2026
tldr: "Editions Fall '26 uvádí, že u obchodů nových na platformě Shopify spočítá správnou daň v checkoutu, vybere ji a odvede každému státu USA. Pokrývá tedy celý cyklus sales tax, ne jen výpočet. Stránka neuvádí způsobilost nad rámec nových obchodů, poplatky, seznam států ani API a nezmiňuje nexus ani aplikace třetích stran. Pro české značky s expanzí do USA je to zajímavý signál, ale hlavně téma k ověření."
tagy: [sales-tax, us, nexus, tax-remittance, compliance, enterprise]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions Fall '26 (název Exponential) vyšlo 28. října 2026. V tématu Payments je mezi položkami o daních sekce, kterou zdrojová stránka nazývá Shopify Tax managed for you. Jedna věta v ní říká, že pro obchody nové na platformě Shopify spočítá správnou daň v checkoutu, vybere ji a odvede ji každému státu v USA. K sekci patří ilustrace karty Shopify Tax se stavem managed, vybranými státy, obdobím září 2026 a ukázkovými částkami tržeb a vybrané daně. Stránka k položce neuvádí stavový štítek (live, coming soon, early access), datum, cenu ani API. V našem přehledu tématu Payments je položka vedena jako live.

    Americká sales tax je specifická tím, že ji neukládá federální stát, ale jednotlivé státy a místní jurisdikce, každá s vlastními sazbami, výjimkami a lhůtami pro podání přiznání. Obchodník proto řeší čtyři oddělené úkoly: zjistit, ve kterých státech mu vznikla povinnost daň vybírat (obecně podle takzvaného nexus, tedy fyzické přítomnosti nebo překročení prahu obratu či počtu transakcí), spočítat správnou sazbu u každé objednávky, daň vybrat a nakonec ji státu odvést a podat přiznání. Shopify Tax dosud pokrýval hlavně výpočet a přehledy. Nová položka podle popisu na stránce zahrnuje i vybrání a odvod, tedy celý životní cyklus.

    Nexus, aplikace třetích stran (například Avalara nebo TaxJar) ani registrace u jednotlivých států zdrojová stránka nezmiňuje. Úvahy o tom, že managed varianta může nahradit externí daňovou aplikaci a že zohledňuje nexus, jsou naše interpretace a je potřeba je ověřit v Help Center. Položka navazuje na dřívější změny v archivu: výpočet US daně podle fulfillment location, který Editions uvádí hned vedle jako Tax by ship-from location, a daň z return shipping fees od 23. 10. 2026.
  zdroje:
    - title: "Shopify Editions Fall '26 (Payments)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Payments"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-payments/"
    - title: "Archiv: US daňový výpočet dle fulfillment location"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/us-tax-calculation-fulfillment-location-routing/"
    - title: "Archiv: daň z return shipping fees (US)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/tax-return-shipping-fees-us/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

V tématu Payments uvádí Fall '26 položku, kterou stránka popisuje jako Shopify Tax managed for you. Podstata je jedna věta: pro obchody nové na platformě Shopify **spočítá správnou daň v checkoutu, vybere ji a odvede ji každému státu v USA**. Rozdíl proti dosavadnímu Shopify Tax je v tom, že se nekončí u výpočtu. Shopify přebírá i druhou polovinu procesu, tedy samotný odvod daně státům.

Co z popisu plyne:

- **Celý cyklus na jednom místě** — výpočet u každé objednávky, výběr od kupujícího a odvod státu. Podle formulace stránky nemusí obchodník daň sám podávat a posílat po státech.
- **Přehled v adminu** — ilustrace u položky ukazuje kartu Shopify Tax se stavem managed, vybranými státy, obdobím (září 2026) a částkami tržeb a vybrané daně. Je to ukázka, ne specifikace.
- **Souvislost s výpočtem podle místa odeslání** — hned vedle stojí bod, že se US daň počítá podle lokace, ze které objednávka odchází, a sazby zůstávají správné při expedici z více míst. Detaily jsou v [článku o fulfillment location](/Shopify_news_magexo/zmena/us-tax-calculation-fulfillment-location-routing/).

**Co stránka neříká** (a proč je to důležité):

- **Kdo je způsobilý.** Zmiňuje se jen formulace pro obchody nové na platformě. Zda se to týká i stávajících obchodů, které později začnou prodávat do USA, nebo obchodů přecházejících z jiné platformy, není uvedeno.
- **Jak je to s nexus a registrací.** Stránka nexus nezmiňuje. Neříká ani, zda Shopify státům i registruje obchodníka, nebo zda musí mít obchodník daňové registrace v jednotlivých státech předem. Obecně vzniká povinnost vybírat daň podle nexus pravidel každého státu, takže tohle je ta nejdůležitější otázka k ověření.
- **Odpovědnost a cena.** Není uvedeno, kdo ručí za chybně odvedenou daň, ani jestli se za službu platí.
- **Rozsah států, tarify a dostupnost mimo USA.** Zda to funguje pro obchod s evropskou právnickou osobou, který prodává americkým zákazníkům, stránka nespecifikuje.
- **Stav a datum.** Samotná sekce nemá štítek ani datum. V našem přehledu tématu je položka vedena jako live, to je ale potřeba potvrdit v Help Center.
- **Náhrada aplikací třetích stran.** Avalara, TaxJar ani podobné nástroje stránka nezmiňuje. Že managed varianta může jejich roli převzít, je naše úvaha, ne tvrzení Shopify.
- **API.** K položce není uvedeno žádné API ani webhook.

## Časová osa

- **2026-05-13** — Shopify Tax rozšířen na Kanadu ([shopify-tax-canada](/Shopify_news_magexo/zmena/shopify-tax-canada/))
- **2026-08-24** — US daň se počítá podle fulfillment location z order routing ([us-tax-calculation-fulfillment-location-routing](/Shopify_news_magexo/zmena/us-tax-calculation-fulfillment-location-routing/))
- **2026-10-23** — daň z return shipping fees u US objednávek ([tax-return-shipping-fees-us](/Shopify_news_magexo/zmena/tax-return-shipping-fees-us/))
- **2026-10-28** — Editions Fall '26: Shopify spočítá, vybere a odvede US sales tax každému státu (pro obchody nové na platformě); datum dostupnosti ani štítek stavu u položky neuvedeny

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné. Změna probíhá uvnitř Shopify Tax a Editions k ní neuvádí žádné API. Zbývá několik věcí, které stojí za kontrolu u každého amerického obchodu, kde pracujeme s daněmi:

- **Zdroj pravdy pro daň.** Pokud dnes počítáme nebo dopočítáváme daň mimo Shopify (vlastní daňové řádky, úpravy částek, výpočet přes externí službu), je potřeba si předem ujasnit, že u obchodu v managed režimu to musí dělat jen jedna strana. Jinak hrozí dvojí započtení, podobně jako u [daně z return shipping fees](/Shopify_news_magexo/zmena/tax-return-shipping-fees-us/).
- **Synchronizace do ERP a účetnictví.** Pokud exportujeme daňové řádky, refundy nebo tax reporty, ověřit, že se po zapnutí managed režimu tvar ani obsah dat nemění. Odvod daně státům se v účetnictví obchodníka projeví jinak než dosavadní ruční platby, to ale řeší účetní, ne API.
- **Aplikace třetích stran.** Pokud obchod používá externí daňovou aplikaci a zvažuje přechod, je to migrace s dopadem na checkout, objednávky a reporty, kterou je nutné plánovat, ne jen zapnout.
- **Dokumentace.** Dokud nevyjde changelog nebo dokumentace na shopify.dev, nelze říct, zda se stav managed nebo odvodu dá číst přes API. Sledovat.

**Pro PM / PO:** Příležitost je u českých a evropských značek, které plánují nebo zvažují prodej do USA. Největší překážkou bývá právě sales tax: sazby po státech, hlídání prahů, registrace, podávání přiznání. Pokud Shopify tuto zátěž opravdu převezme, snižuje to náklady a riziko vstupu na americký trh a je to argument do rozhovorů o US expanzi. Zároveň je to hypotéza: nevíme, jestli se to vztahuje na obchod provozovaný z ČR, jestli jsou nutné registrace předem ani kolik to stojí.

Doporučený postup: u obchodů, které prodávají nebo plánují prodávat do USA, se zeptat, jak dnes řeší sales tax (aplikace, účetní, vůbec). Potom ověřit v Help Center způsobilost, rozsah států, cenu a odpovědnost za odvod, a teprve pak cokoli doporučovat. Pro ostatní obchody je to jen informace. Pro EU se nic nemění, DPH a OSS se tím netýká.

Nalehavost je střední. Žádný termín neběží, ale rozhodnutí o prodeji do USA se obvykle dělá s předstihem a otázka daní patří mezi první.

## Použití v Integrátoru

**Možná** — samotná funkce je uvnitř Shopify Tax a nevyžaduje změnu v naší integraci. Relevantní je u amerických obchodů, kde synchronizujeme daňové částky nebo reporty do ERP či účetnictví, nebo kde se doposud daň řešila externí aplikací.
