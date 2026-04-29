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

tldr: "Oficiální testing library pro UI extensions s type-safe mocky a izolovaným renderingem."
tagy: [testing, ui-extensions, dev-tools]
---

## Co se mění
Shopify vydal oficiální knihovnu **`@shopify/ui-extensions-tester`** pro automatizované testování UI extensions (admin, checkout, customer accounts, POS). Poskytuje type-safe mocky a možnost render extensions v izolaci, mimo plný Shopify runtime.

## Použití v Integrátoru
**Nepoužíváme** — neděláme UI extensions. Pokud bychom v budoucnu napsali extension pro klienta, tato knihovna by byla doporučenou cestou pro testy.
