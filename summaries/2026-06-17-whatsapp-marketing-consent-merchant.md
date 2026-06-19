---
date: 2026-06-17
title: "WhatsApp marketing consent v customer profilech — merchant UI"
title_en: "Manage WhatsApp marketing consent in Shopify (merchant UI)"
slug: whatsapp-marketing-consent-merchant
zdroj: https://changelog.shopify.com/posts/manage-whatsapp-marketing-consent-in-shopify
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme zákaznická data nebo marketing consent, je relevantní vědět, že merchant může WhatsApp consent editovat přímo v adminu a exportovat/importovat přes bulk tools."
dotcene_klienty: []
souvisejici:
  - "whatsapp-marketing-consent-api"
  - "whatsapp-marketing-channel-shopify"
  - "marketing-consent-account-component"
tldr: "Shopify umožňuje merchantům spravovat WhatsApp marketing consent přímo v customer profilech v adminu — vedle stávajícího email a SMS consentu."
tagy: [whatsapp, marketing, consent, customer-profile]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    WhatsApp je celosvětově nejpoužívanější messagingová platforma a pro Shopify merchanty představuje stále důležitější marketingový kanál. Aby mohli obchodníci zákazníkům zasílat marketingové zprávy přes WhatsApp v souladu s legislativou (GDPR, národní úpravy), musejí mít prokazatelný consent — souhlas s marketingovou komunikací — zaznamenaný u každého zákazníka.

    Dosud Shopify v admin UI evidoval marketing consent pouze pro email a SMS. WhatsApp byl buď řešen externími aplikacemi (např. WhatsApp Business API partnery), nebo byl consent uložen mimo Shopify. Tím docházelo k roztříštěnosti zákaznických dat a komplikacím při auditech souhlasů.

    Nová funkce integruje WhatsApp consent přímo do customer profile v Shopify adminu. Merchant vidí v profilu zákazníka stav souhlasu pro všechny tři kanály (email, SMS, WhatsApp) na jednom místě a může jej ručně upravovat. K dispozici jsou také bulk import a export nástroje, takže je možné nahrát stávající subscriber listy nebo exportovat data pro externí systémy.

    Pro merchanty, kteří WhatsApp marketing aktivně využívají nebo plánují nasadit, jde o příjemné zjednodušení administrace. Nepotřebují udržovat souhlasy ve dvou místech ani spoléhat výhradně na třetí stranu. Z pohledu compliance jde o pozitivní krok, protože consent je nyní součástí Shopify záznamu zákazníka a lze jej auditovat stejně jako email/SMS.
  zdroje:
    - title: "Shopify: Manage WhatsApp marketing consent in Shopify (merchant UI)"
      url: "https://changelog.shopify.com/posts/manage-whatsapp-marketing-consent-in-shopify"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify přidal možnost spravovat WhatsApp marketing consent přímo v customer profilech v admin panelu. WhatsApp consent je nyní viditelný a editovatelný na stejném místě jako stávající email a SMS consent — v detailu zákazníka.

Konkrétní novinky:

- **Zobrazení consentu v customer profile** — merchant vidí stav WhatsApp souhlasu u každého zákazníka přímo v Shopify adminu.
- **Ruční editace** — consent lze ručně přidat nebo odebrat přímo v profilu zákazníka.
- **Bulk import** — merchanté mohou nahrát WhatsApp consent hromadně z existujících subscriber listů.
- **Bulk export** — export aktuálních dat pro použití v externích nástrojích nebo auditní účely.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Funkce dostupná — WhatsApp consent v customer profilech a bulk nástrojích |

## Dopad pro nás

Tato změna je čistě na straně merchant UI, bez přímého dopadu na technické integrace. Pro klienty, kteří WhatsApp marketing využívají nebo zvažují, jde o usnadnění každodenní správy souhlasů — bez nutnosti přepínat mezi Shopify a externím nástrojem.

Relevantní je zejména jako doplněk k API-level změnám (viz `whatsapp-marketing-consent-api`), kde je consent dostupný i přes Admin API a Customer Account API. Dohromady tvoří ucelené řešení: merchant spravuje consent v UI, integrace jej čtou/zapisují přes API.

## Použití v Integrátoru

Pokud integrujeme zákaznická data nebo synchronizujeme marketing consent mezi Shopify a externím CRM / ESP, je dobré vědět, že od nynějška může merchant WhatsApp consent editovat i přímo v adminu (nejen přes API nebo custom app). Při importu dat z externího systému stačí použít Shopify bulk import bez nutnosti custom skriptu.

Samostatně tato funkce Integrátor nevyžaduje, ale tvoří kontext pro funkce `whatsapp-marketing-consent-api` a `whatsapp-marketing-channel-shopify`, kde je dopad větší.
