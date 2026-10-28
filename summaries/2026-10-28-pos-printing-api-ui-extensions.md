---
date: 2026-10-28
title: "POS Printing API — print receipts, labels, slips z POS UI extensions"
title_en: "POS Printing API"
slug: pos-printing-api-ui-extensions
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme stavět POS extension s vlastním tiskovým výstupem, například gift receipt, záruční list, skladový lístek nebo štítek, můžeme dokument poslat přímo na tiskárnu přes shopify.printing bez obcházení tiskového workflow hostitelské POS aplikace."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "pos-ui-extensions-printing-api-hardware", "enhanced-printed-receipt-editor-pos"]
editions_release: fall-2026
tldr: "Editions Fall '26 řadí mezi platformní primitiva pro vývojáře Printing API pro POS UI extensions: extension může programaticky tisknout účtenky, štítky, lístky a další obsah přes shopify.printing (getPrinters a print), místo aby spoléhala na starší shopify.print se systémovým dialogem; API je dostupné od verze 2026-07, nevyžaduje migraci a otevřené zůstává, jaké typy tiskáren a formátů mimo HTML a obrázky na účtenkové tiskárny podporuje."
tagy: [pos, printing-api, ui-extensions, receipts, labels, developer]
zdroj_kanal: editions
kontext:
  background: |
    Shopify POS umožňuje vývojářům rozšiřovat prodejní rozhraní pomocí POS UI extensions: vlastních dlaždic na smart gridu, akcí, bloků a od července 2026 i background targetu. Tisk byl do července 2026 doménou hostitelské POS aplikace a jejího nativního tiskového workflow. Extension, která chtěla vytisknout něco mimo standardní účtenku, měla k dispozici jen starší metodu shopify.print, která otevírala systémový tiskový dialog, takže uživatel musel tiskárnu vybrat a potvrdit ručně a extension nemohla zjistit, jestli je nějaká tiskárna vůbec připojená.

    Přímý tisk z extension popsal archiv poprvé v článku z 27. července 2026, kdy dev changelog představil API shopify.printing. Obsahuje metodu getPrinters(), která vrací dostupné hardware receipt printery a stav jejich připojení, a metodu print(src, options?), která pošle HTML nebo obrázek na zvolenou tiskárnu bez systémového dialogu. API je dostupné od API verze 2026-07, starší shopify.print je označený jako deprecated bez pevného termínu vypnutí a discovery tiskáren vyžaduje Shopify POS 11.11.0 nebo novější. PDF soubory se přes toto API tisknout nedají.

    Editions Fall '26 z 28. října 2026 tuto položku zařazuje do Developer tématu, do bloku platform primitives, vedle POS Storage API, background extensions a Polarisu. Zdrojová stránka ji popisuje jako možnost stavět POS UI extensions, které tisknou účtenky, štítky, lístky a další obsah, a odkazuje na vývojářskou dokumentaci. Položka nemá stavový štítek (beta, early access ani coming soon). Stránka Editions nezmiňuje konkrétní typy tiskáren ani formáty, proto se technické detaily berou z dokumentace a z dřívějšího changelogu, ne z marketingového textu.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: POS UI extensions — Printing API (shopify.printing), přímý tisk na hardware receipt printers"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-ui-extensions-printing-api-hardware/"
    - title: "Shopify: POS UI extensions can now print directly to hardware receipt printers"
      url: "https://shopify.dev/changelog/pos-ui-extensions-can-now-print-directly-to-hardware-receipt-printers"
    - title: "Shopify dev docs: Printing API reference (POS UI extensions 2026-07)"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/2026-07/target-apis/platform-apis/printing-api"
    - title: "Archiv: Vylepšený printed receipt editor v Shopify POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/enhanced-printed-receipt-editor-pos/"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

POS UI extensions mají nativní **Printing API** dostupné přes objekt `shopify.printing`. Extension tak může tisknout programaticky, bez zásahu uživatele do systémového dialogu a bez závislosti na tom, co umí vytisknout hostitelská POS aplikace. Editions Fall '26 ji uvádí jako možnost stavět rozšíření, která tisknou účtenky, štítky, lístky (slips) a další obsah.

Rozhraní má dvě metody:

- `shopify.printing.getPrinters()` — vrátí seznam dostupných tiskáren a stav jejich připojení, takže extension zjistí, jestli je co použít.
- `shopify.printing.print(src, options?)` — pošle dokument (HTML nebo obrázek) na vybranou tiskárnu.

Dokumentací doporučený vzor kombinuje obě metody: pokud existuje připojená tiskárna, tiskne se přímo na ni, jinak se zavolá `print()` bez cílové tiskárny a rozhodnutí zůstane na uživateli.

```js
const printers = await shopify.printing.getPrinters();
const receiptPrinter = printers.find((printer) => printer.connected);

if (receiptPrinter) {
  await shopify.printing.print('/print/receipt', {printer: receiptPrinter});
} else {
  await shopify.printing.print('/print/receipt');
}
```

Co se tím mění oproti dřívějšku: starší `shopify.print` fungovalo přes systémový tiskový dialog, extension nevěděla o stavu tiskárny a každý tisk vyžadoval ruční potvrzení. Nové API je nahrazuje a starší metoda je označená jako deprecated, bez pevného termínu vypnutí.

Tři věci stojí za upřesnění, protože zdrojová stránka Editions je nezmiňuje:

- **Formáty:** technická dokumentace mluví o HTML a obrázcích. PDF soubory přes `shopify.printing` tisknout nejde, ty dál vyžadují systémový dialog bez možnosti cílit na konkrétní hardware.
- **Typy tiskáren:** dokumentace a changelog popisují hardware receipt printery. Editions sice zmiňuje štítky a lístky, ale podpora samostatných tiskáren štítků nebo A4 tiskáren z uvedených podkladů nevyplývá a je potřeba ji ověřit v referenci API před slibem zákazníkovi.
- **Verze POS:** discovery tiskáren vyžaduje Shopify POS 11.11.0 nebo novější, na starších verzích vrací `getPrinters()` prázdné pole.

## Časová osa

- **27. 7. 2026** — Printing API (`shopify.printing`) zveřejněno v dev changelogu, dostupné od API verze 2026-07; `shopify.print` označeno jako deprecated.
- **28. 10. 2026** — Editions Fall '26 řadí Printing API do Developer tématu, blok platform primitives, bez stavového štítku. Nové schopnosti oproti červencovému changelogu zdrojová stránka neuvádí.
- **Bez pevného termínu** — vypnutí `shopify.print` nemá oznámené datum, migrace se řeší při adopci API verze 2026-07 nebo novější.
- **1. 1. 2027** — související, ale samostatný termín: obchody s vlastní Liquid šablonou tištěné účtenky musí přejít na nový printed receipt editor. Netýká se Printing API, ale řeší stejnou oblast (vzhled účtenky u nativního POS tisku).

## Dopad pro nás

**Pro vývojáře:** Pokud stavíme nebo udržujeme POS UI extension s vlastním tiskem, je potřeba projít kód a nahradit případná volání `shopify.print` za `shopify.printing`. Praktický postup je zavolat `getPrinters()`, najít připojenou tiskárnu a poslat HTML nebo obrázek přímo na ni, s fallbackem na `print()` bez tiskárny pro starší verze POS (pod 11.11.0) a pro případ, že žádná tiskárna není připojená. Dokument je nutné připravit jako HTML nebo obrázek, ne jako PDF. Před implementací štítků nebo lístků je potřeba v dokumentaci ověřit, které konkrétní tiskárny a rozměry papíru jsou podporované, a otestovat to na reálném hardwaru, protože chování tiskáren se mezi výrobci liší. Doporučujeme vzít v úvahu i kombinaci s background targetem, který může tisk spouštět na událost, například po dokončení transakce, a s reaktivním Storage API pro předávání stavu mezi targety.

**Pro PM / PO:** Nic se nerozbije a žádná akce není povinná. Je to nízkoprioritní příležitost pro projekty s retailovým provozem, kde standardní účtenka nestačí: gift receipty, záruční listy, vouchery, skladové a vychystávací lístky nebo štítky na zboží. Má smysl ji zmínit v nabídkách a odhadech pro obchody s fyzickými prodejnami, ale slibovat konkrétní typ tiskárny až po ověření v dokumentaci a na testovacím zařízení. Pokud má obchod stávající custom Liquid šablonu účtenky, je to samostatná agenda s termínem 1. 1. 2027 a Printing API ji nenahrazuje.

## Použití v Integrátoru

**Možná relevantní.** POS extensions s vlastním tiskem dnes aktivně nevyvíjíme, takže jde o podklad pro budoucí retailové projekty, kde by stálo za to tisknout vlastní doklady nebo štítky přímo z extension. Pokud by takový požadavek vznikl, funkčnost je k dispozici bez obcházení tiskového workflow hostitelské aplikace.
