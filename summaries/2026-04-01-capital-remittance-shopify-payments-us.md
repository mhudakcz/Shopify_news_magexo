---
date: 2026-04-01
title: "Capital Remittance přes Shopify Payments rozšířena na všechny státy USA"
title_en: "Capital Remittance via Shopify Payments Expands to all states of the US"
slug: capital-remittance-shopify-payments-us
zdroj: https://changelog.shopify.com/posts/capital-remittance-via-shopify-payments-expands-to-all-states-of-the-us
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [fyi]
api_oblast: billing
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Capital remittance flow, US-only finance feature."
kontext:
  background: |
    Shopify Capital remittance je mechanismus automatického splácení podnikatelských záloh a půjček poskytnutých v rámci programu Shopify Capital. Místo klasického ACH debetu (přímého strhování z bankovního účtu obchodníka) se splátky odečítají přímo z toku peněz procházejícího přes Shopify Payments — tedy ještě před tím, než Shopify přepošle výnosy na bankovní účet. Jde tak o integrované finanční vypořádání v rámci jediné platformy.

    Shopify Capital existuje od roku 2016 a nabízí způsobilým obchodníkům zálohy na obchodní příjmy (merchant cash advances) nebo přímé půjčky. Splácení tradičně fungovalo přes ACH debit, což přinášelo riziko selhání při nedostatku prostředků na bankovním účtu a vyžadovalo aktivní bankovní spojení. Přechod na remittance přes Shopify Payments tento problém řeší elegantně: Shopify má nad tokem prostředků přímou kontrolu a nepotřebuje iniciovat samostatnou bankovní transakci.

    Rozšíření na všechny státy USA (duben 2026) je výsledkem postupného zavádění, které naráželo na rozdílnou regulaci jednotlivých amerických států — podobný postup proběhl o týden dříve u Shopify Credit remittance v Texasu. Sjednocení na jedné remittance metodě zjednodušuje compliance i uživatelskou zkušenost. ACH debit zůstává jako záložní způsob splácení pro případ selhání Shopify Payments.

    Stejný model remittance Shopify uplatňuje i u produktu Shopify Credit (kreditní linka pro obchodní výdaje) a plánuje jej rozšiřovat spolu s expanzí Capital do dalších zemí, jako je Francie nebo Německo.
  zdroje:
    - title: "Capital Remittance via Shopify Payments Expands to all states of the US"
      url: "https://changelog.shopify.com/posts/capital-remittance-via-shopify-payments-expands-to-all-states-of-the-us"
    - title: "Shopify Help Center: Shopify Capital"
      url: "https://help.shopify.com/en/manual/finances/shopify-capital"
    - title: "Archiv: Collect Credit remittances přes Shopify Payments v Texasu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/credit-remittances-shopify-payments-texas/"
    - title: "Archiv: Shopify Capital launchuje ve Francii"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/capital-launches-france/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Capital remittance je nyní k dispozici nationwide v USA přes Shopify Payments — eliminuje potřebu ACH debit plateb (kromě failover scénáře)."
tagy: [capital, payments, us-only, finance]
---

## Co se mění
**Shopify Capital remittance** (splácení záloh přes Capital) je nyní dostupná **ve všech státech USA** přímo přes Shopify Payments. ACH debit platby už nejsou potřeba (kromě failover, když Shopify Payments remittance selže).

## Použití v Integrátoru
**Nepoužíváme** — US-only finance feature pro Shopify Capital users.
