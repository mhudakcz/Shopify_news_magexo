---
date: 2026-03-16
title: "Customizace checkoutu a customer accounts per Market"
title_en: "Customize checkout and customer accounts by market"
slug: customize-checkout-accounts-by-market
zdroj: https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Checkout/account branding feature, ne API."
kontext:
  background: |
    Shopify Markets je systém pro správu mezinárodní expanze, který obchodníkovi umožňuje rozdělit zákazníky do geografických segmentů — každý trh může mít vlastní jazyk, měnu, ceny i dostupný katalog. Jeden obchod tak obsluhuje více regionů bez nutnosti zakládat oddělené instance. Trh je v Shopify definován jako skupina jedné nebo více zemí; obchodník může spravovat až 50 trhů vedle primárního.

    Checkout a customer accounts jsou kritické body zákaznické cesty, kde lokalizace přímo ovlivňuje konverzní poměr. Dříve bylo přizpůsobení checkoutu globální — jakákoliv změna brandingu nebo nastavení se projevila ve všech zemích současně. Shopify postupně rozšiřuje granularitu konfigurace: nejprve per-market theme customizace (barvy, app embeds, CSS), nyní i checkout a customer accounts editor.

    Pro Advanced a Plus merchanti to znamená konkrétní možnosti: zobrazit jiné platební metody pro německý trh, odlišný branding pro B2B zákazníky, nebo specifické bloky určené jen pro vybrané regiony. Tato funkcionalita doplňuje Checkout And Accounts Configuration API (2026-04), které konsoliduje správu brandingu přes API rozhraní pro Plus plán.

    Trend ukazuje, že Shopify systematicky přidává per-market overrides do všech vrstev zákaznického zážitku — od theme přes checkout až po zákaznické účty — čímž snižuje potřebu oddělených multi-store architektur pro mezinárodní obchod.
  zdroje:
    - title: "Shopify Changelog: Customize checkout and customer accounts by market"
      url: "https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market"
    - title: "Shopify Dev: Markets overview"
      url: "https://shopify.dev/docs/apps/markets"
    - title: "Archiv: Theme customizace per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-themes-per-market/"
    - title: "Archiv: Unified branding napříč checkout a customer accounts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/unified-branding-checkout-customer-accounts/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Checkout a accounts editor umožňuje Advanced + Plus merchantům customizovat settings, branding a blocks **per market** — různá země = různý checkout experience."
tagy: [checkout, customer-account, markets, b2b]
---

## Co se mění
**Advanced a Plus** merchanti mohou customizovat checkout a customer accounts **per market** — različitá branding, settings, blocks per země. Vhodné pro internationalní expansion.

## Použití v Integrátoru
**Nepoužíváme** — branding/UI feature.
