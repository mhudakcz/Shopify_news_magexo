---
date: 2026-08-04
title: "Microsoft Advertising v Campaign Autopilot — Performance Max s auto rozpočtem"
title_en: "Microsoft Advertising now available in Campaign Autopilot"
slug: microsoft-advertising-campaign-autopilot
zdroj: https://changelog.shopify.com/posts/microsoft-advertising-now-available-in-campaign-autopilot
shrnuto_dne: 2026-08-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchant-facing funkce bez API dopadu, ale rozšiřuje Campaign Autopilot o další reklamní kanál — relevantní zmínit při marketingových konzultacích s klienty."
dotcene_klienty: []
souvisejici: [campaign-autopilot-ai-marketing, growth-tab-rename-marketing, editions-spring-2026-marketing]
tldr: "Campaign Autopilot nově podporuje Microsoft Advertising — Autopilot umí založit nebo připojit účet a spouštět Performance Max kampaně s automatickou alokací rozpočtu napříč Google, Meta a Microsoft."
tagy: [microsoft-advertising, campaign-autopilot, ads, performance-max, automation]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Campaign Autopilot je AI-driven marketingová funkce zabudovaná přímo do Shopify adminu (Growth tab), představená v rámci Shopify Editions Spring 2026. Merchant propojí reklamní kanály, nastaví měsíční budget a schvalovací pravidla a Autopilot sám navrhuje, spouští a optimalizuje kampaně napříč kanály. Při launchi podporoval Meta ads, Shop Campaigns a Shopify Messaging email automations, s Microsoft Advertising avizovaným jako další kanál na cestě.

    Tímto changelogem se Microsoft Advertising stává plnohodnotnou součástí Autopilotu. Autopilot umí za merchanta založit nový Microsoft Advertising účet nebo připojit existující a následně spustit Performance Max kampaně vedle ostatních aktivních kanálů. Performance Max je Microsoft/Google formát kampaně, který automaticky kombinuje více reklamních umístění (search, display, native) do jedné kampaně optimalizované na konverze.

    Klíčová vlastnost je automatická alokace rozpočtu: Autopilot rozděluje dostupný měsíční budget mezi Google, Meta a nyní i Microsoft podle toho, kde v danou chvíli vidí nejlepší výkonnostní příležitost. Merchant nemusí rozpočet mezi kanály manuálně přerozdělovat — systém to dělá za něj na základě dat o výkonu. Campaign Autopilot zůstává v early access; přístup je přes Growth tab v Shopify adminu.
  zdroje:
    - title: "Shopify: Microsoft Advertising now available in Campaign Autopilot"
      url: "https://changelog.shopify.com/posts/microsoft-advertising-now-available-in-campaign-autopilot"
    - title: "Shopify: Campaign Autopilot — AI-powered marketing across channels"
      url: "https://shopify.com/blog/introducing-campaign-autopilot"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Campaign Autopilot rozšiřuje portfolio podporovaných reklamních kanálů o **Microsoft Advertising**. Autopilot merchantovi buď založí nový Microsoft Advertising účet, nebo připojí ten existující, a následně spustí **Performance Max** kampaně vedle ostatních aktivních kanálů (Meta ads, Shop Campaigns).

Rozpočet se dál řídí automaticky — Autopilot alokuje měsíční budget napříč všemi připojenými kanály podle aktuální výkonnostní příležitosti, tedy nyní i s Microsoft Advertising v mixu. Merchant nemusí nic přerozdělovat manuálně, jen si drží možnost kdykoli zasáhnout a rozpočet nebo kampaně přepsat.

Funkce je dostupná přes **Growth tab** v Shopify adminu, kde běží enrollment do Campaign Autopilot early access.

## Časová osa

- **2026-06-17** — Editions Spring '26: launch Campaign Autopilot (Meta, Shop Campaigns, Shopify Messaging), Microsoft Advertising avizován jako plánovaný kanál
- **2026-08-04** — Microsoft Advertising ostře spuštěn v Campaign Autopilot, Performance Max kampaně s auto rozpočtem

## Dopad pro nás

**Pro vývojáře:** Campaign Autopilot nemá vlastní developer API — jde čistě o merchant-facing funkci v adminu, žádná integrace ani úprava kódu není potřeba. Stojí za to sledovat, zda Shopify časem otevře API pro partnery, protože rozšiřování o další kanály (dřív Microsoft, dál avizovaný ChatGPT Ads a Snapchat) ukazuje, že Autopilot je aktivně budovaná platforma.

**Pro PM / PO:** Pro klienty, kteří dosud Microsoft Advertising nepoužívali nebo ho spravovali ručně, jde o snadný vstup bez agentury — Autopilot založí účet a spustí kampaň za ně. Vhodné zmínit při konzultacích o marketingové strategii u menších e-shopů bez dedikovaného marketing týmu. Limity zůstávají stejné jako u zbytku Autopilotu: žádný AI-generovaný creative, jen práce s existujícími produktovými daty, a funkce je stále v early access.

## Použití v Integrátoru

Přímá relevance pro Integrátor je nízká — jde o merchant-level funkci bez API dopadu. Užitečné je mít ji v přehledu jako další argument pro klienty zvažující rozšíření reklamního mixu o Microsoft Advertising.
