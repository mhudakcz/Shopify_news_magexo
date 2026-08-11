---
date: 2026-07-31
title: "Hydrogen developer preview update — 30. 7. 2026"
title_en: "Hydrogen developer preview update: July 30, 2026"
slug: hydrogen-dev-preview-jul-30-2026
zdroj: https://shopify.dev/changelog/hydrogen-developer-preview-update-july-30
shrnuto_dne: 2026-08-11
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-31
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přidává Vue bindings a další rozšíření preview kanálu — relevantní jen pro headless storefronty stavěné na Hydrogen mimo React/Remix."
dotcene_klienty: []
souvisejici: [hydrogen-developer-preview-update-jul-2026, hydrogen-any-stack-preview, hydrogen-deploys-to-vercel]
tldr: "Hydrogen developer preview dostal 30. července update s Vue bindings, GraphQL TypeScript tooling, analytikou přes ShopifyScripts, podporou Shopify Inbox a suspense cart reads v React."
tagy: [hydrogen, developer-preview, storefront-api, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty. Od Editions Spring '26 existuje jako framework-agnostic developer preview — commerce primitives (Storefront API klient, cart, checkout, analytika) v čistém JavaScriptu, které lze zapojit do libovolného server-rendered JS stacku jedním příkazem `npx @shopify/hydrogen@preview setup`. Update z 8. července 2026 preview rozšířil o caching katalogových dat, WebMCP nástroje, podporu Customer Account API, same-origin predictive search, typed routes a ShopifyScripts.

    Update ze 30. července 2026 na tuto linii navazuje pěti novinkami. Nejvýraznější je podpora Vue přes nový entrypoint `@shopify/hydrogen/vue` — dosud preview cílil výhradně na React, takže jde o první krok k opravdu framework-agnostic nabídce commerce primitives. Dále přibylo GraphQL TypeScript tooling (autocomplete a type checking pro Storefront i Customer Account API rovnou v balíčku), analytika a consent management přesunuté pod ShopifyScripts včetně podpory Shopify privacy banneru, integrace se Shopify Inbox (přepnutí AI agenta na live chat s obsluhou přímo ze storefrontu) a suspense cart reads v React, kdy se košík streamuje až po vykreslení stránky.

    Jde o čistě aditivní update preview kanálu bez breaking changes pro existující projekty. Vue bindings jsou signál, že Shopify míří s Hydrogen commerce primitives za hranice React ekosystému, GA release ale stále nebyl oznámen.
  zdroje:
    - title: "Shopify: Hydrogen developer preview update: July 30, 2026"
      url: "https://shopify.dev/changelog/hydrogen-developer-preview-update-july-30"
    - title: "Hydrogen developer preview release notes — July 30, 2026"
      url: "https://hydrogen.shopify.dev/update/developer-preview-release-notes-july-30-2026"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify vydal 30. července 2026 další inkrementální update frameworku-agnostic Hydrogen developer preview, navazující na update z 8. července. Přibylo pět novinek:

- **Vue bindings (`@shopify/hydrogen/vue`)** — stejné commerce primitives, které dosud fungovaly jen v Reactu, jsou nyní dostupné i pro Vue storefronty.
- **GraphQL TypeScript tooling** — query autocomplete a type checking pro Storefront i Customer Account API rovnou v balíčku, bez ruční konfigurace.
- **Analytika a consent přes ShopifyScripts** — storefront analytika a consent management se nastavují společně s ostatními Shopify skripty, včetně podpory Shopify privacy banneru.
- **Integrace se Shopify Inbox** — zákazník může chatovat s AI agentem storefrontu a nechat se přepnout na živou obsluhu, aniž by opustil Hydrogen storefront.
- **Suspense cart reads v Reactu** — obsah košíku se může streamovat až po vykreslení stránky, takže app shell zůstává rychlý a cachovatelný.

Update je čistě aditivní, bez breaking changes pro stávající preview projekty. Nejvýraznější je podpora Vue — první signál, že Hydrogen commerce primitives směřují k opravdové framework-agnostic nabídce nad rámec React/Remix ekosystému.

## Časová osa

- **Spring 2026 (Editions)** — spuštěn framework-agnostic Hydrogen developer preview
- **2026-06-30** — přidán Deploy button pro Vercel
- **2026-07-08** — caching, WebMCP tools, Customer Account API, same-origin predictive search, typed routes, ShopifyScripts
- **2026-07-30** — tento update: Vue bindings, GraphQL TypeScript tooling, analytika přes ShopifyScripts, Shopify Inbox, suspense cart reads
- **GA release** — datum zatím neoznámeno

## Dopad pro nás

**Pro vývojáře:** Vue bindings otevírají Hydrogen preview i projektům mimo React, což může být relevantní pro budoucí headless zadání s jiným frontendovým stackem. Zbylé novinky (TypeScript tooling, ShopifyScripts analytika, Shopify Inbox, suspense cart) jsou spíš vylepšení developer experience a UX než něco vyžadující okamžitou akci. Stále jde o preview bez garantované API stability.

**Pro PM / PO:** Rozšiřování preview kanálu potvrzuje, že Shopify Hydrogen commerce primitives postupně dozrávají směrem k obecně použitelné vrstvě nad různými frontendovými technologiemi. Pro nabídky klientům je stále vhodnější čekat na GA release nebo preview používat jen pro prototypy a feasibility ověření.

## Použití v Integrátoru

Přímo se integrátoru netýká — jde o frontendový (storefront) framework. Relevantní jen pokud bychom v budoucnu stavěli headless storefront na Hydrogen ve Vue, kde nová podpora zjednoduší integraci s commerce primitives.
