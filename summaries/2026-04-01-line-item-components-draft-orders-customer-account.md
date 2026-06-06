---
date: 2026-04-01
title: "Line item components na draft orders v Customer Account API"
title_en: "Line item component information now available for draft orders on the Customer Account API"
slug: line-item-components-draft-orders-customer-account
zdroj: https://shopify.dev/changelog/line-item-components-draft-orders-customer-account-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Customer Account API (frontend pro logged-in zákazníky). Máme draft order methods v Admin API, ale Customer Account API endpointy přímo nepoužíváme. Pokud klient buduje custom customer account UI, je to relevantní."
dotcene_klienty: []

kontext:
  background: |
    DraftOrderLineItem je GraphQL objekt reprezentující jednu položku v návrhu objednávky (draft order) v rámci Shopify Customer Account API. Toto API je čtecí vrstva určená přihlášeným zákazníkům, která jim umožňuje zobrazovat stav svých draft orders přímo v zákaznickém účtu — bez přímého přístupu do admin rozhraní.

    Bundles (balíčky produktů) jsou v Shopify reprezentovány hierarchicky: nadřazená položka sdružuje dílčí komponenty, přičemž každá komponenta je samostatný produkt nebo varianta. Historicky byly všechny komponenty bundlu vraceny jako samostatné top-level položky (`flattenComponents: true` jako výchozí chování), což komplikovalo zobrazení pro koncové zákazníky — nebylo jasné, které položky patří pod jeden bundle.

    Přidání pole `components` na `DraftOrderLineItem` a argumentu `flattenComponents` na dotazy od verze 2026-04 řeší toto omezení: frontend může nově zobrazit bundle jako jednu seskupenou položku s rozepsanými komponentami vnořeně. Argument `flattenComponents: true` zachovává zpětnou kompatibilitu pro starší implementace. Tato změna je přímým protějškem na UI vrstvě — draft order status stránka v Customer Accounts zobrazuje komponenty bundlů přehledně zákazníkovi.

    Praktický dopad je nejvýraznější v B2B a Plus segmentu, kde jsou draft orders využívány jako cenové nabídky (quotations). Zákazník tak vidí přesný rozpis toho, co bundle obsahuje, aniž by potřeboval kontaktovat obchodníka.
  zdroje:
    - title: "Shopify Changelog: Line item component information for draft orders on Customer Account API"
      url: "https://shopify.dev/changelog/line-item-components-draft-orders-customer-account-api"
    - title: "Shopify Docs: DraftOrderLineItem (Customer Account API)"
      url: "https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem"
    - title: "Shopify Changelog: Product bundles na draft order status v Customer Accounts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/product-bundles-draft-order-customer-account/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Customer Account API 2026-04 přidává components pole na DraftOrderLineItem a flattenComponents argument."
tagy: [customer-account, draft-order, line-item, components]
---

## Co se mění
Customer Account API verze **2026-04** přidává pole `components` na typ `DraftOrderLineItem` a argument `flattenComponents` na queries. Komponenty reprezentují sub-položky line itemu (typicky bundle s vícero produktů). `flattenComponents: true` rozbalí bundle do plochého seznamu.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud klient buduje vlastní customer account UI (myAccount stránka pro logged-in zákazníky) a zobrazuje tam draft orders s bundles, lze nově číst rozpad na komponenty.

**Pro PM / PO:**
Vhodné pro B2B/Plus klienty, kde Draft Orders fungují jako "quotation" — zákazník vidí v účtu detail jednotlivých komponent bundlu.

## Použití v Integrátoru
**Možná** — Admin API draft orders používáme aktivně (`getDraftOrderDetail`, `calculateDraftOrder` atd.). Customer Account API je oddělené API; pokud nějaký klient ho integruje, hodí se. Aktuálně nemáme přímé použití.
