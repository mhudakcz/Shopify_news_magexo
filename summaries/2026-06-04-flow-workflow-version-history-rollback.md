---
date: 2026-06-04
title: "Flow: version history workflow + rollback"
title_en: "Flow: View who edited, activated, or deactivated a workflow version"
slug: flow-workflow-version-history-rollback
zdroj: https://changelog.shopify.com/posts/flow-see-exactly-what-changed-in-any-workflow-and-roll-it-back
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-06-04

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow internal feature. Naše integrace Flow nedeployuje."
dotcene_klienty: []
souvisejici: [flow-document-workflows-notes, flow-test-events-existing-data]

kontext:
  background: |
    Shopify Flow je bezplatná no-code automatizační platforma dostupná přímo v Shopify administraci od plánu Basic. Workflow se skládá ze tří stavebních bloků: trigger (spouštěcí událost), volitelná podmínka a akce. Store může mít desítky aktivních workflows, které spravuje více členů týmu zároveň.

    Dříve Flow neuchovávalo žádný záznam o tom, kdo a kdy workflow změnil, aktivoval nebo deaktivoval. Při výskytu chyby bylo obtížné dohledat příčinu — nebylo jasné, zda se workflow změnilo záměrně, ani kdy konkrétně ke změně došlo. Chyběl také způsob, jak rychle vrátit workflow do funkčního stavu bez ručního přepisování kroků.

    Version history tuto mezeru vyplňuje: každá verze workflow je uložena s časovým razítkem a identifikací uživatele, který změnu provedl. Rollback umožňuje obnovit dřívější verzi jediným kliknutím, což výrazně zkracuje dobu obnovy při nechtěné změně nebo chybně nasazeném workflow. Funkce je přístupná přes záložku Version history na detailní stránce workflowu.

    Tato novinka zapadá do širší série vylepšení správy Flow z první poloviny roku 2026: workflow notes pro dokumentaci a generování testovacích dat přes Sidekick spolu s version history tvoří ucelený základ pro týmovou správu automatizací na produkčních storech.

  zdroje:
    - title: "Flow: See exactly what changed in any workflow and roll it back – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/flow-see-exactly-what-changed-in-any-workflow-and-roll-it-back"
    - title: "Shopify Flow version history – Shopify Help"
      url: "https://help.shopify.com/en/manual/shopify-flow/manage/version-history"
    - title: "Flow: dokumentování workflows s notes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-document-workflows-notes/"
    - title: "Flow: generování test events z existujících shop dat"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-test-events-existing-data/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify Flow má version history per workflow — kdo edit/activated/deactivated jakou verzi. Plus **rollback** na předchozí verzi. _Původně publikováno 5. 5. 2026 (audit doplnění)._"
tagy: [flow, version-history, rollback, audit]
---

## Co se mění
**Shopify Flow** workflows mají nyní **version history**:
- Vidíš, kdo upravil/aktivoval/deaktivoval verzi a kdy
- **One-click rollback** na předchozí verzi

Pro týmy s několika lidmi spravujícími workflows = clean audit trail + rychlá oprava chyb.

## Použití v Integrátoru
**Nepoužíváme** — Flow merchant feature. Pro klienty s velkými Flow setupy užitečný argument.

## Související
- [Flow document workflows with notes](../zmena/flow-document-workflows-notes/)
- [Flow test events with existing data](../zmena/flow-test-events-existing-data/)
