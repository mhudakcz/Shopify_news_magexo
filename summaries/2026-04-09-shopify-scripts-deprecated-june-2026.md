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

kontext:
  background: |
    Shopify Scripts byly Ruby skripty spouštěné přímo na serverech Shopify, které umožňovaly obchodníkům na plánu Shopify Plus přizpůsobit logiku v checkoutu — zejména automatické slevy, pravidla dopravy a podmínky platebních metod. Skripty se psaly v omezené podmnožině Ruby, nasazovaly se přes Shopify Admin a spouštěly se synchronně v průběhu nákupního procesu zákazníka.

    Shopify Scripts vznikly jako první způsob, jak dostat vlastní obchodní logiku do checkoutu bez nutnosti externího serveru. Jenže Ruby runtime byl uzavřený, obtížně testovatelný a neumožňoval dostatečnou flexibilitu. Shopify proto vyvinul nástupnickou platformu — Shopify Functions — postavenou na WebAssembly (WASM), která podporuje Rust, JavaScript i TypeScript a přináší standardizovaný vstup/výstup přes GraphQL schéma.

    Praktický dopad deprecace je výrazný pro obchodníky na Shopify Plus, kteří mají aktivní Scripts pro slevy (line item, order), úpravu dopravních možností nebo skrývání platebních metod. Migrace na Functions není přímočará: rozdílný jazyk, jiný deployment přes Shopify CLI a přísnější runtime limity (výpočetní čas, velikost WASM modulu) mohou vyžadovat přepis logiky od základu.

    Shopify Functions jsou dostupné i mimo Shopify Plus — jako součást veřejných aplikací z App Store na libovolném tarifu. Vlastní (custom) aplikace s Functions však nadále vyžadují Shopify Plus, stejně jako tomu bylo u Scripts.
  zdroje:
    - title: "Shopify Scripts will be deprecated on June 30, 2026"
      url: "https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026"
    - title: "Shopify Functions – přehled a dokumentace"
      url: "https://shopify.dev/docs/apps/build/functions"
    - title: "Prerequisites pro Product Discount Functions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/prerequisites-product-discount-functions/"
    - title: "Metaobject access ve Shopify Functions od 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/metaobject-access-shopify-functions/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify Scripts (Ruby skripty pro Plus checkout) přestávají běžet 30. 6. 2026; editování končí 15. 4. 2026."
tagy: [scripts, functions, plus, checkout, deprecation]
editions_release: spring-2026
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
