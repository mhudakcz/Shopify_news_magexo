---
date: 2026-10-28
title: "Shopify Canvas v ChatGPT/Claude — design storu z AI agenta"
title_en: "Canvas in AI agents"
slug: canvas-in-ai-agents
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Návrh a úprava vzhledu obchodu se přesouvá z theme editoru do AI chatu, takže theme, které u obchodů spravujeme, může vznikat nebo se měnit mimo náš vývojový proces; přímý API dopad zatím není a nejasné jsou hlavně omezení Canvasu a napojení na verzování kódu theme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-agentic", "shopify-canvas-bespoke-store-design", "store-management-via-ai-agents"]
editions_release: fall-2026
tldr: "Canvas, vizuální designer celého obchodu spuštěný 1. 10. 2026, bude podle Editions Fall '26 dostupný i přímo v AI agentech jako ChatGPT a Claude: merchant popíše obchod v chatu, Canvas ho vizualizuje a výsledek se publikuje do Shopify. Stránka Editions neuvádí tarify, trhy ani datum a není jasné, zda platí stejná omezení jako v adminu (Markets, překlady, app blocks)."
tagy: [canvas, chatgpt, claude, design, agentic]
zdroj_kanal: editions
kontext:
  background: |
    Canvas je nový vizuální design surface Shopify pro online store, který archiv zachytil při spuštění 1. 10. 2026. Jde o interaktivní nekonečný workspace, ve kterém merchant vidí všechny stránky obchodu najednou, přibližuje detaily a upravuje je klikem nebo přes chat se Sidekickem. Sidekick přitom funguje jako designový partner: klade doplňující otázky, navrhuje přístupy a píše a validuje kód theme. První fáze Canvasu má podle changelogu výrazná omezení, protože nepodporuje Theme Store themes třetích stran, Markets, rollouts, translations, app blocks, app embeds ani automatické aktualizace theme, a Shopify uvádí, že Canvas editor spíš doplňuje, než nahrazuje.

    Fall '26 Editions s přezdívkou Exponential přidává k Canvasu druhý vstupní bod. V sekci Agentic je položka o návrhu obchodu v Canvasu uvnitř AI agentů, konkrétně ChatGPT a Claude, s dovětkem o dalších agentech. Podle zadání položky merchant obchod v chatu popíše, Canvas ho tam vizualizuje a následně se výsledek publikuje do Shopify. Spadá tedy do širšího trendu z tématu Agentic, kdy se činnosti, které merchant dělal v adminu, stěhují do AI agentů. Spring '26 přinesl connectory pro řízení obchodu z Claude, ChatGPT a Perplexity a Fall '26 je rozšiřuje o Copilot, Grok, Gemini a Muse. Stránka Editions u této položky odkazuje na oznámení Canvasu a nápovědu, ale neuvádí tarify, podporované trhy, datum dostupnosti ani stav typu preview nebo rolling out. Podrobnosti proto zůstávají otevřené a je nutné je ověřit v dokumentaci.
  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Design a fully bespoke store with Canvas"
      url: "https://changelog.shopify.com/posts/design-a-fully-bespoke-store-with-canvas"
    - title: "Shopify News: Introducing Canvas"
      url: "https://www.shopify.com/news/introducing-canvas"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 Editions v tématu Agentic uvádí, že obchod lze navrhovat v **Canvasu přímo uvnitř AI agentů** jako ChatGPT a Claude (stránka zmiňuje i další agenty bez bližšího výčtu). Canvas je přitom celostorový designer, který Shopify spustil 1. 10. 2026 v adminu a který popisuje samostatný článek v archivu. Nově se k němu merchant dostane i z chatu, který už používá pro jiné práce.

Zamýšlený průběh práce podle popisu položky:

- **Zadání v chatu** — merchant popíše, jak má obchod vypadat, v ChatGPT nebo Claude.
- **Vizualizace v chatu** — Canvas návrh zobrazí přímo v konverzaci, merchant tedy nemusí otevírat admin.
- **Publikace do Shopify** — schválený návrh se z agenta publikuje do obchodu.

**Co stránka Editions neříká:** tarify, podporované trhy, datum dostupnosti ani stav položky (preview, rolling out). Není uvedeno, zda se návrh v agentu zapisuje do nového nebo duplikovaného theme, zda se publikuje rovnou do živého theme nebo do konceptu a jaká oprávnění agent dostává. Nevíme ani to, zda platí omezení Canvasu z adminu (Theme Store themes, Markets, translations, app blocks a app embeds). Související položka v sekci Online (úprava celého obchodu v jednom pohledu v Canvasu se Sidekickem) popisuje variantu uvnitř adminu.

## Časová osa

- **2026-10-01** — spuštění Canvasu v adminu (Online Store > Themes), postupný rollout
- **2026-10-28** — Editions Fall '26 uvádí návrh obchodu v Canvasu v ChatGPT, Claude a dalších AI agentech
- **Bez data** — kdy bude varianta v agentech dostupná pro všechny obchody, v jakých tarifech a na jakých trzích; Shopify datum u položky neuvedl
- **Bez data** — doplnění podpory Markets, translations, app blocks a app embeds do Canvasu; stav sledovat v changelogu

## Dopad pro nás

**Pro vývojáře:** Žádné API ani Liquid kontrakty se touto položkou nemění, takže není nutná migrace. Nepřímý dopad je stejný jako u Canvasu v adminu, jen se zvyšuje riziko. Kód theme bude vznikat a měnit se v AI agentu mimo náš repozitář a mimo naše nasazování, takže u obchodů s theme v gitu hrozí drift mezi repem a živým theme. Zdroje neříkají, jak se Canvas chová vůči GitHub integraci theme ani jak se z agenta vrací změny do verzování. Doporučujeme na vývojovém obchodu ověřit, jaké theme návrh z agenta vytváří, zda jde publikovat do konceptu a zda se výsledek dá exportovat nebo napojit na repozitář. Před nasazením u produkčního obchodu je také nutné ověřit, jaká oprávnění connector agentovi přidělí.

**Pro PM / PO:** Příležitost i riziko pro nabídku úprav vzhledu. Merchant bez vývojáře dostane cestu od popisu v chatu k publikovanému obchodu, což může snížit poptávku po drobných designových úpravách a posunout hodnotu našich služeb směrem k integracím, výkonu, konverzní strategii a složitějším obchodům s více trhy, jazyky a aplikacemi. Příležitost vidíme ve školení a doporučení, kdy je Canvas vhodný (nový menší obchod, kampaňový nebo landing theme, prototyp) a kdy ne (Markets, překlady, app blocks). Doporučení: (1) vyzkoušet Canvas z ChatGPT nebo Claude na testovacím obchodě, jakmile bude dostupný, (2) k existujícímu vodítku k Canvasu doplnit, že omezení první fáze mohou platit i pro agenty, dokud se neprokáže opak, (3) ověřit dostupnost podle tarifu a trhu před slibem konkrétnímu obchodu. Urgence je střední, protože datum dostupnosti není známé a omezení první fáze brání použití u většiny složitějších projektů.

## Použití v Integrátoru

Přímé napojení žádné není, Canvas v agentech nemá ve zdrojích API ani rozšiřitelnost pro vývojáře. Využití je nepřímé jako téma pro doporučení a školení merchantů a jako signál, že úpravy theme budou častěji vznikat v AI chatu mimo náš vývojový proces.
