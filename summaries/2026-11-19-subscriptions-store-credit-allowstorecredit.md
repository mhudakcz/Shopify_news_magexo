---
date: 2026-11-19
title: "Subscriptions teď umí store credit (flag `allowStoreCredit`)"
title_en: "Subscriptions now support store credit with allowStoreCredit"
slug: subscriptions-store-credit-allowstorecredit
zdroj: https://shopify.dev/changelog/posts/subscriptions-now-support-store-credit-with-allowstorecredit
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: customer-account
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-11-19
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud u klientů s předplatným a store creditem řešíme platbu kreditem, nyní stačí povolit `allowStoreCredit` přes Customer Account API místo vlastního workaroundu."
dotcene_klienty: []
souvisejici: []
tldr: "Předplatné může být placeno store creditem, pokud merchant povolí nový flag `allowStoreCredit` v subscription flow (Customer Account API)."
tagy: [subscriptions, store-credit, customer-account-api, loyalty, payments]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Subscription (předplatné) v Shopify je opakovaný nákup, kdy je zákazník v pravidelných intervalech automaticky obsluhován a platba se strhává z uložené platební metody. Store credit je zůstatek zákazníka u konkrétního obchodu, který lze použít jako platidlo, typicky z vratek, dárků nebo věrnostních odměn. Spojení obou je užitečné, protože zákazník může opakované dodávky hradit z nasbíraného kreditu, což posiluje loyalty programy. Flag `allowStoreCredit` se nastavuje v subscription flow v Customer Account API.
  zdroje:
    - title: "Shopify: Subscriptions now support store credit with allowStoreCredit"
      url: "https://shopify.dev/changelog/posts/subscriptions-now-support-store-credit-with-allowstorecredit"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify rozšířil subscription flow v Customer Account API o flag `allowStoreCredit`. Pokud merchant flag povolí, může být předplatné placeno store creditem zákazníka, a nikoli pouze kartou nebo například Apple Pay. Změna platí od 19. 11. 2026.

Novinka je nízce naléhavá, jde o rozšíření možností, nikoli o breaking change. Stávající předplatné fungují beze změny.

## Dopad pro nás

**Pro vývojáře:** Pokud máme u klienta vlastní subscription portal nebo vlastní řešení správy předplatného, vyplatí se doplnit podporu flagu. Zjednoduší to flow „platím předplatné z kreditního zůstatku“ a odpadne případný workaround, který jsme si dosud museli postavit sami.

**Pro PM / PO:** U klientů s loyalty programem, kde kombinují předplatné a store credit, odpadá potřeba custom řešení. Lze nabídnout věrnostní mechaniku, v níž zákazník nasbírané odměny rovnou utrácí za opakované dodávky. Doporučujeme při dalším kontaktu ověřit, kteří klienti takový scénář mají nebo plánují.

## Použití v Integrátoru

Možné. Pokud v Integrátoru synchronizujeme stav předplatného nebo zůstatek store creditu, je třeba ověřit, zda se platba z kreditu správně promítá do synchronizovaných dat (zůstatek, stav a platební metoda předplatného). Konkrétní dotčení klienti zatím nejsou identifikováni.
