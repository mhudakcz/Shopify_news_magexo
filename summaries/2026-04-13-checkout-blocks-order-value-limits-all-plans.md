---
date: 2026-04-13
title: "Checkout Blocks: Order value limits dostupné na všech plánech"
title_en: "Checkout Blocks: Order value limits available on all plans"
slug: checkout-blocks-order-value-limits-all-plans
zdroj: https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Checkout Blocks je oficiální Shopify aplikace pro úpravu checkout. Neimplementujeme custom checkout extensions."
kontext:
  background: |
    Checkout Blocks je oficiální aplikace Shopify, která obchodníkům umožňuje upravovat checkout prostřednictvím vizuálního editoru bez nutnosti psát kód. Jednou z funkcí této aplikace jsou tzv. order value limits — nastavení minimální nebo maximální hodnoty subtotálu objednávky. Pokud zákazník nesplní podmínku (například objednávka pod stanovenou hranicí), checkout mu neumožní pokračovat k platbě.

    Historicky byly pokročilé funkce Shopify checkoutu — včetně order value limits — dostupné výhradně na plánu Shopify Plus. Tento model byl odůvodněn tím, že Plus obchodníci mají přístup k extensible checkoutu a mohou využívat checkout extensions a aplikace jako Checkout Blocks. V roce 2025 a 2026 Shopify postupně demokratizuje přístup k vybraným Plus funkcím i pro nižší plány, přičemž cílem je snížit bariéru vstupu pro rostoucí obchodníky.

    Rozšíření order value limits na plány Basic, Grow a Advanced umožňuje menším obchodníkům nastavovat minimální hodnotu objednávky (typicky pro pokrytí dopravy nebo pro B2B podmínky) nebo maximální limit (pro řízení kapacity skladu, zásobování). Tato změna navazuje na předchozí rozšíření B2B funkcí na vybrané non-Plus plány a vizuální aktualizaci Checkout Blocks aplikace z března 2026.
  zdroje:
    - title: "Checkout Blocks: Order value limits available on all plans – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans"
    - title: "Visual updates v Checkout Blocks app"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/visual-updates-checkout-blocks/"
    - title: "Redesign local pickup UX v checkoutu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-pickup-checkout-redesign/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Order value limits v Checkout Blocks (minimální/maximální subtotal) jsou nově na Basic, Grow, Advanced i Plus plánech — předtím jen Plus."
tagy: [checkout, plan-democratization, order-limits]
---

## Co se mění
**Checkout Blocks** (oficiální Shopify Plus aplikace pro modifikace checkoutu) nabízí **order value limits** (minimální/maximální subtotal) na **všech plánech** — Basic, Grow, Advanced i Plus. Předtím Plus-only.

## Použití v Integrátoru
**Nepoužíváme** — Checkout Blocks je merchant-installed app. Pokud by klient narážel na minimum order value flow, je to standardní Shopify nástroj.
