---
date: 2026-06-24
title: "Custom discounts na draft order line items používají presentment currency místo shop currency"
title_en: "Custom draft order line item discounts now use presentment currency"
slug: draft-order-custom-discount-presentment-currency
zdroj: https://changelog.shopify.com/posts/improvement-to-draft-order-custom-discount-currency
shrnuto_dne: 2026-06-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Draft orders v Integrátoru mohou zahrnovat custom slevy; pokud pracujeme s multi-currency merchanty, stojí za ověření, zda zobrazujeme discount amounts správně v presentment currency."
dotcene_klienty: []
souvisejici: ["draftorder-discount-warning-pricerule-removed", "b2b-discounts-default-new-stores", "gift-card-local-currency"]
tldr: "Custom slevy na draft order line items se nyní zadávají a zobrazují v měně zákazníka (presentment currency), ne v shop currency — přesnost pro multi-currency merchanty."
tagy: [draft-order, discount, currency, multi-currency, ux]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Draft orders jsou objednávky vytvořené přímo v Shopify Admin — typicky pro B2B zákazníky, telefonické objednávky nebo situace, kdy merchant potřebuje ručně upravit cenu či přidat slevu. Custom discount na line item je manuálně zadaná částka nebo procento, které merchant aplikuje přímo na konkrétní položku v draft order.

    Doposud byl problém: i když draft order byl nastaven na jinou currency než shop currency (tzv. presentment currency — měna, ve které zákazník nakupuje), custom discount se vždy počítal v shop currency. Merchant zadal slevu např. v USD, přestože zákazník platil v EUR, což vedlo ke confusingu, přepočtovacím chybám a komplikacím při fakturaci.

    Po tomto update se custom discount zadává a zobrazuje přímo v presentment currency draft orderu. Merchant tak vidí i zadává slevu ve stejné měně jako zákazník — bez nutnosti ručního přepočtu. Změna je čistě na straně Admin UI a logiky výpočtu; žádný breaking change pro API.

    Praktický dopad je nejvyšší pro merchanty s multi-currency setup (Shopify Markets) nebo pro B2B e-shopy, kde draft orders tvoří velkou část objednávek a custom discounting je běžnou praxí. Eliminuje kategorii chyb vzniklých currency mismatch při slevování.
  zdroje:
    - title: "Shopify: Custom draft order line item discounts now use presentment currency"
      url: "https://changelog.shopify.com/posts/improvement-to-draft-order-custom-discount-currency"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Custom slevy (custom discounts) aplikované na jednotlivé line items v draft orders nyní vždy používají presentment currency — tedy měnu nastavenou na daném draft orderu, ve které zákazník nakupuje.

Dříve platilo: bez ohledu na to, v jaké currency byl draft order vystaven, discount amount se vždy zobrazoval a počítal v shop currency (základní měně obchodu). To bylo matoucí pro každého merchanta pracujícího s více měnami — například CZK shop prodávající zákazníkovi platícímu v EUR musel přepočítávat slevy ručně.

Po změně platí: zadáte-li custom discount na line item v draft orderu vystaveném v EUR, celý průběh — zadání hodnoty, zobrazení, výpočet — probíhá v EUR. Žádný ruční přepočet, žádný currency mismatch.

Změna se týká Shopify Admin UI. Nejedná se o breaking change na API úrovni.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-24 | Rollout do Shopify Admin — custom discount line items v draft orders používají presentment currency |

## Dopad pro nás

Jde o drobný, ale prakticky důležitý fix pro merchants s multi-currency setup. Eliminuje kategorii UX chyb, na které mohli zákazníci nebo obchodní zástupci narazit při ručním vytváření draft orders se slevami.

Pro Integrátorové integrace: pokud naše řešení vytváří nebo upravuje draft orders programaticky přes Admin API a zahrnuje custom discount amounts, stojí za ověření, zda hodnoty předáváme konzistentně v presentment currency. Shopify API chování se samotnou změnou nemění — jde o úpravu UI a logiky zobrazení — ale konzistence na API straně je dobrá praxe.

## Použití v Integrátoru

Integrátor pracuje s draft orders zejména v kontextu B2B objednávek a manuálních sales procesů. Pokud merchant používá multi-currency a custom slevy na line items, tato změna zlepšuje přesnost UI bez zásahu do API.

Doporučujeme při review multi-currency draft order flows ověřit, že discount amounts jsou vždy předávány v presentment currency — konzistentně s tím, jak Shopify Admin nyní chování prezentuje.
