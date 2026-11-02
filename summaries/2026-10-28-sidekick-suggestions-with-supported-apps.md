---
date: 2026-10-28
title: "Sidekick suggestions: integrace s 3rd party apps (data z apps v recommendations)"
title_en: "Sidekick suggestions now work with supported apps"
slug: sidekick-suggestions-with-supported-apps
zdroj: https://changelog.shopify.com/posts/get-sidekick-recommendations-using-supported-app-data
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o merchant-side funkci v adminu bez API povrchu, který by naše moduly volaly. Týká se nás nepřímo: u obchodů, které spravujeme, ovlivňuje hodnotu aplikací v jejich stacku (loyalty, recenze, e-mail marketing) a při výběru aplikací dává smysl zohlednit, zda mají podporovanou Sidekick extension."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-sidekick", "sidekick-app-extensions-third-party", "sidekick-app-extensions-app-store-requirements", "sidekick-floating-chat-admin-home", "sidekick-simgym-tested-recommendations"]
tldr: "Sidekick suggestions (doporučení na úvodní stránce adminu) nově umí čerpat data z nainstalovaných aplikací, které mají podporované Sidekick app extensions, a mají tak úplnější kontext obchodu. Podmínkou je nainstalovaná aplikace, dostupná oprávnění a to, že aplikace sdílí použitelná data. Changelog nejmenuje žádné aplikace a neuvádí harmonogram, plány ani regiony."
tagy: [sidekick, apps, integration, recommendations, ai, agentic]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Sidekick suggestions, v Help Centeru označované jako Sidekick Pulse, jsou doporučení, která Sidekick proaktivně skládá z dat obchodu a zobrazuje jako karty s navrženou akcí na úvodní stránce adminu (podle Help Centeru nejvýše pět najednou). Změna z 28. října 2026 říká, že tyto návrhy mohou nově využívat i data z nainstalovaných aplikací, které mají podporované Sidekick app extensions. Aby aplikace data do návrhů přispěla, musí být nainstalovaná, musí být dostupná potřebná oprávnění a aplikace musí sdílet použitelná data. Aplikace bez podporované extension data Sidekickovi nesdílí.

    Strategicky na to navazuje cesta, kterou Shopify buduje od Editions Spring '26. Tehdy vznikl framework Sidekick app extensions, přes který třetí aplikace (Klaviyo, Judge.me, Smile, Loop a další) zpřístupnily Sidekickovi vlastní data a akce, ale hlavně pro dotazy a úkony v konverzaci. V Editions Fall '26 v tématu Sidekick přibyla položka Guidance from Sidekick on more of your store, která mluví o doporučeních zohledňujících nainstalované aplikace a webový průzkum oboru. Zda je tento changelog právě její konkrétní podobou, Shopify výslovně neříká; podle popisu je to ale nejpravděpodobnější vysvětlení. Mění se tím role app extensions: nejsou jen kanálem pro otázky merchanta, ale i zdrojem kontextu pro doporučení, která Sidekick vytváří sám od sebe.

    Pro merchanty a partnery je důležité rozlišit potvrzené a domýšlené. Changelog nejmenuje žádnou konkrétní aplikaci, nepopisuje, jaké typy dat se do návrhů dostanou, a neuvádí harmonogram, regiony ani plány. Help Center k Pulse uvádí, že funkce je dostupná jen pro některé obchody s nedávnými prodeji a vyžaduje aktivní Shopify Network Intelligence; o příspěvku dat z aplikací se v době zpracování nezmiňuje. Příklady typu loyalty aplikace, která pomůže cílit kampaň na nejvěrnější zákazníky, jsou proto naše ilustrace, nikoli tvrzení ze zdroje.
  zdroje:
    - title: "Shopify: Sidekick suggestions now work with supported apps"
      url: "https://changelog.shopify.com/posts/get-sidekick-recommendations-using-supported-app-data"
    - title: "Shopify Help Center: Sidekick suggestions (Pulse)"
      url: "https://help.shopify.com/manual/ai-powered-tools/sidekick/pulse"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Podle changelogu z 28. října 2026 (štítky Improvement a Admin) může Sidekick při tvorbě návrhů využít data z nainstalovaných aplikací, které mají podporované Sidekick app extensions. Návrhy tak vycházejí z úplnějšího obrazu obchodu, ne jen z dat, která drží samotný Shopify. Sdílet data se Sidekickem mohou jen aplikace s podporovanými extensions.

Aby aplikace do návrhů přispěla, musí být splněny tři podmínky:

1. aplikace je v obchodě nainstalovaná,
2. jsou dostupná potřebná oprávnění,
3. aplikace sdílí použitelná data.

Sidekick suggestions jsou podle Help Centeru karty na úvodní stránce adminu (nejvýše pět najednou). Kliknutí na návrh otevře konverzaci se Sidekickem, který z něj připraví seznam úkolů, a živý obchod se bez schválení merchanta nemění. Návrhy týkající se theme může Sidekick před aplikací otestovat v SimGymu na nepublikované kopii theme; to je navazující funkce popsaná v [Sidekick + SimGym](/Shopify_news_magexo/zmena/sidekick-simgym-tested-recommendations/).

Co je potvrzené a co ne:

- **Potvrzeno changelogem:** návrhy mohou využívat data z aplikací s podporovanými extensions; podmínkou je instalace, oprávnění a sdílená použitelná data.
- **Nepotvrzeno, zdroj neuvádí:** názvy podporovaných aplikací, typy dat, která se do návrhů dostanou, to, jak se příspěvek aplikace v návrhu projeví, a dostupnost (harmonogram, regiony, plány).
- **Naše ilustrace, ne tvrzení ze zdroje:** loyalty aplikace by mohla Sidekickovi dodat kontext o věrných zákaznících a návrh by pak mohl směřovat k cílení kampaně na ně. Totéž lze představit u recenzí nebo e-mail marketingu. Jaká data jednotlivé aplikace skutečně sdílejí, záleží na jejich extension.
- **Z Help Centeru k Pulse:** funkce je dostupná jen pro některé obchody s nedávnými prodeji, vyžaduje aktivní Shopify Network Intelligence a použít ji může vlastník obchodu nebo člen týmu s přístupem do adminu. Help Center o datech z aplikací mlčí, takže nevíme, zda se tato omezení přenášejí beze změny.

## Časová osa

- 2026-06-17: Editions Spring '26, spuštěn framework Sidekick app extensions s první sadou aplikací ([Sidekick napojený na třetí aplikace](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/))
- 2026-06-17: nová pravidla App Store 2.2.8 a 2.2.9 pro Sidekick extensions ([App Store requirements](/Shopify_news_magexo/zmena/sidekick-app-extensions-app-store-requirements/))
- 2026-09-28: extension s pouhými intents je způsobilá pro Sidekicka ([app intents bez tools](/Shopify_news_magexo/zmena/sidekick-invoke-app-intents-without-tools/))
- 2026-10-28: Editions Fall '26, téma Sidekick (mimo jiné položky o doporučeních s ohledem na aplikace a o personalizovaném úvodu adminu)
- 2026-10-28: changelog Sidekick suggestions now work with supported apps; harmonogram nasazení ani status dostupnosti zdroj neuvádí

## Dopad pro nás

**Pro vývojáře:**
Změna nemá žádný nový API ani extension povrch a na naší straně není co implementovat. Zajímavá je pro každého, kdo stojí za aplikací se Sidekick extension: extension se z kanálu pro dotazy a akce mění i na zdroj kontextu pro proaktivní návrhy, takže její kvalita a soulad s funkcí aplikace (viz pravidlo 2.2.8 o funkčním souladu) nově ovlivňují, jak užitečný kontext Sidekick dostane. Changelog neříká, co přesně má extension deklarovat, aby její data šla do návrhů (tools, intents, nebo něco třetího); to je potřeba dohledat v dokumentaci na shopify.dev/docs/apps/build/sidekick, případně vyzkoušet na vývojovém obchodu. Dále je potřeba ověřit, jak se do oprávnění promítají scopes aplikace a jaká data merchant sdílením povoluje, protože jde o data zákazníků a prodejů, která opouštějí aplikaci směrem k Sidekickovi.

**Pro PM / PO:**
U obchodů se stackem typu loyalty, recenze nebo e-mail marketing se nabízí argument, že aplikace s podporovanou Sidekick extension přidává hodnotu i mimo vlastní rozhraní, protože může zlepšit doporučení na úvodní stránce adminu. Při výběru nebo doporučování aplikací stojí za to sledovat, zda mají Sidekick extension, jen jako jedno z kritérií vedle funkcí a ceny. Merchantům zatím neslibovat konkrétní podobu návrhů ani jejich přínos: nevíme, které aplikace a jaká data se zapojí ani kdy a komu bude funkce k dispozici. Doporučení je vyzkoušet na vlastním obchodě s nainstalovanou podporovanou aplikací a teprve podle toho psát argumenty do nabídek. Pro obchody, kde aplikace žádnou podporovanou extension nemají, se podle zdroje nic nemění.

## Použití v Integrátoru

Funkce nemá API povrch a do našich modulů nezasahuje. Využijeme ji poradensky: při skladbě aplikací pro obchody, které spravujeme, zohledníme podporu Sidekick extensions a v adminu ověříme, jak návrhy s daty aplikací vypadají.

## Související

- [Sidekick napojený na třetí aplikace](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/) — framework, který data z aplikací do Sidekicka přivádí
- [Nové App Store requirements pro Sidekick app extensions](/Shopify_news_magexo/zmena/sidekick-app-extensions-app-store-requirements/) — pravidla, která extensions musí splnit
- [Sidekick invokuje app intents bez tools](/Shopify_news_magexo/zmena/sidekick-invoke-app-intents-without-tools/) — jednodušší cesta, jak extension zpřístupnit Sidekickovi
- [Sidekick: floating chat a personalizovaný úvod adminu](/Shopify_news_magexo/zmena/sidekick-floating-chat-admin-home/) — místo, kde se návrhy merchantovi zobrazují
- [Sidekick + SimGym](/Shopify_news_magexo/zmena/sidekick-simgym-tested-recommendations/) — testování návrhů před použitím
- [Editions Fall '26: Sidekick — téma](/Shopify_news_magexo/zmena/editions-fall-2026-sidekick/) — celý přehled tématu

## Zpět na hub

[Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
