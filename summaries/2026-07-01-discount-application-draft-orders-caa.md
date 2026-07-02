---
date: 2026-07-01
title: "Discount application info pro draft orders v Customer Account API 2026-07"
title_en: "Discount application information now available for draft orders on Customer Account API"
slug: discount-application-draft-orders-caa
zdroj: https://shopify.dev/changelog/discount-application-information-now-available-for-draft-orders-on-the-customer-account-api
shrnuto_dne: 2026-07-02
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s draft orders při B2B objednávkách; nová pole umožňují přesnější zobrazení a reporting slev na úrovni řádků."
dotcene_klienty: []
souvisejici:
  - "draft-order-custom-discount-presentment-currency"
  - "draftorder-discount-warning-pricerule-removed"
  - "metafields-definition-required-customer-account-api"
tldr: "Customer Account API 2026-07 přidává do draft orders pole discountApplications a discountAllocations pro přesné dotazování na slevy a jejich rozložení po řádcích."
tagy: [draft-order, discount, customer-account-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Customer Account API je GraphQL rozhraní určené pro zákaznické aplikace a portály — umožňuje přihlášeným zákazníkům přistupovat k vlastním datům, jako jsou objednávky, platební metody nebo rozpracované objednávky (draft orders). Draft orders v B2B kontextu slouží typicky jako nabídky nebo předobjednávky, kde obchodní zástupce nebo automatizace sestaví košík se slevami ještě před finálním potvrzením zákazníkem.

    Do verze 2026-07 nebylo možné přes Customer Account API zjistit, jaké slevy jsou na draft order aplikovány ani jak jsou rozloženy na jednotlivé položky. Developer musel buď použít Admin API (které vyžaduje jiné oprávnění a není vhodné pro zákaznický frontend), nebo si tato data uchovávat mimo Shopify.

    Od verze 2026-07 jsou na objektu `DraftOrder` dostupná dvě nová pole: `discountApplications` (seznam slev aplikovaných na celou objednávku jako `DiscountApplicationConnection`) a na `DraftOrderLineItem` pole `discountAllocations` (jak jsou slevy rozděleny na konkrétní řádek). Oba typy podporují rozlišení `DiscountCodeApplication` a `ManualDiscountApplication`, včetně hodnoty slevy jako pevné částky (`MoneyV2`) nebo procenta (`PricingPercentageValue`).

    Praktický dopad je přímočarý: zákaznické portály a B2B aplikace mohou nyní zobrazovat přesné informace o slevách přímo z Customer Account API bez nutnosti přístupu k Admin API. To zjednodušuje architekturu headless storefront řešení a zlepšuje transparentnost pro zákazníka při prohlížení nabídky před jejím přijetím.

  zdroje:
    - title: "Shopify: Discount application information now available for draft orders on Customer Account API"
      url: "https://shopify.dev/changelog/discount-application-information-now-available-for-draft-orders-on-the-customer-account-api"
    - title: "Shopify Docs: DraftOrder – Customer Account API 2026-07"
      url: "https://shopify.dev/docs/api/customer/2026-07/objects/DraftOrder"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od verze **Customer Account API 2026-07** jsou k dispozici dvě nová pole pro přístup k informacím o slevách v rámci draft orders:

**Na objektu `DraftOrder`:**
- `discountApplications` — stránkovaná kolekce (`DiscountApplicationConnection`) všech slev aplikovaných na draft order. Každá položka odhaluje typ slevy (`DiscountCodeApplication` nebo `ManualDiscountApplication`), discount kód nebo název, metodu alokace, cílový výběr a hodnotu slevy (pevná částka nebo procento).

**Na objektu `DraftOrderLineItem`:**
- `discountAllocations` — pole obsahující rozložení slev na konkrétní řádek objednávky, včetně alokované částky (`allocatedAmountSet`).

Nová pole umožňují přesné dotazování na strukturu slev bez přístupu k Admin API:

```graphql
{
  customer {
    draftOrders(first: 1) {
      nodes {
        discountApplications(first: 10) {
          nodes {
            ... on DiscountCodeApplication {
              code
              value { ... on MoneyV2 { amount currencyCode } }
            }
          }
        }
        lineItems(first: 10) {
          nodes {
            discountAllocations {
              allocatedAmountSet { shopMoney { amount currencyCode } }
            }
          }
        }
      }
    }
  }
}
```

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | Dostupné v Customer Account API verze 2026-07 |

Změna je aditivní (pouze nová pole), nejsou potřeba žádné migrační kroky. Stávající queries zůstávají funkční.

## Dopad pro nás

Změna je **nízké naléhavosti** — nejde o breaking change ani o deprecation. Nová pole rozšiřují možnosti Customer Account API, ale nevyžadují okamžitou akci.

Pro projekty, které zobrazují zákazníkům draft orders v zákaznickém portálu (typicky B2B nebo nabídkové workflow), je toto užitečné rozšíření: umožňuje zobrazit slevy přehledně přímo v zákaznickém rozhraní bez nutnosti backchannel volání Admin API.

Pokud zákaznický portál v projektu draft orders nezobrazuje, tato změna nemá žádný dopad.

## Použití v Integrátoru

Integrátor pracuje s draft orders v B2B kontextu — nová pole `discountApplications` a `discountAllocations` mohou být využita při:

- **Zobrazování nabídek zákazníkovi** — přesný breakdown slev na zákaznickém portálu.
- **Reportingu a validaci** — ověření, že správné slevy jsou aplikovány před konverzí draft order na finální objednávku.
- **Zákaznickém self-service** — zákazník vidí v portálu totéž co obchodní zástupce, bez potřeby Admin API přístupu.

Doporučení: zvážit rozšíření draft order query v zákaznickém portálu o tato nová pole při příštím relevantu update.
