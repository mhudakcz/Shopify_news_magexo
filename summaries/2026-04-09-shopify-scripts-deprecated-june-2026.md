---
date: 2026-04-09
title: "Shopify Scripts budou deprecated 30. 6. 2026"
title_en: "Shopify Scripts will be deprecated on June 30, 2026"
slug: shopify-scripts-deprecated-june-2026
zdroj: https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: vysoka
customer_facing: true

ucinnost_od: 2026-04-15
deprecation_do: 2026-06-30
migrace_doporucena_do: 2026-05-31

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shopify Scripts byly Ruby skripty pro Shopify Plus checkout customizaci. Pokud má klient Plus a používá Scripts (mimo náš kód, přímo v Shopify), je nutné migrovat na Shopify Functions."
dotcene_klienty: []
souvisejici: []

tldr: "Shopify Scripts (Ruby skripty pro Plus checkout) přestávají běžet 30. 6. 2026; editování končí 15. 4. 2026."
tagy: [scripts, functions, plus, checkout, deprecation]
---

## Co se mění
**Shopify Scripts** (Ruby-based scripty pro customizaci checkoutu na Shopify Plus) budou definitivně **vypnuty 30. června 2026**. Editování existujících a vytváření nových skriptů už **skončilo 15. dubna 2026**. Migrace cílí na **Shopify Functions** (WASM-based, jazyk Rust/JS/TS).

## Časová osa
- **2026-04-15** — konec editování a vytváření Scripts
- **2026-06-30** — Scripts přestávají vykonávat (definitivní deprecation)

## Dopad pro nás
**Pro vývojáře:**
Náš kód (shopify-client) Scripts přímo nevolá — jsou to merchant-side skripty v Shopify Admin. Ale pokud klient používá Scripts pro line item discount, shipping, payment customizaci, je třeba je migrovat na Shopify Functions. Functions mají jiný deployment flow (přes Shopify CLI, vyžaduje custom app context).

**Pro PM / PO:**
**Důležité pro Plus klienty.** Pokud klient na checkout používá Scripts (custom slevy, shipping pravidla, payment pravidla), nutno do 30. 6. 2026 přepsat. Toto je ideální moment pro discovery call s klientem, jestli má aktivní Scripts a kdo je bude migrovat.

## Použití v Integrátoru
**Možná** — týká se merchant Plus instancí. Doporučuji proaktivně oslovit Plus klienty, ověřit, jestli mají Scripts, a naplánovat migraci.

## Rizika a edge cases
- Migrace ze Scripts (Ruby) na Functions (Rust/TS) není 1:1 — některá pravidla nelze v Functions přesně reprodukovat
- Functions mají rate limity a přísnější runtime constraints
- Pokud klient nemigraci řeší až těsně před 30. 6., hrozí výpadek custom checkout logiky
