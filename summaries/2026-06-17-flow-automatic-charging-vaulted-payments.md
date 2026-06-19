---
date: 2026-06-17
title: "Flow: automatické nabíjení vaulted payment methods pro B2B objednávky"
title_en: "Flow: Automatic charging for vaulted payment methods (B2B)"
slug: flow-automatic-charging-vaulted-payments
zdroj: https://changelog.shopify.com/posts/flow-automatic-charging-for-vaulted-payment-methods
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme B2B objednávky s platebními podmínkami, tato Flow akce může sloužit jako automatizační vrstva pro inkasování splatných pohledávek bez ručního zásahu."
dotcene_klienty: []
souvisejici:
  - "ach-payments-b2b"
  - "dynamic-payment-terms-deposits-b2b"
  - "flow-action-extensions-relative-paths"
tldr: "Shopify Flow získal novou akci pro automatické strhávání plateb z uložených platebních metod (kreditní karta nebo bankovní účet) u B2B objednávek s platebními podmínkami."
tagy: [flow, b2b, payments, vaulted-cards, automation]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Flow je nativní automatizační nástroj, který obchodníkům umožňuje spouštět akce na základě triggerů a podmínek bez nutnosti psát kód. V B2B kontextu slouží zejména pro řízení workflow kolem objednávek od firemních zákazníků, kteří typicky nakupují na fakturu s odloženou splatností (tzv. payment terms — například Net 30 nebo Net 60).

    Vaulted payment methods (česky uložené platební metody) jsou předautorizované platební nástroje uložené v trezoru Shopify Payments — obvykle kreditní karta nebo bankovní účet zákazníka. Zákazník s nimi souhlasí jednou a obchodník je může použít pro opakované nebo odložené platby bez nutnosti znovu procházet platební bránou.

    Nová Flow akce "Charge vaulted payment for B2B order" propojuje obě funkcionality: když nastane splatnost B2B objednávky s platebními podmínkami, Flow může automaticky strhnout platbu z kreditní karty nebo bankovního účtu zákazníka na file — zcela bez manuálního zásahu obchodníka nebo zákazníka. To eliminuje ruční práci při vymáhání pohledávek a zrychluje cash flow B2B operací.

    Tato funkce zapadá do širšího trendu Shopify rozšiřovat automatizační schopnosti pro B2B segment, který byl v posledních vydáních obohacen o ACH platby, dynamické platební podmínky s deposity a store credit. Automatické inkaso přes Flow je logickým završením tohoto cyklu — obchodník nastaví podmínky jednou a platby se sbírají samy.

  zdroje:
    - title: "Shopify: Flow: Automatic charging for vaulted payment methods (B2B)"
      url: "https://changelog.shopify.com/posts/flow-automatic-charging-for-vaulted-payment-methods"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify Flow přidává novou akci **"Charge vaulted payment for B2B order"**. Tato akce umožňuje automaticky strhnout platbu z uložené platební metody zákazníka — kreditní karty nebo bankovního účtu — ve chvíli, kdy B2B objednávka s payment terms dosáhne splatnosti.

Podporované typy uložených platebních metod:
- **Kreditní karta** (vaulted credit card)
- **Bankovní účet** (vaulted bank account — ACH)

Workflow se konfiguruje standardně v Flow editoru bez nutnosti vlastního kódu. Akci lze kombinovat s dalšími triggery a podmínkami — například strhávat platbu přesně v den splatnosti nebo s určitým předstihem.

## Časová osa

| Datum | Událost |
|---|---|
| 17. 6. 2026 | Funkce dostupná v Shopify Flow |

## Dopad pro nás

Tato akce je relevantní výhradně pro B2B merchanty, kteří:
1. Používají Shopify's native payment terms (Net 30, Net 60 apod.)
2. Mají zákazníky s vaulted payment methods v Shopify Payments
3. Chtějí automatizovat inkaso splatných pohledávek

Pro naše projekty, které nestaví na native B2B payment terms, je dopad minimální. U merchantů s aktivním B2B segmentem to může snížit manuální práci finance oddělení a zrychlit cash flow.

## Použití v Integrátoru

Pokud integrujeme B2B objednávky a platební workflow, tato Flow akce může fungovat jako automatizační vrstva pro inkasování splatných pohledávek. Integrátor by nemusel implementovat vlastní logiku pro sledování splatnosti — Flow to obstará nativně.

Konkrétní využití závisí na tom, zda daný merchant používá Shopify's native payment terms a zda jeho zákazníci mají uložené platební metody v systému. Při návrhu B2B řešení stojí za zvážení, zda tuto nativní funkci preferovat před custom implementací.
