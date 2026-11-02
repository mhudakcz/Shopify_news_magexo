---
date: 2026-10-28
title: "Theme app add-ons — build + bundle apps s themes (jeden install flow, monetizace přes App Pricing)"
title_en: "Introducing theme app add-ons: Build and bundle apps with your themes"
slug: theme-app-add-ons-bundling
zdroj: https://shopify.dev/changelog/posts/introducing-theme-app-add-ons-build-and-bundle-apps-with-your-themes
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se vývojářů themes a apps v Theme Store a App Store, ne našich integračních modulů. Relevantní je, pokud pro obchody stavíme vlastní theme nebo storefrontové apps, protože app add-on je další cesta, jak theme doplnit o funkci a případně ji zpeněžit. Změna nemá žádný dopad na Admin API ani na existující synchronizace."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "editions-fall-2026-online", "script-tag-deprecation-theme-app-extensions", "app-pricing-unlimited-private-plans-target-stores"]
tldr: "Theme developeři mohou k položce v Theme Store přibalit storefrontovou app postavenou na theme app extensions. Merchant ji vidí na stránce theme s cenou a médii a může ji nainstalovat ve stejném flow jako theme. Platí limity: app musí být publikovaná, patřit stejné partner organizaci jako theme a každý theme má jen jeden add-on."
tagy: [theme-store, apps, add-ons, bundling, partners, monetization]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Theme app extensions jsou standardní způsob, jak storefrontová app doplní do theme vlastní prvky. App vytvoří app blocky, které merchant přidává v theme editoru a které se do theme integrují nativně. Shopify v changelogu jmenuje typické příklady: nástroje pro přizpůsobení a konfiguraci produktů, správu předplatných a opakovaných nákupů a pokročilé filtrování produktů, vyhledávání a wishlisty. Theme a app byly typicky dva oddělené produkty: merchant theme nainstaloval a app si pak našel a nastavil zvlášť.

    Nově mohou theme developeři takovou app přibalit k položce theme v Theme Store jako app add-on. Po publikaci app ji developer přidá k theme v Partner Dashboardu. Merchant pak na stránce theme uvidí cenu add-onu, hlavní média, název app a podtitul a při instalaci theme může app nainstalovat ve stejném flow. Zpeněžení běží přes Shopify App Pricing. Shopify neuvádí, jak přesně se cena theme a cena app na straně merchanta sčítají nebo fakturují. Že by šlo o jednu společnou platbu, ze zdroje nevyplývá a je nutné to ověřit v dokumentaci listingů.

    Změna zapadá do Editions Fall '26, kde téma Developer v bloku monetizace uvádí položku Add-ony u položek v Theme Store vedle výdělků partnerů, privátních plánů a migrace na App Pricing. Editions Fall '26 zároveň potvrzuje konec script tagů k 1. 3. 2027 s náhradou právě v theme app extensions, takže tyto extensions se stávají hlavní cestou pro storefrontové apps. Pro theme developery je to nový obchodní kanál: Shopify jim za stavbu add-onu dává prioritu ve frontě review app, standardní požadavky review ale zůstávají.
  zdroje:
    - title: "Shopify: Introducing theme app add-ons: Build and bundle apps with your themes"
      url: "https://shopify.dev/changelog/posts/introducing-theme-app-add-ons-build-and-bundle-apps-with-your-themes"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify dev docs: Build theme app extensions"
      url: "https://shopify.dev/docs/apps/build/online-store/theme-app-extensions/build"
    - title: "Shopify dev docs: Theme Store listings, sekce App add-on"
      url: "https://shopify.dev/docs/storefronts/themes/store/review-process/listings#app-add-on"
    - title: "Shopify dev docs: Shopify App Pricing"
      url: "https://shopify.dev/docs/apps/launch/billing/shopify-app-pricing"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
    - title: "Archiv: Script tag deprecation — povinná migrace na theme app extensions nebo web pixels"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/script-tag-deprecation-theme-app-extensions/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v dev changelogu z 28. 10. 2026 oznámil **theme app add-ons**. Theme developer může postavit storefrontovou app přes theme app extensions a **přibalit ji k položce theme v Theme Store**. Changelog je označený jako novinka pro Theme Store a bez nutnosti akce.

**Jak to funguje:**

- Developer vytvoří a **publikuje** storefrontovou app s theme app extension (app blocky, které se do theme integrují nativně).
- V Partner Dashboardu app **přidá k theme jako add-on**.
- Merchant vidí add-on na stránce theme v Theme Store: **cenu, hlavní média, název app a podtitul**.
- Při instalaci theme může merchant **nainstalovat app ve stejném flow**.
- Zpeněžení add-onu využívá **Shopify App Pricing**.

**Pravidla a omezení ze zdroje:**

- App musí být před přidáním k theme **publikovaná**. Může být **listed i unlisted**.
- **Partner organizace, která vlastní theme, musí vlastnit i app.** Cizí app k theme přibalit nejde.
- **Každý theme podporuje jeden app add-on**, ale stejnou app lze použít u **neomezeného počtu themes**.
- Theme developeři, kteří add-on staví, mají **prioritu ve frontě review app**. Standardní požadavky review ale platí dál.

**Co zdroj neuvádí:** žádné API, příkazy CLI ani konfigurační soubory, žádné konkrétní ceny nebo poplatky, žádný harmonogram uvolnění. Nepopisuje ani to, jak se cena theme a cena app promítne merchantovi do fakturace, ani co se stane s app, když merchant theme později vymění. Tvrzení, že jde o jednu společnou platbu, tedy nelze ze zdroje potvrdit.

## Časová osa

- **2026-10-27** — changelog vytvořen (podle metadat zdrojové stránky)
- **2026-10-28** — zveřejněno, ve stejný den vychází Editions Fall '26 s položkou Add-ony u položek v Theme Store v tématu Developer
- **Bez data** — plošná dostupnost, případné další úpravy listingů nebo review. Zdroj žádné termíny neuvádí a stav je nutné sledovat v dokumentaci Theme Store listingů

## Dopad pro nás

**Pro vývojáře:**

- Add-on je postavený na **theme app extensions**, tedy na app blocích a app embed blocích. Kdo už storefrontovou app s extension má, nemusí stavět nic nového, jen ji v Partner Dashboardu přiřadí k theme.
- Podmínka **jedna partner organizace pro theme i app** znamená, že agentura, která má theme a apps v oddělených organizacích, je musí nejdřív sjednotit.
- Limit **jeden add-on na theme** nutí vybrat tu app, která theme nejvíc doplňuje. Opačným směrem limit není, jedna app může jít s mnoha themes.
- Z našeho archivu: při spuštění Canvasu 1. 10. 2026 nebyly podporovány Theme Store themes, app blocky ani app embedy. Zda to ovlivní add-ony u themes vytvořených nebo upravovaných přes Canvas, zdroj neuvádí. Před nasazením na obchod postavený v Canvasu je to třeba ověřit.
- Nejasné body k ověření v dokumentaci listingů: chování při změně theme na obchodu, odinstalace add-onu, způsob vyúčtování a dostupnost pro konkrétní země merchanta.

**Pro PM / PO:**

- Pro partnery je to **nový obchodní kanál**: theme může přivést instalace app a app může zvednout hodnotu theme. Prioritní review urychluje cestu na trh.
- Pro merchanta se zkracuje cesta od výběru theme k funkční storefrontové app (konfigurátor produktů, předplatné, filtry, wishlist) o samostatné hledání app. To je náš výklad z popisu install flow, ne tvrzení Shopify.
- Při doporučování theme s add-onem je potřeba merchantovi předem říct, **že instalace přidá do obchodu další app s vlastní cenou**, a ověřit na stránce theme, co přesně add-on stojí.
- Do budoucna sledovat, zda Shopify doplní podrobnosti o fakturaci a zda přibude více add-onů na theme. Dnes platí limit jeden.

## Použití v Integrátoru

Přímé použití v našich modulech nevidíme: add-on se týká listingů v Theme Store a storefrontových apps, ne synchronizací přes Admin API. Relevantní je jen u projektů, kde pro obchod stavíme vlastní theme nebo storefrontovou app s theme app extension.
