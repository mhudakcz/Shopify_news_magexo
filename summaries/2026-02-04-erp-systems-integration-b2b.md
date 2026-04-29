---
date: 2026-02-04
title: "Nativní B2B integrace s NetSuite, BrightPearl, Sage, Acumatica, Fulfil"
title_en: "ERP Systems Integration"
slug: erp-systems-integration-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
api_verze: []
nalehavost: vysoka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše B2B integrace často propojují Shopify s ERP klientů. Nativní coverage NetSuite/Sage/Acumatica může konkurovat naší custom implementaci u některých klientů — nebo naopak ušetřit práci."
dotcene_klienty: []
souvisejici: []

tldr: "Shopify B2B nativně syncuje companies, orders, payment terms s NetSuite, BrightPearl, Fulfil, Sage, Acumatica."
tagy: [b2b, erp, netsuite, sage, integration]
---

## Co se mění
Shopify v Renaissance edition nasadil **nativní B2B integrace** s pěti hlavními ERP systémy: **NetSuite, BrightPearl, Fulfil, Sage, Acumatica**. Synchronizují **companies (B2B zákazníky), objednávky a payment terms** automaticky bez nutnosti custom middleware.

## Dopad pro nás
**Pro vývojáře:**
Pokud klient používá jeden z těchto ERP, můžeme zvážit, jestli se nativní integrace hodí jako alternativa nebo doplněk k naší vlastní implementaci. Pravděpodobné scénáře:
- **Replace**: jednoduché B2B sync flow → použít nativní, ušetřit údržbu
- **Augment**: máme custom logiku navíc (vlastní data transformace, audit) → nechat custom, použít nativní jen pro standardní entity

**Pro PM / PO:**
Nová karta v rozhovoru s B2B klienty: „máte jeden z těchto ERP? Pak je tu rychlejší cesta než custom integrace, pojďme zhodnotit." Pokud klient zatím tápe, mohli bychom doporučit jeden z těchto ERP.

## Použití v Integrátoru
**Možná** — záleží na konkrétním klientovi. Doporučuji projít aktuální B2B portfolio a označit klienty s NetSuite/Sage/Acumatica/BrightPearl/Fulfil — tam zhodnotit migration potential.

## Rizika a edge cases
- Nativní integrace pokrývá standardní entities; custom rozšíření (extra fields, business rules) zůstávají naše práce
- Vendor lock-in: odchod od nativní integrace později může být bolestivý
