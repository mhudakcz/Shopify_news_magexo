---
date: 2026-04-02
title: "Cash Management Foundations pro Shopify POS"
title_en: "New Cash Management Foundations for Shopify POS"
slug: cash-management-foundations-pos
zdroj: https://changelog.shopify.com/posts/new-cash-management-foundations-for-shopify-pos
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-specific cash management. Neimplementujeme POS extensions."
kontext:
  background: |
    Cash Management Foundations je vrstva správy hotovosti v Shopify POS, která zavádí strukturované účetnictví pokladních operací. Zahrnuje registrační relace (register sessions) s explicitním počátečním a koncovým zůstatkem, protokolování otevření zásuvky včetně odpovědného pracovníka a systém kódů důvodů (reason codes) pro každý vklad nebo výběr mimo objednávky.

    Před touto změnou Shopify POS nabízel pouze volný text pro popis hotovostních pohybů a každé zařízení vedlo svou vlastní nezávislou pokladnu. To znemožňovalo konsolidovaný přehled pro provozovny s více terminály nebo sdílenou zásuvkou. Shopify v rámci Editions Winter '26 oznámil záměr sjednotit retailové peněžní toky a vybudovat základ kompatibilní s budoucím Admin GraphQL API (CashDrawer resource, verze 2026-04).

    Prakticky to znamená, že maloobchodní provozovny mohou spravovat jednu fyzickou zásuvku z více POS terminálů, reconciliation probíhá na základě auditní stopy s reason codes a vývojáři mohou přes nové extension targets vytvářet vlastní open/close procedury nebo upozornění při překročení limitu hotovosti. Funkce cílí zejména na větší retailové řetězce s více pokladnami na prodejně.

    Tento základ navazuje na mid-session cash counts (duben 2026), které umožňují průběžné počítání hotovosti bez uzavření směny, a na CashDrawer GraphQL resource pro programové řízení pokladen z externího účetního systému.
  zdroje:
    - title: "Shopify Changelog: New Cash Management Foundations for Shopify POS"
      url: "https://changelog.shopify.com/posts/new-cash-management-foundations-for-shopify-pos"
    - title: "Shopify Changelog: Retail cash management capabilities (CashDrawer API)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/retail-cash-management-capabilities/"
    - title: "Shopify Changelog: Mid-session cash counts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-mid-session-cash-counts/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "POS přidává register sessions s cash trackingem, native reason codes pro výběry/vklady, drawer management napříč zařízeními a nové extension targets pro custom cash workflow."
tagy: [pos, cash-management, register, drawer]
souvisejici: [retail-cash-management-capabilities]
---

## Co se mění
Shopify POS dostává **Cash Management Foundations**:
- **Register sessions** s explicit cash trackingem
- **Native reason codes** pro výběry/vklady (předtím free-text)
- **Drawer management** napříč zařízeními (jeden drawer, více POS)
- Nové **extension targets** pro custom cash workflow

Souvisí s [Retail cash management capabilities](../zmena/retail-cash-management-capabilities/) z Editions Winter '26.

## Použití v Integrátoru
**Nepoužíváme** — POS-specific.
