---
date: 2026-06-17
title: "Built for Shopify requirements: Returns + Subscriptions apps musí používat Customer Account API (deadline 1. 12. 2026)"
title_en: "Built for Shopify requirements for Returns/exchanges and Subscription apps (effective Dec 1, 2026)"
slug: built-for-shopify-returns-subscriptions-customer-account-api
zdroj: https://shopify.dev/changelog/built-for-shopify-requirements-for-returns-and-exchanges-and-subscription-apps
shrnuto_dne: 2026-06-18
kategorie: [deprecation, breaking-change]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor nabízí buyer-facing self-service flow pro returns nebo subscription management, musí přejít na Customer Account API pro autentizaci."
dotcene_klienty: []
souvisejici:
  - customer-account-web-component
  - headless-checkout-sso-silent
  - feature-preview-customer-account-improvements
tldr: "Od 1. 12. 2026 musí všechny Built for Shopify apps v kategorii Returns/exchanges a Subscriptions používat Customer Account API pro autentizaci zákazníků v buyer-facing flow — jinak přijdou o Built for Shopify status."
tagy: [built-for-shopify, returns, subscriptions, customer-account-api, deadline]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Built for Shopify je certifikační program, který označuje aplikace splňující nejvyšší standardy kvality, bezpečnosti a integrace na Shopify App Store. Certifikované aplikace získávají výrazné zvýraznění ve výsledcích vyhledávání a důvěru merchantů. Udržení certifikace vyžaduje průběžné plnění měnících se požadavků — Shopify je pravidelně zpřísňuje s každou generací ekosystému.

    Customer Account API je moderní autentizační standard, který Shopify prosazuje napříč celým ekosystémem jako náhradu za starší, roztříštěné způsoby přihlašování zákazníků. Poskytuje jednotné, bezpečné SSO přihlášení napříč storefront, checkout a customer account stránkami. Shopify tímto krokem standardizuje buyer-facing UX a zároveň zvyšuje bezpečnost zákaznických dat.

    Nové požadavky se týkají konkrétně dvou kategorií aplikací: (1) Returns and exchanges apps a (2) Subscription apps. Oba typy aplikací typicky nabízejí zákazníkům self-service portál — správu reklamací/vratek nebo správu předplatných. Právě v těchto buyer-facing flowech musí být od 1. 12. 2026 autentizace řešena výhradně přes Customer Account API. U Subscription apps přibývá další požadavek: správa předplatných musí být dostupná skrze Customer Account UI extensions.

    Praktický dopad je jasný: aplikace, které stále používají vlastní autentizaci, cookie-based session nebo jiné nestandardní metody pro přihlašování zákazníků do self-service portálů, musí tuto část kódu přepsat. Nesplnění požadavku do deadlinu znamená ztrátu Built for Shopify certifikace, což se okamžitě projeví na viditelnosti a důvěryhodnosti aplikace v App Store.
  zdroje:
    - title: "Shopify: Built for Shopify requirements for Returns/exchanges and Subscription apps (effective Dec 1, 2026)"
      url: "https://shopify.dev/changelog/built-for-shopify-requirements-for-returns-and-exchanges-and-subscription-apps"
    - title: "Shopify Docs: Built for Shopify Requirements"
      url: "https://shopify.dev/docs/apps/launch/built-for-shopify/requirements"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od **1. prosince 2026** platí pro Built for Shopify certifikaci nové povinné požadavky:

**Returns and exchanges apps** (sekce 5.12.4):
- Apps musí podporovat **Customer Account API** jako primární metodu autentizace zákazníků v buyer-facing self-service experience.

**Subscription apps** (sekce 5.14.4 a 5.14.5):
- Apps musí používat **Customer Account UI extensions** pro buyer-facing rozhraní správy předplatných.
- Apps musí podporovat **Customer Account API** jako primární metodu autentizace zákazníků.

Aplikace, které buyer-facing self-service experience nenabízejí (tj. nemají žádné zákaznické portály ani self-service flows), nejsou touto změnou dotčeny.

## Časová osa

| Datum | Událost |
|---|---|
| 17. 6. 2026 | Vyhlášení nových požadavků |
| **1. 12. 2026** | **Deadline: plná shoda povinná pro zachování Built for Shopify statusu** |

Shopify explicitně upozorňuje, že aplikace, které deadline nesplní, přijdou o Built for Shopify certifikaci. Certifikaci lze obnovit po dosažení shody — postup popisuje [Regaining Lost Status](https://shopify.dev/docs/apps/launch/built-for-shopify/regain-lost-status).

## Dopad pro nás

Relevantní je pro jakoukoliv aplikaci v kategorii Returns/exchanges nebo Subscriptions, která nabízí zákazníkům přímou self-service správu (portál pro reklamace, správa předplatného apod.).

Klíčové otázky při posouzení dopadu:
1. **Má aplikace buyer-facing self-service UI?** Pokud ne, změna se aplikace netýká.
2. **Jak je aktuálně řešena autentizace zákazníků?** Pokud ne přes Customer Account API, je nutná migrace.
3. **Subscription apps**: jsou subscriber-facing flows vystaveny přes Customer Account UI extensions? Pokud ne, je nutná implementace.

Migrace na Customer Account API zahrnuje změnu autentizačního flow — místo vlastní session/cookie autentizace se využívá OAuth 2.0 token flow Shopify Customer Account API. Dokumentace je dostupná na [shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/authenticate-customers](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/authenticate-customers).

## Použití v Integrátoru

Pokud Integrátor obsahuje nebo plánuje buyer-facing flows pro správu vratek nebo předplatných (self-service portál přístupný přímo zákazníkem), musí tyto flows používat Customer Account API pro autentizaci. Jinak aplikace nesplní Built for Shopify požadavky a přijde o certifikaci k 1. 12. 2026.

Doporučený postup: projít aktuální implementaci self-service flows a ověřit, zda autentizace zákazníků probíhá přes Customer Account API. Pokud ne, naplánovat migraci s dostatečným předstihem před prosincem 2026.
