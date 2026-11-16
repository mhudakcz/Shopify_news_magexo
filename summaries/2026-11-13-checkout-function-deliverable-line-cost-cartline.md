---
date: 2026-11-13
title: "Checkout Functions: cart.deliverableLine má nyní cost + link na cart.line"
title_en: "Checkout Function cart.deliverableLine inputs now model cost and link to their relevant cart.line"
slug: checkout-function-deliverable-line-cost-cartline
zdroj: https://shopify.dev/docs/api/functions/unstable/order-routing-location-rule#Input.fields.cart.deliverableLines.cartLine
shrnuto_dne: 2026-11-16
kategorie: [nova-api]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro merchanty vytváříme vlastní shipping, payment nebo routing funkce, nově můžeme rozhodovat podle ceny jednotlivých doručovaných položek, například komponent bundlu."
dotcene_klienty: []
souvisejici: [order-routing-functions-multi-fulfillment-groups, delivery-options-functions-metafields, us-tax-calculation-fulfillment-location-routing]
tldr: "Vstup cart.deliverableLines ve Functions nově nese cost každé doručované položky a odkaz cartLine na nadřazený řádek košíku."
tagy: [checkout-functions, cart, order-routing, deliverable-line, unstable]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Functions dostávají na vstupu data o košíku. Součástí je seznam cart.deliverableLines, tedy položek, které se fyzicky doručují zákazníkovi. Dosud z něj nebylo možné snadno zjistit cenu konkrétní doručované položky ani to, ke kterému řádku košíku patří.

    Každý prvek deliverableLines nově obsahuje pole cost (nepovinně null není, typ CartLineCost) a pole cartLine (nullable odkaz na položku v cart.lines). Cena deliverable řádku se může lišit od ceny jeho cartLine. Typický příklad je bundle: celý bundle je jeden řádek košíku s cenou celého balíčku, ale každá komponenta je samostatný deliverable řádek s vlastní cenou. Pole cartLine pak u všech komponent ukazuje na stejný řádek bundlu.

    Pole cartLine může být null, například když úprava objednávky odstraní celý bundle a odpovídající řádek v cart.lines už neexistuje. Funkce s tím musí počítat. Změna je dostupná v unstable verzi API a doplňuje novinku o order routing funkcích z 5. listopadu.
  zdroje:
    - title: "Shopify: Checkout Function cart.deliverableLine inputs now model cost and link to their relevant cart.line"
      url: "https://shopify.dev/docs/api/functions/unstable/order-routing-location-rule#Input.fields.cart.deliverableLines.cartLine"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

V inputu Checkout Functions (zde dokumentováno u order routing location rule v unstable API) mají prvky `cart.deliverableLines` nově pole `cost` a `cartLine`. Pole `cost` udává cenu dané doručované položky tak, jak ji určil checkout, a může se lišit od ceny nadřazeného řádku. Pole `cartLine` odkazuje na odpovídající položku v `cart.lines`, nebo je `null`, pokud takový řádek neexistuje.

Praktický smysl je hlavně u bundlů: komponenty mají vlastní ceny, zatímco řádek košíku nese cenu celého balíčku. Funkce tak může například nabídnout dopravu zdarma pro deliverable položky nad určitou cenu.

## Časová osa

- 2026-11-13: změna zveřejněna v dev changelogu, dostupná v unstable verzi API.
- Stabilní verze: zatím nebylo oznámeno datum.

## Dopad pro nás

**Pro vývojáře:** Při práci s deliverableLines je nutné ošetřit `cartLine == null` a nepředpokládat, že cena deliverable řádku odpovídá ceně cartLine. Unstable verze se nehodí do produkce.

**Pro PM / PO:** Nízká naléhavost. Otevírá možnost přesnějších pravidel dopravy, plateb a routingu podle ceny jednotlivých doručovaných položek, zejména u bundlů. Stojí za zmínku při návrhu custom logiky pro merchanty.

## Použití v Integrátoru

Pokud pro merchanty stavíme vlastní funkce nad doručením nebo routingem, nová pole umožní pravidla podle ceny konkrétní doručované položky. Jinak není potřeba nic měnit.
