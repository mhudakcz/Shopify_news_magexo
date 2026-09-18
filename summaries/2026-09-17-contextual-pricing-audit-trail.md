---
date: 2026-09-17
title: "Pricing audit trail pro contextual product variant prices — kdo, kdy, co"
title_en: "New Pricing audit trail for contextual product variant prices"
slug: contextual-pricing-audit-trail
zdroj: https://shopify.dev/changelog/pricing-audit-trail-for-contextual-product-variant-prices
shrnuto_dne: 2026-09-18
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pracujeme s contextualPricing u B2B ceníků a multi-market cen — nové pole lze doplnit do stávajících price queries bez nové integrace."
dotcene_klienty: []
souvisejici: [inventory-adjustment-full-change-tracking, compare-at-prices-catalogs, pos-activity-log-high-risk-actions]
tldr: "Admin GraphQL API nově umožňuje dohledat, jak přesně Shopify dopočítal contextual cenu varianty — jaké úpravy (slevy, měnové přepočty, price listy) se na ní podílely, v jakém pořadí a s jakým výsledkem."
tagy: [admin-graphql-api, pricing, audit-trail, contextual-pricing, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Contextual pricing je mechanismus, kterým Shopify počítá finální cenu produktové varianty pro konkrétního kupujícího — v závislosti na trhu, měně, B2B price listu nebo přiřazené company location. Výsledek dotazu na pole contextualPricing objektu ProductVariant vždy vracel jen finální cenu, ale nikoli to, jak k ní Shopify došel. Pokud se na výpočtu podílelo víc vrstev najednou (např. velkoobchodní price list, měnový přepočet a k tomu ještě daň nebo poplatek), nebylo možné z API zjistit jednotlivé kroky.

    Nové pole auditTrail na objektu ProductVariantContextualPricing tuto mezeru zaplňuje. Vrací objekt PricingAuditTrail s polem priceAdjustments — seřazeným seznamem úprav typu AuditTrailAdjustment, kde každá položka nese typ operace (ADDITION, MULTIPLICATION nebo REPLACEMENT), hodnotu úpravy, výslednou cenu po jejím uplatnění a popisný label (např. "Wholesale price list" nebo "Currency conversion"). Aplikace tak může zobrazit nebo zalogovat celý řetězec kroků, kterými Shopify k finální ceně dospěl.

    Pole je dostupné od API verze 2026-10 v rámci Admin GraphQL API a vyžaduje scope read_products. Jde o čistě aditivní změnu — stávající dotazy na contextualPricing fungují beze změny, auditTrail je nutné explicitně vyžádat. Praktické využití je hlavně v ERP a B2B integracích, kde je potřeba kupujícímu nebo auditorovi doložit, z čeho se cena skládá, a v odvětvích s regulovanou cenotvorbou (např. požadavky EU Omnibus na transparentnost slev nebo vyšetřování price gouging), kde platforma musí umět zpětně prokázat historii výpočtu ceny.
  zdroje:
    - title: "Shopify: New Pricing audit trail for contextual product variant prices"
      url: "https://shopify.dev/changelog/pricing-audit-trail-for-contextual-product-variant-prices"
    - title: "ProductVariantContextualPricing — Admin GraphQL API reference"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing"
  generated_at: 2026-09-18T08:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Admin GraphQL API dostává nové pole **auditTrail** na objektu `ProductVariantContextualPricing` (dostupný přes `ProductVariant.contextualPricing`). Vrací typ `PricingAuditTrail` s polem `priceAdjustments` — seřazeným seznamem jednotlivých kroků výpočtu ceny.

Každá položka v `priceAdjustments` (typ `AuditTrailAdjustment`) obsahuje:
- **type** — druh operace: `ADDITION`, `MULTIPLICATION` nebo `REPLACEMENT`
- **value** — hodnota dané úpravy
- **price** — výsledná cena po uplatnění tohoto kroku
- **label** — popisek zdroje úpravy (např. konkrétní price list, měnový přepočet, daň nebo poplatek)

Dohromady tak lze zrekonstruovat celý řetězec: od výchozí ceny, přes uplatněný B2B price list nebo měnovou konverzi, až po finální contextual cenu, kterou vidí konkrétní kupující.

## Časová osa

- **2026-09-17** — pole `auditTrail` publikováno v Admin GraphQL API
- **API verze 2026-10** — minimální verze, ve které je pole dostupné; vyžaduje scope `read_products`
- Beze změny pro stávající implementace — jde o opt-in rozšíření, ne breaking change

## Dopad pro nás

**Pro vývojáře:** Tam, kde už dotazujeme `contextualPricing` (B2B ceníky, multi-market ceny), stačí do query doplnit `auditTrail { priceAdjustments { type value price { amount currencyCode } label } } }` a získáme transparentní rozklad výpočtu ceny bez nutnosti cokoliv migrovat. Užitečné i pro debugging, když se cena u konkrétní varianty neshoduje s očekáváním.

**Pro PM / PO:** Relevantní hlavně pro projekty s regulovanou nebo B2B cenotvorbou — kde je potřeba doložit, jak vznikla konkrétní cena (EU Omnibus, interní cenové audity, spory se zákazníkem o slevu). Dá se nabídnout jako doplněk k reportingu nebo jako argument u zákazníků, kteří řeší compliance kolem cen.

## Použití v Integrátoru

Pole lze doplnit do existujících price queries bez nové integrace — jde jen o rozšíření GraphQL selectu. Zatím nejde o aktivně poptávanou funkci, ale stojí za zmínku tam, kde řešíme B2B ceníky nebo compliance reporting kolem cen.
