---
date: 2026-03-10
title: "Flow: dokumentování workflows s notes"
title_en: "Flow: Document workflows with notes"
slug: flow-document-workflows-notes
zdroj: https://changelog.shopify.com/posts/flow-document-any-workflow-with-notes-that-stay-with-it
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow workflow documentation feature."
kontext:
  background: |
    Shopify Flow je bezplatná platforma pro e-commerce automatizaci, dostupná od plánu Basic. Funguje na principu tří stavebních bloků: trigger (spouštěcí událost), podmínka (condition) a akce. Workflow je vizuálně sestavená posloupnost těchto bloků, která reaguje na události v obchodu — například nová objednávka, změna stavu zásob nebo přidání tagu zákazníkovi.

    Dokumentace přímo u workflow chyběla jako systémová funkce od začátku existence Flow. Obchodníci a vývojáři si museli vést poznámky externě — v Notion, Google Docs nebo komentářích v Slacku — protože editor Flow žádné pole pro popis neposkytoval. Tato situace komplikovala předávání správy automatizací a onboarding nových členů týmu, zejména u store s desítkami aktivních workflows.

    Workflow notes řeší přesně tento gap: poznámka je uložena přímo u workflowu a přežije jak duplikování, tak přesun na jiný store. Kdokoli má oprávnění k úpravě workflow, může poznámku přečíst i aktualizovat. Tato funkce zapadá do širšího trendu, kdy Shopify posiluje správu workflows — viz version history s rollbackem nebo generování testovacích dat přes Sidekick, které na Flow přibyly ve stejném období.

  zdroje:
    - title: "Flow: Document any workflow with notes that stay with it"
      url: "https://changelog.shopify.com/posts/flow-document-any-workflow-with-notes-that-stay-with-it"
    - title: "Shopify Flow — přehled dokumentace"
      url: "https://help.shopify.com/en/manual/shopify-flow"
    - title: "Flow: version history workflow + rollback"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-workflow-version-history-rollback/"
    - title: "Flow: generování test events z existujících shop dat"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-test-events-existing-data/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Workflow notes dokumentují účel, závislosti a externí linky — note přežije duplikaci a transfer mezi stores, takže tým si zachová kontext."
tagy: [flow, documentation, automation]
---

## Co se mění
**Workflow notes** ve Flow — dokumentace přímo na workflow:
- Purpose, dependencies, external links
- Note **persistuje** přes duplikování workflow nebo move mezi stores
- Tým udrží kontext

## Použití v Integrátoru
**Nepoužíváme** — Flow internal feature.
