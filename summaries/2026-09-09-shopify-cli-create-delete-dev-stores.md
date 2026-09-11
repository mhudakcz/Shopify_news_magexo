---
date: 2026-09-09
title: "Shopify CLI: create + delete development stores přes příkaz"
title_en: "Create and delete dev stores in Shopify CLI"
slug: shopify-cli-create-delete-dev-stores
zdroj: https://shopify.dev/changelog/create-and-delete-dev-stores-in-shopify-cli
shrnuto_dne: 2026-09-11
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zjednodušuje zakládání a úklid testovacích dev stores v CI/CD a při onboardingu nových projektů."
dotcene_klienty: []
souvisejici: [shopify-cli-40-semver-autoupdates, theme-cli-password-protected-shop-dev-deprecated, shopify-cli-force-flag-deprecated]
tldr: "Shopify CLI 4.8 přidává příkazy pro vytváření a mazání development stores přímo z terminálu, s novým limitem 250 dev stores na organizaci."
tagy: [shopify-cli, dev-stores, developer-experience, automation]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Založení nového development store dosud znamenalo ruční průchod Partner Dashboard UI — přihlásit se, najít správnou organizaci, projít formulář a počkat na vytvoření store. Pro jednorázové založení projektu to nevadilo, ale pro opakované scénáře (CI/CD testing, dočasná prostředí pro demo, agent-driven development) to byl zbytečný manuální krok, který se navíc nedal snadno skriptovat.

    Shopify CLI 4.8 přidává čtyři nové terminálové příkazy: `shopify store create dev` založí nový dev store v rámci organizace, `shopify store delete` ho smaže (vyžaduje admin oprávnění), `shopify store list` vypíše všechny stores v organizaci a `shopify store info` zobrazí detail konkrétního store. Zároveň platí nový limit 250 development stores na organizaci — týká se výhradně dev stores, nepočítají se do něj client transfer stores ani collaborator stores; organizace, které limit už dnes přesahují, dostaly navýšenou výjimku.

    Změna zapadá do širšího trendu, kterým Shopify CLI během roku 2026 prochází — po zavedení striktního semantic versioningu a automatických self-upgrades ve verzi 4.0 a postupném odstraňování starších autentizačních a deployment flagů jde o další krok směrem k CLI, které lze plně řídit skriptem nebo AI agentem bez zásahu člověka v Partner Dashboard.
  zdroje:
    - title: "Shopify: Create and delete dev stores in Shopify CLI"
      url: "https://shopify.dev/changelog/create-and-delete-dev-stores-in-shopify-cli"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify CLI 4.8 přidává čtyři nové příkazy pro správu development stores přímo z terminálu, bez nutnosti procházet Partner Dashboard UI:

- `shopify store create dev` — vytvoří nový dev store v rámci organizace
- `shopify store delete` — smaže dev store (vyžaduje admin oprávnění)
- `shopify store list` — vypíše všechny stores v organizaci
- `shopify store info` — zobrazí detail konkrétního store

Součástí update je i nový limit **250 development stores na organizaci**. Limit se týká výhradně dev stores, nepočítají se do něj client transfer stores ani collaborator stores. Organizace, které limit už dnes přesahují, dostaly navýšenou výjimku.

Cílem jsou primárně automatizovaná workflow — CI/CD pipeline, testovací prostředí a nově i agent-driven development, kde si AI agent sám zakládá a uklízí testovací stores bez manuálního zásahu člověka.

## Časová osa

- **9. září 2026** — Shopify publikoval changelog, příkazy jsou dostupné v Shopify CLI 4.8+.

## Dopad pro nás

**Pro vývojáře:** Stojí za upgrade na CLI 4.8+ a vyzkoušení nových příkazů tam, kde dnes zakládáme dev stores ručně přes Partner Dashboard — typicky při onboardingu nového projektu nebo při stavění testovacích prostředí pro CI. `shopify store list` + `shopify store delete` se hodí jako cleanup skript pro organizace, které se blíží limitu 250 stores.

**Pro PM / PO:** Bez přímého dopadu na klienty — čistě interní vývojářský nástroj. Může ale zrychlit interní setup nových projektů a snížit manuální práci při zakládání testovacích prostředí.

## Použití v Integrátoru

Zatím spíš budoucí přínos — pokud si zakládáme vlastní dev stores pro testing napříč projekty, tyto příkazy zjednoduší jejich hromadnou správu a úklid.
