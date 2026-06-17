---
date: 2026-05-04
title: "Aplikace slev na položky přímo z refund page"
title_en: "Apply discounts to items on the refund page"
slug: apply-discounts-refund-page
zdroj: https://changelog.shopify.com/posts/apply-discounts-to-items-on-the-refund-page
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "UI feature v Adminu na refund page. Naše integrace nesahá na slevy během refundu."
kontext:
  background: |
    Refund page je součástí správy objednávek v Shopify Adminu a slouží k zahájení procesu vrácení peněz zákazníkovi. V Shopify GraphQL Admin API je vrácení reprezentováno objektem Refund, který eviduje vrácené položky, poplatky za dopravu, transakce i propojení na fyzický Return. Klíčové je, že samotný Refund objekt nezaručuje faktické odeslání peněz — stav transakce závisí na přidružených OrderTransaction objektech.

    Slevy v kontextu refundů slouží k úpravě základu, ze kterého se výše vrácené částky počítá. Pokud má položka jinou cenu než při nákupu (například byla dodatečně zlevněna), musí být tato sleva zohledněna při výpočtu daní i tržeb. Bez přímé editace na refund page musel merchant přecházet na stránku úpravy objednávky, změnit slevu tam a teprve poté se vrátit k refundu — postup náchylný k chybám.

    Tato změna zapadá do širšího trendu zpřesňování reportingu v Shopify: v roce 2026 Shopify přejmenoval „Sales returns" na „Sales reversals", aby lépe odlišil storna a slevy po nákupu od fyzických vrácenek. Správná aplikace slevy přímo při refundu zajišťuje, že sales i tax reporty reflektují skutečnou ekonomiku transakce a nezkreslují metriky obratu.
  zdroje:
    - title: "Shopify Changelog: Apply discounts to items on the refund page"
      url: "https://changelog.shopify.com/posts/apply-discounts-to-items-on-the-refund-page"
    - title: "Shopify GraphQL Admin API: Refund object"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund"
    - title: "Returns metrics přejmenovány na reversals"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/returns-metrics-renamed-reversals/"
    - title: "Více product discounts na jednu cart line"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-product-discounts-cart-line/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Merchant může nově přidat, upravit nebo odebrat slevu na položkách přímo na refund page bez navigace jinam — usnadňuje refund flow a zajišťuje přesné sales/tax reporty."
tagy: [refund, discount, admin-ui]
---

## Co se mění
Refund flow v Shopify Adminu nově umožňuje **přidat / změnit / odstranit slevu** přímo na refund page, bez nutnosti opouštět stránku. Cíl: přesnější tax a sales reporting při komplexních refundech.

## Použití v Integrátoru
**Nepoužíváme** — UI feature. Naše order/refund integrace volají standardní Admin API endpoints, tahle změna se nás přímo netýká.
