---
date: 2026-10-29
title: "Admin: GTIN suggestions + autocomplete (auto-lookup EAN/UPC v produkt editoru)"
title_en: "Admin supports GTIN suggestions and autocomplete"
slug: gtin-suggestions-autocomplete-admin
zdroj: https://changelog.shopify.com/posts/admin-supports-gtin-suggestions-and-autocomplete
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Typ barcode (GTIN nebo Custom) se u varianty může změnit i bez našeho zápisu, protože obchodník přijme návrh v adminu nebo hromadně v bulk editoru. Pokud synchronizace barcodes zapisuje a čte i typ kódu, je třeba počítat s tím, že typ nemusí odpovídat tomu, co jsme zapsali. Post žádnou změnu API neuvádí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-merchandising", "product-variants-multiple-barcodes-merchant", "barcodes-20-per-variant-validation", "variants-multiple-barcodes-api"]
tldr: "Admin při zadání barcode zkontroluje v registru GS1, zda jde o registrovaný GTIN, a typ kódu rovnou přepne z Custom na GTIN. U už uložených kódů, které na GTIN vypadají, nabídne návrh k přijetí nebo odmítnutí, a to i hromadně v bulk editorech. Návrh mění jen typ kódu, nic neblokuje a bez souhlasu obchodníka se nic neuloží."
tagy: [gtin, barcodes, product-editor, admin, autocomplete, inventory]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    GTIN (Global Trade Item Number, v Evropě známý hlavně jako EAN, v USA jako UPC) je číslo, které přiděluje organizace GS1 a které jednoznačně identifikuje zboží v registru. Obchodníci ale do pole s čárovým kódem ve Shopify běžně píšou i věci, které GTIN nejsou, například interní kód skladu, kód dodavatele nebo staré číslo z tabulky. Shopify proto od září 2026 u variant rozlišuje typ kódu (UPC, EAN, ISBN, GTIN, ASIN nebo Custom) a při zadání kontroluje formát. Typ Custom se často nechá ve výchozím stavu i u kódů, které ve skutečnosti jsou platné GTIN.

    Nový post z merchant changelogu z 29. října 2026 tuto mezeru zacelí kontrolou proti registru GS1. Když nový barcode vypadá jako GTIN, admin ho vyhledá v GS1 a pokud je registrovaný, označí ho jako typ GTIN a změnu zvýrazní. U už uložených kódů typu Custom, které na GTIN vypadají, zobrazí návrh ke změně typu, který lze přijmout nebo odmítnout. Pokud je kód v GS1 registrovaný k nějakému produktu, zobrazí se po najetí kurzorem záznam z registru vedle dodavatele a názvu produktu obchodníka. Je to jen informace pro porovnání, nic se podle ní nemusí měnit. V produktovém a skladovém bulk editoru jde všechny návrhy přijmout nebo odmítnout najednou.

    Post je malá úprava práce s barcodes, ne doplňování produktových dat. Podle textu návrh mění jedině typ kódu z Custom na GTIN. Dodavatel, název produktu a popis se z GS1 nepřebírají, jen se zobrazují k porovnání. Nic neblokuje uložení, Shopify uložený kód nezmění bez souhlasu obchodníka a obchodník může dál zvolit libovolný typ včetně Custom pro interní kódy. Nepřijaté návrhy a varování nijak neovlivní produkty ani práci s nimi. Post neuvádí tarif, region, datum nasazení ani žádnou změnu API. Tematicky navazuje na barcodes v Editions Fall '26 (téma Merchandising), samotný post se ale na Editions neodkazuje.
  zdroje:
    - title: "Shopify: Admin supports GTIN suggestions and autocomplete"
      url: "https://changelog.shopify.com/posts/admin-supports-gtin-suggestions-and-autocomplete"
    - title: "Shopify: Product variants now support multiple barcodes"
      url: "https://changelog.shopify.com/posts/multiple-barcodes-in-variants"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Admin Shopify nově porovnává čárové kódy s registrem GS1, který GTIN přiděluje, a pomáhá obchodníkům poznat, které z jejich kódů jsou skutečně GTIN. Post popisuje čtyři věci:

- **Autocomplete při psaní.** Když nový barcode vypadá jako GTIN, Shopify ho vyhledá v GS1. Je-li registrovaný, kód se označí jako typ `GTIN` a změna se zvýrazní.
- **Návrh u uložených kódů.** U kódů typu `Custom`, které na GTIN vypadají, se zobrazí návrh. Obchodník ho přijme (typ se změní na `GTIN`) nebo odmítne.
- **Varování z porovnání s registrem.** Pokud je kód v GS1 registrovaný k nějakému produktu, zobrazí se po najetí kurzorem záznam z registru, aby šel porovnat s dodavatelem a názvem produktu v obchodě. Je to jen informace. Titulek, dodavatel ani popis se měnit nemusí.
- **Hromadné akce.** V bulk editoru produktů a skladu jde všechny návrhy GTIN přijmout nebo odmítnout najednou.

Co z postu plyne o rozsahu: jediné pole, které návrhy mění, je **typ kódu** (z `Custom` na `GTIN`). Funkce tedy nedoplňuje značku, kategorii, rozměry ani název produktu z registru, jak by název mohl naznačovat. Dodavatel, název a popis se z GS1 jen zobrazují k porovnání.

Záruky, které post uvádí:

- nic neblokuje uložení,
- uložený kód se nezmění, dokud obchodník návrh nepřijme,
- obchodník může dál zvolit jakýkoli typ, včetně `Custom` pro interní kódy,
- ignorování návrhů a varování nijak neovlivní produkty ani práci s nimi.

Post neuvádí tarifní omezení, region, plán nasazení ani žádnou změnu API. Odkazuje na dřívější novinku o [více barcodes na variantě](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/).

## Časová osa

- 2026-09-08: varianta unese až 20 barcodes, každý s typem (UPC, EAN, ISBN, GTIN, ASIN, Custom), viz [Variants: až 20 barcodes](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/)
- 2026-10-28: Editions Fall '26 shrnují barcodes v tématu Merchandising, viz [Barcodes: až 20 kódů + validace formátu](/Shopify_news_magexo/zmena/barcodes-20-per-variant-validation/)
- 2026-10-29: Shopify publikuje GTIN návrhy a autocomplete v adminu na merchant changelogu
- tarif, region a harmonogram nasazení: post neuvádí

## Dopad pro nás

**Pro vývojáře:**

Post neuvádí žádnou změnu API, nový scope ani webhook, takže z něj nevyplývá povinná akce. Jde o změnu v adminu, která ale může nepřímo měnit data, která čteme. Body k ověření na vývojovém obchodě (jde o naše úvahy, ne o tvrzení Shopify):

- **Typ kódu se může změnit bez našeho zápisu.** Pokud synchronizace čte typ u položek v connection `barcodes` a podle něj něco rozhoduje (například co jde do marketplace feedu), nemůžeme předpokládat, že typ zůstane takový, jaký jsme zapsali. Viz [ProductVariant.barcode nahrazeno polem barcodes](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/).
- **Přepisování typu při každém běhu.** Pokud synchronizace při každém běhu zapisuje celou sadu barcodes včetně typu `Custom`, může přepsat typ `GTIN`, který obchodník přijal v adminu. Obchodník by pak návrh přijímal opakovaně. Je potřeba rozhodnout, kdo je zdrojem pravdy pro typ kódu, a podle toho zápis navrhnout.
- **Správný typ při zápisu.** Kódy, které jsou skutečně GTIN, UPC nebo EAN, je vhodné zapisovat se správným typem rovnou. Interní kódy a kódy dodavatelů patří do `Custom`, ať je nelze omylem označit jako GTIN.
- **Chování při změně.** Post nezmiňuje, zda změna typu přijatím návrhu vyvolá webhook `products/update`, ani zda se projeví v exportu. Pokud na tom závisí aktualizace v ERP nebo ve feedu, je to třeba vyzkoušet.
- **Žádná změna zápisu přes API.** Post mluví o editoru v adminu. Zda se kontrola proti GS1 uplatní i při zápisu přes API nebo CSV importu, neuvádí, a proto s ní zatím při zápisu počítat nelze.

**Pro PM / PO:**

Příležitost s nízkou naléhavostí. Funkce zlepšuje kvalitu dat v katalogu: obchodníci, kteří mají v poli barcode směs GTIN a interních kódů, dostanou nápovědu, co je platný GTIN, a hromadné akce jim práci zrychlí. Kdo má kvalitní GTIN, snáz splní požadavky nákupních kanálů a feedů, které GTIN vyžadují (post to ale sám netvrdí, je to náš výklad). Varování z porovnání s registrem navíc může odhalit špatně přiřazený kód, například když záznam v GS1 patří jinému produktu, než jaký má obchodník na variantě. To je také náš výklad, post uvádí jen zobrazení záznamu pro porovnání.

Žádná migrace ani poplatek z postu nevyplývá a nic se nemění bez souhlasu obchodníka.

Doporučení: při čištění katalogu nebo přípravě feedů obchodníkovi připomenout, že admin teď typ GTIN sám navrhuje, a domluvit, které kódy jsou interní a mají zůstat jako `Custom`. U obchodníků, kterým synchronizujeme barcodes z ERP, zařadit do plánu kontrolu popsanou výše.

## Použití v Integrátoru

Možná: pokud synchronizujeme barcodes variant do ERP, skladu nebo marketplace feedu včetně jejich typu, je vhodné ověřit, že zápis nepřepisuje typ `GTIN` přijatý obchodníkem v adminu zpět na `Custom`.

## Související

- [Editions Fall '26, přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Téma Merchandising](/Shopify_news_magexo/zmena/editions-fall-2026-merchandising/)
- [Variants: až 20 barcodes s typem a CSV import](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/)
- [Barcodes: až 20 kódů per variant + validace formátu](/Shopify_news_magexo/zmena/barcodes-20-per-variant-validation/)
- [ProductVariant.barcode nahrazeno polem barcodes](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/)
