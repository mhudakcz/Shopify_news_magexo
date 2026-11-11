---
date: 2026-11-06
title: "orderCreate mutation — line items s custom IDs (idempotent order imports)"
title_en: "orderCreate line items support custom IDs"
slug: ordercreate-line-items-custom-ids
zdroj: https://shopify.dev/changelog/posts/ordercreate-line-items-support-custom-ids
shrnuto_dne: 2026-11-11
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud import objednávek z ERP nebo marketplace identifikuje varianty externím ID, odpadá mapovací krok před orderCreate."
dotcene_klienty: []
souvisejici: [order-cart-token-field, create-unpaid-orders-subscription-billing]
tldr: "Pole variantIdentifier na line items v orderCreate je od API verze 2027-01 stabilní a umožňuje určit variantu přes custom ID z metafieldu typu id, takže import objednávek nepotřebuje vlastní mapování ID."
tagy: [ordercreate, line-items, custom-ids, idempotent, imports, erp, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Mutace orderCreate v Admin GraphQL API slouží k programatickému zakládání objednávek, typicky při importu z ERP, marketplace nebo POS systémů. Řádky objednávky se dosud určovaly Shopify ID varianty (variantId), které externí systém obvykle nezná.
    Integrace proto musely udržovat vlastní mapovací tabulku externí ID na Shopify ID, nebo před každým založením objednávky volat productVariantByIdentifier. Pole variantIdentifier existovalo jen ve verzi unstable.
    Shopify jej nyní zařadil do verze 2027-01 jako aditivní změnu release candidate. Změna sama neřeší idempotenci celé objednávky, ale odstraňuje jednu z hlavních příčin chyb při opakovaných importech, tedy nespolehlivé mapování variant.
  zdroje:
    - title: "Shopify: orderCreate line items support custom IDs"
      url: "https://shopify.dev/changelog/posts/ordercreate-line-items-support-custom-ids"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Na vstupu `OrderCreateLineItemInput` je od API verze 2027-01 dostupné pole `variantIdentifier`. Dříve bylo pouze ve verzi `unstable`. Variantu lze určit dvěma způsoby, vždy právě jedním z nich:

- `id`: globální ID varianty produktu,
- `customId`: trojice `namespace`, `key` a `value` metafieldu typu `id` na variantě. Pokud se vynechá `namespace`, použije se jmenný prostor vyhrazený aplikaci.

`variantIdentifier` nelze kombinovat s `variantId` ani `productId`, takové volání vrátí user error s kódem `INVALID`. Řádky používající `variantId` fungují beze změny.

Podmínky použití:

- Obchod musí mít definici metafieldu typu `id` pro varianty produktu a aplikace ji musí umět číst. Bez definice vrátí `orderCreate` chybu `INVALID`.
- Když žádná varianta neodpovídá, řádek vrátí user error `VARIANT_IDENTIFIER_NOT_FOUND` a objednávka se nevytvoří.
- Nejsou potřeba žádné nové access scopes. Vyhledávání přes custom ID najde jen metafieldy, které aplikace smí číst.

Poznámka k zadání: pole slouží k určení varianty podle externího ID, nikoli k ukládání vlastního ID řádku objednávky. Idempotenci importu je tedy stále nutné řešit zvlášť.

## Časová osa

- 2026-11-03: změna vytvořena v changelogu.
- 2026-11-06: publikace novinky.
- 2026-11-10: položka aktualizována.
- 2026-12-01: účinnost uvedená v metadatech changelogu.
- Verze 2027-01 a novější pole obsahují, verze 2026-10 a starší ne.

## Dopad pro nás

**Pro vývojáře:** Aplikace, které dnes před `orderCreate` překládají externí ID na Shopify ID, mohou mapování zrušit a poslat `customId` přímo v jednom požadavku. Vyžaduje to metafield typu `id` na variantách, naplněný externím ID, a přechod na API verzi 2027-01. Kdo už používá `variantIdentifier` na `unstable`, nemusí požadavky měnit. Doporučujeme otestovat na development store se známým i neznámým ID a ošetřit `VARIANT_IDENTIFIER_NOT_FOUND`, aby se při retry nevytvářely částečné nebo duplicitní importy. Samotnou idempotenci objednávky je dál nutné řešit na straně integrace.

**Pro PM / PO:** Akce není povinná. Zjednodušuje to integrace s ERP a marketplace, kde je externí ID varianty zdrojem pravdy, a snižuje riziko chyb z neaktuálního mapování. Před nasazením je potřeba zajistit, že mají všechny varianty externí ID v metafieldu.

## Použití v Integrátoru

Pokud náš import objednávek dnes drží vlastní mapování externích ID na varianty, jde o kandidáta na zjednodušení po přechodu na API 2027-01. Nutné je ověřit, zda je externí ID uloženo v metafieldu typu `id`.
