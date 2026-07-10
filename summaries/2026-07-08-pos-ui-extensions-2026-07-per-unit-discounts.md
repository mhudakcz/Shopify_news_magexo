---
date: 2026-07-08
title: "POS UI extensions 2026-07 — FixedAmount discounts musí být per-unit (Action Required)"
title_en: "POS UI extensions 2026-07 uses per-unit fixed-amount line item discounts"
slug: pos-ui-extensions-2026-07-per-unit-discounts
zdroj: https://shopify.dev/changelog/pos-ui-extensions-2026-07-uses-per-unit-fixed-amount-line-item-discounts
shrnuto_dne: 2026-07-10
kategorie: [breaking-change, deprecation]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud POS extensions v integraci nastavují FixedAmount slevy na line items přes setLineItemDiscount/bulkSetLineItemDiscounts a adoptují API verzi 2026-07, je nutné přepočítat částku na per-unit."
dotcene_klienty: []
souvisejici: [pos-115-rounding-line-item-discounts, pos-ui-extensions-offline, discountedunitprice-draftorderlineitem-caa-deprecated]
tldr: "Od API verze 2026-07 musí POS UI extensions posílat FixedAmount slevy na řádku jako per-unit částku — automatická konverze z celkové částky na jednotku byla odstraněna."
tagy: [pos, extensions, discount, breaking, action-required, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions umožňují appkám vkládat vlastní logiku do Shopify POS, mimo jiné i nastavování slev přímo na řádcích košíku přes Cart API — metody `setLineItemDiscount` a `bulkSetLineItemDiscounts` s typem `FixedAmount`. Do teď stačilo appce poslat jednu celkovou částku slevy pro celý řádek (např. "5 USD sleva na položku o 2 kusech") a Shopify POS si sám dopočítal, kolik to znamená na jeden kus.

    Toto chování bylo pouze dočasné mezikrok — Shopify už v dubnu 2026 avizoval (POS 11.5, změna zaokrouhlování fixních slev na řádku), že směřuje k tomu, aby se fixní slevy počítaly konzistentně per-unit napříč Adminem, online checkoutem i POS, kvůli přesnosti reportingu a daňových základů. API verze 2026-07 je posledním krokem této migrace pro POS UI extensions: automatická konverze celková částka → per-unit je zcela odstraněna. Stejná hodnota, která dřív představovala slevu na celý řádek, se nově interpretuje jako sleva na jeden kus — bez varování nebo chyby, prostě se jinak spočítá výsledná cena.

    Prakticky to znamená, že pokud appka pošle `'5.00'` na řádek o 2 kusech, dřív se odečetlo 5 USD z celého řádku, nově se odečte 5 USD z každého kusu, tedy 10 USD celkem. Appky, které tuto logiku neupraví, budou nadměrně diskontovat objednávky — a to tiše, bez chybové hlášky, takže riziko je spíš finanční/účetní než technické (crash). Procentuální slevy (`Percentage`) touto změnou nejsou dotčené. Změna platí jen pro extensions, které explicitně adoptují API verzi 2026-07; starší verze fungují beze změny.
  zdroje:
    - title: "Shopify: POS UI extensions 2026-07 uses per-unit fixed-amount line item discounts"
      url: "https://shopify.dev/changelog/pos-ui-extensions-2026-07-uses-per-unit-fixed-amount-line-item-discounts"
    - title: "Shopify Changelog: Minor rounding change for custom line item discounts in POS 11.5"
      url: "https://shopify.dev/changelog/minor-rounding-change-for-custom-line-item-discounts-in-pos-115"
    - title: "Cart API reference (POS UI extensions 2026-07)"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/2026-07/target-apis/contextual-apis/cart-api"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění
Od API verze **2026-07** musí POS UI extensions posílat **FixedAmount** slevy na line items jako **per-unit částku**, ne jako celkovou částku za celý řádek. Automatická konverze (celková částka → přepočet na kus), na kterou byly appky do teď zvyklé, byla úplně odstraněna.

Konkrétní příklad ze changelogu: pokud appka zavolá `setLineItemDiscount` s hodnotou `'5.00'` na řádku o 2 kusech, dřív se aplikovalo 5 USD na celý řádek. Nově se stejná hodnota `'5.00'` interpretuje jako 5 USD **na kus**, tedy 10 USD celkem. Stejný kód tedy po adopci 2026-07 začne diskontovat dvojnásobek — bez chyby, jen s jiným výsledkem.

Procentuální slevy (`Percentage`) touto změnou nejsou dotčené.

## Časová osa
- **Duben 2026** — POS 11.5 mění zaokrouhlování fixních slev (Admin/POS) na per-unit výpočet jako první krok konsolidace (viz `pos-115-rounding-line-item-discounts`).
- **8. července 2026** — Changelog zveřejněn, oznámena povinnost per-unit hodnot pro FixedAmount slevy v Cart API.
- **15. července 2026** — Efektivní datum změny pro API verzi 2026-07.
- **Nadále** — starší API verze (před 2026-07) fungují beze změny, riziko vzniká jen při adopci nové verze.

## Dopad pro nás
**Pro vývojáře:** Pokud máme nebo budeme mít POS UI extensions volající `setLineItemDiscount` / `bulkSetLineItemDiscounts` s typem `FixedAmount` a adoptujeme API verzi 2026-07, je nutné před voláním **vydělit celkovou částku slevy počtem kusů na řádku** a ošetřit zaokrouhlování (aby součet per-unit částek odpovídal zamýšlené celkové slevě). Bez této úpravy dojde k tichému nadměrnému diskontování — nespadne request, jen bude špatný výsledek, což je horší na odhalení.

**Pro PM / PO:** Jde o breaking change v POS extensions API, ne o změnu viditelnou koncovým zákazníkům přímo — pokud ale nějaká appka/rozšíření v POS nebylo upraveno, klient uvidí nesprávně vysoké slevy na účtenkách. Stojí za to ověřit, zda někdo z klientů používá vlastní POS UI extensions se slevami, než přejde na API 2026-07.

## Použití v Integrátoru
**Možná dotčeno** — přímo nevyvíjíme POS UI extensions, ale pokud by v budoucnu vznikla potřeba nastavovat FixedAmount slevy přes Cart API u API verze 2026-07, je třeba počítat s per-unit logikou popsanou výše.
