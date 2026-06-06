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

kontext:
  background: |
    Shopify CLI je příkazový nástroj pro vývojáře Shopify aplikací, který umožňuje lokální vývoj, testování a nasazení (deployment) aplikací a jejich rozšíření. Příkaz `app release` slouží k publikování nové verze aplikace do produkce — po úspěšném `app deploy` tím vývojář "vydá" konkrétní verzi aplikace uživatelům.

    Flag `--force` byl původně zaveden jako zkratka pro automatizované prostředí: přeskočí všechny interaktivní potvrzovací dotazy včetně těch, které varují před trvalým smazáním rozšíření. Problémem bylo, že flag nerozlišoval mezi bezpečnými operacemi (přidání, aktualizace) a nebezpečnými (nevratné smazání). V CI/CD pipeline tak mohl snadno způsobit nechtěné smazání produkčních rozšíření bez jakéhokoli varování.

    Náhradní granulární flagy `--allow-updates` a `--allow-deletes` oddělují tato dvě rizika. Vývojář může explicitně povolit jen ty operace, které v daném workflow skutečně potřebuje. Tato změna zapadá do širšího trendu — Shopify CLI 4.0 přináší přísné sémantické verzování a odstraňuje celou řadu deprecated příkazů a flagů, aby byl deployment bezpečnější a předvídatelnější.

    Souběžně Shopify zavedl App automation tokeny — app-scoped přihlašovací tokeny pro CI/CD, které nahrazují starší Partner Dashboard CLI tokeny s organization-wide oprávněními. Obě změny společně posilují bezpečnostní model nasazování Shopify aplikací v automatizovaných pipeline.
  zdroje:
    - title: "Shopify Changelog: The --force flag is deprecated and will be removed"
      url: "https://shopify.dev/changelog/the-shopify-cli-app-release-force-flag-is-deprecated-and-will-be-removed"
    - title: "Shopify Changelog: Shopify CLI 4.0 — SemVer, auto-updates, removing deprecated flags"
      url: "https://shopify.dev/changelog/shopify-cli-40-semver-auto-updates-removing-deprecated-flags-and-commands"
    - title: "Archiv: App deployment v CI/CD — App automation tokens"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-deployment-cicd-tokens/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
