---
date: 2026-05-14
title: "Flow: generování test events z existujících shop dat (přes Sidekick)"
title_en: "Flow: Make test events for your workflows with existing shop data"
slug: flow-test-events-existing-data
zdroj: https://changelog.shopify.com/posts/flow-sidekick-generates-test-cases-for-your-workflows
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow workflow testing feature."
dotcene_klienty: []
souvisejici: [flow-document-workflows-notes, flow-shopifyql-action]

tldr: "Workflow testing s existujícími shop daty. Sidekick AI analyzuje workflows a najde reálná data pro testování logických cest. Lze editovat, mazat nebo přidávat custom test cases bez setupu."
tagy: [flow, testing, sidekick, ai, automation]
---

## Co se mění
**Flow workflows** lze nyní testovat s **reálnými shop daty**. **Sidekick AI** automaticky:
1. Analyzuje workflow (triggers, conditions, actions)
2. Najde reálné záznamy v shopu, které pokryjí logical paths
3. Vygeneruje test cases

Merchant může edit / remove / přidat custom test cases. Bez ručního setupu testing dat.

## Použití v Integrátoru
**Nepoužíváme** — Flow internal feature. Klientům, co mají composite workflows, lze nabídnout jako quality assurance tool.
