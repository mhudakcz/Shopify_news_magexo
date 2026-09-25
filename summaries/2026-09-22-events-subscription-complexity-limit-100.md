---
date: 2026-09-22
title: "Events subscription query complexity limit se mění na 100 points (breaking)"
title_en: "Events subscription query complexity limit is changing to 100 points"
slug: events-subscription-complexity-limit-100
zdroj: https://shopify.dev/changelog/events-subscription-query-complexity-limit-is-changing-to-100-points
shrnuto_dne: 2026-09-25
kategorie: [breaking-change]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-09-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud máme u některého klienta Events (NGE) subscription se složitější filter query, může po účinnosti změny překročit 100 points a subscribe request selže."
dotcene_klienty: []
souvisejici: [events-payloads-subscription-config-updates, events-four-additional-topics, next-generation-events-preview]
tldr: "Shopify snižuje limit query complexity pro Events subscriptions z 250 na 100 points – aplikace se složitějšími filter queries je musí zjednodušit, jinak subscribe request selže."
tagy: [events, webhooks, subscriptions, complexity, rate-limit, breaking, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Events (dříve komunikované jako Next Generation Events) umožňují aplikacím definovat vlastní GraphQL query přímo v `shopify.app.toml` – subscription si tak může vyžádat jen konkrétní pole a filtrovat podmínky, místo aby dostávala fixní payload klasického webhooku. Stejně jako běžné Admin GraphQL dotazy má i tato query svou cenu vypočtenou podle vybraných polí, datových typů a počtu položek v connections – tzv. query complexity. Shopify tuto cenu dlouhodobě používá k omezení náročnosti dotazů vůči Admin API.

    Nově Shopify snižuje strop pro Events subscription query z 250 na 100 points, s účinností od 22. 9. 2026. Změna se týká výhradně Events subscriptions (`unstable` API, NGE) – klasické Webhook API subscriptions complexity limit nemají a touto změnou nejsou dotčené. Subscribe request s query nad 100 points po tomto datu selže. Shopify doporučuje tři strategie zjednodušení: rozdělit jednu širokou subscription na více užších podle konkrétní funkce (každá s vlastním triggerem a menší query), dotazovat se přímo na změněný resource (např. konkrétní variantu) místo celého parent objektu se všemi vnořenými položkami, a párovat strukturu query s proměnnými, které daný trigger skutečně poskytuje – různé triggery mají různé dostupné proměnné, takže samostatné subscriptions mohou být efektivnější než jedna univerzální. Query complexity Events subscriptions se navíc nezapočítává do API rate limitů aplikace – jde čistě o strop pro samotnou definici subscription.

    Změna přichází bezprostředně po sérii dalších úprav Events z posledních týdnů – v srpnu přibyly čtyři nové topics (Metaobject, MetafieldDefinition, MetaobjectDefinition, InventoryTransfer) a v polovině září Shopify upravil strukturu `fields_changed` payloadu i pravidla pro subscription konfiguraci. Events tak zůstávají v aktivním vývoji na `unstable` verzi ještě před GA a je vhodné počítat s tím, že podobné úpravy (limity, tvar payloadu, validace) mohou přijít i v dalších měsících.
  zdroje:
    - title: "Shopify: Events subscription query complexity limit is changing to 100 points"
      url: "https://shopify.dev/changelog/events-subscription-query-complexity-limit-is-changing-to-100-points"
    - title: "Events: změny payloadů a subscription configuration (Action Required)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/events-payloads-subscription-config-updates/"
    - title: "Události: čtyři nové topics pro webhook subscription"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/events-four-additional-topics/"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify snižuje limit query complexity pro Events subscriptions z dosavadních 250 na 100 points, s účinností od 22. 9. 2026. Complexity se počítá podle vybraných polí, datových typů a počtu položek v connections – jde o stejný princip jako u běžných Admin GraphQL dotazů, jen aplikovaný na definici subscription query.

Limit se týká výhradně Events subscriptions (`unstable` API, dříve komunikovaných jako Next Generation Events). Klasické Webhook API subscriptions complexity limit nemají a touto změnou nejsou nijak dotčené.

Aplikace, jejichž subscription query po zjednodušení přesahuje 100 points, musí query zjednodušit – jinak po 22. 9. 2026 subscribe request rovnou selže. Shopify k tomu doporučuje tři přístupy:

- **Rozdělit subscription podle funkce** – místo jedné široké subscription lze nakonfigurovat víc subscriptions pro stejný topic, každou s vlastním triggerem a menší query.
- **Dotazovat se přímo na změněný resource** – např. na konkrétní variantu a její pole/identifikátory, místo aby query táhla celý parent objekt se všemi vnořenými položkami.
- **Párovat strukturu query s dostupnými proměnnými** – různé triggery poskytují různé proměnné, takže samostatné subscriptions podle triggeru mohou vyjít levněji než jedna univerzální query.

Query complexity Events subscriptions se nezapočítává do API rate limitů aplikace – jde jen o strop pro samotnou definici subscription, ne o průběžné volání API.

## Časová osa

- **2026-05-22** – Next Generation Events spuštěny v developer preview
- **2026-06-17** – Editions Spring '26 povyšuje NGE na featured platform capability
- **2026-07-21 až 2026-08-26** – postupné přidávání dalších topics a metafield triggerů
- **2026-09-16** – změna struktury `fields_changed` payloadu a pravidel subscription konfigurace
- **2026-09-22** – účinnost sníženého limitu query complexity na 100 points
- *(bez určení)* – GA release Events zatím neohlášen; systém zůstává na `unstable` API verzi

## Dopad pro nás

**Pro vývojáře:** U každé aplikace, která používá Events (NGE) subscriptions, je potřeba spočítat query complexity aktuálních subscription definic a ověřit, že se vejdou do 100 points. U komplexnějších filter queries (víc vnořených polí, širší connections) je potřeba subscription rozdělit podle funkce nebo dotazovat jen přímo změněný resource místo celého parent objektu. Doporučené je udělat to proaktivně před 22. 9. 2026 – po tomto datu subscribe request s query nad limitem rovnou selže.

**Pro PM / PO:** Vysoká naléhavost, protože jde o breaking change s konkrétním datem účinnosti (22. 9. 2026), ne o postupnou deprecation. Relevantní jen tam, kde už Events (NGE) subscriptions reálně používáme – klasické webhooky nejsou dotčené. Vhodné nechat vývojáře před termínem ověřit, jestli některá nasazená subscription nemá query nad novým limitem.

## Použití v Integrátoru

Zatím spíš teoreticky – pokud bychom u některého klienta měli Events (NGE) subscription se složitější filter query, je potřeba před 22. 9. 2026 ověřit její complexity a případně ji zjednodušit podle doporučených postupů výše.
