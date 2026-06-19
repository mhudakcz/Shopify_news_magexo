---
date: 2026-06-17
title: "Bulk queries v Admin GraphQL API nyní až 4× rychlejší"
title_en: "Bulk queries now execute up to 4X faster"
slug: bulk-queries-4x-faster
zdroj: https://shopify.dev/changelog/bulk-queries-now-execute-faster
shrnuto_dne: 2026-06-19
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor při synchronizaci produktů, objednávek nebo inventáře s ERP využívá bulk operations pro hromadný export dat — toto zrychlení přímo zkracuje dobu synchronizačních jobů."
dotcene_klienty: []
souvisejici:
  - "admin-web-vitals-dev-dashboard"
  - "editions-spring-2026-operations"
  - "editions-spring-2026-developer"
tldr: "Shopify optimalizoval interní zpracování bulk queries v Admin GraphQL API — exporty velkých datasetů jsou nyní až 4× rychlejší bez jakékoli změny na straně vývojáře."
tagy: [bulk-operations, admin-api, performance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Bulk operations jsou standardní mechanismus Admin GraphQL API pro práci s velkými objemy dat. Na rozdíl od běžných GraphQL dotazů, které jsou synchronní a limitované stránkováním, bulk operations probíhají asynchronně na straně Shopify — výsledek je zapsán do souboru JSONL, který si aplikace stáhne po dokončení. Jde o doporučený způsob exportu tisíců či milionů záznamů (produkty, objednávky, zákazníci, metafields apod.).

    Shopify průběžně investuje do výkonu platformy, aby snížil zátěž na aplikace i infrastrukturu. Tato konkrétní optimalizace zasahuje do interního pipeline zpracování bulk queries na straně Shopify — vývojáři žádnou část kódu měnit nemusí a přínos dostávají automaticky.

    Praktický dopad je přímočarý: synchronizační joby, které dříve trvaly například 4 hodiny, by nyní mohly skončit za hodinu. To snižuje riziko zastaralých dat v externích systémech, zkracuje okna synchronizace a může otevřít možnost spouštět exporty častěji tam, kde to dřív nebylo ekonomicky únosné z hlediska doby běhu.
  zdroje:
    - title: "Shopify: Bulk queries now execute up to 4X faster"
      url: "https://shopify.dev/changelog/bulk-queries-now-execute-faster"
  generated_at: 2026-06-19T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify optimalizoval interní zpracování bulk queries v rámci Admin GraphQL API. Výsledkem je, že exporty velkých datasetů jsou nyní **až 4× rychlejší** oproti předchozímu stavu.

Změna se projevuje automaticky — vývojáři nemusí upravovat žádný kód, mění se žádné API rozhraní, ani není nutná migrace. Stávající implementace bulk operations profitují z optimalizace ihned.

Bulk operations obecně fungují tak, že aplikace spustí asynchronní job (`bulkOperationRunQuery`), Shopify zpracuje dotaz na pozadí a výsledek uloží jako soubor JSONL dostupný přes URL. Aplikace průběžně dotazuje stav jobu (nebo naslouchá webhook `BULK_OPERATIONS_FINISH`) a po dokončení soubor stáhne. Celý tento mechanismus zůstává beze změny — pouze se zkracuje čas, který Shopify potřebuje ke zpracování.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Optimalizace nasazena, dostupná pro všechny |

Žádné deprecation ani breaking changes nejsou součástí tohoto update. Jedná se o čistě výkonnostní vylepšení.

## Dopad pro nás

Pro vývojáře Shopify aplikací a integrací jde o pozitivní změnu bez jakékoliv práce navíc. Konkrétní přínosy:

- **Kratší doba synchronizačních jobů** — exporty dat do ERP, WMS nebo analytických nástrojů proběhnou rychleji
- **Nižší riziko time-out a souběhů** — kratší běh jobu snižuje pravděpodobnost, že data mezitím zmutují
- **Možnost zvýšit frekvenci synchronizace** — tam, kde dřív bránila dlouhá doba exportu, může být nyní reálné spouštět joby častěji
- **Stejné API rozhraní** — žádná změna v kódu nutná

Pro aplikace, které bulk operations nevyužívají (pracují pouze se synchronními stránkovanými dotazy), tato změna nemá vliv.

## Použití v Integrátoru

Integrátor při synchronizaci katalogových dat, objednávek nebo zákazníků s externími systémy (ERP, PIM, WMS) typicky volí bulk operations pro hromadné exporty — jde o jediný praktický způsob, jak dostat z Shopify store desítky tisíc záznamů bez throttlingu.

Toto zrychlení přímo zkracuje dobu synchronizačních jobů. Žádná změna kódu není potřeba — přínos je automatický. Pokud jsou v Integrátoru definovány timeouty nebo monitoring pro bulk operation joby, může být vhodné tato nastavení přezkoumat a případně zpřesnit očekávané doby běhu.
