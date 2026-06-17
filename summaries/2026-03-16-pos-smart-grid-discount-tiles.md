---
date: 2026-03-16
title: "Smart Grid: dropdown výběr slev místo manual entry"
title_en: "Easier Smart Grid setup for discount tiles"
slug: pos-smart-grid-discount-tiles
zdroj: https://changelog.shopify.com/posts/easier-smart-grid-setup-for-discount-tiles
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS Smart Grid config."
kontext:
  background: |
    Smart Grid je konfigurovatelná mřížka na domovské obrazovce Shopify POS aplikace. Obchodníci do ní přidávají tzv. tiles — zkratky pro produkty, kategorie, zákaznické akce nebo slevové kódy. Slouží jako rychlá navigace přímo při obsluze zákazníka u pokladny.

    Discount tiles umožňují personálu aplikovat předem nastavené slevy jedním dotykem, bez nutnosti znát nebo zadávat kód. Historicky se kód zadával ručně, což vedlo k překlepům nebo použití nesprávné či neplatné slevy. Tento přístup byl zdrojem friction zejména při sezónních akcích a hromadných slevách.

    Přechod na dropdown výběr přímo ze seznamu aktivních discount kódů z Adminu zajišťuje, že se použije správná verze kódu — včetně správných eligibility pravidel (minimální hodnota objednávky, kombinovatelnost, platné zákaznické segmenty). Změna navazuje na širší trend zpřesňování POS slevového workflow: podobné vylepšení přinesla i verze POS v11.2 (rychlejší zadávání) a funkce skenování QR kódů se slevami.

    Tato funkce je čistě na straně konfigurace POS layoutu a nevyžaduje žádné změny v discount API ani na straně e-shopu.
  zdroje:
    - title: "Shopify Changelog: Easier Smart Grid setup for discount tiles"
      url: "https://changelog.shopify.com/posts/easier-smart-grid-setup-for-discount-tiles"
    - title: "Shopify Changelog: Faster discount entry in POS"
      url: "https://changelog.shopify.com/posts/faster-discount-entry-in-pos"
    - title: "Archiv: Skenování QR slevových kódů v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-scan-discount-codes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Smart Grid discount tiles (POS) používají dropdown výběr existujících discount kódů místo manual entry — méně překlepů, automatické dodržování eligibility pravidel."
tagy: [pos, smart-grid, discount, ux]
---

## Co se mění
**Smart Grid** (customizable POS layout) discount tiles používají **dropdown výběr** existujících discount kódů místo manual textového zadávání. Eliminuje překlepy a kontroluje eligibility automaticky.

## Použití v Integrátoru
**Nepoužíváme** — POS config.
