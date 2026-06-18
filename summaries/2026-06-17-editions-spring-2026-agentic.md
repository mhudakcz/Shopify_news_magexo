---
date: 2026-06-17
title: "Editions Spring '26: Agentic — Shopify jako infrastruktura pro AI commerce"
slug: editions-spring-2026-agentic
zdroj: https://www.shopify.com/editions/spring2026
shrnuto_dne: 2026-06-17
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Agentic Commerce je strategický směr Shopify — pokud klient prodává něco co lidi hledají přes AI agenty (ChatGPT, Copilot, Perplexity), je to nová akviziční cesta."
dotcene_klienty: []
souvisejici: ["editions-spring-2026"]
editions_release: spring-2026
tldr: "Téma Agentic Spring '26 (11 položek): Shopify staví Universal Commerce Protocol jako standard pro nakupování přes AI agenty. Catalog API, Cart MCP a Checkout MCP propojují produkty s ChatGPT, Copilot, Perplexity. Pro vývojáře je nový hub shopify.dev/docs/agents."
tagy: [editions, agentic, ucp, catalog-api, mcp, ai]
zdroj_kanal: editions
---

## O čem tahle Edition téma je

Téma Agentic formalizuje Shopify jako platformu pro obchodování v éře AI agentů. Zatímco dříve byl internet primárně konzumován přes prohlížeče a mobilní aplikace, dnes si zákazníci stále více hledají a nakupují produkty přes konverzační AI — ChatGPT, Microsoft Copilot, Perplexity nebo Meta. Shopify na to reaguje trojicí standardizovaných rozhraní: **Catalog MCP** (discovery produktů), **Cart MCP** (sestavení košíku) a **Checkout MCP** (dokončení nákupu přes Shop Pay), která dohromady tvoří **Universal Commerce Protocol (UCP)**. Klíčová změna oproti předchozímu stavu je, že nejde o proprietární plug-in do jednoho chatbota, ale o otevřený protokol — vývojáři třetích stran mohou stavět agentic shopping experiences pro jakýkoliv AI kanál. Merchantům to přináší nový akviziční kanál bez nutnosti SEO nebo reklam: stačí mít kvalitní produktová data v Shopify Catalog.

## Top 3 highlights v tomto tématu

- **Universal Commerce Protocol (UCP) jako otevřený standard** — Shopify otevřel Catalog, Cart a Checkout MCP pro vývojáře třetích stran. To znamená, že chatbot nebo AI agent postavený kýmkoliv může vyhledávat produkty, sestavit košík a zpracovat platbu přes Shop Pay. Toto je architekturální posun — Shopify se stává payment/checkout backendem pro celý AI internet.
- **Shopify Catalog jako datová páteř pro AI kanály** — Catalog API nyní obohacuje produktová data a standardizuje je pro AI konzumaci. Data ze Shopify Catalog se dostávají do ChatGPT, Copilotu a Perplexity s uváděnou 2× vyšší konverzí oproti jiným zdrojům dat. Kdo má data v Shopify v pořádku, má výhodu v AI kanálech automaticky.
- **Checkout na nových površích — Copilot a Meta** — Nakupování v rámci Microsoft Copilot a Meta reklam přes Shop Pay je nyní live. Zákazník vidí reklamu nebo se ptá Copilota a celý nákup dokončí přímo bez přesměrování na e-shop — checkout je vložen do AI nebo reklamního kontextu.

## Všechny položky (11 celkem)

### Pro merchanty

- **Your products optimized for AI** — Shopify automaticky umísťuje produkty merchantů do AI kanálů a poskytuje performance tracking (kdy a kde se produkty zobrazují v AI konverzacích). Live. [→ detail](/Shopify_news_magexo/zmena/agentic-storefronts-admin-page/)

- **Product data structured for agents** — Shopify Catalog standardizuje a obohacuje produktová data do formátu, který AI agenti čtou efektivně; uvádí se 2× vyšší konverze v AI chatech oproti nestandardizovaným datům. Live. [→ detail](/Shopify_news_magexo/zmena/shopify-catalog-for-all/)

- **Checkout on more surfaces** — Nakupování přímo v Microsoft Copilot a Meta reklamách přes Universal Commerce Protocol se Shop Pay; zákazník dokončí nákup bez opuštění AI prostředí nebo reklamního formátu. Live.

- **Agentic plan** — Nový plán pro firmy, které nejsou přímými Shopify merchanty (výrobci, distributoři, platformy). Umožňuje synchronizaci produktového katalogu s Shopify a prodej napříč AI kanály bez nutnosti provozovat Shopify e-shop. Live.

### Pro vývojáře

- **The open protocol for agentic commerce** — Universal Commerce Protocol (UCP) = sada tří MCP serverů (Catalog, Cart, Checkout) jako otevřený standard pro stavbu agentic shopping experiences. Vývojáři mohou nad tímto protokolem sestavit vlastního AI asistenta nebo integraci pro jakýkoliv AI kanál. Live. [→ detail Catalog MCP/UCP](/Shopify_news_magexo/zmena/storefront-catalog-mcp-ucp/) · [→ detail Agentic Commerce framework](/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/)

- **Sponsored products with Catalog API** — Monetizace agentic zážitků; vývojáři mohou přes Catalog API zobrazovat sponzorované produkty v AI kanálech a umožnit merchantům platit za prémiové umístění v AI výsledcích. Preview.

- **Catalog API supports Shop sign-in** — Catalog API podporuje autentizaci přes Shop účet, díky čemuž agenti mohou vracet personalizované výsledky vyhledávání přizpůsobené konkrétnímu zákazníkovi (oblíbené velikosti, předchozí nákupy). Live.

- **Catalog API image search** — Vývojáři mohou posílat obrázky do Catalog API a API vrátí vizuálně podobné produkty; umožňuje stavbu scénářů jako „najdi mi produkt podobný tomuto" v rámci AI agenta. Live.

- **Catalog API product lookup** — Real-time načítání strukturovaných dat pro až 50 produktů v jednom API requestu; určeno pro agenty, kteří potřebují rychle porovnat nebo zobrazit detailní informace o více produktech najednou. Live.

- **Richer product data in agentic experiences** — Agenti nyní dostávají z Catalog API bohatší data: media (fotky, video), varianty, dostupnost a nabídky od více prodejců. Výsledkem jsou relevantnější a komplexnější AI doporučení. Live.

- **Experiences built with Catalog API and UCP** — Shopify zveřejnil demo aplikace ukazující reálné use cases: plánování výletů s produktovými doporučeními (trip planning), discovery nových produktů a personalizované nákupní asistenty. Slouží jako referenční implementace pro vývojáře. Live.

## Co tu ještě nemáme

Následující položky nemají zatím samostatný archivní článek — kandidáti na rozšíření v budoucích vydáních:

- **Checkout on more surfaces (Meta + Copilot)** — přímá integrace Shop Pay checkoutu do Meta reklam a Microsoft Copilot je merchant-facing novinka s velkým dopadem; zaslouží vlastní článek s technickými detaily UCP Checkout MCP.
- **Agentic plan** — nový typ Shopify plánu pro non-merchant firmy je obchodně zajímavý, zvlášť pro výrobce a distributory klientů; stojí za hlubší popis podmínek a use cases.
- **Sponsored products with Catalog API** — monetizační mechanismus pro agentic zážitky je v preview a pravděpodobně bude mít vlastní dokumentaci a pricing; relevantní pro vývojáře stavějící AI kanály.
- **Catalog API image search** — vizuální vyhledávání přes API je unikátní funkce s řadou aplikací (fashion, home decor); žádný existující článek se jí nevěnuje.
- **Catalog API product lookup (batch)** — batch lookup 50 produktů v jednom requestu ovlivňuje design agentic aplikací; hodí se technický detail s ukázkou dotazu.
- **Catalog API supports Shop sign-in** — personalizace výsledků přes Shop autentizaci má dopad na privacy a implementaci; chybí dedikovaný popis.
- **Richer product data** — rozšíření datového modelu (media, varianty, multi-seller nabídky) mění formát odpovědí Catalog API; migrace pro stávající integrátory.
- **Demo experiences (trip planning, product discovery)** — referenční demo aplikace by si zasloužily technickou analýzu architektury.

## ⬅️ Zpět na hub

[Editions Spring '26 — hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
