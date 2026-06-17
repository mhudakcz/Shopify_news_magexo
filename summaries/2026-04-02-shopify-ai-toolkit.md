---
date: 2026-04-02
title: "Shopify AI Toolkit — připojení AI nástrojů na Shopify platformu"
title_en: "Shopify AI Toolkit: Connect your AI tools to the Shopify platform"
slug: shopify-ai-toolkit
zdroj: https://shopify.dev/changelog/shopify-ai-toolkit-connect-your-ai-tools-to-the-shopify-platform
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Toolkit je sada dokumentace, API schémat a validation pro budování AI aplikací. Aktuálně nestavíme AI app pro Shopify."
dotcene_klienty: []

kontext:
  background: |
    Shopify AI Toolkit je sada vývojářských nástrojů určená k propojení AI editorů a LLM agentů se Shopify platformou. Funguje jako most mezi prostředím pro psaní kódu (Claude Code, Cursor, VS Code a další) a Shopify ekosystémem — zahrnuje přístup k dokumentaci, API schématům, validaci kódu a CLI příkazům pro správu obchodu. Toolkit je dostupný jako MCP server (Dev MCP server) nebo jako sada agent skills.

    Shopify začal systematicky budovat AI-nativní vrstvu pro vývojáře přibližně od roku 2024, kdy se Model Context Protocol (MCP) stal průmyslovým standardem pro komunikaci LLM nástrojů s externími systémy. AI Toolkit pro vývojáře doplňuje paralelní linii nástrojů zaměřených na obchodní AI agenty (Catalog MCP, Checkout MCP, Agentic Commerce framework) — zatímco ty slouží koncovým zákazníkům nakupujícím přes AI asistenty, AI Toolkit je primárně pro samotné vývojáře budující Shopify aplikace.

    Z praktického pohledu AI Toolkit zkracuje onboarding vývojáře, který chce stavět nad Shopify API — agent ví, jaké typy existují, jaká jsou schémata, a může rovnou validovat kód bez manuálního dohledávání v dokumentaci. Navazuje na širší Shopify snahu o AI-first developer experience, jejíž součástí jsou i soubory `/llms.txt` a `/agents.md` pro merchandising produktů vůči AI vyhledávačům.

  zdroje:
    - title: "Shopify AI Toolkit — changelog"
      url: "https://shopify.dev/changelog/shopify-ai-toolkit-connect-your-ai-tools-to-the-shopify-platform"
    - title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
    - title: "Storefront Catalog MCP přechází na UCP"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-catalog-mcp-ucp/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify AI Toolkit nabízí dokumentaci, API schémata a validaci pro stavbu AI aplikací nad Shopify."
tagy: [ai, toolkit, mcp, dev-tools]
editions_release: spring-2026
---

## Co se mění
Shopify spustil **AI Toolkit** — sadu dokumentace, API schémat a validation toolů pro vývojáře stavějící AI aplikace nad Shopify platformou (typicky LLM agenti, copiloti, chatboti). Cílí na zjednodušení onboardu AI nástrojů přes MCP a podobné protokoly.

## Použití v Integrátoru
**Nepoužíváme** — aktuálně nestavíme dedikovanou AI app nad Shopify. Pokud by se klient ptal po AI integraci (chatbot, asistent), AI Toolkit by byl výchozí bod pro discovery.
