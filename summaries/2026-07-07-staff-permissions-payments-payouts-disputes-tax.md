---
date: 2026-07-07
title: "Nové staff permissions: payments, payouts, disputes, tax documents (granulární kontrola)"
title_en: "New and updated staff permissions for payments, payouts, disputes, and tax documents"
slug: staff-permissions-payments-payouts-disputes-tax
zdroj: https://changelog.shopify.com/posts/new-and-updated-staff-permissions-for-payments-payouts-disputes-and-tax-documents
shrnuto_dne: 2026-07-10
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor pracuje s finančními daty přes staff účty (payouts, tax docs), granularita rolí ovlivňuje, co daný účet reálně uvidí a zapíše v Adminu."
dotcene_klienty: []
souvisejici: [unified-pos-staff-management, track-app-activity-permissions, rbac-org-management-partners]
tldr: "Shopify přidal čtyři nová/aktualizovaná staff permissions — manage payments, manage disputes, view payouts, view tax documents — díky nimž lze delegovat finanční agendu bez sdílení celého admin přístupu."
tagy: [staff, permissions, payments, payouts, disputes, tax, admin, granular]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Admin dlouhodobě rozlišuje přístup uživatelů pomocí staff permissions v Settings > Users > Roles — sada přepínačů, kterými merchant určuje, co konkrétní zaměstnanec nebo role smí v administraci vidět a upravovat. Finanční oblast (Shopify Payments, výplaty, spory s kartovými asociacemi, daňové dokumenty) byla dosud pokrytá jen hrubě, často spadala pod širší "manage settings" nebo vyžadovala plný admin přístup.

    Tato aktualizace přidává čtyři granulárnější přepínače: manage payments settings, manage disputes, view payouts a view tax documents. V praxi to řeší běžný scénář retail a e-commerce firem — externí účetní nebo finanční kontrolor potřebuje vidět výplaty a daňové dokumenty (1099-K a obdobné formuláře), ale nemá důvod zasahovat do produktů, objednávek nebo zákaznických dat. Podobně provozní manažer může řešit spory (chargebacks) bez toho, aby měnil platební nastavení obchodu.

    Permissions se přiřazují ve Settings > Users > Roles > Permissions a Shopify je nasazuje postupně (rollout). Jde o čistě administrativní/UI vylepšení v rámci Shopify Admin, bez dopadu na Admin GraphQL/REST API scopes nebo na chování checkoutu — pro merchanty jde hlavně o lepší oddělení pravomocí (separation of duties) a snazší audit, kdo má přístup k citlivým finančním datům.
  zdroje:
    - title: "Shopify: New and updated staff permissions for payments, payouts, disputes, and tax documents"
      url: "https://changelog.shopify.com/posts/new-and-updated-staff-permissions-for-payments-payouts-disputes-and-tax-documents"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšířil sadu staff permissions v Adminu o čtyři nové/aktualizované přepínače zaměřené na finanční agendu:

- **Manage payments** — správa nastavení Shopify Payments (bez plného admin přístupu)
- **Manage disputes** — řešení sporů a chargebacks
- **View payouts** — náhled na výplaty a historii vyplácení
- **View tax documents** — náhled na daňové dokumenty (např. 1099-K)

Cílem je umožnit merchantům přiřadit konkrétní roli jen tu část finanční agendy, kterou daný člověk skutečně potřebuje — typicky externí účetní vidí jen výplaty a daňové dokumenty, provozní manažer řeší spory, ale nikdo z nich nemá automaticky přístup ke zbytku administrace. Permissions se nastavují ve Settings > Users > Roles > Permissions a Shopify je zavádí postupně napříč účty.

Jde čistě o vylepšení Admin UI a role-based access control — nemění se API scopes, checkout ani datový model plateb.

## Časová osa

- **7. 7. 2026** — oznámení na Shopify changelogu, postupný rollout permissions do Admin rolí

## Dopad pro nás

**Pro vývojáře:** Žádný dopad na Admin API, webhooky ani scopes aplikací — jde výhradně o merchant-facing role v Adminu. Pokud integrátor někdy generuje pokyny pro nastavení staff rolí (např. v onboarding dokumentaci pro klienta), stojí za zmínku, že teď existuje jemnější granularita pro finanční přístupy.

**Pro PM / PO:** Užitečná informace pro klienty s externí účetní/finanční správou nebo víc pobočkami — lze doporučit oddělit přístup k výplatám a daňovým dokumentům od zbytku administrace, což zlepšuje bezpečnost a audit bez nutnosti řešit to přes vlastní workaround (sdílené přihlašování, exporty apod.).

## Použití v Integrátoru

Přímo se nás netýká na úrovni kódu (žádné API/scope změny), ale může se hodit jako doporučení klientům při nastavování přístupových rolí v Adminu.
