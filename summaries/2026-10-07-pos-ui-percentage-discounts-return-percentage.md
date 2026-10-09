---
date: 2026-10-07
title: "POS UI extensions: percentage discounts vrací percentage hodnotu (breaking)"
title_en: "POS UI extensions now return percentage values for percentage discounts"
slug: pos-ui-percentage-discounts-return-percentage
zdroj: https://shopify.dev/changelog/posts/pos-ui-extensions-now-return-percentage-values-for-percentage-discounts
shrnuto_dne: 2026-10-08
kategorie: [breaking-change]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom měli POS UI extension, která čte Discount.amount u slev typu Percentage (zobrazení úspory, výpočty, loyalty body, bulkCartUpdate), po nasazení POS 11.15 dostane místo peněžní částky procento."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-2026-07-per-unit-discounts, pos-ui-extensions-2026-07-bundle-discount-allocations, pos-115-rounding-line-item-discounts]
tldr: "Od Shopify POS 11.15 vrací Discount.amount u slev typu Percentage procento (např. 25), ne peněžní částku (např. 50) — platí pro všechny API verze POS UI extensions, takže starší api_version nepomůže a extensions, které amount berou jako peníze, musí upravit logiku."
tagy: [pos-extensions, discounts, percentage, breaking, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions umožňují aplikacím vkládat vlastní logiku přímo do Shopify POS a přes Cart API číst aktuální stav košíku včetně slev. Každá sleva (cart-level i na řádku) má pole `Discount.amount` a `Discount.type` (například `Percentage`, `FixedAmount` nebo `Code`). Význam pole `amount` ale dosud nebyl pro slevy typu `Percentage` konzistentní s Cart API kontraktem: POS 11.14 a starší sem vkládaly peněžní částku, kterou sleva z řádku skutečně odečetla, nikoli samotné procento.

    Shopify POS 11.15 toto chování mění. Pro slevy typu `Percentage` teď `amount` vrací procento, tedy hodnotu odpovídající Cart API. Příklad z changelogu: 25% sleva na řádek za 200 USD dřív vracela `amount: 50` (odečtená částka), nově vrací `amount: 25` (procento). Změna se týká cart-level i line-item percentage slev, ať už jsou manuální, aplikované appkou, nebo automatické, pokud jsou vystavené s `type: 'Percentage'`. Dotčené jsou current state a subscriptions Cart API, `lineItems[].discounts`, `cartDiscount` a `cartDiscounts`, contextual API `cartLineItem` a také `bulkCartUpdate`, kde oprava zabraňuje tomu, aby se peněžní alokace procentní slevy při předání stavu košíku zpět znovu nepřečetla jako procento.

    Nedotčené zůstávají slevy typu `FixedAmount` a slevy typu `Code`, včetně kódů, které jsou procentní, ale vystavené jako `Code`. Zásadní je, že změna platí pro všechny API verze POS UI extensions. Připnutí starší `api_version` tedy původní chování neuchová, rozhoduje pouze verze POS aplikace na zařízení. Změna navazuje na dřívější sjednocování semantiky slev v POS, například na per-unit FixedAmount slevy v API 2026-07.
  zdroje:
    - title: "Shopify: POS UI extensions now return percentage values for percentage discounts"
      url: "https://shopify.dev/changelog/posts/pos-ui-extensions-now-return-percentage-values-for-percentage-discounts"
    - title: "Shopify: Cart API (POS UI extensions), current state a subscriptions"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/cart-api#cartapicontent-propertydetail-current"
    - title: "Shopify: Cart API (POS UI extensions), bulkCartUpdate"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/cart-api#cartapicontent-propertydetail-bulkcartupdate"
    - title: "Shopify: Cart line item API (POS UI extensions)"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/cart-line-item-api#cartlineitemapi-propertydetail-cartlineitem"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS 11.15 mění hodnotu pole `Discount.amount` u slev typu `Percentage` v POS UI extensions. Dřív (POS 11.14 a starší) pole obsahovalo **peněžní částku**, kterou sleva odečetla. Nově obsahuje **procento**, stejně jako v Cart API kontraktu.

Příklad z changelogu: 25% sleva na řádek za 200 USD.
- **Před (POS 11.14 a starší):** `amount: 50`
- **Po (POS 11.15+):** `amount: 25`

Změna se týká cart-level i line-item percentage slev (manuálních, aplikovaných appkou i automatických), pokud jsou vystavené s `type: 'Percentage'`. Konkrétně jde o:
- current state a subscriptions v Cart API,
- `lineItems[].discounts`,
- `cartDiscount` a `cartDiscounts`,
- contextual API `cartLineItem`,
- `bulkCartUpdate`, kde oprava zabraňuje tomu, aby se peněžní alokace procentní slevy při předání stavu košíku zpět znovu nepřečetla jako procento.

Nedotčené zůstávají slevy `FixedAmount` a slevy `Code`, včetně procentních kódů vystavených jako `type: 'Code'`.

Důležité: změna platí pro **všechny API verze** POS UI extensions. Připnutí starší `api_version` původní chování nezachová. Rozhoduje verze POS aplikace na zařízení, takže se chování mění bez jakéhokoli kroku na straně vývojáře.

## Časová osa

- **POS 11.14 a starší** — `amount` u `Percentage` slev vrací peněžní částku.
- **7. 10. 2026** — changelog zveřejněn, označen jako Breaking API Change a Action required.
- **POS 11.15 a novější** — `amount` u `Percentage` slev vrací procento, bez ohledu na pinnutou `api_version`.
- **Přechodné období** — dokud nejsou zařízení upgradovaná na POS 11.15, mohou v provozu koexistovat obě chování a extension musí zvládnout obě.

## Dopad pro nás

**Pro vývojáře:** Je potřeba projít každé místo, kde extension čte `Discount.amount`, a před interpretací zkontrolovat `Discount.type`. Pro `Percentage` už nejde o peníze. Typicky se to týká zobrazení slevy v měně, výpočtu celkové úspory, loyalty bodů nebo napojení na externí systémy, které `amount` považovaly za odečtenou částku. Bez úpravy vznikne tichá chyba: žádná výjimka, jen špatná čísla (v příkladu výše 25 místo 50 v kontextu měny). Je nutné otestovat cart-level, line-item i automatické percentage slevy a všechny workflow s `bulkCartUpdate` na POS 11.15 nebo novějším. Pokud extension podporuje i POS 11.14 a starší, musí zatím zvládat obě sémantiky, například podle verze POS nebo defenzivním přepočtem z ceny řádku.

**Pro PM / PO:** Jde o breaking change, která se projeví bez nutnosti měnit API verzi, takže ji nezachytí běžný proces plánování upgradů. Riziko je finanční a účetní (špatně zobrazené slevy, nesprávné loyalty body, rozdíly v reportech), nikoli pád aplikace. Stojí za to zjistit, zda některý z našich projektů s POS používá vlastní nebo třetí POS UI extension se zobrazením či výpočtem slev, a ověřit s dodavatelem, že je připravená na POS 11.15. Změna navazuje na dřívější sjednocování sémantiky slev v POS (per-unit FixedAmount slevy v API 2026-07 a zaokrouhlování v POS 11.5).

## Použití v Integrátoru

**Možná dotčeno.** Přímo nevyvíjíme POS UI extensions pracující se slevami, ale pokud by taková extension vznikla nebo ji provozoval některý z našich projektů s POS, je nutné ošetřit `Discount.type` před čtením `amount` a otestovat ji na POS 11.15.
