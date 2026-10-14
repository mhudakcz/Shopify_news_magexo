---
date: 2026-10-09
title: "Catalog API vrací compare-at prices jako list_price field"
title_en: "Catalog API now returns compare-at prices as list_price"
slug: catalog-api-compare-at-prices-list-price
zdroj: https://shopify.dev/changelog/posts/catalog-api-now-returns-compare-at-prices-as-list_price
shrnuto_dne: 2026-10-14
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo napojujeme AI agenty a nástroje nad Catalog API, list_price je standardní zdroj původní ceny a odpadá custom logika nad compare-at hodnotami."
dotcene_klienty: []
souvisejici: [shopify-catalog-api-deep-dive, storefronts-ucp-2026-08-25-support, compare-at-prices-catalogs]
tldr: "Catalog API nově vrací compare-at price obchodníka jako volitelný field list_price na variantě (a list_price_range na produktu), takže aplikace a AI agenti poznají slevu a její výši bez vlastní logiky; pole price se nemění."
tagy: [catalog, compare-at-price, list-price, pricing]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Compare-at price je v Shopify referenční cena uložená na variantě produktu, typicky zobrazená jako přeškrtnutá hodnota vedle aktuální prodejní ceny. Obchodníci ji používají k vyznačení slevy, ale také k uvedení doporučené maloobchodní ceny (MSRP) nebo jiné referenční ceny. Samotná prodejní cena (price) je od ní oddělená a zůstává hlavním údajem o tom, kolik zákazník zaplatí.

    Catalog API je rozhraní Shopify určené primárně pro AI agenty a shopping aplikace, které vyhledávají a načítají produkty napříč obchody. Odpovědi mají podobu standardizovaných objektů definovaných v katalogové specifikaci UCP (Universal Commerce Protocol), přičemž ceny se vrací v minor units spolu s měnou. Dosud agent z odpovědi nepoznal, zda je produkt zlevněný, a pokud takovou informaci chtěl zobrazit, musel si ji dohledávat jinou cestou.

    Změna z 9. října 2026 (platná od 5. října) přidává do odpovědí Catalog API pole list_price, které nese compare-at price obchodníka. Je to volitelné pole z UCP catalog specification ve verzi 2026-08-25 a používá stejný Price objekt jako price. Pole se vrací jen za určitých podmínek, které řídí nastavení obchodníka a kontext kupujícího, takže jeho absence je běžný stav, ne chyba. Změna navazuje na související novinku o sdílení compare-at prices do agentních kanálů na straně obchodníka.
  zdroje:
    - title: "Shopify: Catalog API now returns compare-at prices as list_price"
      url: "https://shopify.dev/changelog/posts/catalog-api-now-returns-compare-at-prices-as-list_price"
    - title: "UCP catalog specification: variant"
      url: "https://ucp.dev/2026-08-25/specification/shopping/catalog/#variant"
    - title: "UCP catalog specification: product"
      url: "https://ucp.dev/2026-08-25/specification/shopping/catalog/#product"
    - title: "Shopify dev docs: Global Catalog"
      url: "https://shopify.dev/docs/agents/catalog/global-catalog"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Catalog API nově vrací compare-at price obchodníka jako `list_price` na každé variantě produktu. Aplikace a AI agenti tak mohou poznat, že je produkt zlevněný, a o kolik, a zobrazit například formulaci typu sleva z X na Y, aniž by museli řešit vlastní logiku nad compare-at hodnotami. Pole `price` zůstává beze změny.

Přibyla dvě pole:

- **`list_price`** (na variantě) je volitelné pole definované v UCP catalog specification ve verzi 2026-08-25. Používá stejný `Price` objekt jako `price`, tedy `amount` v minor units a `currency`.
- **`list_price_range`** (na produktu) obsahuje nejnižší a nejvyšší `list_price` napříč variantami produktu.

Varianta vrací `list_price` pouze tehdy, když jsou splněny všechny tři podmínky:

1. Obchodník sdílí compare-at prices přes Catalog Mapping v Shopify adminu. Tato volba je ve výchozím stavu zapnutá u většiny obchodů a vypnutá u obchodů, které compare-at používají pro MSRP nebo jinou referenční cenu.
2. Compare-at price je vyšší než `price` pro kontext kupujícího.
3. Obchodník compare-at prices zobrazuje v regionu kupujícího. Obchody, které je skrývají před kupujícími z EEA, těmto kupujícím `list_price` nevrací.

Pokud `list_price` chybí, varianta pro daného kupujícího a danou konfiguraci žádnou compare-at cenu k zobrazení nemá. Jak tento stav ošetřit v UI nebo v odpovědích agenta, je na vývojáři. Shopify uvádí, že není vyžadována žádná akce a změna nemá vazbu na konkrétní API verzi.

## Časová osa

- 2026-08-25 — verze UCP catalog specification, ve které je `list_price` definován jako volitelné pole
- 2026-10-05 — změna se projevuje v odpovědích Catalog API
- 2026-10-09 — Shopify zveřejnil changelog záznam

## Dopad pro nás

**Pro vývojáře:** Kdo čte odpovědi Catalog API (vlastní agent, shopping aplikace nebo nástroj v IDE přes UCP), může `list_price` rovnou použít jako zdroj původní ceny. Je potřeba počítat s tím, že pole je volitelné, a vždy mít připravenou větev pro stav, kdy chybí. Slevu je vhodné odvozovat porovnáním `list_price` a `price` ve stejné měně a v minor units, ne z formátovaných řetězců. Na produktové úrovni lze využít `list_price_range`, například pro zobrazení rozpětí původních cen u produktů s více variantami. Pozor, že přítomnost pole závisí na kontextu kupujícího, takže stejná varianta může pro různé regiony vracet různé výsledky.

**Pro PM / PO:** Jde o drobné rozšíření bez nutnosti akce, ale s praktickým dopadem na to, jak AI agenti prezentují ceny obchodů. Obchodníci, kteří compare-at používají jako MSRP nebo doporučenou cenu, by měli ověřit nastavení sdílení v Catalog Mapping, aby agenti nepředstavovali referenční cenu jako slevu. U obchodů cílících na EU stojí za zmínku, že skrývání compare-at před kupujícími z EEA se promítá i do toho, co uvidí agenti, a to souvisí s regulací zobrazování slev (směrnice Omnibus). Pro nové AI nástroje nad Catalog API je to příležitost zjednodušit zobrazení slev a zároveň důvod ověřit, že agent s absencí pole počítá.

## Použití v Integrátoru

Možná. Pokud stavíme nebo napojujeme AI agenty či nástroje nad Catalog API, je `list_price` standardní zdroj původní ceny a nemusíme pro slevy psát vlastní logiku nad compare-at hodnotami. Pro stávající synchronizaci cen přes Admin API se nic nemění, compare-at price zůstává nastavovaný stejným způsobem jako dosud.
