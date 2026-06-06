---
date: 2026-06-04
title: "Ship + pickup v jedné objednávce (Plus/Enterprise feature preview)"
title_en: "Ship and pickup in one order now available in feature preview"
slug: ship-and-pickup-one-order-preview
zdroj: https://shopify.dev/changelog/ship-and-pickup-in-one-order-feature-preview
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: stredni
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Multi-fulfillment-method order = order s více fulfillment orders s různými delivery methods. Naše fulfillment + order sync flow musí ošetřit case kdy order má mix shipping + pickup."
dotcene_klienty: []
souvisejici: [local-pickup-checkout-redesign, pickup-in-store-b2b]

kontext:
  background: |
    FulfillmentOrder je objekt v Shopify Admin GraphQL API reprezentující skupinu položek z jedné objednávky, které mají být splněny z konkrétní lokace. Každý FulfillmentOrder nese pole `deliveryMethod`, jež specifikuje způsob doručení — buď `SHIPPING` (zásilkové doručení) nebo `PICK_UP` (vyzvednutí v prodejně). Jedna objednávka může obsahovat více fulfillment orders přiřazených různým lokacím a metodám; tyto jsou dostupné přes `Order.fulfillmentOrders` connection.

    Shopify historicky umožňoval v jednom checkoutu pouze jednu doručovací metodu pro celou objednávku. Local pickup byl přidán jako alternativa k zásilce, avšak zákazník si musel vybrat jednu globální metodu. Pro omnichannel merchanty s fyzickými prodejnami i e-shopem to znamenalo nutnost separátních objednávek. Feature preview pro Plus a Enterprise merchanty tuto bariéru odstraňuje a zavádí koncept delivery groups — každá skupina položek v checkoutu může mít vlastní delivery method.

    Tato změna navazuje na sérii pickup vylepšení: redesign pickup UX v checkoutu (duben 2026), podpora local pickup pro B2B zákazníky (Winter 2026) a automatické inventory transfery z více lokací pro pickup objednávky (březen 2026). Technický základ — multi-fulfillment-order architektura — existoval v Shopify již dříve pro multi-location shipping; nyní se rozšiřuje o míchání delivery methods v rámci jediné objednávky.

    Aplikace pracující s fulfillment flow, checkout extensions nebo ERP exportéry musí explicitně zpracovat scénář, kdy order obsahuje mix shipping a pickup fulfillment orders. Changelog upozorňuje, že stávající logika předpokládající jedinou delivery method může způsobit chyby v kalkulacích, nesprávný routing nebo chybné zákaznické notifikace.
  zdroje:
    - title: "Ship and pickup in one order — feature preview"
      url: "https://shopify.dev/changelog/ship-and-pickup-in-one-order-feature-preview"
    - title: "FulfillmentOrder — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder"
    - title: "Redesign local pickup UX v checkoutu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-pickup-checkout-redesign/"
    - title: "Pickup in Store pro B2B zákazníky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pickup-in-store-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "**Action Required pro Plus/Enterprise.** Single checkout = customer si vybere ship nebo pickup **per položku**. Order obsahuje multiple fulfillment orders s různými delivery methods — apps musí ošetřit. _Původně publikováno 6. 5. 2026 (audit doplnění)._"
tagy: [checkout, fulfillment, pickup, plus, enterprise, feature-preview]
---

## Co se mění
**Plus / Enterprise** merchanti mohou aktivovat **mixed fulfillment** v jednom checkoutu — zákazník si u každé položky vybere:
- **Shipping** (klasické doručení)
- **Pickup** (vyzvednutí v prodejně)

Důsledek: objednávka obsahuje **multiple fulfillment orders** s různými delivery methods. Aplikace pracující s fulfillment orders, line items nebo checkout extensions **musí toto reflektovat** — jinak hrozí broken UX nebo nesprávná data.

## Dopad pro nás
**Pro vývojáře:**
Naše `getFulfillmentOrderByOrderId`, `getOrdersFulfillmentOrdersWithLineItemsByOrderIds` queries vrátí více fulfillment orders per order — sync flow do WMS/ERP musí to ošetřit (typicky: split per delivery method, nebo merge s flag).

Konkrétně: checkout extensions, custom apps reading line item shipping context, ERP exporters — všechno potenciálně postižené.

**Pro PM / PO:**
Pro Plus klienty s mixed retail + e-com je to **velký feature**. Pro klienta s WMS integrací znamená rework — naplánovat do roadmapy.

## Použití v Integrátoru
**Možná** — záleží na klientovi. Pokud má retail + ship + WMS, je třeba audit naší fulfillment sync logiky.

## Rizika a edge cases
- Apps neaktualizované na multi-fulfillment-order pattern budou silently chybovat
- ERP/WMS exporters mohou míchat pickup orders se shipping (špatné routing)
- Customer-facing emails: nutné updatu šablon pro mixed-delivery confirmation
