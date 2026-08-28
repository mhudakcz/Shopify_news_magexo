---
date: 2026-08-19
title: "App intents na admin.app.intent.link se nyní otevírají full-page (ne modálně)"
title_en: "App intents on admin.app.intent.link now open as a full-page navigation"
slug: app-intents-admin-full-page-navigation
zdroj: https://shopify.dev/changelog/app-intents-on-admin-app-intent-link-now-open-as-a-full-page-navigation
shrnuto_dne: 2026-08-28
kategorie: [breaking-change]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-19
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud máme app extension s admin.app.intent.link target, UI se teď renderuje full-page, ne v modálu."
dotcene_klienty: []
souvisejici: [intents-api-file-picker, sidekick-app-extensions-app-store-requirements, sidekick-app-extensions-third-party]
tldr: "Shopify mění chování app intents volaných přes Sidekick — místo modálního okna se nově otevírají jako plnohodnotná navigace na stránku."
tagy: [app-intents, admin, navigation, ux, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    App intents umožňují Sidekicku (AI asistentovi v Shopify adminu) volat funkce třetích aplikací přímo z konverzace — merchant požádá o akci a Shopify přesměruje požadavek do konkrétní app extension, která ho zpracuje a vrátí výsledek. Extensions, které tyto intenty obsluhují, se registrují na target admin.app.intent.link.
    Dosud se takto vyvolaná app intent otevírala v modálním okně přes aktuální stránku adminu. Od 19. srpna 2026 Shopify toto chování mění: intent se otevře jako full-page navigace na URL extension, čímž se sjednocuje s tím, jak fungují nativní Shopify admin intents. Výjimkou je situace, kdy má merchant na aktuální stránce neuložené změny — v tom případě se intent i nadále otevře v modálu, aby se rozpracovaná práce neztratila.
    Samotné API zůstává beze změny: čtení payloadu přes shopify.intents.request.value, registrace nástrojů přes shopify.tools.register i resolving pomocí ok()/error()/closed() fungují stejně jako dřív. Jde čistě o změnu prezentační vrstvy — jak se UI extension zobrazí uživateli, ne o to, jak se s ní komunikuje. Extensions na targetu admin.app.intent.render touto změnou nejsou dotčeny.
  zdroje:
    - title: "Shopify: App intents on admin.app.intent.link now open as a full-page navigation"
      url: "https://shopify.dev/changelog/app-intents-on-admin-app-intent-link-now-open-as-a-full-page-navigation"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify mění způsob, jakým se merchantovi zobrazí app intent vyvolaný přes Sidekicka. Namísto dosavadního modálního okna nad aktuální stránkou adminu se od 19. srpna 2026 intent otevírá jako full-page navigace — admin merchanta reálně přesměruje na URL deklarovanou v extension, podobně jako u nativních admin intents.

Existuje jedna výjimka: pokud má merchant na stránce, ze které intent volá, rozpracované neuložené změny, Shopify k plné navigaci nepřistoupí a intent se otevře v modálu jako dřív — aby se rozpracovaná práce nezahodila.

Změna se týká výhradně extensions registrovaných na target admin.app.intent.link a platí napříč všemi shopy bez ohledu na API verzi. Extensions na targetu admin.app.intent.render zůstávají beze změny. API kontrakt (čtení payloadu, registrace nástrojů, resolving intentu) se nemění — jde čistě o to, jak se UI vykreslí, ne o to, jak se s ní komunikuje.

## Časová osa

- **19. 8. 2026** — full-page navigace je aktivní pro všechny shopy, bez API version gatingu.

## Dopad pro nás

**Pro vývojáře:** Pokud máme (nebo pro klienta stavíme) app extension s admin.app.intent.link targetem, je potřeba ověřit, že stránka na deklarované URL vypadá a funguje dobře i na plnou šířku a výšku okna — layout postavený na předpokladu úzkého modálu (např. omezená šířka obsahu, absence vlastní navigace zpět) může teď působit rozbitě. Back navigace teď jde přes prohlížeč, ne přes zavření modálu, takže stojí za to zkontrolovat i to, jestli extension správně reaguje na opuštění stránky. Žádný breaking change v API ale nenastává — shopify.intents.request.value, shopify.tools.register i ok()/error()/closed() fungují stejně.

**Pro PM / PO:** Jde o vizuální/UX změnu, ne o funkční omezení — nic nepřestává fungovat, ale UI třetích aplikací napojených na Sidekicka může vypadat jinak, než na co jsou merchanti zvyklí. Stojí za krátkou kontrolu u projektů, kde jsme takovou extension stavěli.

## Použití v Integrátoru

Netýká se přímo integračního API, ale pokud bychom pro klienta stavěli app extension navázanou na Sidekicka (admin.app.intent.link), je potřeba počítat s full-page layoutem místo modálu.
