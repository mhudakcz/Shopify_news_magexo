---
date: 2026-08-22
title: "Shopify Payments activity report — pohyby balance ve zvoleném období"
title_en: "Review Shopify Payments balance activity with the new activity report"
slug: shopify-payments-balance-activity-report
zdroj: https://changelog.shopify.com/posts/review-shopify-payments-balance-activity-with-the-new-activity-report
shrnuto_dne: 2026-08-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přehledný report o pohybech Shopify Payments balance usnadní klientům účetní uzávěrku a může snížit počet dotazů na reconciliaci, které dnes řešíme ručně."
dotcene_klienty: []
souvisejici: [clearer-payout-balance-shopify-payments, balance-app-new-look, staff-permissions-payments-payouts-disputes-tax]
tldr: "Shopify přidává activity report pro Shopify Payments balance — jeden přehled o počátečním/koncovém zůstatku, tržbách, poplatcích a výběrech za zvolené období, exportovatelný do PDF."
tagy: [shopify-payments, balance, activity-report, reporting, bookkeeping, finance]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify spustil nový activity report pro Shopify Payments balance, který obchodníkům dává jasnější přehled o tom, jak se peníze v jejich Shopify Payments účtu pohybovaly za zvolené časové období. Report v jednom pohledu shrnuje počáteční zůstatek, veškerou transakční aktivitu (tržby, refundy, chargebacky), související poplatky, výběry (payouts) a konečný zůstatek — přesně to, co dosud museli obchodníci a jejich účetní ručně skládat z více míst.

    Report je dostupný přes Finance > Documents > Shopify Payments activity report, případně přímo ze stránky Payouts. Podporuje export do PDF, takže se dá snadno přiložit k účetním podkladům nebo předat externí účetní firmě. Na rozdíl od stávající stránky Payouts, která je zaměřená na detail jednotlivých výplat, activity report cílí na souhrnný pohled za období — typicky pro month-end close, dohledávání výkyvů v zůstatku balance, nebo kontrolu stavu účtu před tím, než dorazí výplata.

    Jde o čistě reportovací funkci v Shopify adminu bez dopadu na API či datový model — nepřidává nová pole ani mutace, pouze nové UI pro agregaci existujících finančních dat. Pro klienty, kteří řeší disputes reconciliation nebo mají složitější účetní procesy (např. více právnických subjektů, jak popisuje související článek o multiple legal entities), jde o užitečné zjednodušení bez nutnosti cokoliv nastavovat.
  zdroje:
    - title: "Shopify: Review Shopify Payments balance activity with the new activity report"
      url: "https://changelog.shopify.com/posts/review-shopify-payments-balance-activity-with-the-new-activity-report"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidává do administrace nový **Shopify Payments activity report**, který za zvolené období shrnuje veškeré pohyby na Shopify Payments balance do jednoho přehledu. Report zobrazuje počáteční zůstatek, celkovou transakční aktivitu (tržby, refundy, chargebacky), s tím spojené poplatky, výběry prostředků (payouts) a konečný zůstatek.

Cílem je dát obchodníkům a jejich účetním jasnější odpověď na otázku „kam se poděly peníze v Shopify Payments balance za dané období", aniž by museli data ručně skládat z více stránek. Report je dostupný na dvou místech — v sekci **Finance > Documents > Shopify Payments activity report** a přímo ze stránky **Payouts** — a lze ho exportovat jako PDF pro účetní archivaci.

Shopify explicitně odlišuje tento nový report od stávající stránky Payouts: zatímco Payouts se soustředí na detail jednotlivých výplat, activity report je určený pro souhrnný pohled za období — typicky pro month-end close, dohledávání výkyvů zůstatku, nebo kontrolu stavu účtu před vypořádáním výplaty.

## Časová osa

- **22. 8. 2026** — funkce oznámena a dostupná v Shopify adminu (Finance > Documents i stránka Payouts)

## Dopad pro nás

**Pro vývojáře:** Jde čistě o nové UI/report v adminu nad existujícími finančními daty Shopify Payments — nepřidává nové API endpointy, pole ani mutace, takže žádný dopad na stávající integrace ani synchronizace dat.

**Pro PM / PO:** Užitečný argument pro klienty, kteří si stěžují na pracnost účetní uzávěrky nebo dohledávání rozdílů v Shopify Payments balance (např. při řešení chargebacků nebo víceoborových výplat). Můžeme jim ukázat, že Shopify nativně řeší reconciliaci, aniž bychom museli stavět vlastní reporting nad Payments API.

## Použití v Integrátoru

Přímý dopad na naši integraci nemá — jde o nativní reportovací nástroj v Shopify adminu. Stojí za zmínku klientům, kteří řeší účetní uzávěrky nebo dispute reconciliation, jako rychlé řešení bez nutnosti custom reportingu z naší strany.
