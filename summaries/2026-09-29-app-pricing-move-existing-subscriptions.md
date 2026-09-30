---
date: 2026-09-29
title: "Migrace stávajících subscriptions na Shopify App Pricing (self-service tool)"
title_en: "Move existing subscriptions to Shopify App Pricing"
slug: app-pricing-move-existing-subscriptions
zdroj: https://shopify.dev/changelog/posts/move-existing-subscriptions-to-shopify-app-pricing
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Migrace se týká vývojářů apps s existujícími Billing API subscriptions v Shopify App Store — naše integrace běží jako custom apps per klient bez App Store billingu, takže je to relevantní jen referenčně."
dotcene_klienty: []
souvisejici: [app-pricing-migration-tool, app-pricing-unlimited-private-plans-target-stores, app-pricing-more-plans-fractional-events]
tldr: "Apps s existujícími Billing API subscriptions je teď můžou sami přesunout na Shopify App Pricing přes Partner Dashboard (jednoduché případy) nebo přes CLI příkazy shopify app subscription-migrations (usage billing, úpravy cen, private plans) — subscriptions se přesunou na začátku dalšího billing cyklu a merchanti nemusí znovu schvalovat charges."
tagy: [app-pricing, subscriptions, migration, billing-api, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify App Pricing je nativní monetizační vrstva pro aplikace v Shopify App Store. Vývojář v ní definuje cenové plány v Partner Dashboardu a Shopify se stará o jejich zobrazení, výběr, správu předplatného i fakturaci vůči obchodníkovi. Nahrazuje starší přístup, kdy si vývojáři plány a poplatky skládali ručně přes Billing API bez jednotného zobrazení v App Store a v Shopify Adminu. Cílem je sjednotit monetizaci napříč celým App Store, aby obchodníci viděli konzistentní UI bez ohledu na to, kterou aplikaci instalují.

    Přechod se dosud dělil do několika fází. Dne 7. 7. 2026 přibyl do Partner Dashboardu migrační nástroj, který z existujících Billing API plánů vygeneroval návrhy App Pricing plánů a umožnil je upravit a otestovat na development storech — bez dopadu na živé subscriptions. Následovala rozšíření limitů (až 8 public a 15 private plans, později neomezené private plans a store-specific targeting). Zásadní otázkou ale zůstávalo, jak přesunout už aktivní merchant subscriptions, aniž by je obchodníci museli znovu schvalovat.

    Nový changelog z 29. 9. 2026 tuto mezeru zaplňuje: vývojáři mohou existující subscriptions přesunout sami. Postup má dvě větve. Jednoduché subscriptions zvládne Partner Dashboard jedním klikem. Složitější typy (usage-based billing, cenové úpravy, private plans) se řeší přes Shopify CLI příkazy shopify app subscription-migrations. Subscriptions se přesouvají na začátku svého dalšího billing cyklu a obchodníci nemusí charges znovu schvalovat. Aplikace, které už Shopify App Pricing používají, změna nijak neovlivňuje. Je to další krok směrem k jednotnému App Pricing ekosystému, který postupně nahrazuje ruční správu přes Billing API.
  zdroje:
    - title: "Shopify: Move existing subscriptions to Shopify App Pricing"
      url: "https://shopify.dev/changelog/posts/move-existing-subscriptions-to-shopify-app-pricing"
    - title: "Migrační nástroj pro App Pricing — generuj/edituj/testuj nové plány z Billing API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-migration-tool/"
    - title: "Shopify App Pricing: neomezené private plans a store-specific targeting"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-unlimited-private-plans-target-stores/"
    - title: "App Pricing rozšíření — až 8 public + 15 private plans, no-charge testing, fractional/negative events"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-more-plans-fractional-events/"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify zpřístupnil **self-service migraci existujících subscriptions** ze starého **Billing API** na **Shopify App Pricing**. Dosud šlo hlavně o přípravnou fázi (generování, editace a testování plánů); nově lze přesunout i už aktivní merchant subscriptions. Migrovat je možné dvěma cestami:

- **Partner Dashboard** — nástroj s migrací na jedno kliknutí pro jednoduché subscriptions.
- **Shopify CLI** — příkazy `shopify app subscription-migrations` pro složitější případy: usage-based billing, cenové úpravy a private plans. Pokud app používá typy subscriptions, které Partner Dashboard nástroj nezvládne, je CLI jediná cesta.

Klíčové vlastnosti migrace: subscriptions se přesouvají **na začátku svého dalšího billing cyklu** a obchodníci **nemusí charges znovu schvalovat**. Předpokladem je, že v Partner Dashboardu existují odpovídající App Pricing plány k původním Billing API subscriptions. Doporučený postup je plány nejprve vytvořit a otestovat na development storech, pak migrovat jednoduché subscriptions nástrojem, složité přes CLI a nakonec ověřit, že se přesunuly a správně fakturují, než se migrace rozšíří na další část zákaznické báze. Apps, které už App Pricing používají, nejsou dotčeny.

## Časová osa
- **7. 7. 2026** — migrační nástroj v Partner Dashboardu pro přípravu plánů (generování, editace, testování; bez dopadu na živé subscriptions).
- **9. 7. 2026** — rozšíření limitů plánů a fractional/negative events v App Pricing.
- **21. 9. 2026** — zrušeny limity pro private plans a store-specific targeting, včetně migračního CLI.
- **29. 9. 2026** — zveřejněna self-service migrace už existujících subscriptions (Partner Dashboard + CLI); přesun probíhá od začátku dalšího billing cyklu každé subscription.

## Dopad pro nás
**Pro vývojáře:** Naše integrace běží jako custom apps per klient mimo Shopify App Store, takže Billing API ani App Pricing pro merchant billing nepoužíváme a migrace se nás přímo netýká. Relevantní by byla jen v případě, že bychom někdy publikovali vlastní public app s App Store monetizací — pak stojí za zapamatování, že přechod lze udělat bez re-approvalu charges ze strany merchantů a že složité modely (usage, private plans) vyžadují CLI.

**Pro PM / PO:** Žádná akce směrem ke klientům není potřeba. Jde o referenční informaci pro případné budoucí monetizační plány nebo pro rozhovory s klienty, kteří provozují vlastní aplikace v App Store — migrace je pro jejich merchanty bez tření, ale vyžaduje předem připravené a otestované plány.

## Použití v Integrátoru
**Možná** — přímý dopad nemá, protože naše integrace nejsou public/private Shopify apps s Billing API subscriptions. Slouží jen jako referenční informace pro případné budoucí publikování vlastní aplikace do App Store.
