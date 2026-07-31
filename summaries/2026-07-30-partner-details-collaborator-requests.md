---
date: 2026-07-30
title: "Merchanti vidí partner details u collaborator requests — trust context"
title_en: "Merchants now see partner details on collaborator requests"
slug: partner-details-collaborator-requests
zdroj: https://shopify.dev/changelog/partner-details-on-collaborator-requests
shrnuto_dne: 2026-07-31
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Když naše partnerská organizace žádá o collaborator access do klientského obchodu, merchant teď u žádosti uvidí i detaily o naší partnerské organizaci."
dotcene_klienty: []
souvisejici: [partner-identity-verification, rbac-org-management-partners, new-app-submission-experience-partner-dashboard]
tldr: "Shopify od 30. července 2026 automaticky zobrazuje merchantům detail partnerské organizace (délka působení, země registrace i požadavku, počet aktivních spoluprací) přímo u žádosti o collaborator access."
tagy: [partner, collaborator, dev-dashboard, trust, security]
zdroj_kanal: dev-changelog

kontext:
  background: |
    Collaborator access je mechanismus, kterým partnerská organizace žádá merchanta o přístup do jeho živého Shopify obchodu — typicky kvůli vývoji, údržbě nebo debugování. Doteď merchant viděl u příchozí žádosti jen jméno partnera a požadovaná oprávnění, bez dalšího kontextu o tom, kdo přesně o přístup žádá a jak dlouho a odkud partner na Shopify působí.

    Od 30. července 2026 Shopify k žádosti automaticky přidává čtyři informace o partnerské organizaci: jak dlouho je organizace na Shopify aktivní, ve které zemi je partnerský účet registrovaný, ze které země žádost fakticky přichází, a přibližný počet aktivních spoluprací s obchody na placených plánech. Podle changelogu jde o údaje generované automaticky z partnerského účtu a jeho aktivity — partner nic nevyplňuje ani nekonfiguruje.

    Změna navazuje na zavedení identity verification pro Shopify Partners (9. července 2026), kde se ověřovala konkrétní fyzická osoba přes Stripe Identity. Tam šlo o ověření identity žadatele, tady jde o kontext k celé partnerské organizaci, který má merchantovi pomoct rozhodnout, zda žádosti důvěřovat — typicky jako obrana proti social engineeringu nebo žádostem od nedávno založených či podezřele umístěných účtů. Obě změny spadají do širší trust iniciativy, kterou Shopify v posledních měsících staví napříč partnerským ekosystémem (vedle RBAC/org managementu v Partner Dashboardu a přísnějšího vymáhání pravidel v App Store).
  zdroje:
    - title: "Shopify: Merchants now see partner details on collaborator requests"
      url: "https://shopify.dev/changelog/partner-details-on-collaborator-requests"
    - title: "Identity verification pro Shopify Partners spuštěna — trust initiative"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/partner-identity-verification/"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Merchant, kterému partnerská organizace pošle žádost o collaborator access do jeho obchodu, teď u žádosti uvidí automaticky doplněný "trust context": jak dlouho partner na Shopify působí, ze které země je partnerský účet registrovaný, ze které země žádost skutečně přišla, a přibližný počet aktivních spoluprací s obchody na placených plánech. Všechna data se generují sama z existujícího partnerského účtu a jeho historie aktivity — na straně partnera se nic nevyplňuje ani neudržuje.

Cílem je dát merchantovi před schválením konkrétnější, ověřitelný kontext o tom, komu přístup do svého obchodu vlastně dává, a ztížit tak úspěšnost útoků typu social engineering, kdy se někdo za partnera jen vydává nebo zneužije neopatrnost obchodníka. Zároveň to zvýhodňuje partnery s dlouhou historií a čistou reputací — jejich žádosti teď nesou viditelně víc důvěryhodnosti než žádost z čerstvě založeného účtu.

Změna se týká pouze nových žádostí o spolupráci odeslaných od 30. července 2026 dál. Na již schválené a existující collaborator access vztahy nemá žádný vliv.

## Časová osa

- **9. července 2026** — spuštěna identity verification pro Shopify Partners (ověření konkrétní osoby přes Stripe Identity)
- **30. července 2026** — merchanti u nových žádostí o collaborator access automaticky vidí partner details (tenure, země registrace, země žádosti, počet aktivních spoluprací)
- Nadále — beze změny pro už schválené a existující spolupráce

## Dopad pro nás

**Pro vývojáře:** Přímo se nic nekonfiguruje ani neintegruje — údaje se generují automaticky z partnerského účtu. Prakticky to znamená, že při žádosti o collaborator access do klientského obchodu uvidí merchant vedle jména naší partnerské organizace i tyto doplňkové údaje, což může ovlivnit, jak rychle a ochotně žádost schválí.

**Pro PM / PO:** Stojí za to komunikovat klientovi dopředu, že u žádosti o přístup uvidí i tyto detaily o naší partnerské organizaci — snižuje to riziko, že žádost zůstane nepovšimnutá nebo že ji merchant z nejistoty odloží. Zároveň je to další důvod, proč mít dokončenou identity verification u členů týmu, kteří žádosti odesílají — jde ruku v ruce s celkovým dojmem důvěryhodnosti.

## Použití v Integrátoru

Přímý technický dopad na Integrátor není — jde o změnu v UI Partner Dashboardu při schvalování collaborator access, mimo API a datový model. Relevance je čistě provozní, u procesu žádání o přístup do klientských obchodů.
