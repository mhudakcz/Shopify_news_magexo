---
date: 2026-06-05
title: "Rollouts: scheduling + A/B testing pro themes a checkout/CAU konfigurace"
title_en: "Schedule, publish, and A/B test new themes and checkout and customer account configurations"
slug: rollouts-schedule-ab-test-themes-checkout
zdroj: https://changelog.shopify.com/posts/schedule-publish-and-a-b-test-new-themes-and-checkout-and-customer-account-configurations
shrnuto_dne: 2026-06-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-06-05
pouzivame_v_integratoru: ne
dukaz_integratoru: "Theme/checkout rollout management, naší integrace s objednávkami se netýká."
dotcene_klienty: []
souvisejici: [rollouts-storefront-changes, customize-checkout-accounts-by-market, customize-themes-per-market]
kontext:
  background: |
    Rollouts je nástroj v Shopify administraci (sekce Markets › Rollouts), který umožňuje obchodníkům plánovat, nasazovat a testovat změny vzhledu obchodu i konfigurace checkoutu bez nutnosti ručního přepínání. Místo klasického postupu — duplikovat téma, upravit, publikovat — definuje merchant podmínky a časové okno, za kterých se změna aktivuje nebo ukončí. Původně byl Rollouts dostupný pouze pro storefront změny (themes); tato aktualizace rozšiřuje jeho dosah i na checkout a customer account (CAU) konfigurace.

    Před touto změnou bylo nasazení nové checkout konfigurace nebo tématu čistě manuální operace bez možnosti naplánovat spuštění dopředu nebo automaticky ověřit dopad na konverze. Merchant musel buď publikovat ihned, nebo hlídat čas ručně — bez dat o tom, zda změna zlepšuje výsledky. Zároveň nebylo možné testovat dvě varianty checkoutu souběžně vůči reálné návštěvnosti. Shopify nyní přidává tři klíčové schopnosti: scheduling (naplánované spuštění na konkrétní datum a čas), gradual rollout (postupné nasazení na procento návštěvníků) a A/B testing (souběžné porovnání dvou témat nebo dvou checkout konfigurací). Automatické kopírování aktuálně publikované konfigurace při startu experimentu zajišťuje, že obě větve začínají ze stejného základu a lze je upravovat nezávisle.

    Praktický dopad je nejvýraznější pro obchodníky, kteří pracují se sezónními kampaněmi, redesigny nebo internacionalizací. Scheduling eliminuje nutnost manuálního zásahu ve specifický čas — Black Friday skin se spustí a vypne automaticky. A/B testing mezi dvěma kompletními checkout konfiguracemi (jiné platební metody, jiné pole, jiný branding) umožňuje data-driven rozhodování místo intuice. Gradual rollout pak snižuje riziko u větších změn — merchant nejprve nasadí na 10 % návštěvníků, sleduje dopady a teprve pak přepne plně. Funkce navazuje na per-market customizaci checkoutu a themes, čímž Shopify dokončuje vrstvu pro granulární, časově řízené experimenty s celým zákaznickým zážitkem.
  zdroje:
    - title: "Shopify Changelog: Schedule, publish, and A/B test new themes and checkout and customer account configurations"
      url: "https://changelog.shopify.com/posts/schedule-publish-and-a-b-test-new-themes-and-checkout-and-customer-account-configurations"
    - title: "Archiv: Rollouts — scheduling a A/B testy storefront změn"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-storefront-changes/"
    - title: "Archiv: Customizace checkoutu a customer accounts per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6
tldr: "Rollouts nyní umožňují naplánovat spuštění, postupně nasazovat a A/B testovat nejen themes, ale i checkout a customer account konfigurace — s automatickým kopírováním aktuálního stavu pro nezávislé úpravy obou variant."
tagy: [theme, checkout, rollout, customer-account, ab-test]
zdroj_kanal: merchant-changelog
editions_release: spring-2026
---

## Co se mění

Shopify **Rollouts** rozšiřuje podporu z pouhých storefront (theme) změn na celý zákaznický zážitek:

- **Scheduling** — naplánovat spuštění nového tématu nebo checkout konfigurace na konkrétní datum a čas (i automatický revert)
- **Gradual publishing** — postupné nasazení na procento návštěvníků pro snížení rizika
- **A/B testing** — souběžné testování dvou kompletních témat nebo dvou checkout/CAU konfigurací oproti reálné návštěvnosti
- **Automatické kopírování** — při zahájení experimentu Shopify automaticky zkopíruje aktuálně publikovanou konfiguraci, takže obě větve lze editovat nezávisle od sebe
- **Mutually exclusive experiments** — podpora souběžných experimentů, které se nepřekrývají
- **Localized testing** — možnost plánovat nebo testovat obsah per market (geografie)

Dostupné přes **Markets › Rollouts** v Shopify administraci.

## Časová osa

- **2026-03-31** — Rollouts spuštěn pro storefront/theme změny (scheduling + A/B testy)
- **2026-06-05** — Rollouts rozšířen o checkout a customer account konfigurace

## Dopad pro nás

Funkcionalita se týká přímo obchodníků spravujících témata a checkout nastavení — konkrétně merchantů, kteří:
- připravují sezónní kampaně (Black Friday, Vánoce) a chtějí automatické spouštění/vypínání
- testují nové checkout flow (jiné pole, platební metody, branding) bez ručního přepínání
- nasazují redesign postupně, aby minimalizovali riziko dopadu na konverze

Pro Magexo jde o relevant feature zejména při klientských projektech zahrnujících redesign nebo checkout optimalizaci — lze doporučit jako součást conversion rate optimization (CRO) strategie.

## Použití v Integrátoru

**Nepoužíváme** — Rollouts je merchant-facing funkce v administraci Shopify. Naše integrace pracuje s objednávkami, produkty a sklady přes API; theme/checkout rollout management se naší integrační vrstvy netýká.
