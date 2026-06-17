---
date: 2026-02-04
title: "Shopify Catalog for All: vyhledávání miliard produktů přes MCP nebo REST"
title_en: "Shopify Catalog for All"
slug: shopify-catalog-for-all
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Public Shopify Catalog je nový federovaný search napříč merchanty. Pro naše custom integrace klientů irelevantní (každý klient má svůj store)."
dotcene_klienty: []
souvisejici: [agentic-commerce-build-commerce-agents]

kontext:
  background: |
    Federovaný produktový katalog je vyhledávací infrastruktura, která agreguje zboží z více nezávislých obchodů nebo platforem do jednoho dotazovatelného rozhraní. Na rozdíl od katalogu jednoho merchantu umožňuje cross-store discovery: jeden dotaz pokryje miliony obchodníků a miliardy SKU bez nutnosti integrovat každý obchod zvlášť.

    Shopify jako host více než miliónu merchantů má přirozenou výhodu: celý ekosystém lze indexovat centrálně. Tato funkce zapadá do Shopify strategie „Agentic Commerce" představené v rámci Editions Winter 2026, jejímž cílem je zpřístupnit nákupní tok AI agentům v prostředích jako ChatGPT nebo Microsoft Copilot. Veřejný katalog slouží jako discovery vrstva, zatímco Checkout MCP řeší samotný nákup. MCP (Model Context Protocol) je otevřený standard pro komunikaci LLM nástrojů s externími systémy a stal se technickým základem tohoto přístupu.

    Z hlediska dalšího vývoje je podstatné, že v dubnu 2026 přešel Storefront Catalog MCP server na protokol UCP (Unified Commerce Protocol) — nové implementace musí UCP respektovat, starý formát přestane fungovat po 15. 6. 2026. Veřejný katalog tak není izolovaná funkce, ale součást rostoucí vrstvy nástrojů pro AI-nativní nakupování.

  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Storefront Catalog MCP přechází na UCP"
      url: "https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp"
    - title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Federovaný search napříč miliardami produktů ze všech Shopify merchantů přes MCP tools nebo REST."
tagy: [catalog, mcp, search, agentic-commerce]
---

## Co se mění
Shopify otevírá **public Catalog** — vyhledávací API napříč miliardami produktů ze všech merchantů na platformě. Lze konzumovat přes **MCP tools** (pro AI agenty) nebo přes **REST endpoint**. Cíl: marketplace-style discovery napříč ekosystémem.

## Dopad pro nás
**Pro vývojáře:**
Pro standardní klientskou integraci (klient = jeden store) irelevantní. Užitečné pokud bychom stavěli marketplace nebo product comparison toolu.

## Použití v Integrátoru
**Nepoužíváme** — operujeme nad konkrétními merchant stores, ne federovaným katalogem.
