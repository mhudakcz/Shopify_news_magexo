---
date: 2026-09-22
title: "Rollouts: přesnější timing kontroly, multi-change support, conflict review"
title_en: "Plan launches, events, and tests with clearer and more granular controls in Rollouts"
slug: rollouts-granular-controls-launches-tests
zdroj: https://changelog.shopify.com/posts/plan-launches-events-and-tests-with-clearer-and-more-granular-controls-in-rollouts
shrnuto_dne: 2026-09-25
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-09-22
pouzivame_v_integratoru: ne
dukaz_integratoru: "Redesign setup flow Rollouts (timing, multi-change, conflict review) je merchant-facing UI v adminu, naší integrace s objednávkami a sklady se netýká."
dotcene_klienty: []
souvisejici: [rollouts-schedule-ab-test-themes-checkout, rollouts-storefront-changes, editions-spring-2026]
tldr: "Rollouts dostávají přepracovaný setup flow: timing a traffic kontroly se přizpůsobí typu rolloutu (launch, event, test), více změn (theme, checkout, customer account) jde spojit do jednoho rolloutu a konfliktní nastavení se ukážou přímo při konfiguraci, ne až po spuštění."
tagy: [rollouts, planning, ab-testing, scheduling, launches, events]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Rollouts je nástroj v Shopify administraci (sekce Markets › Rollouts), který obchodníkům umožňuje plánovat, nasazovat a testovat změny storefront tématu, checkoutu i customer account stránek bez ručního přepínání konfigurací. Postupně se rozšiřoval z čistě storefront/theme scénářů (jaro 2026) na checkout a customer account konfigurace (červen 2026) a stal se tak jednotnou vrstvou pro časově řízené experimenty s celým zákaznickým zážitkem. Tato aktualizace se nesoustředí na nové typy změn, ale na přepracování samotného setup flow — tedy na to, jak merchant rollout definuje a kontroluje ještě před spuštěním.

    Klíčovou změnou je, že nastavení timingu a procenta návštěvnosti se nyní odvíjí od záměru merchanta: Shopify rozlišuje, zda jde o launch (trvalé spuštění), temporary event (dočasná akce s definovaným koncem) nebo test/experiment (A/B porovnání variant), a podle toho nabízí odpovídající kontroly místo jednoho univerzálního formuláře. Druhou změnou je multi-change support — merchant může spojit úpravy tématu, checkoutu i customer account stránek do jednoho rolloutu, místo aby je spravoval jako oddělené, na sobě nezávislé konfigurace. Přibylo také přehlednější zobrazení, jaké procento návštěvnosti rollout zasahuje a jak se dělí mezi testované varianty, a hlavně conflict review — systém teď upozorní na konfliktní nastavení přímo v setup flow, takže merchant chybu odhalí dřív, než rollout spustí, ne až zpětně podle dat nebo stížností zákazníků.

    Update je klasifikovaný jako "Improvement" administračního rozhraní, nejde tedy o novou API funkcionalitu ani o změnu dostupnou přes Admin GraphQL/REST. Navazuje na Rollouts feature představenou v rámci Shopify Editions Spring 2026 a na její následné rozšíření o checkout/CAU konfigurace — cílem je snížit chybovost a kognitivní zátěž při plánování stále komplexnějších rolloutů, ne přidat další typ změny, kterou lze rolloutovat.
  zdroje:
    - title: "Shopify: Plan launches, events, and tests with clearer and more granular controls in Rollouts"
      url: "https://changelog.shopify.com/posts/plan-launches-events-and-tests-with-clearer-and-more-granular-controls-in-rollouts"
    - title: "Archiv: Rollouts — scheduling + A/B testing pro themes a checkout/CAU konfigurace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-schedule-ab-test-themes-checkout/"
    - title: "Archiv: Rollouts — scheduling a A/B testy storefront změn"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-storefront-changes/"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přepracoval **setup flow Rollouts** — nejde o nový typ změny, ale o to, jak se rollout konfiguruje a kontroluje před spuštěním:

- **Intent-based timing a traffic kontroly** — formulář se přizpůsobí podle toho, jestli jde o trvalý launch, dočasný event, nebo A/B test, a nabídne relevantní nastavení místo jednoho univerzálního formuláře pro všechno
- **Multi-change support** — theme, checkout i customer account úpravy jde spojit do jednoho rolloutu, místo správy jako oddělených konfigurací
- **Přehled traffic splitu** — jasné zobrazení, kolik procent návštěvnosti rollout zasahuje a jak se dělí mezi testované varianty
- **Conflict review** — konfliktní nastavení se zobrazí přímo v setup flow, takže merchant problém odhalí a vyřeší dřív, než rollout spustí

Dostupné přes **Markets › Rollouts** v Shopify administraci.

## Časová osa

- **2026-03-31** — Rollouts spuštěn pro storefront/theme změny (scheduling + A/B testy)
- **2026-06-05** — Rollouts rozšířen o checkout a customer account konfigurace
- **2026-09-22** — přepracovaný setup flow: granulárnější timing/traffic kontroly, multi-change support, conflict review

## Dopad pro nás

**Pro vývojáře:** Jde o čistě UI/UX vrstvu v Shopify adminu, bez dopadu na GraphQL/REST API nebo na integrační kód — nevyžaduje žádnou reakci.

**Pro PM / PO:** Užitečné vědět při konzultacích s klienty, kteří přes Rollouts plánují sezónní kampaně nebo redesignové A/B testy — přehlednější conflict review a možnost spojit theme+checkout+CAU do jednoho rolloutu snižuje riziko chyby při komplexnějším nastavení. Nejde o novou schopnost, kterou bychom klientům museli aktivně nabízet, spíš o zlepšení UX stávajícího nástroje.

## Použití v Integrátoru

**Nepoužíváme** — jde o merchant-facing redesign setup flow v Shopify administraci; naše integrace pracuje s objednávkami, produkty a sklady přes API a theme/checkout rollout konfigurace se jí netýká.
