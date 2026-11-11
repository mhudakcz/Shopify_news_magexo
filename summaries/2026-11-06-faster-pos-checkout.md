---
date: 2026-11-06
title: "Faster POS checkout — fewer taps, cash + split payments, faster receipts, lepší card processing"
title_en: "Faster POS checkout"
slug: faster-pos-checkout
zdroj: https://changelog.shopify.com/posts/faster-pos-checkout
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o změnu uživatelského rozhraní POS bez zmínky o API. Nepřímo se může projevit v datech objednávek z prodejen, například u rozdělených plateb a přeskakování účtenek."
dotcene_klienty: []
souvisejici: ["identify-more-in-store-customers-pos", "faster-discount-entry-pos", "enhanced-printed-receipt-editor-pos", "editions-fall-2026-operations"]
tldr: "Shopify POS od verze 11.17.0 rychleji zpracovává kartové platby, vyžaduje méně klepnutí u hotovosti, dárkových karet a dělených plateb a předvyplňuje volbu účtenky u rozpoznaného zákazníka. Ušetří několik sekund na prodej, což se hodí ve špičkách."
tagy: [pos, checkout, speed, cash, split-payments, receipts, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS dostalo zrychlený průběh placení na pokladně. Podle oznámení se rychleji zpracovávají kartové platby a snížil se počet klepnutí u plateb v hotovosti, dárkovou kartou a u dělených plateb, kdy zákazník platí více způsoby najednou.

    Další změny se týkají účtenek. Pokud Shopify kupujícího rozpozná, obrazovka pro výběr účtenky se předvyplní. Zadávání e-mailu u pokladny zrychlují zkratky e-mailových domén. Shopify uvádí, že změny ušetří několik sekund na prodej a pomohou frontám postupovat rychleji v rušných obdobích.

    Funkce je dostupná od verze Shopify POS 11.17.0. Navazuje na dřívější zrychlení pokladny, například zadávání slev, a na rozpoznávání zákazníků v prodejně z podzimního vydání Editions. Zdrojový post neuvádí konkrétní naměřená čísla ani změny v API.
  zdroje:
    - title: "Shopify: Faster POS checkout"
      url: "https://changelog.shopify.com/posts/faster-pos-checkout"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS zrychluje placení na pokladně. Kartové platby se zpracovávají rychleji, hotovost, dárkové karty a dělené platby vyžadují méně klepnutí. Při rozpoznaném kupujícím je výběr účtenky předvyplněný a při ruční volbě e-mailu pomáhají zkratky e-mailových domén.

## Časová osa

- 2026-11-06: změna zveřejněna v changelogu.
- Dostupné od Shopify POS 11.17.0, aktualizace aplikace na zařízeních je potřeba.

## Dopad pro nás

**Pro vývojáře:** Jde o změnu rozhraní bez zveřejněné změny API. Nic se nemusí upravovat. U obchodů s dělenými platbami stojí za kontrolu, jak se v synchronizovaných objednávkách zobrazují transakce a zda se nezměnil způsob zadávání e-mailu zákazníka.

**Pro PM / PO:** Příležitost pro klienty s kamennými prodejnami, hlavně před sezónou a v nákupních špičkách. Doporučujeme upozornit na aktualizaci POS na verzi 11.17.0 a výše a zmínit ji v retailových konzultacích. Rychlejší pokladna je argument pro Shopify POS.

## Použití v Integrátoru

Přímé využití nemáme, protože změna se týká jen rozhraní POS. Může ale nepřímo ovlivnit data prodejních objednávek, která synchronizujeme.
