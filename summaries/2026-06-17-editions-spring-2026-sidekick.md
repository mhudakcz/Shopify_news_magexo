---
date: 2026-06-17
title: "Editions Spring '26: Sidekick — AI asistent napříč Shopify platformou"
slug: editions-spring-2026-sidekick
zdroj: https://www.shopify.com/editions/spring2026
shrnuto_dne: 2026-06-17
kategorie: [editions-theme]
api_oblast: other
nalehavost: nizka
customer_facing: false
pouzivame_v_integratoru: ne
dukaz_integratoru: "Sidekick = Shopify vlastní AI asistent v admin. Pro nás je to merchant-facing tool, ne integration touch point."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "flow-test-events-existing-data", "flow-workflow-version-history-rollback"]
editions_release: spring-2026
tldr: "Sidekick se v Spring '26 rozšířil z admin chatboxu na všudypřítomného asistenta: funguje s třetími aplikacemi (Judge.me, Klaviyo, Loop, Smile), běží na Apple Watch, je dostupný na každé obrazovce mobilní aplikace, a zvládá multi-tasking v pozadí. Přibyly follow-up otázky ve stylu multiple choice, tvorba zákazníků přirozeným popisem, vylepšený editor Sidekick-generovaných aplikací a generování test events pro Shopify Flow."
tagy: [editions, sidekick, ai, productivity, mobile]
zdroj_kanal: editions
---

## O čem tahle Editions téma je

Sidekick je Shopify vlastní AI asistent zabudovaný přímo do administrace — LLM-based chatbot, který rozumí kontextu obchodu a dokáže nejen odpovídat na otázky, ale i provádět akce. Spring '26 přinesl v tomto tématu 9 položek, které rozšiřují Sidekick ze singleplayer admin chatboxu na platformu prostupující celou Shopify ekosystémem: mobilní aplikaci, Apple Watch, třetí aplikace i vývojářské nástroje.

Hlavní linie tématu jsou tři:

1. **Omnipresence** — Sidekick se dostává na každou obrazovku (mobile, Watch, admin okna), takže merchant nemusí přecházet do speciální sekce.
2. **Integrace s ekosystémem** — třetí aplikace (Judge.me, Klaviyo, Loop, Smile) mohou Sidekick napojit na vlastní data a akce, což z něj dělá cross-app orchestrační vrstvu.
3. **Produktivní UX** — follow-up otázky, multi-tasking na pozadí a actionable tipy při otevření adminu snižují tření při každodenní práci.

---

## Top 3 highlights

### 1. Sidekick funguje s třetími aplikacemi
Merchants napojené na Judge.me, Klaviyo, Loop nebo Smile mohou Sidekick použít k dotazům a akcím přímo v těchto aplikacích — bez přepínání záložek. Každá aplikace si přidá vlastní extension do Sidekicku, což otevírá nový povrch pro Shopify Partner ekosystém. Tato položka je strategicky nejvýznamnější: signalizuje, že Sidekick roste z "asistenta v Shopify adminu" na "asistenta pro celý obchodní stack postaveného na Shopify".

### 2. Sidekick všude v mobilní aplikaci
Text nebo hlas s Sidekickem je nyní dostupný na každé obrazovce Shopify mobilní aplikace. Merchant může reagovat na denní situace (objednávka přišla, co s ní?) bez odemykání počítače.

### 3. Automation tests s Sidekickem
Sidekick generuje testovací eventy pro Shopify Flow — analyzuje workflow (triggers, conditions, actions), najde reálná data z obchodu a vygeneruje připravené test cases. Viz existující záznám: `flow-test-events-existing-data`.

---

## Všechny položky (9 celkem)

### Pro merchanty

| # | Název | Popis | Status |
|---|-------|-------|--------|
| 1 | **Sidekick works with your apps** | Sidekick odpovídá a jedná v Judge.me, Klaviyo, Loop, Smile a dalších třetích aplikacích. Aplikace přidávají vlastní extension do Sidekicku. | live |
| 2 | **Actionable guidance from Sidekick** | Při otevření admin session Sidekick zobrazí konkrétní tipy pro akvizici zákazníků, konverzi a opakované nákupy — kontextově na základě aktuálního stavu obchodu. | live |
| 3 | **Sidekick on Apple Watch** | Business data dotazy přímo z hodinek. Merchant dostane přehled klíčových metrik bez vytažení telefonu. | live |
| 4 | **Follow-up questions from Sidekick** | Sidekick pokládá follow-up otázky ve formátu multiple choice, aby upřesnil záměr před provedením akce. Snižuje tření při nejasných pokynech. | live |
| 5 | **Multi-task with Sidekick** | Sidekick zpracovává úkoly na pozadí — merchant může mezitím pracovat v jiných oknech a chats. Výsledek přijde, až bude hotový. | live |
| 7 | **Sidekick everywhere in the Shopify app** | Text nebo hlas se Sidekickem je dostupný na každé obrazovce Shopify mobilní aplikace (dříve jen v dedikované sekci). | live |
| 8 | **Sidekick creates customers** | Merchant napíše v přirozené řeči popis zákazníka (jméno, e-mail, adresa, poznámky) a Sidekick vyplní zákaznický formulář. Odstraňuje nutnost manuálního klikání. | live |
| 9 | **Automation tests with Sidekick** | Sidekick generuje test events pro Shopify Flow na základě reálných shop dat. Pokrývá všechny logické větve workflow bez ručního sestavování testovacích dat. | live |

### Pro vývojáře

| # | Název | Popis | Status |
|---|-------|-------|--------|
| 6 | **Improved editing for Sidekick-generated apps** | Vylepšený editor pro aplikace vygenerované Sidekickem: editace kódu přímo v UI, preview v desktop/mobile zobrazení, version history pro rollback. | live |

---

## Co tu ještě nemáme

- **Sidekick App Extension API** — dokumentace k tomu, jak třetí aplikace (Judge.me, Klaviyo...) napojují Sidekick extension, nebyla v době psaní veřejně dostupná jako samostatný changelog záznam. Bude potřeba sledovat changelog nebo Shopify.dev.
- **Sidekick on Apple Watch** — žádný dedikovaný changelog záznam mimo Editions hub.
- **Follow-up questions + Multi-task** — taktéž bez vlastního záznamu v archivu, pouze v Editions kontextu.
- **Actionable guidance (admin session tipy)** — bez vlastního záznamu.
- **Sidekick creates customers** — bez vlastního záznamu.

Pět z devíti položek existuje zatím **pouze v Editions hubové stránce**, bez samostatného changelog záznamu. Pokud budou relevantnější, stojí za to vytvořit separátní summaries.

---

## ⬅️ Zpět na hub

Viz: [Shopify Editions Spring '26 — 187 updates v 10 tématech](editions-spring-2026)
