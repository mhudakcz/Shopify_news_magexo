---
date: 2026-09-28
title: "Category metafields v Analytics — barva, materiál, střih jako dimenze"
title_en: "Category metafields are now available in Analytics"
slug: analytics-category-metafields-dimensions
zdroj: https://changelog.shopify.com/posts/category-metafields-are-now-available-in-analytics
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o čistě merchantské nastavení v Analytics bez API změn; pokud ale naše synchronizace produktů plní standard category metafields (barva, materiál, střih), kvalita a konzistence těchto hodnot přímo určuje, jak použitelné nové reporty budou."
dotcene_klienty: []
souvisejici: [location-metafields-analytics-dimensions, shopify-analytics-full-stack-app-platform, analytics-shipping-duty-profitability]
tldr: "Standard category metafields jako barva, materiál, střih, tkanina nebo velikost jsou nově v Shopify Analytics dimenzemi i filtry, takže merchant může seskupit report podle produktového atributu bez exportu dat a bez vlastní taxonomie."
tagy: [analytics, category-metafields, dimensions, filters, product-attributes]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Analytics dosud umožňoval členit data podle produktů, variant, kategorií, zákazníků nebo objednávek, ale atributy, které merchant k produktům vyplňuje v rámci kategorizace (barva, materiál, střih, tkanina, velikost, aktivita), v reportech jako samostatná osa chyběly. Kdo chtěl zjistit, jestli se lépe prodávají černé, nebo béžové kousky, nebo jaký střih generuje nejvíc tržeb, musel data exportovat do tabulky nebo BI nástroje, případně si zavádět vlastní tagy a custom metafieldy čistě pro účely reportingu.

    Nová funkce zpřístupňuje category metafields v Analytics jako dimensions a filters. Podle changelogu lze sales report seskupit podle Color, Material, Fit, Fabric, Size, Activity nebo jakéhokoli jiného category metafieldu, případně report omezit na vybrané hodnoty atributu. Dimenze jsou dostupné napříč Reports, Explore i v query editoru, takže je lze použít jak v hotových přehledech, tak v ad-hoc dotazech.

    Podstatný je detail s více hodnotami: pokud má produkt pro jeden atribut několik hodnot (například dvě barvy), zobrazí se společně na jednom řádku, aby se prodej nezapočítal vícekrát. Funkce se zapnula automaticky u existujících obchodů s kategorizovanými produkty, workflow kategorizace ani chování custom metafieldů se nemění a changelog nezmiňuje žádná omezení podle tarifu ani žádné API změny. Navazuje na dlouhodobou snahu Shopify stavět reporting i vyhledávání nad standardizovanými produktovými atributy místo volných tagů.
  zdroje:
    - title: "Shopify: Category metafields are now available in Analytics"
      url: "https://changelog.shopify.com/posts/category-metafields-are-now-available-in-analytics"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify zpřístupnil **category metafields** (standardní produktové atributy vázané na kategorii produktu) v Analytics jako **dimensions a filters**. Merchant tak může bez exportu dat odpovědět na otázku, které atributy skutečně táhnou prodej.

**Co nově jde:**
- Seskupit sales report podle **Color, Material, Fit, Fabric, Size, Activity** nebo jiného category metafieldu dané kategorie.
- **Filtrovat** report na konkrétní hodnoty atributu (například jen určitý materiál nebo střih).
- Použít atributy ve všech třech místech Analytics: v **Reports**, v **Explore** i v **query editoru**.

**Jak se chovají produkty s více hodnotami:** pokud má produkt u jednoho atributu víc hodnot (například dvě barvy), zobrazí se na jednom řádku společně. Díky tomu se prodej nepočítá dvakrát a součty zůstávají konzistentní.

**Co se nemění:** kategorizace produktů funguje stejně jako dřív a custom metafieldy se chovají beze změny. Zapnutí není potřeba, funkce se objevila automaticky u obchodů, které mají kategorizované produkty.

Changelog explicitně mluví o sales reportu. Zda lze stejné dimenze použít i v přehledech zásob nebo marží, post nespecifikuje, takže to stojí za ověření přímo v jednotlivých reportech a ve schématu query editoru (přesné názvy polí v ShopifyQL post neuvádí).

## Časová osa

- **2026-09-28** — změna zveřejněna v merchant changelogu a dostupná automaticky u obchodů s kategorizovanými produkty.
- **Bez deadline** — nejde o deprecation, žádná migrace ani povinná akce.

## Dopad pro nás

**Pro vývojáře:** Post nezmiňuje žádné API změny, nové scopes ani migrace, takže není co upravovat v kódu. Praktický dopad je nepřímý: užitečnost nových reportů závisí na tom, jak kvalitně a konzistentně jsou u produktů vyplněné category metafields. Pokud produkty vznikají nebo se aktualizují přes import či synchronizaci, vyplatí se ověřit, že se atributy plní do standardních category metafields (a ne jen do tagů nebo custom metafieldů) a že hodnoty nejsou roztříštěné (například duplicitní varianty téže barvy). Pro ad-hoc dotazy je dobré zkontrolovat, jak se nové dimenze jmenují v query editoru.

**Pro PM / PO:** Jde o nízko urgentní, ale přínosnou příležitost. Fashion, home nebo beauty merchanti se štíhlým katalogem dostávají nativní odpověď na otázky typu co se prodává podle barvy, materiálu nebo střihu, a to bez BI nástroje a bez vlastní taxonomie. Je to dobrý argument při konzultacích o kvalitě produktových dat: čistě vyplněné atributy teď zlepšují nejen filtry na storefrontu, ale i interní reporting. Doporučení je zmínit funkci při auditech produktových dat a u merchantů, kteří dnes exportují prodeje do tabulek kvůli segmentaci podle atributů.

## Použití v Integrátoru

Pokud produktový import nebo synchronizace plní standard category metafields, má smysl u merchantů ověřit konzistenci hodnot atributů, protože ta teď přímo určuje kvalitu nativních reportů. Jinak jde o čistě merchantskou funkci bez nutnosti zásahu do kódu.
