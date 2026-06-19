---
date: 2026-06-17
title: "WhatsApp marketing consent nově v Admin API a Customer Account API"
title_en: "WhatsApp marketing consent available in Admin and Customer Account API"
slug: whatsapp-marketing-consent-api
zdroj: https://shopify.dev/changelog/whatsapp-marketing-consent-now-available
shrnuto_dne: 2026-06-18
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor spravuje zákaznická data nebo marketingové souhlasy, může nová mutace být relevantní pro synchronizaci WhatsApp opt-in stavu zákazníků."
dotcene_klienty: []
souvisejici:
  - "whatsapp-marketing-channel-shopify"
  - "smart-email-delivery-shopify-messaging"
  - "unlink-customer-identity-provider"
tldr: "Shopify přidal mutaci customerWhatsAppMarketingConsentUpdate do Admin API a Customer Account API (verze 2026-07), která umožňuje programově spravovat souhlas zákazníků s WhatsApp marketingem přes jejich výchozí telefonní číslo."
tagy: [whatsapp, marketing, consent, customer-api, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    WhatsApp je jedním z nejrozšířenějších komunikačních kanálů na světě a stále více e-commerce obchodníků ho využívá pro marketingovou komunikaci. Správa marketingových souhlasů (consent) je přitom klíčovým právním i obchodním požadavkem — bez platného opt-in nelze zákazníkům zákonně posílat marketingové zprávy.

    Shopify v roce 2026 výrazně rozšiřuje podporu pro WhatsApp jako marketingový kanál. Tato změna je přímým rozšířením existujícího souhlasového modelu, který již funguje pro e-mail a SMS, nyní aplikovaného na WhatsApp. Nová funkcionalita je součástí API verze 2026-07.

    Vývojáři a integrační partneři nyní mohou programově číst i aktualizovat WhatsApp marketingový souhlas zákazníka prostřednictvím nové mutace. Souhlas je vázán na výchozí telefonní číslo zákazníka, lze zaznamenat způsob sběru souhlasu (opt-in level), časové razítko i zdroj. To umožňuje obchodníkům splňovat regulatorní požadavky (GDPR, LGPD a další) a zároveň budovat kvalitní marketingové seznamy.

    Prakticky to znamená, že každá aplikace nebo integrace pracující se zákaznickými daty může nově synchronizovat WhatsApp consent stav — například při importu zákazníků, ve vlastních checkout flow, nebo při správě profilů v externím CRM systému.
  zdroje:
    - title: "Shopify: WhatsApp marketing consent available in Admin and Customer Account API"
      url: "https://shopify.dev/changelog/whatsapp-marketing-consent-now-available"
    - title: "Admin API: customerWhatsAppMarketingConsentUpdate mutation"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/customerWhatsAppMarketingConsentUpdate"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify přidává do Admin GraphQL API a Customer Account API novou mutaci `customerWhatsAppMarketingConsentUpdate` (API verze **2026-07**). Zároveň je na objektu `CustomerPhoneNumber` dostupné nové pole `whatsAppMarketingConsent` pro čtení aktuálního stavu souhlasu.

**Nová mutace:**

```graphql
customerWhatsAppMarketingConsentUpdate(
  input: CustomerWhatsAppMarketingConsentUpdateInput!
): CustomerWhatsAppMarketingConsentUpdatePayload
```

**Vstupní pole `CustomerWhatsAppMarketingConsentUpdateInput`:**
- subscription status (subscribe / unsubscribe)
- opt-in level (způsob získání souhlasu)
- volitelný timestamp sběru souhlasu
- volitelný identifikátor zdroje souhlasu

**Návratový typ `CustomerWhatsAppMarketingConsentUpdatePayload`:**
- `customerPhoneNumber` — `CustomerPhoneNumber` objekt s aktualizovaným consent stavem
- `userErrors` — seznam chyb typu `CustomerMarketingConsentError`

**Požadovaná oprávnění:** `write_customers` access scope.

Čtení aktuálního stavu je možné přes pole `whatsAppMarketingConsent` na objektu `CustomerPhoneNumber` — bez nutnosti speciálního oprávnění nad rámec čtení zákaznických dat.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-16 | Funkce dostupná v API verzi 2026-07 |
| 2026-06-17 | Publikace v Shopify changelogs |

Mutace je dostupná od API verze **2026-07**. Starší verze API tuto mutaci nepodporují.

## Dopad pro nás

Tato změna se týká vývojářů budujících integraci se zákaznickými daty nebo marketingové nástroje na Shopify platformě. Klíčové body:

- **Nový marketingový kanál v API** — WhatsApp consent byl dříve dostupný jen přes Shopify admin UI; nyní je plně programově přístupný.
- **Souhlasový model totožný s e-mail/SMS** — consent je strukturován stejně jako existující marketing consent pro e-mail a SMS, což usnadňuje implementaci.
- **Právní relevance** — správné zaznamenání opt-in levelu a timestampu je nutné pro prokázání souhlasu dle GDPR a podobných regulací.
- **Customer Account API** — zákazníci mohou spravovat svůj WhatsApp consent i přes Customer Account API (self-service flow), nejen přes Admin API.

Pokud Magexo vytváří nebo udržuje Shopify aplikace pracující s marketingovými souhlasy zákazníků, je vhodné zkontrolovat, zda je potřeba přidat podporu pro WhatsApp consent vedle stávajícího e-mail/SMS zpracování.

## Použití v Integrátoru

Pokud integrátor synchronizuje zákaznická data mezi Shopify a externím systémem (CRM, ERP, marketingová platforma), může být relevantní:

1. **Čtení stavu souhlasu** při exportu zákazníků — pole `whatsAppMarketingConsent` na `CustomerPhoneNumber`.
2. **Aktualizace souhlasu** při importu zákazníků z externího systému — mutace `customerWhatsAppMarketingConsentUpdate`.
3. **Webhook** — Shopify pravděpodobně vyvolá existující zákaznické webhooky při změně WhatsApp consent stavu (ověřit v dokumentaci webhooků).

Pokud integrátor aktuálně nezpracovává WhatsApp data, není okamžitá akce nutná. Změna je aditivní a nezasahuje do existující funkcionality.
