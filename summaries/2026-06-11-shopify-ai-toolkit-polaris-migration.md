---
date: 2026-06-11
title: "AI Toolkit pro migraci extensions na Polaris web components (deadline 1. 10. 2026)"
title_en: "Shopify AI Toolkit for upgrading extensions to Polaris web components"
slug: shopify-ai-toolkit-polaris-migration
zdroj: https://shopify.dev/changelog/shopify-ai-toolkit-for-upgrading-extensions-to-polaris-web-components
shrnuto_dne: 2026-06-16
kategorie: [deprecation, nova-prilezitost]
api_oblast: extension
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-06-11
migrace_doporucena_do: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Checkout/Customer Account UI extensions — pokud klient takové má, je potřeba migrovat."
dotcene_klienty: []
souvisejici: ["polaris-web-components-migration-guides", "shopify-ai-toolkit", "deprecation-checkout-metafields"]
kontext:
  background: |
    Polaris web components jsou nativní UI prvky Shopify design systému navržené jako náhrada za starší extension primitives postavené na Reactu a Shopify Remote UI protokolu. Nové komponenty (Button, TextField, Banner, Grid a další) jsou renderovány přímo Shopify runtime v izolovaném sandboxu — vývojáři tedy nezasahují do DOM checkoutu a nemohou obcházet brandový design obchodníka. Počínaje API verzí 2025-10 jsou Polaris web components v kombinaci s Preact výchozím přístupem pro vývoj Checkout a Customer Account UI extensions.

    Shopify přechází na tento modernější stack ze dvou hlavních důvodů: sjednocení rendering pipeline napříč celým design systémem (framework-agnostic přístup) a výrazné zrychlení načítání extensions díky menšímu bundle size. Migration guides pro tento přechod byly publikovány v květnu 2026. Na přechod se vztahuje standardní 12měsíční support window Shopify API verzí — Shopify CLI blokuje deploy extensions cílených na API verzi starší než jeden rok.

    AI Toolkit nyní přímo podporuje tento migrační proces: automatizuje konverzi React kódu na Preact, náhradu zastaralých komponent Polaris alternativami a aktualizaci extension API. Deadline pro migraci je 1. října 2026 — extensions stále na API verzi 2025-07 nebo starší po tomto datu nebudou moci přijímat aktualizace prostřednictvím Shopify CLI. Migrace přes AI Toolkit je doporučenou cestou k dodržení tohoto termínu.

  zdroje:
    - title: "Shopify Changelog: AI Toolkit for Polaris migration"
      url: "https://shopify.dev/changelog/shopify-ai-toolkit-for-upgrading-extensions-to-polaris-web-components"
    - title: "Shopify Docs: Migrate Checkout UI extensions using AI"
      url: "https://shopify.dev/docs/apps/build/checkout/migrate-to-web-components#migrate-using-ai"
    - title: "Shopify Docs: Migrate Customer Account UI extensions using AI"
      url: "https://shopify.dev/docs/apps/build/customer-accounts/migrate-to-web-components#migrate-using-ai"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify AI Toolkit nyní automatizuje migraci Checkout a Customer Account UI extensions na Polaris web components. Extensions na API verzi 2025-07 nebo starší nebudou po 1. října 2026 moci přijímat aktualizace přes Shopify CLI."
tagy: [polaris, ai-toolkit, migration, extension, checkout, deadline]
zdroj_kanal: dev-changelog
---

## Co se mění

Shopify rozšířil **AI Toolkit** o podporu migrace **Checkout a Customer Account UI extensions** na **Polaris web components** (API verze 2025-10 a novější). Toolkit využívá AI coding agenty k automatizaci migrace: převádí React kód na Preact, nahrazuje zastaralé komponenty Polaris alternativami a aktualizuje extension API. Zároveň byly rozšířeny migrační průvodci v dokumentaci s kroky specifickými pro jednotlivé komponenty.

## Časová osa

- **Nyní (červen 2026):** AI Toolkit je dostupný pro migraci; rozšířená dokumentace s migration guides.
- **1. října 2026 (tvrdý deadline):** Shopify CLI začne blokovat deploy aplikací, jejichž extensions cílí na API verzi 2025-07 nebo starší (tj. starší než 1 rok). Extensions na starší API verzi přestanou dostávat aktualizace.
- **Doporučeno:** Provést migraci na API verzi 2025-10+ co nejdříve, nejpozději do 30. září 2026.

## Dopad pro nás

Pokud klient provozuje **Checkout UI extension** nebo **Customer Account UI extension** na starší API verzi, je migrace na Polaris web components povinná před 1. říjnem 2026. AI Toolkit výrazně urychluje tento proces — zvládne automaticky konvertovat kód, který by jinak vyžadoval ruční refaktoring. Po migraci extensions renderují výrazně rychleji díky menšímu bundle size a nativnímu Shopify runtime.

## Použití v Integrátoru

**Možná relevance** — záleží na tom, zda máme nebo budeme stavět Checkout či Customer Account UI extensions pro klienty. Pokud ano, AI Toolkit je klíčový nástroj pro dodržení říjnového deadlinu. Doporučujeme zkontrolovat všechny aktivní extensions u klientů a ověřit, na jaké API verzi běží.

## Rizika a edge cases

- **Blokace deploy po deadlinu:** Extensions na API 2025-07 nebo starší neztratí funkčnost pro koncové zákazníky ihned, ale nebude možné je aktualizovat ani nasadit nové verze přes CLI — to fakticky zamrazí vývoj aplikace.
- **AI migrace není 100% automatická:** AI Toolkit zvládne bulk konverzi komponent, ale edge cases (custom logika, nestandardní použití Remote UI primitives) mohou vyžadovat manuální dočištění.
- **Preact vs. React:** Migrace zahrnuje přechod z Reactu na Preact — rozdíly jsou malé, ale mohou ovlivnit testing setup a dependency tree.
- **Souběžná deprecace checkout metafields:** Pokud extension používá checkout metafields (deprecated duben 2026), migrace na Polaris web components je vhodná příležitost provést oba přechody najednou.
