---
date: 2026-07-09
title: "Identity verification pro Shopify Partners spuštěna — trust initiative"
title_en: "Identity verification for Shopify Partners starts today"
slug: partner-identity-verification
zdroj: https://shopify.dev/changelog/identity-verification-for-partners
shrnuto_dne: 2026-07-10
kategorie: [deprecation, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud členové našeho Partner účtu žádají o collaborator access do klientských obchodů, budou muset projít ověřením identity."
dotcene_klienty: []
souvisejici: [rbac-org-management-partners, app-store-req-1-3-honest-review-practices, new-app-submission-experience-partner-dashboard]
tldr: "Shopify spustilo ověřování identity partnerů přes Stripe (foto ID + selfie) — zatím dobrovolné, v nadcházejících týdnech povinné pro odesílání žádostí o collaborator access."
tagy: [partner, identity-verification, trust, compliance, action-required]
zdroj_kanal: dev-changelog

kontext:
  background: |
    Identity verification je proces ověření totožnosti konkrétní fyzické osoby, obvykle kombinací dokladu totožnosti (občanský průkaz, pas) a biometrického ověření živosti (selfie nebo krátké video). Slouží jako obrana proti falešným účtům, převzatým identitám nebo automatizovaným botům, které se vydávají za skutečné osoby v systémech, kde je nutná vysoká míra důvěry.

    Shopify Partners je ekosystém agentur, freelancerů a vývojářů, kteří pro obchodníky spravují nebo vyvíjejí Shopify obchody a aplikace. Součástí této spolupráce je i mechanismus collaborator access — partner požádá o žádost o přístup do živého obchodu klienta a merchant ji schválí. Tento kanál byl historicky ochráněn jen běžným přihlášením k Partner účtu, bez ověření, že za žádostí skutečně stojí důvěryhodná osoba. To z něj dělalo potenciální vektor pro zneužití, například sociální inženýrství nebo přebírání identity legitimních partnerů.

    Zavedení identity verification (přes Stripe Identity) je součástí širší trust foundational iniciativy, kterou Shopify v posledních měsících buduje napříč celým partnerským ekosystémem — patří sem i granulárnější RBAC a org management v Partner Dashboardu, structured tracking app submissions a auditů, nebo přísnější vymáhání pravidel o čestných recenzích v App Store. Cílem je, aby merchanti mohli s vyšší jistotou důvěřovat komukoli, kdo žádá o přístup k jejich obchodu nebo kdo publikuje aplikaci do App Store.
  zdroje:
    - title: "Shopify Changelog: Identity verification for Shopify Partners starts today"
      url: "https://shopify.dev/changelog/identity-verification-for-partners"
    - title: "Role-based access control a org management pro partnery"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rbac-org-management-partners/"
    - title: "Nové App Store požadavky 1.3 — čestné a transparentní recenzní praktiky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-store-req-1-3-honest-review-practices/"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify od 9. července 2026 spustilo ověřování identity pro členy partnerských organizací, kteří chtějí odesílat žádosti o collaborator access do živých obchodů merchantů. Ověření probíhá přes Stripe Identity a vyžaduje:

- Vládou vydaný fotografický doklad totožnosti (občanský průkaz, pas)
- Selfie nebo jinou formu ověření živosti (liveness check)
- Dokončení celého procesu na stránce **Request collaborations** v Dev Dashboardu

Zatím je ověření **dobrovolné** — kdokoli může požádat o collaborator access i bez něj. To se ale v nadcházejících týdnech změní: jakmile Shopify ověření vymůže jako povinné, neověření uživatelé nebudou moci nové žádosti o spolupráci odesílat vůbec.

Ověření se váže na konkrétní fyzickou osobu v rámci partnerské organizace, nikoli na organizaci jako celek — každý člen týmu, který potřebuje žádat o přístup k obchodům klientů, tak bude muset projít vlastním ověřením.

## Časová osa

- **9. července 2026** — Identity verification spuštěna, zatím dobrovolná
- **Nadcházející týdny** — Ověření se stane povinným pro odesílání žádostí o collaborator access
- **Po vynucení** — Neověření členové partnerské organizace nebudou moci posílat nové žádosti o spolupráci

Shopify zatím nezveřejnilo přesné datum, kdy se ověření stane povinným.

## Dopad pro nás

**Pro vývojáře:** Pokud v rámci partnerské organizace pravidelně žádáte o collaborator access do klientských obchodů (např. při onboardingu nového projektu nebo debugování), doporučujeme projít ověřením proaktivně ještě před tím, než se stane povinným — vyhnete se výpadku, kdy by nová žádost o přístup nešla odeslat.

**Pro PM / PO:** Stojí za to ověřit, kteří členové týmu mají v Partner Dashboardu oprávnění žádat o collaborator access, a naplánovat jim ověření identity s předstihem, aby nedošlo ke zdržení při zahajování nových klientských zakázek. Jde o administrativní krok navázaný na konkrétní osobu, ne o firemní/organizační ověření.

## Použití v Integrátoru

Přímý technický dopad na Integrátor není — jde o proces v Partner Dashboardu mimo API, který se netýká žádného volání ani datového modelu. Relevantní je pouze provozně: členové týmu s přístupem k žádostem o spolupráci by měli mít ověření identity dokončené v předstihu.
