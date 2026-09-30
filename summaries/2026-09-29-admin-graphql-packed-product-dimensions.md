---
date: 2026-09-29
title: "Admin GraphQL: správa packed product dimensions (shipping accuracy)"
title_en: "Manage packed product dimensions with the Admin GraphQL API"
slug: admin-graphql-packed-product-dimensions
zdroj: https://shopify.dev/changelog/posts/manage-packed-product-dimensions-with-the-admin-graphql-api
shrnuto_dne: 2026-09-30
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2027-01"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud synchronizujeme produktová a inventory data z ERP/PIM, můžeme přes nová pole packedDimensions plnit rozměry balení a zpřesnit výběr krabice a dopravné při checkoutu i nákupu štítků."
dotcene_klienty: []
souvisejici: [lineitem-weight-public-admin-api, carrier-services-no-auto-shipping-profile, market-driven-shipping-admin-api]
tldr: "Admin GraphQL API 2027-01 umožňuje číst i zapisovat rozměry balení (délka, šířka, výška, jednotka) na inventory itemu, takže Shopify u vícepoložkových objednávek vybere nejmenší vhodnou uloženou krabici a přesněji spočítá sazby dopravců."
tagy: [admin-graphql-api, product, dimensions, shipping, packaging, dimensional-weight]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Přesnost dopravného u velkých a lehkých zásilek závisí na tom, jak dopravce počítá zpoplatněnou hmotnost. Řada přepravců (typicky mezinárodní expresní služby jako UPS nebo FedEx) účtuje vyšší z hodnot skutečné a dimensional (objemové) hmotnosti, která se odvozuje z rozměrů balíku. Pokud obchod nezná rozměry zabaleného zboží, musí Shopify při výpočtu sazby spoléhat na odhad nebo výchozí balík, a cena zobrazená v checkoutu se pak může lišit od skutečné ceny štítku.

    Shopify proto u inventory itemu zavádí údaj packed dimensions, tedy rozměry zboží v zabaleném stavu (délka, šířka, výška a jednotka). Nová pole jsou součástí typu InventoryItemMeasurement (pro čtení) a InventoryItemMeasurementInput (pro zápis), který v sobě používá vstupní typ ObjectDimensionsInput. Stejný objekt measurement už dnes nese i hmotnost položky, takže rozměry balení přibývají vedle existujících údajů o váze.

    Podle changelogu Shopify využije tato data tehdy, když jsou vyplněná u všech položek ve vícepoložkové objednávce. V takovém případě automaticky vybere nejmenší kompatibilní balík z uložených packages obchodu, a to jak při výpočtu carrier rates v checkoutu, tak při nákupu štítku. Když data chybí nebo se položky do žádného uloženého balíku nevejdou, Shopify se vrací k dosavadní logice výběru balíku. Změna je dostupná ve verzi Admin GraphQL API 2027-01.
  zdroje:
    - title: "Shopify: Manage packed product dimensions with the Admin GraphQL API"
      url: "https://shopify.dev/changelog/posts/manage-packed-product-dimensions-with-the-admin-graphql-api"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Admin GraphQL API ve verzi **2027-01** přidává možnost spravovat **packed dimensions** (rozměry zabaleného produktu) přímo na inventory itemu. Nová pole jsou tato:

- `InventoryItemMeasurement.packedDimensions` pro čtení,
- `InventoryItemMeasurementInput.packedDimensions` pro zápis, který používá vstupní typ `ObjectDimensionsInput`.

Údaj obsahuje **délku, šířku, výšku a jednotku**. Díky tomu mohou aplikace (např. PIM, ERP nebo WMS konektory a bulk-editační nástroje) rozměry balení načítat i hromadně nastavovat, místo aby je obchodník vyplňoval ručně produkt po produktu v adminu.

Praktický efekt na straně Shopify: pokud mají **všechny položky** ve vícepoložkové objednávce rozměry vyplněné, Shopify automaticky vybere **nejmenší kompatibilní balík** z uložených packages obchodu. Tento balík pak použije pro výpočet carrier rates v checkoutu i při nákupu štítku. Pokud jsou data neúplná nebo se zboží nevejde do žádného uloženého balíku, platí **původní logika** výběru balíku, takže změna nic nerozbíjí.

Poznámky k interpretaci:
- Changelog popisuje využití dat v checkoutu a při nákupu štítků. Neuvádí, že by se packed dimensions nově předávaly do callbacku třetích carrier services. Zda je takový service uvidí, je potřeba ověřit v dokumentaci.
- Přesná struktura polí uvnitř `ObjectDimensionsInput` a mutace, přes kterou se zápis provádí, je v referenci typů `InventoryItemMeasurementInput` a `ObjectDimensionsInput`. Před implementací si ji ověřte.
- Changelog neuvádí žádné nové OAuth scopes. Předpokládejte stávající scopes pro práci s inventory a produkty a ověřte v referenci.

## Časová osa

- **2026-09-29, 12:00 ET**: změna oznámena v dev-changelogu a uvedena jako dostupná ve verzi API 2027-01.
- **Verze 2027-01**: pole `packedDimensions` jsou součástí této verze. Stabilní vydání verze se podle kadence Shopify očekává na začátku ledna 2027, dřívější přístup bývá přes release candidate (ověřte u konkrétního obchodu).
- **Bez deadlinu**: jde o nový opt-in údaj. Nic se nemusí měnit v existujících integracích.

## Dopad pro nás

**Pro vývojáře:** Jde o additivní změnu, žádný breaking change. Pro synchronizační flow, které už dnes zapisují `measurement.weight`, dává smysl přidat i `packedDimensions` tam, kde máme v ERP/PIM spolehlivá data o rozměrech balení. Je třeba hlídat konzistenci jednotek (cm/in) mezi zdrojovým systémem a Shopify a počítat s tím, že benefit se projeví až tehdy, když jsou rozměry vyplněné u **všech** položek objednávky. Částečně vyplněný katalog nepřinese žádné zlepšení, protože Shopify se vrátí k původní logice. Před nasazením také ověřte, jak se chová read/write na verzi 2027-01 a zda se dotčené query nemusí verzovat odděleně od zbytku aplikace.

**Pro PM / PO:** Příležitost pro e-shopy, které expedují přes Shopify Shipping nebo počítají dopravné podle dopravců s objemovou hmotností (zejména balíky do zahraničí a objemnější zboží). Přesnější rozměry znamenají menší rozdíl mezi dopravným vybraným zákazníkem a skutečnou cenou štítku a menší ztráty na marži. Předpokladem je ale kvalitní data o rozměrech balení, což bývá u většiny katalogů slabé místo. Vhodné zařadit jako rozšíření existujícího datového auditu nebo importu produktů, nikoli jako samostatný projekt. Urgence je nízká a nic neshoří.

## Použití v Integrátoru

**Možná.** Pokud synchronizujeme katalog a inventory z ERP/PIM, lze `packedDimensions` doplnit k již zapisovaným údajům o hmotnosti. Předpokladem je dostupnost spolehlivých rozměrů balení ve zdrojovém systému a cílový obchod, který využívá Shopify Shipping nebo carrier-calculated rates. Bez těchto dvou podmínek přímý přínos nevidíme.
