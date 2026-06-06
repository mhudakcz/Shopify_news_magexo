---
date: 2026-04-27
title: "POS inline search suggestions pro rychlejší vyhledávání produktů"
title_en: "Find products faster in Shopify POS with inline search suggestions"
slug: pos-find-products-inline-search
zdroj: https://changelog.shopify.com/posts/find-products-faster-in-shopify-pos-with-inline-search-suggestions
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS UI feature."
kontext:
  background: |
    Inline search suggestions (nazývané též ghost text autocomplete) jsou vzor uživatelského rozhraní, při němž aplikace průběžně předvídá a vizuálně doplňuje zadávaný text ještě před stisknutím dalšího znaku. Uživatel návrh buď přijme (klávesou Space nebo Tab), nebo pokračuje v psaní. Tato technika je běžná ve webových prohlížečích a mobilních klávesnicích — její přenos do nativní POS aplikace je přirozený krok ke snížení kognitivní zátěže personálu.

    Shopify POS prochází od verze 10 kontinuální modernizací UX se zaměřením na rychlost transakcí a snížení počtu nutných interakcí. Verze 11.5 přináší tuto funkci jako součást širší vlny UX vylepšení vydaných v dubnu 2026 — souběžně s klávesovými zkratkami pro navigaci, rychlejším zadáváním slev (v11.2) a zaokrouhlováním slev na položku. Motivací je fakt, že vyhledávání produktů patří k nejčastějším operacím u pokladny, a každý ušetřený úhoz přímo zkracuje čekací dobu zákazníka.

    Praktický dopad je největší v obchodech s rozsáhlým katalogem nebo nejednoznačnými názvy produktů. Systém čerpá návrhy z lokálního katalogu uloženého v zařízení, takže funkce funguje spolehlivě i při nestabilním připojení. Změna je čistě na straně klientské aplikace (iOS i Android) a nevyžaduje žádné úpravy backendu, Admin API ani konfigurace ze strany obchodníka.
  zdroje:
    - title: "Shopify Changelog: Find products faster in Shopify POS with inline search suggestions"
      url: "https://changelog.shopify.com/posts/find-products-faster-in-shopify-pos-with-inline-search-suggestions"
    - title: "Archiv: Klávesové zkratky a navigace v Shopify POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-keyboard-shortcuts-navigation/"
    - title: "Archiv: Rychlejší zadávání slev v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/faster-discount-entry-pos/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "POS v11.5 přidává inline search suggestions, které doplňují názvy produktů jako ghost text — méně klávesnicových úhozů, méně friction při checkoutu."
tagy: [pos, search, ux]
---

## Co se mění
POS v11.5 přidává **inline search suggestions** — produktové názvy se doplňují jako ghost text při psaní. Méně úhozů, rychlejší checkout pro retail personál.

## Použití v Integrátoru
**Nepoužíváme** — POS UI improvement.
