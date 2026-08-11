---
date: 2026-07-31
title: "POS: nová pole pro cash management aktivity a drawers v Admin GraphQL"
title_en: "New fields for cash management activities and drawers in POS"
slug: pos-cash-management-drawers-fields
zdroj: https://shopify.dev/changelog/new-fields-for-cash-management-activities-and-drawers
shrnuto_dne: 2026-08-11
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-31

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-specific cash drawer/reconciliation feature, neděláme retail cash management integrace."
dotcene_klienty: []
souvisejici: [retail-cash-management-capabilities, pos-mid-session-cash-counts, cash-management-foundations-pos]
tldr: "Admin GraphQL API 2026-07 doplňuje CashDrawer.balance a CashCountActivity.note / reasonCode, takže apps mohou přes API číst aktuální zůstatek pokladny i důvod a poznámku ke každému cash countu."
tagy: [admin-graphql-api, pos, cash-management, drawers, reporting]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify postupně od začátku roku 2026 otevírá POS cash management přes Admin GraphQL API — nejprve přišel resource CashDrawer (API 2026-04) reprezentující fyzickou pokladní zásuvku, následně mid-session cash counts umožnily personálu počítat hotovost kdykoli během směny bez uzavření register session. Tento changelog zápis doplňuje do stejné rodiny objektů dvě konkrétní pole, která dosud v API chyběla.

    Na objektu `CashDrawer` přibylo pole `balance` typu `MoneyV2`, které vrací aktuální zůstatek v pokladní zásuvce přímo bez nutnosti sečítat jednotlivé cash aktivity ručně na straně klienta. Na objektu `CashCountActivity` přibyla dvě pole: `note` pro textový komentář zaměstnance zapsaný při počítání hotovosti a `reasonCode`, který aktivitu propojuje s merchant-defined kategorizací přes union typ `CashManagementReasonCode`.

    Cílem je zpřístupnit detailnější data o hotovostních operacích (otevření pokladny, vklady, výběry, denní uzávěrky) appkám, které dělají POS reporting nebo bookkeeping integrace. Dříve bylo možné přes API zjistit, že k cash aktivitě došlo, ale bez přímého zůstatku drawer a bez kontextu (proč, s jakou poznámkou) k jednotlivým cash countům — což nutilo vývojáře dopočítávat balance z historie transakcí nebo se spoléhat jen na Admin UI.
  zdroje:
    - title: "Shopify: New fields for cash management activities and drawers in POS"
      url: "https://shopify.dev/changelog/new-fields-for-cash-management-activities-and-drawers"
    - title: "Shopify Admin GraphQL: CashDrawer object"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/CashDrawer"
    - title: "Shopify Admin GraphQL: CashCountActivity object"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/CashCountActivity"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Admin GraphQL API (verze **2026-07**) doplňuje dvě existující POS cash management objekty o nová pole:

- **`CashDrawer.balance`** (`MoneyV2`) — aktuální zůstatek v pokladní zásuvce, dostupný přímo dotazem bez ručního sčítání jednotlivých aktivit.
- **`CashCountActivity.note`** — textová poznámka zaměstnance zapsaná při počítání hotovosti (např. vysvětlení rozdílu proti očekávané částce).
- **`CashCountActivity.reasonCode`** — propojení aktivity s merchant-defined kategorizací přes union typ `CashManagementReasonCode`.

Jde o rozšíření stejné rodiny resources, kterou Shopify buduje od dubna 2026 (`CashDrawer` resource, mid-session cash counts, reason codes pro pohyby hotovosti). Přístup je stále vázán na scope `read_cash_tracking`.

## Časová osa

- **2026-04** — CashDrawer resource a základní cash management API (Admin GraphQL 2026-04)
- **2026-04/05** — Cash Management Foundations, mid-session cash counts
- **2026-07-31** — přidána pole `CashDrawer.balance`, `CashCountActivity.note`, `CashCountActivity.reasonCode` (API 2026-07)

## Dopad pro nás

**Pro vývojáře:** Jde o čistě aditivní změnu schématu bez breaking changes — pokud queryujeme `CashDrawer` nebo `CashCountActivity`, nová pole se objeví jako opt-in v selection setu. Relevantní jen pro integrace s POS retail cash reconciliation (denní uzávěrky, napojení na účetnictví).

**Pro PM / PO:** Bez akce. Nejde o customer-facing změnu ani o nic, co ovlivní běžné e-commerce/headless projekty. Zmínit jen pokud klient provozuje retail s POS a chce vlastní cash reporting nad rámec Shopify Admin.

## Použití v Integrátoru

Nepoužíváme — nemáme POS-specific cash management ani reconciliation integrace. Pokud by v budoucnu vznikla poptávka na retail klienta s vlastním cash audit reportingem, tato pole (`balance`, `note`, `reasonCode`) jsou přesně to, co by takový report potřeboval.
