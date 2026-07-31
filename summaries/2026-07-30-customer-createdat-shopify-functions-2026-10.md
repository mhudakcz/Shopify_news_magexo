---
date: 2026-07-30
title: "Customer.createdAt v Shopify Functions (API 2026-10) — segmentation na základě věku účtu"
title_en: "createdAt is now available on the Customer object in Shopify Functions"
slug: customer-createdat-shopify-functions-2026-10
zdroj: https://shopify.dev/changelog/createdat-is-now-available-on-the-customer-object-in-shopify-functions
shrnuto_dne: 2026-07-31
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Shopify Functions (WASM-based custom logika) — pokud klient staví discount/checkout logiku na věku účtu, jde o pole v cart.buyerIdentity.customer, ne o naši integraci."
dotcene_klienty: []
souvisejici: [shop-user-metafields-functions, metaobject-access-shopify-functions, prerequisites-product-discount-functions]
tldr: "Shopify Functions API 2026-10 přidává pole createdAt na Customer objekt, takže function logika může reagovat na stáří zákaznického účtu."
tagy: [shopify-functions, customer, createdat, discounts, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Functions jsou WebAssembly moduly (kompilované z Rustu nebo JavaScriptu), které umožňují přizpůsobit backendovou logiku Shopify v reálném čase — typicky výpočet slev, validaci košíku, cart transform nebo delivery customization. Tyto funkce dostávají na vstupu strukturovaný GraphQL dotaz definovaný vývojářem a vrací rozhodnutí, které Shopify aplikuje v checkoutu.

    Do API verze 2026-10 nebylo možné z funkce zjistit, kdy si zákazník založil účet. Function měla přístup k identitě kupujícího přes cart.buyerIdentity.customer, ale bez informace o datu vzniku účtu. Segmentace typu "sleva jen pro nové zákazníky" nebo "věrnostní odměna po X měsících" se tak musela řešit oklikou — přes tagy, metafields naplněné jiným procesem, nebo externí lookup mimo function.

    Nové pole createdAt na Customer objektu tuto mezeru zavírá. Function si ho vyžádá v input query (cart.buyerIdentity.customer.createdAt) a dostane timestamp založení účtu přímo v datech, se kterými už pracuje. Jde o čistě aditivní změnu — existující funkce běžící na starších API verzích nejsou nijak ovlivněny a žádnou akci nevyžadují. Nutné je pouze přejít na API 2026-10 a pole si explicitně vyžádat; zároveň je potřeba počítat s tím, že u guest checkoutu může být buyerIdentity nebo customer null.
  zdroje:
    - title: "Shopify: createdAt is now available on the Customer object in Shopify Functions"
      url: "https://shopify.dev/changelog/createdat-is-now-available-on-the-customer-object-in-shopify-functions"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify Functions API verze 2026-10 přidává na Customer objekt nové pole `createdAt`, které vrací datum a čas založení zákaznického účtu. Function ho získá přes `cart.buyerIdentity.customer.createdAt` po přidání pole do input query. Díky tomu může backendová logika běžící v discountech, cart transformu nebo delivery customization rozhodovat podle toho, jak dlouho zákazník u obchodu nakupuje — bez nutnosti externí lookupu nebo ručně udržovaných metafields.

Typické use-case scénáře, které pole otevírá:

- **Sleva pro nové zákazníky** — např. 10 % pro účty mladší než 30 dní, vypočítané přímo ve function bez závislosti na tagu nastaveném jinde.
- **Loyalty gating** — odemčení výhody až po určité době od založení účtu.
- **Anti-abuse logika** — omezení opakovaného čerpání "welcome" akcí u nově zakládaných účtů, které by jinak obcházely limity.

Změna je čistě aditivní — existující nasazené funkce na starších API verzích fungují beze změny a žádnou migraci nevyžadují.

## Časová osa

- **30. 7. 2026** — pole `createdAt` zveřejněno jako součást Shopify Functions API 2026-10.
- Bez stanoveného konce podpory starších verzí v souvislosti s touto změnou — jde o doplnění, ne o breaking change.

## Dopad pro nás

**Pro vývojáře:** Pokud klient staví vlastní Shopify Function (typicky discount function pro Buy X Get Y, cart validation nebo delivery customization), lze nově do input query přidat `cart.buyerIdentity.customer.createdAt` a použít ho v rozhodovací logice. Nutné je nastavit function na API 2026-10 a ošetřit případ guest checkoutu, kdy `buyerIdentity` nebo `customer` může být `null`.

**Pro PM / PO:** Jde o nízkoprioritní, nedestruktivní rozšíření API. Relevantní je pouze v okamžiku, kdy klient plánuje segmentaci podle stáří účtu (nová akvizice, věrnostní program, ochrana proti zneužití slev) a tuto logiku implementuje přes Shopify Functions. Bez takového požadavku nemá tato novinka žádný dopad na běžící projekty.

## Použití v Integrátoru

Netýká se přímo naší integrace — Shopify Functions si klienti obvykle definují sami v Admin/CLI nebo přes vlastní vývoj. Relevantní je jen jako podklad, pokud se klient zeptá na možnost slevy/segmentace podle věku zákaznického účtu.
