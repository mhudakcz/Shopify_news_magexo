---
date: 2026-11-09
title: "GraphQL vs. REST pro enterprise commerce (2027)"
slug: blog-graphql-vs-rest-enterprise-commerce-2027
zdroj: https://www.shopify.com/cz/blog/graphql-vs-rest
shrnuto_dne: 2026-11-11
kategorie: [fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některé naše integrace stále volají REST Admin API, článek potvrzuje, že nový vývoj má směřovat na GraphQL, zatímco REST zůstává podporovaný pro webhooky a jednoduché operace."
dotcene_klienty: []
souvisejici: [partner-apps-enable-bulk-operations, global-catalog-rest-api-sunset-2026-11-02, ip-allowlist-admin-api-restriction]
tldr: "Shopify blog doporučuje pro větší projekty GraphQL (přesné dotazy, typované schéma, nové funkce nejdřív), REST zůstává podporovaný jako legacy a při postupné migraci se obě API používají souběžně."
tagy: [graphql, rest, api, enterprise, shopify-admin-api, architektura, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Článek na Shopify blogu porovnává REST a GraphQL pro velké e-commerce projekty. REST nabízí více endpointů s pevným tvarem odpovědi, předvídatelnost, jasné HTTP stavové kódy a nativní HTTP cache, ale trpí over-fetchingem a under-fetchingem, kdy je potřeba více volání pro sestavení jednoho pohledu. GraphQL má jediný endpoint a typované schéma, klient si vyžádá přesně potřebná pole včetně souvisejících dat v jednom dotazu a využije introspekci pro tooling.

    Shopify označil GraphQL za oficiální API v říjnu 2024 a od 1. dubna 2025 musí nové aplikace v App Store používat GraphQL. REST Admin API stále funguje, ale je označeno jako legacy a není odstraněno, takže Admin API není striktně pouze GraphQL. Nové funkce vycházejí nejdřív v GraphQL a některé, například metaobjekty nebo produkty s až 2 000 variantami, jsou dostupné jen tam. Storefront API, Shopify Functions i App Bridge na GraphQL stojí.

    K migraci článek doporučuje souběžný provoz: stávající REST integrace nechat běžet, nový vývoj směrovat na GraphQL a začít u datově náročných nebo složitých procesů. REST dává smysl pro webhooky, nahrávání souborů, jednoduché operace nad jedním zdrojem a partnerské integrace. Příkladem je Skullcandy, které použilo REST s webhooky pro zpracování objednávek a GraphQL pro hromadné aktualizace skladu. Nevýhody GraphQL jsou chyby vracené s HTTP 200, cache řešená na úrovni aplikace a nutnost hlídat náklady a hloubku dotazů.
  zdroje:
    - title: "Shopify: GraphQL vs. REST pro enterprise commerce (2027)"
      url: "https://www.shopify.com/cz/blog/graphql-vs-rest"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Marketingově laděný, ale věcný přehled rozdílů mezi REST a GraphQL v kontextu velkých obchodů na Shopify. GraphQL vyhrává tam, kde jsou data propojená (produkty, varianty, sklad podle lokací, objednávky, B2B ceny), kde existuje více typů klientů nebo kde záleží na rychlosti headless storefrontu. REST zůstává praktický pro jednoduché a stabilní scénáře. Shopify uvádí, že REST Admin API je legacy, ale stále funkční, takže nejde o tvrdé vypnutí. Čísla o rychlosti a obratu (například případ Skullcandy) jsou převzatá z článku a mají marketingový charakter.

## Pro koho je to relevantní

Pro vývojáře a architekty integrací, kteří dosud volají REST Admin API. Prakticky: nové funkce a hromadné operace stavět v GraphQL, stávající REST volání migrovat postupně podle priorit a webhooky nechat tak, jak jsou. Pro obchodníky a projektové manažery jde o informativní kontext k plánování technického dluhu, bez akutní akce.
