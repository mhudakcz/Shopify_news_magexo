---
date: 2026-10-28
title: "Multi-source collections — kombinuj products + apps + variants v jedné kolekci (Sidekick-built)"
title_en: "Multi-source collections (built with Sidekick)"
slug: multi-source-collections-sidekick
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Kolekce s více zdroji se přes Admin API čtou pomocí Collection.sources, ne pomocí deprecated ruleSet, a přes starší verze API než 2026-07 se vůbec nezobrazí. Pokud naše integrace čte nebo zapisuje kolekce (merchandising, katalogová synchronizace, B2B segmentace), musí s tímto modelem počítat. Nově může kolekci složit i merchant konverzací se Sidekickem, takže jejich počet a struktura se mohou měnit mimo naše skripty."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-merchandising", "collections-multi-source-variants", "new-collection-model-apis-ga"]
editions_release: fall-2026
tldr: "Editions Fall '26 uvádějí, že do jedné kolekce lze spojit produkty, aplikace i konkrétní varianty a že takovou kolekci umí vytvořit Sidekick na základě konverzace. Datový model (Collection.sources, API 2026-07) i admin UI máme v archivu od června a července, novinkou je hlavně zadávání přes Sidekicka a zmínka o aplikacích jako zdroji."
tagy: [collections, multi-source, sidekick, merchandising, bundles]
zdroj_kanal: editions
kontext:
  background: |
    Kolekce jsou v Shopify základní stavební kámen merchandisingu: navigace storefrontu, slevy, daně, prodejní kanály i přehledy v adminu stojí na tom, že se produkty seskupují do pojmenovaných množin. Dlouho šlo o jednu logiku najednou, buď automatická pravidla (tag, typ, cena, metafield), nebo ruční výběr. Složitější výběry se proto řešily řadou úzkých kolekcí a ruční údržbou.

    Cesta k dnešnímu stavu je v archivu zdokumentovaná po částech. Preview nového Collections API přišlo v Editions Spring '26, GA datového modelu (pole `sources` místo `ruleSet`, výjimky, podkolekce, zdroje vlastněné aplikací, členství na úrovni variant) v polovině června 2026 s API verzí 2026-07 a merchant-facing redesign admin UI v polovině července. Editions Fall '26 v tématu Merchandising na to navazují položkou Multi-source product collections, která stručně říká: spojte produkty, aplikace nebo varianty do jedné kolekce, vytvořte ji přes Sidekicka, znovu ji použijte a nechte ji pohánět další operace.

    Nového je tedy především to, že kolekci lze sestavit konverzačně a že mezi zdroji stránka Editions výslovně jmenuje aplikace. Ilustrační obrázek na stránce ukazuje kolekci pro sváteční večeři postavenou z pravidla podle barvy, výjimky pro zboží vyráběné na zakázku a odkazu na bestsellery, což přesně odpovídá třem typům zdrojů z archivu: podmínky (včetně úrovně variant), exclusions a podkolekce. Stránka u položky neuvádí štítek coming soon ani plány, regiony a limity. Význam aplikace jako zdroje kolekce archivní články přímo nepopisují (nejblíže jsou app-owned sources v Admin API), takže jde o otevřenou otázku k ověření v dokumentaci.
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Collections now support multi-source and variants"
      url: "https://changelog.shopify.com/posts/collections-now-support-multi-source-and-variants"
    - title: "Shopify: New Collection model and APIs now available (GA)"
      url: "https://shopify.dev/changelog/new-collection-model-and-apis-now-available"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Podle stránky Editions Fall '26 (téma Merchandising) lze do **jedné kolekce spojit produkty, aplikace nebo varianty**. Takovou kolekci je možné **vytvořit přes Sidekicka**, znovu ji použít a nechat ji pohánět další operace, tedy například slevy, daně nebo viditelnost v prodejních kanálech. Stránka to popisuje jednou větou a odkazuje na nápovědu, další technické detaily neuvádí.

Co z toho je skutečně nové a co už známe z archivu:

- **Více zdrojů v jedné kolekci** (automatizované podmínky, ručně vybrané produkty, výjimky, jiné kolekce jako vstup) a **členství na úrovni variant** už jsou v archivu popsané. Datový model je GA od 2026-06-17 v API 2026-07, merchant-facing admin UI od 2026-07-16. Viz [collections-multi-source-variants](/Shopify_news_magexo/zmena/collections-multi-source-variants/) a [new-collection-model-apis-ga](/Shopify_news_magexo/zmena/new-collection-model-apis-ga/).
- **Sestavení přes Sidekicka** je novinka z Editions. Merchant popíše, co v kolekci chce (například barvu, výjimky a vazbu na bestsellery), a Sidekick ji složí. Jak přesně probíhá potvrzení, zda Sidekick vytváří i podmínky na metafieldech a zda lze existující kolekci konverzací upravit, stránka neuvádí.
- **Aplikace jako zdroj** je nejméně jasná část. V Admin API nejblíže odpovídají **app-owned sources**: znovupoužitelné zdroje podmínek, které aplikace vytvoří, vlastní a připojí k více kolekcím najednou. Mohlo by jít o způsob, jak aplikace (například PIM nebo dodavatelský katalog) dodá do kolekce vlastní logiku výběru. Doslovný význam z Editions to ale nepotvrzuje, takže to bereme jako naši interpretaci, ne jako ověřený fakt.

Tag bundles u tohoto článku vyjadřuje naše čtení použití, ne vlastnost funkce: kolekce složená z konkrétních variant a výjimek se hodí pro sezónní a tematické výběry (sváteční sady, výběr podle barvy), ale není to Shopify Bundles ani nový typ produktu.

### Co Editions neříká

- Stránka u položky neuvádí štítek coming soon (jediná takto označená položka tématu je Cart preview by market), ale ani plány, regiony nebo limity počtu zdrojů.
- Není popsáno, zda je Sidekick omezen na stejný rozsah jako admin UI, nebo zda umí i kombinace dostupné jen přes API.
- Není jasné, jak se změny provedené Sidekickem projeví v historii a zda jdou vrátit zpět.

## Časová osa

- **Jaro 2026 (Editions Spring '26):** preview nového Collections API.
- **2026-06-17:** GA nového Collection modelu v API 2026-07 (`Collection.sources`, app-owned sources, členství variant ve Functions).
- **2026-07-01:** API 2026-07 je stabilní, kolekce využívající nové funkce jsou skryté pro dotazy přes starší verze API.
- **2026-07-16:** merchant-facing redesign admin UI kolekcí (více zdrojů, výjimky, varianty).
- **2026-10-28:** Editions Fall '26 přidávají do popisu položku s vytvářením přes Sidekicka a se zmínkou o aplikacích jako zdroji.
- **Leden 2027 (API 2027-01):** plánovaná odstranění navazující na nový model, například podmínka `metafieldInteger` pro zdroje kolekcí. Viz [metafieldinteger-collection-condition-removed-2027-01](/Shopify_news_magexo/zmena/metafieldinteger-collection-condition-removed-2027-01/).

Pro samotnou položku z Editions neexistuje vlastní termín účinnosti ani deadline pro migraci, proto nízká naléhavost.

## Dopad pro nás

### Pro vývojáře

- **Čtení kolekcí.** Kolekce vytvořené přes Sidekicka budou stejné objekty jako kolekce z admin UI, tedy s polem `sources`. Přes API starší než 2026-07 se kolekce s novými funkcemi (více zdrojů, výjimky, zdroje vlastněné aplikací) tiše vyfiltrují, takže integrace uvidí méně kolekcí, než v obchodě existuje, a bez chybové hlášky. Ověřit je třeba, že čteme `Collection.sources` a ne deprecated `ruleSet`.
- **Zápis kolekcí.** Pokud kolekce vytváříme nebo upravujeme my, mutace `collectionCreate` a `collectionUpdate` patří na nový argument `collection:` místo `input:`. Zásah Sidekicka do kolekce, kterou spravujeme skriptem, může náš zápis přepsat nebo s ním kolidovat.
- **Membership na úrovni variant.** Kolekce složená z konkrétních variant znamená, že produkt nemusí být v kolekci celý. Feedy, exporty a sync, které předpokládají, že kolekce obsahuje produkty a všechny jejich varianty, je nutné prověřit.
- **Aplikace jako zdroj.** Pokud někdo z nás vyvíjí vlastní aplikaci pro obchod, stojí za to po zveřejnění dokumentace ověřit, zda a jak se app-owned sources dají použít k dodání vlastní logiky výběru do kolekce, například z externího PIM.
- **Navazující změny v API 2027-01.** Podmínky na integer metafieldech se budou zapisovat jako `metafieldInt` s hodnotou typu String. Kolekce vznikající přes Sidekicka tím nejsou dotčené, ale náš kód pro zápis a čtení podmínek ano.

### Pro PM / PO

- Z pohledu merchanta jde o snížení bariéry: kolekci popíše slovy a nemusí ručně klikat pravidla a výjimky. Největší přínos čekáme u obchodů s tematickými a sezónními výběry (fashion, dárkové sady, multi-brand) a u těch, které kolekce používají i mimo navigaci (slevy, daně, kanály).
- Riziko je opačné: kolekcí může rychle přibýt a jejich logika bude méně přehledná, zvlášť pokud je sestavuje více lidí pomocí chatu. Pro obchody, které spravujeme, má smysl domluvit pravidla pojmenování a kontrolu kolekcí, které začnou ovlivňovat slevy a daně.
- Je to vhodné téma pro krátké školení nebo ukázku v rámci pravidelných konzultací. Před slibováním konkrétního chování ale funkci vyzkoušet přímo v adminu, protože Editions neuvádí limity.
- Samostatná akce nebo deadline z toho nevyplývá. Je to příležitost, ne povinnost.

## Použití v Integrátoru

Pokud naše integrace čte nebo zapisuje kolekce, je třeba ověřit práci s `Collection.sources` a API verzí 2026-07 a počítat s tím, že kolekce mohou nově vznikat i konverzací se Sidekickem mimo naše skripty. Možnost, že aplikace dodá do kolekce vlastní zdroj (například z PIM), stojí za sledování jako příležitost pro merchandisingové scénáře, jakmile bude k dispozici dokumentace.
