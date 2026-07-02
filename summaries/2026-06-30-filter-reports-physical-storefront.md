---
date: 2026-06-30
title: "Nový \"Is physical storefront\" filter v Analytics — segmentace in-store vs online"
title_en: "Filter and group your reports by physical storefront"
slug: filter-reports-physical-storefront
zdroj: https://changelog.shopify.com/posts/filter-and-group-your-reports-by-physical-storefront
shrnuto_dne: 2026-07-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor exportuje a zpracovává data o objednávkách a lokacích — nová dimenze physical storefront může ovlivnit, jak agregujeme analytická data pro omnichannel klienty."
dotcene_klienty: []
souvisejici:
  - "order-attribution-sales-channel-apps"
  - "staff-attribution-pos-improvements"
  - "pos-activity-log-high-risk-actions"
tldr: "Shopify přidal do Analytics boolean filter 'Is physical storefront', který umožňuje omnichannel merchantům oddělit výkonnost fyzických prodejen od online kanálů přímo v Reports a Explore."
tagy: [analytics, physical-storefront, filter, reporting, omnichannel]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Analytics nově obsahuje dimenzi "Is physical storefront" — boolean hodnotu, která každé lokaci přiřazuje příznak, zda jde o fyzickou prodejnu (kamenný obchod). Toto nastavení vychází z konfigurace lokace v admin rozhraní (záložka Location details) a lze jej kdykoli změnit; změna se projeví okamžitě v celé historii dat dané lokace.

    Dimenze je dostupná v sekci Reports i v nástroji Explore. Merchantům umožňuje filtrovat a seskupovat reporty tak, aby izolovali aktivitu kamenných prodejen od e-commerce nebo jiných kanálů — a to bez nutnosti ručního exportu a křížení dat ve třetím nástroji. Filter je navíc kompatibilní s existujícími POS dimenzemi.

    Pro omnichannel merchanty jde o základní, ale chybějící stavební blok. Dosud museli srovnávat výkon in-store vs. online buď na základě pojmenování lokací, nebo externího BI nástroje. Nová dimenze toto srovnání zpřístupňuje nativně přímo v Shopify Admin, bez dalšího nastavení.
  zdroje:
    - title: "Shopify: Filter and group your reports by physical storefront"
      url: "https://changelog.shopify.com/posts/filter-and-group-your-reports-by-physical-storefront"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify přidal do Analytics novou dimenzi **"Is physical storefront"** (boolean), která reflektuje nastavení konkrétní lokace v admin rozhraní. Merchanté ji mohou použít jako:

- **Filter** — zobrazit v reportu pouze fyzické prodejny (nebo naopak pouze online kanály),
- **Group by** — seskupit výsledky reportu podle příznaku physical storefront a porovnat obě skupiny vedle sebe.

Dimenze funguje jak v sekci **Reports**, tak v nástroji **Explore**. Je kompatibilní s existujícími POS dimenzemi. Hodnota se dynamicky aktualizuje — pokud merchant změní nastavení lokace, projeví se to okamžitě v celé historii dat té lokace.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-30 | Vydáno pro všechny merchanty s přístupem k Shopify Analytics |

Žádné migrace ani přechodné období — feature je dostupná okamžitě pro stávající Reports i Explore konfigurace.

## Dopad pro nás

Feature je čistě merchant-facing a nevyžaduje žádné změny na straně aplikací ani integrací. Pro naše klienty s omnichannel provozem (fyzická prodejna + e-shop) jde o bezplatné zlepšení reportování dostupné v rámci jejich stávajícího Shopify plánu.

Doporučení pro klienty: zkontrolovat, zda mají lokace správně označené jako physical storefront v Location details — toto nastavení je nyní datově relevantní a ovlivňuje analytické výstupy.

## Použití v Integrátoru

Integrátor pracuje s daty o objednávkách a lokacích. Nová dimenze physical storefront je uložena na úrovni lokace (`Location` objekt v Admin API) a v tuto chvíli ji Integrátor explicitně nečte. Pokud bychom v budoucnu agregovali analytická data pro omnichannel klienty nebo synchronizovali lokační metadata, bylo by vhodné tuto vlastnost zahrnout do datového modelu lokace.
