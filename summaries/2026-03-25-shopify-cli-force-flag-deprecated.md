---
date: 2026-03-25
title: "Shopify CLI app release --force flag deprecated"
title_en: "The Shopify CLI app release --force flag is deprecated and will be removed"
slug: shopify-cli-force-flag-deprecated
zdroj: https://shopify.dev/changelog/the-shopify-cli-app-release-force-flag-is-deprecated-and-will-be-removed
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: other
api_verze: []
nalehavost: stredni
customer_facing: false

deprecation_do: 2026-05-31
migrace_doporucena_do: 2026-05-15

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud používáme Shopify CLI v CI/CD pipeline pro release apps, je nutné nahradit --force za --allow-updates / --allow-deletes."
dotcene_klienty: []

tldr: "Shopify CLI --force flag bude odstraněn v květnu 2026; nahradit za --allow-updates nebo --allow-deletes pro CI/CD."
tagy: [cli, deployment, ci-cd, deprecation]
---

## Co se mění
**Shopify CLI** odstraňuje flag `--force` u příkazu `app release`. Nahrazují ho granulárnější flagy:
- `--allow-updates` — povolí update existujícího app
- `--allow-deletes` — povolí mazání resources

Cíl: méně překvapivých deletů v CI/CD a explicitní opt-in.

## Časová osa
- **2026-05** — flag bude odstraněn

## Dopad pro nás
**Pro vývojáře:**
Pokud máme CI/CD pipeline s `shopify app release --force`, nahradit za odpovídající granulární flag(y). Typicky pro rolling updates `--allow-updates`, pro destruktivní operace `--allow-deletes`.

**Pro PM / PO:**
Bezpečnostní improvement — CI/CD pipelines nevyhodí omylem produktivní resources. Žádný klient impact.

## Použití v Integrátoru
**Možná** — záleží na konkrétní CI/CD configu klienta/našich apps. Grep `--force` v `.github/workflows/`, GitLab CI configs atd.
