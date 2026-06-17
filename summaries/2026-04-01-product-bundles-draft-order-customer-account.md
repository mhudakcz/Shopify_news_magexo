---
date: 2026-04-01
title: "Product bundles a komponenty na draft order status v Customer Accounts"
title_en: "Product bundles and their components now represented on draft order status page in customer accounts"
slug: product-bundles-draft-order-customer-account
zdroj: https://changelog.shopify.com/posts/product-bundles-and-their-components-now-represented-on-draft-order-status-page-in-customer-accounts
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme draft order methods. Customer Account API je separate, ale customer-facing reprezentace bundlů koresponduje s components polem na DraftOrderLineItem."
kontext:
  background: |
    Product bundle je merchandisingová technika, při které se více produktů nebo variant prodává jako jedna jednotka. V Shopify existují dva základní typy: pevné bundles (fixed bundles, včetně multipack) a přizpůsobitelné bundles (customized bundles s mix-and-match výběrem). Systém pracuje s konceptem nadřazené položky bundle a jejích podřízených komponent — každá order line vrací komponenty spolu s odkazem na rodičovský bundle.

    Shopify historicky ponechal bundles na třetích stranách; nativní podpora se rozvinula prostřednictvím oficiální Shopify Bundles aplikace, dostupné zdarma v App Store. Paralelně s tím Shopify postupně rozšiřoval API vrstvu — Customer Account API verze 2026-04 přidalo pole `components` na typ `DraftOrderLineItem` a argument `flattenComponents`, který umožňuje rozbalit bundle do plochého seznamu položek.

    Draft order v kontextu Shopify Customer Accounts slouží jako citace nebo nabídka (quotation) viditelná přihlášenému zákazníkovi, typicky využívaná v B2B nebo Plus scénářích. Zobrazení komponent bundlů na status stránce draft orderu tak zákazníkovi poskytne přehled o přesném složení objednávky bez nutnosti kontaktovat obchodníka.

    Tato vizuální změna je přímým odrazem API rozšíření — UI a API jsou koordinovaně zarovnány, aby obě vrstvy konzistentně reprezentovaly strukturu bundlů. Navazuje i na rozšíření kombinování options v Shopify Bundles app (Editions Winter 2026).
  zdroje:
    - title: "Shopify Changelog: Product bundles and their components now represented on draft order status page"
      url: "https://changelog.shopify.com/posts/product-bundles-and-their-components-now-represented-on-draft-order-status-page-in-customer-accounts"
    - title: "Shopify Dev — Building with bundles"
      url: "https://shopify.dev/docs/apps/selling-strategies/bundles"
    - title: "Line item components na draft orders v Customer Account API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/line-item-components-draft-orders-customer-account/"
    - title: "Combine Bundle Options v Shopify Bundles app"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/combine-bundle-options/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Draft order status v Customer Accounts (logged-in zákazník) zobrazí bundles a jejich komponenty pro lepší přehlednost — aligned s API změnou (line item components na draft orders)."
tagy: [customer-account, draft-order, bundle, components]
souvisejici: [line-item-components-draft-orders-customer-account]
---

## Co se mění
**Draft order status page** v Customer Accounts (logged-in zákazník vidí svoje quotation/draft orders) nově zobrazí **bundles a jejich komponenty** přehledně rozepsané. Customer vidí, co konkrétně bundle obsahuje.

Souvisí s [Line item components na draft orders v Customer Account API](../zmena/line-item-components-draft-orders-customer-account/) z dev changelogu.

## Použití v Integrátoru
**Možná** — naše Admin draft order methods (`getDraftOrderDetail`) už dnes pracují s components. Customer Account API je separate čtecí vrstva, kterou aktivně neimplementujeme.
