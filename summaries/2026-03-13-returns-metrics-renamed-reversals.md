---
date: 2026-03-13
title: "Returns metrics přejmenovány na 'reversals'"
title_en: "Returns metrics renamed to reversals"
slug: returns-metrics-renamed-reversals
zdroj: https://changelog.shopify.com/posts/returns-metrics-renamed-to-reversals
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [breaking-change, fyi]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Analytics field rename. Naše integrace nedělají reporting nad Returns metrics."
kontext:
  background: |
    Sales reversal je v e-commerce širší pojem než fyzické vrácení zboží. Zahrnuje jakoukoli úpravu, která snižuje zaznamenaný obrat — vrácení peněz, storno objednávky, editaci ceny po odeslání i fyzicky vrácené zboží. Fyzický return naproti tomu označuje konkrétní situaci, kdy zákazník zašle produkt zpět a merchant jej přijme zpět na sklad.

    Shopify Analytics historicky označoval obě kategorie souhrnně jako „returns", což vedlo k nepřesnostem při vyhodnocování výkonu. Merchant nerozlišoval, zda pokles obratu způsobilo zrušení objednávky, sleva přiznaná po nákupu nebo skutečné fyzické vrácení zboží. Přejmenování na „reversals" a „reversed quantity" odráží přesnější datový model, kde existují dvě oddělené větve metrik.

    Tato změna je součástí dlouhodobého vylepšování Shopify Analytics — platformy prošly v roce 2025–2026 řadou úprav: nové cumulative metriky, annotations pro kontextualizaci výkyvů, cíle metrik přes Admin API nebo vizualizační nástroje pro trend analýzu. Konzistentní pojmenování je předpokladem pro smysluplné srovnávání mezi reporty a integracemi třetích stran.

    Pro reportingové nástroje a BI integrace je důležité aktualizovat pojmenování dimenzí a sloupců — obsah metrik zůstává stejný, mění se pouze název. Záměna „returns" za „reversals" v dotazech nebo exportech by mohla způsobit nesoulad s historickými daty nebo chybné alerty.
  zdroje:
    - title: "Shopify Changelog: Returns metrics renamed to reversals"
      url: "https://changelog.shopify.com/posts/returns-metrics-renamed-to-reversals"
    - title: "Kumulativní metriky v čase v Analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cumulative-metrics-analytics/"
    - title: "Benchmark Comparisons v Analytics končí 19. 5."
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/benchmark-comparisons-analytics-removed/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Analytics field 'Sales returns' přejmenován na 'Sales reversals'; 'Returned quantity' na 'Reversed quantity' — odlišuje order adjustments od fyzických returns."
tagy: [analytics, returns, naming]
---

## Co se mění
Analytics field rename:
- **„Sales returns"** → **„Sales reversals"**
- **„Returned quantity"** → **„Reversed quantity"**

Cíl: odlišit **order adjustments** (např. discount po objednání) od **fyzických returns** (zákazník vrátil zboží).

## Použití v Integrátoru
**Nepoužíváme** — analytics field rename, naše integrace ho nečtou.
