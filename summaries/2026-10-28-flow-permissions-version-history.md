---
date: 2026-10-28
title: "Shopify Flow — permissions (view/edit/activate) + version history (restore drafts)"
title_en: "Flow permissions + version history"
slug: flow-permissions-version-history
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímý dopad na kód nemáme, Editions u položky neuvádí žádné API. Pokud ale pro merchanty dodáváme vlastní Flow trigger nebo action extensions či workflow šablony, oprávnění určují, kdo je smí v obchodě upravit a aktivovat, a obnova starší verze jako draft může vrátit workflow, které odkazuje na starší podobu naší extension."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-operations", "flow-workflow-version-history-rollback", "staff-permissions-payments-payouts-disputes-tax"]
editions_release: fall-2026
tldr: "Editions Fall '26 uvádí dvě Flow položky pro týmové řízení automatizací: stávající role určují, kdo smí workflow zobrazit, upravit a aktivovat, a version history umožňuje starší verze zobrazit, porovnat a obnovit jako nový draft ke kontrole před aktivací. Stránka neuvádí plán, datum ani API. Merchantům s více lidmi ve Flow to řeší otázku kdo změnil nebo smazal workflow."
tagy: [shopify-flow, permissions, version-history, enterprise, automation, governance]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions Fall '26 (název Exponential) vyšlo 28. října 2026. V tématu Operations jsou čtyři položky o Shopify Flow a dvě z nich se týkají správy automatizací v týmu. První říká, že existující role a oprávnění se používají k řízení toho, kdo smí automatizace ve Flow zobrazit, upravit a aktivovat. Druhá říká, že u workflow lze starší verze zobrazit, porovnat a obnovit jako nový draft, který se před aktivací zkontroluje. Zbylé dvě Flow položky (triggery na změnu ceny, tagu nebo metafieldu a správa Flow přes AI Toolkit) jsou mimo rozsah tohoto článku. Žádná z Flow položek na stránce nemá štítek Soon, datum ani informaci o plánu.

    Shopify Flow je no-code automatizační nástroj přímo v administraci. Workflow se skládá z triggeru, volitelné podmínky a akcí a na produkčním obchodě může běžet řada workflow, které mění objednávky, tagy, inventář nebo posílají data do jiných systémů. Takové workflow může upravit kdokoli z týmu s přístupem k Flow, a protože workflow jedná bez dohledu, špatná změna se projeví až v následných objednávkách nebo datech. Typický provozní problém je pak vždy stejný: nikdo neví, kdo workflow změnil, kdy a co přesně se změnilo.

    Část odpovědi už v archivu je. Version history s atribucí (kdo verzi upravil, aktivoval nebo deaktivoval) a rollbackem jsme zachytili v červnu 2026 a oprávnění ve staff rolích se v adminu postupně zjemňují (například červencová granularita pro platby a výplaty). Editions k tomu přidává dvě věci, které archiv neznal: oprávnění přímo pro Flow a porovnání verzí s obnovou jako draft. Zdrojová stránka popisuje každou položku jednou větou, takže detaily (jak jemně se oprávnění dělí, zda jsou per workflow, a v jakých plánech funkce poběží) jsou zatím neověřené. Označení enterprise governance v tagu je náš výklad, Shopify toto slovo u položky nepoužívá.
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka, téma Operations)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Operations"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-operations/"
    - title: "Archiv: Flow version history a rollback"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-workflow-version-history-rollback/"
    - title: "Archiv: Nové staff permissions pro platby, výplaty, spory a daňové dokumenty"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/staff-permissions-payments-payouts-disputes-tax/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 v tématu Operations uvádí u Shopify Flow dvě položky, které dohromady odpovídají na otázku, kterou si vyslovují obchody s více lidmi v týmu: kdo smí naše automatizace měnit a jak se vrátit k verzi, která fungovala.

**1. Flow permissions.** Existující role a oprávnění v adminu se použijí k řízení toho, kdo smí automatizace ve Flow **zobrazit, upravit a aktivovat**. Z formulace plyne, že jde o tři oddělené úrovně: někdo workflow jen vidí, někdo ho smí upravit a někdo ho smí zapnout.

**2. Version history s obnovou jako draft.** U workflow lze starší verze **zobrazit, porovnat a obnovit** jako nový draft. Draft se před aktivací zkontroluje, takže obnovená verze nezačne hned běžet na produkčních datech.

V praxi z toho plyne:

- **Oddělení úprav od aktivace** — jedna role může workflow připravit a jiná ho schválit a zapnout. U workflow, které mění objednávky, inventář nebo posílají data ven, je to rozumná pojistka.
- **Menší riziko zásahu omylem** — kdo workflow nepotřebuje měnit, ho může jen zobrazit, případně ho nevidí vůbec.
- **Dohledatelnost změn** — porovnání verzí ukáže, co se v kterém kroku změnilo, a nemusí se hádat podle paměti.
- **Bezpečný návrat** — obnova jako draft dovoluje vrátit starší verzi, zkontrolovat ji (například proti dnešním triggerům a akcím) a teprve potom aktivovat.

**Co stránka neříká:**

- **Granularita oprávnění.** Zdroj mluví o stávajících rolích a oprávněních. Zda lze oprávnění nastavit per workflow, nebo jen globálně pro celý Flow, není uvedeno. Pro obchody s citlivými workflow (platby, B2B ceny) je to podstatný rozdíl.
- **Vztah k červnové version history.** V archivu máme [Flow version history a rollback](/Shopify_news_magexo/zmena/flow-workflow-version-history-rollback/), která popisuje historii (kdo verzi upravil, aktivoval, deaktivoval) a návrat k předchozí verzi jedním kliknutím. Editions popisuje porovnání a obnovu jako draft. Je pravděpodobné, že jde o rozšíření téže funkce, stránka to ale neříká, a není jasné, zda starý rollback jedním kliknutím zůstává, nebo ho nahrazuje obnova jako draft.
- **Dostupnost.** U žádné z těchto položek není plán, země, datum ani štítek Soon. Flow samotný je podle našeho archivu dostupný od plánu Basic, ale zda budou oprávnění a porovnání verzí k dispozici ve všech plánech, je třeba ověřit v nápovědě a v adminu.
- **API.** Stránka nezmiňuje žádné API pro čtení historie verzí ani oprávnění. Nic takového tedy nepředpokládáme.
- **Audit mimo Flow.** Editions neuvádí, zda se změny workflow propíšou do obecného activity logu v adminu.

## Časová osa

- **2026-06-04** — v archivu zachycena Flow version history s atribucí a rollbackem ([flow-workflow-version-history-rollback](/Shopify_news_magexo/zmena/flow-workflow-version-history-rollback/))
- **2026-07-07** — granulární staff permissions pro platby, výplaty, spory a daňové dokumenty ([staff-permissions-payments-payouts-disputes-tax](/Shopify_news_magexo/zmena/staff-permissions-payments-payouts-disputes-tax/))
- **2026-10-08** — zjednodušené lifecycle callbacky Flow trigger extensions, účinné od 29. 9. 2026 ([flow-trigger-lifecycle-callback-relative-urls](/Shopify_news_magexo/zmena/flow-trigger-lifecycle-callback-relative-urls/))
- **2026-10-28** — Editions Fall '26: Flow permissions a version history s obnovou jako draft ([editions-fall-2026-operations](/Shopify_news_magexo/zmena/editions-fall-2026-operations/)); datum dostupnosti neuvedeno

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné. Editions u položky neuvádí API ani scope, takže pro integrační kód se nemění nic. Tři věci stojí za ověření, všechny jsou naše úvahy a nikoli údaje ze zdroje:

- Pokud pro merchanty dodáváme **Flow trigger nebo action extensions**, oprávnění určují, kdo smí workflow s naší extension upravit a aktivovat. Při předávání projektu nebo onboardingu je tedy potřeba počítat s tím, že člověk s právem jen zobrazit workflow neaktivuje. Souvisí to s dřívějšími změnami u vývoje extensions (viz [lifecycle callbacky s relativními URL](/Shopify_news_magexo/zmena/flow-trigger-lifecycle-callback-relative-urls/)).
- **Obnova starší verze jako draft** může vrátit workflow, které odkazuje na starší podobu action nebo triggeru. Na vývojovém obchodě stojí za to vyzkoušet, jak se obnovená verze chová, když se mezitím změnilo schéma extension, a zda ji editor při obnově označí jako neplatnou.
- Pokud někde automatizujeme správu Flow přes agenta nebo nástroj (Editions zmiňuje správu Flow přes AI Toolkit jako samostatnou položku), dává kombinace oprávnění a draftu smysl: agent navrhne, člověk zkontroluje a aktivuje.

**Pro PM / PO:** Tohle je governance funkce a je nejužitečnější u obchodů, kde Flow používá více lidí nebo kde se na něm podílejí externí dodavatelé a agentura. Typický příběh je ten, který merchanti vyprávějí: workflow přestalo fungovat, nikdo neví proč, kdo ho změnil, a vrátit se k předchozímu stavu znamená přepisovat kroky podle paměti. Porovnání verzí a obnova jako draft na to dává odpověď, oprávnění zase omezují, kdo se k workflow vůbec dostane.

Doporučení bez ohledu na dostupnost:

- Udělat **audit rolí ve Flow**: kdo dnes může workflow upravit a aktivovat, a zda to odpovídá tomu, kdo to reálně dělá. Externí účty a agenturní přístupy jsou první kandidáti na omezení.
- Rozdělit workflow na **kritická** (platby, B2B ceny, inventář, odesílání dat do ERP) a **nekritická** a pro kritická zavést pravidlo, že aktivuje druhá osoba.
- Při ověřování na obchodě sledovat, jestli jde omezit i zobrazení, nebo jen úpravu a aktivaci. A jestli oprávnění platí per workflow.

Nalehavost je střední. Deadline žádný není a datum dostupnosti Shopify neuvádí. Audit rolí a pravidla pro schvalování ale lze udělat už teď a po spuštění funkce je jen zapnout.

## Použití v Integrátoru

**Možná** — nejde o API ani změnu kódu, ale pokud pro obchody dodáváme Flow extensions nebo workflow šablony, oprávnění a obnova verzí jako draft mění, kdo je smí upravit a aktivovat. Při onboardingu merchanta stojí za to doporučit nastavení rolí ve Flow.
