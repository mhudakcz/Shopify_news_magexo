---
date: 2026-10-08
title: "Shopify Flow: Lifecycle Callback extensions podporují relative URL paths"
title_en: "Shopify Flow: Flow Trigger Lifecycle Callback extensions now support relative url paths"
slug: flow-trigger-lifecycle-callback-relative-urls
zdroj: https://shopify.dev/changelog/posts/shopify-flow-flow-trigger-lifecycle-callback-extensions-now-support-relative-url-paths
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme vyvíjet vlastní Flow trigger s lifecycle callbackem, nebudeme muset při každé změně dev tunelu přepisovat absolutní callback URL v konfiguraci extension."
dotcene_klienty: []
souvisejici: [flow-action-extensions-relative-paths, flow-action-runtime-urls-auto-update, flow-action-extensions-fewer-breaking-changes]
tldr: "Flow Trigger Lifecycle Callback extensions nově akceptují vedle absolutních HTTPS URL i relativní cesty – app dev je překládá na URL vývojového tunelu a app deploy na application_url aplikace."
tagy: [shopify-flow, flow-triggers, lifecycle-callback, extensions, dev-experience]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Flow je no-code automatizační platforma, ve které merchanti skládají workflow z triggerů, podmínek a akcí. Aplikace třetích stran mohou Flow rozšiřovat vlastními extensions: action extensions přidávají nové akce a trigger extensions přidávají nové spouštěcí události, které aplikace do Flow posílá. K trigger extensions patří také lifecycle callbacks, tedy HTTP endpoint aplikace, který Shopify volá v souvislosti s životním cyklem workflow používajících daný trigger (podrobnosti viz guide Track lifecycle events v dokumentaci).

    Dosud musela být callback URL u Flow Trigger Lifecycle Callback extensions vždy absolutní HTTPS adresa směřující na hostovaný webový server. Při lokálním testování před nasazením to bylo nepohodlné. Pokud vývojář pracoval s dynamicky vytvářeným tunelem (ngrok, cloudflared nebo tunel, který vytváří Shopify CLI), změnila se s novým tunelem application_url a celou callback URL bylo nutné v konfiguraci extension ručně upravit.

    Novinka stejný princip, který Shopify v červnu 2026 zavedl u Flow action extensions, rozšiřuje i na lifecycle callbacks. Relativní URL se při app dev překládá proti URL vývojového tunelu a při app deploy proti application_url aplikace. Absolutní HTTPS URL zůstávají plně podporované a hodí se tam, kde endpoint běží mimo aplikaci nebo kde chceme, aby Flow volal v každém prostředí stejnou adresu. Podle metadat changelogu jde o změnu typu Update bez nutnosti akce a bez vazby na konkrétní verzi API.
  zdroje:
    - title: "Shopify: Shopify Flow: Flow Trigger Lifecycle Callback extensions now support relative url paths"
      url: "https://shopify.dev/changelog/posts/shopify-flow-flow-trigger-lifecycle-callback-extensions-now-support-relative-url-paths"
    - title: "Shopify Flow: Track lifecycle events (guide)"
      url: "https://shopify.dev/docs/apps/build/flow/track-lifecycle-events"
    - title: "Shopify Flow: Track lifecycle events (configuration reference)"
      url: "https://shopify.dev/docs/apps/build/flow/track-lifecycle-events#configuration"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Flow Trigger Lifecycle Callback extensions nově přijímají **relativní URL cesty** jako alternativu k absolutním HTTPS URL. Jde o stejný mechanismus, který už fungoval u Flow action extensions (viz související novinky).

**Jak se relativní URL překládá:**
- `app dev` – relativní URL se resolvuje proti URL vývojového tunelu.
- `app deploy` – relativní URL se resolvuje proti `application_url` aplikace.

**Kdy dál použít absolutní HTTPS URL:**
- endpoint běží mimo vlastní aplikaci (jiná doména, samostatná služba),
- chceme, aby Flow volal v každém prostředí (dev, produkce) přesně stejnou adresu.

**Omezení a předpoklady:**
- Protocol-relative URL (začínající `//`, např. `//example.com/api/execute`) **nejsou podporované**.
- Před deployem s relativními cestami musí konfigurace aplikace obsahovat **absolutní HTTPS `application_url`**.

**Poznámka ke zdroji:** changelog nejmenuje konkrétní konfigurační pole a neuvádí ani příklad relativní cesty. U Flow action extensions šlo o cestu začínající jediným lomítkem (např. `/api/flow/execute`); u lifecycle callbacks je tedy rozumné držet stejnou konvenci, ale přesný zápis je potřeba ověřit v referenci konfigurace.

## Časová osa

- **2026-09-28** – záznam v changelogu vytvořen.
- **2026-09-29** – změna účinná.
- **2026-10-08** – publikace changelog postu.
- **2026-10-14** – poslední aktualizace postu.

Není potřeba žádná akce a existující absolutní URL fungují beze změny.

## Dopad pro nás

**Pro vývojáře:** Změna je čistě aditivní a týká se jen developer experience. Při vývoji Flow triggeru s lifecycle callbackem odpadne ruční přepisování callback URL pokaždé, když se změní URL tunelu (`app dev`, ngrok, cloudflared). Zjednodušují se také předpřipravené app skeletony a šablony, protože v konfiguraci extension už nemusí být natvrdo zadaná adresa konkrétního prostředí. Před prvním deployem je třeba pohlídat, že `application_url` je absolutní HTTPS adresa. Jinak se relativní cesta nemá proti čemu přeložit.

**Pro PM / PO:** Žádný dopad na merchanty ani na existující workflow, nevyžaduje komunikaci navenek ani změnu zadání. Jde o drobné zrychlení vývoje a snížení rizika chyb při přepínání mezi dev a produkčním prostředím. Společně s červnovou podporou relativních cest a červencovým automatickým překládáním runtime URL u action extensions tak Flow extensions pokrývají celý vývojový cyklus bez ručního zacházení s adresami.

## Použití v Integrátoru

Relevantní jen tehdy, pokud budeme vyvíjet vlastní Flow trigger extension s lifecycle callbackem. V takovém případě použijeme relativní cestu místo absolutní URL, aby konfigurace fungovala beze změn v dev i produkci.
