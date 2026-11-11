---
date: 2026-11-10
title: "Updated eligibility requirements pro Shop app (otevření i obchodům bez Shopify Payments)"
title_en: "Updated eligibility requirements for Shop"
slug: updated-eligibility-requirements-shop
zdroj: https://changelog.shopify.com/posts/updated-eligibility-requirements-for-shop
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nepřímo: změna se týká viditelnosti obchodů v Shop app, ne API, takže u klientských obchodů jde o kontrolu stavu způsobilosti v adminu."
dotcene_klienty: []
souvisejici: ["editions-fall-2026-shop", "promoted-placements-shop-campaigns-beta", "shop-campaigns-shopifyql-2026-10-metrics"]
tldr: "Shop nově umožňuje zobrazení i obchodům bez Shopify Payments a zároveň se pro všechny obchody změnila pravidla způsobilosti; kdo je nesplní, na Shopu se neobjeví, dokud je nesplní."
tagy: [shop-app, eligibility, shopify-payments, shop-campaigns, requirements]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shop je spotřebitelská aplikace a web Shop.com, přes které Shopify posílá kupující do obchodů. Dosud se na Shopu mohly zobrazovat jen obchody používající Shopify Payments. Změna z 10. listopadu 2026 tuto podmínku uvolňuje: obchody se mohou objevit bez ohledu na platební bránu a mohou získávat návštěvnost z aplikace Shop i ze Shop.com.

    Současně Shopify aktualizoval požadavky způsobilosti pro všechny obchody. Obchody, které nové požadavky splňují, se na Shopu zobrazují. Obchody, které je nesplňují, se nezobrazí, dokud je nesplní. Konkrétní kritéria changelog neuvádí a odkazuje na stránku Shop eligibility requirements v Shopify Help Center, takže je třeba je ověřit tam.

    Shop Campaigns, tedy reklamní nástroj placený za prodeje, zůstávají vyhrazené pro obchody se Shopify Payments, které splňují aktualizované požadavky. Obchody bez Shopify Payments se tedy na Shopu zobrazí, ale do Shop Campaigns se zapojit nemohou. Stav způsobilosti lze kdykoli zkontrolovat v kanálu Shop v Shopify adminu, kde se u nezpůsobilého obchodu zobrazí, co je potřeba opravit.
  zdroje:
    - title: "Shopify: Updated eligibility requirements for Shop"
      url: "https://changelog.shopify.com/posts/updated-eligibility-requirements-for-shop"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shop se otevírá obchodům, které nepoužívají Shopify Payments. Dřív byla Shopify Payments podmínkou zobrazení, nově se mohou objevit i obchody s jinou platební bránou a získávat provoz z aplikace Shop a Shop.com. Zároveň došlo k aktualizaci požadavků způsobilosti pro všechny obchody: kdo je splňuje, na Shopu je vidět, kdo ne, ten se neobjeví, dokud požadavky nesplní.

Shop Campaigns zůstávají omezené na obchody se Shopify Payments, které splňují aktualizované požadavky. Seznam konkrétních kritérií changelog neobsahuje, odkazuje na Help Center.

## Časová osa

- 2026-11-10: změna platí, nové požadavky jsou aplikovány na všechny obchody.
- Průběžně: stav způsobilosti obchodu je vidět v kanálu Shop v adminu.

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani povinná technická akce. Změna se projeví jen ve viditelnosti obchodů v Shop app.

**Pro PM / PO:** Obchodům, které dosud kvůli platební bráně na Shopu nebyly, se otevírá nový zdroj návštěvnosti. Naopak u obchodů, které nové požadavky nesplní, hrozí, že z Shopu zmizí. Doporučujeme u relevantních obchodů zkontrolovat stav v kanálu Shop, projít kritéria v Help Center a u zájemců o Shop Campaigns počítat s tím, že vyžadují Shopify Payments.

## Použití v Integrátoru

Přímé využití nemáme, jde o změnu v Shop kanálu, ne v API. Případně lze stav způsobilosti obchodů zahrnout do onboardingového checklistu.
