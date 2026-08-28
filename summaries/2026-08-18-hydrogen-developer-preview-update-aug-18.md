---
date: 2026-08-18
title: "Hydrogen developer preview update — 18. 8. 2026"
title_en: "Hydrogen developer preview update: August 18, 2026"
slug: hydrogen-developer-preview-update-aug-18
zdroj: https://shopify.dev/changelog/hydrogen-developer-preview-update-august-18-2026
shrnuto_dne: 2026-08-28
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přidává cart attributes a session attribution mezi cart a customer account — relevantní jen pro headless storefronty stavěné na Hydrogen preview."
dotcene_klienty: []
souvisejici: [hydrogen-dev-preview-jul-30-2026, hydrogen-developer-preview-update-jul-2026, standard-storefront-events-cart-attributes]
tldr: "Hydrogen developer preview dostal 18. srpna update: cart attributes, cart-session attribution pro přihlášené zákazníky, standardní page view eventy, rychlejší Shop Pay button, lokální HTTPS pro vývoj a pluggable logging."
tagy: [hydrogen, developer-preview, storefront-api, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty. Od Editions Spring '26 existuje jako framework-agnostic developer preview — commerce primitives (Storefront API klient, cart, checkout, analytika) v čistém JavaScriptu, které lze zapojit do libovolného server-rendered JS stacku jedním příkazem `npx @shopify/hydrogen@preview setup`. Předchozí updaty preview kanál rozšířily o caching katalogových dat, Customer Account API, same-origin predictive search a WebMCP nástroje (8. 7.) a následně o Vue bindings, GraphQL TypeScript tooling a Shopify Inbox integraci (30. 7.).

    Update z 18. srpna 2026 přidává šest dalších vylepšení. Cart a Customer Account session zůstávají synchronizované, takže přihlášený zákazník dojde k checkoutu s uloženými údaji bez opětovného zadávání. Cart attributes umožňují připojit metadata na úrovni objednávky (např. dárkový vzkaz) i na úrovni jednotlivé položky (např. instrukce ke gravírování). Standardní page view eventy se nově spouští při každé navigaci, nejen při prvním načtení stránky, což dává analytickým platformám viditelnost i do client-side routingu. Shop Pay tlačítko se vykresluje se stylováním a interaktivitou ještě předtím, než se spustí JavaScript, takže mizí prázdný stav při načítání. Lokální HTTPS umožňuje testovat přihlašovací flow zákazníka na důvěryhodném lokálním hostname bez tunelu nebo ručně vytvářených certifikátů. Pluggable logging dovoluje týmům nastavit úroveň logování a směrovat varování a chyby do vlastního observability systému.

    Jde o čistě aditivní update preview kanálu, Shopify neuvádí žádné breaking changes ani migrační kroky pro existující projekty. GA release Hydrogen preview stále nebyl oznámen.
  zdroje:
    - title: "Shopify: Hydrogen developer preview update: August 18, 2026"
      url: "https://shopify.dev/changelog/hydrogen-developer-preview-update-august-18-2026"
    - title: "Hydrogen developer preview release notes — August 18, 2026"
      url: "https://hydrogen.shopify.dev/update/developer-preview-release-notes-august-18-2026"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify vydal 18. srpna 2026 další inkrementální update frameworku-agnostic Hydrogen developer preview, navazující na updaty z 8. a 30. července. Přibylo šest novinek:

- **Cart session attribution** — cart a Customer Account session zůstávají provázané, takže přihlášený zákazník dojde k checkoutu s uloženými údaji bez opětovného zadávání.
- **Cart attributes** — možnost připojit metadata na úroveň celé objednávky (např. dárkový vzkaz) i na úroveň konkrétní položky košíku (např. instrukce ke gravírování).
- **Standardní page view eventy** — event se nově spouští při každé navigaci (nejen při prvním načtení stránky), což dává analytickým platformám viditelnost i do client-side routingu.
- **Rychlejší Shop Pay tlačítko** — vykresluje se se stylováním a interaktivitou ještě předtím, než se spustí JavaScript, takže mizí prázdný stav při načítání.
- **Lokální HTTPS pro vývoj** — testování přihlašovacího flow zákazníka na důvěryhodném lokálním hostname, bez tunelu nebo ručně vytvářených certifikátů.
- **Pluggable logging** — nastavitelná úroveň logování a možnost směrovat varování a chyby do vlastního observability systému.

Update je čistě aditivní, bez breaking changes pro stávající preview projekty. GA release stále nebyl oznámen.

## Časová osa

- **Spring 2026 (Editions)** — spuštěn framework-agnostic Hydrogen developer preview
- **2026-06-30** — přidán Deploy button pro Vercel
- **2026-07-08** — caching, WebMCP tools, Customer Account API, same-origin predictive search, typed routes, ShopifyScripts
- **2026-07-30** — Vue bindings, GraphQL TypeScript tooling, analytika přes ShopifyScripts, Shopify Inbox, suspense cart reads
- **2026-08-18** — tento update: cart session attribution, cart attributes, standardní page view eventy, rychlejší Shop Pay button, lokální HTTPS, pluggable logging
- **GA release** — datum zatím neoznámeno

## Dopad pro nás

**Pro vývojáře:** Cart attributes a session attribution řeší reálné mezery, na které headless projekty s přihlašováním zákazníků typicky narazí (personalizace objednávky, kontinuita session mezi cart a účtem). Standardní page view eventy a rychlejší Shop Pay button zlepšují analytiku a UX bez nutnosti vlastních workaroundů. Lokální HTTPS a pluggable logging jsou spíš vylepšení developer experience. Žádná okamžitá akce není potřeba, jde o preview bez garantované API stability.

**Pro PM / PO:** Postupné doplňování preview kanálu ukazuje, že Hydrogen commerce primitives dozrávají směrem k funkčně kompletnější nabídce (cart personalizace, přihlašování, analytika). Pro nabídky klientům stále doporučujeme sledovat GA release jako reálný milník pro produkční nasazení — preview zůstává vhodný spíš pro prototypy a feasibility ověření.

## Použití v Integrátoru

Přímo se integrátoru netýká — jde o frontendový (storefront) framework. Relevantní jen pokud bychom u klienta stavěli headless storefront na Hydrogen preview a potřebovali cart attributes nebo provázání cart/customer session.
