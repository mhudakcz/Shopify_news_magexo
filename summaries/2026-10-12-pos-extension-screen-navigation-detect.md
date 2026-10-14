---
date: 2026-10-12
title: "POS UI extensions: detekce dokončení navigace mezi screens"
title_en: "Detect when a POS extension screen finishes navigating"
slug: pos-extension-screen-navigation-detect
zdroj: https://shopify.dev/changelog/posts/detect-when-a-pos-extension-screen-finishes-navigating
shrnuto_dne: 2026-10-14
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některá naše POS UI extension spouští po přechodu na jinou screen načtení dat, měření nebo přesun focusu, může místo odhadování času použít nový event navigatesuccess."
dotcene_klienty: []
souvisejici: [pos-extensions-background-target, pos-ui-extensions-staffmemberid-removed-2026-10, pos-ui-cart-mutations-reject-unconfirmed-2026-10]
tldr: "POS Navigation API má od API verze 2026-10 nový event navigatesuccess, který se spustí až po dokončení nativního přechodu na cílovou screen, takže na něj lze spolehlivě navázat akce po zobrazení screen."
tagy: [pos-extensions, navigation, lifecycle, hooks, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions mohou mít více screens a mezi nimi se pohybují přes POS Navigation API. Dosud bylo obtížné spolehlivě zjistit, kdy je cílová screen skutečně vidět. Event `currententrychange` se totiž může spustit dřív, než se screen dokončí zobrazit, a promise vrácený voláním `navigate()` na dokončení přechodu nečeká. Vývojáři proto museli používat okolní triky, například mount logiku v komponentě nebo vlastní ruční sledování stavu.

    Shopify v API verzi 2026-10 přidává do POS Navigation API event `navigatesuccess`. Spustí se ve chvíli, kdy cílová screen dokončí nativní přechod, a callback dostane standardní objekt Event. Je to tedy signál, že screen už je zobrazená a uživatel ji vidí. Pozor při navigaci zpět: obrazovka, ze které odcházíme, se odstraní, takže listener je potřeba registrovat na screen, která se po návratu znovu objeví.

    Změna nevyžaduje žádnou migraci a existující extensions se nijak nemění. Týká se extensions cílených na API verzi 2026-10, které běží na buildech POS s podporou tohoto eventu. Starší buildy POS event `navigatesuccess` nevysílají, takže pokud extension podporuje i starší POS, musí s jeho absencí počítat a mít záložní chování. Changelog neuvádí konkrétní use cases ani ukázkový kód, použití níže (počáteční načtení dat, analytika zobrazení screen, správa focusu) je odvozené z podstaty eventu.
  zdroje:
    - title: "Shopify: Detect when a POS extension screen finishes navigating"
      url: "https://shopify.dev/changelog/posts/detect-when-a-pos-extension-screen-finishes-navigating"
    - title: "Shopify: Changelog filtrovaný na POS Extensions"
      url: "https://shopify.dev/changelog?api_type=pos-extensions"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

POS Navigation API pro POS UI extensions dostává nový event `navigatesuccess`. Spustí se, jakmile cílová screen dokončí nativní přechod (native transition), a jeho callback dostane standardní `Event`.

Proč je to užitečné: stávající signály nejsou pro "screen je už vidět" spolehlivé.
- `currententrychange` se může spustit **dřív**, než se screen dokončí zobrazit.
- Promise vrácený z `navigate()` **nečeká** na dokončení přechodu, takže `await navigate(...)` neznamená, že je screen zobrazená.

Důležité pravidlo pro navigaci zpět: screen, ze které odcházíme, se odstraní. Listener proto patří na screen, která se po návratu znovu objeví, ne na tu opouštěnou.

Orientační tvar použití (ilustrativní, přesný zápis a typy je potřeba ověřit v dokumentaci POS Navigation API, changelog žádný kód neobsahuje):

```js
navigation.addEventListener('navigatesuccess', (event) => {
  // screen je zobrazená, přechod je dokončený
});
```

Změna je čistě aditivní. Žádná migrace není nutná a changelog ji neoznačuje jako vyžadující akci.

## Časová osa

- **28. 9. 2026** — poslední úprava textu changelogu před zveřejněním.
- **12. 10. 2026** — changelog zveřejněn a změna účinná, API verze 2026-10.
- **POS buildy bez podpory eventu** — `navigatesuccess` nevysílají. Extension, která má běžet i na nich, potřebuje záložní řešení.

## Dopad pro nás

**Pro vývojáře:** Pokud extension dnes po přechodu na jinou screen načítá data nebo spouští logiku v mount hooku či podle `currententrychange`, může to běžet příliš brzy, tedy ještě před dokončením přechodu. `navigatesuccess` je přesnější bod pro akce, které mají nastat až po zobrazení screen. Typicky jde o počáteční načtení dat po routingu, měření zobrazení screen (analytika) nebo správu focusu. Při zpětné navigaci je třeba registrovat listener na screen, která se vrací. Protože event vyžaduje API verzi 2026-10 a POS build s podporou, je rozumné ho přidat jako vylepšení s fallbackem, ne jako náhradu stávající logiky. Jde o jeden ze série drobných kroků v API 2026-10 (viz související odstranění `staffMemberId` a změny Cart API mutací), takže se vyplatí řešit je při jednom upgradu.

**Pro PM / PO:** Žádná akce není povinná a nic se nerozbije. Je to nízkoprioritní příležitost ke zlepšení kvality POS extensions, hlavně tam, kde uživatelé vidí prázdnou nebo skokovou screen po přechodu, případně kde nám nesedí analytická data z POS. Má smysl zařadit ji do backlogu u projektů, které už POS extensions mají nebo plánují upgrade na API 2026-10, ne ji řešit samostatně.

## Použití v Integrátoru

**Možná relevantní.** Pokud některý z našich projektů s POS obsahuje vlastní nebo zakázkovou POS UI extension s více screens, může `navigatesuccess` zpřesnit načítání dat a měření po přechodu. POS extensions dnes sami aktivně nevyvíjíme, takže jde spíš o doporučení pro budoucí POS práce.
