---
date: 2026-05-12
title: "PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION warning v Storefront Cart API"
title_en: "New PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION warning code in the Storefront API Cart"
slug: product-unavailable-buyer-location-warning
zdroj: https://shopify.dev/changelog/new-productunavailableinbuyerlocation-warning-code-in-the-storefront-api-cart
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api]
api_oblast: storefront
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Storefront Cart API. Naše integrace primárně Admin API, ale pokud klient používá custom storefront / headless flow s našou pomocí, je třeba handlovat nový warning."
dotcene_klienty: []
souvisejici: [storefront-cart-discount-fields]

kontext:
  background: |
    Cart objekt ve Storefront API reprezentuje záměr kupujícího k nákupu a je centrálním bodem headless commerce integrace. Obsahuje položky (CartLine), informace o kupujícím (buyerIdentity), slevy i odhadované náklady. Systém varování (warnings) v Cart objektu slouží k signalizaci stavů, které nevyžadují blokování nákupu, ale vyžadují pozornost frontendu — jde tedy o neerrorový způsob předávání diagnostických informací.

    Shopify Markets je platforma pro správu mezinárodního prodeje, která obchodníkům umožňuje definovat různé katalogy, ceny, daně a dostupnost produktů podle geografické lokace zákazníka. Buyer location se odvozuje z buyerIdentity pole v Cart objektu — typicky z ip adresy, explicitně nastavené země nebo doručovací adresy. Produkty mohou být v rámci Markets označeny jako nedostupné pro konkrétní regiony z důvodů jako věkové omezení, právní regulace nebo regionální distribuce.

    Nový warning kód PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION přináší granulární zpětnou vazbu na úrovni jednotlivých CartLine, nikoli pouze celého košíku. Frontend může díky tomu selektivně zvýraznit problémové položky a informovat zákazníka dříve, než se dostane k pokladně. Tato změna je součástí širšího trendu zlepšování validační vrstvy Storefront API pro mezinárodní scénáře.

    Mechanismus warnings v Cart objektu byl rozšiřován postupně v rámci API verzí 2026-x. Podobný přístup, tedy přidávání nových polí pro lepší diagnostiku, je patrný i u discount polí přidaných v témže API cyklu. Vývojáři headless storefront řešení by měli implementovat zpracování celého pole warnings, aby byli připraveni na budoucí přírůstky nových kódů.
  zdroje:
    - title: "Shopify Changelog: New PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION warning code in the Storefront API Cart"
      url: "https://shopify.dev/changelog/new-productunavailableinbuyerlocation-warning-code-in-the-storefront-api-cart"
    - title: "Shopify Docs: Cart object – Storefront API"
      url: "https://shopify.dev/docs/api/storefront/latest/objects/Cart"
    - title: "Archiv: Nová discount pole v Storefront API cart types od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-cart-discount-fields/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Od Storefront API 2026-07 Cart emituje warning PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION když cart obsahuje produkty nedostupné v buyer location — warning mapovaný na konkrétní CartLine IDs."
tagy: [storefront, cart, markets, validation]
---

## Co se mění
Storefront API verze **2026-07** přidává do Cart objektu **warning kód** `PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION`. Cart vrací warning když některé line items obsahují produkty, které nejsou dostupné v zákazníkově **buyer location** (typicky regional market restrictions, age-restricted products v některých zemích). Warning má reference na konkrétní `CartLine` IDs, takže frontend může selektivně highlightovat problémové položky.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud klient používá headless storefront / custom checkout flow nad naší integrací, frontend by měl tento warning konzumovat a ošetřit UX (např. message "Produkt X není dostupný ve vaší zemi"). Naše Admin API operace nedotčené.

**Pro PM / PO:**
Lepší UX pro mezinárodní obchody s regional restriction setupem (Markets).

## Použití v Integrátoru
**Možná** — záleží jestli nějaký klient má headless setup. Storefront Cart API direct nepoužíváme.
