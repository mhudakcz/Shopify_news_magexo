---
date: 2026-06-17
title: "Sidekick napojený na třetí aplikace — Judge.me, Klaviyo, Loop, Smile"
title_en: "Sidekick works with your apps (Judge.me, Klaviyo, Loop, Smile)"
slug: sidekick-app-extensions-third-party
zdroj: https://apps.shopify.com/stories/guide-sidekick-app-extensions
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Sidekick app extensions je nový povrch Shopify ekosystému — pokud partneři budují nebo doporučují třetí aplikace (Judge.me, Klaviyo, Loop, Smile), je dobré vědět, jaké možnosti framework nabízí a zda lze extension doporučit jako součást migrace nebo implementace."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-sidekick", "editions-spring-2026"]
editions_release: spring-2026
kontext:
  background: |
    Sidekick app extensions je framework, který umožňuje vývojářům třetích Shopify aplikací napojit vlastní data a akce do Shopify Sidekicku — AI asistenta zabudovaného do Shopify adminu. Výsledkem je, že merchant může pokládat dotazy nebo spouštět akce v externích aplikacích přímo z konverzačního rozhraní Sidekicku, bez přepínání záložek nebo otevírání oddělených dashboardů aplikací.

    Sidekick byl dosud primárně asistent pro nativní Shopify data — objednávky, produkty, analytics, zákazníky. Ekosystém Shopify obchodů ovšem tvoří z velké části třetí aplikace: e-mail marketing, loyalty programy, review systémy, správa returů. Integrace těchto nástrojů s AI asistentstvím byla technicky možná jen mimo Shopify (custom chatboti, Zapier apod.), nikoliv přímo v admin UI. Sidekick app extensions tuto mezeru zaplňuje tím, že standardizuje způsob, jakým aplikace publikují vlastní AI schopnosti do Sidekicku.

    Framework byl spuštěn v rámci Editions Spring '26 a v době launche podporuje konkrétní sadu aplikací: v oblasti marketingu Klaviyo, TikTok, Seguno, Mailchimp a Bloomreach; v oblasti zákaznického managementu Judge.me, Smile Loyalty, Yotpo, Loop Returns a AfterShip; v oblasti promocí Abra Promotions a Discount Kit; v oblasti produktů Printful a Syncee. Sidekick tak přestává být izolovaným admin nástrojem a začíná fungovat jako cross-app orchestrační vrstva nad celým merchant stackem postaveným na Shopify.

    Technicky je framework dostupný pro vývojáře aplikací přes dokumentaci na shopify.dev/docs/apps/build/sidekick. Každá aplikace si přidá vlastní extension do Sidekicku s vlastními schopnostmi — co merchant může dotazovat (data) a co může iniciovat (akce). Toto otevírá nový typ app surface, který je odlišný od UI extensions, checkout extensions nebo Shopify Functions — jde o konverzační/AI surface.
  zdroje:
    - title: "Shopify Editions Spring '26: Sidekick works with your apps (Judge.me, Klaviyo, Loop, Smile)"
      url: "https://apps.shopify.com/stories/guide-sidekick-app-extensions"
    - title: "Shopify Developer Docs: Build a Sidekick app extension"
      url: "https://shopify.dev/docs/apps/build/sidekick"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Sidekick nyní umí dotazovat a jednat v třetích aplikacích — Judge.me, Klaviyo, Loop, Smile a dalších — přes nový Sidekick app extensions framework; merchant spravuje celý obchodní stack z jednoho konverzačního rozhraní v Shopify adminu."
tagy: [editions, sidekick, app-extensions, integrations]
zdroj_kanal: editions
---

## O čem to je

Shopify Sidekick app extensions je nový framework, který umožňuje vývojářům třetích aplikací přidat vlastní AI schopnosti přímo do Sidekicku — AI asistenta v Shopify adminu. Merchant tak může z jednoho chat okna pokládat otázky nebo spouštět akce v externích nástrojích, aniž by musel aplikace otevírat samostatně.

V době launche jsou dostupné extension pro tyto aplikace:

- **Marketing:** Klaviyo, TikTok, Seguno, Mailchimp, Bloomreach
- **Zákaznický management:** Judge.me Product Reviews, Smile Loyalty Program, Yotpo Product Reviews, Loop Returns & Exchanges, AfterShip Order Tracking
- **Promotions:** Abra Promotions, Discount Kit
- **Produkty / dropshipping:** Printful, Syncee

Merchant může například zeptat Sidekicku na výkon posledního e-mail flow v Klaviyo, zjistit stav věrnostních bodů zákazníka přes Smile, nebo zkontrolovat pending returns v Loop — vše z jednoho místa bez přepínání kontextů.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; Sidekick app extensions framework live s první sadou podporovaných aplikací
- (framework je otevřen dalším vývojářům; počet podporovaných aplikací bude růst)

## Dopad pro nás

**Pro vývojáře:**
Sidekick app extensions je nový typ app surface — odlišný od UI extensions, checkout extensions nebo Shopify Functions. Pokud se v budoucnu bude řešit vlastní aplikace nebo rozšíření existující aplikace o AI schopnosti, dokumentace je na shopify.dev/docs/apps/build/sidekick. Framework je zatím relativně nový a dokumentace se může rozšiřovat. Stojí za to sledovat, jaké typy akcí a datových dotazů extension API podporuje — scope toho, co extension může dělat, bude klíčové pro posouzení use casů.

**Pro PM / PO:**
Klientům, kteří používají Klaviyo, Judge.me, Loop nebo Smile, lze zmínit, že tato integrace existuje — zejména při implementacích nebo migraci, kde se řeší jaký "AI stack" merchant bude mít. Sidekick app extensions nesníží nutnost mít tyto aplikace nainstalované, ale zlepší každodenní workflow merchantů, kteří Sidekick aktivně používají. Nová příležitost spočívá především v tom, že Sidekick roste na cross-app orchestrační vrstvu — což posiluje hodnotu celého Shopify ekosystému pro merchanty s komplexnějším stackem.

## Použití v Integrátoru

Sidekick app extensions není přímý integration touch point pro Magexo integraci (žádné API, které bychom volali z Integrátoru), ale sledování tohoto frameworku je relevantní pro posouzení, zda partnerské aplikace v doporučovaném stacku budou extension podporovat a jak to ovlivní merchant UX.

## ⬅️ Související
🔗 [Theme overview: Sidekick — Spring '26](/Shopify_news_magexo/zmena/editions-spring-2026-sidekick/)
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
