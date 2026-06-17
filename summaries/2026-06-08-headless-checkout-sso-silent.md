---
date: 2026-06-08
title: "Headless checkout SSO: parametr sso=silent nahrazuje logged_in=true"
title_en: "Headless checkout SSO is now documented with sso=silent"
slug: headless-checkout-sso-silent
zdroj: https://shopify.dev/changelog/headless-checkout-sso-is-now-documented-with-ssosilent
shrnuto_dne: 2026-06-08

kategorie: [deprecation]
api_oblast: customer-account
api_verze: []
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-05-22
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se headless checkout SSO flow — relevantní pro klienty s custom storefront / Hydrogen."
dotcene_klienty: []
souvisejici:
  - checkout-accounts-configuration-api
  - feature-preview-customer-account-improvements
  - refreshed-signin-page-customer-accounts

kontext:
  background: |
    Headless checkout je přístup, kdy obchodník používá vlastní frontend (např. Hydrogen nebo libovolný custom storefront) a Shopify poskytuje checkout jako službu na pozadí. Součástí tohoto flow je Single Sign-On (SSO) — mechanismus, který umožňuje zákazníkovi zůstat přihlášen napříč různými částmi obchodu bez opakovaného zadávání přihlašovacích údajů.

    Customer Account API, uvedené jako součást Shopify's nové generace zákaznického účtu, pracuje s OAuth-based autentizací. Parametr, který řídil "tiché" přihlášení (tj. přihlášení bez viditelné interakce uživatele, pokud je zákazník již autentizován), byl historicky dokumentován jako `logged_in=true`. Název byl ale nekonzistentní s tím, co parametr skutečně dělá, a mohl být matoucí.

    Shopify nyní sjednotilo terminologii: parametr `sso=silent` výstižněji popisuje, že jde o pokus o tiché SSO přihlášení. Stávající URL s `logged_in=true` zůstávají plně funkční — jde čistě o dokumentační změnu, nikoliv o změnu chování API. Nové implementace by měly používat `sso=silent` pro soulad s aktuální dokumentací.

    Z pohledu adopce je tato změna relevantní zejména pro vývojáře, kteří buildují headless storefronty s Hydrogen nebo s Storefront GraphQL API a integrují zákaznické přihlášení přes Customer Account API. Pro standardní Shopify online store bez custom frontendu nemá tato změna žádný dopad.
  zdroje:
    - title: "Shopify Changelog: Headless checkout SSO sso=silent"
      url: "https://shopify.dev/changelog/headless-checkout-sso-is-now-documented-with-ssosilent"
    - title: "Shopify Docs: Customer Account API — Buyer Authentication"
      url: "https://shopify.dev/docs/api/customer"
    - title: "Shopify Changelog: Checkout And Accounts Configuration API"
      url: "https://shopify.dev/changelog/checkout-and-accounts-configuration-api-for-unified-branding-across-checkout-customer-accounts-and-sign-in"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6

tldr: "Shopify přejmenoval dokumentační parametr pro tiché SSO při headless checkoutu z logged_in=true na sso=silent; stávající URL fungují beze změny."
tagy: [sso, checkout, customer-account, hydrogen, headless]
zdroj_kanal: dev-changelog
editions_release: spring-2026
---

## Co se mění

Shopify aktualizovalo dokumentaci headless checkout SSO flow: parametr `logged_in=true`, který sloužil k aktivaci tichého single sign-on při přechodu do checkoutu, je nyní dokumentován jako `sso=silent`. Název `sso=silent` přesněji vystihuje účel — pokus o transparentní autentizaci zákazníka bez viditelné interakce, pokud je již přihlášen přes Customer Account API.

Funkčně se nic nemění. URL ve tvaru `https://checkout.shopify.com/...?logged_in=true` budou Shopify nadále zpracovávat správně. Změna se týká výhradně doporučené syntaxe v dokumentaci a nových implementací.

## Časová osa

- **2026-05-21** — Interní příprava změny (created date)
- **2026-05-22** — Efektivní datum (dokumentace aktualizována)
- **2026-06-08** — Zveřejněno v Shopify Changelogu

## Dopad pro nás

**Pro vývojáře:**
Žádná okamžitá akce není nutná — stávající implementace s `logged_in=true` fungují dál. Při tvorbě nových headless checkout integrací nebo revizi stávajícího kódu doporučujeme přejít na `sso=silent` pro konzistenci s aktuální dokumentací. Parametr je relevantní pro projekty s Hydrogen nebo custom storefront používajícím Storefront GraphQL API a Customer Account API.

**Pro PM / PO:**
Čistě technická dokumentační změna bez dopadu na uživatelské chování nebo funkce obchodu. Žádný klientský zásah není potřeba.

## Použití v Integrátoru

Relevantní pro headless / Hydrogen projekty, kde se implementuje SSO přihlášení zákazníka při přechodu do checkoutu — doporučujeme zkontrolovat použitý parametr a aktualizovat na `sso=silent` při nejbližší příležitosti.
