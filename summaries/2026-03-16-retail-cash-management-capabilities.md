---
date: 2026-03-16
title: "Retail cash management: nový CashDrawer resource v 2026-04"
title_en: "New retail cash management capabilities"
slug: retail-cash-management-capabilities
zdroj: https://shopify.dev/changelog/new-retail-cash-management-capabilities
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: pos
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se retail/POS cash drawer flow. Neděláme POS specific integrace s cash management."
dotcene_klienty: []

kontext:
  background: |
    CashDrawer je GraphQL resource reprezentující fyzickou pokladní zásuvku v místě prodeje. Jde o samostatnou entitu oddělenou od konkrétního POS terminálu — jeden drawer může být sdílen více zařízeními zároveň, což odpovídá běžné praxi ve větších prodejnách.

    Před tímto přidáním nebylo možné spravovat hotovost přes Admin GraphQL API programově. Shopify POS sice sledoval hotovostní transakce interně, ale vývojáři třetích stran neměli přístup k těmto datům ani k operacím jako vytvoření pokladny, přiřazení terminálu nebo sledování zůstatků. API verze 2026-04 toto mění a otevírá POS cash management pro vlastní aplikace.

    Nový resource přináší dotazy `cashDrawer` / `cashDrawers` pro čtení zůstatků a aktivit, mutaci `cashDrawerCreate` pro pojmenované pokladny a `pointOfSaleDeviceAssignToCashDrawer` pro vazbu terminálu. Přístup vyžaduje scope `read_cash_tracking`. Praktické využití zahrnuje auditní reporty, denní uzávěrky nebo reconciliation systémy napojené na externí účetnictví.

    CashDrawer resource navazuje na Cash Management Foundations vydané v dubnu 2026 — register sessions, reason codes pro výběry a mid-session cash counts jsou součástí stejného rozšiřování POS cash workflow v Shopify ekosystému.
  priklad: |
    query {
      cashDrawer(id: "gid://shopify/CashDrawer/123") {
        id
        name
        location { id name }
        totalSales(dateRange: {
          startDate: "2026-01-01T00:00:00Z"
          endDate: "2026-01-31T23:59:59Z"
        }) { amount currencyCode }
      }
    }
  zdroje:
    - title: "Shopify Changelog: New retail cash management capabilities"
      url: "https://shopify.dev/changelog/new-retail-cash-management-capabilities"
    - title: "Shopify Admin GraphQL: CashDrawer object"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer"
    - title: "Shopify Changelog: Cash Management Foundations pro POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cash-management-foundations-pos/"
    - title: "Shopify Changelog: Mid-session cash counts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-mid-session-cash-counts/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-04 zavádí CashDrawer resource a Admin GraphQL APIs pro custom cash management workflow v retail."
tagy: [pos, cash-drawer, retail]
editions_release: spring-2026
---

## Co se mění
API verze **2026-04** zavádí nový resource **CashDrawer** a sadu Admin GraphQL APIs pro custom cash management v retailu — typicky open/close drawer, tracking peněz v pokladně, denní uzávěrky.

## Použití v Integrátoru
**Nepoužíváme** — POS-specific cash drawer flow. Pokud by klient měl retail s POS, je relevantní pro custom reporting/audit.
