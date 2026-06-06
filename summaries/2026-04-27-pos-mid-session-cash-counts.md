---
date: 2026-04-27
title: "Mid-session cash counts v POS"
title_en: "Mid-session cash counts"
slug: pos-mid-session-cash-counts
zdroj: https://changelog.shopify.com/posts/mid-session-cash-counts
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-specific cash drawer feature. Neimplementujeme POS extensions."
kontext:
  background: |
    Mid-session cash count je operace inventury hotovosti v pokladní zásuvce prováděná uprostřed aktivní směny — bez nutnosti směnu uzavřít nebo zahájit novou pokladní relaci. Zaměstnanec spočítá fyzické bankovky a mince, zadá výsledek do POS aplikace a systém zaznamená časový otisk i zjištěný zůstatek.

    Tradičně maloobchodní pokladní systémy (nejen Shopify) umožňovaly počítat hotovost pouze na začátku a na konci směny. Pro rušné provozovny s více transakcemi, výměnami pracovníků nebo pravidelnými vklady do trezoru to znamenalo buď obcházet systém, nebo čekat na konec dne. Shopify začal tuto oblast systematicky rozvíjet v rámci Editions Winter 2026 jako součást širšího projektu Cash Management Foundations.

    Mid-session counts jsou jedním dílem skládačky POS cash workflow: navazují na register sessions s reason codes pro každý pohyb hotovosti (Cash Management Foundations, duben 2026) a na nový CashDrawer resource v Admin GraphQL API 2026-04, který programově zpřístupňuje pokladní data externím účetním nebo auditním systémům. Výsledkem je auditní stopa pokrývající celý životní cyklus hotovosti od otevření pokladny přes průběžné kontroly až po denní uzávěrku.
  zdroje:
    - title: "Shopify Changelog: Mid-session cash counts"
      url: "https://changelog.shopify.com/posts/mid-session-cash-counts"
    - title: "Shopify Changelog: New Cash Management Foundations for Shopify POS"
      url: "https://changelog.shopify.com/posts/new-cash-management-foundations-for-shopify-pos"
    - title: "Shopify Changelog: Retail cash management capabilities (CashDrawer API)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/retail-cash-management-capabilities/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Personál může počítat hotovost kdykoli během aktivní směny a verifikovat drawer amount bez uzavření session — counts se automaticky logují pro reconciliation."
tagy: [pos, cash, register]
---

## Co se mění
**Mid-session cash counts**: personál v POS může nyní spočítat hotovost a ověřit drawer amount **kdykoli během směny**, bez nutnosti session zavřít. Všechny counts se logují pro končené reconciliation.

## Použití v Integrátoru
**Nepoužíváme** — POS cash management feature.
