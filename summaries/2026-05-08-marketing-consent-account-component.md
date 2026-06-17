---
date: 2026-05-08
title: "Sběr marketing consent na account component (nikoli jen sign-in page)"
title_en: "Collect marketing consent on the account component"
slug: marketing-consent-account-component
zdroj: https://changelog.shopify.com/posts/collect-marketing-consent-on-the-account-component
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme customer methods včetně updateCustomerEmailMarketingConsent. Account component je nový enrollment touchpoint pro marketing consent."
dotcene_klienty: []
souvisejici: [marketing-consent-customer-signin]

kontext:
  background: |
    Account component je přihlášená část Customer Account UI — stránka profilu zákazníka dostupná po úspěšném přihlášení. Na rozdíl od sign-in page (přihlašovací formulář) zobrazuje tento komponent informace o objednávkách, adresách a nastavení účtu. Jde o standardizovaný prvek, který Shopify spravuje centrálně mimo téma obchodu, čímž je dostupný nezávisle na customizaci frontendu.

    Marketing consent je v Shopify modelován jako strukturovaný souhlas zachycený přes GraphQL enum `CustomerMarketingOptInLevel`. Ten rozlišuje tři stavové hodnoty: `SINGLE_OPT_IN` (přímý souhlas), `CONFIRMED_OPT_IN` (dvoukolový souhlas s potvrzujícím krokem) a `UNKNOWN` (způsob souhlasu není znám). Tato granularita vychází z doporučení M3AAWG a pomáhá obchodům prokazovat soulad s regulacemi jako GDPR nebo CAN-SPAM. Souhlas lze aktualizovat přes mutaci `customerEmailMarketingConsentUpdate` v Admin GraphQL API.

    Doplnění opt-in checkboxu do account component uzavírá třetí bod v postupné expanzi touchpointů: souhlas lze nyní zachytit v checkoutu, na sign-in page (od března 2026) i na profilu přihlášeného zákazníka. Tím je konzistentní sběr souhlasu zajištěn napříč celou zákaznickou cestou bez nutnosti vlastního řešení. Nastavení zobrazení checkboxu je sdílené pro všechny touchpointy a konfiguruje se na jednom místě v Shopify adminu (Settings → Checkout → Marketing opt-in).

  zdroje:
    - title: "Shopify Changelog: Collect marketing consent on the account component"
      url: "https://changelog.shopify.com/posts/collect-marketing-consent-on-the-account-component"
    - title: "Shopify GraphQL API: CustomerMarketingOptInLevel enum"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel"
    - title: "Archiv: Marketing consent na sign-in page"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-consent-customer-signin/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Account component (Customer Account UI) nyní obsahuje marketing opt-in checkbox pod e-mail polem — zákazníci se mohou přihlásit k marketing newsletteru přímo z účtu, ne jen ze sign-in page."
tagy: [customer-account, marketing-consent, gdpr]
---

## Co se mění
**Account component** v Customer Account UI (logged-in customer profil) má nově **marketing opt-in checkbox** pod e-mail polem. Pokud zákazník zaškrtne, je automaticky přidán do email marketing subscriber list.

Rozšiřuje předchozí feature **Marketing consent on sign-in page** o další touchpoint.

## Dopad pro nás
**Pro vývojáře:**
Naše `updateCustomerEmailMarketingConsent` queries / mutace mohou nově dostávat stav opt-in i z account flow (nejen sign-in). Žádný kódový dopad, jen širší zdroj consent.

## Použití v Integrátoru
**Možná** — pokud klient řeší marketing consent flow, tohle je další vstupní bod.

## Související
- [Marketing consent na sign-in page](../zmena/marketing-consent-customer-signin/)
