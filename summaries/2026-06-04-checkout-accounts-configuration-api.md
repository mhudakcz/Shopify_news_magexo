---
date: 2026-06-04
title: "Checkout And Accounts Configuration API — unified branding"
title_en: "Checkout And Accounts Configuration API for unified branding"
slug: checkout-accounts-configuration-api
zdroj: https://shopify.dev/changelog/checkout-and-accounts-configuration-api-for-unified-branding-across-checkout-customer-accounts-and-sign-in
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Plus-only branding API. Naše integrace nesahá na checkout branding config."
dotcene_klienty: []
souvisejici: [unified-branding-checkout-customer-accounts, refreshed-signin-page-customer-accounts]

kontext:
  background: |
    Checkout And Accounts Configuration API je GraphQL rozhraní dostupné od verze 2026-04 výhradně pro Shopify Plus obchody. Zavádí novou mutaci `checkoutAndAccountsConfigurationUpdate`, která nahrazuje dříve používanou `checkoutBrandingUpsert` — ta je nyní označena jako deprecated. Vstupní typ `CheckoutBrandingInput` pracoval s dvěma vrstvami: `designSystem` (globální hodnoty barev a typografie) a `customizations` (styly konkrétních UI komponent); nové API tuto strukturu zachovává, ale rozšiřuje ji o `surfaces` model.

    Klíčová architektonická novinka je právě model povrchů (surfaces): konfiguraci lze rozdělovat na `surfaces.checkout`, `surfaces.customerAccounts` a `surfaces.signIn`. Každý povrch může mít vlastní přepsání loga nebo barev, zatímco sdílené hodnoty v `designSystem` platí globálně. Tím se eliminuje potřeba udržovat tři oddělené profily nebo volat různé endpointy pro každou část zákaznické cesty. Součástí je také paleta až 20 pojmenovaných barev v HEX formátu, které lze referencovat z libovolného povrchu a aktualizovat hromadně jedním voláním.

    Pro vývojáře aplikací to znamená migraci ze starého `checkoutBrandingUpsert` workflow: místo `checkoutProfileId` jako povinného parametru pracuje nové API s konfigurací na úrovni obchodu. Funkce market-specific overrides pak umožňuje definovat odlišný branding pro různé geografické trhy — obchodník tak může provozovat jednotný globální brand s lokálními variacemi bez nutnosti oddělených Plus účtů.

    Tento krok navazuje na sérii změn z jara 2026, kdy Shopify postupně konsolidoval editor checkoutu, customer accounts a sign-in stránky do jedné konfigurační vrstvy přístupné jak přes Admin UI, tak přes GraphQL API.
  zdroje:
    - title: "Shopify Dev Changelog: Checkout And Accounts Configuration API for unified branding"
      url: "https://shopify.dev/changelog/checkout-and-accounts-configuration-api-for-unified-branding-across-checkout-customer-accounts-and-sign-in"
    - title: "Shopify Admin GraphQL: checkoutBrandingUpsert (deprecated)"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert"
    - title: "Archiv: Unified branding napříč checkout, customer accounts a sign-in"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/unified-branding-checkout-customer-accounts/"
    - title: "Archiv: Customizace checkoutu a customer accounts per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Nové unified API (2026-04) konsoliduje checkout profile a branding APIs pro Shopify Plus — konzistentní branding napříč checkout, customer accounts i sign-in. Market-specific overrides. _Původně publikováno 13. 5. 2026 (audit doplnění)._"
tagy: [checkout, branding, customer-account, plus, configuration-api]
---

## Co se mění
API verze **2026-04** zavádí **Checkout And Accounts Configuration API** — konsoliduje rozházené APIs pro:
- Checkout profil
- Customer accounts branding
- Sign-in stránku
- Market-specific customization

Plus merchanti tak řídí branding 3 vrstev z jednoho API.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Nepoužíváme** — Plus branding feature. Pro klienty s Plus + multi-market reference.
