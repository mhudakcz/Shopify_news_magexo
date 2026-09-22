---
date: 2026-09-21
title: "Shopify App Pricing: neomezené private plans a store-specific targeting"
title_en: "Unlimited private plans and target stores in Shopify App Pricing"
slug: app-pricing-unlimited-private-plans-target-stores
zdroj: https://shopify.dev/changelog/unlimited-private-plans-and-target-stores-in-shopify-app-pricing
shrnuto_dne: 2026-09-22
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Private plans a store-specific targeting v App Pricing se týkají vývojářů public/private Shopify apps s vlastní monetizací — naše integrace běží jako custom apps per klient bez App Store billing, relevantní jen referenčně."
dotcene_klienty: []
souvisejici: [app-pricing-migration-tool, app-pricing-more-plans-fractional-events, shopify-app-pricing-usage-subscriptions]
tldr: "Shopify App Pricing zrušil limity 15 private plans a 20 stores per plan — vývojáři teď mohou vytvářet neomezeně vlastních cenových plánů a cílit je na libovolný počet konkrétních obchodů, což usnadňuje enterprise deals a negotiated pricing."
tagy: [app-pricing, app-store, private-plans, enterprise, monetization]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify App Pricing je nativní monetizační vrstva pro aplikace v Shopify App Store — vývojář definuje plány a cenové modely v Partner Dashboardu a Shopify se stará o zobrazení plánů, výběr a fakturaci vůči obchodníkovi. Vedle standardních veřejných plánů (public plans, viditelných všem potenciálním zákazníkům v App Store) systém podporuje i private plans — cenové nabídky omezené jen na konkrétní, vývojářem vybrané merchant stores, které se nezobrazují veřejně. Private plans se typicky používají pro individuálně dojednané podmínky, pilotní nasazení nebo speciální ceny pro vybrané klienty.

    Dosud však private plans podléhaly dvěma tvrdým limitům: nejvýše 15 private plans na aplikaci a nejvýše 20 store-specific targets na jeden plán. Pro vývojáře s větším portfoliem enterprise zákazníků nebo s potřebou jemnější segmentace (např. odlišné podmínky pro každý Plus store, různé pilotní ceny při postupném rollout) to znamenalo, že museli plány sdružovat, recyklovat nebo ručně spravovat workaroundy mimo App Pricing. Tato aktualizace oba limity zcela odstraňuje — počet private plans i počet cílených store per plán je nyní neomezený, bez nutnosti jakékoli migrace u již existujících plánů.

    Rozšířené možnosti se promítají i do migračního CLI nástroje (aktuálně v Early Access programu), který pomáhá vývojářům přejít ze staršího manuálního Billing API na Shopify App Pricing — i tam nově platí stejné neomezené limity pro private plans a jejich cílení. Zájemci o Early Access se mohou přihlásit přes formulář nebo nastudovat oficiální migrační dokumentaci. Změna nemá dopad na merchant-facing chování ani na existující integrace, které App Pricing nepoužívají — jde čistě o rozšíření možností pro vývojáře veřejných a private Shopify aplikací s vlastní monetizací.
  zdroje:
    - title: "Shopify: Unlimited private plans and target stores in Shopify App Pricing"
      url: "https://shopify.dev/changelog/unlimited-private-plans-and-target-stores-in-shopify-app-pricing"
    - title: "Migrační nástroj pro App Pricing — generuj/edituj/testuj nové plány z Billing API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-migration-tool/"
    - title: "App Pricing rozšíření — až 8 public + 15 private plans, no-charge testing, fractional/negative events"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-more-plans-fractional-events/"
    - title: "Shopify App Pricing: usage + subscriptions billing kombinace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-app-pricing-usage-subscriptions/"
  generated_at: 2026-09-22T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify odstranil oba dosavadní limity pro **private plans** ve **Shopify App Pricing**:

- **Neomezený počet private plans na aplikaci** — dříve platil strop 15 private plans, nově žádný.
- **Neomezený počet store-specific targets na plán** — dříve nejvýše 20 obchodů na jeden plán, nově libovolně mnoho.

Private plan je custom cenová nabídka viditelná jen pro vývojářem vybrané merchant stores — nezobrazuje se veřejně v App Store a umožňuje individuálně dojednané podmínky. Existující private plans nevyžadují žádnou migraci, rozšířené limity platí okamžitě i pro ně. Stejné neomezené limity se promítají i do migračního CLI nástroje (Early Access), který pomáhá při přechodu ze staršího manuálního Billing API.

## Časová osa
- **21. 9. 2026** — limity zrušeny a zveřejněny v Shopify dev changelogu, platí okamžitě pro všechny vývojáře App Pricing.
- Návaznost na **9. 7. 2026** (rozšíření na 8 public / 15 private plans) a **7. 7. 2026** (migrační nástroj z Billing API) — tato aktualizace jde nad rámec obou a limit private plans zcela ruší.

## Dopad pro nás
**Pro vývojáře:** Naše integrace fungují jako custom apps per klient mimo Shopify App Store, takže App Pricing přímo nepoužíváme. Relevantní by to bylo jen v případě vlastní public/private aplikace v App Store s potřebou individuálního cenění pro velké množství konkrétních obchodů.

**Pro PM / PO:** Neomezené private plans se store-specific targeting jsou zajímavé hlavně jako referenční informace pro budoucí monetizační strategie (enterprise deals, pilotní ceny, negotiated tiers) — v tuto chvíli nevyžaduje žádnou akci směrem ke klientům, protože se netýká custom integrací na míru.

## Použití v Integrátoru
**Možná** — přímý dopad nemá, protože naše integrace nejsou public/private Shopify apps s App Pricing billing modelem. Relevantní jen jako referenční informace pro případné budoucí publikování vlastní aplikace do App Store s enterprise/negotiated pricing.
