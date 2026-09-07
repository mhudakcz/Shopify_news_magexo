---
date: 2026-09-04
title: "Shopify storefronts podporují UCP 2026-08-25 (Universal Commerce Protocol)"
title_en: "Shopify storefronts now support UCP 2026-08-25"
slug: storefronts-ucp-2026-08-25-support
zdroj: https://shopify.dev/changelog/08-25-is-now-supported
shrnuto_dne: 2026-09-08
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Storefronty by měly udržovat discovery profil na /.well-known/ucp aktuální vůči nejnovější podporované verzi protokolu."
dotcene_klienty: []
souvisejici: [universal-commerce-protocol-ucp, storefront-mcp-cart-tools-deprecated-ucp, storefront-catalog-mcp-ucp]
tldr: "Shopify storefronty nově inzerují ve svém discovery profilu podporu UCP verze 2026-08-25, samotné schopnosti se ale nemění."
tagy: [ucp, "universal-commerce-protocol", storefronts, agentic-commerce]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Universal Commerce Protocol (UCP) je otevřený protokol, přes který si platformy a AI agenti vyjednávají se Shopify storefronty jejich schopnosti (capabilities) pro discovery a checkout. Storefront tuto podporu deklaruje ve svém discovery profilu na cestě /.well-known/ucp, kde AI shopping asistenti a další agentní klienti zjistí, jakou verzi protokolu a jaké funkce mohou u daného obchodu použít.

    Od 28. srpna 2026 Shopify storefronty ve svém discovery profilu inzerují podporu verze protokolu 2026-08-25. Podle changelogu jde o čistě verzní aktualizaci — množina schopností, které Shopify podporuje, se nemění, mění se pouze inzerovaná verze protokolu a s ní související kompatibilita. Nejde tedy o novou funkci ani o schema změny, ale o kompatibilitní krok, který drží Shopify v souladu s aktuální revizí UCP specifikace.

    Pro existující integrace to znamená, že žádná akce není nutná — vše funguje beze změny. Relevantní zůstává jen pro ty, kdo si sami parsují nebo validují discovery profil (/.well-known/ucp) a mohli by mít natvrdo zapsanou očekávanou verzi protokolu.
  zdroje:
    - title: "Shopify: Shopify storefronts now support UCP 2026-08-25"
      url: "https://shopify.dev/changelog/08-25-is-now-supported"
    - title: "Shopify dev docs: Agent profiles"
      url: "https://shopify.dev/docs/agents/profiles"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify storefronty od 28. srpna 2026 ve svém discovery profilu (`/.well-known/ucp`) inzerují novou verzi Universal Commerce Protocol — `2026-08-25`. Podle oficiálního changelogu jde o nesubstanční update: sada schopností (capabilities), které Shopify přes UCP nabízí, zůstává stejná, mění se jen inzerovaná verze protokolu a s ní spojená kompatibilita vůči klientům, kteří UCP verzi kontrolují.

Nejde tedy o novou funkci pro discovery nebo checkout přes AI agenty ani o schema breaking change — spíš o rutinní krok, kterým Shopify drží krok s vývojem UCP specifikace jako takové.

## Časová osa

- 2026-08-28 — storefronty začaly inzerovat podporu UCP 2026-08-25
- 2026-09-04 — Shopify zveřejnil changelog záznam

## Dopad pro nás

**Pro vývojáře:** Žádná akce není nutná pro běžné integrace. Relevantní je to jen pro kód, který si sám čte/validuje discovery profil na `/.well-known/ucp` a má natvrdo zapsanou očekávanou verzi protokolu — tam stojí za to ověřit, že akceptuje i `2026-08-25`.

**Pro PM / PO:** Nízká priorita, čistě informativní changelog. Nemá dopad na roadmapu ani na chování obchodů vůči zákazníkům.

## Použití v Integrátoru

Přímý dopad nemáme — jde o verzní/kompatibilní update bez změny schopností. Stojí za to mít na paměti při dalším sledování vývoje UCP a discovery profilů storefrontů.
