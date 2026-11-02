---
date: 2026-10-28
title: "App Events v Shopify Analytics (apps posílají events co se zobrazí v custom reports)"
title_en: "Make your app's activity reportable in Shopify Analytics with App Events"
slug: app-events-reportable-analytics-general
zdroj: https://shopify.dev/changelog/posts/app-events-in-analytics
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo udržujeme vlastní aplikaci, jejíž aktivita je pro merchanta důležitá (věrnostní body, recenze, chat, odesílané e-maily), můžeme ji bez vlastní datové pipeline zobrazit v jeho Shopify Analytics. Pro čistě integrační logiku bez vlastní aplikace to dopad nemá."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, app-events-checkout-customer-account-extensions, app-events-dev-dashboard, shopify-analytics-full-stack-app-platform]
tldr: "Aplikace mohou deklarovat události v extension analytics_app_events a posílat je přes App Events API. Merchant je pak vidí v report builderu Shopify Analytics a může se na ně ptát v ShopifyQL přes FROM app_events, vedle nativních dat obchodu."
tagy: [app-events, analytics, shopifyql, custom-reports, apps, developer]
kontext:
  background: |
    App Events API je rozhraní, přes které aplikace posílají do Shopify události o své vlastní aktivitě. Dosud tyto události sloužily hlavně vývojáři v Dev Dashboard logs a pro usage-based účtování. Tento changelog přidává další cíl: události lze udělat reportovatelné v Shopify Analytics, takže je uvidí i merchant. Postup má tři kroky. Vývojář deklaruje události v extension typu `analytics_app_events` v souboru `shopify.extension.toml`, konfiguraci vydá příkazem `shopify app deploy` a pak přes App Events API posílá odpovídající události pro obchody, kde je aplikace nainstalovaná. Události existují ve třech druzích: standardní (Shopify definuje běžné typy, například odeslaný e-mail), vlastní (aplikace si definuje vlastní atributy a metriky) a rozšířené standardní (standardní událost doplněná o atributy a metriky aplikace).

    Merchant pak metriky a dimenze aplikace najde v report builderu Shopify Analytics a může se na ně dotazovat v ShopifyQL pomocí `FROM app_events`, například `FROM app_events SHOW emails_sent TIMESERIES day`. Události se v analytice objeví až po zpracování, takže nejsou dostupné okamžitě. Změna navazuje na širší linii Shopify Analytics jako platformy pro apps, kterou popisuje červencový článek o full-stack analytice (model, query, embed, enrich), kde byly App Events zmíněné jako early access. V Editions Fall '26 je položka uvedená jako app events v analytics a patří do stejné vlny jako odesílání událostí z checkout a customer account UI extensions.

    Pro merchanty je přínos v tom, že aktivita třetích aplikací (například uplatněné věrnostní body, publikované recenze, chatové konverzace) získá v jejich reportingu stejné postavení jako objednávky, zákazníci a sessions, bez vlastního exportu do BI nástroje. Pro vývojáře je přínos v tom, že odpadá budování samostatné datové pipeline pro reporting aplikace. Akce není povinná: Shopify uvádí, že stávající integrace App Events nepotřebují žádné změny, pokud vývojář nechce, aby se jeho události zobrazovaly v analytice. Důležité omezení je, že události musí odpovídat vydané deklaraci pro Analytics a že události z Dev Dashboard logs nebo z účtování se do analytiky samy nedostanou.
  zdroje:
    - title: "Shopify: Make your app's activity reportable in Shopify Analytics with App Events"
      url: "https://shopify.dev/changelog/posts/app-events-in-analytics"
    - title: "Shopify Docs: App Events in Analytics"
      url: "https://shopify.dev/docs/apps/build/app-events/analytics"
    - title: "Shopify Docs: Configure Analytics App Events"
      url: "https://shopify.dev/docs/apps/build/app-events/analytics/toml-configuration"
    - title: "Shopify Docs: Standard event registry"
      url: "https://shopify.dev/docs/apps/build/app-events/analytics/standard-event-registry"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Shopify Analytics: full-stack platforma pro apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-analytics-full-stack-app-platform/"
    - title: "Archiv: App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Aplikace mohou nově udělat svou aktivitu viditelnou v Shopify Analytics. Události, které aplikace posílá přes App Events API, se dají zobrazit merchantovi v analytice vedle nativních dat obchodu.

Jak to zapnout:

1. V `shopify.extension.toml` deklarovat události v extension typu `analytics_app_events`.
2. Konfiguraci vydat příkazem `shopify app deploy`.
3. Přes App Events API posílat odpovídající události pro obchody, kde je aplikace nainstalovaná.

Příklad deklarace standardní události o odeslaném e-mailu:

```toml
[[extensions]]
type = "analytics_app_events"
handle = "app-events"

[[extensions.events]]
name = "shopify.marketing.email_sent"
kind = "standard"
```

Tři druhy událostí:

- **Standardní** — události definované Shopify pro běžné typy aktivit, například odeslaný e-mail. Seznam je ve standard event registry v dokumentaci.
- **Vlastní** — události, které si aplikace definuje sama, včetně vlastních atributů a metrik.
- **Rozšířené standardní** — standardní událost, ke které aplikace přidá vlastní atributy a metriky.

Jak je merchant uvidí:

- v **report builderu** Shopify Analytics jako metriky a dimenze aplikace,
- v **ShopifyQL** přes `FROM app_events`, například `FROM app_events SHOW emails_sent TIMESERIES day`.

Co je potřeba vědět:

- Události se v analytice objeví až po zpracování.
- Odesílané události musí odpovídat vydané deklaraci Analytics App Events.
- Události z Dev Dashboard logs ani z účtování se do analytiky automaticky nedostanou.
- Stávající integrace App Events nepotřebují žádné změny, pokud vývojář nechce události v analytice zobrazit. Shopify u změny uvádí, že akce není vyžadována.

Zdrojový článek neuvádí názvy mutací, požadované scopes, limity objemu ani minimální plán nebo verzi aplikace, a nemá uvedenou API verzi. Podrobnosti je proto potřeba ověřit v dokumentaci App Events API. Pojem custom reports zdroj výslovně nepoužívá, mluví o report builderu a o dotazech v ShopifyQL.

## Časová osa

- **květen 2026** — App Events API pro usage a performance data v Dev Dashboardu (viz archiv).
- **červenec 2026** — App Events zmíněné jako early access v rámci full-stack analytické platformy pro apps.
- **28. 10. 2026** — zveřejnění v dev changelogu (označeno jako New, povrch API, dotčené API: App Events API), součást vlny Editions Fall '26.
- **28. 10. 2026** — datum účinnosti; API verze zdroj neuvádí.
- **Bez termínu povinné akce** — jde o volitelnou možnost, nic se neruší ani nevyprší.

## Dopad pro nás

**Pro vývojáře:** Pokud aplikace už posílá události přes App Events API, stačí přidat deklaraci `analytics_app_events`, vydat ji přes `shopify app deploy` a zajistit, aby odesílané události odpovídaly deklaraci. Pro běžné typy aktivit (například odeslané e-maily) je k dispozici standardní událost, pro specifické případy vlastní nebo rozšířená standardní. Před nasazením je dobré ověřit v dokumentaci chybějící údaje: scopes, limity objemu a to, jak dlouho trvá zpracování událostí. Stojí za to počítat s tím, že události určené pouze do Dev Dashboard logs nebo pro účtování se do analytiky samy nepřenesou a je nutné je deklarovat a posílat zvlášť.

**Pro PM / PO:** Pro merchanta to znamená, že aktivita aplikací (věrnostní body, recenze, chaty, marketingové e-maily) může být v jeho reportingu vedle objednávek, zákazníků a sessions. Při návrhu nové funkce v aplikaci to dává argument, že reporting nemusíme stavět jako vlastní dashboard nebo export, ale můžeme využít analytiku Shopify, včetně dotazů v ShopifyQL. Zároveň je dobré s merchanty předem ujasnit, které metriky mají dávat smysl, protože události se budou zobrazovat jen ty, které aplikace deklaruje a pošle.

## Použití v Integrátoru

Možná. Dává smysl tam, kde pro projekt stavíme nebo udržujeme vlastní aplikaci a merchant chce její aktivitu vidět v reportech. Pro čistě integrační logiku bez vlastní aplikace to nemá přímý dopad.

## Související

- [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [App Events z Checkout + Customer Account UI extensions](/Shopify_news_magexo/zmena/app-events-checkout-customer-account-extensions/)
- [App Events: usage a performance data v Dev Dashboardu](/Shopify_news_magexo/zmena/app-events-dev-dashboard/)
- [Shopify Analytics: full-stack platforma pro apps](/Shopify_news_magexo/zmena/shopify-analytics-full-stack-app-platform/)
