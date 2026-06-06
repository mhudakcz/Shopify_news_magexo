---
date: 2026-02-04
title: "Store credit pro B2B company locations"
title_en: "Store Credit for B2B"
slug: store-credit-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme customer methods (26+). Store credit pro B2B se ukládá na úrovni company location. Pokud klient potřebuje granulární kreditní stav za jednotlivé pobočky, lze přes Admin API."
dotcene_klienty: []

kontext:
  background: |
    Store credit (obchodní kredit) je virtuální peněžní prostředek evidovaný u e-shopu, který zákazník může čerpat při budoucích nákupech místo platby kartou nebo převodem. V Shopify Admin GraphQL API ho zastupuje objekt StoreCreditAccount s poli balance (zůstatek typu MoneyV2), owner (vlastník účtu) a transactions (historie pohybů s typy credit, debit, expiration). Přístup vyžaduje scope read_store_credit_accounts.

    Shopify store credit existoval před Winter 2026 výhradně pro jednotlivé B2C zákazníky — vazba byla 1:1 mezi CustomerAccount a StoreCreditAccount. B2B prostředí Shopify přitom pracuje se strukturou Company → CompanyLocation → zákazník, kde jedna firma může mít více poboček s odlišnými objednávkami, limity i platebními podmínkami. Rozšíření kreditu na úroveň company location proto vyplňuje logickou mezeru: refund nebo goodwill kredit nyní náleží konkrétní pobočce, nikoli anonymně celé firmě ani jednomu kontaktu.

    Pro B2B obchodníky to otevírá nové scénáře: automatizované refundy po vrácení zboží bez nutnosti iniciovat bankovní převod, věrnostní programy rozlišující jednotlivé odběratele v rámci jednoho holdings, nebo rychlé goodwill kompenzace. Finanční logika kreditu doplňuje sousední funkce z téhož vydání jako dynamické payment terms, ACH platby či pravidla pro schvalování objednávek — dohromady tvoří kompletní B2B finanční vrstvu přímo v Shopify.

    Trend naznačuje další prohlubování B2B nativní funkcionality; v dubnu 2026 Shopify oznámilo, že B2B features přestávají být výsadou Shopify Plus a jsou dostupné i na nižších plánech, což rozšiřuje dosah store credit pro B2B na širší skupinu obchodníků.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "StoreCreditAccount — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount"
    - title: "Dynamické payment terms a deposits pro B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/dynamic-payment-terms-deposits-b2b/"
    - title: "Shopify zpřístupňuje B2B features všem plánům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Merchant může vystavit store credit B2B zákazníkovi přímo na úrovni company location."
tagy: [b2b, store-credit, customer]
---

## Co se mění
Shopify B2B umožňuje vystavit **store credit** (kredit, který lze čerpat při dalších nákupech) přímo na úrovni **company location** — dříve byl store credit jen pro single customer účty. Užitečné pro B2B refundy, loyalty a goodwill scénáře.

## Použití v Integrátoru
**Možná** — pokud klient řeší refundy nebo loyalty pro B2B zákazníky, store credit lze nyní vystavit programaticky přes Admin API. Naše customer methods mohou číst kreditní balance pro reporting.
