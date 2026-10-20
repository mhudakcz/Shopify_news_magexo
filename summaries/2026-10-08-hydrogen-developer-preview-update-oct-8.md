---
date: 2026-10-08
title: "Hydrogen developer preview update — 8. 10. 2026"
title_en: "Hydrogen developer preview update: October 8, 2026"
slug: hydrogen-developer-preview-update-oct-8
zdroj: https://shopify.dev/changelog/posts/hydrogen-developer-preview-update-october-8-2026
shrnuto_dne: 2026-10-20
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Predictive search, měna v product_viewed eventech a UCP business profile na /.well-known/ucp se týkají jen headless storefrontů na Hydrogen preview — relevantní pouze pokud takový storefront u klienta stavíme."
dotcene_klienty: []
souvisejici: [hydrogen-dev-preview-update-sep-2, hydrogen-developer-preview-update-aug-18, storefronts-ucp-2026-08-25-support]
tldr: "Hydrogen developer preview dostal 8. října update: predictive search drawer v React Router šabloně, product_viewed eventy s kompletním objektem price včetně měny a UCP business profile servírovaný na /.well-known/ucp."
tagy: [hydrogen, developer-preview, storefront-api, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty. Od Editions Spring '26 existuje jako framework-agnostic developer preview — commerce primitives (Storefront API klient, cart, checkout, analytika) v čistém JavaScriptu, které lze zapojit do libovolného server-rendered JS stacku jedním příkazem `npx @shopify/hydrogen@preview setup`. Předchozí updaty preview kanál rozšířily o caching a Customer Account API (8. 7.), o Vue bindings a GraphQL TypeScript tooling (30. 7.), o cart attributes, cart-session attribution a lokální HTTPS (18. 8.) a o variant links, cart refresh a automatické lokální HTTPS certifikáty (2. 9.).

    Update z 8. října 2026 přidává tři novinky. Šablona pro React Router nově obsahuje predictive search drawer, který zákazníkovi během psaní nabízí produkty. Eventy `product_viewed` nově nesou celý objekt `variant.price` (částka i `currencyCode`) místo samotné částky jako řetězce, takže si Shopify analytika dokáže měnu přečíst přímo z eventu bez další konfigurace. A funkce `handleShopifyRoutes` nově servíruje UCP business profile obchodu na cestě `/.well-known/ucp`, kde ho najdou agenti pracující přes Universal Commerce Protocol.

    Shopify u postu uvádí Action required: No a žádné verze ani breaking changes. Prakticky ale jde o jednu změnu, která může vyžadovat zásah v kódu: kdo do `product_viewed` dosud posílal `variant.price.amount`, má posílat `variant.price`, a každá destinace čtoucí pole `price` pak dostane objekt `{amount, currencyCode}` místo řetězce. Rozdíl oproti předchozímu preview je dohledatelný přes `git diff 5fa006e3b..00e9dd849`. Update je v pořadí další inkrementální krok preview kanálu, po kterém následoval GA release Hydrogen 2026-10 (14. 10. 2026).
  zdroje:
    - title: "Shopify: Hydrogen developer preview update: October 8, 2026"
      url: "https://shopify.dev/changelog/posts/hydrogen-developer-preview-update-october-8-2026"
    - title: "Hydrogen developer preview release notes — October 8, 2026"
      url: "https://hydrogen.shopify.dev/update/developer-preview-release-notes-october-8-2026"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify vydal 8. října 2026 další inkrementální update framework-agnostic Hydrogen developer preview, navazující na updaty z 8. a 30. července, 18. srpna a 2. září. Přibyly tři novinky:

- **Predictive search v React Router šabloně** — šablona obsahuje predictive search drawer, který zákazníkovi nabízí produkty už během psaní dotazu. Release notes k němu neuvádějí žádné příkazy, názvy souborů ani konfiguraci.
- **Měna v product view eventech** — `product_viewed` eventy nově nesou kompletní objekt `variant.price` (částka a `currencyCode`) místo samotné částky jako řetězce. Shopify analytika tak měnu přečte přímo z eventu a reporty jsou správně bez další konfigurace. Migrace spočívá ve změně `variant.price.amount` na `variant.price` v kódu, který event odesílá.
- **UCP business profile** — `handleShopifyRoutes` nově servíruje business profil obchodu pro Universal Commerce Protocol na cestě `/.well-known/ucp` na doméně storefrontu, takže ho agenti mohou při discovery najít. Release notes nepopisují, jak se profil konfiguruje, co přesně obsahuje ani ve které verzi balíčku vznikl; to je nutné dohledat v dokumentaci nebo v diffu `git diff 5fa006e3b..00e9dd849`.

Shopify u příspěvku uvádí Action required: No. Změna `product_viewed` je ale jediná, která může vyžadovat úpravu existujícího kódu: každá destinace, která čte pole `price`, nově dostane objekt `{amount, currencyCode}` místo řetězce, takže navazující konzumenti eventů (vlastní analytika, feedy, pixely) je třeba zkontrolovat. Post byl 19. 10. 2026 dodatečně aktualizován.

## Časová osa

- **Spring 2026 (Editions)** — spuštěn framework-agnostic Hydrogen developer preview
- **2026-07-08** — caching, WebMCP tools, Customer Account API, same-origin predictive search, typed routes
- **2026-07-30** — Vue bindings, GraphQL TypeScript tooling, analytika přes ShopifyScripts
- **2026-08-18** — cart session attribution, cart attributes, standardní page view eventy, lokální HTTPS
- **2026-08-28** — Shopify storefronty začínají inzerovat UCP verzi 2026-08-25 v discovery profilu `/.well-known/ucp`
- **2026-09-02** — variant links, cart refresh, automatické lokální HTTPS certifikáty
- **2026-10-08** — tento update: predictive search v React Router šabloně, měna v `product_viewed`, UCP business profile přes `handleShopifyRoutes`
- **2026-10-14** — GA release Hydrogen 2026-10

## Dopad pro nás

**Pro vývojáře:** Nejdůležitější je změna tvaru `price` v `product_viewed`. Pokud máme na preview storefrontu vlastní analytickou destinaci nebo pixel, který čte `price` jako řetězec, je potřeba ji upravit na objekt `{amount, currencyCode}`; náš vlastní kód odesílající event má předávat `variant.price` místo `variant.price.amount`. UCP business profile na `/.well-known/ucp` je zajímavý jako další krok k tomu, aby headless storefront byl dohledatelný pro AI agenty podobně jako standardní Shopify storefronty. Predictive search drawer je primárně UX vylepšení výchozí šablony. Jde o preview bez garantované stability API, proto doporučujeme při přechodu na GA porovnat diff mezi verzemi.

**Pro PM / PO:** Update je drobný, pro klienty bez headless storefrontu na Hydrogenu nemá přímý dopad. U klientů, kteří headless zvažují, podporuje tři argumenty: hotový predictive search ve výchozí šabloně, správné měny v analytice napříč multi-currency markety a připravenost na agentní nákupy přes UCP. Pro produkční nasazení doporučujeme počítat s GA vydáním Hydrogen 2026-10 jako reálným milníkem, ne s preview.

## Použití v Integrátoru

Přímo se nás netýká — jde o frontendový (storefront) framework. Relevantní je jen v případě, že bychom u klienta stavěli headless storefront na Hydrogenu a řešili analytiku `product_viewed`, predictive search nebo discovery pro AI agenty přes `/.well-known/ucp`.
