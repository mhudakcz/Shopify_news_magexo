---
date: 2026-04-15
title: "Automatické CSS subsetting pro {% stylesheet %} tagy v themes"
title_en: "Automatic CSS subsetting for {% stylesheet %} tags"
slug: automatic-css-subsetting-stylesheet-tags
zdroj: https://shopify.dev/changelog/automatic-css-subsetting-for-stylesheet-tags
shrnuto_dne: 2026-04-29

kategorie: [seo, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: true

ucinnost_od: 2026-04-20

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Liquid themes. Neděláme themes jako součást integrací."
dotcene_klienty: []

kontext:
  background: |
    Tag `{% stylesheet %}` je Liquid direktiva, která theme vývojářům umožňuje psát CSS přímo uvnitř souborů sekcí, bloků nebo snippetů — styly jsou pak sloučeny a servírovány jako součást frontendu obchodu. Původní chování Shopify bylo načítat všechny CSS bloky z celého tématu najednou, bez ohledu na to, které sekce jsou na dané stránce skutečně vykresleny.

    CSS subsetting je optimalizační technika, při které server analyzuje, které komponenty jsou na stránce přítomny, a doručí pouze CSS potřebné pro jejich vykreslení. Podobný přístup se v moderním webovém vývoji nazývá „critical CSS" nebo „CSS tree-shaking" a populární frameworky jako Tailwind CSS jej využívají pro eliminaci nepoužívaných stylů při buildu. Shopify tuto logiku přinesl automaticky na úrovni platformy, bez nutnosti build kroků na straně vývojáře.

    Přímým důsledkem je zmenšení objemu CSS přenášeného při každém načtení stránky, což zkracuje dobu blokování vykreslování (render-blocking time). To se pozitivně projevuje v metrikách Core Web Vitals — zejména Largest Contentful Paint (LCP) a First Contentful Paint (FCP) — které Google zahrnuje do hodnocení stránek v organickém vyhledávání.

    Změna navazuje na širší trend granulárního řízení theme obsahu v Shopify, zahrnující per-market theme customizaci i nový design theme editoru, který klade důraz na iterativní optimalizaci vzhledu storefront.
  zdroje:
    - title: "Shopify Changelog: Automatic CSS subsetting for stylesheet tags"
      url: "https://shopify.dev/changelog/automatic-css-subsetting-for-stylesheet-tags"
    - title: "Shopify Changelog: CSS proměnná pro mobile safe area insets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/css-variable-mobile-safe-area/"
    - title: "Shopify Changelog: Redesignovaná navigace v theme editoru"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/redesigned-theme-editor-navigation/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Od 20. 4. 2026 Shopify dodává jen relevantní CSS per stránku — themes se self-contained styly nepotřebují změnu."
tagy: [themes, css, performance, seo]
---

## Co se mění
Od **20. dubna 2026** Shopify automaticky doručuje pouze CSS, které je relevantní pro danou stránku, místo veškerých `{% stylesheet %}` tagů. Themes, jejichž stylesheets jsou self-contained (nečerpají selektory z více souborů), nepotřebují žádnou změnu.

## Časová osa
- **2026-04-20** — automatické subsetting nasazeno

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom dělali themes pro klienta, je třeba ověřit, že CSS je strukturováno v independent stylesheet blocích. Křížové selektory mezi soubory mohou být odstraněny.

**Pro PM / PO:**
Performance/SEO benefit — rychlejší rendering stránek. Pokud klient řeší Core Web Vitals, lze zmínit jako pozitivní dopad.

## Použití v Integrátoru
**Nepoužíváme** — neděláme themes/Liquid jako součást integrací. Týká se theme developerů.
