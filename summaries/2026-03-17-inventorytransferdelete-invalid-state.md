---
date: 2026-03-17
title: "inventoryTransferDelete: INVALID_STATE error pro běžící product import"
title_en: "inventoryTransferDelete adds INVALID_STATE error code for transfers with in-progress product import"
slug: inventorytransferdelete-invalid-state
zdroj: https://shopify.dev/changelog/inventorytransferdelete-adds-invalidstate-error-code-for-transfers-with-in-progress-product-import
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Inventory transfers nepoužíváme přímo, ale máme inventory methods. Pokud někdy přidáme inventory transfer endpoint, je nutné error handling."
dotcene_klienty: []

kontext:
  background: |
    Mutace `inventoryTransferDelete` je součástí Shopify Admin GraphQL API a slouží k programovému mazání inventory transferů. Inventory transfer je entita reprezentující plánovaný nebo probíhající přesun zásoby mezi dvěma lokacemi (skladem, prodejnou) v rámci jednoho obchodu. Transfer prochází stavovým cyklem — od Draft přes In Transit až po Completed — a jeho smazání je relevantní zejména v raných fázích životního cyklu.

    Shopify zavedl multi-location inventory v roce 2018 a od té doby rozšiřuje nástroje pro správu zásob napříč lokacemi. Inventory transfers jsou klíčovým mechanismem tohoto ekosystému: umožňují merchantům distribuovat zásoby, propojit sklady s prodejnami a synchronizovat stavy v reálném čase. S rostoucí komplexitou operací — importy produktů, paralelní API volání, automatizované sync procesy — roste i riziko konfliktů mezi souběžnými operacemi.

    Nový error kód `INVALID_STATE` řeší konkrétní race condition: pokud probíhá product import zahrnující produkty obsažené v transferu, jeho smazání by mohlo narušit integritu dat importu nebo zanechat inventář v nekonzistentním stavu. Explicitní chybový kód umožňuje volající aplikaci tento stav rozpoznat a reagovat — typicky exponential backoff retry nebo čekání na dokončení importu.

    Tento vzor ochrany před souběžnými operacemi se propojuje s dalšími vylepšeními inventory ekosystému: redesignem transfer workflow (volitelné shipment, Ready to Ship status) a novými Flow triggery pro `inventory transfer completed`, které umožňují automatizovat reakce na stavové přechody transferů.

  zdroje:
    - title: "inventoryTransferDelete adds INVALID_STATE error code for transfers with in-progress product import"
      url: "https://shopify.dev/changelog/inventorytransferdelete-adds-invalidstate-error-code-for-transfers-with-in-progress-product-import"
    - title: "inventoryTransferDelete — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDelete"
    - title: "Redesign inventory transfers — jednodušší workflow"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simpler-inventory-transfers/"
    - title: "Flow: nové triggery pro inventory transfer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-triggers-inventory-transfer/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-07: inventoryTransferDelete vrací INVALID_STATE pokud běží product import na zahrnutých produktech."
tagy: [inventory, transfer, error-handling]
editions_release: spring-2026
---

## Co se mění
Mutace `inventoryTransferDelete` v API **2026-07** vrací nový error code `INVALID_STATE`, pokud transfer obsahuje produkty s **probíhajícím product importem**. Cíl: zabránit data inkonzistencím při paralelních operacích.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Použití v Integrátoru
**Možná** — inventory transfers nepoužíváme aktuálně, ale máme inventory methods. Pokud rozšíříme o transfer flow, error handling musí pokrývat `INVALID_STATE` (typicky retry s exponential backoff).
