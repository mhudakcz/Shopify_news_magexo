---
date: 2026-10-28
title: "App Events z Checkout + Customer Account UI extensions (unified analytics stream)"
title_en: "App Events: Send events from Checkout and Customer Account UI extensions"
slug: app-events-checkout-customer-account-extensions
zdroj: https://shopify.dev/changelog/posts/app-events-send-events-from-checkout-and-customer-account-ui-extensions
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: ["2027-01"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo udržujeme checkout či customer account extensions, můžeme z nich bez vlastního backendu a tracking stacku posílat události o použití funkcí (nabídka zobrazena, věrnostní body uplatněny) a vidět je v Dev Dashboardu i v merchantově analytice."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, app-events-dev-dashboard, shopify-analytics-full-stack-app-platform, checkout-customer-account-extensions-dev-shops]
tldr: "Od API verze 2027-01 mohou Checkout a Customer Account UI extensions posílat App Events jedním voláním shopify.appEvents.emit(), bez síťového přístupu a bez backendu. Události po souhlasu kupujícího s analytikou končí v Dev Dashboard logs a deklarované standardní události i v Shopify Analytics."
tagy: [app-events, checkout, customer-account, analytics, ui-extensions, developer]
kontext:
  background: |
    Dosud se App Events posílaly pouze ze serveru přes App Events API: aplikace volala centrální endpoint Shopify, autentizovala se tokenem a v každém požadavku uváděla identifikátor obchodu. Událost, která vznikla přímo v checkoutu nebo v customer accountu (kupující si zobrazil nabídku, uplatnil věrnostní body, klikl na upsell), se tak musela nejdřív dostat do backendu aplikace a teprve odtud do Shopify. Od API verze 2027-01 mohou Checkout UI extensions i Customer Account UI extensions posílat události přímo pomocí metody `shopify.appEvents.emit()`, která přijímá handle události a volitelné atributy. Extension nepotřebuje síťový přístup ani vlastní backend a Shopify k události samo doplní aplikaci i obchod, takže není nutný přístupový token ani shop ID.

    Změna zapadá do širší linie, kterou Shopify v Editions Fall '26 pojmenovává jako analytiku jako platformu pro apps: události z extensions končí ve stejném proudu jako události z App Events API, takže je vývojář vidí společně v Dev Dashboard logs. Navíc mohou extensions posílat standardní události deklarované pro Shopify Analytics, které se pak zobrazí merchantovi v analytice. Editions Fall '26 tuto položku uvádí v Developer tématu jako logování app events z UI extensions jedním řádkem kódu a v části pro merchanty jako app events v analytics. Navazuje na dřívější články o App Events v Dev Dashboardu a o full-stack analytické platformě pro apps.

    Pro merchanty a vývojáře je přínos v tom, že data z checkoutu a customer accountu lze sbírat bez další tracking infrastruktury. Zároveň platí důležitá omezení: události se odesílají jen po souhlasu kupujícího se zpracováním analytiky, platí rate limit (burst 20 událostí, poté 2 za sekundu), atributy nesmí obsahovat osobní údaje a události z UI extensions se nezpracovávají pro účtování. Pro usage-based billing v rámci Shopify App Pricing je proto dál nutné posílat billing události z backendu aplikace. Server App Events API se nemění a aplikace bez těchto extensions nejsou dotčené.
  priklad: |
    // shopify.extension.toml: api_version = "2027-01"

    const result = shopify.appEvents.emit("offer_viewed", {
      offer_id: "summer_bundle",
      placement: "order_summary",
    });
    // při neodeslání (neplatná událost, překročený rate limit)
    // vrací emit() objekt { success: false, error }
  zdroje:
    - title: "Shopify: App Events: Send events from Checkout and Customer Account UI extensions"
      url: "https://shopify.dev/changelog/posts/app-events-send-events-from-checkout-and-customer-account-ui-extensions"
    - title: "Shopify Docs: Checkout UI extension events"
      url: "https://shopify.dev/docs/api/app-events/2027-01/checkout-ui-extension-events"
    - title: "Shopify Docs: Customer Account UI extension events"
      url: "https://shopify.dev/docs/api/app-events/2027-01/customer-account-ui-extension-events"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
    - title: "Archiv: Shopify Analytics: full-stack platforma pro apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-analytics-full-stack-app-platform/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Checkout UI extensions a Customer Account UI extensions získávají od API verze 2027-01 nové API `shopify.appEvents`. Metoda `shopify.appEvents.emit()` přijme handle události a volitelné atributy a událost odešle do Shopify. Extension k tomu nepotřebuje síťový přístup ani backend aplikace. Shopify k události samo přidá aplikaci i obchod, takže se nepracuje s přístupovým tokenem ani se shop ID.

Odeslané události se zobrazují v **Dev Dashboard logs** vedle událostí z původního serverového App Events API. Extension může kromě vlastních událostí posílat i **standardní události deklarované pro Shopify Analytics**, které pak vidí merchant v analytice v adminu.

Jak to zapnout:

- v `shopify.extension.toml` nastavit `api_version` na `2027-01` (nebo novější),
- zavolat `shopify.appEvents.emit()` v místě, kde událost vzniká,
- extension přidat na stránky checkoutu nebo customer accountu v development store, provést testovací nákup a událost ověřit v Dev Dashboard logs.

Co je potřeba vědět o chování:

- **Souhlas kupujícího:** Checkout i Customer Account události odešlou až poté, co kupující povolí zpracování analytiky. Do té doby se drží na stránce a pokud kupující souhlas odmítne nebo stránku opustí, neodešlou se vůbec.
- **Rate limit:** burst 20 událostí, poté 2 události za sekundu.
- **Chybové stavy:** když se událost neodešle (je neplatná nebo je překročený limit), `emit()` vrátí `{success: false, error}`.
- **Soukromí:** do atributů události se nesmí dávat osobní údaje.
- **Billing:** události z UI extensions se nezpracovávají pro účtování. Pro Shopify App Pricing je nutné dál posílat billing události z backendu aplikace.
- **Co se nemění:** serverové App Events API zůstává beze změny, aplikace bez těchto extensions nejsou dotčené a checkouty v aplikaci Shop extension události neposílají.

Příklad scénáře: extension s věrnostním programem zaloguje uplatnění bodů v checkoutu jako událost. Pokud je událost deklarovaná jako standardní pro Shopify Analytics, objeví se v analytice vedle dat o objednávkách, bez vlastního tracking stacku. U čistě vlastních událostí zdroj uvádí zobrazení v Dev Dashboard logs.

## Časová osa

- **28. 10. 2026** — zveřejnění v dev changelogu (označeno jako New), součást Developer tématu Editions Fall '26.
- **API verze 2027-01** — první verze, ve které `shopify.appEvents` v extensions existuje. Datum stabilního vydání verze zdroj neuvádí, proto je potřeba ověřit její dostupnost v CLI a v development store.
- **Extensions na starších API verzích** — `shopify.appEvents` nemají a bez zvýšení `api_version` je nelze použít.
- **Bez termínu povinné akce** — jde o volitelné API, nic se neruší ani nevyprší.

## Dopad pro nás

**Pro vývojáře:** Použití je jednoduché (jedno volání bez backendu), ale podmínkou je zvýšit `api_version` extension na 2027-01. Před zvýšením verze je potřeba projít ostatní změny dané verze pro konkrétní extension a ověřit chování na development store. V kódu je nutné počítat s tím, že `emit()` může vrátit `{success: false, error}`, že události bez souhlasu kupujícího nikdy neodejdou (naměřená čísla tedy nejsou úplná) a že platí rate limit. Do atributů nepatří osobní údaje. Billing události zůstávají na backendu.

**Pro PM / PO:** Merchant může mít v analytice na jednom místě data z checkoutu a customer accountu spolu s daty objednávek, aniž by se přidával další tracking nástroj. Hodí se pro měření toho, jak kupující využívají funkce z extensions (nabídky, věrnostní body, upsell, samoobsluha v účtu). Při plánování reportingu je třeba počítat s tím, že data pokrývají jen kupující, kteří dali souhlas s analytikou, a že se v analytice zobrazují deklarované standardní události. U ostatních jsou k dispozici Dev Dashboard logs pro vývojáře. Nejde o náhradu měření konverzí ani fakturace usage.

## Použití v Integrátoru

Přímo to integrační logiku nemění, protože jde o frontendovou vrstvu checkoutu a customer accountu. Dává smysl tam, kde pro projekt stavíme vlastní checkout nebo customer account extensions a chceme sledovat jejich využití bez nového backendu.

## Související

- [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [App Events: usage a performance data v Dev Dashboardu](/Shopify_news_magexo/zmena/app-events-dev-dashboard/)
- [Shopify Analytics: full-stack platforma pro apps](/Shopify_news_magexo/zmena/shopify-analytics-full-stack-app-platform/)
- [Checkout a Customer Account extensions na dev shops](/Shopify_news_magexo/zmena/checkout-customer-account-extensions-dev-shops/)
