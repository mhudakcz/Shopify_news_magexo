---
date: 2026-06-17
title: "Smart email delivery — AI prioritizace pro conversion"
title_en: "Smart email delivery — AI prioritization for conversion"
slug: smart-email-delivery-shopify-messaging
zdroj: https://help.shopify.com/manual/promoting-marketing/create-marketing/shopify-messaging/delivery
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchants s rozsáhlými email listy mohou těžit z automatické ochrany deliverability — pro integrátory relevantní pokud řeší marketing automations nebo email kampáně v rámci Shopify Messaging."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-marketing", "editions-spring-2026"]
editions_release: spring-2026
kontext:
  background: |
    Smart Delivery je vestavěný filtrovací mechanismus v Shopify Messaging, který automaticky omezuje příjemce emailových a SMS kampaní na aktivně zapojené odběratele. Systém při odesílání kampaně na více než 1 000 subscribers automaticky vyloučí zákazníky, kteří nereagovali na nedávné marketingové zprávy, nebo SMS subscribers s neaktivním telefonním číslem. Cílem je chránit sender reputation merchantů a snižovat bounce rate a spam complaints bez nutnosti manuální péče o list.

    Email marketing trpí strukturálním problémem: s rostoucím listem roste i podíl neaktivních kontaktů, které snižují celkový engagement rate a mohou poškodit reputaci odesílatele u emailových providerů (Gmail, Outlook apod.). Tradičně se obchodníci spoléhali na manuální list hygiene — pravidelné čistění listů, sunset kampaně nebo re-engagement flows. Shopify Smart Delivery tuto zodpovědnost přebírá automaticky a aplikuje ji při každém odesílání kampaně.

    Funkce je aktivní ve výchozím nastavení a pracuje společně se dvěma vždy zapnutými ochranami: bot filtering (odstraňuje adresy registrované automatizovaně) a list health monitoring (sleduje celkové zdraví listu). Merchant může Smart Delivery v nastavení Shopify Messaging vypnout, ale Shopify před tím varuje — deaktivace zvyšuje riziko bounce a stížností. Nastavení je dostupné v sekci Settings > Delivery v rámci Shopify Messaging app.

    V kontextu Editions Spring '26 je Smart Delivery součástí širší expanze Shopify Messaging jako plnohodnotného multi-channel marketing nástroje — vedle Smart Delivery přibývají WhatsApp marketing channel, SMS automations a marketing consent management. Cíl je, aby merchant mohl spravovat celý svůj messaging stack přímo v Shopify bez nutnosti externích nástrojů jako Klaviyo nebo Mailchimp pro základní use cases.
  zdroje:
    - title: "Shopify Editions Spring '26: Smart email delivery — AI prioritization for conversion"
      url: "https://help.shopify.com/manual/promoting-marketing/create-marketing/shopify-messaging/delivery"
    - title: "Editions Spring '26: Marketing — Campaign Autopilot a nové kanály"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Messaging automaticky filtruje příjemce emailových kampaní na aktivní subscribers — chrání sender reputation a snižuje bounce rate bez manuálního čistění listu."
tagy: [editions, email, marketing, ai, conversion]
zdroj_kanal: editions
---

## Co se mění

Shopify Messaging získalo funkci **Smart Delivery** — automatický filtr, který při odesílání emailových nebo SMS kampaní na více než 1 000 subscribers vyřadí neaktivní kontakty dříve, než zpráva odejde. Konkrétně jde o zákazníky, kteří nereagovali na předchozí marketingové emaily, nebo SMS subscribers s neplatnými/neaktivními čísly.

Funkce je aktivní ve výchozím nastavení a nevyžaduje žádné nastavení ze strany merchantů. Merchant ji najde a případně deaktivuje v **Shopify Messaging > Settings > Delivery**. Spolu se Smart Delivery běží stále zapnutý bot filtering (odstraňuje adresy pořízené botem) a list health monitoring (sleduje celkové zdraví listu).

Praktický efekt: merchant, který nikdy aktivně nečistil svůj email list, automaticky odešle kampaň jen zapojeným kontaktům — výsledkem je vyšší open rate, nižší bounce rate a menší riziko označení jako spam.

## Časová osa

- **2026-06-17** — Editions Spring '26 announce; Smart Delivery dostupné v Shopify Messaging

## Dopad pro nás

**Pro vývojáře:**
Smart Delivery je čistě konfigurační merchant-side feature bez API surface — žádné nové endpointy, webhooky ani GraphQL mutace. Pro vývojáře relevantní pouze pokud budují marketing integrace nad Shopify Messaging: v takovém případě je dobré vědět, že effective audience u kampaní může být menší než raw subscriber count, a že to je záměrné chování platformy, ne bug.

**Pro PM / PO:**
Funkce je hodnotná pro klienty s většími email listy (1 000+ subscribers), kteří nepoužívají specializované ESP nástroje jako Klaviyo nebo Mailchimp s vlastní list hygiene. Pro takové klienty jde o dobrý argument pro přechod na nebo setrvání na Shopify Messaging jako primárním email kanálu. Pro klienty s pokročilou email strategií (vlastní segmentace, re-engagement flows v externím ESP) přínos omezený — external tools zpravidla tuto logiku řeší vlastními nástroji sofistikovaněji.

## Použití v Integrátoru

Smart Delivery nemá přímý dopad na integrační vrstvu — funkce funguje transparentně na úrovni Shopify Messaging bez potřeby změn v API integracích. Relevantní pouze jako kontext při řešení reportovaných rozdílů mezi subscriber count a skutečně odeslanými zprávami.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Marketing](/Shopify_news_magexo/zmena/editions-spring-2026-marketing/)
