---
date: 2026-08-21
title: "Bulk staff setup přes CSV import — hromadné vytvoření/pozastavení/reaktivace staff accountů"
title_en: "Bulk staff setup with CSV import"
slug: bulk-staff-setup-csv-import
zdroj: https://changelog.shopify.com/posts/bulk-staff-setup-with-csv-import
shrnuto_dne: 2026-08-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Relevantní pro projekty s velkým počtem staff/POS účtů (retail chains) — může ušetřit ruční onboarding při implementaci nebo migraci klienta."
dotcene_klienty: []
souvisejici: [unified-pos-staff-management, staff-permissions-payments-payouts-disputes-tax, staff-attribution-pos-improvements]
tldr: "Shopify přidal do Settings > Users bulk import — jedním CSV souborem lze hromadně vytvořit, pozastavit nebo reaktivovat staff accounty pro admin i POS."
tagy: [staff, csv-import, bulk-operations, onboarding, admin, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Do teď se staff accounty v Shopify admin vytvářely a spravovaly jednotlivě — merchant musel projít formulářem pro každého nového zaměstnance zvlášť, přiřadit mu roli, případně PIN pro POS, a totéž zopakovat i při odchodu zaměstnance (suspend) nebo návratu (reactivate). U menších týmů to nevadí, ale u retailových řetězců s desítkami až stovkami zaměstnanců, sezónním náborem nebo rychlou expanzí do nových poboček je to výrazná manuální zátěž.

    Nová funkce přidává do Settings > Users sekci Import, kam lze nahrát CSV soubor s definicí hromadné operace. Podporované akce jsou create (založení nového účtu, včetně přiřazení PINu pro POS), suspend (pozastavení účtu) a reactivate (obnovení pozastaveného účtu). Funkce pokrývá jak admin, tak POS staff accounty, takže funguje napříč typy provozu. Shopify přímo v rozhraní nabízí ke stažení vzorový CSV template, podle kterého merchant strukturu souboru připraví.

    Shopify explicitně jmenuje tři use-case scénáře: sezónní nábor (seasonal hiring), otevření nové pobočky (store expansion) a rychlé offboardování (fast offboarding) — tedy situace, kdy je potřeba udělat víc staff změn najednou, rychle a bez chyb z ručního zadávání. Jde o čistě administrativní vylepšení admin UI, bez nové GraphQL/REST API mutace — automatizace hromadného onboardingu tedy zatím zůstává doménou merchant-side CSV nahrávání přes admin, ne API integrace.
  zdroje:
    - title: "Shopify: Bulk staff setup with CSV import"
      url: "https://changelog.shopify.com/posts/bulk-staff-setup-with-csv-import"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify admin nově umožňuje v Settings > Users > Import nahrát CSV soubor a jedním krokem provést hromadnou operaci nad staff accounty: vytvořit nové účty (s možností rovnou přiřadit PIN pro POS), pozastavit existující uživatele nebo znovu aktivovat dříve pozastavené účty. Funkce funguje pro admin i POS staff, takže ji lze použít napříč celým provozem, ne jen v jednom kanálu. K dispozici je i stažitelný vzorový CSV, podle kterého merchant připraví vlastní soubor ve správném formátu.

Cílem je zrychlit situace, kdy je potřeba měnit staff nastavení hromadně a rychle — typicky sezónní nábor brigádníků, otevření nové pobočky s novým týmem, nebo naopak rychlé odebrání přístupů při konci sezóny či hromadném offboardingu. Jde o vylepšení admin UI, žádná nová GraphQL/REST mutace zatím k dispozici není.

## Časová osa

- 2026-08-21 — funkce zveřejněna v Shopify changelogu, dostupná v Settings > Users > Import

## Dopad pro nás

**Pro vývojáře:** Nejde o API novinku — nemění se GraphQL/REST schema ani webhooks kolem staff accountů. Relevantní je to spíš jako informace pro klienta/PM: pokud řešíme onboarding retail klienta s větším počtem prodejen nebo migraci ze systému, kde měl klient staff data v tabulce, dá se to teď nahrát přes tento CSV import místo ručního zakládání účtů jeden po druhém.

**Pro PM / PO:** Užitečné zmínit klientům s POS provozem, sezónním personálem (retail, e-commerce se skladem) nebo plánovanou expanzí do nových poboček — ušetří jim to čas při najíždění nových zaměstnanců i při konci sezóny. Nejde o nic, co bychom měli implementovat, spíš o merchant-facing zlepšení, na které můžeme klienta upozornit v rámci provozní podpory.

## Použití v Integrátoru

Přímo nevyužíváme — jde o admin UI funkci bez API dopadu na naše napojení. Může se hodit jako doporučení klientovi při onboardingu nebo migraci s větším počtem staff/POS účtů.
