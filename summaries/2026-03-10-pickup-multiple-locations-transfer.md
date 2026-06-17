---
date: 2026-03-10
title: "Pickup in store: auto-transfer z více lokací"
title_en: "Pickup in store can now transfer from multiple locations"
slug: pickup-multiple-locations-transfer
zdroj: https://changelog.shopify.com/posts/in-store-pickup-can-now-transfer-from-multiple-locations
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Inventory transfer + pickup flow. Pokud klient má multi-location setup, naše inventory queries můžou nově vidět auto-vytvořené transfers."
kontext:
  background: |
    Inventory transfer je mechanismus v Shopify Admin, který umožňuje přesun zásoby mezi dvěma lokacemi (skladem, pobočkou) v rámci jednoho obchodu. Transfer prochází stavovým cyklem od Draft přes In Transit až po Completed, přičemž zásoby se dekrementují na zdrojové lokaci a přičítají na cílové až po přijetí. Tento mechanismus je klíčovou součástí multi-location inventory managementu.

    Shopify podporuje síť lokací (locations) od roku 2018, kdy zavedl multi-location fulfillment. Pickup in store jako doručovací metoda historicky fungovala tak, že zákazník vybral konkrétní prodejnu a objednávka se plnila výhradně z jejích zásob — pokud prodejna neměla dostatek zboží, objednávka nemohla být splněna bez manuálního zásahu. Tato omezení vedla k situacím, kdy merchant musel ručně přemístit zásobu nebo odmítnout objednávku.

    Automatizace cross-location transferů pro pickup objednávky uzavírá mezeru mezi online objednávkou a fyzickou dostupností zboží v prodejně. Propojuje se tak s dalšími nedávnými vylepšeními v oblasti inventory: redesignem transfer workflow (volitelné shipment, Ready to Ship status) a novými Flow triggery pro inventory transfer completed. Multi-location obchody s propojenými sklady a prodejnami mohou díky tomu nabídnout pickup i pro zboží, které fyzicky zatím v dané prodejně není.

  zdroje:
    - title: "Pickup in store can now transfer from multiple locations"
      url: "https://changelog.shopify.com/posts/in-store-pickup-can-now-transfer-from-multiple-locations"
    - title: "Redesign inventory transfers — jednodušší workflow"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simpler-inventory-transfers/"
    - title: "Flow: nové triggery pro inventory transfer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-triggers-inventory-transfer/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Pickup orders nyní auto-vytvoří inventory transfers z více lokací, když single lokace nemá dost zboží — kompletní fulfillment přes location chain."
tagy: [pickup, inventory, transfer, multi-location]
---

## Co se mění
**Pickup in store** orders nyní automaticky vytvoří **inventory transfers z více lokací**, pokud single lokace nemá dostatek zboží pro complete fulfillment. Cíl: snížit počet selhaných pickups u multi-location klientů.

## Použití v Integrátoru
**Možná** — máme inventory methods. Auto-vytvořené transfers mohou být viditelné v našich queries (inventoryTransferDelete, atd.). Sledovat při sync flow.
