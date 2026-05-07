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
