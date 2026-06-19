---
date: 2026-06-17
title: "Aktualizovaný disclosure pro subscription nákupy v checkout"
title_en: "Updated disclosure for subscription purchases on Checkout"
slug: subscription-disclosure-checkout-update
zdroj: https://changelog.shopify.com/posts/updated-disclosure-for-subscription-purchases-on-checkout
shrnuto_dne: 2026-06-18
kategorie: [fyi, deprecation]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient provozuje subscription produkty, změna disclosure textu v checkoutu se ho přímo dotýká jako merchantská úprava v Shopify Admin."
dotcene_klienty: []
souvisejici:
  - "create-unpaid-orders-subscription-billing"
  - "actor-field-subscription-billing"
  - "appliesonsubscription-default-true-app-discounts"
tldr: "Shopify od 22. června 2026 automaticky zobrazí aktualizovaný disclosure text pro subscription nákupy v checkoutu; merchanté bez vlastní customizace dostanou nový výchozí text, přičemž jsou k dispozici čtyři nové translation keys pro úpravu."
tagy: [subscription, checkout, disclosure, compliance, i18n]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Subscription disclosure je povinná informace zobrazená zákazníkovi v checkoutu při nákupu opakujícího se předplatného. Informuje kupujícího o podmínkách předplatného ještě před dokončením objednávky — typicky obsahuje popis frekvence plateb, možnosti zrušení a souhlas s podmínkami. Shopify tuto disclosure spravuje jako součást standardního checkout flow.

    Shopify průběžně vylepšuje výchozí texty v checkoutu tak, aby odpovídaly aktuálním právním požadavkům a osvědčeným postupům v oblasti transparentnosti vůči zákazníkům. Tato úprava je součástí širší snahy udržet buyer experience konzistentní a srozumitelnou napříč různými trhy a jazyky.

    Od 22. června 2026 se výchozí disclosure automaticky aktualizuje pro všechny merchanty, kteří dosud neprovedli vlastní customizaci textu v Checkout settings. Merchant, který má vlastní nastavení, není automaticky ovlivněn — musí si sám zvolit, zda nový text přijme. Změna je tedy merchant-facing (zákazník vidí jiný text), ale nevyžaduje žádnou developerskou akci.

    Shopify zároveň přidává čtyři nové translation keys, které umožňují merchantům (nebo partnerům spravujícím jejich store) přesněji přizpůsobit disclosure vlastní značce nebo lokálním jazykovým požadavkům: „Purchase options subscription agreement label", „Purchase options subscription consent text", „Purchase options subscription cancellation instructions" a „Purchase options subscription cancel text".
  zdroje:
    - title: "Shopify: Updated disclosure for subscription purchases on Checkout"
      url: "https://changelog.shopify.com/posts/updated-disclosure-for-subscription-purchases-on-checkout"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify aktualizuje výchozí disclosure text zobrazovaný zákazníkům při nákupu subscription produktů v checkoutu. Cílem je udržet informace pro kupující přesné, aktuální a konzistentní.

Součástí změny jsou čtyři nové translation keys dostupné v Checkout settings:

- **Purchase options subscription agreement label** — nadpis/označení sekce souhlasu
- **Purchase options subscription consent text** — text souhlasu s podmínkami předplatného
- **Purchase options subscription cancellation instructions** — instrukce pro zrušení předplatného
- **Purchase options subscription cancel text** — text tlačítka nebo odkazu pro zrušení

Tyto klíče jsou přístupné v Shopify Admin v sekci Checkout settings a umožňují merchantům překládat nebo přizpůsobovat texty bez nutnosti zásahu do kódu.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Oznámení změny, nové translation keys dostupné |
| 2026-06-22 | Automatické nasazení nového výchozího disclosure pro merchanty bez vlastní customizace |

## Dopad pro nás

Změna je čistě na úrovni merchant configu v Shopify Admin — nevyžaduje žádnou úpravu kódu ani API integrace. Merchanté, kteří mají subscription produkty a dosud neupravili disclosure text, dostanou 22. června automaticky novou výchozí verzi.

Pro klienty s vlastní jazykovou mutací (CZ/SK) nebo specifickým textem podmínek může být vhodné zkontrolovat, zda stávající překlady stále platí, nebo zda je potřeba doplnit překlad nových translation keys.

## Použití v Integrátoru

Integrátor sám o sobě není přímo dotčen — jde o Admin-level změnu bez API dopadu. Nicméně pokud klient provozuje subscription produkty a má lokalizovaný checkout, je vhodné ho informovat o nových translation keys a případně pomoci s přeložením a nastavením textů v Checkout settings před 22. červnem 2026.
