---
date: 2026-08-26
title: "Shopify Payments v UAE nyní na Advanced plan (dřív jen Plus)"
title_en: "Shopify Payments in the United Arab Emirates now available on the Advanced plan"
slug: shopify-payments-uae-advanced-plan
zdroj: https://changelog.shopify.com/posts/shopify-payments-in-the-united-arab-emirates-available-on-shopify-advanced-plan
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-09-08

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-26

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shopify Payments eligibilita je merchant-side plán a region, ale ovlivňuje jaké platební metody a payout flow může klient v UAE reálně použít."
dotcene_klienty: []
souvisejici: [local-payment-methods-more-countries, klarna-more-countries, multiple-legal-entities-shopify-payments]

kontext:
  background: |
    Shopify Payments je vlastní platební brána Shopify, která umožňuje merchantům přijímat platby kartou i lokálními metodami bez nutnosti zakládat samostatný účet u třetí strany a integrovat externí gateway. V regionu Spojených arabských emirátů (UAE) byla tato brána dlouho dostupná jen merchantům na nejvyšším plánu Plus — merchanti na nižších plánech museli spoléhat na third-party payment providery, což znamená extra integrační práci, další smluvní vztah a typicky i horší sazby.

    Touto změnou Shopify otevírá Shopify Payments v UAE i pro Advanced plan, tedy nejvyšší z tzv. self-serve plánů (Basic, Grow, Advanced) bez nutnosti přechodu na Plus. Merchant tak může přijímat platby nativně v místní měně AED, mít výplaty (payouts) přes Shopify Balance a spravovat spory (disputes) i refundy v jednom admin rozhraní — stejně jako u regionů, kde Shopify Payments funguje déle.

    Jde o pokračování dlouhodobého trendu, kdy Shopify postupně snižuje plánovou bariéru pro pokročilé platební a mezinárodní funkce (viz i rozšiřování lokálních payment methods v Evropě nebo multi-entity podporu v Shopify Payments) — cílem je, aby menší a středně velcí merchanti v nových regionech nemuseli platit za Plus jen kvůli přístupu k nativní platební bráně. Pro Middle East trh to zároveň signalizuje, že Shopify tam investuje do lokální infrastruktury (compliance, bankovní partnerství) srovnatelné s vyspělejšími trhy.
  zdroje:
    - title: "Shopify: Shopify Payments in the United Arab Emirates now available on the Advanced plan"
      url: "https://changelog.shopify.com/posts/shopify-payments-in-the-united-arab-emirates-available-on-shopify-advanced-plan"
    - title: "Local payment methods ve více evropských zemích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-payment-methods-more-countries/"
    - title: "Klarna nově dostupná v ČR a 7 dalších zemích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/klarna-more-countries/"
    - title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
tldr: "Shopify Payments je v UAE nově dostupný i na Advanced plánu, ne jen na Plus — merchanti nepotřebují third-party gateway pro platby v AED."
tagy: [shopify-payments, uae, advanced-plan, international, expansion, middle-east]
---

## Co se mění
**Shopify Payments** — nativní platební brána Shopify — je v **Spojených arabských emirátech (UAE)** nově dostupný i merchantům na **Advanced plánu**. Dříve byla tato brána v regionu vyhrazená výhradně pro **Plus** merchanty. Advanced plan merchanti tak mohou přijímat platby přímo v **AED** bez nutnosti zakládat účet u third-party payment poskytovatele a integrovat jeho gateway zvlášť.

Prakticky to znamená jeden účet pro zpracování transakcí, výplaty přes Shopify Balance a správu sporů/refundů v běžném Shopify admin rozhraní — stejný zážitek, jaký mají merchanti na zavedenějších trzích typu US, UK nebo EU.

## Časová osa
- **26. 8. 2026** — Shopify oznámilo rozšíření Shopify Payments v UAE na Advanced plan (changelog)

## Dopad pro nás
**Pro vývojáře:** Žádný přímý API dopad — Shopify Payments eligibilita je otázka merchant-side nastavení plánu a regionu, ne nová API funkčnost, kterou bychom volali. Pokud řešíme onboarding nebo audit klienta v UAE, je dobré vědět, že Advanced plan už nativní platební bránu podporuje a nemusí se řešit workaround přes třetí stranu.

**Pro PM / PO:** Relevantní pro nové poptávky z Middle East regionu — dřív by klient na Advanced plánu musel řešit platby přes externí gateway (víc integrační práce, další smlouva). Teď stačí Advanced a Shopify Payments zapnout nativně, což zjednodušuje i naši implementaci a snižuje potenciální rozsah práce na platební části projektu.

## Použití v Integrátoru
Přímo nepoužíváme — jde o merchant-side nastavení platební brány. Relevantní jako kontext při scopingu projektu pro klienta v UAE na Advanced plánu.
