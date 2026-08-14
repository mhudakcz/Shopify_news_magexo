---
date: 2026-08-11
title: "Vylepšený printed receipt editor v Shopify POS — sale/return/exchange/gift na jednom místě"
title_en: "Enhanced printed receipt editor"
slug: enhanced-printed-receipt-editor-pos
zdroj: https://changelog.shopify.com/posts/enhanced-printed-receipt-editor
shrnuto_dne: 2026-08-14
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchanti s custom Liquid šablonami účtenek budou muset do 2027-01-01 přejít na nový formát, což může vyžadovat revizi jejich POS setupu."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-printing-api-hardware, new-pos-editor, pos-cash-management-drawers-fields]
tldr: "Shopify POS sjednotil editaci sale, return, exchange, gift a gift card účtenek do jednoho content editoru s live náhledem, bez nutnosti upravovat Liquid."
tagy: [pos, printed-receipts, editor, retail, sale, return, exchange, gift-card]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Doteď byla správa vzhledu tištěných účtenek v Shopify POS roztříštěná napříč několika sekcemi a typy dokladů. Sale, return, exchange, gift a gift card receipts se konfigurovaly odděleně, a jakákoliv jemnější úprava layoutu nebo brandingu obvykle vyžadovala zásah do Liquid šablony. To dělalo z běžné kosmetické změny (logo, patička, vratová politika) úkol pro vývojáře.

    Nový content editor sjednocuje všech pět typů účtenek do jednoho rozhraní s live náhledem. Merchant tam nastaví branding, header a footer napříč všemi typy najednou, případně přepíše nastavení per-location. Return a exchange doklady navíc dostaly společnou sekci s jedním souhrnem částky místo dvou oddělených bloků. Gift receipts byly předělány tak, aby neobsahovaly položky (line items) — usnadňuje to hromadný tisk balených dárků. Přibyla i možnost řídit, zda se gift card receipt tiskne automaticky, plus vestavěná pole pro return policy text, podpisové řádky a regionální daňové identifikátory (VAT, GST/QST, ABN).

    Shopify zároveň oznámil migrační okno pro obchody s vlastní Liquid šablonou účtenek: stávající Liquid šablony fungují dál během preview období, ale do 1. ledna 2027 je potřeba přejít na nový formát. Přechod je nevratný a obchody, které zůstanou na Liquid po deadline, budou automaticky migrovány.
  zdroje:
    - title: "Shopify: Enhanced printed receipt editor"
      url: "https://changelog.shopify.com/posts/enhanced-printed-receipt-editor"
  generated_at: 2026-08-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify POS dostává jeden centrální content editor pro tištěné účtenky, který nahrazuje dosavadní roztříštěnou správu napříč pěti typy dokladů — sale, return, exchange, gift a gift card receipts. Editor nabízí real-time preview, takže merchant vidí výsledek okamžitě, aniž by musel cokoliv publikovat nebo procházet Liquid kód.

Return a exchange účtenky se sloučily do jedné sekce s jedním souhrnem částky (dřív dvě oddělené sekce). Gift receipts nově vynechávají jednotlivé položky, což usnadňuje jejich hromadný tisk při balení dárků. Přibylo také přepínání automatického tisku gift card receipts a vestavěná pole pro return policy, podpisové řádky a regionální daňové identifikátory (VAT, GST/QST, ABN). Branding, header a footer lze nastavit globálně napříč všemi typy účtenek a zároveň přepsat per-location, kde je potřeba jiná varianta (např. pobočka v jiné zemi s jiným daňovým identifikátorem).

Součástí oznámení je i migrační termín: obchody, které dosud používají vlastní Liquid šablonu účtenky, mají čas do 1. ledna 2027 na přechod na nový formát. Liquid šablony fungují dál během přechodného období, ale přechod na nový editor je jednosměrný — jakmile se obchod přepne, návrat k Liquid už není možný. Kdo nepřejde sám, bude po deadline automaticky migrován.

## Časová osa

- **2026-08-11** — Enhanced printed receipt editor publikován v Shopify changelogu, k dispozici merchantům v POS.
- **2027-01-01** — Deadline pro migraci z custom Liquid šablon účtenek na nový editor; poté automatická migrace u zbývajících obchodů.

## Dopad pro nás

**Pro vývojáře:** Pokud jsme pro klienta v minulosti stavěli custom Liquid šablonu účtenky (branding, layout, specifické texty), je potřeba prověřit, zda se dá ekvivalentně pokrýt novým content editorem, nebo zda klient potřebuje zůstat na Liquid do deadline 2027-01-01. Vzhledem k tomu, že přechod je nevratný, případnou migraci má smysl otestovat na staging/preview prostředí předem, ne až narychlo před koncem roku 2026.

**Pro PM / PO:** Jde o low-urgency merchant-facing změnu bez okamžitého dopadu na běžící zakázky. Relevantní je hlavně pro klienty s POS retail provozem a vlastním brandingem účtenek — u nich stojí za to do konce roku 2026 preventivně zmínit blížící se migrační deadline, aby je nezaskočil automatický přechod.

## Použití v Integrátoru

Přímý dopad na naše řešení nemáme, protože nespravujeme POS printed receipt šablony jako standardní součást dodávky. Relevantní je to jen u klientů, kterým jsme dřív dělali custom Liquid úpravu účtenek — tam je potřeba hlídat termín 2027-01-01.
