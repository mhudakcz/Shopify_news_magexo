---
date: 2026-05-11
title: "Print packing slips pro inventory transfers v POS Pro"
title_en: "Print packing slips for inventory transfers"
slug: print-packing-slips-inventory-transfers
zdroj: https://changelog.shopify.com/posts/print-packing-slips-for-inventory-transfers
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS Pro UI feature pro tisk packing slipů. Naše integrace POS extensions neimplementují."
dotcene_klienty: []
souvisejici: [simpler-inventory-transfers]

kontext:
  background: |
    Packing slip (průvodní list zásilky) je tisknutelný dokument doprovázející fyzicky odesílanou zásilku — obsahuje seznam položek, jejich množství, výchozí a cílovou lokaci a referenční identifikátor zásilky. Ve fyzickém skladu nebo maloobchodní prodejně slouží jako „manifest předání": příjemce ho porovná s doručeným zbožím a ověří kompletnost zásilky bez nutnosti přístupu do systému. Formát je standardem v logistice i maloobchodu a Shopify ho využívá i pro běžné objednávky v rámci Order Printer funkcionalit.

    Inventory transfer v Shopify reprezentuje přesun zásoby mezi dvěma lokacemi téhož obchodu (např. ze skladu do pobočky nebo mezi kamennou prodejnami). Transfer prochází stavovým cyklem — Draft, Ready to Ship, In Transit, Completed — a POS Pro je klíčové rozhraní pro personál, který transfer fyzicky plní a odesílá. Shopify od zavedení multi-location inventory soustavně rozšiřuje nástroje kolem transferů: redesign workflow v roce 2026 přinesl optional shipments, inline tracking a nový stav Ready to Ship.

    Přidání tisku packing slipů přímo v POS Pro eliminuje potřebu přepínat mezi aplikacemi nebo tisknout z administrace. Personál v prodejně, který odesílá zásoby na jinou pobočku, tak dostane fyzický doklad přímo v POS — při shipmentu v11.6 a s oprávněním Manage transfers. Tisk sdílí formát s packing slips pro objednávky, takže je konzistentní s ostatními tisknutelnými dokumenty v Shopify ekosystému.
  zdroje:
    - title: "Print packing slips for inventory transfers"
      url: "https://changelog.shopify.com/posts/print-packing-slips-for-inventory-transfers"
    - title: "Redesign inventory transfers — jednodušší workflow"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simpler-inventory-transfers/"
    - title: "Flow: nové triggery pro inventory transfer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-triggers-inventory-transfer/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "POS Pro personál může nově generovat a tisknout packing slips přímo z shipment detail pro outgoing transfers — zobrazí items, lokace a transfer detaily."
tagy: [pos, inventory, transfer, packing-slip, print]
---

## Co se mění
**POS Pro** umožňuje personálu tisknout **packing slips** přímo z shipment detailu pro outgoing inventory transfers. Slip zobrazuje:
- Items transferu
- Lokace zdrojová / cílová
- Transfer reference

## Použití v Integrátoru
**Nepoužíváme** — POS-specific print feature.
