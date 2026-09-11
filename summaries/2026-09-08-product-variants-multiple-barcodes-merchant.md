---
date: 2026-09-08
title: "Variants: až 20 barcodes s type (UPC/EAN/ISBN/GTIN/ASIN/Custom) + CSV import"
title_en: "Product variants now support multiple barcodes"
slug: product-variants-multiple-barcodes-merchant
zdroj: https://changelog.shopify.com/posts/multiple-barcodes-in-variants
shrnuto_dne: 2026-09-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Barcode je pole, se kterym pracujeme pri product/variant syncu a CSV importu - rozsireni na vice barcodes s type meni tvar dat pro multi-supplier klienty."
dotcene_klienty: []
souvisejici: [pos-multiple-barcodes-per-variant, barcode-inventory-shipments, 2048-variants-per-product]
tldr: "Product variant muze mit az 20 barcodes s typem (UPC/EAN/ISBN/GTIN/ASIN/Custom), vcetne bulk editace a CSV importu/exportu."
tagy: [variants, barcodes, gtin, ean, upc, isbn, asin, bulk-editing, csv, admin]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Product variant dosud v Shopify nesla jen jeden jediný barcode. V praxi ale stejná položka často dorazí s víc identifikátory najednou - výrobce má na krabici svůj UPC, obchodník si na regálovou etiketu tiskne vlastní private-label EAN a tentýž produkt může být zároveň vedený pod ASIN na marketplace listingu. Obchodníci proto museli vybrat jeden "hlavní" barcode a zbytek si hlídat mimo Shopify, což komplikovalo příjem zboží, štítkování i synchronizaci s dodavateli.
    Novinka rozšiřuje product variant o podporu až 20 barcodes současně, každý s vlastním typem - UPC, EAN, ISBN, GTIN, ASIN nebo Custom. Barcody lze přidávat, skenovat a mazat přímo na stránce detailu varianty v Adminu nebo přes mobilní aplikaci Shopify, přičemž Shopify při zadávání rovnou validuje formát podle zvoleného typu a upozorní na chybu.
    Pro hromadnou správu je k dispozici bulk editor pro úpravu více variant najednou a CSV import/export přes nový sloupec "Variant Barcodes", což pokrývá typický multi-supplier scénář se stovkami SKU. Zpětná kompatibilita je zachovaná - existující barcode žádnou migraci nepotřebuje a zůstává na první pozici, takže prodejní kanály, štítky i integrace, které čekají jeden barcode, dál čtou přesně ten stejný záznam jako dřív; POS navíc umí rozpoznat variantu podle kteréhokoli z přiřazených barcodes nebo podle SKU.
  zdroje:
    - title: "Shopify: Product variants now support multiple barcodes"
      url: "https://changelog.shopify.com/posts/multiple-barcodes-in-variants"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Product variant nově unese až **20 barcodes** místo dosavadního jednoho, každý s vlastním typem - UPC, EAN, ISBN, GTIN, ASIN nebo Custom. Obchodník je přidává a maže na detailu varianty v Adminu nebo v mobilní aplikaci, se vstupní validací formátu podle zvoleného typu.

Pro hromadnou práci přibyl bulk editor na úpravu více variant najednou a CSV import/export přes sloupec "Variant Barcodes" - to je klíčové pro obchodníky s velkým katalogem a víc dodavateli téhož zboží.

Zpětná kompatibilita je řešená pořadím: první barcode u varianty zůstává tím, co čtou prodejní kanály a integrace očekávající jediný barcode, žádná existující data se nemigrují ani neztrácí. POS umí navíc rozpoznat variantu podle kteréhokoli z přiřazených barcodes, ne jen podle toho prvního.

## Časová osa

- 2026-09-08 - publikováno na Shopify merchant changelogu, funkce dostupná v Adminu

## Dopad pro nás

**Pro vývojáře:** Jde o merchant-side rollout, který ale odpovídá dev-side změně datového modelu - pole `barcode` na variantě se rozšiřuje na `barcodes` (pole objektů s typem). Pokud u klienta čteme nebo zapisujeme barcode přes Admin API nebo CSV, je potřeba počítat s tím, že varianta může nést víc hodnot najednou a že "ten správný" barcode pro daný účel (např. label vs. marketplace feed) už nemusí být jen ten první v pořadí. Stojí za prověření, jestli náš CSV mapping a product/variant sync počítá jen s jedním barcode polem, nebo umí zpracovat víc hodnot s typem.

**Pro PM / PO:** Užitečné zmínit u retail a multi-supplier klientů, kteří dřív řešili "jeden pravý barcode na produkt" ručně mimo Shopify nebo přes vlastní metapole. Teď to jde nativně včetně bulk editace a CSV importu, což může zjednodušit onboarding nového zboží a snížit potřebu custom řešení.

## Použití v Integrátoru

Možná - relevantní pro klienty, kde synchronizujeme barcode/SKU data a kde by rozšíření na víc barcodes s typem mohlo ovlivnit mapping polí v CSV importu nebo API volání.
