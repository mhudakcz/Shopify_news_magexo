---
date: 2026-07-09
title: "App Pricing rozšíření — až 8 public + 15 private plans, no-charge testing, fractional/negative events"
title_en: "App Pricing: more plans, no-charge plan testing, and negative and fractional App Events"
slug: app-pricing-more-plans-fractional-events
zdroj: https://shopify.dev/changelog/app-pricing-more-plans-no-charge-plan-testing-and-negative-and-fractional-app-events
shrnuto_dne: 2026-07-10
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Rozšíření limitů a nástrojů Shopify App Pricing je relevantní jen pokud bychom publikovali vlastní public app do App Store — naše integrace běží jako custom apps per klient."
dotcene_klienty: []
souvisejici: [shopify-app-pricing-usage-subscriptions, app-events-dev-dashboard, appsubscriptioncancel-partner-api]
tldr: "Shopify App Pricing nyní podporuje až 8 public a 15 private plans, testování plánů bez skutečné platby a fractional/negative hodnoty v App Events pro refundy a dobropisy."
tagy: [app-pricing, app-store, billing, plans, developer]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify App Pricing je nativní monetizační vrstva pro aplikace publikované do Shopify App Store — vývojář definuje plány a cenové modely v Partner Dashboardu a Shopify se stará o fakturaci vůči obchodníkovi včetně zobrazení v Shopify Adminu. Systém nahradil starší Managed Pricing a v posledních měsících se postupně rozšiřoval o usage-based billing napojený na App Events API.

    Tato aktualizace řeší tři samostatné bolesti vývojářů. Za prvé, limit počtu plánů (dříve 4 public a 10 private) byl pro aplikace s bohatší segmentací zákazníků (např. podle velikosti obchodu, regionu nebo feature setu) často nedostatečný — nyní jde nastavit až 8 public a 15 private plans na jednu aplikaci. Za druhé, testování placených plánů bylo dosud nepohodlné: recenzenti App Store i vývojáři na vlastních development storech museli buď vytvářet speciální testovací plány, nebo platit skutečné poplatky. Nově lze existující plány označit jako bezplatné pro testovací účely, takže recenze i interní QA probíhají na reálné konfiguraci plánů bez nutnosti duplikovat cenovou strukturu.

    Za třetí, App Events API (endpoint pro reportování usage-based eventů, které se mapují na billing metery) dosud přijímalo pouze kladná celá čísla. To znemožňovalo elegantně řešit situace jako refundy, storna nebo částečné kredity — vývojáři museli tyto korekce řešit mimo standardní tok, typicky ruční úpravou v Partner Dashboardu nebo kontaktováním podpory. Podpora záporných a desetinných hodnot (např. -1 pro storno jedné položky nebo 1.5 pro poměrnou částku) umožňuje přesnější a plně automatizované účtování přímo přes existující API.

    Změna nemá dopad na merchant-facing chování ani na existující integrace, které App Pricing nepoužívají — je to čistě rozšíření možností pro vývojáře veřejných a private Shopify aplikací.
  zdroje:
    - title: "Shopify: App Pricing: more plans, no-charge plan testing, and negative and fractional App Events"
      url: "https://shopify.dev/changelog/app-pricing-more-plans-no-charge-plan-testing-and-negative-and-fractional-app-events"
    - title: "Shopify App Pricing: usage + subscriptions billing kombinace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-app-pricing-usage-subscriptions/"
    - title: "App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify rozšiřuje **App Pricing** o tři nezávislá vylepšení:

- **Více plánů** — limit se zvyšuje ze 4 na **8 public plans** a z 10 na **15 private plans** na jednu aplikaci, což dává vývojářům víc prostoru pro segmentaci nabídky (podle velikosti obchodu, feature setu apod.).
- **No-charge testování plánů** — App Store recenzenti mohou při review vybrat existující plán bez nutnosti platit; vlastníci development storů si mohou nainstalovat vlastní app a přihlásit se na libovolný plán zdarma; vývojáři mohou libovolný plán označit jako bezplatný, aby jej mohli testovat partneři.
- **Fractional a negative App Events** — API pro usage-based billing eventy nově přijímá i **záporné hodnoty** (korekce/dobropis dříve nahlášeného využití) a **desetinná čísla** (např. 1.5), dříve byla podporována jen kladná celá čísla.

## Časová osa
- **9. 7. 2026** — funkcionalita zveřejněna v Shopify dev changelogu, dostupná okamžitě pro všechny app developery.

## Dopad pro nás
**Pro vývojáře:** Naše integrace běží jako custom apps per klient, takže App Pricing přímo nepoužíváme. Relevantní by to bylo pouze v případě, že bychom někdy publikovali vlastní public app do Shopify App Store — pak by rozšířené limity plánů i jednodušší testování ušetřily práci při konfiguraci a QA.

**Pro PM / PO:** Fractional/negative App Events dávají smysl hlavně u usage-based billing modelů (pay-per-sync, pay-per-order apod.) — pokud bychom takový model v budoucnu nabízeli, umožní to čistě řešit refundy a poměrné částky bez ručních zásahů v Partner Dashboardu.

## Použití v Integrátoru
**Možná** — přímý dopad nemá, protože naše integrace nejsou public Shopify apps s App Pricing billing modelem. Relevantní jen jako referenční informace pro případné budoucí publikování vlastní aplikace do App Store.
