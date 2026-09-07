---
date: 2026-09-01
title: "POS podporuje více barcodes per variant (GTIN, EAN, ASIN, SKU)"
title_en: "Scan and search variants with multiple barcodes"
slug: pos-multiple-barcodes-per-variant
zdroj: https://changelog.shopify.com/posts/scan-and-search-variants-with-multiple-barcodes
shrnuto_dne: 2026-09-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Relevantní pro retail klienty s multi-supplier produkty, kde variant má víc barcodes najednou."
dotcene_klienty: []
souvisejici: [barcode-inventory-shipments, pos-find-products-inline-search, pos-scan-discount-codes]
tldr: "Shopify POS umí od verze 11.14 najít variant přes libovolný přiřazený barcode, ne jen ten primární."
tagy: [pos, barcodes, gtin, ean, asin, sku, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS dosud rozpoznával variant primárně podle jednoho uloženého barcode. Pokud stejný produkt dorazil od různých dodavatelů s jiným balením a jiným čárovým kódem, nebo měl obchodník vlastní interní SKU vedle standardního GTIN, personál musel produkt hledat ručně přes vyhledávání jménem nebo SKU, což zpomalovalo checkout i příjem zboží.
    Novinka umožňuje přiřadit k jedné product variant více barcodes najednou — GTIN, EAN, ASIN nebo SKU-based kódy — a POS pak rozpozná variant naskenováním nebo vyhledáním jakéhokoli z nich. Typický scénář je multi-supplier retail, kde tentýž produkt cirkuluje s různými čárovými kódy podle dodavatele, nebo obchod, který si vede vlastní interní kódování vedle standardního GTIN kvůli internímu skladovému značení.
    Funkcionalita se aktivuje automaticky s POS v11.14, žádná instalace navíc není potřeba. Předpokladem ale je, že obchodník nejprve v Shopify Admin přiřadí dodatečné barcodes k dané product variant — teprve pak je personál na prodejně může použít při skenování.
  zdroje:
    - title: "Shopify: Scan and search variants with multiple barcodes"
      url: "https://changelog.shopify.com/posts/scan-and-search-variants-with-multiple-barcodes"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS nově rozpozná product variant přes jakýkoli z přiřazených barcodes, ne jen přes ten jeden primární. Personál na prodejně tak může naskenovat GTIN, EAN, ASIN nebo interní SKU-based kód a systém k variantě dohledá správnou shodu bez ohledu na to, který konkrétní čárový kód je zrovna na obalu.

To řeší běžnou bolest u obchodníků s více dodavateli stejného zboží — každý dodavatel může produkt balit s jiným barcode, ale jde stále o tutéž variantu v katalogu. Stejně tak to pomáhá firmám, které si vedou vlastní interní SKU vedle standardního GTIN kvůli skladové evidenci.

Podmínkou je, že si obchodník v Shopify Admin nejprve k variantě přiřadí všechny relevantní barcodes — teprve pak je POS umí rozpoznat při skenování nebo textovém vyhledávání.

## Časová osa

- 2026-09-01 — publikováno na Shopify changelogu
- Funguje automaticky od Shopify POS v11.14, bez nutnosti instalace

## Dopad pro nás

**Pro vývojáře:** Žádná API akce navíc, funkce je čistě na straně POS klienta. Pokud pro klienta spravujeme přiřazování barcodes k variantám přes Admin API, stojí za zmínku, že POS teď dokáže využít i sekundární kódy — tedy nemá smysl komplikovaně řešit "jeden pravý barcode" per variant, pokud reálně existuje víc platných kódů.

**Pro PM / PO:** Vhodné zmínit u retail klientů s multi-supplier zásobováním nebo s vlastním interním SKU systémem — může jim to zjednodušit onboarding nového zboží na prodejnu bez nutnosti přebalování nebo přelepování štítků.

## Použití v Integrátoru

Přímý dopad na naši integraci nemáme, jde o čistě POS-side vylepšení. Relevantní jako konzultační bod u retail klientů řešících vícero barcodes per produkt.
