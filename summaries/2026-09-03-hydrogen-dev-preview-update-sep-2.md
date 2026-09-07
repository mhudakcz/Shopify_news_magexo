---
date: 2026-09-03
title: "Hydrogen developer preview update — 2. 9. 2026"
title_en: "Hydrogen developer preview update: September 2, 2026"
slug: hydrogen-dev-preview-update-sep-2
zdroj: https://shopify.dev/changelog/hydrogen-developer-preview-update-september-2-2026
shrnuto_dne: 2026-09-08
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-03
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Cart refresh a variant links řeší konkrétní edge-case headless scénářů (server-side cart, Google Shopping feed) — relevantní jen pro Hydrogen preview storefronty."
dotcene_klienty: []
souvisejici: [hydrogen-developer-preview-update-aug-18, hydrogen-dev-preview-jul-30-2026, hydrogen-developer-preview-update-jul-2026]
tldr: "Hydrogen developer preview dostal 2. září update: odkazy na konkrétní variantu produktu se otevřou přímo na ní, cart lze ručně obnovit po serverové změně a lokální HTTPS certifikáty pro Customer Account testování se generují automaticky."
tagy: [hydrogen, developer-preview, storefront-api, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty. Od Editions Spring '26 existuje jako framework-agnostic developer preview — commerce primitives (Storefront API klient, cart, checkout, analytika) v čistém JavaScriptu, které lze zapojit do libovolného server-rendered JS stacku jedním příkazem `npx @shopify/hydrogen@preview setup`. Předchozí updaty preview kanál rozšířily o caching katalogových dat, Customer Account API a WebMCP nástroje (8. 7.), o Vue bindings a GraphQL TypeScript tooling (30. 7.) a o cart attributes, cart-session attribution a lokální HTTPS pro vývoj (18. 8.).

    Update z 2. září 2026 přidává tři menší vylepšení. Odkazy, které míří na konkrétní variantu produktu — typicky ty, jež Shopify posílá do Google Shopping feedu — se nově otevřou rovnou na dané variantě místo výchozí varianty produktu, což opravuje nekonzistenci mezi tím, co zákazník vidí v Google nákupech, a tím, na co po prokliku skutečně dopadne. Dále přibyla možnost ručně obnovit obsah cache po tom, co byl cart změněn mimo běžný tok aplikace, například košík vytvořený na serveru. A lokální HTTPS certifikáty pro testování Customer Account přihlašování se nyní generují automaticky, takže nastavení důvěryhodného lokálního hostname vyžaduje jeden příkaz, nebo žádný.

    Jde o čistě aditivní update preview kanálu, Shopify neuvádí žádné breaking changes ani migrační kroky pro existující projekty. GA release Hydrogen preview stále nebyl oznámen.
  zdroje:
    - title: "Shopify: Hydrogen developer preview update: September 2, 2026"
      url: "https://shopify.dev/changelog/hydrogen-developer-preview-update-september-2-2026"
    - title: "Hydrogen developer preview release notes — September 2, 2026"
      url: "https://hydrogen.shopify.dev/update/developer-preview-release-notes-september-2-2026"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify vydal 2. září 2026 další inkrementální update frameworku-agnostic Hydrogen developer preview, navazující na updaty z 8. a 30. července a 18. srpna. Přibyly tři novinky:

- **Variant links** — odkazy mířící na konkrétní variantu produktu (např. ty, které Shopify posílá do Google Shopping feedu) se nově otevřou rovnou na dané variantě, ne na výchozí variantě produktu.
- **Cart refresh** — možnost ručně obnovit cart po tom, co byl změněn mimo standardní tok aplikace, například košík vytvořený na serveru.
- **Automatické lokální HTTPS certifikáty** — certifikáty pro testování Customer Account přihlašování se generují automaticky, nastavení lokálního hostname vyžaduje jeden příkaz, nebo žádný.

Update je čistě aditivní, bez breaking changes pro stávající preview projekty. GA release stále nebyl oznámen.

## Časová osa

- **Spring 2026 (Editions)** — spuštěn framework-agnostic Hydrogen developer preview
- **2026-06-30** — přidán Deploy button pro Vercel
- **2026-07-08** — caching, WebMCP tools, Customer Account API, same-origin predictive search, typed routes, ShopifyScripts
- **2026-07-30** — Vue bindings, GraphQL TypeScript tooling, analytika přes ShopifyScripts, Shopify Inbox, suspense cart reads
- **2026-08-18** — cart session attribution, cart attributes, standardní page view eventy, rychlejší Shop Pay button, lokální HTTPS, pluggable logging
- **2026-09-02** — tento update: variant links, cart refresh, automatické lokální HTTPS certifikáty
- **GA release** — datum zatím neoznámeno

## Dopad pro nás

**Pro vývojáře:** Jde o tři drobná, cílená vylepšení developer experience spíš než o nové commerce primitives. Variant links opravují reálný nesoulad mezi Google Shopping feedem a storefrontem; cart refresh se hodí ve scénářích se serverovou správou košíku; automatické HTTPS certifikáty zjednodušují lokální testování přihlašování. Žádná okamžitá akce není potřeba, jde o preview bez garantované API stability.

**Pro PM / PO:** Tempo updatů (přibližně jednou za 3-4 týdny) ukazuje na stabilní, ale pomalé dozrávání preview kanálu spíš drobnými opravami než velkými novými schopnostmi. Pro nabídky klientům stále doporučujeme sledovat GA release jako reálný milník pro produkční nasazení — preview zůstává vhodný spíš pro prototypy a feasibility ověření.

## Použití v Integrátoru

Přímo se integrátoru netýká — jde o frontendový (storefront) framework. Relevantní jen pokud bychom u klienta stavěli headless storefront na Hydrogen preview a řešili variant-specific odkazy nebo serverovou správu cache.
