---
date: 2026-08-27
title: "Theme CLI v3.83.x a starší: Password-protected shop dev flows deprecated (Action Required)"
title_en: "Password Protected Shop Dev flows on Shopify Theme CLI v3.83.x and older to be deprecated"
slug: theme-cli-password-protected-shop-dev-deprecated
zdroj: https://shopify.dev/changelog/password-protected-shop-dev-flows-on-shopify-theme-cli-v3-83-x-and-older-to-be-deprecated
shrnuto_dne: 2026-08-28
kategorie: [deprecation, breaking-change]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud vývojáři pracují s theme dev/console proti password-protected obchodům na starším Shopify CLI, po 1. říjnu 2026 jim přestane fungovat autentizace a je nutné CLI upgradovat."
dotcene_klienty: []
souvisejici: [shopify-cli-force-flag-deprecated, shopify-cli-40-semver-autoupdates, app-deployment-cicd-tokens]
tldr: "Shopify od 1. října 2026 ukončuje podporu password-protected shop dev flows na Theme CLI v3.83.x a starším – je nutné upgradovat na CLI 3.84.0+ (doporučeno 4.7.0)."
tagy: [themes, theme-cli, authentication, deprecation, "action-required"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify oznamuje ukončení podpory starého způsobu autentizace pro vývoj témat na password-protected (heslem chráněných) obchodech ve starších verzích Shopify CLI. Jde o storefront preview/session autentizaci, kterou CLI v3.83.x a starší používá k tomu, aby se přihlásil ke storefrontu chráněnému heslem (typicky obchody ve fázi vývoje před spuštěním, nebo B2B/wholesale obchody s omezeným přístupem).

    Od 1. října 2026 přestane Shopify tento starý autentizační flow podporovat. V praxi to znamená, že příkazy jako `shopify theme dev`, `shopify theme console` a `shopify app dev` (pokud projekt obsahuje theme app extensions) přestanou fungovat proti password-protected obchodům, pokud vývojář zůstane na CLI 3.83.x nebo starším. Nová autentizace je součástí novějších CLI verzí a řešení je jednoduché – upgrade nástroje.

    Řešení je dvojí: buď upgradovat Shopify CLI na verzi 3.84.0 nebo novější (Shopify doporučuje rovnou 4.7.0) příkazem `npm install -g @shopify/cli@latest`, nebo dočasně odstranit password protection z daného storefrontu, pokud upgrade není v tu chvíli možný. Jde o navazující krok na sérii změn kolem Shopify CLI v roce 2026 (SemVer, auto-updates, odstraňování starých flagů), kdy Shopify postupně stahuje podporu starších major verzí CLI.
  zdroje:
    - title: "Shopify: Password Protected Shop Dev flows on Shopify Theme CLI v3.83.x and older to be deprecated"
      url: "https://shopify.dev/changelog/password-protected-shop-dev-flows-on-shopify-theme-cli-v3-83-x-and-older-to-be-deprecated"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify ruší podporu staršího autentizačního flow, který Shopify CLI verze 3.83.x a starší používaly k přihlášení na password-protected (heslem chráněné) storefronty při vývoji témat. Od **1. října 2026** Shopify tuto starou storefront preview/session autentizaci přestane podporovat úplně.

Pokud tým pracuje s obchodem, který má zapnutou ochranu heslem – typicky obchod ve fázi před spuštěním, staging prostředí nebo B2B/wholesale obchod s omezeným přístupem – a zároveň má na svém stroji nebo v CI starší Theme CLI, po tomto datu se přihlášení k dev serveru přestane autentizovat a lokální vývoj/preview témat se zastaví.

Řešení je přímočaré: upgradovat Shopify CLI na verzi **3.84.0 nebo novější** (Shopify doporučuje rovnou **4.7.0**) příkazem:

```
npm install -g @shopify/cli@latest
```

Kdo upgrade z nějakého důvodu nemůže provést hned, může jako dočasné řešení odstranit password protection z daného storefrontu – tím starý autentizační flow přestane být potřeba.

## Časová osa

- **27. srpna 2026** – Shopify zveřejnil changelog a deprecation notice.
- **1. října 2026** – Shopify přestává podporovat storefront preview/session autentizaci z Theme CLI v3.83.x a starších; password-protected dev flows na těchto verzích přestanou fungovat.

## Dopad pro nás

**Pro vývojáře:** Před 1. říjnem 2026 zkontrolovat verzi Shopify CLI na všech strojích a v CI pipeline (`shopify version`) a u projektů, kde se pracuje s password-protected storefronty (theme dev, theme console, app dev s theme app extensions), upgradovat na 3.84.0+, ideálně na doporučenou 4.7.0. Stojí za to ověřit i navazující změny z CLI 4.0 (SemVer, auto-updates, odstranění starých flagů), protože upgrade může být vhodná příležitost projít je najednou.

**Pro PM / PO:** Jde o interní vývojářský nástroj bez dopadu na zákazníky obchodů – zásah je čistě na straně vývojového workflow a nevyžaduje komunikaci s klientem. Stačí zajistit, že vývojářský tým má CLI aktuální do stanoveného data, aby nedošlo k výpadku ve vývoji na projektech s heslem chráněnými storefronty.

## Použití v Integrátoru

Přímý dopad závisí na tom, zda se u konkrétních projektů vyvíjí proti password-protected obchodům starším Theme CLI – pokud ano, je potřeba CLI upgradovat do 1. října 2026, jinak se dev preview zastaví.
