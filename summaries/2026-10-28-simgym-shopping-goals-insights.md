---
date: 2026-10-28
title: "SimGym: shopping goals — simulace celé nákupní cesty, hledání produktů a jistoty při přidání do košíku + vizuální doporučení"
title_en: "SimGym adds shopping goals with more actionable insights"
slug: simgym-shopping-goals-insights
zdroj: https://changelog.shopify.com/posts/simgym-adds-shopping-goals-with-more-actionable-insights-and-visual-guidance
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "SimGym je merchant-side nástroj v Shopify adminu bez API povrchu, který naše moduly nevolají. Využijeme ho procesně: u obchodů, které spravujeme, lze před nasazením změn nebo po redesignu nechat simulované nakupující projít konkrétní cíl (nákupní cestu, hledání produktů, jistotu při přidání do košíku) a použít číslovaná doporučení jako podklad pro UX ladění."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-sidekick", "sidekick-simgym-tested-recommendations", "simgym-ai-store-analysis", "simgym-deep-theme-analysis"]
tldr: "SimGym vedle porovnání theme nově umí spustit simulaci s konkrétním shopping goalem: celá nákupní cesta, objevování produktů nebo jistota při přidání do košíku. Doporučení mají číslovaný marker přímo na dané stránce a k nim se otevře souhrn návštěvy AI nakupujícího včetně playback videí, kde narazil na tření. Post neuvádí plány, ceny ani limity a nemluví o metrikách typu AOV nebo retention."
tagy: [simgym, sidekick, ai, testing, conversion, insights, shopping-goals, "fall-2026"]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    SimGym je Shopify aplikace pro testování obchodu pomocí simulovaných nakupujících. AI nakupující s realistickými profily procházejí storefront stejně jako živý návštěvník a výstupem jsou nahrávky průchodů a doporučení seřazená podle dopadu. Od března 2026 běží v AI Research Preview, v červnu 2026 (Editions Spring '26) přibyla samostatná analýza libovolného theme se zaměřením na vybrané oblasti obchodu a nahrávkami nakupujících. Podle archivu funguje jen na Liquid storefrontech a každá simulace spotřebuje kredit.

    Changelog z 28. října 2026 přidává do SimGymu nový způsob zadání. Vedle porovnání theme lze simulaci spustit s konkrétním shopping goalem, tedy s otázkou, kterou má AI nakupující v obchodě zodpovědět. Post uvádí tři cíle: celé nákupní cesty (kde je největší tření), objevování produktů (zda obchod dovede nakupujícího k tomu, co hledá) a jistotu při přidání do košíku (zda detail produktu dává dost informací k nákupu). Zároveň jsou doporučení přímější. Každé má číslovaný marker na místě relevantní stránky, takže je vidět, kde změnu provést, a otevře se k němu souhrn návštěvy AI nakupujícího s playback videi, která ukazují místa tření i věci, na které nakupující reagoval pozitivně.

    Post vyšel ve stejný den jako Editions Fall '26, ale Editions ani Sidekick nezmiňuje. Souvislost s tématem Sidekick, kde Sidekick navrhuje vylepšení obchodu a testuje je v SimGymu, je náš výklad: obě novinky posilují stejný směr, tedy ověřovat změny simulací dřív než na živých zákaznících. Je také důležité, co post neříká. Neuvádí cenu, plány, regiony, způsobilost, limity použití ani časový plán nasazení. Nemluví o metrikách typu průměrná hodnota objednávky, retention nebo CLV a neuvádí číselný odhad dopadu doporučení. Cíle jsou popsány jako chování nakupujícího, ne jako obchodní metriky. Podrobnosti může obsahovat nápověda SimGymu.
  zdroje:
    - title: "Shopify: SimGym adds shopping goals with more actionable insights"
      url: "https://changelog.shopify.com/posts/simgym-adds-shopping-goals-with-more-actionable-insights-and-visual-guidance"
    - title: "Shopify Help: SimGym simulations"
      url: "https://help.shopify.com/en/manual/online-store/simgym#simulations"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

SimGym, aplikace pro testování obchodu s AI nakupujícími, dostává v changelogu z 28. října 2026 dvě změny: nové zaměření simulací (shopping goals) a konkrétnější výstup.

**Nové shopping goals.** Vedle porovnání theme lze simulaci spustit s jedním z těchto cílů:

- **Celé nákupní cesty** — AI nakupující procházejí obchodem od začátku do konce a odhalují největší místa tření.
- **Objevování produktů** — AI nakupující prohlížejí obchod a ověřují, zda je dovede k produktům, které odpovídají tomu, co hledají.
- **Jistota při přidání do košíku** — AI nakupující posuzují, zda informace u produktu stačí k tomu, aby se rozhodli koupit.

**Konkrétnější doporučení a hlubší vhled.**

- Doporučení jsou podle postu přímější a použitelnější. Každé má číslovaný marker, který ukazuje na místo na příslušné stránce, kde je potřeba změnu udělat.
- U každého doporučení je odkaz na souhrn návštěvy AI nakupujícího.
- Playback videa ukazují, kde nakupující narazil na tření a co mu naopak vyhovovalo.

**Co post neuvádí.** Cena, plány, regiony, způsobilost, limity a časový plán nasazení nejsou v postu zmíněny. Nejsou v něm ani metriky jako průměrná hodnota objednávky, retention nebo CLV a ani číselný odhad dopadu doporučení. Cíle jsou formulovány jako chování nakupujícího. Z dřívějších záznamů v archivu víme, že SimGym funguje na Liquid storefrontech (Hydrogen a headless nejsou podporovány), vyžaduje aktivní Shopify Network Intelligence a že simulace se platí kredity. Zda to platí beze změny i pro shopping goals, post nepotvrzuje.

## Časová osa

- 2026-03-11 — SimGym spuštěn v AI Research Preview pro všechny eligible merchanty
- 2026-03-26 — Hloubková analýza jednoho theme v izolaci
- 2026-06-17 — Editions Spring '26: samostatná analýza libovolného theme, focus areas, nahrávky nakupujících
- 2026-10-28 — Editions Fall '26: Sidekick testuje svá doporučení v SimGymu a merchant vybírá, co použije
- 2026-10-28 — Changelog: shopping goals (celá cesta, objevování produktů, jistota při přidání do košíku), číselně označená doporučení a playback videa. Post formuluje změnu jako současný stav, plán nasazení neuvádí.

## Dopad pro nás

**Pro vývojáře:**
Změna je čistě merchant-side a nemá API ani extension povrch, takže není co implementovat. Prakticky se hodí jako rychlý audit před předáním nebo po úpravě theme. Číslovaný marker ukazuje přímo na místo ve stránce, takže doporučení lze převést na konkrétní úkol v theme bez dlouhého dohledávání. Playback videa pomohou při diskusi s merchantem, protože ukazují, kde se nakupující zasekl. Je potřeba ověřit v adminu, zda platí dosavadní omezení (pouze Liquid, kredity za simulaci) a zda lze nový cíl spustit i nad konceptem theme. Simulovaný nakupující není skutečný zákazník, takže výsledek nenahrazuje A/B test ani vlastní QA.

**Pro PM / PO:**
Pro merchanty s nižší návštěvností, kde A/B testy nemají dost dat, je to srozumitelný způsob, jak se zeptat na konkrétní problém. Například proč lidé nepřidávají do košíku (cíl jistota při přidání do košíku) nebo zda se k produktům dobře dostanou (cíl objevování produktů). Jako argument v rozhovoru se zákazníkem držme potvrzeného: tři cíle, číslovaná doporučení, souhrn návštěvy a videa. Neslibovat nárůst konverzí ani odhad dopadu na tržby ani hodnotu objednávky, protože post nic takového neuvádí. Před nabídnutím jako služby je vhodné jednu simulaci vyzkoušet na vlastním nebo demo obchodě a zjistit cenu v kreditech a skutečný tvar výstupu.

## Použití v Integrátoru

Funkce nemá API povrch a do našich modulů nezasahuje. Využijeme ji procesně: u obchodů, které spravujeme, lze před spuštěním nebo po redesignu nechat SimGym projít zvolený cíl a číslovaná doporučení použít jako podklad pro UX úpravy.

## Související

- [Sidekick + SimGym: otestuje návrhy před aplikací](/Shopify_news_magexo/zmena/sidekick-simgym-tested-recommendations/) — stejný směr z Editions Fall '26: návrh změny a jeho ověření simulací v jednom kroku
- [SimGym: AI simulovaný shopper analyzuje libovolný theme](/Shopify_news_magexo/zmena/simgym-ai-store-analysis/) — nástroj ze Spring '26, na kterém shopping goals stavějí
- [SimGym: deep analýza theme](/Shopify_news_magexo/zmena/simgym-deep-theme-analysis/) — předchůdce samostatné analýzy
- [Editions Fall '26: Sidekick — téma](/Shopify_news_magexo/zmena/editions-fall-2026-sidekick/) — přehled tématu, do kterého novinku zasazujeme

## Zpět na hub

[Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
