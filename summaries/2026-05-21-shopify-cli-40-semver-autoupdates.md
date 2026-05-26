---
date: 2026-05-21
title: "Shopify CLI 4.0 — SemVer, auto-updates, odstranění deprecated flagů"
title_en: "Shopify CLI 4.0: SemVer, auto-updates, removing deprecated flags and commands"
slug: shopify-cli-40-semver-autoupdates
zdroj: https://shopify.dev/changelog/shopify-cli-40-semver-auto-updates-removing-deprecated-flags-and-commands
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-26

kategorie: [breaking-change, deprecation]
api_oblast: other
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud používáme Shopify CLI v CI/CD nebo dev workflow, je nutné check kompatibility (odstranění --force u app deploy a další deprecated commands)."
dotcene_klienty: []
souvisejici: [shopify-cli-force-flag-deprecated, app-deployment-cicd-tokens]

tldr: "Shopify CLI 4.0 zavádí semantic versioning, automatické self-upgrades a odstraňuje deprecated flagy (--force u app deploy) a několik příkazů ve prospěch novějších alternativ."
tagy: [cli, semver, ci-cd, breaking, deprecation]
---

## Co se mění
**Shopify CLI 4.0** — major release:
- **Semantic versioning** — předvídatelnější breaking changes (major bumps jen na skutečně breaking)
- **Automatic self-upgrades** — CLI se updatuje sám (opt-out možný)
- **Odstraněné deprecated flagy:** `--force` u `app deploy` (nahrazeno `--allow-updates` / `--allow-deletes`)
- **Odstraněné deprecated commands** ve prospěch nových alternativ

## Dopad pro nás
**Pro vývojáře:**
Pokud máme CI/CD pipeline s `shopify app deploy --force` nebo legacy commands, **build selže po upgradu**. Audit `.github/workflows/`, GitLab CI configs, shell skriptů. Migrace:
- `--force` → `--allow-updates` (rolling updates) nebo `--allow-deletes` (destruktivní)
- Legacy commands → najít alternativu v `shopify --help`

**Pro PM / PO:**
Žádný direct dopad pro klienta, ale broken CI = blokované deploye. Stojí za zařazení do nejbližšího sprintu.

## Použití v Integrátoru
**Možná** — záleží jak CI/CD pipeline klienta/našich apps používá CLI. Doporučuji grep `shopify ` v workflow souborech.

## Související
- [Shopify CLI --force flag deprecated](../zmena/shopify-cli-force-flag-deprecated/)
- [App deployment v CI/CD: App automation tokens](../zmena/app-deployment-cicd-tokens/)
