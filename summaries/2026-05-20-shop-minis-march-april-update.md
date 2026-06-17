---
date: 2026-05-20
title: "Shop Minis březen/duben 2026 update — optional consent, intents, runtime permissions"
title_en: "Shop Minis March April 2026 update"
slug: shop-minis-march-april-update
zdroj: https://shopify.dev/changelog/shop-minis-march-april-2026-update
zdroj_kanal: dev-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-21

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shop Minis SDK changes. Neimplementujeme Shop Minis."
dotcene_klienty: []
souvisejici: [shop-minis-february-2026-update]

kontext:
  background: |
    Shop Minis je framework Shopify pro tvorbu miniaturních aplikací (React Native) spouštěných přímo uvnitř mobilní aplikace Shop. Vývojáři k nim přistupují přes dedikované SDK s hooky, komponentami a CLI — miniaplikace se zobrazují zákazníkům v kontextu prohlížení produktů nebo obchodů, aniž by museli opouštět aplikaci.

    Správa oprávnění v mobilních aplikacích tradičně funguje na principu "vše nebo nic" — uživatel buď udělí všechna požadovaná práva, nebo aplikaci opustí. Shopify postupně zavádí granulárního modelu inspirovaného oprávněními iOS/Android: od únorových consent flows (2026) přes optional consent, až po oddělení Shopify scopes od systémových oprávnění OS (kamera, fotogalerie).

    Intents přidávají nový způsob spouštění Shop Minis: namísto přímého vstupu uživatele se miniaplikace spustí z relevantního kontextu v Shop app — například z detailu produktu s záměrem `try_on` (virtuální zkouška) nebo `view_in` (AR vizualizace). Tato distribuce rozšiřuje dosah miniaplikací bez nutnosti, aby je uživatel aktivně hledal.

    Souběžné změny zahrnují také omezení localStorage (migrace na useAsyncStorage, max 10 klíčů) a nové pole availableForSale na variantách produktů, které zpřesňují práci s dostupností zboží.
  zdroje:
    - title: "Shop Minis March/April 2026 Update — Shopify Changelog"
      url: "https://shopify.dev/changelog/shop-minis-march-april-2026-update"
    - title: "Shop Minis únor 2026 update — Shopify Changelog"
      url: "https://shopify.dev/changelog/shop-minis-february-2026-update"
    - title: "Shop Minis únor 2026 update (archiv)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shop-minis-february-2026-update/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shop Minis podporují optional consent (uživatel může odmítnout scope a pokračovat). Nové hooks useCheckScopesConsent / useRequestScopesConsent / useCheckPermissions pro runtime permission checks. Intents pro contextual distribuci."
tagy: [shop-minis, mobile, consent, permissions]
---

## Co se mění
**Shop Minis** (mini-app framework v Shop app) update:
- **Optional consent** — uživatel může odmítnout scope a aplikace pokračuje s omezenou funkcionalitou
- Nové **runtime permission hooks**:
  - `useCheckScopesConsent` — zjistit, co user povolil
  - `useRequestScopesConsent` — explicit request
  - `useCheckPermissions` — runtime check kombinace
- **Intents** — Shop Minis se spouští z relevantních kontextů (např. product detail → otevřít related Mini)

## Použití v Integrátoru
**Nepoužíváme** — Shop Minis framework.

## Související
- [Shop Minis únor 2026 update](../zmena/shop-minis-february-2026-update/)
