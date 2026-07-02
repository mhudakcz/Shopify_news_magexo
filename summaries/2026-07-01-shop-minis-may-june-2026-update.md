---
date: 2026-07-01
title: "Shop Minis update květen-červen 2026 — typed hooks, build verification, usePopularProducts deprecation"
title_en: "Shop Minis May June 2026 update"
slug: shop-minis-may-june-2026-update
zdroj: https://shopify.dev/changelog/shop-minis-may-june-2026-update
shrnuto_dne: 2026-07-02
kategorie: [nova-prilezitost, deprecation]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom budovali Shop Mini, nové typed hooks zjednodušují product variant selection a build verification zajistí konzistentní CI/CD pipeline."
dotcene_klienty: []
souvisejici:
  - shop-minis-march-april-update
  - shop-minis-february-2026-update
  - editions-spring-2026-shop-app
tldr: "Shop Minis SDK přidává tři typed hooks pro výběr product variant, CLI nově ověřuje build při submit, a hook usePopularProducts je deprecated ve prospěch useRecommendedProducts nebo useProductSearch."
tagy: [shop-minis, hooks, deprecation, developer, mobile]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shop Minis jsou miniaturní webové aplikace (Mini WebViews) integrované přímo do Shop App na mobilních zařízeních. Umožňují merchant třetím stranám budovat nativně vypadající zážitky přímo uvnitř Shopify vlastní consumer aplikace — například product discovery, personalizaci nebo interaktivní obsah. Každé dva měsíce Shopify vydává souhrnný update SDK a CLI nástrojů pro Shop Minis vývojáře.

    V aktualizaci za květen a červen 2026 přibývají tři typed React SDK hooks (`useSelectVariant`, `useAddToCart`, `useBuyNow`), které obalují existující intent systém a vracejí rozlišené výsledky jako úspěšné přidání do košíku, dismiss uživatelem, chyba hostitele nebo přechod na PDP stránku. Zároveň CLI `submit` příkaz nyní automaticky spouští build verification — sadu kontrol přes závislosti, ESLint, TypeScript, build output a manifest validaci — s přehledným výstupem nebo JSON formátem.

    Deprecace `usePopularProducts` hooku je součástí dlouhodobého trendu přechodu na personalizovanější discovery mechanismy. Vývojáři mají dvě cesty: `useRecommendedProducts` pro personalizovaný discovery nebo `useProductSearch` pro search-driven přístupy. Hook zatím stále funguje, ale emituje dev-time varování, která upozorňují na nutnost migrace. Aktualizovány byly i package verze: `@shopify/shop-minis-platform 0.26.0`, `@shopify/shop-minis-react 0.28.0`, `@shopify/shop-minis-cli 0.3.21`.

  zdroje:
    - title: "Shopify: Shop Minis May June 2026 update"
      url: "https://shopify.dev/changelog/shop-minis-may-june-2026-update"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

**Nové typed hooks pro product variant intents**

SDK přidává tři nové React hooks jako typované obalky nad existujícím intent systémem:

- `useSelectVariant` — obaluje `select:shopify/ProductVariant`; otevírá nativní variant selector sheet
- `useAddToCart` — obaluje `add_to_cart:shopify/ProductVariant`; řeší přidání do košíku
- `useBuyNow` — obaluje `buy_now:shopify/ProductVariant`; přímý nákup bez košíku

Každý hook vrací rozlišené outcome stavy: úspěch, dismiss uživatelem, chyba hostitele, přechod na PDP. To umožňuje vývojářům reagovat přesněji na výsledek user interakce bez nutnosti ručního parsování intent response.

**Build verification při submit**

CLI příkaz `submit` nyní automaticky spouští build verification jako součást submit procesu. Systém kontroluje: validaci závislostí, ESLint disable pravidla, ESLint lint, TypeScript kompilaci, build output a manifest validaci. Výstup je human-readable nebo JSON (pro CI pipeline). Nová dokumentace pokrývá i samostatný `verify-build` příkaz.

**Scoped hook setup varování**

CLI poskytuje early warnings při použití scoped SDK hooks bez dokončeného required setup. To pomáhá vývojářům pochopit scope závislosti a account requirements dříve, než narazí na runtime chyby.

**Deprecace usePopularProducts**

Hook `usePopularProducts` je označen jako deprecated a emituje dev-time varování. Doporučené migrace:
- `useRecommendedProducts` — pro personalizovaný product discovery
- `useProductSearch` — pro search-driven discovery

**Aktualizace závislostí a dokumentace**

Nově povolená závislost `tw-animate-css`. Aktualizovaná dokumentace pro `useResolveIntent` s typed příklady, `useProductReviews` s paginated fetching a oba CLI příkazy.

| Balíček | Verze |
|---|---|
| @shopify/shop-minis-platform | 0.26.0 |
| @shopify/shop-minis-react | 0.28.0 |
| @shopify/shop-minis-cli | 0.3.21 |

## Časová osa

| Datum | Událost |
|---|---|
| 2026-07-01 | Vydání aktualizace SDK a CLI |
| 2026-07-02 | Publikace v changelog |
| TBD | Odstranění usePopularProducts (konkrétní datum neoznámeno) |

## Dopad pro nás

Shop Minis jsou niche vývojářský ekosystém — miniaplikace běžící uvnitř Shop App. Pokud Magexo nebuduje nebo neplánuje budovat Shop Mini pro konkrétního klienta, tato aktualizace nemá přímý dopad na běžné Shopify projekty.

Typed hooks (`useSelectVariant`, `useAddToCart`, `useBuyNow`) zjednodušují product variant selection workflow a snižují boilerplate kód. Build verification v CLI submit procesu je pragmatické vylepšení pro jakýkoliv tým s CI/CD pipeline.

Deprecace `usePopularProducts` se dotýká pouze existujících Shop Minis projektů. Migrace není složitá — `useRecommendedProducts` nebo `useProductSearch` jsou přímé náhrady se srovnatelným API surface.

## Použití v Integrátoru

Integrátor aktuálně nepracuje se Shop Minis SDK. Pokud by v budoucnu vznikl požadavek na Shop Mini pro klienta, nové typed hooks jsou preferovaný způsob řešení variant selection flows — nahrazují ruční práci s intent response objektem. Build verification v CLI submit je užitečný audit nástroj pro předprodukční kontrolu Minis bundle.

Doporučení: sledovat deprecaci `usePopularProducts`, aby při případném budoucím Shop Minis projektu nebyla použita deprecated API.
