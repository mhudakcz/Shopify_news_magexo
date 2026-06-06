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

kontext:
  background: |
    Shopify Flow je bezplatná no-code automatizační platforma dostupná od plánu Basic. Workflow se skládá ze tří stavebních bloků: trigger (spouštěcí událost), volitelná podmínka a akce. Testování workflow před aktivací bylo dříve závislé na ručním zadávání vzorových dat nebo čekání na reálnou událost, která spustí příslušnou větev logiky.

    Sidekick je AI asistent zabudovaný přímo do Shopify administrace. V kontextu Flow přebírá roli automatického generátoru testovacích scénářů: přečte strukturu workflow — jeho triggery, podmínky a akce — a v obchodě vyhledá existující záznamy (objednávky, zákazníky, produkty), které logické větve pokrývají. Výsledkem jsou připravené test cases bez nutnosti ručního sestavování testovacích dat.

    Praktický přínos je zejména u složitých workflows s více větvemi (if/else conditions): merchant může okamžitě ověřit, zda každá větev funguje správně, upravit vygenerované případy nebo přidat vlastní edge case. Tím se snižuje riziko tichých chyb — workflow, které nikdy nenarazí na konkrétní podmínku a selže až na produkčních datech.

    Funkce navazuje na sérii nástrojů pro správu a dokumentaci Flow: ve stejném období přibyly workflow notes a version history s rollbackem, které spolu tvoří ucelený základ pro týmovou správu automatizací.
  zdroje:
    - title: "Flow: Sidekick generates test cases for your workflows – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/flow-sidekick-generates-test-cases-for-your-workflows"
    - title: "Flow: dokumentování workflows s notes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-document-workflows-notes/"
    - title: "Flow: version history workflow + rollback"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-workflow-version-history-rollback/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
