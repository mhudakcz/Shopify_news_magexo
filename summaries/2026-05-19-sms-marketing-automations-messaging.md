---
date: 2026-05-19
title: "SMS marketing automations v Shopify Messaging"
title_en: "Create SMS marketing automations in Shopify Messaging"
slug: sms-marketing-automations-messaging
zdroj: https://changelog.shopify.com/posts/create-sms-marketing-automations-in-shopify-messaging
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-21

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Messaging SMS marketing feature. Naše integrace se SMS marketing neresí."
dotcene_klienty: []

kontext:
  background: |
    SMS marketing automation je model, při němž se textová zpráva odešle zákazníkovi automaticky — na základě konkrétní události v obchodě (trigger), bez manuálního zásahu obchodníka. Typické triggery vycházejí z přerušeného nákupního procesu: opuštěný košík, neukončený checkout nebo prohlížení kategorie bez akce. Klíčovým principem je kontextuální načasování — zpráva osloví zákazníka v momentě nejvyšší relevance, nikoliv plošně.

    Shopify Messaging je nativní komunikační platforma Shopify pro e-mail a SMS. Do března 2026 byly marketingové automations sdíleny napříč několika sekcemi administrace; Shopify provedl konsolidaci, při níž komunikační workflow (e-mail, SMS) přešly pod Messaging a integrační workflow pod Flow app. Rozšíření o SMS automation templates je přímým pokračováním tohoto přesunu — Messaging se etabluje jako centrální nástroj pro zákaznickou komunikaci.

    SMS kanál dosahuje výrazně vyšší míry otevření než e-mail (průmyslové odhady hovoří o 90–98 % do 3 minut), avšak nese vyšší náklady na zprávu a přísnější regulatorní nároky (opt-in souhlas). Proto je zásadní funkce SMS spending threshold — konfigurovatelný strop výdajů, který chrání obchodníka před nečekaně vysokými náklady při rychlém růstu zákaznické základny nebo vysokém objemu automatizovaných zpráv.

    SMS marketing automation doplňuje existující e-mailové automation šablony v Shopify Messaging a umožňuje budovat vícekanálové (multi-channel) opuštěné-košíkové sekvence, kde SMS a e-mail spolupracují na různých časových vrstvách zákaznické cesty.
  zdroje:
    - title: "Shopify Changelog: Create SMS marketing automations in Shopify Messaging"
      url: "https://changelog.shopify.com/posts/create-sms-marketing-automations-in-shopify-messaging"
    - title: "Archiv: Marketing automations se přesouvají do Messaging a Flow"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-automations-moving/"
    - title: "Archiv: Sběr marketing consent na account component"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-consent-account-component/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify Messaging podporuje SMS marketing automations — pre-built templates pro abandoned carts, checkouts, browse abandonment, s customizable SMS spending threshold."
tagy: [sms, marketing, automation, messaging]
---

## Co se mění
**Shopify Messaging** nyní podporuje **SMS marketing automations**:
- **Pre-built templates**: abandoned cart, abandoned checkout, browse abandonment
- **Customizable SMS spending threshold** — strop pro denní/měsíční výdaje
- Plně integrované do existující Messaging app

## Použití v Integrátoru
**Nepoužíváme** — merchant-side marketing feature.
