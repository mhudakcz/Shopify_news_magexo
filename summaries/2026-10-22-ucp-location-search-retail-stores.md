---
date: 2026-10-22
title: "UCP location search — AI agents najdou merchantovy retail stores (click & collect, inventory lookup)"
title_en: "Discover a merchant's retail stores with UCP location search and lookup"
slug: ucp-location-search-retail-stores
zdroj: https://shopify.dev/changelog/posts/discover-a-merchant-s-retail-stores-with-ucp-location-search-and-lookup
shrnuto_dne: 2026-10-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Výsledky filtru podle dostupnosti variant závisí na tom, jak přesně jsou v Shopify vedené zásoby po jednotlivých lokacích, takže se nás to týká všude, kde se sklad per location plní ze ERP nebo WMS."
dotcene_klienty: []
souvisejici: [storefronts-ucp-2026-08-25-support, checkout-cart-mcp-ucp-buyer-consent, multi-location-pickup-pos]
tldr: "Shopify storefronty s alespoň jednou retail lokací nově v UCP 2026-08-25 nabízejí schopnosti location.search a location.lookup, takže AI agent najde prodejny podle názvu, města nebo vzdálenosti a může je filtrovat podle dostupnosti vybraných variant. Nejde ale o skladový stav, rezervaci ani o pickup checkout."
tagy: [ucp, location-search, retail, pos, inventory-lookup, agentic-commerce]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Universal Commerce Protocol (UCP) je otevřený protokol, přes který si AI agenti a platformy vyjednávají se Shopify obchody, co který obchod umí. Obchod své schopnosti (capabilities) inzeruje v discovery profilu na cestě /.well-known/ucp a agent ve svém profilu deklaruje, které z nich chce používat. Storefront MCP endpoint, přes který agent komunikuje, má tvar https://{storedomain}/api/ucp/mcp. Od 28. srpna 2026 obchody inzerují verzi protokolu 2026-08-25 a právě ta přináší nové location capabilities.

    Dosud UCP pokrývalo hlavně online část nákupu: katalog, košík a checkout. Pro obchodníky, kteří prodávají i v kamenných prodejnách, chyběl standardní způsob, jak agentovi říct, kde fyzické prodejny jsou a kde je konkrétní zboží k mání. Dvě nové capabilities, dev.ucp.common.location.search a dev.ucp.common.location.lookup, tuto mezeru zaplňují. Obchod je inzeruje, jen pokud má alespoň jednu retail lokaci, tedy aktivní lokaci spravovanou obchodníkem, určenou k prodeji na místě a zapnutou jako Physical storefront. Obchody bez prodejny se tedy nemění.

    Rozsah je záměrně úzký a stojí za to ho číst střízlivě. Podle changelogu agent dostane u každé lokace id, název, adresu a případně souřadnice, a může filtrovat podle dostupnosti až deseti variant. Filtry podle otevírací doby a vybavení prodejny, vlastní filtry, relace serves ani pickup checkout pro vybranou lokaci zatím podporované nejsou. Titulek o click and collect a inventory lookup je tedy spíš směr než hotová funkce a odlišení toho, co oznámení skutečně říká, od našeho výkladu je v dalších částech výslovně uvedeno.
  zdroje:
    - title: "Shopify: Discover a merchant's retail stores with UCP location search and lookup"
      url: "https://shopify.dev/changelog/posts/discover-a-merchant-s-retail-stores-with-ucp-location-search-and-lookup"
    - title: "Shopify dev docs: Storefront catalog, search_locations"
      url: "https://shopify.dev/docs/agents/catalog/storefront-catalog#search_locations"
    - title: "Shopify dev docs: Configure agent profiles and UCP negotiation"
      url: "https://shopify.dev/docs/agents/profiles"
    - title: "UCP specification: Location (2026-08-25)"
      url: "https://ucp.dev/2026-08-25/specification/common/location/"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify storefronty podporují od UCP verze `2026-08-25` dvě nové capabilities: `dev.ucp.common.location.search` a `dev.ucp.common.location.lookup`. Obchod s alespoň jednou retail lokací je uvádí v discovery profilu na `/.well-known/ucp`. Retail lokace je aktivní lokace spravovaná obchodníkem, určená k prodeji na místě a zapnutá jako Physical storefront. Capabilities jsou volitelné a obchod bez prodejen je neinzeruje ani nenabízí příslušné nástroje.

Agent je volá na stejném endpointu jako ostatní UCP nástroje, tedy `https://{storedomain}/api/ucp/mcp`, přes dva tools.

**`search_locations`**

- Prázdný objekt `location` vrátí první stránku výsledků.
- `query` hledá v názvech prodejen a ve městech.
- `distance` je relace s explicitním `center` a maximálním poloměrem `max` v metrech.
- `filters.items` bere ID produktových variant (viz níže).
- `pagination.limit` má výchozí hodnotu 10 a maximum 250, `pagination.cursor` slouží pro další stránku.

**`lookup_locations`**

- Vrací lokace podle ID, například `gid://shopify/Location/123`.
- Zpracuje prvních 10 unikátních ID. Při větším počtu odpověď obsahuje zprávu `batch_limit_applied` a zbytek je potřeba poslat v dalším požadavku.

Každá lokace v odpovědi nese `id`, `name`, `address` a `geo` (souřadnice, pokud je obchodník nastavil).

Filtr `filters.items` přijímá až 10 ID variant a lokace projde, jen pokud je dostupná každá z nich. Používá existující pravidla dostupnosti v obchodě. Podle Shopify to není skladový počet, slib vyzvednutí ani rezervace. Požadavky s nepodporovanými prvky (filtry `hours` a `amenities`, vlastní filtry, relace `serves`) končí chybou `invalid_input`, nejsou tiše ignorovány. Pickup checkout pro vybranou lokaci také není podporovaný.

Náš výklad: vzhledem k těmto omezením agent dnes umí odpovědět na otázku "kde je nejbližší prodejna, která má tuhle variantu k dispozici", ale nedokáže hodnotit, kolik kusů tam je, ani nákup rovnou přesměrovat do vyzvednutí. Oznámení neobsahuje ukázky kódu a nic nedeprekuje.

## Časová osa

- **17. 6. 2026** — Spring '26 Edition uvádí UCP jako otevřený standard pro agentic commerce
- **28. 8. 2026** — obchody začínají inzerovat UCP `2026-08-25`
- **16. 10. 2026** — Checkout MCP a Cart MCP podporují `dev.ucp.shopping.buyer_consent`
- **21. 10. 2026** — location capabilities jsou v UCP `2026-08-25` účinné
- **22. 10. 2026** — Shopify zveřejňuje changelog

## Dopad pro nás

**Pro vývojáře:** Dotčené jsou jen platformy a agenti, kteří používají storefront MCP endpoint s UCP `2026-08-25` a vyjednávají některou z location capabilities. Kdo agenta staví nebo testuje, má čtyři kroky podle doporučení Shopify:

1. Deklarovat obě capabilities ve verzi `2026-08-25` v profilu agenta.
2. Volat location tools jen tehdy, když je obchod uvádí ve svém discovery profilu.
3. Posílat `distance.center` pouze z polohy, kterou kupující sám sdílel. Shopify ji nikdy neodvozuje z kontextu ani z IP adresy.
4. Brát shodu podle položek jako předběžnou a dostupnost i způsob převzetí potvrdit až v košíku a checkoutu, než agent kupujícímu řekne, že je zboží připravené.

Praktické poznámky: u `search_locations` počítat se stránkováním (výchozích 10 výsledků), u `lookup_locations` s limitem 10 ID na dotaz a ošetřit chybu `invalid_input`, pokud by agent nasazoval filtry, které zatím neexistují. Existující integrace bez deklarace capabilities nebo na starší verzi UCP fungují beze změny.

**Pro PM / PO:** Střední naléhavost, žádná akce není povinná. Je to příležitost pro obchodníky s kamennými prodejnami a e-shopem, protože agentní nákup se poprvé dotýká fyzické sítě prodejen. Předpoklady jsou věcné: lokace musí být aktivní a zapnutá jako Physical storefront, mít správně vyplněnou adresu, ideálně souřadnice, a dostupnost variant per lokace musí odpovídat realitě, jinak agent odkáže kupujícího na prodejnu, kde zboží není. U zakázek s omnichannel nebo agentic tématem je dobré nastavit očekávání: najít prodejnu a ověřit dostupnost agent umí, rezervaci ani pickup checkout přes UCP zatím ne, a otevírací dobu jako filtr také ne. Podle titulku by se mohlo zdát, že click and collect je hotový, ale oznámení tvrdí opak, proto je to vhodné probrat s obchodníkem dřív, než se to slíbí.

## Použití v Integrátoru

Location tools přímo nevoláme a běžné synchronizace se nemění. Nepřímo je relevantní kvalita dat o zásobách po jednotlivých lokacích, protože právě z nich agent skládá odpověď na dotaz, kde je zboží k mání.
