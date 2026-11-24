---
date: 2026-11-20
title: "Shopify Flow: 8 nových „updated“ triggerů (order, customer, fulfillment, …)"
title_en: "Flow: New updated triggers for orders, customers, and more"
slug: flow-updated-triggers-orders-customers-fulfillment
zdroj: https://changelog.shopify.com/posts/flow-new-updated-triggers-for-orders-customers-and-more
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-20
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pro automatizace nad změnami objednávek, zákazníků a skladu, které jsme dosud řešili přes webhook + custom kód, teď může stačit Flow trigger."
dotcene_klienty: []
souvisejici: []
tldr: "Shopify Flow má 8 nových „updated“ triggerů (customer, order, refund, return, fulfillment order, collection, location, inventory item) s možností až 5 monitorovaných polí na trigger, podobně jako Product updated."
tagy: [flow, automation, triggers, orders, customers, fulfillment, inventory]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Flow je nativní automatizační engine Shopify, ve kterém se skládají workflow z triggerů, podmínek a akcí bez nutnosti psát kód. Triggery spouštějí workflow při události v obchodě, například při vytvoření objednávky. „Updated" triggery jsou užitečné, protože umožňují reagovat na konkrétní změnu existující entity, nejen na její vznik. U triggeru Product updated už dříve existoval vzor monitorovaných polí (monitored fields): trigger se spustí jen tehdy, když se změní některé z vybraných polí, maximálně pěti. Stejný princip nyní Shopify rozšířil na další entity.
  zdroje:
    - title: "Shopify: Flow — New 'updated' triggers for orders, customers, and more"
      url: "https://changelog.shopify.com/posts/flow-new-updated-triggers-for-orders-customers-and-more"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Flow přidává 8 nových triggerů, které se spustí při aktualizaci dané entity:

- customer (zákazník)
- order (objednávka)
- refund (vrácení peněz)
- return (vratka)
- fulfillment order (objednávka k vyřízení)
- collection (kolekce)
- location (lokace)
- inventory item (skladová položka)

Stejně jako u existujícího triggeru Product updated lze u každého z nich nastavit až 5 monitorovaných polí. Workflow se pak nespustí při jakékoli změně entity, ale jen když se změní některé z vybraných polí. Díky tomu je možné stavět přesnější automatizace, které reagují na konkrétní změny, a omezit zbytečné spouštění workflow.

## Dopad pro nás

**Pro vývojáře:** Doporučujeme projít automatizace, které jsme dosud stavěli na webhoocích a vlastní logice (například reakce na změnu stavu objednávky, údajů zákazníka nebo skladové položky), a posoudit, zda je lze nově realizovat čistě ve Flow. Tam, kde stačí jednoduchá podmínka a akce, může Flow nahradit vlastní kód včetně jeho údržby a hostingu. Limit 5 sledovaných polí je třeba zohlednit při návrhu.

**Pro PM / PO:** Klienti, kteří Flow používají, získávají silnější automatizační možnosti bez nutnosti vývoje. U nových požadavků na automatizaci se vyplatí nejdřív ověřit, zda je lze vyřešit konfigurací ve Flow, což zkracuje dobu dodání i náklady.

## Použití v Integrátoru

Možná. Webhooky a kód jsme psali pro část těchto událostí (změny objednávek, zákazníků, skladu). Flow teď může některé z těchto scénářů pokrýt bez vývoje. Konkrétní využití je potřeba ověřit proti stávajícím integracím.
