---
date: 2026-07-15
title: "POS UI Extensions 2026-07: discount allocations pro bundle components"
title_en: "POS UI Extensions 2026-07 adds discount allocations to bundle components"
slug: pos-ui-extensions-2026-07-bundle-discount-allocations
zdroj: https://shopify.dev/changelog/pos-ui-extensions-2026-07-adds-discount-allocations-to-bundle-components
shrnuto_dne: 2026-07-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom v POS extensions potřebovali počítat slevy, daně nebo reporting na úrovni jednotlivých bundle components, tato data teď existují a nemusela by se dopočítávat ručně."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-2026-07-per-unit-discounts, pos-115-rounding-line-item-discounts, pos-extensions-background-target]
tldr: "POS UI Extensions v API verzi 2026-07 přidávají discountAllocations přímo na bundle components, takže appky vidí rozdělení slevy mezi jednotlivé komponenty bundlu, ne jen celkovou slevu na úrovni bundlu."
tagy: [pos, extensions, discount, bundles, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Product bundles v Shopify (např. sada více produktů prodávaná jako jedna položka) se v košíku reprezentují jako jeden line item s vnořenými komponenty (components) — jednotlivými produkty, ze kterých je bundle složen. Když se na bundle aplikuje sleva, POS UI extensions doteď viděly jen agregovanou hodnotu slevy na úrovni celého bundlu, nikoli to, jak se sleva rozpadá mezi jednotlivé komponenty.

    To byl problém pro appky, které potřebují počítat s přesností na úroveň komponenty — typicky účetní a daňové systémy, které musí znát skutečnou zdaněnou hodnotu každé položky uvnitř bundlu, nebo reportingové nástroje, které chtějí vykazovat marži či tržby po jednotlivých produktech, ne jen po bundlu jako celku. Bez component-level dat musely appky slevu odhadovat nebo dopočítávat vlastní (často nepřesnou) logikou.

    API verze 2026-07 tento nedostatek řeší přidáním pole `discountAllocations` přímo na bundle components — dostupné jak přes `shopify.cartLineItem.components`, tak přes obecnější Cart API (`shopify.cart.current.value.lineItems`), protože obě používají stejnou strukturu `LineItem`. Jde o čistě aditivní změnu: existující extensions na starších API verzích (2026-04 a starší) nejsou nijak dotčené a nemusí nic upravovat. Appky, které adoptují 2026-07, by měly počítat s tím, že pole může být nepřítomné nebo prázdné, pokud na bundle sleva neplatí.
  zdroje:
    - title: "Shopify: POS UI Extensions 2026-07 adds discount allocations to bundle components"
      url: "https://shopify.dev/changelog/pos-ui-extensions-2026-07-adds-discount-allocations-to-bundle-components"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

POS UI Extensions v API verzi **2026-07** přidávají pole `discountAllocations` přímo na **bundle components** v rámci cart line items. Dřív měly extensions přístup jen k celkové slevě na úrovni bundlu jako celku — nově vidí, jak je sleva rozpočítaná mezi jednotlivé komponenty bundlu.

Data jsou dostupná dvěma cestami, obě stavějí na stejné struktuře `LineItem`:
- `shopify.cartLineItem.components?.[0]?.discountAllocations`
- `shopify.cart.current.value.lineItems` (obecné Cart API)

Jde o aditivní změnu — nic se neodebírá ani neláme. Extensions na API verzi 2026-04 a starší fungují beze změny. Appky adoptující 2026-07 by měly ošetřit případ, kdy pole chybí nebo je prázdné (bundle bez slevy).

## Časová osa

- **15. 7. 2026** — changelog zveřejněn, efektivní datum pro API verzi 2026-07
- Bez migrace pro existující extensions na starších API verzích

## Dopad pro nás

**Pro vývojáře:** Pokud bychom stavěli nebo upravovali POS UI extension, která potřebuje přesné rozúčtování slev na úrovni jednotlivých produktů uvnitř bundlu (např. pro reporting, daňové výpočty nebo napojení na účetní systém), nově není nutné slevu na komponenty dopočítávat ručně — stačí číst `discountAllocations` přímo z komponenty. Při adopci API 2026-07 je potřeba počítat s tím, že pole může být `undefined` nebo prázdné pole.

**Pro PM / PO:** Jde o rozšíření možností pro vývojáře, ne o viditelnou změnu pro koncové zákazníky ani merchanty. Relevantní hlavně u klientů, kteří prodávají bundly v retailu přes POS a potřebují přesný reporting nebo účetnictví na úrovni jednotlivých položek v bundlu.

## Použití v Integrátoru

Přímo nevyvíjíme POS UI extensions pro bundle reporting, ale pokud by taková potřeba vznikla (např. přesný daňový/účetní rozpad slevy na komponenty bundlu), toto pole by ušetřilo vlastní dopočítávací logiku.
