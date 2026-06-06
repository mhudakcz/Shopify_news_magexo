---
date: 2026-04-22
title: "Storefront Catalog MCP přechází na UCP — breaking change"
title_en: "Storefront Catalog MCP now implements UCP"
slug: storefront-catalog-mcp-ucp
zdroj: https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, integrace]
api_oblast: storefront
api_verze: []
nalehavost: vysoka
customer_facing: false

ucinnost_od: 2026-04-22
deprecation_do: 2026-06-15
migrace_doporucena_do: 2026-05-31

pouzivame_v_integratoru: ne
dukaz_integratoru: "interní MCP check vrátil B2B price-list metody (createCatalog, getCompanyLocationsWithCatalogs, updateCatalogContext) — to je B2B catalog API, ne Storefront Catalog MCP server."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Model Context Protocol (MCP) je otevřený standard pro komunikaci LLM nástrojů a AI agentů s externími systémy — umožňuje AI asistentům volat strukturované „nástroje" (tools), které vracejí živá data z třetích stran. Shopify Storefront Catalog MCP server je specializovaná implementace tohoto standardu pro přístup AI agentů k produktovému katalogu Shopify obchodů — vyhledávání produktů, načítání variant a dostupnosti, vše v real-time kontextu kupujícího.

    UCP (Unified Commerce Protocol) je Shopify vlastní protokolová vrstva nad MCP, která sjednocuje způsob, jakým AI nástroje komunikují s Shopify platformou. Shopify začal systematicky budovat AI-nativní ekosystém od roku 2024 v návaznosti na boom agentic commerce — situace, kdy zákazník zadá pokyn AI asistentovi (ChatGPT, Claude, Copilot) a agent sám vyhledá, porovná a zakoupí produkt. Přechod na UCP je součástí snahy o standardizaci a unifikaci těchto integrací pod jeden endpoint vzor: `https://{storedomain}/api/ucp/mcp`.

    Nové UCP nástroje (search_catalog, lookup_catalog, get_product) nahrazují starší sadu s přizpůsobenými schématy požadavků i odpovědí. Pro vývojáře stavějící AI asistenty nad Shopify katalogem to znamená refaktoring volání — prakticky jde o první velký breaking change v agentic commerce vrstvě. Storefront Catalog MCP server je součástí širšího Shopify AI frameworku zahrnujícího Checkout MCP, Web Bot Auth pro rate-limit správu botů a llms.txt/agents.md pro product discovery přes AI vyhledávače.

  zdroje:
    - title: "Storefront Catalog MCP now implements UCP — Shopify Changelog"
      url: "https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp"
    - title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
    - title: "Bots a AI agents musí identifikovat přes Web Bot Auth"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/bots-agents-web-bot-auth/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shopify's Storefront Catalog MCP přechází na UCP protokol; staré nástroje budou odstraněny do 15. 6. 2026."
tagy: [mcp, storefront, catalog, ucp, ai]
---

## Co se mění
Shopify's **Storefront Catalog MCP server** (oficiální MCP server pro AI asistenty komunikující se Shopify storefronty) přešel na **UCP (Unified Commerce Protocol)**. Změnily se endpointy a request/response schémata. Staré nástroje (tools) zůstávají dostupné jako **deprecated do 15. 6. 2026**, poté budou odstraněny bez náhrady.

## Časová osa
- **2026-04-22** — UCP verze nasazena, staré tools deprecated
- **2026-06-15** — staré tools odstraněny

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom měli klienta, kterého integrujeme s Storefront Catalog MCP (typicky AI chatboti, copilot funkce nad katalogem), je nutné migrovat na UCP endpointy. Aktuálně **nepoužíváme** Storefront Catalog MCP v žádném známém modulu — naše „catalog" methods jsou pro B2B price-list katalogy (jiný koncept).

**Pro PM / PO:**
Žádná akce. Pokud klient zmíní Shopify AI integrace nad katalogem (chatbot, asistent), prověřit, jaký konkrétní MCP/protokol používá.

## Použití v Integrátoru
**Nepoužíváme** — interní MCP check vrátil B2B price-list metody (`createCatalog`, `getCompanyLocationsWithCatalogs`), nikoliv Storefront Catalog MCP server. Jiný koncept.

## Rizika a edge cases
- Pokud někdy v budoucnu napojíme klientského AI asistenta na Shopify katalog, musí použít UCP — staré schéma už nebude k dispozici po 15. 6. 2026
