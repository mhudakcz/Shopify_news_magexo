---
date: 2026-09-08
title: "ProductVariant.barcode nahrazeno polem barcodes (Action Required, breaking)"
title_en: "Variants now support multiple barcodes"
slug: variants-multiple-barcodes-api
zdroj: https://shopify.dev/changelog/product-variant-barcode-is-being-replaced-by-barcodes
shrnuto_dne: 2026-09-11
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-09-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Syncujeme barcode do ERP a marketplace kanálů; čtení jen původního pole barcode po přidání dalších kódů uvidí pouze jeden z nich, takže mutace a query je nutné rozšířit na barcodes connection."
dotcene_klienty: []
souvisejici: [pos-multiple-barcodes-per-variant, barcode-inventory-shipments, 2048-variants-per-product]
tldr: "Shopify nahrazuje pole ProductVariant.barcode polem barcodes s podporou až 20 kódů (GTIN, EAN, UPC, ISBN, ASIN) na variantu, integrace čtoucí jen barcode musí přejít na novou connection."
tagy: [admin-graphql-api, product-variant, barcode, breaking, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify od 8. září 2026 nahrazuje jednoduché pole ProductVariant.barcode novým polem barcodes, které je typu connection a umožňuje uložit k jedné variantě až 20 čárových kódů místo jednoho. Nové pole podporuje typované identifikátory UPC, EAN, ISBN, GTIN a ASIN, každý o délce do 255 znaků, a netypované hodnoty zachovává beze změny. Odpovídající mutace productSet, productVariantsBulkCreate a productVariantsBulkUpdate už s barcodes connection pracují.
    Motivace je čistě obchodní: obchodníci běžně prodávají tutéž variantu pod víc identifikátory najednou, například výrobní UPC vedle vlastního privátního EAN, GTIN kódu, reissue ISBN nebo marketplace ASIN. Dosud museli tyto další identifikátory ukládat mimo Shopify, typicky do metafieldů nebo do externího systému, a synchronizovat je ručně.
    Jde o breaking change s vyžadovanou akcí: jakmile obchodník k variantě přidá druhý barcode, integrace čtoucí pouze staré pole barcode uvidí jen jeden z nich bez signálu, že existují další. Pole barcode samo o sobě zůstává zpětně kompatibilní a dál vrací první záznam z barcodes, ale Shopify avizuje, že v budoucnu oznámí termín jeho úplného odstranění. Změna přímo navazuje na podporu více barcodes v Shopify POS od 1. září 2026, kde personál na prodejně nově dokáže naskenovat a najít variantu podle kteréhokoli z přiřazených kódů.
  zdroje:
    - title: "Shopify: Variants now support multiple barcodes"
      url: "https://shopify.dev/changelog/product-variant-barcode-is-being-replaced-by-barcodes"
    - title: "Shopify: Scan and search variants with multiple barcodes"
      url: "https://changelog.shopify.com/posts/scan-and-search-variants-with-multiple-barcodes"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-5
---
## Co se mění

Shopify nahrazuje pole `ProductVariant.barcode` novou connection `barcodes`, která na jedné variantě drží až 20 čárových kódů místo jednoho. Nové pole rozlišuje typované identifikátory UPC, EAN, ISBN, GTIN a ASIN a k dispozici jsou i objekty `ProductVariantBarcode`, `BarcodeInput` a `BarcodeType` pro práci s nimi přes GraphQL. Mutace `productSet`, `productVariantsBulkCreate` a `productVariantsBulkUpdate` už umí barcodes zapisovat i aktualizovat.

Staré pole `barcode` dál funguje a vrací první záznam z `barcodes`, takže nejde o okamžité odstranění. Skutečné riziko je jinde: jakmile obchodník k variantě přidá druhý nebo třetí kód, jakákoli logika, která čte jen `barcode`, o dalších kódech vůbec neví. To se týká hlavně integrací se sklady, ERP systémy nebo marketplace kanály, kde barcode slouží jako klíč k párování produktů.

## Časová osa

- 2026-09-01 — Shopify POS začíná rozpoznávat variantu podle kteréhokoli z přiřazených barcodes (verze POS 11.14)
- 2026-09-08 — publikován changelog k poli barcodes a deprecation poznámka k ProductVariant.barcode
- termín zatím neurčen — Shopify avizuje, že datum odstranění pole barcode oznámí později

## Dopad pro nás

**Pro vývojáře:** Kdekoli čteme nebo zapisujeme `ProductVariant.barcode` přes Admin GraphQL, je potřeba zvážit přechod na `barcodes` connection — hlavně tam, kde barcode slouží jako identifikátor pro sync do externích systémů (ERP, WMS, marketplace). Mutace `productSet`, `productVariantsBulkCreate` a `productVariantsBulkUpdate` je potřeba upravit tak, aby uměly zapsat víc kódů najednou a rozpoznat jejich typ (UPC/EAN/ISBN/GTIN/ASIN).

**Pro PM / PO:** Relevantní hlavně pro retail a multi-supplier klienty, kde se stejný produkt objevuje pod víc kódy od různých dodavatelů, nebo pro klienty prodávající zároveň na marketplacech (ASIN) a v kamenné prodejně (GTIN/EAN). Stojí za zmínku v kombinaci s nedávnou podporou více barcodes v Shopify POS.

## Použití v Integrátoru

Možná — pokud aktuálně synchronizujeme barcode do skladového nebo účetního systému výhradně přes pole `barcode`, je vhodné projít, zda klient nezačal přidávat další kódy, a případně rozšířit čtení na `barcodes` connection.
