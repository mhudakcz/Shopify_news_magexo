---
date: 2026-10-07
title: "POS UI extensions 2026-10: cart mutations odmítají unconfirmed writes (breaking)"
title_en: "Cart mutations reject unconfirmed writes in POS UI extensions 2026-10"
slug: pos-ui-cart-mutations-reject-unconfirmed-2026-10
zdroj: https://shopify.dev/changelog/posts/cart-mutations-reject-unconfirmed-writes-in-pos-ui-extensions-2026-10
shrnuto_dne: 2026-10-08
kategorie: [breaking-change]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některá naše POS UI extension volá Cart API mutace a přejde na API verzi 2026-10, musí každé volání obalit ošetřením rejectu, jinak se při nepotvrzeném zápisu přeruší zbytek handleru."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-2026-07-per-unit-discounts, pos-ui-extensions-staffmemberid-removed-2026-10, release-notes-2026-10]
tldr: "Od API verze 2026-10 se promise u Cart API mutací v POS UI extensions odmítne, pokud POS nepotvrdí změnu košíku; dřív se vyřešila vždy, takže appka mohla tiše zobrazit slevu, která se ve skutečnosti neaplikovala."
tagy: [pos-extensions, cart, mutations, breaking, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions umožňují appkám zasahovat do košíku v Shopify POS přes Cart API: přidávat a odebírat slevy, měnit řádky, přiřazovat zákazníka nebo nastavovat vlastnosti a selling plany řádků. Appka zavolá mutaci (například applyCartDiscount nebo setCustomer) a vrácený promise by měl říct, zda se změna opravdu projevila.

    Ve verzích do 2026-07 to takhle ale nefungovalo. Promise se vyřešil bez ohledu na to, zda POS zápis skutečně aplikoval. Pokud POS změnu zahodil, například proto, že pokladní mezitím přešel k platbě a košík už nešel upravovat, appka se o tom nedozvěděla a mohla uživateli ukazovat slevu nebo poplatek jako uplatněný, přestože se košík nezměnil. Šlo o tichou chybu, která se těžko odhalovala a promítala se do částek na účtence.

    Verze 2026-10 tohle chování mění: mutace nově vrací rejected promise, pokud POS nepotvrdí, že se košík změnil. Změna je breaking, protože existující kód, který s rejectem nepočítá, se dostane do větve, kterou dřív nikdy neprošel. Aplikuje se per extension podle deklarované api_version, nikoli per store, takže extensions na 2026-07 a starších zůstávají beze změny. Navazuje na předchozí breaking změny POS UI extensions v téhle řadě verzí, například na přechod na per-unit fixed-amount slevy v 2026-07 a odstranění staffMemberId ze Session API v 2026-10.
  zdroje:
    - title: "Shopify: Cart mutations reject unconfirmed writes in POS UI extensions 2026-10"
      url: "https://shopify.dev/changelog/posts/cart-mutations-reject-unconfirmed-writes-in-pos-ui-extensions-2026-10"
    - title: "Shopify: 2026-10 Release notes"
      url: "https://shopify.dev/changelog/release-notes/2026-10"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

V POS UI extensions s API verzí **2026-10** se Cart API mutace **odmítnou (reject)**, pokud Shopify POS nepotvrdí, že se košík skutečně změnil. Dřív se promise vyřešil vždy, i když POS zápis neprovedl, a appka tak mohla zobrazit slevu nebo poplatek jako aplikovaný, přestože košík zůstal beze změny.

**Mutace, které nově rejectují při nepotvrzeném zápisu:**

- `bulkCartUpdate`, `removeLineItem`
- `applyCartDiscount`, `addCartCodeDiscount`, `removeAllDiscounts`
- `setCustomer`, `removeCustomer`
- `addLineItemProperties`, `bulkAddLineItemProperties`, `removeLineItemProperties`
- `setLineItemDiscount`, `bulkSetLineItemDiscounts`, `removeLineItemDiscount`
- `addLineItemSellingPlan`, `removeLineItemSellingPlan`
- `updateLineItemQuantity` je nová v 2026-10 a rejectuje od svého prvního vydání

**Dvě chybové zprávy, které je třeba rozlišovat:**

- *POS refused the cart update. The cart was not changed.* POS zápis odmítl a košík je beze změny. Typicky nastane poté, co pokladní přešel k platbě. Pokus lze zopakovat, jakmile je úprava košíku zase dostupná.
- *POS could not confirm the cart update.* Výsledek není znám a je možný částečný zápis. Před dalším pokusem je nutné košík znovu načíst a ověřit jeho stav.

Rejection mohou způsobit i jiné příčiny, například neplatná hodnota slevy nebo chybějící zákazník. Podle textu zprávy má smysl větvit logiku jen tehdy, když potřebujete odlišit nepotvrzený zápis od těchto chyb.

**Doporučený postup z changelogu:** obalit každé volání mutace do `try`/`catch`, stav UI (například příznak, že je sleva aplikovaná) nastavit až po úspěšném `await` a v `catch` stav vrátit zpět a zobrazit pokladnímu hlášku s výzvou k opakování před platbou. Teprve potom nastavit `api_version = "2026-10"`. Při povýšení verze bez ošetření rejectů hrozí, že zůstane viset loading spinner nebo se přeskočí potvrzovací krok.

## Časová osa

- **1. 10. 2026** — API verze 2026-10 je stabilní (viz release notes 2026-10).
- **7. 10. 2026** — changelog zveřejněn jako breaking API change s požadovanou akcí. Změna platí pro každou POS UI extension, která deklaruje `api_version = "2026-10"` nebo novější.
- **Extensions na 2026-07 a starších** — nejsou dotčené. Verze 2026-07 funguje do konce své podpory podle pravidel API versioningu, konkrétní datum changelog neuvádí.

## Dopad pro nás

**Pro vývojáře:** U každé POS UI extension, která volá některou z výše uvedených mutací, je potřeba před zvýšením `api_version` na 2026-10 projít všechna volání a doplnit ošetření rejectu. Neošetřený reject ukončí zbytek handleru, takže se může přeskočit aktualizace UI nebo úklid, například vypnutí loading stavu. Pozor na kód, který už `try`/`catch` nebo `.catch()` používá: ten se nově spustí i při nepotvrzeném zápisu, kdy se dřív pokračovalo, jako by vše proběhlo. Stav appky je nutné při chybě vracet zpět a u zprávy POS could not confirm the cart update před opakováním znovu načíst košík, protože je možný částečný zápis. Nová metoda `updateLineItemQuantity` rejectuje od začátku, takže ji rovnou píšeme s ošetřením chyb.

**Pro PM / PO:** Jde o breaking změnu, která ale **sama nic nerozbije**: dopadne jen na extensions, které se vědomě povýší na 2026-10. Do plánu upgradu POS extensions je proto potřeba zahrnout i úpravu error handlingu, nejen změnu čísla verze. Pro obchodníky je změna v konečném důsledku pozitivní, protože zmizí případy, kdy pokladna zobrazí slevu, která se v košíku neuplatnila. Je ale potřeba počítat s tím, že pokladní občas uvidí hlášku s výzvou k opakování, hlavně pokud extension upravuje košík až v okamžiku přechodu k platbě. Stojí za to koordinovat tuto změnu s dalšími breaking změnami v 2026-10 (odstranění staffMemberId) a s per-unit slevami z 2026-07, aby se POS extensions povyšovaly najednou a ne po částech.

## Použití v Integrátoru

**Možná dotčeno** — vlastní POS UI extensions aktuálně nevyvíjíme, ale pokud vzniknou u budoucích retailových zakázek a budou měnit košík přes Cart API, je nutné je rovnou psát na 2026-10 s ošetřením rejectů a bez předpokladu, že mutace vždy uspěje.
