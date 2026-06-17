---
date: 2026-03-18
title: "Rychlejší zadávání slev v POS"
title_en: "Faster discount entry in POS"
slug: faster-discount-entry-pos
zdroj: https://changelog.shopify.com/posts/faster-discount-entry-in-pos
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS UX."
kontext:
  background: |
    Slevy jsou v prostředí kamenného prodeje jednou z nejčastějších pokladních operací. Shopify POS umožňuje aplikovat procentuální i pevné slevy buď zadáním kódu, nebo přímým výběrem z přednastaveného seznamu. Rychlost a přesnost tohoto procesu přímo ovlivňuje délku fronty a spokojenost zákazníka při placení.

    Shopify POS prochází od verze 10 výraznou modernizací UX — primárním cílem je snížit počet tapů a doby potřebné k dokončení transakce. Verze 11.2 se zaměřuje specificky na slevový workflow: responzivnější numerická klávesnice reaguje bez prodlev, nedávno použité kódy se zobrazují v horní části seznamu, takže při opakovaných akcích odpadá nutnost vyhledávat.

    Tato vylepšení jsou součástí širšího trendu optimalizace POS slevového workflow: verze 11.5 přinesla zaokrouhlování slev na položku, Smart Grid nově nabízí dropdown výběr místo ručního zadání kódu a POS umožňuje i skenování QR kódů se slevami. Všechny tyto změny cílí na redukci chyb personálu a urychlení obsluhy zejména při sezónních akcích.

    Zlepšení jsou čistě na straně POS klientské aplikace a nevyžadují žádné změny v discount API, administraci ani na straně e-shopu.
  zdroje:
    - title: "Shopify Changelog: Faster discount entry in POS"
      url: "https://changelog.shopify.com/posts/faster-discount-entry-in-pos"
    - title: "Archiv: Smart Grid – dropdown výběr slev místo manual entry"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-smart-grid-discount-tiles/"
    - title: "Archiv: Skenování QR slevových kódů v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-scan-discount-codes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "POS v11.2 zlepšuje zadávání slev — lepší number pad responsiveness, surfacing recent codes, zjednodušený flow snižuje friction při checkoutu."
tagy: [pos, discount, ux]
---

## Co se mění
POS v11.2: lepší zadávání slev. Number pad rychlejší, recent codes se surfacují nahoře, simplified flow.

## Použití v Integrátoru
**Nepoužíváme** — POS UX.
