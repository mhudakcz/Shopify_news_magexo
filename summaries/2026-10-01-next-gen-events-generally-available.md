---
date: 2026-10-01
title: "Next Generation Events GA — fewer deliveries, richer payloads, no follow-up queries"
title_en: "More control over commerce updates with Next Gen Events"
slug: next-gen-events-generally-available
zdroj: https://shopify.dev/changelog/blog/next-generation-events-are-now-generally-available
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Synchronizační flows dnes přijímají plné webhook payloady a po každé události dotahují související data dalšími Admin API voláními; NGE tohle řeší na straně Shopify přes GraphQL query v payloadu a server-side filtr, takže klesá objem doručení i počet follow-up volání."
dotcene_klienty: []
souvisejici: [next-generation-events-preview, next-generation-events-field-level-webhooks, app-events-dev-dashboard]
tldr: "Next Generation Events jsou od API verze 2026-10 generally available pro 18 topics. Aplikace dostanou méně doručení (query filter), bohatší payloady (GraphQL query přímo ve zprávě) a nemusí dělat follow-up dotazy; klasické webhooky dál fungují, takže migrace může být postupná."
tagy: [events, webhooks, next-gen-events, ga, platform, agentic]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Next Generation Events (NGE) jsou deklarativní nástupce klasických Shopify webhooků. Místo fixního payloadu, který aplikace dostane při jakékoli změně resource, si vývojář v `shopify.app.toml` nadefinuje, kdy má doručení vzniknout, jaká data v něm chce mít a za jakých podmínek se má zpráva vůbec odeslat. Funkci jsme sledovali od května 2026, kdy NGE vyšly v developer preview s topics Product a Customer na verzi `unstable`, a v červnu je Editions Spring '26 povýšily na featured capability platformy.

    Oznámení z 1. října 2026 uvádí NGE jako generally available s API verzí `2026-10`. Shopify shrnuje přínos třemi slovními spojeními: fewer deliveries (query filter omezí, co se skutečně pošle), richer payloads (GraphQL query vloží související data přímo do eventu) a no follow-up queries (aplikace dostane informaci o změně i potřebná data v jedné zprávě). Subscription se skládá ze tří částí: triggers (jaká změna je zajímá, například produkt, který se stal členem kolekce), query (Admin API GraphQL dotaz, který určuje obsah payloadu) a query filter (podmínka nad výsledkem dotazu, například pouze status ACTIVE). Doručená zpráva nese metadata `fields_changed` a `query_variables` spolu s daty z dotazu.

    Oproti preview se zásadně rozšiřuje pokrytí: GA podporuje 18 topics napříč merchandisingem (Product, Collection), zákazníky (Customer, Company), objednávkami (Order, FulfillmentOrder, Refund, Return), inventářem (InventoryItem, InventoryShipment, InventoryTransfer, Location), obsahem (Article, Blog, Page) a custom daty (MetafieldDefinition, Metaobject, MetaobjectDefinition). Klasické webhooky zůstávají funkční, obě technologie lze provozovat vedle sebe a pro topics nebo vzory, které NGE nepokrývají, zůstávají webhooky k dispozici. Shopify v oznámení neuvádí žádné změny ceny ani termíny deprecace. Dokumentace zmiňuje complexity limit pro GraphQL dotazy, ale konkrétní číselné hodnoty v oznámení nejsou.
  zdroje:
    - title: "Shopify: More control over commerce updates with Next Gen Events"
      url: "https://shopify.dev/changelog/blog/next-generation-events-are-now-generally-available"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

**Next Generation Events** opouštějí developer preview a jsou **generally available** od API verze `2026-10`. Jde o deklarativní nástupce klasických webhooků pro 18 topics. Hlavní sliby Shopify:

- **Fewer deliveries** — `query filter` omezí doručení podle podmínky nad výsledkem dotazu (například jen produkty se statusem ACTIVE). Zbytečné zprávy se k aplikaci vůbec nedostanou.
- **Richer payloads** — payload definuje GraphQL Admin API `query`, takže související data (včetně metafieldů a navázaných objektů) přijdou přímo v eventu.
- **No follow-up queries** — aplikace dostane kontext změny (`fields_changed`, `query_variables`) i potřebná data najednou a nemusí po příchodu webhooku volat API znovu.

Subscription se konfiguruje v `shopify.app.toml` a skládá se ze tří částí:

1. **Triggers** — jaké změny aplikaci zajímají (například produkt, který se stal členem kolekce).
2. **Query** — GraphQL dotaz, který určuje tvar a obsah payloadu.
3. **Query filter** — podmínka nad výsledkem dotazu, která rozhodne, jestli se zpráva doručí.

**Podporované topics (18):** Product, Collection, Customer, Company, Order, FulfillmentOrder, Refund, Return, InventoryItem, InventoryShipment, InventoryTransfer, Location, Article, Blog, Page, MetafieldDefinition, Metaobject, MetaobjectDefinition.

**Zpětná kompatibilita:** klasické webhooky fungují dál. Aplikace může provozovat oba systémy současně a workflows přesouvat postupně. Pro topics a scénáře, které NGE nepokrývají, zůstávají webhooky k dispozici. V oznámení nejsou uvedeny žádné změny ceny ani termíny deprecace.

**Jak začít:**

- **Existující uživatelé webhooků** — projít migration guide a identifikovat deliveries s vysokým objemem a nízkou užitečností; tam má migrace největší návratnost.
- **Noví vývojáři** — Shopify CLI 4.83 nebo novější a API verze `2026-10`.
- **Uživatelé preview** — přepnout verzi z `unstable` na `2026-10`.

Shopify doporučuje v optimization guide změřit počet doručení, velikost payloadů a počet follow-up API volání před migrací i po ní. GraphQL dotazy v subscriptions podléhají complexity limitu; číselné hodnoty oznámení neuvádí, ověřte je v dokumentaci Events.

## Časová osa

- **2026-05-22** — Next Generation Events v developer preview (topics Product a Customer, verze `unstable`)
- **2026-06-17** — Editions Spring '26: NGE povýšeny na featured capability platformy
- **2026-10-01** — NGE generally available s API verzí `2026-10`, 18 topics, Shopify CLI 4.83+
- *(bez určení)* — žádný oznámený termín deprecace klasických webhooků

## Dopad pro nás

**Pro vývojáře:** Typický handler dnes přijme plný webhook payload, zjistí, co se změnilo, rozhodne, jestli událost zpracovat, a často ještě zavolá Admin API pro související data. NGE tuhle logiku přesouvají do konfigurace: filtr běží na straně Shopify a potřebná data přijdou v payloadu. Očekávatelný výsledek je méně doručení, méně follow-up volání (a tedy nižší spotřeba API limitu) a jednodušší, lépe testovatelný handler kód. Konfigurace v `shopify.app.toml` je verzovatelná a auditovatelná. Doporučený postup: vybrat 1-2 nejhlučnější webhook subscriptions (vysoký objem, nízká užitečnost), změřit baseline (počet doručení, velikost payloadu, počet navazujících volání), převést je na NGE na verzi `2026-10` a porovnat. Pozor na pokrytí: NGE jsou omezené na 18 topics, takže ostatní zůstanou na klasických webhookách. Také si ověřte, že aplikace běží na API verzi `2026-10` a že CLI je 4.83 nebo novější.

**Pro PM / PO:** GA znamená, že NGE lze nasadit na produkci přes stabilní API verzi, což v preview nešlo. Pro obchody s vysokou frekvencí změn (hromadné importy, dynamické přeceňování, ERP a WMS synchronizace) je to příležitost snížit webhook provoz, riziko rate-limitů i provozní náklady integrací. Migrace není nutná ani časově tlačená, protože klasické webhooky fungují dál; dává smysl ji zařadit do roadmapy jako optimalizační iniciativu s měřitelným přínosem a ne jako povinnost.

## Použití v Integrátoru

**Možná** — relevantní pro webhook-based synchronizační flows, kde dnes po každé události následují další Admin API dotazy. Po GA je rozumné zmapovat nejobjemnější subscriptions a ověřit, jestli jejich topics patří mezi 18 podporovaných.
