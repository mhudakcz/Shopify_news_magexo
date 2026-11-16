---
date: 2026-11-13
title: "Store activity log — audit log změn v obchodě (kdo, kdy, co změnil)"
title_en: "Review store changes in the new Store activity log"
slug: store-activity-log-new
zdroj: https://changelog.shopify.com/posts/review-store-changes-in-the-new-store-activity-log
shrnuto_dne: 2026-11-16
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Log pomáhá dohledat, kdo nebo která aplikace změnila produkty, ceny či nastavení, což usnadňuje ladění synchronizací."
dotcene_klienty: []
souvisejici: [review-app-access-security-admin, editions-fall-2026-operations, ip-allowlist-admin-api-restriction]
tldr: "Shopify přestavělo Store activity log: až 18 měsíců historie změn s filtry podle autora, akce a zdroje, dostupné v Nastavení > Obecné."
tagy: [activity-log, audit, admin, staff, security, compliance]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Store activity log byl dosud omezený na posledních 250 událostí, takže dohledat starší změnu bylo prakticky nemožné. Nová verze přináší jednotné místo pro odpověď na otázku, kdo co a kdy v obchodě změnil.

    Log pokrývá produkty, objednávky, slevy, témata, aplikace, personál, platby i nastavení obchodu. Každá změna je přiřazena členovi týmu, spolupracovníkovi, aplikaci nebo zaměstnanci Shopify. U některých změn z aplikací se autor neeviduje, a log pak ukazuje název aplikace.

    Novinka navazuje na sérii bezpečnostních a auditních změn z podzimu 2026, například kontrolu přístupů aplikací a IP allowlisty pro Admin API.
  zdroje:
    - title: "Shopify: Review store changes in the new Store activity log"
      url: "https://changelog.shopify.com/posts/review-store-changes-in-the-new-store-activity-log"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přestavělo Store activity log (Nastavení > Obecné > Store activity log). Zobrazuje změny produktů, objednávek, slev, témat, aplikací, personálu, plateb a nastavení obchodu na jednom místě. Záznamy lze filtrovat podle autora, typu akce, zdroje, změněného pole a časového rozsahu. Detail řádku ukazuje předchozí a novou hodnotu, pokud je k dispozici. Historie se uchovává až 18 měsíců (dříve 250 posledních událostí). Na stránkách produktů, objednávek, slev, dárkových karet, kolekcí a domén je akce View activity, která log otevře předfiltrovaný na danou položku.

Přístup mají vlastníci obchodu a členové týmu s oprávněním Manage settings i Edit (např. role Administrator nebo Organization administrator). Ostatní, kdo měli přístup ke starému logu, ho zatím mohou používat dál.

Omezení: historie začíná krátce před vydáním, starší změny se nezobrazí, a zatím nejsou zaznamenány všechny administrační akce.

## Časová osa

- 2026-11-13: nový Store activity log je dostupný.
- Starý log zůstává dočasně přístupný pro dřívější uživatele bez nových oprávnění.
- Pokrytí akcí se bude postupně rozšiřovat.

## Dopad pro nás

**Pro vývojáře:** Log pomůže dohledat, která aplikace nebo kdo změnil data v obchodě, což zrychluje ladění nečekaných změn produktů, cen či skladu. Nejde o API, jde o administrační rozhraní. U změn z aplikací se může zobrazit jen název aplikace.

**Pro PM / PO:** Užitečné pro accountability a audit trail u obchodů s více uživateli a při práci agentur pro klienty. Hodí se při řešení reklamací typu kdo změnil cenu či slevu. Je dobré zkontrolovat, že odpovědné osoby mají potřebná oprávnění, a zmínit 18měsíční retenci v onboardingu.

## Použití v Integrátoru

Při analýze nečekaných změn dat po synchronizaci lze v logu ověřit, zda změnu provedla integrace, jiná aplikace, nebo člověk. Nahrazuje část ručního dohledávání v případě incidentů.
