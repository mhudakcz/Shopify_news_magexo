---
date: 2026-07-27
title: "POS UI extensions: Printing API (shopify.printing) — přímý tisk na hardware receipt printers"
title_en: "POS UI extensions can now print directly to hardware receipt printers"
slug: pos-ui-extensions-printing-api-hardware
zdroj: https://shopify.dev/changelog/pos-ui-extensions-can-now-print-directly-to-hardware-receipt-printers
shrnuto_dne: 2026-07-28
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom pro klienta stavěli POS extension s vlastními účtenkami (gift receipt, záruční list, promo leták), teď to jde poslat přímo na hardware tiskárnu bez závislosti na hostitelské POS appce."
dotcene_klienty: []
souvisejici: [pos-extensions-background-target, pos-ui-extensions-2026-07-bundle-discount-allocations, pos-ui-extensions-offline]
tldr: "POS UI Extensions dostávají nové Printing API (shopify.printing), které umí tisknout HTML a obrázky přímo na hardware receipt printer bez systémového print dialogu; nahrazuje starší shopify.print."
tagy: [pos, extensions, printing, hardware, receipt-printer, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI Extensions umožňují vývojářům rozšiřovat prodejní rozhraní Shopify POS o vlastní obrazovky, tlačítka a logiku (typy targetů: Tile, Action, Block, a nově i background target). Až doteď ale extensions neměly přímý přístup k tiskárně — pokud chtěly něco vytisknout, musely spoléhat na hostitelskou POS aplikaci a její vlastní tiskové workflow, což prakticky znemožňovalo vytisknout cokoliv mimo standardní účtenku.

    Nové Printing API (`shopify.printing`) tento nedostatek řeší. Přidává metodu `getPrinters()`, která vrátí seznam dostupných hardware receipt printerů a jejich stav připojení, a metodu `print(src, options?)`, která pošle dokument (HTML nebo obrázek) přímo na konkrétní tiskárnu — bez zobrazení systémového print dialogu uživateli. API nahrazuje starší `shopify.print`, který je nyní označen jako deprecated; žádná okamžitá akce se nevyžaduje, migrace se řeší až při adopci API verze 2026-07. Omezení: PDF soubory přes toto API tisknout nelze, pro ně je stále potřeba systémový print dialog bez možnosti cílit na konkrétní hardware. Discovery tiskáren navíc vyžaduje Shopify POS verzi 11.11.0 a vyšší — na starších verzích `getPrinters()` vrátí prázdné pole.

    Prakticky se tím otevírá prostor pro custom tiskové výstupy generované přímo z third-party appek — gift receipty, záruční listy, promo vložky do sáčku, nebo jakýkoliv jiný doklad, který dřív šel vytisknout jen přes obchvat (export, e-mail, ruční tisk mimo POS). Appky si navíc mohou samy ověřit, jestli je tiskárna vůbec připojená, a podle toho se rozhodnout, zda tisknout na konkrétní hardware nebo nechat rozhodnutí na uživateli přes systémový dialog.
  zdroje:
    - title: "Shopify: POS UI extensions can now print directly to hardware receipt printers"
      url: "https://shopify.dev/changelog/pos-ui-extensions-can-now-print-directly-to-hardware-receipt-printers"
    - title: "Shopify dev docs: Printing API reference"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/2026-07/target-apis/platform-apis/printing-api"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidává do POS UI Extensions nové **Printing API** (`shopify.printing`), které řeší dlouhodobé omezení — extensions doteď nemohly tisknout samy, jen přes hostitelskou POS appku. Nové API dává extensions přímý přístup k hardware receipt printerům:

- `shopify.printing.getPrinters()` — vrátí seznam dostupných tiskáren a jejich stav připojení (`connected` / nepřipojeno).
- `shopify.printing.print(src, options?)` — pošle konkrétní dokument (HTML nebo obrázek) na vybranou tiskárnu, volitelně bez zobrazení systémového print dialogu.

API nahrazuje starší `shopify.print`, který je nyní deprecated (bez nutnosti okamžité migrace). Klíčová omezení: PDF soubory přes toto API tisknout nelze — ty stále vyžadují systémový print dialog a nejde je nasměrovat na konkrétní hardware. Discovery tiskáren navíc funguje jen od Shopify POS 11.11.0 výš; na starších verzích `getPrinters()` vrátí prázdný seznam, takže je potřeba počítat s fallbackem.

Doporučený vzor z dokumentace kombinuje obě metody — pokud je nalezena připojená tiskárna, tiskne se přímo na ni; jinak se použije obecný `print()` bez specifikace tiskárny (typicky přes systémový dialog):

```jsx
const printers = await shopify.printing.getPrinters();
const receiptPrinter = printers.find((printer) => printer.connected);

if (receiptPrinter) {
  await shopify.printing.print('/print/receipt', {printer: receiptPrinter});
} else {
  await shopify.printing.print('/print/receipt');
}
```

## Časová osa

- **2026-07-27** — Printing API (`shopify.printing`) publikováno v changelogu, dostupné od API verze 2026-07.
- `shopify.print` označen jako deprecated, bez pevného termínu vypnutí — migrace se řeší při adopci 2026-07.

## Dopad pro nás

**Pro vývojáře:** Pokud bychom stavěli POS extension s vlastním tiskovým výstupem, nový `shopify.printing` znamená, že už nemusíme obcházet omezení hostitelské appky — stačí ověřit `getPrinters()` a poslat HTML/obrázek přímo na hardware. Je potřeba počítat s fallbackem pro starší POS verze (< 11.11.0) a s tím, že PDF tímto API netiskneme.

**Pro PM / PO:** Otevírá se prostor pro custom nabídky typu gift receipty, záruční listy nebo promo vložky přímo z appky, bez závislosti na tom, co umí tisknout nativní POS. Užitečné jako argument v nabídkách pro klienty s vlastním retail workflow, kde standardní účtenka nestačí.

## Použití v Integrátoru

Aktuálně POS extensions s vlastním tiskem nestavíme, ale pokud by v budoucnu vznikl požadavek na custom receipt/vouchery z appky, tato funkčnost by byla přímo použitelná bez nutnosti řešit tisk oklikou přes hostitelskou appku.
