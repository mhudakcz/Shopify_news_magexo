---
date: 2026-06-17
title: "Marketing tab se přejmenoval na Growth tab — Campaigns + Attribution"
title_en: "The Marketing tab is now the Growth tab"
slug: growth-tab-rename-marketing
zdroj: https://changelog.shopify.com/posts/the-marketing-tab-is-now-the-growth-tab
shrnuto_dne: 2026-06-18
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme deep-link nebo admin navigation v app extensions, je třeba ověřit, že cesty odkazující na Marketing tab zůstávají funkční nebo aktualizovat na nový název sekce."
dotcene_klienty: []
souvisejici: ["campaign-autopilot-ai-marketing", "whatsapp-marketing-channel-shopify", "smart-email-delivery-shopify-messaging"]
tldr: "Shopify přejmenoval Marketing tab v adminu na Growth tab a přesunul Automations do samostatné aplikace Shopify Messaging."
tagy: [admin, navigation, marketing, growth, rename]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify admin navigace prošla kosmetickou, ale signifikantní změnou — záložka Marketing se od 17. června 2026 jmenuje Growth. Přejmenování odráží širší strategický posun, kdy Shopify přestává vnímat marketing jako izolovanou funkci a klade důraz na celkový růst obchodu prostřednictvím kampaní, atribuce a nových nástrojů jako Campaign Autopilot.

    Obsah záložky zůstává zachován: Campaigns a Attribution jsou dostupné na stejných místech jako dříve. Nově je v Growth tabu přistupný enrollment do Campaign Autopilot (early access), a také přímý vstup do App Store s marketingovými aplikacemi. Veškerá dříve nakonfigurovaná nastavení zůstávají nedotčena.

    Jedinou funkční změnou — nikoliv jen přejmenováním — je přesun Automations. Ty se přesouvají z adminu do dedikované aplikace Shopify Messaging, která sdružuje e-mailové, SMS a WhatsApp kampaně pod jednou střechou. Tato změna je součástí širšího ekosystémového kroku Shopify Editions Spring 2026, kde Shopify Messaging dostává výrazně posílené postavení.

    Pro merchanty jde o změnu navigace bez ztráty funkcionality. Pro vývojáře a agentury, které buildují admin extensions nebo deep-linky do Marketing sekce, je vhodné ověřit, zda používané URL cesty nebo UI references na "Marketing" stále fungují, nebo zda je třeba aktualizovat texty a navigační cesty v custom UI.
  zdroje:
    - title: "Shopify: The Marketing tab is now the Growth tab"
      url: "https://changelog.shopify.com/posts/the-marketing-tab-is-now-the-growth-tab"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Záložka **Marketing** v Shopify adminu se přejmenovala na **Growth**. Obsah zůstává:

- **Campaigns** — správa marketingových kampaní, beze změny umístění
- **Attribution** — přehled atribuce konverzí, beze změny umístění
- **Campaign Autopilot** — nový early access enrollment přímo v Growth tabu
- **App Store** — integrovaný přístup k marketingovým aplikacím

Jedna funkční změna: **Automations** se přesouvají z Growth tabu do samostatné aplikace **Shopify Messaging**. Stávající nastavení automatizací zůstávají zachována.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-17 | Marketing tab přejmenován na Growth tab v Shopify adminu |
| 2026-06-17 | Automations přesunuty do Shopify Messaging |
| 2026-06-17 | Dostupný enrollment do Campaign Autopilot early access |

## Dopad pro nás

Čistě navigační přejmenování bez API změn. Relevantní kontroly:

- Pokud máme v klientských projektech **admin extensions** nebo dokumentaci s odkazem na "Marketing tab", je vhodné texty aktualizovat na "Growth tab".
- Deep-linky do Shopify adminu směřující na `/marketing` je třeba otestovat — Shopify zpravidla zachovává URL zpětnou kompatibilitu, ale ověření je na místě.
- Automations přesunuté do Shopify Messaging nemají vliv na API (nejsou přístupné přes Admin API), jde pouze o UI přesun.

## Použití v Integrátoru

Přímý dopad na Integrátor je minimální — Growth tab neexpozuje nové API endpointy. Pokud však Integrátor obsahuje navigační nápovědy nebo UI popisky odkazující na "Marketing" sekci Shopify adminu, je vhodné je synchronizovat s novým názvem Growth. Campaign Autopilot (spuštěný ve stejném releasu) může být relevantní sledovat jako potenciální nový marketingový kanál pro klienty.
