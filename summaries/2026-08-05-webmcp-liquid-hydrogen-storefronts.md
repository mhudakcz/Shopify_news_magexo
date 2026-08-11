---
date: 2026-08-05
title: "WebMCP podpora pro Liquid a Hydrogen storefronts"
title_en: "WebMCP support for Liquid and Hydrogen storefronts"
slug: webmcp-liquid-hydrogen-storefronts
zdroj: https://shopify.dev/changelog/webmcp-liquid-hydrogen
shrnuto_dne: 2026-08-11
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient staví nebo provozuje Liquid či Hydrogen storefront, WebMCP tools se aktivují bez konfigurace na naší straně, ale je dobré vědět, že AI agenti mohou nyní košík a katalog ovládat mimo klasické UI."
dotcene_klienty: []
souvisejici: [hydrogen-developer-preview-update-jul-2026, standard-storefront-events-actions, storefront-mcp-cart-tools-deprecated-ucp]
tldr: "Shopify zpřístupnil WebMCP nástroje (browser-side Model Context Protocol) na všech Liquid storefrontech a v Hydrogen developer preview — AI agenti mohou přímo vyhledávat v katalogu, spravovat košík a procházet checkout bez parsování stránky, prozatím jen v Chromium origin trialu."

tagy: [webmcp, liquid, hydrogen, storefronts, mcp, agentic]
zdroj_kanal: dev-changelog
kontext:
  background: |
    WebMCP je navrhovaný webový standard, který umožňuje stránce registrovat nástroje přímo v prohlížeči — AI agent nebo browser assistant je pak může volat stejně jako jakékoliv jiné API, aniž by musel simulovat kliky nebo parsovat DOM. Shopify od 5. srpna 2026 tento standard zapojil do online storefrontů: nasazen je na všech Liquid storefrontech a v Hydrogen developer preview, bez jakékoliv instalace nebo konfigurace na straně obchodu.

    Sada dostupných nástrojů pokrývá celý nákupní tok — vyhledávání a procházení katalogu, zobrazení detailu produktu a variant, čtení a úpravu košíku, zrušení košíku, checkout a správu objednávek, a také vyhledávání v policies a FAQ. Klíčový detail je, že všechny cart akce spouštěné přes WebMCP vyvolávají stejné standardní storefront events, které používají klasické apps (viz `shopify:cart:lines-update` a podobné) — takže i cart drawer animace a další theme chování zůstávají konzistentní bez ohledu na to, jestli košík upravil člověk kliknutím, nebo AI agent přes WebMCP tool.

    Podpora je prozatím omezena na Chromium-based prohlížeče přes origin trial — jde tedy o časnou fázi vývoje standardu, na kterém Shopify spolupracuje s Google a Microsoftem. Pro Hydrogen navazuje tento krok na experimentální WebMCP nástroje, které se objevily už v developer preview update z 8. července 2026 — nyní jde o formálnější a širší zapojení napříč oběma storefront technologiemi (Liquid i Hydrogen).
  zdroje:
    - title: "Shopify: WebMCP support for Liquid and Hydrogen storefronts"
      url: "https://shopify.dev/changelog/webmcp-liquid-hydrogen"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify zavádí WebMCP — browser-side implementaci Model Context Protocol — jako standardní součást online storefrontů. Online obchody nyní vystavují sadu WebMCP nástrojů, které mohou AI agenti a browser assistanti volat přímo přes standardizované rozhraní prohlížeče, místo aby simulovali kliknutí nebo parsovali HTML stránky.

Dostupné nástroje pokrývají prakticky celý nákupní proces: vyhledávání a procházení katalogu, zobrazení detailu produktu a variant, čtení, úpravu a zrušení košíku, checkout a správu objednávek, a vyhledávání v policies a FAQ obchodu. Podpora je aktivní na všech Liquid storefrontech a v Hydrogen developer preview, bez nutnosti jakékoliv instalace či nastavení ze strany obchodníka nebo vývojáře.

Důležitá vlastnost pro konzistenci UI: všechny akce s košíkem provedené přes WebMCP spouštějí tytéž storefront events, které theme a apps standardně používají — cart drawer animace a další theme chování tak zůstávají zachovány, ať košík upravuje člověk, nebo agent.

Podpora je zatím dostupná jen v Chromium-based prohlížečích přes origin trial, protože samotný WebMCP standard je v rané fázi vývoje — Shopify na jeho specifikaci spolupracuje s Google a Microsoftem.

## Časová osa

- **8. července 2026** — experimentální WebMCP nástroje se objevují v Hydrogen developer preview update jako ukázka směru.
- **5. srpna 2026** — formální zapojení WebMCP tools napříč všemi Liquid storefronty a Hydrogen developer preview, dostupné bez konfigurace.
- Probíhající origin trial v Chromium prohlížečích, standard je stále ve vývoji ve spolupráci s Google a Microsoft.

## Dopad pro nás

**Pro vývojáře:** Není potřeba nic instalovat ani konfigurovat — WebMCP tools se aktivují automaticky na Liquid storefrontech i v Hydrogen preview projektech. Pokud vyvíjíme vlastní theme akce nebo custom cart logiku, stojí za to ověřit, že jsou navázané na standardní storefront events, aby zůstaly konzistentní i při interakci přes WebMCP.

**Pro PM / PO:** Jde o nízkou naléhavost a čistě informativní novinku bez nutnosti akce u klientů — funkce běží automaticky na pozadí. Relevantní je pro komunikaci s klienty, kteří se zajímají o AI-agentní nakupování nebo browser assistanty, protože se jedná o další krok v širší Shopify agentic strategii.

## Použití v Integrátoru

Přímý dopad na naši práci je minimální — funkce se aktivuje automaticky na Liquid a Hydrogen storefrontech bez zásahu z naší strany. Stojí za sledování v kontextu budoucích AI-agentních integrací a jako doplněk k tématu UCP a Storefront/Cart MCP, které Shopify paralelně rozvíjí.
