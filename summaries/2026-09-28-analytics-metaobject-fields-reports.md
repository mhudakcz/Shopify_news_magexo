---
date: 2026-09-28
title: "Analytics: metaobject fields jako dimenze/filtry v custom reportech"
title_en: "Use metaobject fields in Analytics reports"
slug: analytics-metaobject-fields-reports
zdroj: https://changelog.shopify.com/posts/use-metaobject-fields-in-analytics-reports
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud merchant drží vlastní taxonomii (designer, sezona, kolekce) v metaobjects navázaných přes metafields, může ji nově použít v nativním Analytics bez exportu do tabulek; žádná API změna, jen nastavení v adminu."
dotcene_klienty: []
souvisejici: [location-metafields-analytics-dimensions, shopify-analytics-full-stack-app-platform, streamlined-metaobject-api]
tldr: "Metaobjects navázané přes metafields na produkty, varianty, zákazníky nebo objednávky lze nově použít v Analytics jako pole pro seskupení a jako filtry, takže merchant segmentuje metriky podle vlastní taxonomie bez spreadsheet exportu."
tagy: [analytics, metaobjects, custom-reports, dimensions, filters]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Metaobjects jsou v Shopify vlastní strukturované datové typy. Merchant si definuje pojmenovaná pole (například Designer se zemí původu, Sezona nebo Kolekce) a jednotlivé záznamy pak připojuje k produktům, variantám, zákazníkům či objednávkám přes metafield typu reference. Dosud šlo v Analytics seskupovat a filtrovat podle custom a category metafields, ale hodnoty uložené uvnitř metaobjectu nebyly v reportech dostupné. Kdo chtěl vidět tržby podle designera nebo podle sezony, musel data exportovat a spojovat ve spreadsheetu.

    Shopify to mění: metaobject fields se nově objevují v Analytics při otevření reportu v samostatné sekci Metaobjects. Merchant vybere resource (například Product), definici metaobjectu a konkrétní pole (například Designer > Country) a použije ho jako dimenzi pro seskupení nebo jako filtr s jednou hodnotou (například jen designeři z Itálie). Stejná pole jsou k dispozici i v query editoru. Existující metaobjects a metafields, které na ně odkazují, zůstávají beze změny, a custom i category metafields mají v pickeru nadále vlastní samostatné skupiny.

    Podle changelogu se funkce týká merchant-owned metaobjects, které jsou pro Analytics zapnuté ve výchozím stavu; jednotlivé definice lze vypnout v Settings > Metafields and metaobjects. Metaobjects vytvořené aplikacemi zůstávají vypnuté, dokud pro ně není Analytics výslovně aktivován. Changelog neuvádí omezení podle tarifu ani samostatný harmonogram zapnutí, a nepřikládá ani odkaz na dokumentaci.
  zdroje:
    - title: "Shopify: Use metaobject fields in Analytics reports"
      url: "https://changelog.shopify.com/posts/use-metaobject-fields-in-analytics-reports"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Analytics nově umí pracovat s **metaobject fields** jako s dimenzemi a filtry. Podmínkou je, že metaobject je připojený přes metafield k jednomu z podporovaných resources:

- products
- variants
- customers
- orders

**Jak to vypadá v praxi:**
1. Při otevření reportu se v pickeru polí objeví nová sekce **Metaobjects**.
2. Merchant zvolí resource, definici metaobjectu a konkrétní pole, například **Designer > Country**.
3. Pole použije k seskupení dat, nebo jako **filtr s jednou hodnotou** (například designeři z Itálie).
4. Stejná pole jsou dostupná i v **query editoru**, takže je lze použít v ručně psaných dotazech.

**Co zůstává beze změny:** samotné metaobjects i metafields, které na ně odkazují, se nemění. Custom metafields a category metafields mají v pickeru dál vlastní samostatné skupiny.

**Správa viditelnosti:** merchant-owned metaobjects jsou pro Analytics zapnuté výchozím nastavením. Jednotlivé definice lze vypnout v **Settings > Metafields and metaobjects**. Metaobjects vytvořené aplikacemi zůstávají vypnuté, dokud není Analytics pro danou definici aktivován.

## Časová osa

- **2026-09-28** - Shopify zveřejnil změnu v merchant changelogu.
- Changelog neuvádí omezení podle tarifu ani datum dalšího rolloutu. Před tím, než funkci slíbíme merchantovi, je vhodné ověřit dostupnost v jeho adminu.

## Dopad pro nás

Jde o **novou příležitost, ne o breaking change**. Nic se nerozbije a není potřeba žádná migrace. Funkce je užitečná všude, kde merchant drží vlastní taxonomii v metaobjects: tvůrce nebo designer, sezona, kolekce, materiálová skupina, značka s atributy.

**Pro vývojáře:** Žádná API změna ani nový scope. Zajímavé je hlavně to, že se v Analytics zpřístupní data, která jsme doposud modelovali jen pro storefront nebo pro synchronizaci. Při návrhu datového modelu má nově smysl počítat i s tím, že struktura metaobjectu (názvy polí, typy, rozumně malý počet hodnot) ovlivní, jak dobře půjde podle ní v reportech seskupovat. Pokud aplikace vytváří vlastní metaobjects, je potřeba počítat s tím, že pro Analytics budou ve výchozím stavu vypnuté.

**Pro PM / PO:** Merchant získá segmentaci metrik podle vlastní taxonomie přímo v nativním Analytics, bez exportu do spreadsheetu a ruční práce s daty. Dává smysl zmínit to při revizi reportingu nebo při návrhu datového modelu nového obchodu. Je to nízká urgence a nulový implementační effort, jen kontrola nastavení definic v adminu. Před nabídkou je vhodné ověřit, že dané metaobject definice jsou v Settings pro Analytics zapnuté.

## Použití v Integrátoru

Funkce nevyžaduje žádnou změnu v synchronizačních tocích; je relevantní jen tehdy, když se při nasazení metaobjects a metafields počítá s reportingem, takže stojí za to zahrnout ji do checklistu datového modelu.
