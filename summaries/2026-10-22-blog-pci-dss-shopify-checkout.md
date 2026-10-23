---
date: 2026-10-22
title: "Zjednodušení dodržování standardu PCI DSS pomocí Shopify Checkout"
slug: blog-pci-dss-shopify-checkout
zdroj: https://www.shopify.com/cz/blog/pci-dss
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímé API napojení se článek netýká, ale při návrhu checkout extensions a při komunikaci s Plus merchanty je užitečné vědět, že Shopify Checkout podle článku řeší PCI DSS v4 přes sandbox pro skripty a merchant nemusí dělat nic navíc."
dotcene_klienty: []
souvisejici: [blog-ecommerce-fraud-prevention, blog-prijimani-plateb-online, checkout-protection-unexpected-redirects, securing-your-app-together-shopify]
tldr: "Shopify blog tvrdí, že Shopify Checkout díky sandboxu pro externí skripty splňuje požadavky PCI DSS v4 (včetně řízení skriptů dle 6.4.3) bez další práce merchanta a bez dodatečných nákladů, a že to platí i při úpravách přes Extensions v tarifu Plus."
tagy: [pci-dss, security, compliance, checkout, payments]
zdroj_kanal: blog
kontext:
  background: |
    PCI DSS (Payment Card Industry Data Security Standard) je průmyslový standard, který určuje bezpečnostní požadavky pro každého, kdo platební karty přijímá, zpracovává nebo jejich data přenáší. Článek na českém Shopify blogu připomíná, že všechny požadavky aktuální verze PCI DSS v4.0.1 jsou závazné od 31. 3. 2025, a argumentuje, že Shopify Checkout dodržování standardu merchantům výrazně usnadňuje. Text je krátký a má spíš produktově přesvědčovací charakter než charakter technické dokumentace.

    Hlavní hrozbou, kterou článek rozebírá, je digitální skimming, tedy krádež platebních údajů přímo během platby, typicky škodlivým skriptem, který zachytí nebo nahradí vstupní pole karty. Jako příklad uvádí kampaň Magecart z roku 2019, která zasáhla 3 126 e-shopů. Standard na toto riziko reaguje požadavkem 6.4.3, který vyžaduje řízení skriptů načítaných na platebních stránkách: vést inventář schválených skriptů, ověřovat jejich integritu a mít nastavené hlášení porušení. Podle článku většina merchantů tyto skripty přehledně spravovaných nemá a merchanti mimo Shopify musí sahat po client-side bezpečnostních nástrojích, které jsou drahé a zatěžují výkon webu.

    Shopify Checkout je v textu popsán jako spravované a zabezpečené prostředí, v němž se externí skripty spouštějí v izolovaném sandboxu, takže se v něm nemůže spustit neschválený kód. Merchant tedy podle článku nemusí dělat nic navíc, Shopify požadavky spravuje za něj a platforma se aktualizuje automaticky. Úpravy checkoutu přes Extensions (dostupné v tarifu Plus) běží také v sandboxu, takže prý nevzniká kompromis v souladu s PCI DSS v4. Článek dále uvádí kapacitu až 40 000 transakcí za minutu na obchod a v FAQ tvrdí, že s tím nejsou spojené žádné dodatečné náklady. Co v textu chybí: výčet 12 požadavků standardu, typy SAQ (například SAQ-A), označení Shopify jako PCI Level 1 poskytovatele a konkrétní povinnosti merchanta. Tyto body je potřeba ověřit v oficiální dokumentaci Shopify a PCI Security Standards Council.
  zdroje:
    - title: "Shopify: Zjednodušení dodržování standardu PCI DSS pomocí Shopify Checkout"
      url: "https://www.shopify.com/cz/blog/pci-dss"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Jde o edukační a produktový článek z českého Shopify blogu, který vysvětluje, jak Shopify Checkout pomáhá merchantům splnit požadavky PCI DSS v4. Není to změna v API ani novinka v produktu, ale argumentační text, který pozicuje spravovaný checkout jako způsob, jak se vyhnout nákladné vlastní compliance práci.

Klíčové body článku:

- **Termín:** PCI DSS v4.0.1 má všechny požadavky závazné od 31. 3. 2025, takže nejde o budoucí změnu, ale o stav, který už platí.
- **Hrozba:** digitální skimming, tedy krádež údajů o kartě při platbě pomocí škodlivého skriptu. Článek cituje kampaň Magecart z roku 2019 (3 126 zasažených e-shopů).
- **Požadavek 6.4.3:** řízení skriptů na platebních stránkách. Merchant má vést inventář schválených skriptů, ověřovat jejich integritu a mít zavedený mechanismus hlášení porušení.
- **Odpověď Shopify:** externí skripty běží v izolovaném sandboxu, takže se nespustí nic neschváleného. Merchant podle článku nemusí dělat nic navíc.
- **Extensions:** přizpůsobení checkoutu přes Extensions (tarif Plus) také běží v sandboxu, a podle článku tedy neohrožuje soulad s PCI DSS v4.
- **FAQ:** žádná bezpečnostní opatření navíc, žádné dodatečné náklady a automatické aktualizace platformy.
- **Kapacita:** až 40 000 transakcí za minutu na obchod.

Co článek neříká, a na co je třeba si dát pozor při jeho čtení. Nezmiňuje typy SAQ (dotazník vlastního hodnocení, který merchant vyplňuje) ani to, který z nich se na Shopify merchanty vztahuje. Neuvádí ani formální označení Shopify jako PCI Level 1 poskytovatele, ani seznam 12 požadavků standardu. Tvrzení o certifikaci Level 1 a zjednodušeném rozsahu (SAQ-A), které se v souvislosti s tématem často objevují, proto z tohoto článku doložit nelze a je nutné je ověřit v oficiální dokumentaci Shopify a PCI SSC. Také formulace, že merchant nemusí dělat nic navíc, platí podle kontextu pro samotný Shopify Checkout. Z textu nevyplývá, že merchant je zbaven všech PCI povinností (například pro platby mimo Shopify Checkout, jiné prodejní kanály nebo vlastní headless frontend). To je náš závěr a v článku to výslovně není.

K checkout extensions článek technické detaily neuvádí. Podle naší znalosti platformy běží checkout UI extensions v izolovaném prostředí a nemají přímý přístup k polím s údaji o kartě, což s tvrzením článku souhlasí, ale nad rámec textu je to potřeba ověřit v dokumentaci pro konkrétní use case. Dostupnost úprav checkoutu přes Extensions je podle článku vázaná na tarif Plus.

## Pro koho je to relevantní

Relevantní je to hlavně pro PM, PO a obchodní rozhovory s merchanty, kteří se ptají na bezpečnost plateb, PCI DSS nebo důvody, proč zůstat na Shopify Checkout místo vlastního řešení. Článek dává srozumitelný argument pro obchodní konverzaci: skriptová bezpečnost platební stránky je u spravovaného checkoutu věc platformy, nikoli merchanta. Zároveň je dobré si pamatovat, že jde o marketingově laděný text a že formální compliance dotazník (typ SAQ) a případné certifikace je nutné doložit z oficiálních zdrojů, ne z tohoto článku.

Pro vývojáře je užitečné hlavně jako kontext při návrhu custom checkout extensions pro Plus merchanty. Omezení sandboxu (izolované spouštění, žádné libovolné skripty na platební stránce) není náhodné, ale vychází z požadavků PCI DSS v4, zejména z požadavku 6.4.3. Pokud merchant požaduje na checkoutu vlastní JavaScript, tracking pixely nebo integraci třetí strany, je rozumné počítat s tím, že funkčnost musí vejít do modelu Extensions, a ne obcházet sandbox. Pro headless nebo vlastní frontend řešení se článek nevyjadřuje a platí tam samostatná úvaha o rozsahu PCI DSS.

Přímý dopad na stávající API napojení nemá, žádná deprecation ani změna chování se tu neoznamuje a od nás není vyžadována žádná akce. Souvislosti s dalšími novinkami: o ochraně proti podvodům na checkoutu a platbách pojednává článek o e-commerce fraud prevention a o platebních základech primer pro české e-shopy. Z bezpečnostního pohledu doplňuje téma i nová ochrana proti unexpected redirects v Online Store a týdenní výzva Shopify vývojářům aplikací k bezpečnostní kontrole.
