---
date: 2026-10-22
title: "POS UI extensions: reactive storage access (shopify.storage.current)"
title_en: "POS UI extensions now support reactive storage access"
slug: pos-ui-extensions-reactive-storage
zdroj: https://shopify.dev/changelog/posts/pos-ui-extensions-now-support-reactive-storage-access
shrnuto_dne: 2026-10-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-19
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme psát POS UI extension s více targety, například background target plus smart grid tile, reaktivní storage zjednoduší předávání stavu mezi targety bez pollingu."
dotcene_klienty: []
souvisejici: [pos-extensions-background-target, pos-ui-extensions-offline, pos-extension-screen-navigation-detect]
tldr: "POS UI extensions mají od API verze 2026-10 reaktivní přístup k úložišti přes shopify.storage.current, takže se UI samo aktualizuje, když jiný target změní uloženou hodnotu."
tagy: [pos-ui-extensions, reactive, storage, signals, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions mají k dispozici Storage API (shopify.storage), tedy jednoduché lokální úložiště typu klíč-hodnota na zařízení s POS. Data jsou uložená v odděleném prostoru patřícím dané extension, hodnoty se automaticky serializují do JSON a nad úložištěm fungují metody get, set, delete, entries a clear. Podle dokumentace data přežijí navigaci, změny košíku i restart zařízení a po 30 dnech bez zápisu se automaticky smažou. Storage API patří také mezi API, která jsou dostupná v offline režimu POS extensions.

    Dosavadní model byl čistě asynchronní. Extension si hodnotu přečetla voláním get a o pozdější změně se nedozvěděla. Pokud tedy jeden target (typicky background target) uložil nová data a jiný target (například dlaždice na smart gridu) je zobrazoval, musel druhý target hodnotu znovu číst nebo ji pravidelně dotazovat a stav si udržovat ručně. Changelog právě odstranění opakovaných čtení a pollingu uvádí jako hlavní přínos.

    Nově je každý klíč dostupný přes shopify.storage.current jako read-only reaktivní signal. Signal má vlastnost value a metodu subscribe, která vrací funkci pro odhlášení odběru. Zápisy a mazání zůstávají beze změny přes set a delete, ale zápis provedený jiným targetem téže extension na stejném zařízení spustí odběratele a komponenta se překreslí. Funkce je dostupná jen pro extensions cílené na API verzi 2026-10 nebo novější a nevyžaduje žádnou migraci. Důležitá drobnost: hodnoty se načítají asynchronně, takže value je do dokončení načtení undefined a kód musí počítat i s tímto stavem a s chybějícími klíči.
  zdroje:
    - title: "Shopify: POS UI extensions now support reactive storage access"
      url: "https://shopify.dev/changelog/posts/pos-ui-extensions-now-support-reactive-storage-access"
    - title: "Shopify dev docs: Storage API (POS UI extensions 2026-10)"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/2026-10/target-apis/platform-apis/storage-api"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

POS UI extensions dostávají **reaktivní přístup k úložišti**. Objekt `shopify.storage.current` zpřístupňuje každý klíč jako read-only signal s vlastností `.value` a metodou `subscribe()`. Můžete tedy buď přečíst aktuální hodnotu klíče, nebo se přihlásit k odběru změn, které provedly jiné targety téže extension na stejném POS zařízení.

Příklad z dokumentace, podle kterého se hodnota čte přímo v komponentě:

```js
const loyaltyCustomer = shopify.storage.current.loyaltyCustomer.value;
```

Dlaždice (tile) se pak sama překreslí, když jiný target, třeba background target, tuto hodnotu přepíše. Dokumentace u použití v Preactu odkazuje na import `@shopify/ui-extensions/preact`, přesné napojení na komponenty je proto vhodné ověřit v referenci Storage API.

Co zůstává stejné:
- **Zápis a mazání** se dál dělá přes `shopify.storage.set()` a `shopify.storage.delete()`. Signály jsou jen pro čtení.
- **Existující metody** (`get`, `set`, `delete`, `entries`, `clear`) fungují beze změny.
- **Omezení úložiště** platí dál: podle dokumentace maximálně 100 položek na extension, klíč zhruba do 1 KB a hodnota zhruba do 1 MB. Hodnoty musí být serializovatelné do JSON.

Dvě věci stojí za upřesnění, protože v interních podkladech se objevily jinak:
- **Žádný `useStorage` hook.** Changelog ani dokumentace takový hook neuvádějí. Reaktivita je řešená přes `shopify.storage.current` (signals), nikoli přes samostatný hook.
- **Úložiště není vázané na session.** Data jsou perzistentní na zařízení, přežijí navigaci, změny košíku i restart a mažou se až po 30 dnech bez zápisu (čtení časovač neobnovuje). Pojem session data v dokumentaci znamená jen přežití navigace a změn košíku.

Praktický scénář, který Shopify uvádí: background target stáhne a uloží věrnostní body zákazníka a smart grid tile se po změně hodnoty sama aktualizuje, bez opakovaných čtení a bez pollingu.

## Časová osa

- **13. 10. 2026** — změna vytvořena v Shopify changelogu.
- **19. 10. 2026** — datum účinnosti (effective date).
- **22. 10. 2026** — changelog zveřejněn, funkce dostupná v API verzi 2026-10.
- **Starší API verze** — `shopify.storage.current` použít nelze, extension musí cílit na 2026-10 nebo novější.
- **Bez migrace** — stávající Storage API funguje dál, nová funkce je čistě doplňková a Shopify ji neoznačuje jako vyžadující akci.

## Dopad pro nás

**Pro vývojáře:** Pokud má extension více targetů, které si předávají stav přes storage (typicky background target zapisuje, tile nebo screen čte), dá se ruční polling nebo opakované čtení nahradit odběrem přes `shopify.storage.current`. Při implementaci je nutné ošetřit stav `undefined` (klíč se ještě načítá nebo neexistuje) a počítat s tím, že odběr reaguje na zápisy jiných targetů, ne na vlastní lokální stav. Odběr přes `subscribe()` je potřeba po použití odhlásit pomocí vrácené funkce. Využití je podmíněno API verzí 2026-10, takže dává smysl řešit ho v rámci stejného upgradu jako ostatní změny téže verze, například nový event `navigatesuccess` nebo background target. Neověřená zůstává otázka, zda a jak se data sdílejí mezi více zařízeními. Dokumentace o tom nic neuvádí, takže nelze předpokládat synchronizaci mezi pokladnami.

**Pro PM / PO:** Žádná akce není povinná a nic se nerozbije. Jde o nízkoprioritní vylepšení pro vývojáře, které zjednoduší kód a zlepší odezvu UI u POS extensions s více targety. Má smysl ho zohlednit v odhadech u projektů, které POS extensions už mají nebo plánují, například pro zobrazení věrnostních bodů nebo jiných dat načítaných na pozadí. Samostatný projekt kvůli tomu zakládat nemá smysl.

## Použití v Integrátoru

**Možná relevantní.** POS UI extensions dnes sami aktivně nevyvíjíme, takže jde o podklad pro budoucí POS práce. Pokud bychom psali extension kombinující background target a UI target, dá se reaktivní storage použít k předávání stavu bez vlastního pollingu.
