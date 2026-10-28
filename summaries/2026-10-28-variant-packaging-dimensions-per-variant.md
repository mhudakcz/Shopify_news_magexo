---
date: 2026-10-28
title: "Variant packaging — nastav package dimensions + default packaging per variant"
title_en: "Variant packaging"
slug: variant-packaging-dimensions-per-variant
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud synchronizujeme katalog z ERP nebo PIM, mohly by se rozměry balení a výchozí obal plnit per varianta a zpřesnit tak sazby dopravců i nákup štítků. Editions ale neuvádí žádné API, takže je nutné nejdřív ověřit, zda se tato data dají zapisovat přes Admin API."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-fulfillment", "admin-graphql-packed-product-dimensions", "market-driven-shipping-admin-api"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidává do adminu možnost nastavit u každé varianty rozměry balíku a výchozí obal, do kterého se zboží balí. Pro oblečení nebo nábytek, kde se velikosti liší objemem, to otevírá přesnější sazby a štítky bez ručního zadávání. Zda a jak si výchozí obal vybere dopravce při nákupu štítku, Editions neuvádí."
tagy: [fulfillment, packaging, variants, dimensions, shipping, operations]
zdroj_kanal: editions
kontext:
  background: |
    Přesnost dopravného závisí na tom, jak dobře Shopify zná velikost zásilky. Řada dopravců účtuje vyšší z hodnot skutečné a objemové hmotnosti, která se odvozuje z rozměrů balíku, a proto rozdíl mezi malým a velkým balením přímo mění cenu štítku. U zboží s variantami je to zvlášť zřetelné. Mikina ve velikosti M se vejde do menší krabice než stejná mikina v XL, u nábytku může jedna varianta znamenat jednu krabici a jiná dvě. Pokud je obal nastavený jednotně pro celý produkt, buď se u některých variant přeplácí, nebo obchodník rozměry opravuje ručně u každé zásilky.

    Variant packaging je jednou ze 19 položek tématu Fulfillment v Editions Fall '26. Podle textu na stránce Editions lze pro každou variantu nastavit rozměry balíku (package dimensions) a vybrat výchozí obal (default packaging), do kterého se položka balí. Stránka k položce neuvádí datum vydání, označení coming soon ani omezení na trhy, a také nepopisuje, jak přesně se tato data využijí při výpočtu sazeb a nákupu štítku. Že dopravce nebo Shopify z nich při generování štítku automaticky vybere správnou krabici, je naše odvozená úvaha. Podporuje ji existující změna v Admin GraphQL API 2027-01, kde Shopify při vyplněných rozměrech u všech položek objednávky vybírá nejmenší vhodný uložený balík pro carrier rates i štítky. Samostatný článek o ní máme v archivu.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Manage packed product dimensions with the Admin GraphQL API"
      url: "https://shopify.dev/changelog/posts/manage-packed-product-dimensions-with-the-admin-graphql-api"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Podle stránky Editions Fall '26 (téma Fulfillment) lze nově **pro každou variantu** nastavit:

- **rozměry balíku** (package dimensions), tedy jak velká je zabalená položka,
- **výchozí obal** (default packaging), do kterého se položka standardně balí.

Praktický smysl je u zboží, kde se varianty liší objemem. Mikina ve velikosti M a ve velikosti XL jsou jiné zásilky, u nábytku se varianty mohou lišit počtem nebo velikostí krabic. Nastavení na úrovni varianty umožňuje popsat tyto rozdíly přímo v katalogu, místo aby se rozměry upravovaly ručně při každém štítku.

**Co je potvrzené a co ne:**

- Potvrzené (zdroj Editions): rozměry balíku a výchozí obal se nastavují per varianta. Stránka odkazuje na nápovědu k nastavení balíků.
- Naše odvozená úvaha: díky tomu bude Shopify nebo dopravce při nákupu štítku vybírat odpovídající krabici a sazby pro oblečení či nábytek budou přesnější. Editions to takto nepopisuje, o výběru krabice podle dopravce se na stránce nic neříká.
- Předchozí stav: podklady k této položce uvádějí, že dřív se rozměry balíku řešily na úrovni produktu. Editions předchozí stav sám nepopisuje, a proto před komunikací směrem ven doporučujeme ověřit v Help Centru, jak to u konkrétního obchodu funguje dnes.
- Souvislost s API: v Admin GraphQL API 2027-01 už existují pole `packedDimensions` na inventory itemu (viz [článek o packed product dimensions](/Shopify_news_magexo/zmena/admin-graphql-packed-product-dimensions/)). Inventory item je ve Shopify navázaný jedna ku jedné na variantu, takže jde pravděpodobně o stejnou datovou vrstvu. Je to ale předpoklad, ne tvrzení Editions.

## Časová osa

- **2026-10-28**: položka je uvedena v Editions Fall '26 v tématu Fulfillment. Datum `ucinnost_od` v hlavičce článku odpovídá dni zveřejnění Editions, nikoli potvrzenému datu nasazení funkce.
- **Datum vydání neuvedeno**: stránka Editions nemá u této položky release date, štítek coming soon ani omezení na trhy. Dostupnost a případné postupné zapínání je třeba ověřit v adminu konkrétního obchodu.
- **Bez deadlinu**: jde o volitelné nastavení. Nic se nemusí měnit ve stávajících integracích ani procesech.

## Dopad pro nás

**Pro vývojáře:** Editions k položce neuvádí žádné API ani GraphQL pole, takže nic nepředpokládáme. Nejbližší známý bod je `InventoryItemMeasurement.packedDimensions` (zápis přes `InventoryItemMeasurementInput`) z verze 2027-01. Po nasazení stojí za to ověřit tři věci:

- zda se rozměry per varianta nastavené v adminu propisují do tohoto pole a dají se tedy číst i zapisovat přes Admin API,
- zda existuje samostatný objekt pro výchozí obal varianty, nebo zda se výchozí obal řídí jen uloženými packages obchodu,
- zda se tato data předávají carrier services třetích stran, případně zda je vidí jen nativní Shopify Shipping. Changelog k packed dimensions to nepotvrzuje.

Pokud synchronizace z ERP nebo PIM dnes zapisuje hmotnost variant, je rozumné přidat sledování i těchto údajů, až budou dostupné. Pozor na konzistenci jednotek (cm a in) a na to, že ruční úpravy v adminu a import z externího systému se mohou přepisovat navzájem. Dopředu je potřeba určit, který systém je pro rozměry balení zdrojem pravdy.

**Pro PM / PO:** Příležitost pro e-shopy s oblečením, obuví, nábytkem a dalším objemným zbožím, kde se velikosti liší balením. Přesnější rozměry per varianta znamenají menší rozdíl mezi dopravným, které zaplatí zákazník, a skutečnou cenou štítku, tedy menší ztráty na marži u zahraničních zásilek, a méně ručního zadávání při expedici. Předpokladem je kvalitní datová základna. U většiny katalogů jsou rozměry balení slabé místo a vyplnění stovek nebo tisíců variant je spíš datový projekt než nastavení v adminu. Benefit se podle dostupných informací projeví až při dostatečně vyplněném katalogu a u obchodů, které využívají Shopify Shipping nebo carrier-calculated rates. U čistě tuzemské expedice s paušálním dopravným bude přínos malý. Urgence je nízká, nic neshoří. Vhodné zařadit do plánovaného datového auditu produktů nebo importu, nikoli jako samostatný projekt.

## Použití v Integrátoru

**Možná.** Pokud synchronizujeme katalog z ERP nebo PIM, mohly by se rozměry balení a výchozí obal plnit per varianta spolu s hmotností, ale až poté, co se potvrdí, že je lze zapisovat přes Admin API. Do té doby jde jen o sledování a o přípravu kvalitních dat o rozměrech balení ve zdrojovém systému.
