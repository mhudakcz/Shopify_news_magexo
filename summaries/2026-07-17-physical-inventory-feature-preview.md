---
date: 2026-07-17
title: "Physical inventory — nová feature preview v Admin GraphQL"
title_en: "Physical inventory feature preview"
slug: physical-inventory-feature-preview
zdroj: https://shopify.dev/changelog/physical-inventory-feature-preview
shrnuto_dne: 2026-07-21
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s inventory levels a purchase orders přes Admin API — bins a cycle-count primitives by mohly zjednodušit sync se sklady, jakmile feature vyjde ze stavu preview."
dotcene_klienty: []
souvisejici: [bin-locations-order-printer, purchase-orders-create-inventory-transfers, inventory-adjustment-full-change-tracking]
tldr: "Shopify otevřel v unstable Admin GraphQL API preview nových primitiv pro fyzický sklad — bins, counts a purchase orders — určených pro cycle counting a reconciliaci on-hand vs. available inventory."
tagy: [admin-graphql-api, inventory, physical-inventory, feature-preview]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify dlouhodobě rozlišuje mezi "available" inventory (co lze prodat) a "on-hand" inventory (co fyzicky leží na skladě). Dosavadní Admin API pokrývalo hlavně tu první vrstvu — dostupnost pro prodej, rezervace, inventory transfers mezi lokacemi. Chyběla ale nativní vrstva pro to, jak sklad skutečně vypadá zevnitř: kde přesně (na jaké polici, v jakém regálu) leží konkrétní položka a jak se ověřuje, že fyzický stav souhlasí se systémovým.

    Nová feature preview "Physical inventory" tuto mezeru zaplňuje třemi primitivy: bins (fyzická úložná místa v rámci lokace — regál, police, přihrádka), counts (mutace inventoryCountCreate pro zaznamenání skutečně napočítaného množství v konkrétním binu) a purchase orders (query přístup k detailům objednávky, položkám a dodavatelům přes GraphQL). Jde o klasický cycle-counting use case — sklad periodicky prochází regály, počítá skutečné množství a porovnává ho se systémovým stavem, aby odhalil rozdíly (krádeže, chyby při příjmu, poškozené zboží).

    Protože je to feature preview v unstable API verzi, schema se může měnit bez oznámení a merchanti/aplikace si ho musí explicitně zapnout na development store. Není určeno pro produkční nasazení — jde o kanál pro rané testování a feedback, než Shopify primitiva zafixuje do stabilní verze.
  zdroje:
    - title: "Shopify: Physical inventory feature preview"
      url: "https://shopify.dev/changelog/physical-inventory-feature-preview"
  generated_at: 2026-07-21T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify otevřel v `unstable` verzi Admin GraphQL API novou feature preview s názvem Physical inventory. Cílem je dát developerům přístup k primitivům, která merchanti reálně používají k organizaci fyzického skladu:

- **Bins** — vytváření, úprava a sledování množství v konkrétních úložných místech (regál, police, přihrádka) v rámci lokace.
- **Counts** — mutace `inventoryCountCreate`, kterou lze zapsat skutečně napočítané on-hand množství pro inventory item v konkrétním binu. Typický scénář je cycle count — pravidelná fyzická kontrola skladu a reconciliace se systémovým stavem.
- **Purchase orders** — query pro čtení detailů purchase orderu, jeho položek a informací o dodavateli přímo přes GraphQL.

Aby aplikace mohla tato pole a mutace používat, musí mít development store se zapnutou feature preview a request musí mířit na `unstable` API verzi. Bez zapnuté preview vrací volání na tyto objekty chybu přístupu. Shopify explicitně upozorňuje, že jde o rané stadium vývoje — schema se ještě může měnit na základě zpětné vazby, než feature dozraje do stabilní verze API.

## Časová osa

- **2026-07-17** — Zveřejněna feature preview Physical inventory v unstable Admin GraphQL API.
- Další vývoj — Shopify bude schema upravovat na základě feedbacku z preview kanálu; datum stabilizace zatím neoznámeno.

## Dopad pro nás

**Pro vývojáře:** Zatím nejde o nic, co je potřeba řešit okamžitě — je to preview v `unstable` verzi, takže žádný produkční kód by na tato pole neměl spoléhat. Stojí za to sledovat vývoj schématu, protože `inventoryCountCreate` a bin-level tracking mohou v budoucnu nahradit nebo doplnit dnešní přístup k on-hand quantities přes `inventorySetOnHandQuantities`.

**Pro PM / PO:** Jde o low-urgency novinku pro klienty s fyzickým skladem, kteří dnes řeší cycle counting mimo Shopify (v samostatném WMS nebo ručně na papíře/Excelu). Zatím nejde komunikovat jako hotovou funkci — je to jen signál, kterým směrem se Shopify inventory model posouvá.

## Použití v Integrátoru

Nepoužíváme zatím — feature je v preview a unstable API verzi. Do budoucna může mít smysl sledovat, zda bin-level counts nenahradí nebo nedoplní naše stávající inventory metody při synchronizaci se sklady.
