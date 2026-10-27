---
date: 2026-10-23
title: "🚀 Rollouts — scheduled + staged catalog changes (A/B product deploys)"
title_en: "Schedule and test catalog changes with Rollouts"
slug: rollouts-schedule-test-catalog-changes
zdroj: https://changelog.shopify.com/posts/schedule-and-test-catalog-changes-with-rollouts
shrnuto_dne: 2026-10-27
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-23
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Katalogy spravujeme přes Admin API, takže plánované přepnutí katalogu v Rollouts může změnit stav, který naše synchronizace očekává; samotné UI v adminu ale nic v našem kódu nemění."
dotcene_klienty: []
souvisejici: [rollouts-queries-webhooks-admin-graphql, rollouts-discounts-schedule-and-test, improved-catalog-publishing]
tldr: "Rollouts nově zvládnou plánovat a testovat změny katalogů v online store: v daný čas aktivovat, deaktivovat nebo přepnout existující katalogy, porovnat nabídky mezi katalogy a spustit je společně s theme a checkout změnami v jednom rolloutu."
tagy: [rollouts, catalog, scheduled-changes, staging, a-b-testing, products]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Rollouts je nástroj v Shopify administraci (sekce Markets › Rollouts), který obchodníkům umožňuje plánovat, postupně nasazovat a testovat změny bez ručního přepínání v konkrétní čas. Začínal v březnu 2026 u změn storefront theme, v červnu 2026 se rozšířil o checkout a customer account konfigurace, v září 2026 dostal přepracovaný setup flow s multi-change podporou a conflict review a na začátku října 2026 přibyly slevy a read-only přístup přes Admin GraphQL API. Katalogy do této vrstvy zatím nepatřily.

    Shopify katalogy jsou nativní mechanismus pro správu dostupnosti produktů a cen pro různé trhy (Markets) a skupiny kupujících. Dokud nebyly součástí Rollouts, znamenala příprava sezónní akce nebo nového ceníku buď ruční úpravy v nočních hodinách, nebo vlastní skripty a aplikace, které katalog přepnuly v pravý okamžik. Podle changelogu lze nyní katalogy v Rollouts připravit předem, naplánovat jejich aktivaci nebo deaktivaci na konkrétní datum a čas, případně přepnout mezi již existujícími katalogy.

    Changelog z 23. října 2026 je stručný a popisuje tři věci: plánování změn katalogu, testování různých nabídek jako experiment mezi katalogy v online store a možnost spustit změny katalogu společně se změnami theme a checkoutu v jednom rolloutu. Nezmiňuje API, plány ani tiery, ani to, jak se experiment měří nebo dělí návštěvnost; odkazuje na nápovědu k Rollouts. Důležité je, že Rollouts pracují na úrovni celých katalogů, ne jednotlivých produktových úprav, takže jiné kombinace dostupnosti a cen je potřeba nejdřív vytvořit jako samostatné katalogy. Související vývojářský changelog z 1. října navíc uvádí, že API verze 2026-10 umí číst změny zdrojů včetně katalogů, takže stav rolloutu je k dispozici i programově, zatím jen pro čtení.
  zdroje:
    - title: "Shopify: Schedule and test catalog changes with Rollouts"
      url: "https://changelog.shopify.com/posts/schedule-and-test-catalog-changes-with-rollouts"
    - title: "Shopify Help: Rollouts"
      url: "https://help.shopify.com/en/manual/markets-new/rollouts"
    - title: "Archiv: Rollouts — queries + webhooks v Admin GraphQL API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-queries-webhooks-admin-graphql/"
    - title: "Archiv: Rollouts — scheduling + testing discounts spolu s theme/checkout změnami"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-discounts-schedule-and-test/"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify **Rollouts** nově podporují **změny katalogů**. Podle changelogu lze v Rollouts plánovat dostupnost produktů a ceny per market, takže merchant může katalogy připravit před promo akcí nebo sezónním launchem a sám určit, kdy půjdou živě. Konkrétně:

- **Scheduling** — existující katalog lze v nastavený den a čas aktivovat, deaktivovat, nebo přepnout na jiný katalog
- **Testování nabídek** — mezi katalogy v online store lze spustit experiment a porovnat různé nabídky
- **Společný launch** — změny katalogu lze naplánovat tak, aby se spustily spolu se změnami theme a checkoutu v jednom rolloutu

Dostupné v Shopify administraci (Markets › Rollouts). Dosud museli merchanti měnit katalogy ručně mimo špičku nebo používat vlastní skripty a aplikace.

Co changelog **neříká**: neuvádí, jak přesně se experiment měří a dělí (například procento návštěvnosti), nepopisuje žádné API pro zápis rolloutů s katalogy, nezmiňuje dostupnost podle plánu ani regionální omezení a nezmiňuje ani collections nebo metafields jako samostatně plánovatelné změny. Rollouts tu pracují s **celými existujícími katalogy**, ne s jednotlivými produktovými úpravami. Pokud chce merchant testovat jinou cenu nebo jinou dostupnost, musí si pro ni nejdřív vytvořit samostatný katalog. Podrobnosti je třeba ověřit v nápovědě k Rollouts.

## Časová osa

- **2026-03-31** — Rollouts spuštěn pro storefront/theme změny (scheduling + A/B testy)
- **2026-06-05** — rozšíření na checkout a customer account konfigurace
- **2026-09-22** — přepracovaný setup flow (intent-based timing, multi-change, conflict review)
- **2026-10-01** — read-only queries a webhooky v Admin GraphQL API 2026-10 (scope `read_rollouts`), slevy v Rollouts
- **2026-10-02** — merchant changelog k slevám v Rollouts (schedule a test spolu s theme a checkoutem)
- **2026-10-23** — změny katalogů v Rollouts (scheduling, testy mezi katalogy, společný launch s theme a checkoutem)

## Dopad pro nás

**Pro vývojáře:** Jde o merchant-facing funkci v adminu, žádný kód se nerozbíjí a nic není nutné implementovat. Pozor ale na to, že se stav katalogu (aktivní nebo neaktivní, který katalog platí pro daný market) může měnit sám podle plánu rolloutu, bez jediného volání z naší strany. Pokud synchronizace nebo app předpokládá, že ceny a dostupnost v katalogu odpovídají tomu, co sama naposledy zapsala, může u obchodů s aktivními Rollouts narazit na drift. Související článek o Rollouts queries a webhooks v Admin GraphQL API uvádí, že rollouty včetně změn katalogů jdou číst (scope `read_rollouts`, po přijetí webhooku doporučený refetch). Přesný tvar dat pro změny katalogů a případné re-autorizace je potřeba ověřit v API referenci; tento changelog je neřeší.

**Pro PM / PO:** Reálná příležitost pro sezónní kampaně a změny ceníků per market, bez nočního ručního přepínání a bez vlastních skriptů. Hodí se zejména před Black Friday a Vánoci: připravit katalog s akční nabídkou, naplánovat start a konec a spustit ho spolu s novým theme a checkoutem v jednom rolloutu. Experiment mezi katalogy dává možnost ověřit cenovou nebo sortimentní nabídku před plným nasazením. Je ale potřeba počítat s tím, že test běží v online store, takže u obchodů s dalšími prodejními kanály (POS, B2B) se výsledek nemusí přenést na celý prodej. Nalehavost je střední: nejde o povinnou změnu, ale kdo chce funkci využít v sezóně, měl by ji vyzkoušet v předstihu a ověřit si omezení v nápovědě.

## Použití v Integrátoru

**Možná** — naše integrace pracuje s katalogy přes Admin API a plánované přepínání katalogů v Rollouts jí může změnit očekávaný stav; jde o to počítat s tím u obchodů, kde Rollouts běží, a případně využít nové read-only queries a webhooky.
