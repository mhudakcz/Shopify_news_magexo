---
date: 2026-06-24
title: "Storefront MCP cart tools deprecated — migrace na UCP Cart MCP"
title_en: "Storefront MCP cart tools deprecated in favour of UCP Cart MCP"
slug: storefront-mcp-cart-tools-deprecated-ucp
zdroj: https://shopify.dev/changelog/storefront-mcp-cart-tools-are-being-deprecated-in-favour-of-ucp-cart-mcp
shrnuto_dne: 2026-06-30
kategorie: [deprecation, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor využívá MCP server pro práci s košíkem v AI-agentních scénářích, musí migrovat endpoint a přizpůsobit schéma požadavků na UCP Cart MCP."
dotcene_klienty: []
souvisejici: ["storefront-catalog-mcp-ucp", "universal-commerce-protocol-ucp", "bots-agents-web-bot-auth"]
tldr: "Shopify deprecuje nástroje get_cart a update_cart na Storefront MCP serveru — od 24. června 2026 je nahrazuje UCP Cart MCP server s novým endpointem a rozšířenými nástroji; maintenance window běží do 31. srpna 2026."
tagy: [mcp, cart, ucp, deprecation, ai-agents, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Storefront MCP server (`https://{shop}.myshopify.com/api/mcp`) dosud nabízel dva nástroje pro práci s košíkem — `get_cart` a `update_cart`. Tyto nástroje byly primárně určeny pro AI agenty a headless implementace, které potřebovaly číst nebo upravovat stav košíku bez přímé interakce uživatele s UI.

    Se Spring '26 Editions Shopify uvedl Universal Commerce Protocol (UCP) — otevřený standard pro interoperabilitu AI agentů v commerce. Součástí tohoto standardu je Cart capability (`dev.ucp.shopping.cart`, verze `2026-04-08`), která definuje jednotné rozhraní pro správu košíku napříč různými implementacemi. UCP Cart MCP server (`https://{shop-domain}/api/ucp/mcp`) tuto capability implementuje a nabízí rozšířenou sadu čtyř nástrojů: `create_cart`, `get_cart`, `update_cart` a `cancel_cart`.

    Klíčový praktický dopad pro vývojáře: nový `update_cart` používá **PUT sémantiku** — každý request kompletně nahrazuje stav košíku, nestačí tedy poslat jen změněné položky. Zároveň musí každý request obsahovat `meta` objekt s `ucp-agent.profile` (URI profilu agenta pro capability negotiation); u `cancel_cart` je navíc povinný `meta.idempotency-key` ve formátu UUID. Autentizace je nepovinná (server podporuje anonymní požadavky), ale Bearer token nebo podepsané requesty odemykají vyšší rate limity.

  zdroje:
    - title: "Shopify: Storefront MCP cart tools deprecated in favour of UCP Cart MCP"
      url: "https://shopify.dev/changelog/storefront-mcp-cart-tools-are-being-deprecated-in-favour-of-ucp-cart-mcp"
    - title: "Shopify Docs: Cart MCP"
      url: "https://shopify.dev/docs/agents/carts-and-checkout/cart-mcp"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Nástroje `get_cart` a `update_cart` na Storefront MCP serveru (`https://{shop}.myshopify.com/api/mcp`) jsou od **24. června 2026** označeny jako deprecated.

Nahrazuje je **UCP Cart MCP server** na novém endpointu:

```
https://{shop-domain}/api/ucp/mcp
```

Nový server implementuje UCP cart capability (`dev.ucp.shopping.cart`, verze `2026-04-08`) a přináší rozšířenou sadu nástrojů:

| Nástroj | Popis |
|---|---|
| `create_cart` | Vytvoří nový košík s položkami a lokalizačním kontextem |
| `get_cart` | Načte aktuální stav košíku včetně odhadovaných součtů |
| `update_cart` | Kompletně nahradí obsah košíku (PUT sémantika) |
| `cancel_cart` | Trvale smaže košík ze storage |

**Důležité změny schématu:**

- Každý request musí obsahovat `meta.ucp-agent.profile` — URI profilu agenta pro capability negotiation.
- Nástroj `cancel_cart` navíc vyžaduje `meta.idempotency-key` (UUID).
- `update_cart` používá **PUT sémantiku**: request musí vždy obsahovat kompletní pole `line_items` — vynechané položky budou odstraněny.

## Časová osa

| Datum | Událost |
|---|---|
| 24. 6. 2026 | Deprecation oznámena; staré nástroje stále funkční |
| 31. 8. 2026 | Konec maintenance window — staré nástroje přestanou fungovat |

## Dopad pro nás

Pokud máme implementovány AI agenty nebo headless integrace využívající Storefront MCP cart nástroje, je nutné provést migraci před 31. srpnem 2026. Konkrétní kroky:

1. **Změnit endpoint** z `https://{shop}.myshopify.com/api/mcp` na `https://{shop-domain}/api/ucp/mcp`.
2. **Přidat `meta` objekt** s `ucp-agent.profile` do každého requestu.
3. **Upravit `update_cart`** — přejít z patch-based přístupu na kompletní `line_items` array v každém requestu.
4. **Doplnit `create_cart`** a `cancel_cart` do logiky agenta (nové operace bez ekvivalentu v původním serveru).
5. **Implementovat rate-limit handling** — respektovat HTTP header `Retry-After`; při absenci použít exponenciální backoff s jitter.

Autentizace zůstává nepovinná, ale Bearer token nebo podepsané requesty poskytují vyšší rate limity — doporučeno pro produkční nasazení.

## Použití v Integrátoru

UCP Cart MCP je relevantní pro scénáře, kde integrátor implementuje nebo zprostředkovává AI-agentní commerce workflow — například automatizace košíku pro AI asistenty, chatboty s nákupními funkcemi nebo headless checkout flow. Pokud aktuálně voláme `get_cart` nebo `update_cart` přes Storefront MCP endpoint, migrace je povinná do konce srpna 2026. Nová UCP architektura navíc otevírá možnost implementovat `create_cart` a `cancel_cart` jako součást komplexnějšího agentic commerce flow.
