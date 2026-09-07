---
date: 2026-08-26
title: "Nové oficiální Shopify SDK balíčky pro PHP a Python"
title_en: "Build Shopify apps in PHP and Python with new official packages"
slug: shopify-app-sdks-php-python
zdroj: https://shopify.dev/changelog/build-shopify-apps-in-php-and-python-with-new-official-packages
shrnuto_dne: 2026-09-08
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-26
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom stavěli custom Shopify app v PHP nebo Python, dává nově smysl sáhnout po oficiálním SDK místo community balíčku."
dotcene_klienty: []
souvisejici: [shopify-cli-40-semver-autoupdates, app-deployment-cicd-tokens]
tldr: "Shopify vydal oficiální, verzí 1.0 označené SDK balíčky pro PHP (shopify/shopify-app-php) a Python (shopifyapp), dosud podporované jen komunitně."
tagy: [sdk, php, python, developer-tools, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify dosud oficiálně podporoval vývoj aplikací jen přes Node.js a Ruby SDK. Vývojáři v PHP a Python ekosystémech (Laravel, Symfony, Django, FastAPI) byli odkázáni na komunitní balíčky jako shopify-api-php nebo shopify_python_api, které nebyly přímo udržované Shopify a lišily se kvalitou i pokrytím API.

    Nové oficiální balíčky — `shopify/shopify-app-php` (přes Composer) a `shopifyapp` (přes pip) — dosáhly verze 1.0 a jsou framework-agnostic: poskytují společné primitivy jako ověřování požadavků (webhooky, App Home, App Bridge, app proxy, extensions), token exchange včetně client credentials a obnovování access tokenů, a Admin GraphQL klienta s automatickým retry handlingem. Fungují jak uvnitř populárních frameworků, tak samostatně.

    Staré komunitní knihovny shopify-api-php a shopify_python_api jsou nyní označeny jako deprecated — zůstávají funkční, ale nebudou dostávat nové funkce ani bezpečnostní opravy. Krok zapadá do širší snahy Shopify sjednotit a oficiálně podpořit vývojářský ekosystém napříč jazyky, podobně jako se to v posledních měsících dělo u Shopify CLI a App automation tokens pro CI/CD.
  zdroje:
    - title: "Shopify: Build Shopify apps in PHP and Python with new official packages"
      url: "https://shopify.dev/changelog/build-shopify-apps-in-php-and-python-with-new-official-packages"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify poprvé oficiálně podporuje vývoj aplikací v PHP a Pythonu. Nový balíček `shopify/shopify-app-php` (instalace přes `composer require shopify/shopify-app-php`) a balíček `shopifyapp` (instalace přes `pip install shopifyapp`) dosáhly verze 1.0 a jsou dostupné na Packagist, respektive PyPI.

Oba balíčky jsou navržené jako framework-agnostic — fungují jak samostatně, tak uvnitř Laravelu a Symfony na straně PHP, případně Djanga a FastAPI na straně Python. Pokrývají tři klíčové oblasti, které si dřív musel každý vývojář implementovat sám nebo řešit přes komunitní knihovny:

- ověřování požadavků napříč povrchy (webhooky, App Home, App Bridge, app proxy, extensions),
- token exchange, včetně client credentials flow a obnovování vyměněných access tokenů,
- Admin GraphQL klienta s vestavěným automatickým retry handlingem.

Zároveň Shopify označil starší komunitní knihovny `shopify-api-php` a `shopify_python_api` za deprecated. Nadále fungují, ale nedostanou nové funkce ani bezpečnostní záplaty — Shopify tím jasně signalizuje, kam se má vývoj nových aplikací v těchto jazycích ubírat.

## Časová osa

- **26. 8. 2026** — vydání oficiálních SDK balíčků v1.0 pro PHP a Python, souběžné oznámení deprecation starých komunitních knihoven

## Dopad pro nás

**Pro vývojáře:** Přímý dopad na běžící projekty je nulový — žádnou existující integraci není nutné měnit. Relevantní je to hlavně do budoucna: pokud bychom navrhovali novou custom Shopify app v PHP nebo Python stacku (např. v rámci klientského backendu na Laravelu nebo Djangu), má nyní smysl sáhnout po oficiálním balíčku místo komunitního — méně údržby, oficiální bezpečnostní podpora a garantovaná kompatibilita s Admin GraphQL API.

**Pro PM / PO:** Bez okamžité akce. Užitečné vědět jako argument při volbě technologie pro nové projekty, pokud klient nebo tým preferuje PHP/Python backend místo Node.js.

## Použití v Integrátoru

Aktuálně nepoužíváme — Integrátor je postavený jinak. Relevantní by to bylo jen při budování zcela nové PHP/Python aplikace pro Shopify.
