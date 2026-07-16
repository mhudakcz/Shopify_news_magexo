---
date: 2026-07-09
title: "Hydrogen developer preview update (červenec 2026)"
title_en: "Hydrogen developer preview update"
slug: hydrogen-developer-preview-update-jul-2026
zdroj: https://shopify.dev/changelog/hydrogen-developer-preview-update
shrnuto_dne: 2026-07-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Update rozšiřuje Hydrogen developer preview o Customer Account API a caching Storefront API dat — relevantní jen pokud klient staví headless storefront na tomto frameworku."
dotcene_klienty: []
souvisejici: [hydrogen-any-stack-preview, hydrogen-deploys-to-vercel, hydrogen-april-2026-release]
tldr: "Hydrogen developer preview dostal 8. července update s cachingem katalogových dat, podporou Customer Account API, same-origin predictive search a experimentálními WebMCP nástroji pro AI agenty."
tagy: [hydrogen, developer-preview, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty. Od Editions Spring '26 existuje jako framework-agnostic developer preview — commerce primitives (Storefront API klient, cart, checkout, analytika) v čistém JavaScriptu, které lze zapojit do libovolného server-rendered JS stacku (Next.js, Remix, Astro, SvelteKit, Nuxt, SolidStart) jedním příkazem `npx @shopify/hydrogen@preview setup`.

    Update z 8. července 2026 doplňuje preview kanál o šest novinek: caching Storefront API odpovědí pro katalogová data (produkty, kolekce); WebMCP nástroje umožňující in-browser AI agentům volat commerce funkce přes Model Context Protocol; podporu Customer Account API (dříve označenou jako "coming soon"); same-origin predictive search bez CORS komplikací; typované routes a redirecty; a ShopifyScripts pro spouštění Shopify skriptů v prohlížeči spolu se sjednoceným zpracováním cart routes. Jde o navazující krok po Deploy buttonu pro Vercel z konce června — preview se postupně přibližuje stavu použitelnému i mimo prototypy, GA release ale zatím není oznámen.

    Prakticky jde o průběžné rozšiřování preview kanálu bez breaking changes pro existující preview projekty. Nejvýraznější posun je podpora Customer Account API, protože dosud chyběla přihlašovací a účet-related funkcionalita, kvůli které nebyl preview vhodný pro storefronty vyžadující zákaznické účty. WebMCP nástroje jsou spíš experimentální ukázka směru, kam Shopify AI Toolkit strategii posouvá, než produkčně použitelná funkce.
  zdroje:
    - title: "Shopify: Hydrogen developer preview update"
      url: "https://shopify.dev/changelog/hydrogen-developer-preview-update"
    - title: "Hydrogen developer preview release notes — July 8, 2026"
      url: "https://hydrogen.shopify.dev/update/developer-preview-release-notes-july-8-2026"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify vydal 8. července 2026 další update frameworku-agnostic Hydrogen developer preview (poprvé představeného na Editions Spring '26). Update rozšiřuje sadu commerce primitives a nástrojů dostupných v preview kanálu o šest novinek:

- **Storefront API caching pro katalogová data** — cachuje odpovědi na produkty a kolekce, snižuje počet volání Storefront API a zrychluje renderování stránek.
- **WebMCP tools pro in-browser AI agenty** — umožňuje agentům běžícím přímo v prohlížeči volat commerce funkce storefrontu přes Model Context Protocol.
- **Podpora Customer Account API** — dosud označená jako "coming soon", nyní dostupná v preview; umožňuje přihlášení a správu účtu zákazníka přímo v Hydrogen storefrontu.
- **Same-origin predictive search** — vyhledávací návrhy běží nově ze stejné domény jako storefront, což odstraňuje CORS komplikace a zlepšuje výkon.
- **Typed routes a redirecty** — typované definice routes a redirect handling přímo v SDK, méně ručního psaní typů pro navigaci.
- **ShopifyScripts pro Shopify browser runtime a sjednocené zpracování cart route** — společný mechanismus pro spouštění Shopify skriptů v prohlížeči a jednotné route handlery pro operace s košíkem.

Update navazuje na první developer preview z Editions Spring '26 (framework-agnostic SDK, agent-first skills) a na Deploy button pro Vercel z konce června — dohromady posouvají preview blíž ke stavu použitelnému pro reálné projekty, i když stále jde o preview kanál bez garantované stability API.

## Časová osa

- **Spring 2026 (Editions)** — spuštěn framework-agnostic Hydrogen developer preview
- **2026-06-30** — přidán Deploy button pro Vercel
- **2026-07-08** — tento update: caching, WebMCP tools, Customer Account API, same-origin predictive search, typed routes, ShopifyScripts
- **GA release** — datum zatím neoznámeno

## Dopad pro nás

**Pro vývojáře:** Přibývající funkce, zejména Customer Account API a same-origin predictive search, postupně odstraňují mezery, kvůli kterým preview dosud nebyl vhodný pro projekty vyžadující zákaznické účty. WebMCP tools jsou zajímavé pro budoucí AI-agent nákupní scénáře, ale zatím jde o experimentální oblast bez širšího praktického využití. Nejde o breaking change — jen doplnění preview kanálu, žádná okamžitá akce není potřeba.

**Pro PM / PO:** Nová funkčnost dále posiluje argument pro Hydrogen jako headless možnost i mimo Remix stack, včetně projektů s požadavkem na přihlášení zákazníka. Stále doporučujeme sledovat GA release jako reálný milník pro nasazení u klienta — developer preview zůstává vhodný spíš pro prototypy a interní ověření feasibility.

## Použití v Integrátoru

Přímo se integrátoru netýká — jde o frontendový (storefront) framework. Relevantní jen v kontextu budoucích headless projektů postavených na Hydrogen, kde by nová podpora Customer Account API mohla zjednodušit propojení se zákaznickými daty.
