---
date: 2026-06-17
title: "Universal Commerce Protocol (UCP) — otevřený standard pro agentic commerce"
title_en: "Universal Commerce Protocol (UCP) — open standard for agentic commerce"
slug: universal-commerce-protocol-ucp
zdroj: https://shopify.dev/docs/agents
shrnuto_dne: 2026-06-17
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme stavět AI agenty nebo integrovat třetí strany pracující s UCP (ChatGPT shopping, Copilot, Perplexity), musíme rozumět protokolu a jeho trust tierům."
dotcene_klienty: []
souvisejici: [storefront-catalog-mcp-ucp, bots-agents-web-bot-auth]
editions_release: spring-2026
kontext:
  background: |
    Universal Commerce Protocol (UCP) je otevřený standard definující, jak AI agenti — ChatGPT, Copilot, Perplexity a další — komunikují s e-commerce platformami napříč celým buyer journey: od discovery přes košík až po checkout a order tracking. Standard vyvíjí Shopify společně s Universal Commerce Protocol Foundation, která jej spravuje jako vendor-neutral specifikaci dostupnou pro libovolnou platformu.

    Vznik UCP reflektuje posun od agentic commerce jako konceptu k agentic commerce jako realitě. Velké AI asistenty (ChatGPT Plugins, Microsoft Copilot, Perplexity) začaly fungovat jako nákupní kanály — zákazník zadá pokyn, agent sám vyhledá, porovná a dokončí nákup. Problém byl, že každá platforma měla jiné API, jiné schéma a jiné podmínky přístupu. UCP tuto fragmentaci řeší sjednoceným protokolem: jeden způsob discovery, jeden způsob cart management, jeden způsob checkout.

    Technicky staví UCP na Model Context Protocol (MCP), ale přidává commerce-specific vrstvu. Klíčové jsou tři MCP servery: **Catalog MCP** (product discovery — jak globálně přes celý Shopify katalog, tak per-storefront), **Cart MCP** (iterativní sestavování košíku s line items, localization a buyer context) a **Checkout MCP** (konverze košíku do checkoutu a dokončení nákupu pro důvěryhodné agenty). K těmto třem přibývá Order MCP pro real-time order tracking. Celý ekosystém doplňuje Universal Cart — jednotný košík aggregující items z libovolného merchantu, on nebo off Shopify, do jednoho checkout flow.

    Shopify implementuje třístupňový trust model: nepodepsané requesty mají nejpřísnější rate limity, agenti autentizovaní přes Web Bot Auth dostávají vyšší limit, a agenti s plným UCP profilem registrovaným u Shopify mají přístup k důvěryhodným operacím včetně dokončení checkoutu. Tento model navazuje na dříve zavedenou Web Bot Auth infrastrukturu a propojuje se s `agents.md` / `llms.txt` pro AI-readable store guidance.

  zdroje:
    - title: "Shopify Editions Spring '26: Universal Commerce Protocol (UCP) — open standard for agentic commerce"
      url: "https://shopify.dev/docs/agents"
    - title: "Storefront Catalog MCP přechází na UCP — breaking change"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-catalog-mcp-ucp/"
    - title: "Bots a AI agents musí identifikovat přes Web Bot Auth"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/bots-agents-web-bot-auth/"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify spouští Universal Commerce Protocol — otevřený standard pro AI agenty nakupující přes e-shopy; definuje Catalog, Cart, Checkout a Order MCP servery a zavádí trust tiering pro přístup agentů."
tagy: [editions, agentic, ucp, mcp, ai, protocol]
zdroj_kanal: editions
---

## O čem to je

**Universal Commerce Protocol (UCP)** je otevřený standard pro komunikaci AI agentů s e-commerce platformami. Shopify ho spustil v rámci Editions Spring '26 společně s Universal Commerce Protocol Foundation jako vendor-neutral specifikaci.

UCP definuje čtyři fáze buyer journey pro agenty:

1. **Authentication & Negotiation** — agent prezentuje UCP profil na well-known URL; Shopify ověří identitu a přiřadí trust tier
2. **Product Discovery** — dotaz do Catalog MCP (globální Shopify katalog nebo per-storefront scope)
3. **Cart & Checkout** — Cart MCP pro iterativní sestavení košíku, Checkout MCP pro dokončení nákupu
4. **Order Monitoring** — Order MCP a lifecycle webhooks (fulfillment, refunds, returns, exchanges)

Klíčové MCP servery v UCP ekosystému:

| MCP server | Funkce |
|---|---|
| **Catalog MCP** | Discovery — globální i per-storefront vyhledávání produktů |
| **Cart MCP** | Line items, localization, buyer context |
| **Checkout MCP** | Konverze košíku, dokončení platby (jen pro trusted agents) |
| **Order MCP** | Real-time order status a lifecycle events |

**Universal Cart** — nová vrstva aggregující items od libovolného merchantu (on nebo off Shopify) do jednoho checkoutu přes UCP. Aktuálně early access / waitlist.

Agenti se instalují přes `npm install -g @shopify/ucp-cli` a Shopify AI Toolkit (podporuje Claude, Cursor, Gemini, VS Code).

## Časová osa

- **2026-06-17** — Editions Spring '26: UCP announce a dokumentace live
- **2026-04-22** — Storefront Catalog MCP migroval na UCP (breaking change, deprecated tools do 2026-06-15)
- Early access — Universal Cart (waitlist)

## Dopad pro nás

**Pro vývojáře:**
UCP je protokolová vrstva, kterou musíme znát, pokud budeme stavět AI shopping agenty nebo integrovat třetí strany, které přes UCP přistupují k Shopify obchodům klientů. Instalace přes `@shopify/ucp-cli`, konfigurace trust profilu, správné volání Catalog / Cart / Checkout MCP serverů. Klíčové je pochopit trust tiering — checkout operace jsou dostupné pouze pro plně registrované agenty (ne každý agent smí dokončit nákup jménem zákazníka).

**Pro PM / PO:**
AI asistenti (ChatGPT, Copilot, Perplexity a podobné) budou čím dál víc fungovat jako nákupní kanál. Klienti se mohou ptát, jestli jejich obchod je UCP-ready — odpověď je ano (Shopify to řeší automaticky), ale pokud klient chce aktivně budovat vlastní agent nebo omezit, kteří agenti mohou nakupovat, je to příležitost pro konzultaci. Universal Cart je zvláštní téma — agregace across merchants může být relevantní pro větší brand portfolia.

## Použití v Integrátoru

**Možná** — UCP se netýká Admin API integrace přímo, ale pokud budeme stavět nebo konfigurovat AI agenty pro klienty (AI shopping asistent, chatbot s checkout flow), UCP je protokol, přes který tito agenti komunikují se Shopify.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-spring-2026-agentic/)
