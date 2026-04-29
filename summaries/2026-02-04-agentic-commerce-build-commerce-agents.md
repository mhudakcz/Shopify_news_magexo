---
date: 2026-02-04
title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
title_en: "Agentic Commerce: Build Commerce Agents"
slug: agentic-commerce-build-commerce-agents
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, nova-api, integrace]
api_oblast: storefront
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "MCP-based agent framework. Aktuálně neimplementujeme Shopify AI agenty pro klienty."
dotcene_klienty: []
souvisejici: [storefront-catalog-mcp-ucp]

tldr: "Catalog API + Checkout MCP umožňují stavbu AI agentů, kteří hledají produkty a checkoutují uvnitř ChatGPT/Copilotu."
tagy: [mcp, ai, agents, agentic-commerce, catalog]
---

## Co se mění
Shopify v rámci Editions Winter '26 (Renaissance) představil oficiální framework pro stavbu **commerce agents** — AI asistentů, kteří umí v rámci AI chatu (typicky ChatGPT, Claude, Microsoft Copilot) prohlížet Shopify katalog a iniciovat checkout. Stojí na **Catalog API** (pro discovery) a **Checkout MCP** (pro purchase flow).

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom v budoucnu napojili klienta na AI asistenta s nákupním flow, framework je oficiální cesta. Souvisí s [přechodem Storefront Catalog MCP na UCP](../zmena/storefront-catalog-mcp-ucp/).

**Pro PM / PO:**
Velký posun pro retail/B2B klienty, kde end-customer interaguje s AI agentem. Pokud se klient ptá po „AI prodejci nebo asistentovi", tohle je cesta.

## Použití v Integrátoru
**Nepoužíváme** — aktuálně neimplementujeme commerce agents. V budoucnu relevantní.
