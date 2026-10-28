---
date: 2026-10-28
title: "POS Universal barcode search — scan/search GTIN, supplier codes, custom identifiers"
title_en: "Universal barcode search POS"
slug: pos-universal-barcode-search-gtins
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čárový kód je častý párovací klíč při synchronizaci produktů a skladu s ERP, WMS a marketplace kanály. Univerzální vyhledávání v POS zvyšuje tlak na úplnost a čistotu kódů u variant, a tím i na jejich správný přenos. Žádné nové API k této položce Editions neuvádí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-retail", "pos-multiple-barcodes-per-variant", "variants-multiple-barcodes-api"]
editions_release: fall-2026
tldr: "Skener nebo vyhledávací pole v Shopify POS má podle Editions Fall '26 hledat napříč všemi čárovými kódy varianty (až 20), kódy dodavatelů i vlastními identifikátory. Jedna vyhledávací plocha pro cokoli, co má kód, od GTIN po interní SKU. Editions neuvádí verzi POS, tarif ani datum nasazení."
tagy: [pos, barcode-search, gtin, supplier-codes, retail, operations]
zdroj_kanal: editions
kontext:
  background: |
    Čárový kód je v retailu nejrychlejší způsob, jak v prodejně identifikovat zboží. V praxi ale jedna varianta produktu málokdy nese jediný kód. Výrobce má vlastní GTIN nebo EAN, dodavatel může zboží balit pod jiným kódem, marketplace používá vlastní identifikátor (například ASIN) a samotná prodejna si často vede interní SKU kvůli skladovému značení. Dokud POS znal jen jeden kód na variantu, musel personál všechno ostatní dohledávat ručně přes textové vyhledávání, což zpomalovalo checkout i příjem zboží.
    
    Shopify tento problém řeší postupně. V září 2026 přišla s POS v11.14 podpora více čárových kódů na jednu variantu a o týden později Admin GraphQL API nahradilo pole barcode novou connection barcodes s kapacitou až 20 kódů na variantu. Položka Universal barcode search v tématu Retail edice Fall '26 na to navazuje: popisuje jednu vyhledávací plochu, kterou personál používá pro sken i pro textové hledání a která pokrývá všechny kódy varianty, kódy dodavatelů i vlastní identifikátory.
    
    Zdrojová stránka Editions k položce uvádí jen krátký popis. Nezmiňuje číslo verze POS, tarifní omezení, region ani datum nasazení a nespecifikuje, v jakých datových polích mají kódy dodavatelů a vlastní identifikátory ležet. Část funkce (více barcodes na variantu) už v archivu pokrýváme ze září, takže skutečná novinka této položky je hlavně rozšíření na kódy dodavatelů a vlastní identifikátory. Před nabídkou obchodníkovi stojí za to ověřit přesné chování na testovacím obchodě.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26, Retail / POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-retail/"
    - title: "Archiv: POS podporuje více barcodes per variant"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/"
    - title: "Archiv: ProductVariant.barcode nahrazeno polem barcodes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v edici Fall '26 (téma Retail) oznamuje **univerzální vyhledávání čárových kódů v POS**. Skener nebo vyhledávací pole v pokladně hledá napříč všemi čárovými kódy varianty (včetně až 20 kódů na jednu variantu), napříč kódy dodavatelů a napříč vlastními identifikátory. Jde o jednu vyhledávací plochu pro cokoli, co má kód, od GTIN po interní SKU.

Pro personál na prodejně to znamená jednoduché pravidlo: naskenuji, co je na obalu, a POS najde správnou variantu. Nemusí řešit, jestli jde o kód výrobce, dodavatele nebo prodejny.

Co je z toho už známé a co nové:

- **Více barcodes na variantu** už v archivu máme. POS v11.14 od 1. září 2026 rozpozná variantu podle kteréhokoli přiřazeného kódu a Admin API od 8. září drží až 20 kódů v connection `barcodes` (typy UPC, EAN, ISBN, GTIN, ASIN).
- **Kódy dodavatelů a vlastní identifikátory** jsou podle popisu Editions rozšířením nad rámec čárových kódů. Editions ale neříká, v jakém poli nebo objektu mají ležet. Je to tedy otevřená otázka, kterou je třeba ověřit, než se na ni začne spoléhat při nabídce.

Náš výklad: Shopify sjednocuje rozptýlené způsoby, jak obchodníci identifikují zboží, do jednoho místa hledání. To snižuje potřebu držet seznamy kódů mimo Shopify (v tabulkách, metafieldech nebo v ERP) jen proto, aby je mohl personál použít na pokladně.

## Časová osa

- 2026-09-01 — POS v11.14 rozpozná variantu podle libovolného z přiřazených barcodes
- 2026-09-08 — Admin GraphQL API nahrazuje `ProductVariant.barcode` connection `barcodes` (až 20 kódů na variantu)
- 2026-10-28 — Editions Fall '26 oznamuje univerzální vyhledávání v POS včetně kódů dodavatelů a vlastních identifikátorů
- datum nasazení, verze POS, tarif i region — Editions neuvádí, položka není označená jako připravovaná

## Dopad pro nás

**Pro vývojáře:** Popis v Editions nezmiňuje žádné nové API ani webhook, takže z něj nevyplývá povinná akce. Praktické body k ověření na testovacím obchodě:

- Kde přesně leží kódy dodavatelů a vlastní identifikátory (součást `barcodes`, metafieldy, jiné pole) a zda je lze zapisovat přes Admin API. Od toho závisí, jestli bude možné je do Shopify nahrát hromadně z ERP nebo PIM.
- Pokud integrace čtou jen staré pole `barcode`, vidí jen první kód. Univerzální vyhledávání v POS pak může najít variantu přes kód, který ERP, WMS nebo marketplace konektor vůbec nezná. Kde je barcode párovací klíč, je třeba počítat s celou connection `barcodes`.
- Chování při kolizi: pokud je stejný kód omylem přiřazen více variantám, může hledání vrátit více shod. Co POS v takovém případě udělá, Editions neuvádí, takže stojí za vyzkoušení.
- Kvalita dat se přesouvá do popředí. Čím víc kódů najednou POS hledá, tím víc záleží na tom, aby přiřazení kódů k variantám bylo čisté a odpovídalo ERP.

**Pro PM / PO:** Nalehavost je nízká, jde o zlepšení provozu na prodejně, ne o změnu, která by něco rozbila. Hodí se jako konzultační bod u retail obchodníků s více dodavateli stejného zboží, s vlastním interním kódováním nebo s prodejem na marketplacech vedle kamenné prodejny. Argument pro obchodníka je rychlejší příjem a prodej zboží bez přelepování štítků. Než ji budeme slibovat, je dobré ověřit dostupnost funkce v jeho obchodě a v nápovědě Shopify, protože Editions neuvádí podmínky nasazení. Související a širší kontext viz [přehled Editions Fall '26 Retail](/Shopify_news_magexo/zmena/editions-fall-2026-retail/).

## Použití v Integrátoru

Možná: pokud synchronizujeme čárové kódy variant do ERP, WMS nebo marketplace kanálů, je vhodné ověřit, že čteme celou connection `barcodes`, a při auditu dat u retail obchodníků zahrnout i to, kde mají uložené kódy dodavatelů a interní identifikátory.
