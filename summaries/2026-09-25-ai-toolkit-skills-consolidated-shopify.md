---
date: 2026-09-25
title: "AI Toolkit skills konsolidovány pod jediný namespace `shopify` (Action Required)"
title_en: "AI Toolkit skills have been consolidated to `shopify`"
slug: ai-toolkit-skills-consolidated-shopify
zdroj: https://shopify.dev/changelog/posts/ai-toolkit-skills-have-been-consolidated
shrnuto_dne: 2026-09-30
kategorie: [breaking-change, deprecation]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-09-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pracujeme s AI agenty s Shopify pluginem nebo skills nainstalovanými přes npx skills, staré skills s prefixem shopify- je nutné nahradit jediným skillem shopify."
dotcene_klienty: []
souvisejici: [shopify-ai-toolkit-commerce-skills, shopify-ai-toolkit-polaris-migration, shopify-ai-toolkit]
tldr: "Shopify sloučil více než 20 samostatných AI Toolkit skills s prefixem shopify- do jediného skillu shopify; staré skills je nutné odinstalovat a nový nainstalovat ručně, nebo přes aktualizaci pluginu."
tagy: [ai-toolkit, skills, consolidation, namespace, breaking, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    AI Toolkit je sada schopností, která propojuje Shopify platformu s AI vývojovými agenty typu Claude Code, Cursor nebo Codex. Agent díky němu dostává aktuální GraphQL schémata, dokumentaci, validaci kódu a CLI příkazy místo toho, aby implementaci API hádal z tréninkových dat. Toolkit se od svého spuštění (duben 2026) distribuuje jako plugin, jako samostatné skills instalovatelné přes npm nástroj `npx skills` a jako Dev MCP server.

    Dosavadní architektura skládala toolkit z desítek samostatných skills, každý s prefixem shopify- (například skills pro Admin API, Functions, Hydrogen nebo Polaris extensions). Shopify uvádí, že tato fragmentace v praxi vedla ke zmatení agentů a ke zkracování popisů skills v kontextovém okně. Čím více skills agent načte, tím více tokenů zabere jejich metadata a tím hůře se v nich model orientuje při výběru správného nástroje.

    Nová struktura sloučí všechny tyto schopnosti do jediného skillu s názvem `shopify`. Cílem je jednoznačnější výběr nástroje, nižší spotřeba tokenů a jednodušší údržba. Změna se netýká skillu `ucp` a uživatelů Dev MCP serveru, kteří zůstávají beze změny. Shopify změnu označil jako Action Required, takže prostředí, která stále používají starou sadu skills, je nutné přepnout na nový skill.
  zdroje:
    - title: "Shopify: AI Toolkit skills have been consolidated to `shopify`"
      url: "https://shopify.dev/changelog/posts/ai-toolkit-skills-have-been-consolidated"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify sloučil všechny dosavadní skills z AI Toolkitu do jediného skillu pojmenovaného `shopify`. Místo více než 20 samostatných skills s prefixem `shopify-` (například `shopify-admin`, `shopify-functions`, `shopify-hydrogen`) agent nově načítá jediný skill, který pokrývá stejné oblasti. Důvodem je podle Shopify zmatení agentů a zkracování popisů v kontextovém okně, které způsobovala předchozí fragmentovaná struktura.

Změna se týká prostředí, která podporují pluginy, a nástroje `npx skills` (i podobných instalačních systémů pro agent skills). **Netýká se** skillu `ucp` ani uživatelů Dev MCP serveru.

Způsob nápravy závisí na způsobu instalace:

- **Plugin:** pokud prostředí podporuje automatickou aktualizaci pluginů, stačí plugin aktualizovat přes jeho správu. Jinak je potřeba aktualizaci spustit ručně.
- **`npx skills`:** je nutné provést dva kroky v každém dotčeném prostředí.

```bash
# 1) odinstalovat zastaralé skills (kompletní seznam 20+ skills je v changelogu)
npx skills remove -y <seznam-starych-skills>

# 2) nainstalovat nový konsolidovaný skill
npx skills add Shopify/shopify-ai-toolkit --skill shopify
```

U globálních instalací se přidává přepínač `-g`. Postup je třeba zopakovat v každém prostředí (lokální projekt, globální instalace, další pracovní stanice), kde byly staré skills nainstalované.

## Časová osa

- **2026-04-02:** Shopify spouští AI Toolkit jako sadu dokumentace, schémat a validace pro AI nástroje.
- **2026-06-17:** AI Toolkit se představuje v Editions Spring '26 jako commerce skills pro Claude Code, Cursor, Codex a další.
- **2026-09-25:** Zveřejnění changelogu o konsolidaci skills pod jediný `shopify` skill, označeno jako Action Required.
- **Bez pevného termínu:** changelog neuvádí deadline. Příznak Action Required ale naznačuje, že migraci je vhodné provést co nejdříve.
- **2026-10-01:** související deadline pro migraci extensions na Polaris web components. Pokud k ní používáme AI Toolkit, je rozumné mít konsolidovaný skill nainstalovaný předem.

## Dopad pro nás

**Pro vývojáře:** Je potřeba zkontrolovat všechna prostředí, kde používáme AI agenty se Shopify skills: lokální instalace, globální instalace (`-g`), plugin v Claude Code nebo Cursoru a případné skripty či dokumentaci, které na staré názvy skills odkazují. Pokud skripty, onboarding dokumenty nebo konfigurace agentů pracují s názvy typu `shopify-admin` nebo `shopify-functions`, je nutné je přepsat na jediný skill `shopify`. Doporučený postup je odinstalovat staré skills a teprve poté nainstalovat nový, aby se v kontextu agenta nepotkaly obě sady najednou a agent nedostával duplicitní nebo konfliktní instrukce. Vývojáři používající pouze Dev MCP server nemusí dělat nic.

**Pro PM / PO:** Jde o čistě interní vývojářský nástroj, takže změna nemá žádný dopad na storefronty ani na zákazníky. Relevantní je pouze pro tým: krátká interní akce (řádově minuty na jedno prostředí), která zabrání tomu, aby AI agenti pracovali se zastaralou sadou skills. Vhodné je zařadit ji do běžného týdenního údržbového okna a ověřit, že se nové skills načetly, například krátkým testovacím dotazem na Admin API nebo Functions.

## Použití v Integrátoru

Pokud při vývoji používáme AI agenty s Shopify pluginem nebo skills přes `npx skills`, je nutné provést popsanou migraci; samotné produkční nasazení to neovlivňuje. U pracovních postupů, které využívají pouze Dev MCP server, změna žádnou akci nevyžaduje.

## ⬅️ Související

🔗 [Commerce skills pro AI agenty](/Shopify_news_magexo/zmena/shopify-ai-toolkit-commerce-skills/)
🔗 [AI Toolkit pro migraci extensions na Polaris web components](/Shopify_news_magexo/zmena/shopify-ai-toolkit-polaris-migration/)
🔗 [Shopify AI Toolkit](/Shopify_news_magexo/zmena/shopify-ai-toolkit/)
