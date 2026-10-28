---
date: 2026-10-28
title: "Editions Fall '26: Merchandising — až 20 barcodes na variantu a kolekce z více zdrojů pro složitější katalogy"
slug: editions-fall-2026-merchandising
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Téma se dotýká datového modelu katalogu (barcodes na variantách, kolekce s více zdroji, mapování produktových dat per prodejní kanál), který se běžně synchronizuje do ERP, skladů a marketplace kanálů. Ověřit je třeba hlavně čtení pole barcode a práci s kolekcemi přes sources."
dotcene_klienty: []
souvisejici: ["editions-fall-2026"]
editions_release: fall-2026
tldr: "Merchandising v Editions Fall '26 sdružuje 9 položek kolem katalogu: až 20 barcodes na variantu, kolekce z více zdrojů (vytvořitelné i přes Sidekick), správu produktu a variant na jedné stránce a mapování produktových dat per prodejní kanál. Osm položek je dostupných hned, Cart preview by market přijde později. Největší hodnotu mají pro obchody se složitým mixem SKU a dodavatelů."
tagy: [editions, merchandising, "fall-2026", barcodes, variants, collections, catalog, sidekick, digital-products, markets, collective]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions jsou půlroční release události, které shrnují měsíce změn z changelogu do jednoho příběhu. Fall '26 (pod názvem Exponential) vyšel 28. října 2026 a téma Merchandising v něm pokrývá produktová data, varianty, kolekce a katalogy, tedy vrstvu, na které stojí vše ostatní: storefront, POS, prodejní kanály i trhy.

    Společným jmenovatelem devíti položek je uvolnění katalogové struktury. Varianta už nemusí mít jediný identifikátor (až 20 barcodes), kolekce nemusí vznikat z jediné logiky (více zdrojů najednou) a produktová data se dají upravovat odděleně pro každý prodejní kanál. Několik položek navazuje na změny, které už v archivu máme z léta a z počátku podzimu (barcodes na variantách od září, kolekce s více zdroji od července). Editions je tedy částečně kurátorský přehled toho, co už běží, a částečně oznámení nových kousků (mapování dat per kanál, Cart preview by market, Collective analytika katalogu).
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Product variants now support multiple barcodes"
      url: "https://changelog.shopify.com/posts/multiple-barcodes-in-variants"
    - title: "Shopify: Variants now support multiple barcodes (Admin API)"
      url: "https://shopify.dev/changelog/product-variant-barcode-is-being-replaced-by-barcodes"
    - title: "Shopify: Collections now support multi-source and variants"
      url: "https://changelog.shopify.com/posts/collections-now-support-multi-source-and-variants"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem téma je

Téma **Merchandising** v Editions Fall '26 sdružuje 9 položek kolem toho, jak je v Shopify popsaný a uspořádaný produktový katalog. Obecný směr je jasný: méně pevných omezení v datovém modelu. Varianta unese až 20 barcodes místo jednoho, kolekce se dá postavit z více zdrojů najednou (produkty, aplikace i varianty) a produktová data se dají upravovat zvlášť pro každý prodejní kanál, přičemž se kanály samy udržují aktuální. K tomu přibývá správa produktu a variant na jedné stránce s hromadnými úpravami a doplňky okolo katalogu: cenové doporučení pro nově aktivní produkty, prodej přístupu přes URL, vylepšená aplikace Digital Products a v síti Collective přehled výkonu katalogu.

Strategicky je nejzajímavější kombinace **více barcodes na variantu** a **kolekcí z více zdrojů**. Obě věci řeší stejný problém z různých stran: reálný katalog obchodu s více dodavateli, vlastními interními SKU, marketplace identifikátory a sezónními výběry se do jednoho identifikátoru a jedné logiky zařazení nevejde. Pro retailery s komplexním mixem SKU a dodavatelů je to praktický posun, protože části, které dosud museli držet mimo Shopify (v metafieldech, tabulkách nebo externím systému), teď mají nativní místo. Zároveň je to i změna pro každého, kdo katalog z Shopify čte a synchronizuje dál, o čemž je část Pro vývojáře níže.

Dostupnost: 8 z 9 položek je podle Editions dostupných hned (dvě přes samostatné aplikace, Smart Pricing a Digital Products), jediná položka označená jako coming soon je Cart preview by market.

---

## Top 3 highlights

### 1. Až 20 barcodes na jednu variantu

Admin umožní přidat k variantě až 20 barcodes, při zadání validuje jejich formát a POS je umí naskenovat a dohledat správný produkt. To je shrnutí změny, kterou už v archivu máme z září: [POS podporuje více barcodes per variant](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/) (od POS 11.14) a [varianty s až 20 barcodes včetně typů a CSV importu](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/).

**Pro merchanty:** Typický zisk mají obchody s více dodavateli téhož zboží (každý dodavatel jiný čárový kód), s vlastním interním SKU vedle GTIN, nebo s paralelním prodejem na marketplace (ASIN) a v kamenné prodejně (GTIN/EAN). Podle archivních článků mají kódy typ (UPC, EAN, ISBN, GTIN, ASIN, Custom) a dají se spravovat i hromadně přes bulk editor a CSV sloupec Variant Barcodes. K tomu, kdy stačí interní SKU kód a kdy je potřeba registrovaný GTIN, se hodí [blogový přehled generátorů čárových kódů](/Shopify_news_magexo/zmena/blog-generator-carovych-kodu-aplikace-male-firmy/).

**Pro vývojáře:** Datová strana je [breaking změna s vyžadovanou akcí](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/): pole `ProductVariant.barcode` je nahrazováno connection `barcodes`. Staré pole zatím vrací první záznam, takže jakmile obchodník přidá druhý kód, integrace čtoucí jen `barcode` o dalších kódech neví. Rizikové je to všude, kde barcode slouží jako párovací klíč (ERP, sklad, marketplace feed).

### 2. Kolekce z více zdrojů (a vytváření přes Sidekick)

Podle Editions lze do jedné kolekce spojit produkty, aplikace nebo varianty, kolekci vytvořit přes Sidekick, znovu ji použít a nechat ji pohánět další operace. Merchant-facing základ máme v archivu z července: [kolekce s více zdroji a na úrovni variant](/Shopify_news_magexo/zmena/collections-multi-source-variants/) (automatizované podmínky, ručně vybrané produkty, výjimky, jiné kolekce jako vstup; znovupoužití napříč slevami, daněmi a kanály). Datový model vznikl jako [preview Collections API](/Shopify_news_magexo/zmena/new-collections-api-preview/) už v Spring '26.

**Pro merchanty:** Jedna kolekce nahradí několik úzce zaměřených kolekcí a ručních úprav při každé změně sortimentu. Největší přínos čekejme u fashion, B2B a multi-brand katalogů a všude, kde se kolekce používají i mimo navigaci (slevy, daně, kanály). Novinkou ve Fall '26 je především zmínka o Sidekicku jako způsobu, jak takovou kolekci sestavit konverzací.

**Pro vývojáře:** Aplikace, které s kolekcemi pracují, potřebují pro nové možnosti API verzi 2026-07 a čtení přes `Collection.sources` místo `ruleSet`; kolekce postavené na nových možnostech se přes starší verze API nezobrazí. Editions uvádí mezi zdroji i aplikace. V archivních článcích jsme zatím viděli podmínky, ruční výběr, výjimky a jiné kolekce, takže co přesně znamená aplikace jako zdroj kolekce, je třeba ověřit v dokumentaci.

### 3. Mapování produktových dat per prodejní kanál

Merchant může upravit a namapovat produktová data pro každý prodejní kanál zvlášť přímo v adminu a každý kanál se podle Editions sám udržuje aktuální, když se katalog mění. V archivu pro to samostatný článek zatím nemáme.

**Pro merchanty:** Odpovídá to na běžnou potřebu multi-channel prodeje: jiný název, popis nebo atributy pro marketplace než pro vlastní e-shop, bez ručního kopírování a pozdějšího dohledávání, co se kde rozešlo. Hodnota roste s počtem kanálů.

**Pro vývojáře:** Zdroj popisuje jen funkci v adminu. Není uvedeno, které pole se dají přemapovat, které kanály to podporují ani zda a jak se to projeví v API. U všeho, co čte produktová data pro feedy a marketplace, proto stojí za to ověřit, zda se výsledek per-kanálových úprav dá z API získat, nebo zda se čte jen základní produkt.

---

## Všechny položky (9 celkem)

### Pro merchanty: katalog a produktová data (4 položky)

**1. Product data mapping by channel (dostupné)**
Úprava a mapování produktových dat pro každý prodejní kanál z adminu, kanály se samy udržují aktuální při změnách katalogu. Bez samostatného archivního článku, viz Top 3.

**2. Multi-source product collections (dostupné)**
Spojení produktů, aplikací nebo variant do jedné kolekce, vytvoření přes Sidekick, znovupoužití a využití pro další operace. Archivní základ: [collections-multi-source-variants](/Shopify_news_magexo/zmena/collections-multi-source-variants/), API model: [new-collections-api-preview](/Shopify_news_magexo/zmena/new-collections-api-preview/). K publikaci jednotlivých variant po kanálech viz [publish-unpublish-variants-independently](/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/).

**3. Variants managed from the product page (dostupné)**
Úprava produktu a jeho variant na jedné stránce, s hromadnými úpravami variant a přehlednějším rozložením. Samostatný článek o této stránce nemáme. Hromadné úpravy barcodes v adminu a v CSV popisuje [product-variants-multiple-barcodes-merchant](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/).

**4. Barcodes per variant, až 20 (dostupné)**
Až 20 barcodes na variantu, validace formátu v adminu, skenování v POS. Archiv: [pos-multiple-barcodes-per-variant](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/), [product-variants-multiple-barcodes-merchant](/Shopify_news_magexo/zmena/product-variants-multiple-barcodes-merchant/), [variants-multiple-barcodes-api](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/) a doplňkově [blog-generator-carovych-kodu-aplikace-male-firmy](/Shopify_news_magexo/zmena/blog-generator-carovych-kodu-aplikace-male-firmy/).

### Pro merchanty: ceny, trhy a digitální prodej (4 položky)

**5. Smart Pricing pro nově aktivní produkty (dostupné, samostatná aplikace)**
Cenové doporučení podle trhu pro produkty, které se právě staly aktivními, přes aplikaci Shopify Smart Pricing. Obecný základ aplikace: [shopify-smart-pricing-app](/Shopify_news_magexo/zmena/shopify-smart-pricing-app/). Samotné tržní doporučení pro nové produkty v archivu zvlášť nemáme.

**6. Cart preview by market (coming soon)**
Náhled, jak se v košíku zobrazí produkty, ceny, dostupnost a nastavení checkoutu pro konkrétní trh. Zatím neuvolněno, bez archivního článku. Smysl to dává hlavně u obchodů s více trhy, kde se ceny a dostupnost liší.

**7. Sell access to digital services via URL (dostupné)**
K produktu se přidá URL a cena a prodává se přístup k položkám typu šablony nebo rezervace. Bez archivního článku.

**8. Improved Shopify Digital Products app (dostupné, samostatná aplikace)**
Vylepšená aplikace pro zahájení nebo rozšíření prodeje digitálních produktů. Bez archivního článku.

### Pro brandy v síti Shopify Collective (1 položka)

**9. Catalog performance across the retailer network (dostupné)**
Přehled, jak se katalog daří napříč sítí retailerů, a podpora rozšiřování těchto vazeb přes Shopify Collective. Souvisí s tématy Collective z jara, viz [verified-tracking-shopify-collective](/Shopify_news_magexo/zmena/verified-tracking-shopify-collective/) a přehled [Editions Spring '26: Online](/Shopify_news_magexo/zmena/editions-spring-2026-online/), kde jsou product sourcing insights pro retailery.

### Pro vývojáře: co z tématu zkontrolovat

- **Čtení barcode.** Pokud synchronizujeme barcode do ERP, skladu nebo marketplace feedu, přejít na `barcodes` connection a počítat s tím, že varianta může mít víc kódů různých typů. Viz [variants-multiple-barcodes-api](/Shopify_news_magexo/zmena/variants-multiple-barcodes-api/).
- **Kolekce.** Ověřit čtení `Collection.sources` a API verzi 2026-07; kolekce s více zdroji nebo variantovou logikou se přes starší verze nezobrazí. Viz [collections-multi-source-variants](/Shopify_news_magexo/zmena/collections-multi-source-variants/).
- **Per-kanálová data.** U mapování produktových dat per kanál zjistit, zda a jak je výsledek dostupný přes API, než se na něj začne spoléhat feed nebo marketplace sync.
- **Publikace variant.** Publikace jednotlivých variant po kanálech je samostatná změna s vlastními důsledky pro feedy, viz [publish-unpublish-variants-independently](/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/).

Nepřímá souvislost: [metaobject-analytics-queryable-admin-api](/Shopify_news_magexo/zmena/metaobject-analytics-queryable-admin-api/) (API 2027-01) nepatří k žádné z devíti položek, ale ukazuje stejný trend: vlastní datové struktury obchodu (metaobjecty) se dají dotazovat v analytice stejně jako metafieldy. Zajímavé pro obchody, které si katalogovou logiku modelují vlastními datovými typy.

---

## Co tu ještě nemáme

Tyto položky nemají v archivu samostatný článek a žijí jen v tomto přehledu a ve zdroji Editions:

- **Product data mapping by channel**: nejméně prozkoumaná položka tématu a pro multi-channel obchody potenciálně nejdůležitější; zaslouží samostatný rozbor, jakmile bude k dispozici dokumentace a API detaily.
- **Variants managed from the product page**: nová stránka pro správu variant (mimo barcodes).
- **Smart Pricing pro nově aktivní produkty**: aplikace samotná v archivu je, tržní doporučení pro nové produkty ne.
- **Cart preview by market**: zatím coming soon; vrátit se k ní, až bude uvolněna.
- **URL-based digital products** a **Improved Shopify Digital Products app**: oblast digitálních produktů v archivu nemáme pokrytou.
- **Catalog performance across the retailer network** (Collective): navazuje na Collective články z jara, ale tuto analytiku samostatně nepopisujeme.
- **Aplikace jako zdroj kolekce** (u multi-source collections): Editions to zmiňuje, archivní články to přímo nepopisují, takže jde o otevřenou otázku k ověření.

---

## Zpět na hub

Tento článek je součástí série rozkládající Editions Fall '26 po tématech. Zpět na: [Editions Fall '26, přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/).
