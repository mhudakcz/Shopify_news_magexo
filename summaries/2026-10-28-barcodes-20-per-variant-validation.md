---
date: 2026-10-28
title: "Barcodes — až 20 kódů per variant + format validation (GTIN/UPC/EAN)"
title_en: "Barcodes: up to 20 per variant + format validation"
slug: barcodes-20-per-variant-validation
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Barcode slouží jako párovací klíč při synchronizaci produktů do ERP, skladu a marketplace feedů. Víc kódů na jedné variantě mění tvar dat a validace formátu při zadání může odmítnout hodnoty, které dřív prošly bez kontroly. Editions stránka žádnou změnu API neuvádí, takže chování zápisu přes API je nutné ověřit."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-merchandising", "product-variants-multiple-barcodes-merchant", "variants-multiple-barcodes-api"]
editions_release: fall-2026
tldr: "Shopify ve Fall '26 uvádí, že varianta unese až 20 barcodes a admin při zadání validuje jejich formát. POS pak podle kteréhokoli kódu (GTIN, kódy dodavatelů, vlastní identifikátory) najde správnou variantu. Pro nás jde hlavně o kontrolu, jak se validace projeví při zápisu kódů ze synchronizace, API změnu Editions stránka nepřidává."
tagy: [barcodes, variants, gtin, upc, ean, validation, retail]
zdroj_kanal: editions
kontext:
  background: |
    Čárový kód je v katalogu víc než štítek na obalu. U retailerů slouží jako klíč, přes který se spáruje zboží z dodavatelské faktury, příjemka na skladě, skenování na pokladně i produkt v marketplace feedu. Shopify ale dlouho počítalo s jedním barcode na variantu. Obchody s více dodavateli téhož zboží, s vlastním interním kódem vedle GTIN nebo s paralelním prodejem na marketplace a v kamenné prodejně si proto další identifikátory držely v metafieldech, tabulkách nebo externím systému.
    To se začalo měnit na podzim 2026. Od 1. září umí Shopify POS najít variantu podle kteréhokoli přiřazeného kódu a 8. září přišla na straně adminu a Admin API podpora až 20 barcodes na variantu s typem kódu (UPC, EAN, ISBN, GTIN, ASIN nebo Custom), bulk editorem a CSV sloupcem Variant Barcodes. Staré pole barcode zůstalo zpětně kompatibilní a vrací první záznam.
    Editions Fall '26 (28. října 2026) tyto kousky shrnují do jedné položky v tématu Merchandising: každá varianta může mít až 20 barcodes, admin při zadání ověřuje jejich formát a skenování v POS zobrazí odpovídající produkt. Stejná změna se v tématu Retail objevuje jako Universal barcode search (sken nebo vyhledání libovolného kódu včetně GTIN, kódů dodavatelů a vlastních identifikátorů) a téma Fulfillment k ní přidává skenování barcodů v adminu a při inventurách. Žádná z těchto položek není na stránce označena jako coming soon.
    Co Editions stránka neříká: jaká přesně jsou pravidla validace (zda se kontroluje jen délka a znaky, nebo i kontrolní číslice GTIN), zda stejná kontrola platí při zápisu přes API a CSV import, jak se zachází s kódy uloženými před zavedením validace a zda musí být kód unikátní napříč variantami. Tyto body níže uvádíme jako otevřené otázky, ne jako tvrzení Shopify.
  zdroje:
    - title: "Shopify Editions Fall '26 (Merchandising, Retail a Fulfillment, položky o barcodes)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Variants, až 20 barcodes s typem a CSV import"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/"
    - title: "Archiv: ProductVariant.barcode nahrazeno polem barcodes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/"
    - title: "Archiv: POS podporuje více barcodes per variant"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 v tématu Merchandising uvádějí dvě věci o barcodes na variantě:

- **až 20 barcodes na jednu variantu** místo dosavadního jednoho,
- **validace formátu při zadání** v adminu. Chybně zadaný kód se tedy zachytí hned, ne až při příjmu zboží nebo na pokladně.

Navazuje to na POS: sken nebo vyhledání libovolného kódu (GTIN, kódy dodavatelů, vlastní identifikátory) najde správnou variantu. V Editions je tato část vedená i v tématu Retail jako Universal barcode search a téma Fulfillment přidává skenování barcodů v adminu (přechod na produkt, objednávku nebo dávku, přiřazení neznámého kódu) a při inventurách. K souvisejícím článkům viz [Merchandising](/Shopify_news_magexo/zmena/editions-fall-2026-merchandising/) a [Retail](/Shopify_news_magexo/zmena/editions-fall-2026-retail/).

Z archivních článků k září víme, že kódy mají typ (UPC, EAN, ISBN, GTIN, ASIN, Custom), validace se řídí zvoleným typem a pro hromadnou práci je bulk editor a CSV sloupec Variant Barcodes. Existující barcode se nemigruje a zůstává na první pozici, takže prodejní kanály a integrace očekávající jediný kód dál čtou ten samý záznam. Podrobnosti: [varianty s až 20 barcodes](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/), [POS a více barcodes](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/).

**Co Editions stránka neuvádí:**

- konkrétní pravidla validace (délka, povolené znaky, kontrolní číslice GTIN),
- zda validace platí stejně při zápisu přes API a při CSV importu,
- co se stane s kódy uloženými dřív, než validace existovala,
- zda musí být kód unikátní napříč variantami,
- jakékoli změny API. Sekce pro vývojáře barcodes nezmiňuje.

## Časová osa

- 2026-09-01: Shopify POS (verze 11.14) začíná rozpoznávat variantu podle kteréhokoli přiřazeného kódu
- 2026-09-08: až 20 barcodes na variantu s typem a CSV importem, v Admin API nahrazuje pole `ProductVariant.barcode` connection `barcodes` ([breaking změna s vyžadovanou akcí](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/))
- 2026-10-28: Editions Fall '26 shrnují funkci včetně validace formátu, položky nejsou označené jako coming soon
- datum odstranění starého pole `barcode`: zatím neurčeno, Shopify ho avizuje později

## Dopad pro nás

**Pro vývojáře:**

Žádná nová breaking změna, nová API ani nový scope z Editions nevyplývá. Datová stránka (pole `barcodes`) je popsaná v dřívějším článku. Nové je hlavně to, že admin kód při zadání kontroluje. Body k ověření na vývojovém obchodě (jde o naše úvahy, ne o tvrzení Shopify):

- **Chování zápisu přes API.** Zjistit, zda `productSet`, `productVariantsBulkCreate` a `productVariantsBulkUpdate` vrátí u neplatného formátu chybu a jak. Pokud ano, synchronizace nesmí kvůli jednomu špatnému kódu shodit celou dávku, ale musí chybu zalogovat a pokračovat.
- **Správný typ kódu.** Kódy, které nejsou GTIN, UPC ani EAN (interní kód, kód dodavatele), patří do typu Custom. Při zápisu z ERP je potřeba typ určovat záměrně, ne všechno posílat jako GTIN.
- **Normalizace před zápisem.** UPC-A (12 číslic) a EAN-13 se liší úvodní nulou, GTIN-14 a GTIN-8 mají vlastní délky a z tabulek často přicházejí kódy bez úvodních nul. Hodnotu je vhodné sjednotit a ověřit kontrolní číslici ještě u nás, aby se chyba chytila dřív než v Shopify.
- **Limit 20.** Při slučování kódů od více dodavatelů se můžeme dostat nad 20. Je potřeba mít pravidlo, které kódy se uloží a které ne, a pamatovat, že první kód je ten, který vrací staré pole `barcode`.
- **Duplicity napříč variantami.** Pokud je tentýž kód přiřazený dvěma variantám, není jasné, kterou POS při skenu vybere. Před hromadným importem kódů dodavatelů stojí za to ověřit, jak se to Shopify chová, a duplicity hlídat u nás.
- **Čtení.** Kdo čte jen `barcode`, o dalších kódech neví. Viz [variants-multiple-barcodes-api](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/).

**Pro PM / PO:**

Příležitost s nízkou naléhavostí. Největší hodnotu mají retaileři s více dodavateli téhož zboží, s vlastním interním kódem vedle GTIN nebo s kombinací marketplace a kamenné prodejny. Nativní místo pro kódy odpadá potřeba držet je v metafieldech nebo v tabulkách a validace při zadání snižuje počet chyb při příjmu zboží a na pokladně. Žádná migrace ani poplatek se z Editions nevyplývá.

Doporučení: při dalším retailovém projektu se obchodníka zeptat, kde dnes drží kódy dodavatelů a interní identifikátory, a nabídnout jejich převedení na nativní barcodes spolu s POS skenováním a inventurami. U obchodů, které už barcodes synchronizují s ERP, zařadit do plánu kontrolu zápisu popsanou výše.

## Použití v Integrátoru

Možná: pokud synchronizujeme barcode do ERP, skladu nebo marketplace feedu, je vhodné ověřit, že zápis počítá s více kódy s typem a že chyba validace jednoho kódu nezastaví celou dávku.

## Související

- [Editions Fall '26, přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Téma Merchandising](/Shopify_news_magexo/zmena/editions-fall-2026-merchandising/)
- [Variants: až 20 barcodes s typem a CSV import](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/)
- [ProductVariant.barcode nahrazeno polem barcodes](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/)
