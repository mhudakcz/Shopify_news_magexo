---
date: 2026-07-16
title: "Kolekce podporují multi-source (podmínky + hand-picked + exclusions) a variant-level"
title_en: "Collections now support multi-source and variants"
slug: collections-multi-source-variants
zdroj: https://changelog.shopify.com/posts/collections-now-support-multi-source-and-variants
shrnuto_dne: 2026-07-21
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-07-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde primárně o admin UI redesign nad již GA datovým modelem kolekcí (sources) — relevantní, pokud naše integrace čte/spravuje kolekce nebo se dotýká merchandisingové synchronizace pro klienty se složitou taxonomií."
dotcene_klienty: []
souvisejici: [new-collection-model-apis-ga, new-collections-api-preview, publish-unpublish-variants-independently]
tldr: "Shopify redesignovalo kolekce v adminu: jedna kolekce teď může kombinovat automatizované podmínky, ručně vybrané produkty, výjimky i jiné kolekce, a to i na úrovni variant — reuse napříč discounts, taxes a sales channels."
tagy: [collections, catalog, variants, discounts, taxes, redesign]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Kolekce jsou v Shopify základní stavební kámen merchandisingu — seskupují produkty pro navigaci ve storefrontu, slevové akce, daňová pravidla a přehledy v administraci. Doteď šlo prakticky vždy o jednu logiku najednou: buď automatizovaná pravidla podle tagu, typu nebo ceny, nebo ručně vybrané produkty. Kombinovat obojí v jedné kolekci, přidat výjimky nebo stavět kolekci z jiných kolekcí vyžadovalo obchvaty a duplicitní nastavení.

    Tento redesign je merchant-facing dokončení přechodu, který Shopify odstartovalo na Editions Spring 2026 jako preview nové Collections API a dotáhlo do GA v polovině června 2026 (datový model se `sources` místo `ruleSet`, viz související články). Aktuální novinka je admin UI vrstva nad tímto GA modelem: obchodník teď v jedné kolekci zkombinuje automatizované podmínky, hand-picked produkty, exclusions a další kolekce jako vstup — a to i na úrovni jednotlivých variant (barva, velikost). Stejná kolekce se navíc dá znovu použít napříč slevami, daněmi a prodejními kanály místo duplicitního nastavování.

    V praxi jde o zjednodušení pro obchody se složitou taxonomií — fashion, B2B, multi-brand katalogy — kde dřív bylo potřeba desítky úzce zaměřených kolekcí a ruční přepisování pravidel při každé změně sortimentu. Existující kolekce zůstávají funkční a v novém rozhraní se zobrazí automaticky, bez nutnosti je mazat nebo znovu vytvářet. Aplikace třetích stran ale pro plné využití nových možností potřebují API verzi 2026-07.
  zdroje:
    - title: "Shopify: Collections now support multi-source and variants"
      url: "https://changelog.shopify.com/posts/collections-now-support-multi-source-and-variants"
  generated_at: 2026-07-21T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přepracovalo admin rozhraní pro kolekce tak, aby jedna kolekce mohla kombinovat více zdrojů najednou:

- **Automatizované podmínky** (tag, typ, cena, metafield) a **hand-picked produkty** ve stejné kolekci
- **Exclusions** — výjimky, které z kolekce vyloučí konkrétní produkty nebo varianty i přes to, že by jinak splňovaly podmínky
- **Kolekce jako vstup do jiné kolekce** — parent kolekce se automaticky přepočítá, když se změní zdrojová (sub-)kolekce
- **Variant-level kolekce** — členství v kolekci lze definovat na úrovni konkrétní varianty (např. jen červená barva nebo velikost L), zobrazuje se v Online Store i na POS

Kolekce sestavená tímto způsobem se dá **znovu použít napříč slevami, daněmi a podporovanými prodejními kanály** — místo aby se stejná logika musela definovat vícekrát.

Nové admin UI přidává vizuální grid s drag-to-reorder a hromadným přesouváním, list view pro detailní práci a kontrolu nad tím, v jakém pořadí zákazníci vidí produkty na stránce kolekce. Sidekick podporuje správu kolekcí i z mobilu.

Existující kolekce zůstávají beze změny funkční a v novém rozhraní se objeví automaticky bez nutnosti je mazat nebo znovu vytvářet. Aplikace třetích stran musí pro práci s novými možnostmi (multi-source, exclusions, variant-level) upgradovat na API verzi **2026-07**.

## Časová osa

- **Jaro 2026 (Editions Spring '26):** preview nové Collections API (composable source groups)
- **2026-06-17:** GA nového Collection modelu v API 2026-07 (`ruleSet` → `sources`)
- **2026-07-01:** API 2026-07 stabilní; kolekce využívající nové features neviditelné přes starší verze API
- **2026-07-16:** publikován tento merchant-facing redesign admin UI kolekcí

## Dopad pro nás

**Pro vývojáře:** Datový model (sources, variant-level membership) byl GA už od 2026-06-17 — tento changelog je primárně o admin UX nad ním, nepřidává novou GraphQL funkčnost nad rámec toho, co bylo popsáno v předchozích changelogech. Pokud naše integrace čte nebo spravuje kolekce přes Admin GraphQL, klíčové zůstává mít migraci na `Collection.sources` a `collection:` argument v mutacích hotovou — jinak se kolekce postavené na nových možnostech (multi-source, exclusions) přes staré API nezobrazí vůbec.

**Pro PM / PO:** Pro klienty se složitou taxonomií (fashion, B2B, multi-brand) jde o citelné zjednodušení merchandisingu — jedna kolekce nahradí kombinaci automatizovaných pravidel, ručních výběrů a výjimek, které dřív vyžadovaly více kolekcí nebo manuální údržbu. Stojí za to zmínit klientům, kteří si stěžují na neohebnost automatizovaných kolekcí nebo duplicitní nastavování pro slevy/daně.

## Použití v Integrátoru

Pokud naše integrace pracuje s Admin API a dotýká se kolekcí (merchandising, katalogová synchronizace, B2B segmentace), stojí za to ověřit, že čte `Collection.sources` místo deprecated `ruleSet`, a případně klientům zmínit nové možnosti multi-source a variant-level kolekcí jako příležitost zjednodušit jejich současné nastavení.
