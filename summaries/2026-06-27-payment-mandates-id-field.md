---
date: 2026-06-27
title: "Payment mandates v Admin API 2026-07 nově exponují id field"
title_en: "Payment mandates now expose an id field"
slug: payment-mandates-id-field
zdroj: https://shopify.dev/changelog/payment-mandates-id-field
shrnuto_dne: 2026-06-30
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s payment methods a subscriptions — nové id pole na PaymentMandateResource umožní přesněji referencovat konkrétní mandate při zpracování opakovaných plateb nebo B2B vault operací."
dotcene_klienty: []
souvisejici:
  - "flow-automatic-charging-vaulted-payments"
  - "subscription-disclosure-checkout-update"
  - "built-for-shopify-returns-subscriptions-customer-account-api"
tldr: "PaymentMandateResource v Admin API 2026-07 dostává nové pole id, které odpovídá CustomerPaymentMethod.id a umožňuje aplikacím přesně identifikovat a referencovat konkrétní payment mandate v dalších API voláních."
tagy: [payment, mandate, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Payment mandate je autorizace, kterou držitel platební metody uděluje merchantovi — povolení účtovat konkrétní zdroj (např. subscription nebo B2B objednávku). Objekt `PaymentMandateResource` reprezentuje toto povolení v GraphQL Admin API a váže se na `CustomerPaymentMethod` prostřednictvím pole `mandates`.

    Dosud objekt `PaymentMandateResource` neobsahoval vlastní identifikátor. To komplikovalo situace, kdy jeden platební nástroj zákazníka nese více mandate scopes — například jak `SUBSCRIPTIONS`, tak B2B vault povolení — protože nebylo možné jednoznačně rozlišit, který mandate odpovídá kterému rozsahu bez dalšího kontextu.

    Od API verze 2026-07 objekt `PaymentMandateResource` exponuje nové pole `id`. Toto id odpovídá hodnotě `CustomerPaymentMethod.id`, čímž vzniká přímá vazba mezi mandate resource a platební metodou zákazníka. Aplikace nyní mohou mandate přesně referencovat v navazujících API voláních, aniž by musely provádět složité párování podle jiných atributů.

    Jde o čistě aditivní změnu — žádná existující funkcionalita se nenarušuje a migrace není vyžadována. Aplikace využívající Admin API 2026-07+ mohou nové pole začít číst okamžitě; starší verze API ho jednoduše neobsahují.
  zdroje:
    - title: "Shopify: Payment mandates now expose an id field"
      url: "https://shopify.dev/changelog/payment-mandates-id-field"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Objekt `PaymentMandateResource` v Shopify Admin GraphQL API získává od verze **2026-07** nové pole `id`.

Klíčové vlastnosti změny:

- **Nové pole:** `id` na objektu `PaymentMandateResource`
- **Hodnota:** odpovídá `CustomerPaymentMethod.id` — propojuje mandate přímo s platební metodou zákazníka
- **Scope:** mandate s typem `SUBSCRIPTIONS`, B2B vaulted payments a další mandate-based scénáře
- **Typ změny:** aditivní, zpětně kompatibilní — `indicatesActionRequired: false`
- **Přístupová práva:** vyžaduje `read_payment_mandate` nebo `read_customer_payment_methods` scope

Praktický případ užití: zákazník má uloženu jednu platební kartu, ale karta nese dvě mandate — jedno pro subscription billing, druhé pro B2B vault. Nové `id` pole umožňuje aplikaci jednoznačně určit, které mandate použít pro daný kontext, bez nutnosti složitého párování přes jiné atributy.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-27 | Changelog publikován, funkce dostupná v API 2026-07 |
| 2026-07-01 | API verze 2026-07 oficiálně dostupná |

Funkce je dostupná okamžitě pro aplikace, které přejdou na API verzi 2026-07 nebo novější. Starší verze API nové pole neobsahují, ale jejich chování se nemění.

## Dopad pro nás

Dopad je **nízký** — jde o rozšíření stávajícího objektu bez breaking changes.

Aplikace, které v současnosti čtou `PaymentMandateResource`, mohou nové `id` pole začít využívat po upgradu na API 2026-07. Není třeba žádná migrace ani úprava stávající logiky. Pokud aplikace pracuje se subscriptions nebo B2B vaulted payments a potřebuje přesně referencovat konkrétní mandate, nové pole tuto potřebu řeší přímočaře.

## Použití v Integrátoru

Integrátor aktuálně pracuje s payment methods a subscription billing scénáři. Nové `id` pole na `PaymentMandateResource` může být relevantní v situacích, kde je třeba:

1. **Disambiguace mandates** — zákazník s více mandate scopes na jedné platební metodě; `id` umožní vybrat správný mandate pro konkrétní billing kontext.
2. **Referencing v navazujících mutacích** — pokud integrátor volá mutace vyžadující explicitní mandate reference, nové `id` zjednoduší lookup.
3. **Audit a logging** — přesnější identifikace mandate v logu platebních operací.

Doporučení: při příštím upgradu Admin API na 2026-07 ověřit, zda integrátor čte `CustomerPaymentMethod.mandates` a zda by přidání `id` do query zlepšilo přesnost zpracování.
