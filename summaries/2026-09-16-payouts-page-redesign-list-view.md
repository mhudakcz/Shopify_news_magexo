---
date: 2026-09-16
title: "Payouts page redesign — všechny payouty v jednom list view s expandable breakdowns"
title_en: "Payouts page redesign: see all your payouts in one view"
slug: payouts-page-redesign-list-view
zdroj: https://changelog.shopify.com/posts/payouts-page-redesign-see-all-your-payouts-in-one-view
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-09-18

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-16

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o čistě UI redesign stránky Payouts v adminu bez dopadu na API, ale přehlednější list view a breakdowny usnadní orientaci při řešení dotazů klientů na konkrétní výplatu."
dotcene_klienty: []

souvisejici: [shopify-payments-balance-activity-report, multi-currency-payouts-australia-france, clearer-payout-balance-shopify-payments]

tldr: "Shopify přepracovává stránku Payouts na list view — vlevo chronologický seznam paid a pending payoutů, vpravo detail vybrané výplaty s rozklikávatelným breakdownem, postupně pro všechny merchanty na webu i mobilu."

tagy: [shopify-payments, payouts, redesign, list-view, finance, admin]

kontext:
  background: |
    Stránka Payouts v Shopify adminu dosud zobrazovala výplaty spíš jako samostatné záznamy, mezi kterými se obchodník musel proklikávat jednotlivě, aby zjistil jejich stav a složení. Zářijový redesign mění layout na list-based zobrazení: vlevo je date-led seznam všech výplat (paid i pending) seřazený chronologicky, vpravo vedle něj panel s detailem právě vybrané výplaty. Obchodník tak vidí přehled i detail najednou, bez nutnosti přecházet mezi samostatnými stránkami nebo se vracet zpět v prohlížeči.

    Součástí redesignu jsou expandable breakdowns u vybraného payoutu — rozklikávací sekce, které rozepisují, z čeho se daná výplata skládá (tržby, poplatky, refundy, případné adjustmenty). Shopify to prezentuje i jako krok ke snazší traceability u payout failures, tedy situací, kdy výplata selže nebo je zpožděná a obchodník potřebuje rychle dohledat proč. Změna navazuje na Shopify Payments activity report z 22. 8., který řeší podobný problém z opačného směru — souhrnný pohled na pohyby balance za období, zatímco redesignovaná Payouts page teď zlepšuje pohled na jednotlivé výplaty v čase.

    Redesign zapadá do dlouhodobější snahy Shopify sjednotit a zpřehlednit finanční UI kolem Shopify Payments — v květnu proběhlo přejmenování a vysvětlení „payout balance" terminologie, v srpnu přibyl activity report, teď se mění i samotný přehled výplat. Nasazení je postupné (gradual rollout) do adminu na webu i v mobilní aplikaci, takže ne všichni obchodníci uvidí nový list view ve stejný okamžik.
  zdroje:
    - title: "Shopify: Payouts page redesign: see all your payouts in one view"
      url: "https://changelog.shopify.com/posts/payouts-page-redesign-see-all-your-payouts-in-one-view"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify přepracovává stránku **Payouts** v adminu na **list-based layout**. Vlevo je nově chronologický, date-led seznam všech výplat — paid i pending — takže obchodník na první pohled vidí, co už bylo vyplaceno a co je na cestě. Vpravo vedle seznamu se zobrazuje detail právě vybrané výplaty, včetně **expandable breakdownu**, který rozepisuje, z čeho se daná částka skládá.

Cílem je zjednodušit orientaci ve výplatách a zlepšit traceability u payout failures — tedy rychleji dohledat, proč konkrétní výplata selhala nebo se zpozdila, aniž by obchodník musel proklikávat jednotlivé záznamy zvlášť. Nasazení probíhá postupně (gradual rollout) do Shopify adminu na webu i v mobilní aplikaci.

## Časová osa

- **2026-05-23** — přejmenování a vysvětlení „payout balance" terminologie na stránce Payouts.
- **2026-08-22** — spuštěn Shopify Payments activity report (souhrnný přehled pohybů balance za období).
- **2026-09-16** — ohlášen redesign stránky Payouts na list view s expandable breakdowny, postupný rollout.

## Dopad pro nás

**Pro vývojáře:** Jde o čistě UI změnu v Shopify adminu nad existujícími daty o výplatách — nepřidává nové API endpointy, pole ani mutace, takže bez dopadu na naši integraci či synchronizaci dat.

**Pro PM / PO:** Užitečná informace pro klienty, kteří se často ptají na stav konkrétní výplaty nebo řeší zpožděné payouty — nový list view s breakdownem jim (i naší podpoře) usnadní rychle dohledat detail bez zbytečného proklikávání. Dobře doplňuje srpnový activity report jako druhou půlku zlepšeného finančního přehledu v adminu.

## Použití v Integrátoru

Přímý dopad na naši integraci nemá, jde o nativní redesign admin UI. Stojí za zmínku klientům, kteří řeší dohledávání konkrétních výplat nebo payout failures — nový list view jim může ušetřit čas při vlastní diagnostice.
