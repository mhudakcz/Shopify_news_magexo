---
date: 2026-04-01
title: "Polaris reference docs — jen poslední 4 stable verze"
title_en: "Removing outdated Polaris reference docs"
slug: removing-outdated-polaris-docs
zdroj: https://shopify.dev/changelog/removing-outdated-polaris-reference-docs
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Polaris je React UI knihovna pro embedded apps. Neděláme embedded apps."
dotcene_klienty: []

kontext:
  background: |
    Polaris je oficiální designový systém a sada React komponent od Shopify, určená primárně pro vývoj embedded aplikací v Shopify Adminu. Zahrnuje hotové UI komponenty, design tokeny, ikony a průvodce přístupností, které vývojářům umožňují vytvářet aplikace vizuálně sladěné s prostředím Shopify Adminu.

    Shopify vydává nové stabilní verze svého API i UI ekosystému čtvrtletně (model datových verzí jako 2025-01, 2025-04 apod.). Stejný přístup, který platí pro GraphQL Admin API s 12měsíčním oknem podpory, byl nyní rozšířen i na referenční dokumentaci Polaris pro UI extensions. Motivací je udržet dokumentaci aktuální a snížit údržbovou zátěž spojenou se stovkami zastaralých stránek — starší verze dál fungují, ale nemají vlastní docs na Shopify.dev.

    Pro vývojáře, kteří spravují Checkout, Customer Account nebo Admin UI extensions, to znamená povinnost sledovat versioning cyklus a upgradovat extensions nejpozději jednou ročně. Shopify CLI již delší dobu blokuje deploy extensions cílených na API verze starší než 12 měsíců, takže tato změna dokumentaci uvádí do souladu s existujícím chováním nástrojů.

    Souběžně Shopify publikuje migration guides pro přechod na Polaris web components v Checkout a Customer Account UI extensions, což vývojářům usnadňuje přechod na aktuální API verzi a moderní komponentový model.
  zdroje:
    - title: "Shopify Changelog: Removing outdated Polaris reference docs"
      url: "https://shopify.dev/changelog/removing-outdated-polaris-reference-docs"
    - title: "Polaris web components migration guides"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-web-components-migration-guides/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Polaris reference docs publikovány jen pro poslední 4 stable verze (12-month support policy)."
tagy: [polaris, docs, ui]
editions_release: spring-2026
---

## Co se mění
Shopify zavádí na Polaris UI library **12-měsíční support policy** — reference docs publikovány pouze pro poslední 4 stable verze, starší jsou archivovány.

## Použití v Integrátoru
**Nepoužíváme** — Polaris je React UI knihovna pro embedded apps v Shopify Adminu. Neděláme embedded apps.
