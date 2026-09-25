---
date: 2026-09-22
title: "Shop Pay Installments — dostupné na multiple business entities (US/CA/UK)"
title_en: "Shop Pay Installments can now be enabled on multiple business entities"
slug: shop-pay-installments-multiple-business-entities
zdroj: https://changelog.shopify.com/posts/shop-pay-installments-can-now-be-enabled-on-multiple-business-entities
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-09-25

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-22

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Multi-entity Shop Pay Installments souvisí s BusinessEntity objektem v Admin API — relevantní pokud řešíme payments setup pro merchanta s více právními entitami."
dotcene_klienty: []
souvisejici: [multiple-legal-entities-shopify-payments, editions-spring-2026-payments, shop-pay-anywhere-off-platform]

kontext:
  background: |
    Shop Pay Installments je vestavěné buy now, pay later (BNPL) řešení Shop Pay, které zákazníkům v USA, Kanadě a Velké Británii umožňuje rozložit platbu na splátky přímo v checkoutu, bez nutnosti třetí aplikace. Doteď šlo tuto možnost zapnout jen pro primární business entity merchanta — pokud obchod provozoval více právních entit současně, splátky bylo možné aktivovat jen na jedné z nich.

    Shopify nyní toto omezení odstraňuje: merchanti s více business entities v USA, Kanadě a Velké Británii mohou Shop Pay Installments zapnout napříč všemi eligible entitami najednou, přes pokročilá nastavení Shopify Payments v adminu. Jde o přímou návaznost na funkci Multiple business entities (multi-entity selling), kterou Shopify představil v rámci Editions Spring '26 — tehdy šlo primárně o možnost prodávat za více právnických osob ze stejné země, teď se k tomu doplňuje konzistentní platební zážitek napříč entitami.

    Prakticky je změna relevantní pro holdingové struktury, distributory s vlastním retailem nebo firmy kombinující B2B velkoobchod s D2C prodejem — tedy přesně ty typy merchantů, pro které byl multi-entity koncept navržen. Bez této změny musel merchant řešit nekonzistentní nabídku BNPL napříč vlastními entitami, což mátlo zákazníky a komplikovalo reporting.
  zdroje:
    - title: "Shopify: Shop Pay Installments can now be enabled on multiple business entities"
      url: "https://changelog.shopify.com/posts/shop-pay-installments-can-now-be-enabled-on-multiple-business-entities"
    - title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/"
    - title: "Editions Spring '26: Payments — Shop Pay anywhere, multi-currency, USDC"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-payments/"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-4-5
tldr: "Merchanti s více business entities v US, Kanadě a UK mohou nově zapnout Shop Pay Installments (BNPL) na všech entitách najednou, ne jen na primární."
tagy: [shop-pay, installments, business-entities, multi-entity, bnpl, us, canada, uk]
---

## Co se mění
**Shop Pay Installments** — bezúročné splátky v rámci Shop Pay checkoutu — bylo dosud možné zapnout jen pro **primární business entity** merchanta. Pokud obchod provozoval více právních entit (typicky holdingy, franšízy nebo firmy s odděleným B2B a D2C prodejem), splátky fungovaly nekonzistentně napříč entitami.

Nově mohou merchanti v **USA, Kanadě a Velké Británii** aktivovat Shop Pay Installments na **všech eligible business entities**, ne jen na jedné. Zapíná se to v adminu, v pokročilých nastaveních platební metody Shopify Payments (`admin.shopify.com/settings/payments/shopify-payments/advanced-settings`). Jde o přímé navázání na funkci Multiple business entities, kterou Shopify zavedl v rámci Editions Spring '26.

## Časová osa
- **22. 9. 2026** — Shopify oznámilo rozšíření Shop Pay Installments na multiple business entities (changelog)

## Dopad pro nás
**Pro vývojáře:** Žádná nová API funkčnost, kterou bychom přímo volali — jde o merchant-side nastavení platební metody. Relevantní kontext je propojení s `BusinessEntity` objektem v GraphQL Admin API (viz `legalEntityId`, API 2026-07) — pokud řešíme payments audit nebo onboarding merchanta s více entitami, dobré vědět, že BNPL nabídka už nemusí být per-entitně nekonzistentní.

**Pro PM / PO:** Relevantní pro poptávky od merchantů s parent-subsidiary strukturou nebo odděleným B2B/D2C provozem v US/CA/UK trzích. Dřív bychom museli merchanta upozornit, že splátky budou fungovat jen na jedné entitě — teď lze nastavit jednotně napříč celou strukturou, což zjednodušuje scoping payments části projektu.

## Použití v Integrátoru
Přímo nepoužíváme — jde o merchant-side nastavení platební metody v Shopify adminu, ne o API volání v naší integraci.
