---
date: 2026-10-01
title: "Tax webhook payloady a calculation requests používají Global IDs (breaking)"
title_en: "Tax webhook summary and calculation requests now use Global IDs"
slug: tax-webhook-global-ids
zdroj: https://shopify.dev/changelog/posts/tax-webhook-summary-and-calculation-requests-now-use-global-ids
shrnuto_dne: 2026-10-02
kategorie: [breaking-change]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta zpracováváme tax calculation requests nebo tax summary webhooky (vlastní tax app, napojení na externí daňový engine), musí parsing ID počítat s formátem gid://shopify/... od API verze 2027-01."
dotcene_klienty: []
souvisejici: [inventory-transfer-webhooks-origin-destination, automaticdiscounts-query-removed-2027-01, us-tax-calculation-fulfillment-location-routing]
tldr: "Od API verze 2027-01 používají tax calculation requests a tax summary webhooky místo integer ID Global IDs (gid://shopify/...) - tax apps musí upravit parsing a práci s ID."
tagy: [admin-graphql-api, tax, webhooks, global-ids, breaking, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify při komunikaci s tax aplikacemi posílá dva typy dat. Prvním jsou tax calculation requests, tedy požadavky na výpočet daně, které Shopify odesílá partnerské tax aplikaci při práci s košíkem, checkoutem nebo objednávkou. Druhým jsou tax summary webhooky, které po vzniku daňového záznamu informují aplikaci o výsledném souhrnu daně. V obou případech payload obsahuje identifikátory řady entit (zákazník, produkt, varianta, řádek objednávky, daňový řádek a další).

    Dosud tyto payloady používaly historické numerické ID, někdy jako číslo (například u TaxLine) a jinde jako řetězec s číslicemi (například u Customer nebo Product). Zbytek Admin GraphQL API přitom už dávno pracuje s Global IDs ve formátu gid://shopify/Typ/číslo. Tax payloady byly tedy jedním z míst, kde se ID chovala jinak než jinde, a integrace musela mezi formáty ručně převádět.

    Shopify to nyní sjednocuje: od API verze 2027-01 všechny entity v tax calculation requests a v payloadech tax summary webhooků používají Global IDs. Změna se týká entit Customer, Company, CompanyLocation, Product, ProductVariant, Order, LineItem, Sale, SalesAgreement, ShippingLine a TaxLine. Je označena jako breaking, protože kód, který očekává integer nebo číselný řetězec, po přechodu na novou verzi přestane ID správně rozpoznávat. Prakticky jde o standardizaci a odstranění nutnosti konverzí mezi REST-style a GraphQL-style identifikátory.
  zdroje:
    - title: "Shopify: Tax webhook summary and calculation requests now use Global IDs"
      url: "https://shopify.dev/changelog/posts/tax-webhook-summary-and-calculation-requests-now-use-global-ids"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Od API verze **2027-01** se v **tax calculation requests** a v payloadech **tax summary webhooků** přechází u všech entitních identifikátorů z integer (nebo číselného řetězce) na **Global ID (GID)** ve formátu `gid://shopify/<Typ>/<číslo>`. Dotčené entity jsou Customer, Company, CompanyLocation, Product, ProductVariant, Order, LineItem, Sale, SalesAgreement, ShippingLine a TaxLine.

Příklady transformace z changelogu:

- Customer: `"593934299"` se mění na `"gid://shopify/Customer/593934299"`
- Product: `"1"` se mění na `"gid://shopify/Product/1"`
- LineItem: `"76"` se mění na `"gid://shopify/LineItem/76"`
- TaxLine: `6` (číslo) se mění na `"gid://shopify/TaxLine/6"` (řetězec)

Pozor na změnu **datového typu**: část ID byla dosud číslo a nově je to vždy řetězec. Týká se to JSON schémat, typových definic i sloupců v databázi, kam se ID ukládají.

Webhook payload navíc získává tři nová top-level pole:

- `admin_graphql_api_id` (GID samotného TaxSummary)
- `shop_admin_graphql_api_id`
- `order_admin_graphql_api_id`

Původní integer pole `shop_id` a `order_id` zůstávají beze změny, takže na úrovni těchto dvou polí je přechod pozvolný.

## Časová osa

- **2026-10-01** — publikace changelogu, označeno jako breaking change s nutnou akcí
- **API verze 2027-01** — payloady tax calculation requests a tax summary webhooků používají Global IDs (stabilní verze podle čtvrtletního cyklu API verzí; přesné datum nasazení ověřit v dokumentaci)
- Poznámka: stránka changelogu uvádí i další údaj o datu účinnosti, který neodpovídá datu publikace a verzi 2027-01, proto za rozhodující bereme nástup API verze 2027-01. Chování starších verzí se podle znění změny nemá měnit, ale doporučujeme to ověřit při testu.

## Dopad pro nás

**Pro vývojáře:** Pokud pro klienta provozujeme nebo udržujeme tax aplikaci (nebo napojení na externí daňový engine či účetní systém), je potřeba před přechodem na API 2027-01 upravit tyto věci:

- **Parsing ID:** odstranit předpoklad, že ID je číslo nebo číselný řetězec. Číselnou část z GID vytáhnout explicitně (poslední segment za lomítkem), pokud ji legacy systém potřebuje.
- **ID conversion logika:** kód, který dosud převáděl integer na GID pro volání Admin GraphQL API, může zjednodušit, protože GID dostane rovnou v payloadu. Pozor ale na zpětnou konverzi tam, kde se výsledky párují s daty uloženými ve starém formátu.
- **Typy a validace:** upravit JSON schémata, DTO, validační pravidla a typy databázových sloupců (integer vs. string), včetně TaxLine, kde se mění číslo na řetězec.
- **Mapování a cache:** zkontrolovat klíče v cache, mapovací tabulky a idempotency klíče postavené na ID. Po změně formátu se přestanou shodovat se starými záznamy.
- **Verze subscription:** webhook subscription a calculation endpoint testovat zvlášť pro starou a novou API verzi, aby šel přechod provést řízeně. Doporučený postup je otestovat na development store s verzí 2027-01 dříve, než se verze přepne v produkci.
- Využít nová pole `admin_graphql_api_id`, `shop_admin_graphql_api_id` a `order_admin_graphql_api_id` tam, kde dosud docházelo ke skládání GID ručně z `shop_id` a `order_id`.

**Pro PM / PO:** Jde o technickou změnu bez viditelného dopadu pro koncové zákazníky, ale se **střední naléhavostí**, protože při přechodu na 2027-01 hrozí chybný výpočet nebo odmítnutí tax requestu, pokud tax app ID neparsuje správně. Chybu by merchant poznal až podle špatně spočtené daně v checkoutu. Doporučujeme:

- zjistit, kteří klienti používají tax aplikaci nebo vlastní daňovou integraci (Shopify Tax samotná je Shopify interní věc a tuto práci obvykle neřeší),
- zařadit úpravu do plánování přechodu na API 2027-01 společně s dalšími breaking změnami této verze,
- počítat s testováním na dev store a s regresním testem tax výpočtů pro klíčové scénáře (B2B objednávky, více sazeb, doprava).

## Použití v Integrátoru

Přímo to dopadá jen tam, kde pro klienta zpracováváme tax calculation requests nebo tax summary webhooky, například u vlastní tax aplikace nebo napojení na externí daňový engine. Tam je potřeba před přechodem na API 2027-01 upravit parsing ID a typy polí; u klientů bez vlastní tax integrace není nutná žádná akce.
