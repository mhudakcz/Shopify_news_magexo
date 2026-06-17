---
date: 2026-05-13
title: "Unified branding napříč checkout, customer accounts a sign-in"
title_en: "Unified branding customization across checkout and customer accounts"
slug: unified-branding-checkout-customer-accounts
zdroj: https://changelog.shopify.com/posts/draft-unified-branding-customization-across-checkout-and-customer-accounts
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Checkout/account branding config. Naše integrace branding nesahá."
dotcene_klienty: []
souvisejici: [customize-checkout-accounts-by-market]

kontext:
  background: |
    Branding v kontextu Shopify zahrnuje vizuální identitu obchodu — logo, barevnou paletu, typografii a styly sekcí. Checkout And Accounts Configuration API je GraphQL rozhraní dostupné výhradně pro Shopify Plus obchodníky, které umožňuje programově řídit tyto prvky přes dva klíčové objekty: design system (základní hodnoty pro barvy, spacing a typografii) a customizations (styly konkrétních UI komponent).

    Historicky bylo nastavení brandingu fragmentované: checkout, customer accounts a přihlašovací stránka měly oddělené konfigurace, takže změna loga nebo barevného schématu na jednom místě se automaticky neprojevila na ostatních. Pro obchodníky to znamenalo riziko nekonzistence — zákazník viděl jiný vizuální styl při placení než při správě svého účtu. Shopify v API verzi 2026-04 tento problém adresovalo konsolidací do jednoho unified API.

    Praktický dopad je trojí: obchodník nastaví branding jednou a změny se synchronně projeví na všech třech plochách; paleta až 20 uložených barev zjednodušuje správu brand guidelines; Shopify Plus merchanté navíc mohou definovat market-specific overrides pro různé regiony. Funkce doplňuje rostoucí ekosystém nástrojů pro customizaci zákaznické cesty — od per-market checkout až po redesign sign-in stránky.

    Trend naznačuje, že Shopify systematicky sjednocuje správu zákaznického rozhraní pod jednu konfigurační vrstvu, čímž snižuje kognitivní zátěž merchantů a zároveň otevírá prostor pro konzistentní brand experience bez nutnosti manuální synchronizace.
  zdroje:
    - title: "Shopify Changelog: Unified branding customization across checkout and customer accounts"
      url: "https://changelog.shopify.com/posts/draft-unified-branding-customization-across-checkout-and-customer-accounts"
    - title: "Shopify Dev: Checkout styling and branding"
      url: "https://shopify.dev/docs/apps/checkout/styling"
    - title: "Archiv: Checkout And Accounts Configuration API — unified branding"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/checkout-accounts-configuration-api/"
    - title: "Archiv: Redesign sign-in page customer accounts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/refreshed-signin-page-customer-accounts/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Checkout branding settings se nyní aplikují konzistentně napříč checkout, customer accounts i sign-in stránkami. Konfigurace logo / colors / typography na jednom místě, až 20 reusable brand colors."
tagy: [branding, checkout, customer-account, ui-config]
---

## Co se mění
**Branding settings** (logo, barvy, typografie) konfigurované přes Checkout And Accounts Configuration API se nyní aplikují **konzistentně napříč 3 vrstvy**:
1. **Checkout**
2. **Customer accounts**
3. **Sign-in pages**

Předtím každá vrstva měla vlastní branding config. Nově: jeden config = všude. Plus podpora pro **až 20 reusable brand colors**.

## Použití v Integrátoru
**Nepoužíváme** — branding je merchant config v Adminu.
