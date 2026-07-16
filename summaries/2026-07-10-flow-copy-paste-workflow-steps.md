---
date: 2026-07-10
title: "Shopify Flow: copy/paste kroků ve workflows (klávesové zkratky)"
title_en: "Flow: Copy and paste steps in your workflows"
slug: flow-copy-paste-workflow-steps
zdroj: https://changelog.shopify.com/posts/flow-copy-and-paste-steps-in-your-workflows
shrnuto_dne: 2026-07-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow je merchant-facing editor feature bez API dopadu, ale relevantní pro klienty se složitými workflows, kde stavíme nebo konzultujeme automatizace."
dotcene_klienty: []
souvisejici: [flow-workflow-version-history-rollback, flow-test-events-existing-data, flow-document-workflows-notes]
tldr: "Shopify Flow editor teď umí copy/paste jednotlivých action/condition kroků přes Cmd/Ctrl+C a Cmd/Ctrl+V, včetně celé konfigurace — urychluje stavbu workflows s opakujícími se patterns."
tagy: [flow, workflow, ux, productivity, keyboard-shortcuts]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Flow je bezplatná no-code automatizační platforma dostupná přímo v Shopify administraci od plánu Basic. Workflow se skládá ze tří stavebních bloků: trigger (spouštěcí událost), volitelná podmínka a akce. Dosud musel merchant nebo partner budující automatizaci každý krok — třeba opakující se podmínku "pokud je hodnota objednávky vyšší než X" nebo akci "přidej tag" — vytvářet ručně znovu, i když se v rámci workflow nebo napříč více workflows opakoval.

    Nová funkce přidává do editoru copy/paste jednoho action nebo condition kroku přes klávesové zkratky (Cmd/Ctrl+C, Cmd/Ctrl+V). Zkopírovaný krok si nese kompletní konfiguraci včetně vyplněných polí a logiky podmínek, takže po vložení stačí jen drobná úprava (např. změna cílové hodnoty). Vkládat lze v rámci stejného workflow i mezi různými workflows, což usnadňuje standardizaci opakujících se patterns napříč více automatizacemi na jednom účtu.

    V tomto prvním vydání jsou limity: kopírovat lze vždy jen jeden krok najednou (trigger ani multi-select zatím podporované nejsou) a kroky s vlastní konfigurační stránkou (např. Send Marketing Email) copy/paste nepodporují. Funkce navazuje na sérii editorových vylepšení Flow z první poloviny roku 2026 — workflow notes, version history s rollbackem a generování test events přes Sidekick — která společně dělají ze Flow zralejší nástroj pro týmovou správu automatizací na produkčních storech.
  zdroje:
    - title: "Shopify: Flow: Copy and paste steps in your workflows"
      url: "https://changelog.shopify.com/posts/flow-copy-and-paste-steps-in-your-workflows"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Editor Shopify Flow přidává dlouho chybějící produktivní funkci: copy/paste jednotlivých kroků workflow přes standardní klávesové zkratky (Cmd/Ctrl+C na kopírování, Cmd/Ctrl+V na vložení). Zkopírovaný action nebo condition krok si zachovává veškerou konfiguraci — vyplněná pole i podmínkovou logiku — takže po vložení obvykle stačí jen upravit konkrétní hodnotu, ne stavět krok znovu od nuly.

Vkládat lze jak v rámci stejného workflow (typicky při opakující se logice ve větvích if/else), tak napříč různými workflows, což se hodí při standardizaci stejných kroků (např. stejná notifikační akce) na více automatizacích v jednom obchodě.

Funkce má v této první verzi dvě omezení: podporuje jen jeden krok najednou (bez multi-select a bez triggerů) a nefunguje u kroků s vlastní konfigurační stránkou, jako je Send Marketing Email.

## Časová osa

- 2026-07-10 — Shopify publikuje changelog s copy/paste funkcí pro Flow editor.

## Dopad pro nás

**Pro vývojáře:** Jde čistě o editor UX v Shopify administraci, žádná změna API ani Admin GraphQL schématu. Nic k implementaci ani sledování na naší straně.

**Pro PM / PO:** Užitečný argument u klientů, kteří ve Flow spravují rozsáhlejší nebo composite workflows s opakujícími se patterns — stavba a údržba automatizací bude rychlejší. Lze zmínit v rámci konzultací k Flow setupu jako drobné, ale konkrétní zlepšení produktivity.

## Použití v Integrátoru

Nepoužíváme přímo — jde o interní editor feature Flow bez dopadu na naši integraci. Relevantní jen jako doporučení klientům, kteří ve Flow budují vlastní automatizace.
