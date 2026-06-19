---
date: 2026-06-17
title: "Standardní storefront events a actions pro themes"
title_en: "Standard storefront events and actions for themes"
slug: standard-storefront-events-actions
zdroj: https://shopify.dev/changelog/standard-storefront-events-and-actions
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-05-31
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud vyvíjíme apps nebo skripty interagující s theme cart/search logikou na Liquid storefrontech, standardní actions (updateCart, openCart) jsou čistší alternativa k přímé manipulaci DOM nebo AJAX voláním vlastního Cart API."
dotcene_klienty: []
souvisejici: ["shopify-ai-toolkit-commerce-skills", "customer-account-web-component", "next-generation-events-field-level-webhooks"]
tldr: "Shopify zavádí standardizovaný komunikační protokol mezi Liquid themes a apps/agenty: themes emitují DOM events (shopify:product:view, shopify:cart:lines-update…) a apps je mohou konzumovat i spouštět actions (Shopify.actions.updateCart, openCart, getCart) bez přímé závislosti na interní implementaci tématu."
tagy: [storefront, theme, events, agent, app-integration]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Standard storefront events a actions jsou nová komunikační vrstva pro Liquid storefronty, která definuje sdílený jazyk mezi themes a třetími stranami — apps, skripty nebo AI agenty. Themes emitují dobře definované DOM eventy při klíčových obchodních akcích zákazníka (prohlížení produktu, aktualizace košíku, vyhledávání), apps na ně reagují čistým JavaScript addEventListener voláním a dostávají strukturovaný payload — bez nutnosti dalšího API volání.

    Motivace pro vznik tohoto standardu pramení z dlouhodobé fragmentace ekosystému: každé téma řešilo cart updates, search suggestions nebo product interactions jinak. App developer, který chtěl reagovat na přidání do košíku, musel hackovat DOM nebo monitorovat XHR requesty. Výsledkem byly fragile integrace závislé na konkrétním tématu, které se rozbíjely při update. Standardní events tento problém řeší tím, že theme se stává emitorem událostí se zaručeným kontraktem.

    Na druhé straně komunikace stojí actions — sada metod dostupných přes globální objekt `Shopify.actions`. Apps a agenti mohou přes ně programaticky spustit akce jako `updateCart`, `getCart` nebo `openCart`, aniž by museli znát interní strukturu tématu. Výchozí chování je napojeno přímo na Storefront API a page reloads; theme developer může default implementaci přepsat a řídit UI update sám bez zbytečného reloadu stránky. Každá úspěšně provedená action automaticky emituje odpovídající event, čímž uzavírá komunikační smyčku.

    Funkce je dostupná od 31. května 2026 a nevyžaduje migraci — existující themes ji mohou adoptovat inkrementálně. Přínos je největší pro app developery, kteří potřebují cross-theme kompatibilitu bez nutnosti udržovat theme-specific wrappery.

  zdroje:
    - title: "Shopify: Standard storefront events and actions for themes"
      url: "https://shopify.dev/changelog/standard-storefront-events-and-actions"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---
## Co se mění

Shopify formalizuje komunikaci mezi Liquid themes a externími apps nebo skripty prostřednictvím dvou komplementárních mechanismů:

**Storefront events** jsou standardní DOM eventy, které theme emituje při obchodních akcích zákazníka. Aktuálně definované eventy zahrnují mimo jiné:

- `shopify:product:view` — zákazník si prohlíží produkt
- `shopify:cart:lines-update` — obsah košíku byl změněn
- `shopify:search:update` — zákazník aktualizoval vyhledávací dotaz

App developer se přihlásí k odběru pomocí standardního `document.addEventListener('shopify:cart:lines-update', handler)`. Payload eventu obsahuje strukturovaná data přímo — bez nutnosti dělat následné Storefront API volání.

**Storefront actions** jsou metody na globálním objektu `Shopify.actions`, které apps nebo AI agenti volají pro spuštění theme akcí:

- `Shopify.actions.updateCart(payload)` — aktualizuje košík
- `Shopify.actions.getCart()` — vrátí aktuální stav košíku
- `Shopify.actions.openCart()` — otevře cart drawer / modal

Výchozí implementace actions je spravována Shopify a integruje se se Storefront API. Theme developer může implementaci přepsat a optimalizovat UI flow (například přeskočit page reload a aktualizovat DOM přímo).

## Časová osa

| Datum | Událost |
|---|---|
| 31. 5. 2026 | Feature dostupná na všech Liquid storefrontech |
| 17. 6. 2026 | Zveřejněno v Shopify Editions Spring '26 changelogu |

Funkce nevyžaduje opt-in ani migraci stávajících themes.

## Dopad pro nás

Přímý dopad je **nízký** — jde o infrastrukturu, která se projevuje při aktivním vývoji theme nebo app integrace.

Pokud pro klienta vyvíjíme customizaci, která reaguje na cart akce (upsell widgety, loyalty body, custom cart summaries), standardní events jsou preferred způsob integrace oproti DOM hackům nebo monkey-patchování theme JS.

Pro existující integrace není potřeba nic měnit — standard je additivní a starý kód zůstává funkční.

## Použití v Integrátoru

Relevance je **podmíněná** — závisí na tom, zda daná app nebo integrace komunikuje s cart nebo search logikou Liquid theme.

Konkrétní scénáře kde standard pomáhá:
- App widget reagující na `shopify:cart:lines-update` místo polling/XHR spy
- AI agent nebo script volající `Shopify.actions.updateCart` místo přímého AJAX na `/cart/update.js`
- Cross-theme kompatibilní implementace bez theme-specific podmínkové logiky

Pro čistě backend nebo headless integrace (Hydrogen, vlastní storefront) je relevance minimální — actions a events jsou specifické pro Liquid / DOM kontext.
