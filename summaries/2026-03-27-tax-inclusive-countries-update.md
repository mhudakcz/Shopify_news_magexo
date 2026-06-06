---
date: 2026-03-27
title: "Updated list of tax-inclusive countries pro dynamic pricing"
title_en: "Updated list of tax inclusive countries when dynamic tax-inclusive pricing is used"
slug: tax-inclusive-countries-update
zdroj: https://changelog.shopify.com/posts/updated-list-of-tax-inclusive-countries-when-dynamic-tax-inclusive-pricing-is-used
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Markets/tax pricing config v Shopify Admin."
kontext:
  background: |
    Dynamic tax-inclusive pricing je funkce Shopify Markets, která automaticky přizpůsobuje zobrazené ceny zákazníkům podle jejich geografické polohy. Systém vypočítá cenu bez domácí daně a znovu ji ocení s místní daňovou sazbou tak, aby zákazník vždy viděl finální cenu — s daní zahrnutou nebo bez ní — podle zvyklostí dané země. Konfigurace probíhá výhradně v Shopify Adminu přes sekci Markets → Taxes and duties.

    Shopify Markets bylo představeno jako platforma pro mezinárodní expanzi, která sjednocuje správu měn, jazyků, cen a daní pod jedno rozhraní. Seznam zemí, kde je zobrazení cen s daní standardem (tax-inclusive), spravuje Shopify centrálně a průběžně jej rozšiřuje — tak aby obchodníci nemuseli ručně sledovat lokální daňové zvyklosti v každé zemi, do které prodávají.

    Prakticky tato změna znamená, že obchody prodávající do nově přidaných zemí (např. Argentina, Chile, Kolumbie, Mexiko, Jižní Korea, SAE) začnou zákazníkům zobrazovat ceny s místní daní zahrnutou automaticky — bez nutnosti konfigurace. Funkce se uplatní pouze při mezizemním prodeji; domácí ceny zůstávají nedotčeny. Úzce navazuje na ostatní Markets funkce, jako je cílení slev na konkrétní trhy nebo nastavení zákaznických daňových identifikátorů přes Admin API.
  zdroje:
    - title: "Updated list of tax inclusive countries when dynamic tax-inclusive pricing is used"
      url: "https://changelog.shopify.com/posts/updated-list-of-tax-inclusive-countries-when-dynamic-tax-inclusive-pricing-is-used"
    - title: "Dynamic tax-inclusive pricing — Shopify Help Center"
      url: "https://help.shopify.com/en/manual/international/pricing/dynamic-tax-inclusive-pricing"
    - title: "Cílení slev na konkrétní markets přes DiscountContextInput"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/target-discounts-specific-markets/"
    - title: "Customer.taxSettings dostupné v Admin API od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customer-tax-settings-admin-api/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Dynamic tax-inclusive pricing rozšířena o 17 dalších zemí, kde je tax-inclusive zobrazení standardem (Argentina, Chile, Kolumbie atd.)."
tagy: [tax, markets, pricing, international]
---

## Co se mění
**Dynamic tax-inclusive pricing** (zobrazení cen s daní zahrnutou pro tržiště, kde to je obvyklé) rozšířena o **17 dalších zemí**: Argentina, Chile, Kolumbie a další.

## Použití v Integrátoru
**Nepoužíváme** — Markets pricing config v Adminu.
