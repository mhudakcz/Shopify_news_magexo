---
date: 2026-06-16
title: "appSubscriptionCancel: nová mutation pro Partner API 2026-07"
title_en: "New appSubscriptionCancel mutation in the Partner API"
slug: appsubscriptioncancel-partner-api
zdroj: https://shopify.dev/changelog/new-appsubscriptioncancel-mutation-in-the-partner-api
shrnuto_dne: 2026-06-16
kategorie: [nova-api]
api_oblast: partner
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Partner API subscription managementu — relevantní pro klienty s vlastními Shopify apps."
dotcene_klienty: []
souvisejici:
  - shopify-app-pricing-usage-subscriptions
  - actor-field-subscription-billing
  - app-events-dev-dashboard
kontext:
  background: |
    Partner API je Shopify GraphQL rozhraní určené výhradně pro partnery (agentury, ISV, vývojáře app), kteří spravují aplikace, obchody a organizace přes Partner Dashboard. App subscription u public Shopify apps je placený plán, který si merchant aktivuje při instalaci aplikace z App Store — partner dostává pravidelné platby prostřednictvím Shopify Billing.

    Doposud bylo programatické zrušení app subscription možné pouze přes Partner Dashboard UI nebo nepřímo — merchant musel aplikaci odinstalovat. To komplikovalo automatizaci billing workflow, například při chybném naúčtování, při testování nebo při správě většího portfolia zákazníků.

    Nová mutation `appSubscriptionCancel` přináší čtyři možnosti: okamžité zrušení, odložené zrušení na konec billing cyklu, vyžádání prorated kreditu (poměrná refundace zbývajícího období) a volitelné přeskočení závěrečných usage charges u aplikací s usage-based billing. Přístup vyžaduje oprávnění „View financials" v Partner Dashboard.

    Prakticky to znamená, že partner může programaticky řídit celý lifecycle subscription bez manuálního zásahu v UI — relevantní zejména pro nástroje pro správu klientů, billing reconciliation systémy nebo interní dashboardy pro monitorování app revenue.
  zdroje:
    - title: "Shopify Changelog: appSubscriptionCancel Partner API"
      url: "https://shopify.dev/changelog/new-appsubscriptioncancel-mutation-in-the-partner-api"
    - title: "Shopify Partner API dokumentace 2026-07"
      url: "https://shopify.dev/docs/api/partner"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Partner API 2026-07 přináší mutation appSubscriptionCancel, která umožňuje partnerům programaticky rušit app subscriptions vlastních public apps — s okamžitým nebo odloženým účinkem, prorated kreditem a přeskočením usage charges."
tagy: [partner-api, app, subscription, billing, mutation]
zdroj_kanal: dev-changelog
---

## Co se mění

Shopify Partner API ve verzi 2026-07 zavádí novou mutation `appSubscriptionCancel`. Ta umožňuje partnerům zrušit app subscription libovolného merchantů pro vlastní public app přímo přes API, bez nutnosti manuálního zásahu v Partner Dashboardu.

Mutation podporuje čtyři scénáře:

- **Okamžité zrušení** — subscription skončí ihned po zavolání mutation.
- **Odložené zrušení** — subscription zůstane aktivní do konce aktuálního billing cyklu.
- **Prorated kredit** — partner může vyžádat částečnou refundaci za nevyužité zbývající období billing cyklu.
- **Přeskočení závěrečných usage charges** — relevantní pro apps s usage-based billing; umožňuje nezaúčtovat poslední usage report před zrušením.

Mutation je dostupná pouze pro Partner API klienty s oprávněním **View financials** v Partner Dashboard.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-16 | Oznámení v Shopify Changelog |
| 2026-07-01 | Dostupnost v Partner API verzi 2026-07 |

## Dopad pro nás

Přímý dopad je nízký — mutation cílí na správu billing lifecycle vlastních public apps, nikoli na Admin API operace pro klienty. Pokud spravujeme vlastní Shopify apps distribuované přes App Store, přináší tato mutation možnost automatizovat rušení subscriptions v rámci interních nástrojů nebo billing dashboardů bez nutnosti UI interakce.

Oprávnění „View financials" je podmínkou přístupu — je třeba ověřit, zda ho mají relevantní Partner API integrační tokeny přiřazené.

## Použití v Integrátoru

Pokud Integrátor spravuje klientské apps nebo monitoring jejich billing stavu, je `appSubscriptionCancel` kandidátem pro automatizaci offboardingu nebo billing reconciliation workflow. Konkrétní implementace závisí na tom, zda klient využívá public Shopify app s vlastním Partner API přístupem. Doporučeno sledovat dokumentaci Partner API 2026-07 po jejím plném vydání pro detaily parametrů a návratových hodnot.
