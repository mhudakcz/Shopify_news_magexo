---
date: 2026-08-21
title: "Checkout: signed-in customer vidí předvyplněný last-used payment method"
title_en: "Checkout now defaults to last used payment method for signed-in customers"
slug: checkout-default-last-used-payment-method
zdroj: https://changelog.shopify.com/posts/checkout-now-defaults-to-last-used-payment-method-for-signed-in-customers
shrnuto_dne: 2026-08-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta řešíme checkout customizace nebo reporting nad platebními metodami, je dobré vědět, že výchozí volba platby už není vždy ta první v pořadí, ale poslední použitá — ovlivňuje to očekávané chování při testování a QA."
dotcene_klienty: []
souvisejici: [checkout-email-field-saved-indicator, flow-automatic-charging-vaulted-payments, payment-method-identifier-required]
tldr: "Checkout teď přihlášeným zákazníkům automaticky předvyplní naposledy použitou platební metodu — bez nutné konfigurace na straně merchanta."
tagy: [checkout, payment-method, ux, conversion, signed-in-customers, personalization]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify od 21. srpna 2026 mění výchozí chování checkoutu pro přihlášené zákazníky: pokud má zákazník uložené platební metody, checkout mu automaticky předvybere tu, kterou použil naposledy, místo aby nabízel obecné výchozí pořadí nebo prázdný formulář. Funkce se týká jak D2C checkoutu (uložené platební metody v zákaznickém účtu), tak B2B checkoutu (vaulted cards).

    Jde o čistě automatický rollout bez jakékoli konfigurace na straně merchanta — není potřeba nic zapínat v administraci, upravovat theme ani checkout extensions. Podmínkou je pouze to, že merchant má povolené ukládání platebních metod (saved payment methods) pro daný typ checkoutu. Pokud zákazník žádnou uloženou metodu nemá, chování checkoutu se nemění.

    Motivace je zřejmá: opakovaní zákazníci (repeat buyers) tak ušetří jeden klik při placení, což je typický lever na snížení checkout frictionu a mírné zlepšení conversion rate u vracejících se zákazníků. Shopify podobné drobné UX optimalizace kolem plateb a přihlášených účtů zavádí průběžně (viz saved email indicator z června 2026 nebo práce na vaulted payments u B2B).
  zdroje:
    - title: "Shopify: Checkout now defaults to last used payment method for signed-in customers"
      url: "https://changelog.shopify.com/posts/checkout-now-defaults-to-last-used-payment-method-for-signed-in-customers"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Checkout nově pro přihlášené (signed-in) zákazníky automaticky předvyplní platební metodu, kterou zákazník použil naposledy — místo výchozího pořadí nebo prázdného výběru. Platí to jak pro standardní D2C checkout s uloženými platebními metodami v zákaznickém účtu, tak pro B2B checkout s vaulted cards.

Podmínkou je, že merchant má saved payment methods vůbec povolené — pokud ne, nebo pokud zákazník ještě žádnou metodu neuložil, checkout se chová jako dosud. Žádná akce na straně merchanta není potřeba: rollout je automatický a bez nastavení v administraci nebo v theme/checkout extensions.

Efekt je hlavně na straně UX a conversion — repeat buyer ušetří jeden krok navíc při placení, což snižuje friction v checkoutu bez jakéhokoli technického zásahu.

## Časová osa

- **21. 8. 2026** — funkce je live, automatický rollout pro signed-in customers s uloženou platební metodou (D2C i B2B)

## Dopad pro nás

**Pro vývojáře:** Žádná nutná úprava kódu ani konfigurace. Pokud stavíme vlastní checkout UI extensions, které pracují s payment methods (např. custom payment method picker), je dobré vzít v potaz, že výchozí předvyplněná hodnota se teď může lišit od dosavadních předpokladů — stojí za to projít QA scénáře pro repeat buyers a ověřit, že žádná vlastní logika nespoléhá na fixní pořadí nebo "první metodu v seznamu" jako výchozí stav.

**Pro PM / PO:** Jde o pasivní vylepšení bez nutnosti komunikace směrem ke klientovi — nic se neplatí, nic se nekonfiguruje. Může se hodit jako drobný argument v diskuzi o conversion rate optimalizaci u klientů s vysokým podílem opakovaných nákupů, protože jde o standardní Shopify UX vylepšení, které funguje "samo".

## Použití v Integrátoru

Přímý dopad na naši práci je minimální — jde o nativní chování checkoutu bez API plochy k integraci. Relevantní je to hlavně jako kontext při ladění QA scénářů kolem plateb a při komunikaci s klienty o tom, proč se výchozí platební metoda v checkoutu může měnit mezi objednávkami.
