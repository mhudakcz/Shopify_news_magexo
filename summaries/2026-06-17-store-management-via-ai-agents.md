---
date: 2026-06-17
title: "Řízení Shopify storu z AI agentů — Claude, ChatGPT, Perplexity"
title_en: "Store management with agents — Claude, ChatGPT, Perplexity"
slug: store-management-via-ai-agents
zdroj: https://www.shopify.com/build-with-ai#chat-connectors
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient chce řídit svůj store přes AI asistenta bez přímého přístupu do Shopify admin, store management connectors jsou klíčový enabler — potenciálně zajímavé pro provozní automatizaci a onboarding nových merchantů."
dotcene_klienty: []
souvisejici: [storefront-catalog-mcp-ucp, bots-agents-web-bot-auth]
editions_release: spring-2026
kontext:
  background: |
    Store management přes AI agenty je nový provozní paradigma, kde merchant místo přímé práce v Shopify admin zadává příkazy přirozeným jazykem do chatovacího AI nástroje — a agent tyto příkazy přeloží na konkrétní Shopify Admin API operace. Technickým základem jsou dedikované Shopify connectors (MCP servery), které zpřístupňují Admin API capabilities jako strukturované „nástroje" (tools) kompatibilní s protokolem MCP (Model Context Protocol). Merchant může přidávat produkty, měnit ceny, kontrolovat objednávky nebo generovat reporty — vše v rámci jedné konverzace bez přepínání kontextů.

    Tato integrace navazuje na širší strategii Shopify budovat AI-nativní ekosystém, který startuje od Editions Winter 2026. Zatímco předchozí vlna (Catalog MCP, UCP) se zaměřovala na zákaznickou stranu — AI agenti jako shopping asistenti pomáhající kupujícím —, store management connectors mají opačný směr: merchantův provoz. Shopify nyní vydává dedikované konektory pro tři nejrozšířenější AI platformy: ChatGPT (přes App Store), Claude (přes Claude.com connectors) a Perplexity (přes jejich interface). Jde o přiznání, že merchant AI asistenti se stávají reálným alternativním ovládacím rozhraním vedle klasického admin UI.

    Prakticky merchant po připojení dostane AI agenta schopného provádět celý backoffice workflow: vytvářet nové produktové kolekce, přidávat a editovat produkty, aktualizovat ceny, spouštět slevy, kontrolovat stav a historii objednávek, nebo generovat prodejní reporty. Každá operace je vázána merchant-definovanými přístupovými právy a Shopify garantuje, že citlivé operace (checkout, platby) procházejí přímo přes Shopify, nikoli přes agenta. Přístup lze kdykoliv odvolat.

    Z pohledu ekosystému je klíčový fakt, že Shopify vydává konektory pro tři vzájemně konkurující AI platformy najednou — signál, že store management via AI není experiment, ale plánovaný provozní kanál. Stejnou MCP server infrastrukturu Shopify zpřístupňuje i pro vývojáře (Claude Code, Cursor, VS Code, Gemini CLI, Codex CLI) pod balíčkem `@shopify/dev-mcp@latest`, což umožňuje stavět vlastní agentic workflows nad Admin API.

  zdroje:
    - title: "Shopify Editions Spring '26: Store management with agents — Claude, ChatGPT, Perplexity"
      url: "https://www.shopify.com/build-with-ai#chat-connectors"
    - title: "Shopify: Storefront Catalog MCP přechází na UCP"
      url: "https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp"
    - title: "Shopify: Bots and agents should identify themselves via Web Bot Auth"
      url: "https://shopify.dev/changelog/bots-and-agents-should-identify-themselves-via-web-bot-auth"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify vydal dedikované MCP connectors pro Claude, ChatGPT a Perplexity — merchant nyní může řídit produkty, objednávky a reporty přirozeným jazykem přímo v AI chatu bez vstupu do Shopify admin."
tagy: [editions, ai, agents, claude, chatgpt, perplexity, management]
zdroj_kanal: editions
---

## Co se mění

Shopify spouští store management connectors — dedikované MCP servery, které propojí Shopify Admin s AI chatovacími platformami Claude, ChatGPT a Perplexity. Merchant připojí svůj store k vybranému AI nástroji (přes App Store nebo nativní connector rozhraní platformy) a získá schopnost řídit store operace přirozeným jazykem:

- **Produkty** — přidat produkt, vytvořit kolekci, aktualizovat popis nebo cenu
- **Objednávky** — zkontrolovat stav, přehled objednávek, výjimky
- **Ceny a slevy** — aktualizovat ceny, spustit discount kampaň
- **Reporty** — generovat prodejní přehledy a analytics

Každá akce je vázána merchant-definovanými oprávněními a přístup lze kdykoliv odvolat. Platby a checkout zůstávají výhradně na straně Shopify — agent je nikdy nezpracovává přímo.

Stejná MCP server infrastruktura (`@shopify/dev-mcp@latest`) je dostupná i pro vývojářské AI nástroje: Claude Code, Cursor, VS Code Agent mode, Gemini CLI a Codex CLI.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, store management connectors živé pro Claude, ChatGPT, Perplexity

## Dopad pro nás

**Pro vývojáře:**
Store management přes MCP je přímá příležitost stavět vlastní agentic workflows nad Admin API bez nutnosti UI. Shopify nabízí `@shopify/dev-mcp@latest` jako npm balíček integrovatelný do Claude Code nebo VS Code Agent mode — to umožňuje automatizovat opakující se admin úkony nebo budovat custom AI operátory pro specifické potřeby klienta. Klíčové je porozumět OAuth scope modelu: connector funguje v rámci merchant-defined access levels a nesmí překračovat udělená oprávnění.

**Pro PM / PO:**
Merchant segment, který není technicky zdatný v Shopify admin, ale aktivně používá AI asistenty, je přirozený adresát tohoto řešení. Nabídnout setup a onboarding store management connectorů jako součást provozní podpory může být hodnotný upsell. Zejména pro klienty s menšími týmy, kteří chtějí efektivněji delegovat rutinní úkony (price updates, order check) na AI asistenta.

## Použití v Integrátoru

Pokud integrujeme Admin API pro klientské operace (produkty, objednávky, ceny), MCP connector layer je potenciální další vrstva — relevantní sledovat jako alternativní provozní rozhraní pro klienty, kteří chtějí řídit store přes AI chat.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Operations](/Shopify_news_magexo/zmena/editions-spring-2026-operations/)
