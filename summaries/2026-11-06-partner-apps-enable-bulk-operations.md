---
date: 2026-11-06
title: "Partner apps musí explicitně enable bulk operations před použitím (opt-in)"
title_en: "Partner apps must enable bulk operations before use"
slug: partner-apps-enable-bulk-operations
zdroj: https://shopify.dev/changelog/posts/partner-apps-must-enable-bulk-operations-before-use
shrnuto_dne: 2026-11-11
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se nás, pokud některá naše aplikace vytvořená jako partnerská (veřejná nebo custom) spouští bulk queries nebo bulk mutations přes Admin GraphQL API; aplikace vytvořené přímo v adminu nebo v Dev Dashboardu se zatím nemění."
dotcene_klienty: []
souvisejici: [ip-allowlists-required-public-apps, bulk-queries-4x-faster, editions-fall-2026-developer]
tldr: "Partnerské aplikace musí mít v Partner Dashboardu povolený přístup k bulk queries a bulk mutations zvlášť, jinak bulkOperationRunQuery a bulkOperationRunMutation vrátí access denied; existujícím aplikacím byl přístup udělen automaticky, ale pokud 31 dní nespustily bulk operaci, o přístup k danému typu přijdou."
tagy: [bulk-operations, graphql, opt-in, rate-limits, partners]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Bulk operations v Admin GraphQL API slouží k dlouho běžícím dotazům a mutacím nad velkými objemy dat, typicky pro synchronizaci s ERP nebo hromadné úpravy katalogu. Dosud je mohla spustit kterákoli aplikace s příslušnými oprávněními. Nově Shopify vyžaduje, aby partnerská aplikace měla k bulk operacím výslovně povolený přístup.

    Přístup se uděluje zvlášť pro bulk queries a zvlášť pro bulk mutations. Mutace bulkOperationRunQuery vyžaduje přístup k bulk queries, mutace bulkOperationRunMutation přístup k bulk mutations. Požadavek platí pro všechny verze API. Týká se veřejných aplikací i custom aplikací vytvořených partnery; aplikace, které obchodníci vytvoří v adminu nebo v Dev Dashboardu, se zatím nemění.

    Změna navazuje na sérii opatření kolem bulk operations. Dříve Shopify zrychlil bulk queries a o několik dní dřív zavedl povinné IP allowlisty pro public apps, kde mají aplikace s bulk operations nejkratší termín. Cílem je mít přehled, které aplikace bulk operations skutečně používají, a lépe chránit platformu i obchodníky.
  zdroje:
    - title: "Shopify: Partner apps must enable bulk operations before use"
      url: "https://shopify.dev/changelog/posts/partner-apps-must-enable-bulk-operations-before-use"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Partnerské aplikace potřebují před spuštěním bulk operace explicitně povolený přístup. Bulk queries a bulk mutations se povolují samostatně. Pokud aplikace spustí bulk operaci bez přístupu, API vrátí chybu access denied. Pravidlo platí pro všechny verze Admin GraphQL API.

Povolení se dělá v Partner Dashboardu: Apps, výběr aplikace, v postranním menu API access requests a v sekci Run bulk operations povolit bulk queries, bulk mutations, nebo obojí. Není třeba měnit konfiguraci aplikace, vydávat novou verzi ani nechat obchodníky aplikaci přeinstalovat. Přístup platí pro všechny obchody, kde je aplikace nainstalovaná.

Aplikacím, které bulk operace už používají, byl přístup udělen automaticky. Pozor ale na pravidlo nečinnosti: pokud aplikace za posledních 31 dní nespustila bulk query nebo bulk mutation, přístup k danému typu ztrácí a musí ho znovu povolit. Sezónní nebo měsíční jobs tak mohou narazit.

## Časová osa

- 2026-11-06: zveřejnění změny v changelogu (aktualizováno 2026-11-08).
- 2026-11-07: v metadatech uvedené datum účinnosti; text příspěvku mluví o účinnosti od zveřejnění.
- Existující aplikace s bulk operacemi: přístup udělen automaticky.
- Aplikace bez bulk operace za posledních 31 dní: přístup k danému typu se odebírá, nutné znovu povolit.
- Aplikace vytvořené v adminu nebo Dev Dashboardu: zatím beze změny.

## Dopad pro nás

**Pro vývojáře:** Zkontrolovat, které partnerské aplikace spouští bulk operace, a ověřit v Partner Dashboardu, že mají povolené správné typy (query, mutation). Zvlášť u úloh, které běží méně často než jednou za 31 dní (měsíční exporty, sezónní importy), je potřeba přístup hlídat nebo ho předem znovu povolit. Do error handlingu přidat zachycení chyby access denied u bulkOperationRunQuery a bulkOperationRunMutation a alert, aby to nezůstalo skryté.

**Pro PM / PO:** Jde o provozní riziko, ne o změnu funkcionality. Stačí jednorázově projít seznam aplikací, ověřit povolení a určit vlastníka, který bude hlídat nepravidelné úlohy. Změna se časově kryje s povinnými IP allowlisty, kde mají aplikace s bulk operacemi termín 12. listopadu 2026, proto je dobré obě kontroly udělat najednou.

## Použití v Integrátoru

Integrátor používá bulk operace pro hromadné načítání a úpravy dat a je potřeba ověřit, že příslušné aplikace mají v Partner Dashboardu povolené bulk queries i bulk mutations. Úlohy s delším intervalem než 31 dní je třeba zahrnout do monitoringu.
