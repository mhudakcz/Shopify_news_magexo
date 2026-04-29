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
