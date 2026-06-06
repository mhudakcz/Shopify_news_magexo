---
date: 2026-03-23
title: "Sběr marketing consent na customer sign-in page"
title_en: "Collect marketing consent on the customer sign-in page"
slug: marketing-consent-customer-signin
zdroj: https://changelog.shopify.com/posts/collect-marketing-consent-on-the-customer-sign-in-page
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Customer Account feature. Pokud klient řeší GDPR/marketing consent flow přes naše customer methods, je to relevantní config."
kontext:
  background: |
    Marketing consent je explicitní souhlas zákazníka s přijímáním obchodních sdělení — typicky e-mailových nebo SMS newsletterů. V Shopify je modelován prostřednictvím GraphQL enumu `CustomerMarketingOptInLevel`, který rozlišuje tři stavy: `SINGLE_OPT_IN` (přímý souhlas bez potvrzení), `CONFIRMED_OPT_IN` (double opt-in vyžadující mezikrok) a `UNKNOWN` (souhlas bez zaznamenaného způsobu). Toto rozlišení vychází z doporučení M3AAWG pro správu marketingových souhlasů.

    Historicky Shopify sbíral marketing consent výhradně v průběhu checkoutu, kde zákazník před dokončením objednávky mohl zaškrtnout opt-in pole. Tím byl souhlas svázán s transakcí — zákazníci, kteří nakupují opakovaně nebo se přihlašují bez nákupu, neměli standardizovanou příležitost souhlas vyjádřit. Toto omezení motivovalo rozšíření touchpointů pro sběr souhlasu i mimo checkout flow.

    Přesunutí opt-in možnosti na sign-in page umožňuje zachytit souhlas dříve v zákaznické cestě — při přihlášení do účtu, nikoliv až při platbě. Nastavení opt-in zobrazení zůstává centralizované v sekci "Marketing opt-in" v Checkout settings Shopify adminu, což zaručuje konzistentní konfiguraci across all touchpoints. Zákazník může svůj souhlas kdykoliv změnit ze stránky vlastního profilu.

    Tento krok je součástí širší strategie Shopify rozšiřovat Customer Accounts jako plnohodnotný engagement kanál. V květnu 2026 byl opt-in checkbox přidán i do samotného account component (logged-in profil), čímž vznikají tři nezávislé touchpointy pro sběr marketingového souhlasu: checkout, sign-in a account profil.
  zdroje:
    - title: "Shopify Changelog: Collect marketing consent on the customer sign-in page"
      url: "https://changelog.shopify.com/posts/collect-marketing-consent-on-the-customer-sign-in-page"
    - title: "Shopify GraphQL API: CustomerMarketingOptInLevel enum"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel"
    - title: "Archiv: Marketing consent na account component"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-consent-account-component/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Sign-in page nyní podporuje sběr marketing consent (stejné settings jako checkout) — opt-iny se zachycují dřív v customer journey."
tagy: [customer-account, marketing-consent, gdpr]
---

## Co se mění
**Customer sign-in page** nyní umí sbírat **marketing consent** (e-mail / SMS opt-in) — stejné settings jako v checkoutu. Customer dá souhlas dřív v journey.

## Použití v Integrátoru
**Možná** — máme `updateCustomerEmailMarketingConsent` v shopify-client. Pokud klient řeší consent flow, ten field může nově být plněn dřív (před checkoutem).
