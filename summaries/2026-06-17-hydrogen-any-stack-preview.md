---
date: 2026-06-17
title: "All-new Hydrogen na libovolném stacku (developer preview) — agent-first přepis"
title_en: "All-new Hydrogen on any stack (developer preview)"
slug: hydrogen-any-stack-preview
zdroj: https://shopify.dev/docs/storefronts/headless/developer-preview
shrnuto_dne: 2026-06-17
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některý klient spustí nebo plánuje headless storefront, nový Hydrogen odstraňuje závislost na Remix/React Router a umožňuje stavět s Next.js — to je přímá nabídková příležitost."
dotcene_klienty: []
souvisejici: ["hydrogen-april-2026-release", "agentic-storefronts-admin-page", "editions-spring-2026-developer"]
editions_release: spring-2026
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty — vývojáři ho používají k vybudování vlastního front-endu obchodu (React komponenty, cart, checkout, product pages), přičemž obchodní logiku (produkty, objednávky, zákazníci) obsluhuje Shopify Storefront API na pozadí. Do příchodu tohoto preview byl Hydrogen těsně svázán s Remix (React Router v7) jako jediným podporovaným meta-frameworkem.

    Nový Hydrogen byl přepsán od základu jako framework-agnostic SDK. Commerce primitives — klient pro Storefront API, cart management, money formatting, analytics, Shop Pay button, consent handling — jsou nyní psány v čistém JavaScriptu bez závislosti na konkrétním meta-frameworku. Framework bindings (Next.js, Remix, Astro, SvelteKit, Nuxt, SolidStart…) jsou oddělenou, tenkou vrstvou. Výsledkem je, že tým může zvolit jakýkoliv server-rendered JavaScript stack a Hydrogen do něj integrovat jedním příkazem: `npx @shopify/hydrogen@preview setup`.

    Zásadní architekturální rozhodnutí je agent-first design. Hydrogen preview se dodává se sadou dvanácti specializovaných skills — strukturovaných instrukcí pro coding agenty (Claude Code, Cursor, Copilot, Codex). Místo psaní boilerplate kódu ručně vývojář zadá agentu prompt ("Set up my store with Shopify") a agent pomocí skills rozbalí end-to-end konfiguraci storefront klienta, cart UI, product browsingu a analytiky. Tento přístup kopíruje širší strategii Shopify AI Toolkit představenou v Editions Spring 2026.

    Z pohledu ekosystému jde o největší breaking change v historii Hydrogen. Stávající projekty postavené na Hydrogen + Remix/React Router nebudou okamžitě inkompatibilní, ale migration path bude nutné aktivně sledovat. Developer preview je dostupný ihned; GA release s plnou podporou customer accounts a predictive search je teprve v roadmapě.
  zdroje:
    - title: "Shopify Editions Spring '26: All-new Hydrogen on any stack (developer preview)"
      url: "https://shopify.dev/docs/storefronts/headless/developer-preview"
    - title: "Hydrogen April 2026 release — Storefront API proxy a backend consent mode"
      url: "https://shopify.dev/changelog/hydrogen-april-2026-release"
    - title: "Editions Spring '26: Developer téma overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Hydrogen byl kompletně přepsán jako framework-agnostic SDK — funguje s Next.js, Astro, SvelteKit i Remixem — a zavádí agent-first workflow se skills pro coding agenty; developer preview je k dispozici ihned."
tagy: [editions, hydrogen, framework, headless, nextjs, preview]
zdroj_kanal: editions
---

## Co se mění

Hydrogen přechází z Remix-only frameworku na **framework-agnostic SDK**. Jádro tvoří commerce primitives v čistém JavaScriptu: typed Storefront API klient s automatickým schema typingem, cart management (add, update, remove, attributy), money formatting, analytika s consent handling, Shop Pay button a request handlers pro API proxy a redirecty. Tyto primitives se instalují do libovolného server-rendered JavaScript projektu jediným příkazem.

Podporované frameworky v developer preview: **Next.js, Remix (React Router), Astro, SvelteKit, Nuxt, SolidStart**. Integrace probíhá přes `npx @shopify/hydrogen@preview setup` spuštěný v kořenu existujícího projektu — příkaz detekuje framework a nakonfiguruje vše automaticky.

**Agent-first design** je druhá velká novinka. Preview se dodává s 12 skills pro coding agenty:

- `hydrogen-setup` — end-to-end konfigurace projektu
- `hydrogen-storefront-client` — Storefront API klient a typed queries
- `hydrogen-cart-ui` — cart komponenty a state management
- `hydrogen-collection-browser` — product listing a filtrování
- `hydrogen-analytics` — analytika a consent flow
- a dalšími pro produktové stránky, search, customer account atd.

Vývojář zadá agentu přirozený jazyk ("Can you set up my store with Shopify?") a agent pomocí skills implementuje kompletní feature — včetně správných GraphQL queries, error handlingu a environment variables.

Požadavky: server-rendered JavaScript storefront, Node.js + npm, Storefront API přístup přes Headless channel. Customer accounts a predictive search jsou označeny jako "coming soon."

## Časová osa

- **2026-06-17** — Editions Spring '26 announce; developer preview dostupný přes `npx @shopify/hydrogen@preview setup`
- **GA release** — datum neoznámeno; bude obsahovat customer accounts a predictive search
- **Migration path pro existující Hydrogen + Remix projekty** — sledovat Shopify changelog

## Dopad pro nás

**Pro vývojáře:**
Nový Hydrogen je přímá příležitost pro projekty, kde klient preferuje Next.js (nejrozšířenější React meta-framework) nebo jiný stack než Remix. Stávající Hydrogen projekty (Hydrogen + React Router) budou potřebovat migration path — zatím není zdokumentována, ale je nutné ji sledovat ihned jak GA přijde. Developer preview je plně funkční pro nové projekty; 12 skills výrazně zkracuje setup time při práci s Claude Code nebo Cursorem.

**Pro PM / PO:**
Odpadá nejčastější námitka klientů ("musíme psát Remix") při volbě headless storefrontu. Pokud existuje aktivní poptávka po custom headless frontendu s Next.js, toto je správný čas otevřít konverzaci o Hydrogen jako production option. Developer preview není vhodné pro ostré nasazení; sledovat GA release jako go/no-go milník.

## Použití v Integrátoru

Hydrogen SDK přímo nesouvisí s Shopify integrátorem (Admin/Storefront API integrace), ale framework-agnostic přechod otevírá cestu k headless storefront projektům s libovolným tech stackem — potenciálně relevantní při návrhu architektur pro klienty s custom front-endem.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Developer](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)
