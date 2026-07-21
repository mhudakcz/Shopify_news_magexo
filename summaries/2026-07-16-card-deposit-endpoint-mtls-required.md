---
date: 2026-07-16
title: "Card deposit endpoint vyžaduje mTLS certifikát (security enhancement)"
title_en: "Card deposit endpoint now requires mTLS certificate"
slug: card-deposit-endpoint-mtls-required
zdroj: https://shopify.dev/changelog/card-deposit-endpoint-now-requires-mtls-certificate
shrnuto_dne: 2026-07-21

kategorie: [breaking-change, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-16

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Mutace customerPaymentMethodCreditCardCreate/Update nyní nepoužíváme, ale při budoucím card vaultingu bychom museli mTLS certifikát zajistit."
dotcene_klienty: []
souvisejici: [mtls-payments-cert-renewal, rejection-reason-codes-payments-apps]

tldr: "Card deposit endpoint pro ukládání cardholder dat nově vyžaduje Shopify-issued mTLS certifikát; nezabezpečené requesty přestanou fungovat od 15. října 2026."
tagy: [api, mtls, security, card-deposit, payments, action-required]
zdroj_kanal: dev-changelog

kontext:
  background: |
    Card deposit endpoint (`checkout-mtls.pci.shopifyinc.com/sessions`) slouží aplikacím, které při tokenizaci platební metody potřebují Shopify přímo předat syrová data karty (číslo karty, CVV) — typicky v kombinaci s GraphQL Admin API mutacemi `customerPaymentMethodCreditCardCreate` a `customerPaymentMethodCreditCardUpdate`. Doposud endpoint přijímal requesty bez dodatečné klientské autentizace nad rámec běžného API access tokenu. Nově Shopify vyžaduje, aby každý request na tento endpoint nesl platný mTLS (mutual TLS) klientský certifikát vydaný přímo Shopify — server i klient se tedy vzájemně ověřují pomocí certifikátů, ne jen jednostranně jako u běžného HTTPS.

    Změna cílí úzce na aplikace, které fyzicky manipulují se syrovými daty karty na serverové straně — vlastní checkout flow, subscription platformy nebo POS řešení sbírající údaje karty přímo a předávající je Shopify k tokenizaci. Aplikace, které pouze importují už tokenizované platební metody přes `customerPaymentMethodRemoteCreate` (synchronizace tokenů z externích gateways jako Stripe, Braintree, Authorize.Net, Adyen nebo PayPal), tímto požadavkem dotčeny nejsou. Tvrdý deadline migrace je **15. října 2026** — po tomto datu Shopify neautentizované deposit requesty odmítne (401/403). Certifikáty mají platnost 1 rok se self-serve rotací přes Shopify Certificate Signing Service; první certifikát je nutné vyžádat e-mailem na `shopify-mtls-partnerships@shopify.com` s API client ID a technickým kontaktem, přičemž ruční podpis může trvat několik dní.

    Prakticky to znamená, že týmy provozující tento deposit flow musí (1) ověřit, zda vůbec zmíněné mutace používají, (2) včas vyžádat a nasadit certifikát s ohledem na dobu vyřízení, (3) implementovat prezentaci certifikátu při volání endpointu a (4) sledovat expiraci a rotaci před vypršením roční platnosti — jinak hrozí výpadek reálného ukládání platebních metod. Změna zapadá do širšího trendu zpřísňování bezpečnosti kolem Payments API před sezónní špičkou (viz i obnova mTLS certifikátu pro Payments Apps a rozšíření rejection reason codes).
  zdroje:
    - title: "Shopify: Card deposit endpoint now requires mTLS certificate"
      url: "https://shopify.dev/changelog/card-deposit-endpoint-now-requires-mtls-certificate"
  generated_at: 2026-07-21T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Endpoint pro ukládání (deposit) cardholder dat, používaný spolu s Admin API mutacemi `customerPaymentMethodCreditCardCreate` a `customerPaymentMethodCreditCardUpdate`, nově vyžaduje mTLS klientský certifikát vydaný Shopify. Requesty bez tohoto certifikátu budou po deadline odmítnuty. Aplikace pracující pouze s tokeny z externích platebních brán (`customerPaymentMethodRemoteCreate`) tuto změnu neřeší.

## Časová osa
- **2026-07-16** — endpoint začíná mTLS certifikát podporovat a vyžadovat certifikaci nových integrací
- **2026-10-15** — tvrdý deadline; neautentizované requesty budou zamítnuty (401/403)
- Certifikát má **1rok TTL** se self-serve rotací přes Certificate Signing Service

## Dopad pro nás
**Pro vývojáře:** Pokud aplikace přímo posílá syrová data karty do Shopify (ne jen tokeny z gateway), je potřeba vyžádat certifikát e-mailem na `shopify-mtls-partnerships@shopify.com` (uvést API client ID a technický kontakt), implementovat jeho prezentaci při volání endpointu a nastavit monitoring expirace/rotace.

**Pro PM / PO:** Jde o bezpečnostní zpřísnění s jasným deadlinem (15. 10. 2026) a bez dopadu na běžné importy tokenizovaných platebních metod od gateway providerů. Relevantní hlavně pro partnery vyvíjející vlastní checkout/card-vaulting řešení, ne pro standardní e-shopy.

## Použití v Integrátoru
Mutace `customerPaymentMethodCreditCardCreate`/`Update` v naší integraci aktuálně nepoužíváme — pracujeme s tokenizovanými platebními metodami od gateway providerů, kterých se tato změna netýká.
