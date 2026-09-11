---
date: 2026-09-10
title: "Discounts Allocator Function API — developer preview ukončeno (Action Required)"
title_en: "Discounts Allocator Function API developer preview has ended"
slug: discounts-allocator-function-api-preview-ended
zdroj: https://shopify.dev/changelog/discounts-allocator-function-api-developer-preview-has-ended
shrnuto_dne: 2026-09-11
kategorie: [deprecation, breaking-change]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme discount methods, ale purchase.discounts-allocator.run byl exkluzivně developer preview - nepravděpodobné, že ho nějaký klient nasadil. Pokud ano, nutná migrace na Discount Function API do 29. 9. 2026, jinak selže shopify app deploy."
dotcene_klienty: []
souvisejici: [multiple-product-discounts-same-item, multiple-product-discounts-cart-line, prerequisites-product-discount-functions]
tldr: "Shopify definitivně uzavřel developer preview Discounts Allocator Function API - apps s extension purchase.discounts-allocator.run musí do 29. 9. 2026 přejít na Discount Function API, jinak jim selže nasazení."
tagy: [admin-graphql-api, discounts, functions, deprecation, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Discounts Allocator Function API byla speciální kategorie Shopify Functions, dostupná exkluzivně přes uzavřený developer preview program. Umožňovala vývojářům implementovat vlastní logiku pro alokaci slev napříč řádky košíku (discount allocation) pomocí extension targetu `purchase.discounts-allocator.run`, registrovaného a odregistrovaného přes mutace `discountsAllocatorFunctionRegister` a `discountsAllocatorFunctionUnregister` v unstable verzi Admin GraphQL API. Šlo o řešení pro apps, které potřebovaly přesně kontrolovat, jak se více současně platných slev rozpočítá mezi jednotlivé položky v košíku.

    Shopify program k 10. 9. 2026 uzavřel a oznámil, že API nepostoupí do obecné dostupnosti (general release). Důvodem je, že nativní alokační schopnosti Shopify se mezitím výrazně rozšířily — platforma nyní nativně podporuje stacking více product discounts na jedné cart line i kombinace více product discounts na stejné položce (viz související změny z dubna a července 2026), takže dedikovaná allocator API přestala být potřeba. Součástí uzavření je i odstranění API reference dokumentace a tutoriálů z Shopify dev portálu a automatická odregistrace všech funkcí, které byly v rámci preview zaregistrované.

    Zasaženy jsou pouze apps, které v konfiguraci deklarují extension target `purchase.discounts-allocator.run`. Pokud si tuto extension neodstraní z konfigurace do 29. 9. 2026, `shopify app deploy` selže s chybou "API not found for target: purchase.discounts-allocator.run." Již existující releases zůstanou instalovatelné, ale zaregistrované funkce přestanou fungovat. Doporučená migrační cesta vede na obecné Discount Function API (dokumentace na shopify.dev/docs/apps/build/discounts), které nadále poskytuje plnohodnotnou alternativu pro custom discount logiku.
  zdroje:
    - title: "Shopify: Discounts Allocator Function API developer preview has ended"
      url: "https://shopify.dev/changelog/discounts-allocator-function-api-developer-preview-has-ended"
    - title: "Shopify Docs: Build Discounts with Functions"
      url: "https://shopify.dev/docs/apps/build/discounts"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify definitivně uzavřel developer preview program pro **Discounts Allocator Function API** a oznámil, že do obecné dostupnosti nepostoupí. Mutace `discountsAllocatorFunctionRegister` a `discountsAllocatorFunctionUnregister` mizí z unstable Admin GraphQL API, veškerá dokumentace a tutoriály k API jsou stažené z dev portálu a všechny funkce zaregistrované v rámci preview budou automaticky odregistrované. Shopify k tomu uvádí zdůvodnění: nativní podpora stackování více product discounts na jedné položce košíku (postupně přidávaná v průběhu roku 2026) dělá dedikovanou allocator API zbytečnou.

## Časová osa
- **2026-09-10** — Shopify oznámil uzavření developer preview programu
- **2026-09-29** — mutace mizí z unstable API, funkce se automaticky odregistrují, `shopify app deploy` začne selhávat pro apps s neodstraněnou extension

## Dopad pro nás
**Pro vývojáře:** Pokud má některý z našich klientů app s extension targetem `purchase.discounts-allocator.run` (nepravděpodobné — šlo o uzavřený preview), je nutné tuto extension do 29. 9. 2026 odstranit z konfigurace a přesunout logiku do standardní Discount Function API. Bez zásahu začne `shopify app deploy` selhávat s chybou "API not found for target: purchase.discounts-allocator.run" a stávající zaregistrované funkce přestanou vykonávat svou logiku (i když release zůstane technicky nainstalovaný).

**Pro PM / PO:** Nízké riziko dopadu na naše klienty — jde o uzavřený preview program s omezeným počtem účastníků, ne o mainstream funkcionalitu. Přesto stojí za rychlou kontrolu u klientů s custom discount logikou postavenou na Shopify Functions, zda náhodou tuto extension nepoužívají.

## Použití v Integrátoru
Možná — máme discount methods, ale samotný allocator function extension target je nad rámec toho, co běžně nasazujeme; relevantní jen pokud by konkrétní klient měl vlastní custom Function s tímto targetem.

## Související
- [Více product discounts na stejnou položku](../zmena/multiple-product-discounts-same-item/)
- [Více product discounts na jednu cart line](../zmena/multiple-product-discounts-cart-line/)
- [Prerequisites pro Product Discount Functions](../zmena/prerequisites-product-discount-functions/)
