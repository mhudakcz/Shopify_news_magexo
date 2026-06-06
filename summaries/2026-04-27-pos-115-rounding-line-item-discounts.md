---
date: 2026-04-27
title: "POS 11.5 mění výpočet fixních slev na řádek"
title_en: "Minor rounding change for custom line item discounts in POS 11.5"
slug: pos-115-rounding-line-item-discounts
zdroj: https://shopify.dev/changelog/minor-rounding-change-for-custom-line-item-discounts-in-pos-115
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, integrace]
api_oblast: pos
api_verze: []
nalehavost: stredni
customer_facing: true

ucinnost_od: null
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: mozna
dukaz_integratoru: "interní MCP check našel orderEditAddLineItemDiscount v naší integraci. Nepoužíváme přímo POS extensions, ale slevy přidané z Adminu na POS objednávky projdou novým výpočtem."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Fixní sleva na řádek (line item discount) je sleva vyjádřená pevnou peněžní částkou aplikovaná na celou položku v košíku bez ohledu na počet kusů. V Shopify POS ji může nastavit personál ručně nebo prostřednictvím předkonfigurovaných dlaždic ve Smart Gridu. Rozhraní Cart API pro POS extensions ji přijímá přes metody `setLineItemDiscount` nebo `bulkSetLineItemDiscounts` s typem `FixedAmount`.

    Historicky Shopify POS počítal pevnou slevu jako jeden celek aplikovaný na hodnotu celého řádku. Přechod na výpočet per kus — kdy se celková částka nejprve vydělí počtem kusů a výsledek se zaokrouhlí pro každou jednotku zvlášť — přibližuje POS chování tomu, jak slevy zpracovává Admin a online checkout Shopify. Motivací je konzistentnost výpočtů napříč kanály, zejména pro reporting a daňové základy.

    Praktický dopad se projevuje při agregaci slev v reportech: při větším objemu transakcí se mohou kumulovat drobné rozdíly způsobené zaokrouhlením na úrovni jednotek. Účetní sesouhlasení nebo integrace exportující položkové slevy musí s touto odchylkou počítat. Změna nijak neovlivňuje procentuální slevy ani discount kódy aplikované na celou objednávku.

    Shopify plánuje v budoucích API verzích (po 2026-04) vyžadovat předávání slev přímo jako částky per kus, nikoli za celý řádek. Vývojáři POS extensions by měli sledovat vývoj Cart API, aby včas adaptovali svůj kód.
  zdroje:
    - title: "Shopify Changelog: Minor rounding change for custom line item discounts in POS 11.5"
      url: "https://shopify.dev/changelog/minor-rounding-change-for-custom-line-item-discounts-in-pos-115"
    - title: "Archiv: Rychlejší zadávání slev v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/faster-discount-entry-pos/"
    - title: "Archiv: Smart Grid – dropdown výběr slev místo manual entry"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-smart-grid-discount-tiles/"
    - title: "Archiv: Skenování QR slevových kódů v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-scan-discount-codes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "POS 11.5 aplikuje fixní slevy per kus místo na celý řádek — možný rozdíl ±1 cent v zaokrouhlení."
tagy: [pos, discount, line-item, rounding]
---

## Co se mění
POS 11.5 mění výpočet **fixních slev** (pevná částka v měně) na položky v košíku. Místo aplikace slevy na celý řádek (line item) jako jedné částky se sleva nově aplikuje **per kus** — tj. částka se nejdřív vydělí počtem kusů a teprve pak odečte. Důsledek: rozdíly v zaokrouhlení až o ±1 cent na řádek.

| Před | Po |
|---|---|
| 10 USD sleva na řádek 3× položka → aplikováno na celý řádek | 10 USD sleva na 3 kusy → 3.33 + 3.33 + 3.34 (per-kus zaokrouhlení) |

## Dopad pro nás
**Pro vývojáře:**
Týká se hlavně POS aplikace. Pokud používáme `orderEditAddLineItemDiscount` mutation pro slevy z Adminu na POS objednávky, výsledné částky se mohou marginálně lišit od očekávání. Reporty agregující slevy by měly počítat s rounding driftem.

**Pro PM / PO:**
Klienti používající POS uvidí mírně odlišné částky na účtenkách — typicky rozdíl v haléřích. Nemělo by to spustit eskalaci, ale stojí za zmínit v change-logu.

## Použití v Integrátoru
**Možná dotčeno** — máme `orderEditAddLineItemDiscount` v naší integraci. Nepoužíváme přímo POS extensions, ale jakákoli sleva přidaná z Adminu na POS objednávku projde novým výpočtem.

## Rizika a edge cases
- Rounding drift v reportech sčítajících slevy přes velké množství objednávek
- Účetní/finanční sesouhlasení může vykazovat rozdíly v setinách
