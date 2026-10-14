---
date: 2026-10-09
title: "Global Catalog REST API končí 2. 11. 2026 (deprecation, migrace na UCP/MCP)"
title_en: "Global Catalog REST API stops serving traffic on November 2, 2026"
slug: global-catalog-rest-api-sunset-2026-11-02
zdroj: https://shopify.dev/changelog/posts/global-catalog-rest-api-stops-serving-traffic-on-november-2-2026
shrnuto_dne: 2026-10-14
kategorie: [deprecation, breaking-change]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud nějaká naše aplikace, skript nebo AI agent volá doménu discover.shopifyapps.com/global, přestane po 2. 11. 2026 fungovat. O takovém použití nevíme, ale stojí za to to ověřit prohledáním kódu."
dotcene_klienty: []
souvisejici: [shopify-catalog-api-deep-dive, universal-commerce-protocol-ucp, storefront-mcp-cart-tools-deprecated-ucp]
tldr: "Starý Global Catalog REST API (discover.shopifyapps.com/global/v2/...) přestane 2. 11. 2026 odpovídat; kdo ho ještě volá, musí do té doby přejít na Global Catalog MCP (UCP), a to za necelé 4 týdny od oznámení."
tagy: [global-catalog, rest-api, deprecation, sunset, catalog, action-required, "2026-11-02"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Global Catalog je multi-merchant katalog Shopify, který agregoval produkty napříč obchody přes Universal Product ID (UPID). Slouží hlavně AI agentům a nákupním nástrojům, kteří potřebují produkty vyhledávat a dohledávat mimo jeden konkrétní obchod. Nejde tedy o Storefront ani Admin API jednoho shopu, ale o samostatnou službu na doméně discover.shopifyapps.com.

    Původní přístup byl klasické REST API s endpointy search, product detail a lookup. Shopify ho v dubnu 2026 označil jako deprecated a jako náhradu představil Global Catalog MCP, který implementuje Universal Commerce Protocol (UCP) a komunikuje přes JSON-RPC na adrese catalog.shopify.com/api/ucp/mcp. Detailní popis nového rozhraní máme v článku o Catalog API pro AI agenty.

    Tento changelog post z 9. října 2026 stanovuje konkrétní datum konce: 2. listopadu 2026 REST API přestane obsluhovat provoz a všechny requesty, včetně těch na uložené katalogy (saved catalogs), začnou selhávat. Od oznámení zbývá necelé 4 týdny, takže jde o krátké okno na migraci. Metadata postu sice neoznačují položku jako action required, ale samotný text jasně říká, že aplikace mají přejít na nové rozhraní.
  zdroje:
    - title: "Shopify: Global Catalog REST API stops serving traffic on November 2, 2026"
      url: "https://shopify.dev/changelog/posts/global-catalog-rest-api-stops-serving-traffic-on-november-2-2026"
    - title: "Shopify Docs: Global Catalog MCP"
      url: "https://shopify.dev/docs/agents/catalog/global-catalog"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Dne **2. listopadu 2026** přestane Global Catalog REST API sloužit provoz. Všechny requesty na `https://discover.shopifyapps.com/global/...` po tomto datu selžou, a to včetně dotazů na uložené katalogy. REST API je přitom deprecated už od dubna 2026 a jeho náhradou je Global Catalog MCP.

Dotčené endpointy:

- `GET /global/v2/search`
- `GET /global/v2/p/{upid}`
- `GET /global/v2/p/by-variant/{vid}`
- `POST /global/v2/lookup`

Migrace míří na **Global Catalog MCP** (implementace UCP) na adrese `https://catalog.shopify.com/api/ucp/mcp`. Nabízí tři nástroje:

- `search_catalog` pro vyhledávání produktů s filtry, stránkováním a kontextem kupujícího
- `lookup_catalog` pro dávkové načtení produktů nebo variant, max 50 v jednom requestu
- `get_product` pro detail produktu s výběrem varianty a signály dostupnosti

Mapování starých endpointů na nové nástroje:

| Původní REST | Nový UCP nástroj |
|---|---|
| `GET /global/v2/search` | `search_catalog` |
| `GET /global/v2/p/{upid}` | `get_product` s `gid://shopify/p/{upid}` |
| `GET /global/v2/p/by-variant/{vid}` | `get_product` s `gid://shopify/ProductVariant/{id}` |
| `POST /global/v2/lookup` | `lookup_catalog` |

Co je při přechodu potřeba udělat:

1. Přepsat každé REST volání na odpovídající UCP nástroj.
2. Posílat requesty na nové MCP URL a v každém requestu uvádět `meta.ucp-agent.profile` s URL profilu agenta.
3. U uložených katalogů předávat jejich ID jako `catalog.catalog_id`, protože samostatný endpoint pro saved catalogs odpadá.
4. Upravit aplikaci na request a response schémata UCP catalog, která se od původního REST formátu liší.

Autentizace zůstává beze změny, stávající bearer tokeny vygenerované z client credentials v Dev Dashboardu dál fungují. Pro testování doporučuje Shopify AI Toolkit nebo příkaz `ucp catalog search` z UCP CLI.

Poznámka: zdrojový post nezmiňuje žádnou GraphQL cestu. Cílem migrace je výhradně UCP/MCP rozhraní, ne Storefront nebo Admin GraphQL.

## Časová osa

- 2026-04 — Global Catalog REST API označeno jako deprecated, Global Catalog MCP jako náhrada
- 2026-10-09 — changelog post s konkrétním datem konce
- 2026-11-02 — REST API přestává sloužit provoz, requesty na `discover.shopifyapps.com/global/...` selhávají

Od oznámení do vypnutí uběhne necelé 4 týdny (24 dní).

## Dopad pro nás

**Pro vývojáře:** Prvním krokem je zjistit, zda vůbec někde voláme doménu `discover.shopifyapps.com`, tedy prohledat repozitáře, konfigurace i případné AI agenty a skripty na řetězec `discover.shopifyapps.com/global` a na cesty `/global/v2/`. Pokud nic nenajdeme, není co řešit. Pokud ano, migrace není jen záměna URL: mění se transport (JSON-RPC nad MCP místo REST), schémata request a response, povinný `meta.ucp-agent.profile` a způsob práce s uloženými katalogy. Úspěšný přechod je potřeba ověřit před 2. listopadem, protože po tomto datu nebude žádný fallback na starý endpoint. Změna se týká výhradně Global Catalog, Storefront API ani Admin API jednoho obchodu se netýká.

**Pro PM / PO:** Jde o krátký deadline u funkcionality, která může být skrytá v interních nástrojích nebo experimentech s AI agenty. Doporučujeme rychle zjistit, zda nějaké řešení Global Catalog REST používá, a pokud ano, naplánovat migraci jako urgentní úkol do konce října. Pokud žádný projekt tuto doménu nevolá, položku stačí uzavřít jako nerelevantní. Metadata postu nejsou označena jako action required, takže se na ni snadno zapomene, přitom dopad při nečinnosti je tvrdý výpadek.

## Použití v Integrátoru

Přímé použití Global Catalog REST API u nás nemáme potvrzené, ale protože jde o krátkou lhůtu a tvrdý výpadek, doporučujeme jednorázově prohledat kód na `discover.shopifyapps.com`. Nové rozhraní Global Catalog MCP je zároveň základ pro budoucí AI agentní scénáře popsané v souvisejících článcích.

## ⬅️ Související
🔗 [Shopify Catalog API pro AI agenty — image search, lookup, Shop sign-in](/Shopify_news_magexo/zmena/shopify-catalog-api-deep-dive/)
🔗 [Universal Commerce Protocol (UCP)](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/)
🔗 [Storefront MCP cart tools deprecated — migrace na UCP Cart MCP](/Shopify_news_magexo/zmena/storefront-mcp-cart-tools-deprecated-ucp/)
