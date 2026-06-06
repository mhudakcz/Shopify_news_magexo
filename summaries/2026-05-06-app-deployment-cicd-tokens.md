---
date: 2026-05-06
title: "App deployment v CI/CD: nové App automation tokens"
title_en: "App deployment in CI/CD is now available for all apps"
slug: app-deployment-cicd-tokens
zdroj: https://shopify.dev/changelog/app-deployment-in-cicd-is-now-available-for-all-apps
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-07

kategorie: [nova-prilezitost, integrace]
api_oblast: other
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud máme custom apps deployované přes Shopify CLI v CI/CD pipeline, je třeba migrovat z Partner Dashboard CLI tokens na nové App automation tokens (přes Dev Dashboard)."
dotcene_klienty: []
souvisejici: [shopify-cli-force-flag-deprecated]

kontext:
  background: |
    CI/CD (Continuous Integration / Continuous Deployment) je praxe, při níž je zdrojový kód aplikace automaticky sestavován, testován a nasazován při každé změně. V kontextu Shopify aplikací CI/CD pipeline obvykle volá příkaz `shopify app deploy`, který odešle nové verze app extensions a konfigurace přímo do Shopify.

    Historicky Shopify umožňoval autentizaci těchto automatizovaných nasazení prostřednictvím tzv. CLI tokenů generovaných v Partner Dashboardu. Tyto tokeny byly vázány na celou partnerskou organizaci, nikoli na konkrétní aplikaci — jakýkoli skript s přístupem k tokenu mohl ovlivnit libovolnou app v organizaci. Se stále větší adopcí CI/CD u Shopify partnerů i rostoucí pozorností věnovanou bezpečnosti supply chain se ukázalo, že takto široký rozsah přístupu představuje riziko. Shopify proto zavedl Dev Dashboard jako nástupce části Partner Dashboardu a s ním i granulárněji scopované tokeny.

    App automation tokens přinášejí princip nejmenšího oprávnění: každý token má přístup pouze k jedné aplikaci, má vlastní životní cyklus a lze jej rotovat nebo odvolat bez dopadu na ostatní aplikace v organizaci. Spolu s paralelně probíhajícím přechodem na expirující offline tokeny pro public apps jde o součást širší bezpečnostní strategie Shopify, která minimalizuje riziko kompromitace dlouhodobých přihlašovacích údajů.

    Tato změna je technicky úzce svázána se Shopify CLI a probíhá zároveň s vydáním CLI 4.0, které přineslo odstraňování deprecated flagů a příkazů. Vývojářské týmy by měli auditovat všechny CI/CD pipelines, kde figuruje `SHOPIFY_CLI_PARTNERS_TOKEN` nebo starý CLI token, a provést migraci na nový `SHOPIFY_APP_AUTOMATION_TOKEN`.
  zdroje:
    - title: "App deployment in CI/CD is now available for all apps"
      url: "https://shopify.dev/changelog/app-deployment-in-cicd-is-now-available-for-all-apps"
    - title: "Shopify CLI 4.0: SemVer, auto-updates, removing deprecated flags"
      url: "https://shopify.dev/changelog/shopify-cli-40-semver-auto-updates-removing-deprecated-flags-and-commands"
    - title: "Expiring offline access tokens required for public apps"
      url: "https://shopify.dev/changelog/expiring-offline-access-tokens-required-for-public-apps-april-1-2026"
    - title: "Shopify CLI --force flag deprecated"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-cli-force-flag-deprecated/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6

tldr: "App automation tokens umožňují app-scoped auth pro CI/CD deployment přes Dev Dashboard. Nahrazují CLI tokens z Partner Dashboardu, lepší security a granularita."
tagy: [cli, ci-cd, deployment, auth, security]
---

## Co se mění
**App automation tokens** jsou nový typ tokenu pro **CI/CD deployment** Shopify apps. Generují se v **Dev Dashboardu** (ne Partner Dashboardu) a jsou:
- **App-scoped** — token funguje jen pro konkrétní app, nikoli celý partner organization
- **Bezpečnější** — explicit lifecycle management, lze rotovat per app
- **Doporučená cesta** pro CI/CD pipelines

Nahrazují starší CLI tokens, které zůstávaly v Partner Dashboardu.

## Dopad pro nás
**Pro vývojáře:**
Pokud máme CI/CD pipeline (GitHub Actions, GitLab CI, atd.), kde voláme `shopify app deploy` — token z env proměnné je třeba migrovat:
- Old: Partner Dashboard CLI token (org-scope)
- New: App automation token (app-scope), generated from Dev Dashboard

Migrace = 1) vygenerovat nový token, 2) update env var v CI, 3) test deploy, 4) revoke starý token.

**Pro PM / PO:**
Bezpečnostní upgrade. Pokud klient má interní compliance review, bude se ptát, jestli máme app-scoped tokens.

## Použití v Integrátoru
**Možná** — pokud konkrétní klient má naši custom app, kterou nasazujeme přes CI/CD. Audit existujících pipelines + token rotation.

## Související
- [Shopify CLI --force flag deprecated](../zmena/shopify-cli-force-flag-deprecated/)
