---
date: 2026-10-21
title: "Jak spočítat a snížit churn rate v e-commerce"
slug: blog-churn-rate-ecommerce
zdroj: https://www.shopify.com/cz/blog/churn-rate
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Edukační obsah o retention metrikách, využitelný jako podklad pro konzultace o věrnosti zákazníků, bez přímého dopadu na existující řešení."
dotcene_klienty: []
souvisejici: [blog-ecommerce-metriky, blog-model-predplatneho-pruvodce-2026, blog-sprava-predplatneho-nejlepsi-aplikace]
tldr: "Shopify CZ blog vysvětluje, jak měřit churn rate u předplatného (vzorec s novými zákazníky) i u běžného e-shopu (kohortní model s oknem dvojnásobku průměrného intervalu mezi nákupy), uvádí orientační benchmarky a tři cesty ke snížení odchodů."
tagy: [churn-rate, retention, cls, loyalty, metriky, subscription]
zdroj_kanal: blog
kontext:
  background: |
    Článek z české verze Shopify blogu vysvětluje churn rate, tedy podíl zákazníků, kteří přestanou nakupovat, a proč na něm záleží. Motivační příklad staví na rozdílu mezi zákazníkem, který si krém za 1 000 Kč koupí jednou ročně, a tím, kdo ho kupuje každý měsíc: v druhém případě je celoživotní hodnota zákazníka (CLV) 12 000 Kč místo 1 000 Kč. Odkazuje také na výzkum Bain & Company, podle kterého může malý nárůst retence přinést výrazně větší nárůst zisku. Churn rate je nejpřirozenější u předplatného, kde zrušení označuje přesný okamžik odchodu, ale článek zdůrazňuje, že ho má smysl sledovat i v obchodech bez subscription modelu.

    Praktická část nabízí dva postupy výpočtu. Pro subscription byznys použije vzorec (zákazníci na začátku období minus zákazníci na konci období plus noví zákazníci získaní v období) děleno počtem zákazníků na začátku období. Noví zákazníci se do vzorce musí zahrnout, jinak by příliv nových kupujících zakryl skutečné ztráty stávající báze; příklad se 100 zákazníky na začátku měsíce, 105 na konci a 10 novými dává churn 5 %. Pro běžný e-shop bez zrušení předplatného článek navrhuje kohortní model: nejprve zjistit průměrný interval mezi opakovanými nákupy z exportu objednávek věrných zákazníků, pak zákazníky seskupit podle data prvního nákupu a za churnovaného považovat každého, kdo se do dvojnásobku průměrného intervalu nevrátil. Na příkladu kosmetického obchodu s intervalem tři měsíce a kohortou 1 000 zákazníků z ledna 2026, z nichž 300 nakoupilo znovu do konce července, vychází churn kohorty 70 %.

    Orientační benchmarky podle článku: u předplatného zhruba 5 % měsíčně (odkaz na výzkum Recurly), u jednorázových nákupů v oborech jako kosmetika nebo móda kolem 75 % na kohortu, tedy přibližně čtvrtina zákazníků nakoupí podruhé. Hodnoty se výrazně liší podle oboru a podle toho, jak často produkt zákazník reálně spotřebuje. Ke snížení churnu článek doporučuje tři směry: ověřit, že produkt naplňuje očekávání (rozhovory se zákazníky, spokojenostní průzkumy), sladit nákupní cyklus s reálnou spotřebou (více intervalů doručení u předplatného, automatizované e-maily a transakční zprávy s připomenutím znovuobjednání u jednorázových kupujících) a nepodcenit zákaznický servis, protože jediná špatná zkušenost nebo chybně doručená objednávka může hodnotného zákazníka poslat ke konkurenci. Na platformě Shopify zmiňuje segmentaci zákazníků podle zapojení a předplatitelské aplikace z App Store, které churn počítají automaticky. Shopify Flow, reaktivační kampaně ani vestavěný loyalty program článek výslovně nepopisuje; věrnostní programy zmiňuje jen jako obecnou retention taktiku s odkazem na samostatný text. Z našeho pohledu je Flow přirozená implementační vrstva (například tagování zákazníků po překročení okna bez nákupu a spuštění win-back komunikace), ale jde o náš komentář, nikoli o obsah článku.
  zdroje:
    - title: "Shopify: Jak spočítat a snížit churn rate v e-commerce"
      url: "https://www.shopify.com/cz/blog/churn-rate"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Článek definuje churn rate jako podíl zákazníků, kteří v daném období přestanou nakupovat, a ukazuje dva způsoby, jak ho spočítat podle typu byznysu. U subscription modelu se používá vzorec (zákazníci na začátku minus zákazníci na konci plus noví zákazníci) děleno zákazníky na začátku; klíčové je započítat nové zákazníky, jinak se skutečné ztráty schovají za akvizicí. U běžného e-shopu, kde žádné zrušení neexistuje, se doporučuje kohortní přístup: určit průměrný interval mezi opakovanými nákupy, zákazníky seskupit podle data prvního nákupu a za churnované považovat ty, kdo nenakoupili znovu do dvojnásobku tohoto intervalu.

Jako orientační benchmark uvádí zhruba 5 % měsíčního churnu u předplatného a kolem 75 % churnu kohorty u jednorázových nákupů v kosmetice či módě, s upozorněním, že hodnoty závisejí na oboru a na tom, jak často se produkt spotřebovává. Ke snížení odchodů navrhuje tři věci: ověřit, že produkt plní očekávání zákazníků, sladit nákupní cyklus s reálnou spotřebou (různé intervaly doručení, automatizované připomínací e-maily) a hlídat kvalitu zákaznického servisu. Segmentace podle zapojení zákazníků a předplatitelské aplikace z Shopify App Store se objevují jen jako podpůrné nástroje. Konkrétní Shopify funkce, jako Flow nebo vestavěný věrnostní program, článek nepopisuje.

## Pro koho je to relevantní

Článek je užitečný pro majitele a marketéry e-shopů, kteří chtějí poprvé nastavit měření retence a nevědí, jak definovat churn bez předplatného. Kohortní definice s oknem dvojnásobku průměrného intervalu je praktický výchozí bod, který jde sestavit z běžného exportu objednávek a následně rozpracovat do segmentů (kdo je v riziku, kdo už odešel). Subscription obchody v něm najdou jednoduchý vzorec a benchmark pro orientaci.

Pro nás jde o čistě edukační obsah bez dopadu na API nebo existující řešení a bez nutnosti zásahu u konkrétních obchodů. Má smysl ho použít jako podklad v konzultacích o loyalty a retention, spolu s navazujícími články o ecommerce metrikách, modelu předplatného a správě předplatného. Pokud by klient chtěl churn prevenci automatizovat, přichází v úvahu například Shopify Flow nebo zákaznické segmenty, to je ale náš návrh nad rámec článku.
