---
date: 2026-06-05
title: "Gift cards v lokální měně v Admin API 2026-07"
title_en: "Local currency support gift cards now available in the GraphQL Admin API"
slug: gift-card-local-currency
zdroj: https://shopify.dev/changelog/gift-card-local-currency-support
shrnuto_dne: 2026-06-08
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se gift card creation flow — relevantní pro klienty s multi-currency / multi-market setupem. Nová mutace giftCardProductSet a deprecace pole initialValue vyžadují update integrací pracujících s gift cards."
dotcene_klienty: []
souvisejici: [multi-currency-gift-cards, target-discounts-specific-markets, customize-checkout-accounts-by-market]
kontext:
  background: |
    Gift cards v Shopify jsou předplacené poukázky s určitou hodnotou, které zákazníci mohou využít při nákupu. Historicky byly gift cards vázané na základní měnu obchodu (shop currency) — karta vydaná v CZK mohla být uplatněna pouze v CZK transakci. Tento model fungoval bez problémů v prostředí jedné měny, ale nezohledňoval mezinárodní zákazníky ani obchody operující ve více zemích.

    Shopify Markets umožňuje prodávat do různých regionů v lokálních měnách a přizpůsobovat checkout každému trhu zvlášť. S rostoucím využíváním Markets se gift cards staly slabým místem multi-currency setupu: nebylo možné vydat kartu v eurech pro zákazníka v Německu, ani řídit, jak se uplatní v jiné měně, než ve které byla vydána. Poptávka po "local currency gift cards" přišla zejména od obchodníků s globálním dosahema retailových řetězců s více pobočkami.

    API verze 2026-07 přináší plnou podporu lokálních měn pro gift cards. Nová mutace `giftCardProductSet` umožňuje při vytváření produktu specifikovat `issuanceCurrency` (měna vydání) a příznak `crossCurrencyRedeemable` (zda lze kartu uplatnit v jiné měně). Systém pak automaticky aplikuje jednu ze tří strategií cross-currency redemption: `NONE` (karta není uplatnitelná mimo svou měnu), `MARKET_FX` (konverze přes tržní kurz pro karty bez fixní měny vydání), nebo `SPOT_FX` (spotový kurz pro karty s nastavenou issuanceCurrency). Pole `initialValue` je deprecováno ve prospěch `initialAmount`, které nese jak částku, tak měnu.
  zdroje:
    - title: "Shopify Changelog: Local currency gift cards in Admin API"
      url: "https://shopify.dev/changelog/gift-card-local-currency-support"
    - title: "Shopify Changelog: Sell gift cards in your customers' local currency (merchant)"
      url: "https://changelog.shopify.com/posts/sell-gift-cards-in-your-customers-local-currency"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6
tldr: "Admin API 2026-07 umožňuje vydat gift card v konkrétní lokální měně a nakonfigurovat, jak se karta chová při uplatnění v jiné měně (NONE / MARKET_FX / SPOT_FX). Nová mutace giftCardProductSet nahrazuje starší přístup; pole initialValue je deprecated ve prospěch initialAmount."
tagy: [gift-card, multi-currency, admin, markets]
zdroj_kanal: dev-changelog
---

## Co se mění

Od API verze **2026-07** (účinnost od 27. května 2026, zveřejněno 5. června 2026) přibývají v GraphQL Admin API tyto změny:

**Nová mutace:**
- `giftCardProductSet` — vytvoří nebo aktualizuje gift card produkt s nastavením měny

**Nová pole na gift card produktu:**
- `issuanceCurrency` — měna vydání gift card (nastavuje se pouze při vytvoření, poté není změnitelné)
- `crossCurrencyRedeemable` — příznak, zda lze kartu uplatnit v jiné měně než při vydání (rovněž neměnné po vytvoření)
- `Product.giftCardSettings` — query objekt pro čtení nastavení měny produktu

**Nová pole na jednotlivé gift card instanci:**
- `GiftCard.isRedeemable` — příznak aktuální uplatnitelnosti karty
- `GiftCard.crossCurrencyRedemptionStrategy` — zobrazuje strategii konverze (`NONE`, `MARKET_FX`, nebo `SPOT_FX`)

**Deprecace:**
- Pole `initialValue` je nahrazeno polem `initialAmount`, které nese jak částku, tak specifikaci měny.

## Časová osa

| Datum | Událost |
|---|---|
| 27. 5. 2026 | Funkce dostupná v API verzi 2026-07 |
| 5. 6. 2026 | Zveřejnění v developer changelogu |
| Před upgradem na 2026-07 | Nutná migrace `initialValue` → `initialAmount` |

Deprecace `initialValue` je vázána na upgrade na verzi 2026-07 — starší verze API nejsou dotčeny.

## Dopad pro nás

Pokud integrujeme gift cards v Admin API pro klienty s multi-currency nebo multi-market setupem, je třeba:

1. **Migrovat `initialValue` → `initialAmount`** před upgradem na API 2026-07. Nové pole nese strukturu `{amount, currencyCode}` namísto čistého čísla.
2. **Aktualizovat gift card creation flow** — nová mutace `giftCardProductSet` přebírá roli starého přístupu; je třeba ověřit kompatibilitu s existujícími skripty.
3. **Zpracovat `crossCurrencyRedemptionStrategy`** v redemption flow — pokud klientský obchod uplatňuje gift cards přes více trhů, systém vrací strategii konverze, kterou by měla integrace respektovat (např. při zobrazení zůstatku karty v lokální měně zákazníka).

Pokud klient nevyužívá multi-currency ani Markets, změna nemá bezprostřední dopad — ale migrace `initialValue` je povinná při každém upgradu verze API.

## Použití v Integrátoru

Gift card flow se v integrátoru typicky dotýká:
- **Order sync** — gift card jako platební metoda na objednávce (pole `paymentGateway`, `giftCardUsages`)
- **Product sync** — gift card produkt při exportu/importu katalogu

Pro klienty s aktivním multi-currency Marketsem je vhodné ověřit, zda jejich gift card produkty mají správně nastavenu `issuanceCurrency` a zda redemption flow počítá s hodnotami `crossCurrencyRedemptionStrategy`. Bez tohoto nastavení mohou karty vydané v jedné měně selhat při uplatnění zákazníkem v jiném trhu.
