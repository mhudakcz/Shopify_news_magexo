---
date: 2026-11-05
title: "Order routing functions — rank locations napříč multiple fulfillment groups (unstable API)"
title_en: "Order routing functions can rank locations across multiple fulfillment groups"
slug: order-routing-functions-multi-fulfillment-groups
zdroj: https://shopify.dev/docs/api/functions/unstable/order-routing-location-rule#rank-locations-across-multiple-fulfillment-groups
shrnuto_dne: 2026-11-06
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro multi-warehouse merchanty synchronizujeme objednávky a fulfillment do ERP či WMS, vlastní routing pravidla mohou měnit, ze které lokace a v kolika fulfillment groups se objednávka vyřizuje."
dotcene_klienty: []
souvisejici: [us-tax-calculation-fulfillment-location-routing, location-metafields-analytics-dimensions, built-for-shopify-fulfillment-services-requirements]
tldr: "Order routing location rule funkce nově v unstable API vracejí pořadí lokací zvlášť pro každou fulfillment group nebo společně pro více skupin najednou."
tagy: [order-routing, functions, fulfillment-groups, unstable, logistics, multi-location]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Order routing location rule je typ Shopify Functions, kterým lze ovlivnit, z jaké lokace se objednávka vyřizuje. Funkce neurčuje jedinou lokaci natvrdo, ale vrací pořadí (ranking) lokací, které Shopify zkouší od nejnižšího ranku. Pokud je rank stejný, o pořadí rozhoduje další pravidlo v order routing nastavení obchodu.

    Objednávka se při směrování dělí na fulfillment groups, tedy skupiny položek, které mohou být vyřízeny společně, například podle doručovací adresy, dostupnosti zásob nebo způsobu doručení. Nový target cart.fulfillment-groups.location-rankings.generate.run dostane na vstupu všechny skupiny (handle, inventoryLocationHandles, lines, deliveryAddress) i seznam lokací (adresa, local pickup, metafield) a vrací seřazený seznam operací. Operace fulfillmentGroupLocationRankingAdd řadí lokace pro jednu skupinu, operace fulfillmentGroupsLocationRankingAdd použije stejné pořadí pro více skupin najednou.

    Pravidla jsou jasně daná. Rank je nezáporné celé číslo a záleží jen na relativním pořadí, takže mezery jsou povolené. Handle lokace musí patřit mezi inventární lokace dané skupiny, jinak se ignoruje. Vynechané lokace se řadí poslední. Pokud více operací řadí stejnou lokaci ve stejné skupině, platí poslední. Shopify funkci znovu spouští při změně dat ovlivňujících doručení, ale výsledky z posledních 15 minut znovu používá. Dokumentace uvádí příklady pro perishable zboží, produkty s věkovým omezením a B2B objednávky, kde se jako hlavní kritérium používají metafieldy lokací. API je zatím unstable, ve fázi beta a na vyžádání dostupné pouze pro merchanty na plánu Plus.
  zdroje:
    - title: "Shopify: Order routing functions can rank locations across multiple fulfillment groups"
      url: "https://shopify.dev/docs/api/functions/unstable/order-routing-location-rule#rank-locations-across-multiple-fulfillment-groups"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Funkce typu order routing location rule mohou v unstable verzi API vracet pořadí lokací pro více fulfillment groups jedné objednávky. Každá skupina tak může mít vlastní optimální výběr lokací, například skupina s perishable zbožím preferuje chlazený sklad a skupina s běžným zbožím nejbližší sklad k zákazníkovi. Pokud mají skupiny stejnou logiku, stačí jedna operace pro více skupin.

Funkce dostává data o skupinách, jejich řádcích, doručovací adrese a dostupných lokacích včetně metafieldů. Metafieldy lokací jsou hlavní cesta, jak do routingu dostat vlastní kritéria. Výstupem je seřazený seznam operací, přičemž při kolizi vyhrává poslední operace. Funkce je dostupná jen v beta režimu na vyžádání pro Plus merchanty.

## Časová osa

- 2026-11-05: dokumentace rankingu napříč více fulfillment groups zveřejněna v unstable verzi Functions API.
- Zatím bez stabilní verze a bez oznámeného data uvedení do stable.
- Přístup je v betě na vyžádání, jen pro merchanty na plánu Plus.

## Dopad pro nás

**Pro vývojáře:** Cíl je dostupný jen v unstable verzi, takže schéma se může změnit a do produkce se nehodí. Při návrhu pravidel je třeba počítat s tím, že handle mimo inventární lokace skupiny se tiše ignoruje, vynechané lokace jdou na konec a výsledky se cachují až 15 minut. Efektivita záleží na jazyce, protože dokumentace uvádí řádově nižší počet instrukcí pro Rust než pro JavaScript. Metafieldy lokací je potřeba nejdřív připravit a udržovat.

**Pro PM / PO:** Jde o příležitost pro Plus merchanty s komplexním multi-warehouse setupem, například se split shippingem nebo košíky smíšenými z pre-orderů a skladového zboží. Je vhodné ověřit, kteří klienti takové potřeby mají, a zvážit pilot po vyžádání přístupu do bety. Se stabilním nasazením zatím nelze počítat.

## Použití v Integrátoru

Pokud integrace posílá objednávky do ERP nebo WMS, vlastní routing pravidla mohou měnit rozdělení objednávky do fulfillment groups i volbu lokace, což je potřeba zohlednit v mapování skladů. Aktuálně jde o sledování novinky, protože API je unstable.
