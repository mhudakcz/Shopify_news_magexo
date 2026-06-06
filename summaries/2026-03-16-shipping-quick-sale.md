---
date: 2026-03-16
title: "Shipping v quick sale carts"
title_en: "Shipping in quick sale"
slug: shipping-quick-sale
zdroj: https://changelog.shopify.com/posts/shipping-in-quick-sale
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Quick sale flow."
kontext:
  background: |
    Quick Sale je funkce Shopify mobilní aplikace umožňující merchantům vytvořit rychlý prodej bez plnohodnotného e-shopu. Merchant sestaví košík, sdílí platební odkaz nebo zákazník zaplatí přímo — typicky při in-person prodeji, odpovědi na DM nebo předprodeji před spuštěním obchodu.

    Historicky Quick Sale podporoval pouze platby bez dopravy, tedy scénáře jako platba na místě nebo vyzvednutí zboží. Přidání shipping rozšiřuje použitelnost na zásilkový prodej — merchanté tak mohou Quick Sale využít i pro vzdálené zákazníky, kteří potřebují zboží doručit na adresu.

    Prakticky to znamená, že zákazník při placení zadá doručovací adresu, objednávka se ihned zobrazí v záložce Orders a je připravena k expedici jako každá běžná objednávka. Quick Sale se tak přibližuje funkcionalitě Draft Orders, avšak s důrazem na jednoduchost a mobilní prostředí.

    Šíření Quick Sale souvisí s trendem Shopify zpřístupňovat prodej i mimo standardní e-shop — souběžně byla funkce rozšířena na globální dostupnost a plánuje se další rozšíření platebních metod včetně Tap to Pay.
  zdroje:
    - title: "Shipping in Quick Sale – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/shipping-in-quick-sale"
    - title: "Quick sale je nyní dostupný v každé zemi"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/quick-sale-every-country/"
    - title: "Shipping a delivery settings: čitelnější UI"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shipping-delivery-settings-redesign/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Quick sale carty podporují shipping s customer-entered delivery adresou a payment u checkout — orders připraveny k odeslání z Orders tabu."
tagy: [quick-sale, shipping, mobile]
souvisejici: [quick-sale-every-country]
---

## Co se mění
**Quick sale** (rychlý prodej v mobile appce) podporuje **shipping**: customer zadá delivery adresu, zaplatí v checkoutu, order připraven k odeslání z Orders tabu.

## Použití v Integrátoru
**Nepoužíváme** — mobile sales feature.
