---
date: 2026-10-02
title: "Shopify Admin: nové jazyky Arabic, Urdu, Hebrew (RTL podpora)"
title_en: "Admin now supports 3 new languages"
slug: admin-3-new-languages-rtl
zdroj: https://changelog.shopify.com/posts/admin-now-available-in-3-new-languages
shrnuto_dne: 2026-10-06
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-02
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Bez API dopadu; relevantní jen pokud spravujeme custom theme, checkout nebo customer account komponenty pro obchody mířící na arabsky, urdsky či hebrejsky mluvící trhy."
dotcene_klienty: []
souvisejici: [shopify-payments-uae-advanced-plan, localized-address-fields-br-ph-kw-pe-pa, automatic-hreflang-toggle-admin]
tldr: "Shopify Admin je nově dostupný v Arabic, Urdu a Hebrew a s tím přichází plná RTL (right-to-left) podpora i na storefrontu včetně checkoutu, customer accounts a témat Horizon. Display language se určuje podle nastavení zařízení."
tagy: [admin, i18n, localization, rtl, arabic, urdu, hebrew]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    RTL (right-to-left) jazyky se píší zprava doleva a vyžadují nejen přeložené texty, ale i zrcadlené rozvržení rozhraní: navigace, ikony se směrem, zarovnání textu, pořadí sloupců v tabulkách nebo směr progress barů. Arabic, Urdu a Hebrew patří mezi nejrozšířenější RTL jazyky a pokrývají velké trhy na Středním východě, v jižní Asii a v Izraeli. Dosud byly ve Shopify Admin podporovány omezeně, takže merchanti a jejich zaměstnanci z těchto regionů museli administraci používat v jiném jazyce, typicky v angličtině.

    Podle changelogu Shopify rozšířil podporu RTL jazyků napříč platformou. Týká se jak administrace (Admin), tak storefrontů, a to výslovně včetně checkoutu, customer accounts a kolekce témat Horizon. Jazyk zobrazení se určuje podle nastavení zařízení uživatele, pokud je k dispozici. Obsah řízený merchantem, například stránky produktů, zůstává v jazycích, které si majitel obchodu sám nakonfiguroval. Překlad produktových stránek lze zapnout přes aplikaci Translate & Adapt v Shopify Admin.

    Souvislost s širším směřováním je zřejmá: Shopify v posledních měsících investuje do Middle East trhu (například Shopify Payments v UAE nově i na plánu Advanced, lokalizovaná adresní pole pro Kuvajt). Plná RTL podpora je logickým krokem, protože platební infrastruktura bez použitelného admin rozhraní a storefrontu v místním jazyce by pro tamní merchanty přínos výrazně omezovala. Changelog je klasifikovaný jako Improvement a neuvádí žádnou migraci ani breaking change.
  zdroje:
    - title: "Shopify: Admin now supports 3 new languages"
      url: "https://changelog.shopify.com/posts/admin-now-available-in-3-new-languages"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Admin je nově dostupný ve třech dalších jazycích: **Arabic**, **Urdu** a **Hebrew**. Všechny tři jsou RTL (right-to-left), takže změna nejde jen o překlad textů, ale i o zrcadlené rozvržení rozhraní. Podle changelogu se RTL podpora týká administrace i storefrontů, výslovně včetně **checkoutu**, **customer accounts** a kolekce témat **Horizon**.

Jazyk zobrazení se určuje automaticky podle nastavení zařízení uživatele, pokud je k dispozici. Obsah řízený merchantem, například produktové stránky, zůstává v těch jazycích, které si majitel obchodu nastavil sám. Překlady produktových stránek lze aktivovat přes aplikaci **Translate & Adapt** v Shopify Admin. Jazyky se konfigurují v nastavení Languages v administraci.

Changelog neuvádí žádné API změny, žádné nové GraphQL pole ani webhook a neobsahuje konkrétní pokyny pro vývojáře témat nad rámec zmínky o kompatibilitě s Horizon.

## Časová osa

- 2026-10-02 — Shopify changelog: Admin dostupný v Arabic, Urdu a Hebrew, RTL podpora napříč Admin a storefronty (checkout, customer accounts, Horizon)
- Přesné datum dokončení rolloutu changelog neuvádí

## Dopad pro nás

**Pro vývojáře:** Bez API povrchu, jde o čistě lokalizační změnu platformy. Praktický dopad je u custom theme kódu a vlastních komponent. Horizon a checkout/customer accounts RTL zvládají nativně, ale starší nebo custom témata, vlastní sekce, snippety a app embed bloky mohou v RTL vypadat rozbitě. Následující body jsou naše doporučení z obecných RTL zásad, nikoli informace z changelogu:

- Preferovat CSS logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`) místo pevných `left` / `right`.
- Otestovat zrcadlení ikon se směrem (šipky, carousely, breadcrumbs) a směr animací či posuvníků.
- Ověřit smíšený obsah: čísla, SKU, URL a e-maily uvnitř RTL textu se mohou vykreslit v nečekaném pořadí.
- Zkontrolovat fonty, zda mají kvalitní glyfy pro arabské, urdské (včetně nastaliq stylu) a hebrejské písmo.

**Pro PM / PO:** Nízká naléhavost a bez dopadu na stávající obchody v CZ/SK nebo EU trzích. Jde o novou příležitost pro merchanty, kteří uvažují o expanzi na Middle East nebo na urdsky či hebrejsky mluvící publikum. V kombinaci s rozšířením Shopify Payments v UAE a lokalizovanými adresními poli pro Kuvajt se tento region stává reálnějším cílem. Pokud takový projekt přijde, je nutné do rozsahu zahrnout RTL testování custom komponent a zajištění překladů obsahu, protože automaticky se překládá jen rozhraní platformy, nikoli merchantem spravovaný obsah.

## Použití v Integrátoru

Bez přímého API dopadu, jde o lokalizaci admin rozhraní a storefrontu. Užitečné jako reference při plánování obchodů pro Middle East trhy a při testování custom theme komponent v RTL režimu.
