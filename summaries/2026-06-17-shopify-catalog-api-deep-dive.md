---
date: 2026-06-17
title: "Shopify Catalog API pro AI agenty — image search, lookup, Shop sign-in"
title_en: "Shopify Catalog API for AI agents — image search, lookup, Shop sign-in"
slug: shopify-catalog-api-deep-dive
zdroj: https://shopify.dev/docs/agents/catalog/global-catalog
shrnuto_dne: 2026-06-17
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Catalog API otevírá cestu k multi-merchant product lookup a image search — relevantní pro budování AI shopping agentů nebo nástrojů pro zákazníky naší klientely."
dotcene_klienty: []
souvisejici: [editions-spring-2026-agentic, shopify-ai-toolkit-polaris-migration]
editions_release: spring-2026
kontext:
  background: |
    Shopify Catalog API (Global Catalog MCP) je nová REST/JSON-RPC API určená primárně pro AI agenty. Umožňuje vyhledávání a načítání produktů napříč celým ekosystémem Shopify merchantů — tzn. nejde o single-store Storefront API, ale o multi-merchant catalog pokrývající stovky tisíc obchodů sdílejících produkt data přes Universal Product ID (UPID). API komunikuje přes JSON-RPC 2.0 na endpointu `https://catalog.shopify.com/api/ucp/mcp`.

    Vznik Catalog API zapadá do širší Shopify strategie "agentic commerce" — světa, kde zákazník nakupuje prostřednictvím AI asistentů (chatbotů, hlasových agentů, autonomních shopping botů) místo manuálního procházení storů. Shopify buduje infrastrukturu (UCP — Universal Commerce Platform), která dává agentům přístup k produktovým datům ve standardizovaném formátu se zabudovanou podporou nabídek od více prodejců, dostupností, cenami a variantami.

    Pro vývojáře a integrátory je Catalog API přístupné třemi způsoby: přes Shopify AI Toolkit (skill `ucp` v IDE jako Cursor nebo Claude Code), přes UCP CLI příkaz `ucp catalog`, nebo přímými JSON-RPC calles. Agent musí v každém requestu deklarovat svůj profil přes `meta.ucp-agent.profile`. Personalizované výsledky propojené s konkrétním shopperem (Shop sign-in) jsou inzerovány jako "coming soon" se scope `dev.ucp.shopping.catalog.search:read`.

    Catalog API výrazně rozšiřuje možnosti AI agentů ve srovnání s klasickým Storefront API: jeden request může vrátit nabídky od více merchantů pro identický produkt (clustering přes UPID), výsledky obsahují checkout_url, cenu v minor units, dostupnost, seller details i shipping podmínky. Image search (visual + multimodal) umožňuje agentovi přijmout obrázek od uživatele a najít vizuálně podobné produkty — bez nutnosti textového dotazu.
  zdroje:
    - title: "Shopify Editions Spring '26: Shopify Catalog API for AI agents — image search, lookup, Shop sign-in"
      url: "https://shopify.dev/docs/agents/catalog/global-catalog"
    - title: "Shopify Editions Spring '26: Agentic overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify spustil Global Catalog MCP API pro AI agenty — umožňuje image search, multi-merchant product lookup (až 50 produktů najednou) a připravuje personalizaci přes Shop sign-in."
tagy: [editions, agentic, catalog-api, ai, search]
zdroj_kanal: editions
---

## Co se mění

Shopify Editions Spring '26 přináší Global Catalog MCP — API navržené přímo pro AI agenty nakupujícího světa. Na rozdíl od Storefront API (single-store) operuje Catalog API přes celý Shopify ekosystém: produkty jsou agregovány přes Universal Product ID (UPID), takže jeden dotaz může vrátit nabídky od desítek merchantů pro ten samý produkt.

API nabízí tři hlavní nástroje:

**`search_catalog`** — full-text i multimodální vyhledávání. Agent může poslat textový dotaz, obrázek, nebo obojí (multimodal = text popisuje záměr, obrázek dodává vizuální kontext). Podporuje filtrování podle ceny (minor units), dostupnosti, shipping destinace, kategorií dle Shopify taxonomy, hodnocení a relativní cenové hladiny. Stránkování přes opaque cursor, max hloubka 1 000 výsledků.

**`lookup_catalog`** — dávkový lookup produktů/variant po identifikátorech (GID nebo Shopify URL). Jeden request pojme 1–50 identifikátorů a vrátí plná produktová data včetně `not_found` signálu pro nenalezené položky — ideální pro agenty, kteří si pamatují konkrétní produkty z předchozí konverzace.

**`get_product`** — detail produktu s volitelnou selekcí variant. Agent může specifikovat preferované option values (Color, Size…) a API provede "automatic relaxation" — pokud kombinace není dostupná, vybere nejbližší dostupnou variantu podle nastavené priority.

Personalizace přes **Shop sign-in** je oznámena jako "coming soon": po autorizaci zákazníka přes Shop account bude agent schopen vracet personalizované výsledky (ceny, dostupnost, loyalty nabídky) s OAuth scope `dev.ucp.shopping.catalog.search:read`.

Response data jsou bohatá: každý produkt nese media, varianty s dostupností a checkout_url, seller informace, shipping podmínky, policy linky a ceny v minor units s měnou.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, Global Catalog MCP dostupný
- TBD — Shop sign-in / personalizované výsledky (označeno "coming soon")

## Dopad pro nás

**Pro vývojáře:**
Catalog API je přístupné přes JSON-RPC 2.0 — endpoint `https://catalog.shopify.com/api/ucp/mcp`, autentizace přes agent profile URL v každém requestu. Pro first-party experimenty je nejrychlejší cesta přes Shopify AI Toolkit (skill `ucp` v Claude Code / Cursor) nebo UCP CLI. Při stavbě vlastního agenta je třeba deklarovat capabilities v agent profilu — bez toho nástroje nejsou dostupné. Image search využívá `catalog.like` pole v `search_catalog`; multimodal kombinuje `catalog.query` + `catalog.like`. Pozor: `total_count` v response je odhad, nespoléhat pro přesné výpočty.

**Pro PM / PO:**
Catalog API je zatím vývojářská feature bez přímého dopadu na merchanty. Příležitost leží v budování AI shopping asistentů pro klienty s velkým katalogem nebo multi-brand portfoliem — agent dokáže zákazníkovi doporučit produkt na základě fotky, porovnat nabídky napříč prodejci a rovnou vrátit checkout link. Pro klienty využívající Shopify Collective (multi-merchant model) může být lookup přes UPID zajímavý pro cross-sell scénáře.

## Použití v Integrátoru

Catalog API je relevantní v případě, že integrujeme nebo budujeme AI agenty pro e-commerce klienty — zejména pro image-based search nebo multi-merchant product discovery. Zatím bez přímé vazby na existující integrační flow.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-spring-2026-agentic/)
