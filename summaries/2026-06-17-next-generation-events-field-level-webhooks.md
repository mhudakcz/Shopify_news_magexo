---
date: 2026-06-17
title: "More control over events — Next Generation Events s field-level triggery"
title_en: "More control over events — Next Generation Events with field-level triggers"
slug: next-generation-events-field-level-webhooks
zdroj: https://shopify.dev/docs/apps/build/events
shrnuto_dne: 2026-06-17
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrační aplikace dnes přijímají plné webhook payloady a filtrují relevantní změny v kódu; NGE přesouvá tuto logiku do deklarativní konfigurace a snižuje objem webhook traffic."
dotcene_klienty: []
souvisejici: ["next-generation-events-preview", "app-events-dev-dashboard"]
editions_release: spring-2026
kontext:
  background: |
    Next Generation Events (NGE) jsou nová generace Shopify webhook systému, dostupná v developer preview na `unstable` API verzi. Jde o náhradu (resp. evoluci) klasických webhooků, která přesouvá konfiguraci filtrování a definice payloadu z runtime kódu do deklarativního souboru `shopify.app.toml`. Aplikace tak přijímají pouze ta oznámení, která skutečně potřebují — bez nutnosti zbytečného zpracování nebo dodatečných API volání.

    Tradiční Shopify webhooky mají tři dlouhodobé limity: fixní schéma payloadu (vývojář dostane vše nebo nic), absence filtrace na úrovni jednotlivých polí (event se spustí při jakékoli změně resource, nikoli jen při změně konkrétní hodnoty) a neurčitost toho, co přesně změnu vyvolalo. U e-shopů s vysokou frekvencí aktualizací — dynamické přeceňování, masové importy, synchronizace s ERP — to znamená enormní objem webhook provozu, z něhož je relevantní pouze zlomek.

    Editions Spring '26 formálně uvádí NGE jako součást platformy s důrazem na tři klíčové schopnosti: field-level trigger control (webhook se odešle jen při změně konkrétních polí, např. `product.variants.price`), custom GraphQL payload (vývojář definuje vlastní Admin API query pro obsah doručené zprávy, včetně metafieldů) a filter expressions přes parametr `query_filter` (doručení se potlačí podle aktuální hodnoty dat, např. `product.status:'ACTIVE'`). Subscriptions se konfigurují přímo v `shopify.app.toml`, jsou tedy versionovatelné a auditovatelné jako součást zdrojového kódu.

    NGE zapadá do širšího posunu Shopify směrem k deklarativní konfiguraci aplikací — stejným směrem jdou App Extensions v toml, CI/CD deployment tokens nebo App Events dashboard pro monitoring. Podporované topics v aktuální preview zahrnují Product a Customer; pokrytí se postupně rozšiřuje. Aplikace mohou v přechodném období provozovat klasické webhooky i NGE subscriptions paralelně.
  zdroje:
    - title: "Shopify Editions Spring '26: More control over events — Next Generation Events with field-level triggers"
      url: "https://shopify.dev/docs/apps/build/events"
    - title: "Next Generation Events now available in developer preview — Shopify Changelog"
      url: "https://shopify.dev/changelog/next-generation-events-now-available-in-developer-preview"
    - title: "App Events: usage a performance data v Dev Dashboardu"
      url: "https://shopify.dev/docs/apps/build/events"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Editions Spring '26 povyšuje Next Generation Events na plnohodnotnou platformu feature: field-level triggery, custom GraphQL payloady a filter expressions výrazně snižují objem webhook traffic a zjednodušují handler logiku."
tagy: [editions, webhooks, events, next-generation, api]
zdroj_kanal: editions
---

## Co se mění

Shopify Editions Spring '26 formálně představuje **Next Generation Events** jako strategický upgrade webhook infrastruktury. Klíčové schopnosti dostupné v developer preview (API verze `unstable`):

- **Field-level triggers** — subscription se aktivuje jen při změně konkrétních polí (např. `product.variants.price`, `customer.email`), nikoli při jakémkoliv update resource. Pole se deklarují v `triggers` sekci v `shopify.app.toml`.
- **Custom GraphQL payload** — vývojář definuje vlastní Admin API `query` pro obsah doručeného payloadu. Výsledek: menší zprávy přesně tvarované na potřeby aplikace, bez nutnosti re-fetch z webhook handleru.
- **Filter expressions** (`query_filter`) — serverová filtrace potlačí doručení na základě aktuálních hodnot dat (např. `product.status:'ACTIVE'`). Podmíněná logika se přesouvá z handler kódu do konfigurace.
- **`fields_changed` v payloadu** — každé doručení obsahuje explicitní seznam změněných polí s úplnými cestami, takže handler přesně ví, co se změnilo.
- **Deklarativní konfigurace** — vše v `shopify.app.toml`, versionovatelné jako součást repo.

Aktuálně dostupné topics: **Product** a **Customer**. Ostatní topics budou přidávány průběžně. Klasické webhooky a NGE lze provozovat paralelně během přechodu.

## Časová osa

- **2026-05-22** — Next Generation Events spuštěny v developer preview (Shopify Changelog)
- **2026-06-17** — Editions Spring '26 announce; NGE povýšeny na featured platformu capability
- *(bez určení)* — GA release s plným pokrytím topics (zatím neohlášeno)

## Dopad pro nás

**Pro vývojáře:**
Přímý dopad na webhook handlery v integračních aplikacích. Dnes typický pattern: přijmout full payload → zkontrolovat, která pole se změnila → rozhodnout, zda událost zpracovat. NGE přesouvá tento filtering do konfigurace — handler dostane zprávu jen tehdy, když ji skutečně potřebuje. Praktický výsledek: méně zpráv, menší payloady, jednodušší a spolehlivější handler logika. Konfigurace v `shopify.app.toml` je auditovatelná a verzovatelná. Doporučeno: sledovat rozšiřování supported topics a připravit migraci existujících webhook subscriptions na NGE, jakmile budou potřebná topics dostupná mimo `unstable`.

**Pro PM / PO:**
Pro klienty s vysokou frekvencí aktualizací produktů, zákazníků nebo objednávek (masové importy, přeceňování, ERP synchronizace) NGE přímo snižuje webhook zátěž a riziko dosažení rate-limitů v navazujících systémech. Feature je zatím v developer preview — nelze nasadit na produkci přes stabilní API verzi. Vhodné zahrnout do technologického roadmapu pro H2 2026 / po GA releasu.

## Použití v Integrátoru

**Možná** — relevantní pro webhook-based synchronizační flows. Field-level triggers a custom payloady přímo řeší přesnost a objem dat přenášených při synchronizaci s externími systémy. Sledovat dostupnost potřebných topics po opuštění `unstable`.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Developer](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)
