---
date: 2026-06-13
title: "Shop User Metafields v Shopify Functions"
title_en: "Shop User Metafields in Shopify Functions"
slug: shop-user-metafields-functions
zdroj: https://shopify.dev/changelog/shop-user-metafields-in-shopify-functions
shrnuto_dne: 2026-06-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: function
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Shopify Functions checkout customizace — relevantní pro klienty s custom checkout logic."
dotcene_klienty: []
souvisejici: ["metaobject-access-shopify-functions", "function-run-log-access-scopes", "prerequisites-product-discount-functions"]
kontext:
  background: |
    Shopify Functions jsou WebAssembly moduly (kompilované z Rustu nebo JavaScriptu), které vývojářům umožňují přizpůsobit backendovou logiku Shopify v reálném čase — typicky výpočty slev, validaci košíku, routing objednávek nebo platební podmínky. Shop User je Shopify koncept cross-merchant buyer identity: unikátní identita zákazníka sdílená napříč obchody v rámci Shopify ekosystému (Shop Pay, Shop aplikace). Shop User Metafields jsou vlastní datová pole přiřazená k tomuto buyer identitě — umožňují ukládat libovolná strukturovaná data specifická pro konkrétního kupujícího nezávisle na jednotlivých obchodech.

    Shopify Functions ekosystém prošel v roce 2026 výrazným rozšiřováním dostupných datových zdrojů: v API 2026-04 přibyl přístup k app-owned metaobjectům z jakéhokoli typu funkce, v API 2026-07 pak bylo zpřísněno řízení přístupu k metaobjectům odstraněním deprecated enum hodnot. Shop User Metafields rozšiřují tento trend dál — zatímco dříve Functions mohly číst data o produktech, košíku nebo obchodní konfiguraci, buyer-level data (specifická pro konkrétního přihlášeného zákazníka) nebyla k dispozici v době checkout výpočtů.

    Nová možnost číst Shop User Metafields přímo ve Functions otvírá scénáře, kde checkout logika může reagovat na buyer-specifická data: tier zákazníka pro B2B pricing (velkoobchodní vs. retail zákazník), stav loyalty programu (body, úroveň členství), personalizované limity nebo výjimky (VIP doprava zdarma, custom platební podmínky). Jde o schéma, kde obchodník nebo aplikace zapisuje tato data do Shop User Metafields (například přes Customer Account API nebo admin workflow) a Function je následně čte při výpočtu checkoutu — bez nutnosti externího API volání v runtime.

    Tato změna je dostupná od API verze 2026-07 (platná od 1. července 2026) a nevyžaduje žádnou migraci existujících Functions — jde o čistě additivní rozšíření vstupního query schématu Functions API.
  zdroje:
    - title: "Shopify Changelog: Shop User Metafields in Shopify Functions"
      url: "https://shopify.dev/changelog/shop-user-metafields-in-shopify-functions"
    - title: "Shopify Docs: Shop — metafields use cases"
      url: "https://shopify.dev/docs/api/shop/guides/use-cases/metafields"
    - title: "Shopify Docs: Shopify Functions overview"
      url: "https://shopify.dev/docs/apps/build/functions"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Od API 2026-07 mohou Shopify Functions číst metafields přiřazené k Shop User (cross-merchant buyer identity) — umožňuje personalizovaný checkout na základě buyer-specifických dat (loyalty tier, B2B status, custom limity)."
tagy: [function, metafield, checkout, customer, customization]
zdroj_kanal: dev-changelog
editions_release: spring-2026
---

## Co se mění
Od API verze **2026-07** mohou **Shopify Functions** číst **Shop User Metafields** — vlastní datová pole přiřazená k buyer identitě zákazníka v rámci Shopify ekosystému. Tyto metafields jsou dostupné jako součást vstupního query schématu Functions, takže je lze použít v jakémkoli typu funkce spouštěném během checkoutu (discount, validation, delivery, payment customization). Jde o additivní změnu bez dopadu na existující implementace.

## Časová osa
- **2026-06-13** — Oznámení v Shopify Changelogu
- **2026-07-01** — API verze 2026-07 vstupuje v platnost; Shop User Metafields dostupné ve Functions

## Dopad pro nás
Střední — tato změna je relevantní pro klienty, kteří využívají Shopify Functions pro checkout customizaci a zároveň pracují s buyer-level daty (B2B zákazníci, loyalty programy, segmentovaný pricing). Přímý dopad na Magexo integraci není, protože Functions samy o sobě nedeployujeme — ale klienti nebo jejich agentury, kteří na naše datová schémata navazují přes checkout customization, tuto schopnost mohou využít.

## Použití v Integrátoru
**Možná** — pokud klient ukládá buyer-specifická data do Shop User Metafields (např. loyalty tier, B2B segment, custom slevy pro konkrétního zákazníka), mohou jeho Functions tato data číst při checkout výpočtu bez dalšího API volání. Relevantní zejména pro klienty s B2B checkout logic nebo personalizovanými discount programy postaveném na Shopify Functions.
