---
date: 2026-03-24
title: "Flow: nové 'Get data' akce pro workflows, abandoned checkouts, inventory, pages"
title_en: "Flow: New actions to get data about workflow runs, abandoned checkouts, inventory items, catalogs, and pages"
slug: flow-new-actions-get-data
zdroj: https://changelog.shopify.com/posts/flow-new-actions-to-get-data-about-workflow-runs-abandoned-checkouts-inventory-items-catalogs-and-pages
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow je no-code automation. Pokud klient používá Flow + naše data, tyto akce mohou nahradit část custom logiky."
tldr: "Shopify Flow přidává 4 nové 'Get data' akce — vrací až 100 resources: workflow runs, abandoned checkouts, inventory items, pages. Pro pokročilé workflow building."
tagy: [flow, automation, get-data]
souvisejici: [flow-triggers-inventory-transfer, flow-more-fields-admin-api]
---

## Co se mění
Shopify **Flow** přidává 4 nové akce typu **„Get data"** vracející až 100 záznamů:
- **Workflow runs**
- **Abandoned checkouts**
- **Inventory items**
- **Pages**

Cíl: stavět pokročilé workflow nad Shopify daty bez custom kódu.

## Použití v Integrátoru
**Možná** — pokud klient používá Flow + my dodáváme data odjinud, tyto akce mohou ušetřit middleware. Stojí za zmínit u B2B klientů s automation needs.
