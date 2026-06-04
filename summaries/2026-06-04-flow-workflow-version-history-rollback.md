---
date: 2026-06-04
title: "Flow: version history workflow + rollback"
title_en: "Flow: View who edited, activated, or deactivated a workflow version"
slug: flow-workflow-version-history-rollback
zdroj: https://changelog.shopify.com/posts/flow-see-exactly-what-changed-in-any-workflow-and-roll-it-back
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow internal feature. Naše integrace Flow nedeployuje."
dotcene_klienty: []
souvisejici: [flow-document-workflows-notes, flow-test-events-existing-data]

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
