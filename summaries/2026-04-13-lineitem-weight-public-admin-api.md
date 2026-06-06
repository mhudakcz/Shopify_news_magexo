---
date: 2026-04-13
title: "LineItem.weight pole veřejně dostupné v Admin API od 2026-07"
title_en: "LineItem.weight field now available in public Admin API"
slug: lineitem-weight-public-admin-api
zdroj: https://shopify.dev/changelog/lineitem-weight-field-now-available-in-public-admin-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 23+ order methods včetně getOrder, getAllOrders, getLineItemsByOrderId. Nové weight pole na LineItem lze přidat do queries pro shipping/logistic flow."
dotcene_klienty: []
souvisejici: [draftorderlineitem-grams-removed]

kontext:
  background: |
    Typ `LineItem` v Shopify GraphQL Admin API reprezentuje jednu položku v objednávce — konkrétní produkt (variantu) v daném množství, spolu s cenou, slevami a atributy. Každá objednávka se skládá z kolekce těchto položek. Pole `weight` vrací objekt `Weight` obsahující číselnou hodnotu (`value`) a jednotku (`unit`), přičemž jsou podporovány čtyři jednotky: `GRAMS`, `KILOGRAMS`, `POUNDS` a `OUNCES`.

    Historicky byla hmotnost v Shopify API dostupná pouze jako skalární pole `grams` (celé číslo v gramech), a to jak v REST API, tak v původních GraphQL typech. Tento přístup byl nevhodný pro mezinárodní obchody — přepočty mezi metrickými a imperiálními jednotkami museli zajišťovat vývojáři sami v aplikační vrstvě. Shopify proto zavedlo strukturovaný typ `Weight` s explicitní jednotkou, čímž sjednotilo práci s hmotností napříč API.

    V praxi je pole `weight` na `LineItem` klíčové pro výpočty dopravného, picking a packing procesy ve skladu nebo exporty do ERP systémů. Přechod na `weight { value unit }` z `grams` je součástí širšího trendu — deprecace plochých skalárních polí ve prospěch strukturovaných objektů. Souběžně Shopify ve verzi 2026-07 odstraňuje pole `grams` z typu `DraftOrderLineItem`, což signalizuje postupnou konvergenci celého API na jednotný `Weight` objekt.

    Tento krok navazuje na celkové rozšiřování informací dostupných na `LineItem` v API 2026-07 — ve stejné verzi přibývá i pole `priceAfterAllDiscountsBeforeTaxesSet`, které zjednodušuje export finančních dat do účetních systémů.
  zdroje:
    - title: "Shopify Changelog: LineItem.weight field now available in public Admin API"
      url: "https://shopify.dev/changelog/lineitem-weight-field-now-available-in-public-admin-api"
    - title: "Shopify Admin GraphQL API: WeightUnit enum"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit"
    - title: "DraftOrderLineItem.grams odstraněno v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/draftorderlineitem-grams-removed/"
    - title: "LineItem.priceAfterAllDiscountsBeforeTaxesSet v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/lineitem-price-after-discounts-before-taxes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6

tldr: "Od API 2026-07 LineItem v Admin API obsahuje pole weight (s value + unit) místo jen grams."
tagy: [order, line-item, weight, shipping]
---

## Co se mění
Od API verze **2026-07** je na typu `LineItem` v Admin GraphQL API veřejně dostupné pole `weight`, které vrací **value + unit** (např. `{ value: 1.5, unit: KILOGRAMS }`) místo původního scalar pole `grams`. Použití `weight` je flexibilnější (podporuje různé jednotky a přesnost).

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, pole `weight` veřejně přístupné

## Dopad pro nás
**Pro vývojáře:**
Pokud čteme váhu line itemů pro shipping/logistic kalkulace, doporučuji přejít z `grams` na `weight { value, unit }`. Pole `grams` může být v budoucích verzích deprecated (na DraftOrderLineItem už je odstraněno v 2026-07 — viz souvisejicí).

**Pro PM / PO:**
Bez přímého dopadu pro koncového klienta, ale ulehčuje práci s objednávkami v různých jednotkách (lb, oz, g, kg). Vhodné pro mezinárodní/B2B klienty.

## Použití v Integrátoru
**Ano** — máme 23+ order methods (`getOrder`, `getAllOrders`, `getLineItemsByOrderId`, `getOrdersWithoutTag` atd.). Nové pole `weight` lze přidat do queries pro shipping/fulfilment flow. Žádný breaking change na našich existujících queries.

## Související
- [DraftOrderLineItem.grams odstraněno v 2026-07](../zmena/2026-04-11-draftorderlineitem-grams-removed/)
