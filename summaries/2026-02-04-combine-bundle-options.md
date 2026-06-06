---
date: 2026-02-04
title: "Combine Bundle Options v Shopify Bundles app"
title_en: "Combine Bundle Options"
slug: combine-bundle-options
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Bundles je oficiální Shopify aplikace. Naše integrace bundles direct neimplementují, čteme produkty/varianty přes standardní queries."
dotcene_klienty: []

kontext:
  background: |
    Produktové options jsou atributy produktu (např. velikost, barva, délka, materiál), jejichž kombinace tvoří konkrétní varianty. V klasickém Shopify modelu každý produkt může mít až tři options a jejich průnikem vznikají varianty — zákazník tedy volí každý atribut zvlášť. Bundle je balíček, který sdružuje více produktů nebo variant do jednoho celku prodávaného jako jedna položka.

    Shopify Bundles je oficiální aplikace od Shopify dostupná zdarma v App Store, která umožňuje obchodníkům vytvářet balíčky bez nutnosti vývoje na míru. Historicky byly bundles doménou třetích stran; Shopify začal tuto oblast řešit nativně s cílem poskytnout konzistentní zážitek ve výpisu, košíku i při fulfillmentu. Aplikace rozšiřuje standardní produktový a variantní model a výsledné bundles jsou v Admin API viditelné jako běžné produkty.

    Možnost kombinovat více options v jednom bundlu přináší obchodníkům větší flexibilitu při tvorbě produktových sad — zákazník může v rámci jednoho nákupu zvolit například velikost i délku téhož produktu jako součást balíčku. To zjednodušuje merchandising pro kategorie jako textil, vlasová kosmetika nebo sportovní vybavení, kde produkt má přirozeně více dimenzí volby.

    Tato změna navazuje na další rozšíření bundlového ekosystému Shopify — zobrazení komponent bundlů v draft orders přes Customer Account API i zvýšení limitu variant na 2048, které dohromady umožňují práci s komplexnějšími produktovými maticemi.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Shopify Bundles — dokumentace pro vývojáře"
      url: "https://shopify.dev/docs/apps/selling-strategies/bundles"
    - title: "Product bundles a komponenty na draft order status v Customer Accounts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/product-bundles-draft-order-customer-account/"
    - title: "Limit variant per produkt zvýšen z 100 na 2048"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/2048-variants-per-product/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shopify Bundles app umí kombinovat options (např. velikost + délka) v jednom bundlu."
tagy: [bundle, product, variant, app]
---

## Co se mění
**Shopify Bundles app** podporuje kombinaci více **product options** v rámci jednoho bundlu — např. produkt s variantami velikost × délka × barva, kde bundle vybírá kombinaci jako celek.

## Použití v Integrátoru
**Nepoužíváme** přímo — Bundles je merchant-installed app. Naše product queries vrátí bundle jako standardní produkt s variants. Pokud klient bundle aktivně používá, čtení dat zůstává stejné.
