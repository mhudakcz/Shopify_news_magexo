---
date: 2026-09-28
title: "POS: cycle a full stock counts přímo v POS (approve v Admin)"
title_en: "Run stock counts in POS"
slug: pos-run-stock-counts
zdroj: https://changelog.shopify.com/posts/run-inventory-counts-in-pos
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Schválená inventura v Admin mění on-hand množství, takže se dotkne každé synchronizace skladu s ERP nebo WMS u retail obchodníků s POS Pro."
dotcene_klienty: []
souvisejici: [physical-inventory-feature-preview, pos-multiple-barcodes-per-variant, pos-activity-log-high-risk-actions]
tldr: "Personál prodejny teď může provádět inventury skladu přímo v Shopify POS (scan, count, submit), zatímco plánování, kontrola rozdílů a schválení zůstávají v Admin; vyžaduje POS Pro a verzi 11.16 nebo novější."
tagy: [pos, inventory, stock-counts, cycle-count, retail, admin-workflow]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Fyzická inventura na prodejně byla dlouho mimo Shopify. Obchodníci si tiskli seznamy produktů, počítali zboží na papír nebo v tabulkách a výsledky pak ručně přepisovali do Admin jako úpravy množství. Proces byl pomalý, náchylný na překlepy a bez spolehlivé stopy o tom, kdo a kdy konkrétní číslo napočítal. V červenci 2026 Shopify ukázal v unstable Admin GraphQL API preview primitiv pro fyzický sklad včetně counts, ale šlo o vývojářský signál, ne o hotovou funkci pro obchodníky.

    Novinka tuto mezeru zaplňuje na straně merchantů. V Admin oprávněný uživatel vytvoří a naplánuje stock count, vybere lokaci a produkty, které se mají počítat, a count se automaticky objeví v POS v sekci Products > Stock counts. Personál s inventory oprávněním ho otevře, naskenuje čárové kódy nebo zadá množství ručně a hotový count odešle ke kontrole. Odeslání z POS samo o sobě inventář neaktualizuje, jde pouze o podklad pro review.

    Kontrolu a finální rozhodnutí drží Admin. Oprávněný uživatel zde vidí rozdíly mezi napočítaným a systémovým stavem a teprve schválením se na inventář aplikují úpravy. Shopify uvádí audit trail s časem a identifikací pracovníka. Funkce vyžaduje předplatné POS Pro a Shopify POS ve verzi 11.16 nebo novější, včetně příslušných inventory a approval oprávnění. Zdrojový post výslovně nerozlišuje cycle count a full count jako dva samostatné režimy, obojí tedy chápeme jako způsob použití stejného nástroje (částečný výběr produktů versus celá lokace).
  zdroje:
    - title: "Shopify: Run stock counts in POS"
      url: "https://changelog.shopify.com/posts/run-inventory-counts-in-pos"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS nově umí provádět inventury skladu přímo na zařízení na prodejně. Workflow je rozdělené mezi dvě role a dvě místa:

- **Admin (plánování):** oprávněný uživatel vytvoří a naplánuje stock count, zvolí lokaci a produkty, které se budou počítat. Count se poté automaticky zobrazí v POS pod Products > Stock counts.
- **POS (počítání):** pracovník s inventory oprávněním count otevře, zapisuje množství skenováním čárových kódů nebo ručním zadáním a hotový count odešle ke kontrole.
- **Admin (review a approve):** oprávněný uživatel zkontroluje rozdíly mezi napočítaným a systémovým stavem a count schválí. Teprve schválením se na inventář aplikují úpravy.

Důležitý detail: **odeslání countu z POS nemění inventory quantities okamžitě.** Do schválení v Admin je count jen návrh. Shopify k tomu uvádí audit trail s časovým razítkem a identifikací pracovníka, který count provedl.

Funkce je vázaná na tarif **POS Pro** a na **Shopify POS v11.16 a novější**. Pro práci s countem jsou potřeba konkrétní inventory a approval oprávnění, takže není nutné, aby každý pracovník na prodejně mohl měnit sklad.

Zdrojový post nerozlišuje cycle count (průběžná kontrola části sortimentu) a full stock count (celá lokace) jako dva samostatné typy. V praxi je ale rozdíl dán tím, jaký rozsah produktů a lokace obchodník v Admin při vytvoření countu zvolí.

## Časová osa

- **2026-09-28** — zveřejněno na Shopify merchant changelogu, funkce dostupná.
- **Shopify POS v11.16+** — minimální verze aplikace, na které se Stock counts zobrazí.
- **POS Pro** — nutné předplatné na prodejně, kde se inventura provádí.

## Dopad pro nás

**Pro vývojáře:** Post neoznamuje žádnou novou API metodu ani změnu schématu, takže není co migrovat. Týká se nás nepřímo: schválení countu změní on-hand množství, a tedy ovlivní každý systém, který inventář synchronizuje (ERP, WMS, feedy pro marketplace). Dokud je count jen odeslaný a neschválený, sklad se nemění, což je výhodné, protože neschválené rozdíly se do navazujících systémů nedostanou. Je vhodné při prvním nasazení u obchodníka ověřit, jak se schválená inventura projeví v inventory událostech, které naše synchronizace sleduje, a zda úprava po schválení nekoliduje s jinými zdroji pravdy o skladu. Souvisí to také s dříve zveřejněným preview primitiv physical inventory v unstable Admin API, které zatím zůstává mimo produkční použití.

**Pro PM / PO:** Jde o novou příležitost pro retail obchodníky s kamennými prodejnami, kteří dnes dělají inventury na papíře nebo v tabulkách. Můžeme ji nabídnout jako zjednodušení provozu a jako argument pro přechod na POS Pro. Při konzultaci stojí za to hlídat tři věci: nastavení oprávnění (kdo smí počítat a kdo schvalovat), kvalitu čárových kódů u produktů (skenování funguje jen tak dobře, jak jsou čistá data, pomáhá i podpora více barcodes na variantu) a pravidla, co dělat s většími rozdíly před schválením. Urgence je nízká, nic se nerozbije ani nevyprší.

## Použití v Integrátoru

Přímý dopad na naši integraci nemáme, funkce je čistě na straně POS a Admin. Relevantní je u obchodníků, kterým synchronizujeme sklad s externím systémem, protože schválená inventura bude novým zdrojem změn on-hand množství.
