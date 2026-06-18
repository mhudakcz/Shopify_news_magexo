---
date: 2026-06-17
title: "WhatsApp jako marketingový kanál v Shopify Messaging"
title_en: "WhatsApp marketing channel in Shopify Messaging"
slug: whatsapp-marketing-channel-shopify
zdroj: https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "WhatsApp marketing je primárně merchant feature, ale pokud klient řeší consent management nebo kampane na EU/LATAM trzích, může být relevantní poradenský kontext."
dotcene_klienty: []
souvisejici: ["sms-marketing-automations-messaging", "marketing-consent-customer-signin"]
editions_release: spring-2026
kontext:
  background: |
    WhatsApp je největší messaging platforma na světě s více než 2 miliardami aktivních uživatelů měsíčně. Jako marketingový kanál umožňuje merchantům oslovovat zákazníky přímo v prostředí, kde tráví velkou část svého digitálního času — s výrazně vyšší mírou otevření zpráv oproti e-mailu (typicky 90–98 % vs. 20–30 % u e-mailu). WhatsApp marketing funguje přes WhatsApp Business Platform (Meta) a vyžaduje explicitní opt-in zákazníka.

    Shopify Messaging je konsolidovaná platforma pro všechny marketingové a komunikační kanály přímo v Shopify admin. Původně zahrnovala e-mail a SMS kampaně; v rámci Editions Spring 2026 Shopify přidává WhatsApp jako třetí nativní kanál. Cílem je umožnit merchantům spravovat multi-channel marketing z jednoho místa bez nutnosti třetích stran nebo externích integrací pro základní use cases.

    WhatsApp marketing je obzvláště relevantní pro trhy, kde SMS penetrace zaostává za messagingem — konkrétně EU (GDPR consent modely jsou zde dobře zavedené), LATAM (Brazílie, Mexiko, Argentina patří mezi největší WhatsApp trhy na světě) a Indie (více než 500 milionů uživatelů). Pro merchant targeting tyto geografie představuje WhatsApp přímou alternativu k SMS s potenciálně vyšším engagementem.

    Z pohledu consent managementu je WhatsApp marketing vázán na zákaznický profil v Shopify — merchant spravuje opt-in stav přímo v customer profilu v admin, analogicky ke stávajícímu e-mail a SMS marketing consent. Tím je zajištěna konzistentní správa souhlasů napříč kanály a soulad s GDPR a dalšími regulatorními požadavky na opt-in marketing.
  zdroje:
    - title: "Shopify Editions Spring '26: WhatsApp marketing channel in Shopify Messaging"
      url: "https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging"
    - title: "SMS marketing automations v Shopify Messaging"
      url: "https://changelog.shopify.com/posts/create-sms-marketing-automations-in-shopify-messaging"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Messaging nyní podporuje WhatsApp jako třetí marketingový kanál vedle e-mailu a SMS — merchant může vytvářet a odesílat WhatsApp kampaně přímo z Shopify admin s integrovaným consent managementem."
tagy: [editions, whatsapp, marketing, messaging]
zdroj_kanal: editions
---

## Co se mění

Shopify Messaging rozšiřuje svou multi-channel platformu o WhatsApp jako nativní marketingový kanál. Merchant může vytvářet, plánovat a odesílat WhatsApp marketingové kampaně přímo z Shopify admin — stejným workflow, jaké už zná z e-mailových a SMS kampaní v Shopify Messaging.

Klíčové aspekty nového kanálu:

- **Vytváření kampaní v admin** — WhatsApp kampaně se nastavují ve stejné sekci jako e-mail a SMS, bez nutnosti přepínat do externího nástroje.
- **Consent management v customer profilu** — Opt-in/opt-out stav pro WhatsApp je evidován přímo v zákaznickém profilu v Shopify, konzistentně s e-mail a SMS marketing consent.
- **Targeting** — Kampaně lze cílit na segmenty zákazníků, kteří udělili WhatsApp marketing consent.
- **Plány** — Dostupnost: Basic, Grow, Advanced a Shopify Plus plány.
- **Status při Editions announce** — Funkce byla označena jako "coming soon / dostupná v nadcházejících týdnech" — rollout probíhá postupně po globálním launchi Editions Spring 2026.

## Časová osa

- **2026-06-17** — Editions Spring '26 announce; WhatsApp marketing channel ohlášen jako součást Shopify Messaging
- **2026-06 / 2026-07** — Postupný rollout dostupnosti v Shopify admin (merchant si ověří dostupnost přímo v administraci)

## Dopad pro nás

**Pro vývojáře:**
WhatsApp marketing channel je čistě merchant-facing feature bez přímého developer API v tuto chvíli. Pokud by klient potřeboval programatický přístup ke správě marketing consent pro WhatsApp (analogicky k `emailMarketingConsent` / `smsMarketingConsent` na Customer objektu v Admin GraphQL API), lze očekávat, že Shopify přidá odpovídající field — stojí za to sledovat changelog Admin API. Pro integrační projekty, kde řešíme import zákazníků nebo synchronizaci consent stavů, bude nutné zahrnout případný WhatsApp consent field do datového modelu.

**Pro PM / PO:**
Pro klienty s relevantními trhy (EU, LATAM, Indie) je WhatsApp marketing zajímavá příležitost k rozšíření marketingového mixu bez nutnosti další aplikace. Pokud klient aktuálně používá Shopify Messaging pro e-mail nebo SMS, WhatsApp bude přirozeným rozšířením v rámci stejného rozhraní. Vhodné zmínit při konzultacích o marketingové strategii — zejména pro klienty s vysokým podílem zákazníků v zemích s velkou WhatsApp penetrací.

## Použití v Integrátoru

Primárně merchant feature; v případě projektů zahrnujících import zákazníků nebo consent management stojí za sledování, zda Shopify přidá `whatsappMarketingConsent` field do Customer API.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Marketing](/Shopify_news_magexo/zmena/editions-spring-2026-marketing/)
