---
date: 2026-03-05
title: "Marketing automations se přesouvají 24. 3."
title_en: "Marketing automations are moving on March 24"
slug: marketing-automations-moving
zdroj: https://changelog.shopify.com/posts/marketing-automations-are-moving-on-march-24
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [breaking-change]
api_oblast: admin
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-03-24

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Messaging / Flow consolidation."
kontext:
  background: |
    Marketing automations jsou předpřipravené nebo vlastní automatizované pracovní postupy, které Shopify spustí na základě chování zákazníka — například opuštění košíku, dokončení objednávky nebo první nákup. Pracují na principu spouštěče (trigger), podmínek a akcí, přičemž akce může zahrnovat odeslání e-mailu, SMS zprávy nebo volání třetí aplikace.

    Shopify původně sdružoval všechny tyto automation pod jednotnou sekci Marketing v administraci. S rozvojem ekosystému se však ukázalo, že komunikační workflow (e-mail, SMS přes Shopify Messaging) a datově-integrační workflow (volání externích aplikací, podmíněná logika přes Flow) mají odlišné požadavky na správu i přístupová práva. Shopify proto provedl konsolidaci: komunikační automations přešly pod Messaging app, zatímco integrace s třetími stranami pod Flow app.

    Shopify Flow je nativní no-code automatizační platforma pro obchodníky i vývojáře — umožňuje reagovat na obchodní události a orchestrovat akce přes celý ekosystém aplikací. Shopify Messaging se naproti tomu specializuje na zákaznickou komunikaci (e-mail, SMS), včetně marketingových šablon pro abandoned cart nebo browse abandonment. Tato separace zajišťuje, že každý nástroj pokrývá svou doménu bez překrývání.

    Přesun je čistě organizační — funkčnost automations zůstala beze změny. Trend ukazuje, že Shopify dále rozvíjí Flow jako centrální orchestrační vrstvu: přibývají nové triggery, akce pro načítání dat (markets, articles) a testovací nástroje, zatímco Messaging rozšiřuje kanály o SMS marketing s předdefinovanými šablonami.
  zdroje:
    - title: "Marketing automations are moving on March 24 – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/marketing-automations-are-moving-on-march-24"
    - title: "SMS marketing automations v Shopify Messaging – přehled"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/sms-marketing-automations-messaging/"
    - title: "Flow: dokumentování workflows s notes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-document-workflows-notes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shopify Messaging automations se přesouvají do Messaging app; automations s third-party app activitami do Flow app — termín 24. 3. 2026."
tagy: [marketing, automation, messaging, flow, migration]
---

## Co se mění
**Marketing automations** se konsolidují:
- **Shopify Messaging** automations → přesun do Messaging app
- Automations volající **third-party app actions** → přesun do Flow app

Důvod: jasnější rozdělení rolí mezi Messaging (komunikační workflow) a Flow (data/integration workflow).

## Časová osa
- **2026-03-24** — migrace nasazena

## Použití v Integrátoru
**Nepoužíváme** — automations jsou merchant-side feature.
