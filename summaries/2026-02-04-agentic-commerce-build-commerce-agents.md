---
date: 2026-02-04
title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
title_en: "Agentic Commerce: Build Commerce Agents"
slug: agentic-commerce-build-commerce-agents
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
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

kontext:
  background: |
    Agentic commerce je model elektronického obchodování, kde nákupní proces zprostředkovává autonomní AI agent místo přímé interakce zákazníka s webem nebo aplikací. Agent dostane přirozený pokyn (např. „kup mi bílé tenisky do 2 000 Kč"), sám prohledá katalog, porovná možnosti a dokončí objednávku — vše v rámci AI konverzace jako ChatGPT, Microsoft Copilot nebo Claude.

    Shopify tento přístup systematicky buduje od roku 2024. Model Context Protocol (MCP) — otevřený standard pro komunikaci LLM nástrojů s externími systémy — se stal technickým základem: Shopify Catalog MCP server zpřístupňuje produktový katalog AI agentům, zatímco Checkout MCP definuje standardizované rozhraní pro dokončení nákupu bez opuštění konverzace. V rámci Editions Winter 2026 (Renaissance) Shopify poprvé zpřístupnil tyto komponenty jako oficiální vývojářský framework přes Dev Dash.

    Z praktického hlediska to znamená, že vývojáři mohou sestavit commerce agenty, kteří čtou živý Shopify katalog (ceny, dostupnost, varianty) a spouštějí checkout přímo z AI prostředí. Catalog MCP server v dubnu 2026 přešel na protokol UCP (Unified Commerce Protocol), takže nové implementace musí tento protokol respektovat. Navazující features jako Agentic Storefronts dashboard v Adminu nebo soubory `/llms.txt` a `/agents.md` ukazují, že Shopify staví komplexní ekosystém pro AI-nativní nakupování.

  zdroje:
    - title: "Shopify Editions Winter 2026 — Agentic Commerce"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Storefront Catalog MCP přechází na UCP"
      url: "https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp"
    - title: "Agentic Storefronts: nový admin dashboard"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-storefronts-admin-page/"
    - title: "Customizable /llms.txt a /agents.md v theme editoru"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-llms-txt-agents-md/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
