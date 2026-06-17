---
date: 2026-04-07
title: "@shopify/ui-extensions-tester pro automatizované testy UI extensions"
title_en: "Automated testing for Shopify UI extensions with @shopify/ui-extensions-tester"
slug: ui-extensions-tester
zdroj: https://shopify.dev/changelog/automated-testing-for-shopify-ui-extensions-with-shopify-ui-extensions-tester
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, fyi]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se vývoje UI extensions (admin, checkout, customer accounts, POS). Neděláme UI extensions."
dotcene_klienty: []

kontext:
  background: |
    UI extensions jsou JavaScriptové moduly, které rozšiřují nativní Shopify rozhraní — pokladnu (checkout), zákaznické účty, administraci a POS — bez přímého přístupu k DOM. Vývojáři je píší pomocí knihovny `@shopify/ui-extensions` a renderují se uvnitř Shopify runtime v izolovaném sandboxu.

    Před vydáním `@shopify/ui-extensions-tester` v API verzi 2026-04 neexistoval standardizovaný způsob, jak psát automatizované testy pro extensions mimo živý Shopify host. Vývojáři museli spoléhat na manuální testování v dev shopech nebo na vlastní testovací infrastrukturu. Nová knihovna řeší tento problém tím, že poskytuje testovací prostředí kompatibilní se standardními JS testovacími frameworky (Jest, Vitest).

    Klíčová hodnota knihovny spočívá v type-safe mock objektu `shopify`, který přesně napodobuje skutečné API extensions — včetně správného typování. To umožňuje zachytit chyby v použití API již v čase kompilace či testování, nikoliv až v produkci. Simulace uživatelských interakcí a asynchronních stavových změn je součástí knihovny pro všechny čtyři podporované povrchy.

    Tato knihovna navazuje na širší trend Shopify směrem k lepší developer experience: od nástrojů jako Shopify CLI až po dev shop prostředí pro checkout a customer account extensions. Automatizované testování extensions snižuje riziko regresí při aktualizacích API verzí.
  zdroje:
    - title: "Shopify Changelog: Automated testing for UI extensions"
      url: "https://shopify.dev/changelog/automated-testing-for-shopify-ui-extensions-with-shopify-ui-extensions-tester"
    - title: "Checkout a Customer Account extensions ve vývojových shopech"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/checkout-customer-account-extensions-dev-shops/"
    - title: "POS UI extensions offline podpora"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-ui-extensions-offline/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Oficiální testing library pro UI extensions s type-safe mocky a izolovaným renderingem."
tagy: [testing, ui-extensions, dev-tools]
editions_release: spring-2026
---

## Co se mění
Shopify vydal oficiální knihovnu **`@shopify/ui-extensions-tester`** pro automatizované testování UI extensions (admin, checkout, customer accounts, POS). Poskytuje type-safe mocky a možnost render extensions v izolaci, mimo plný Shopify runtime.

## Použití v Integrátoru
**Nepoužíváme** — neděláme UI extensions. Pokud bychom v budoucnu napsali extension pro klienta, tato knihovna by byla doporučenou cestou pro testy.
