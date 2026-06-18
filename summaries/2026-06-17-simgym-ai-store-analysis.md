---
date: 2026-06-17
title: "SimGym — AI simulovaný shopper analyzuje libovolný theme"
title_en: "SimGym — AI-simulated shopper analyzes any theme"
slug: simgym-ai-store-analysis
zdroj: https://help.shopify.com/en/manual/online-store/simgym
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "SimGym lze nabídnout klientům jako rychlý UX audit před spuštěním nového nebo přepracovaného theme — bez nutnosti reálné návštěvnosti."
dotcene_klienty: []
souvisejici: [editions-spring-2026, simgym-deep-theme-analysis, simgym-ai-research-preview]
editions_release: spring-2026
kontext:
  background: |
    SimGym je Shopify nástroj (AI Research Preview), který simuluje chování skutečného zákazníka na libovolném Liquid-based storefront. AI "shoppeři" vybavení realistickými profily procházejí homepage, kolekce, produktové stránky, košík i search — přesně tak, jako by to udělal živý návštěvník. Výstupem jsou nahrávky průchodů, logy akcí a prioritizovaná doporučení seřazená podle dopadu na konverze.

    Konvenční optimalizace storefront stojí na dvou pilířích: ručním testování a A/B experimentech. Ruční testování je nesystematické a časově náročné; A/B testy vyžadují dostatečnou návštěvnost a fungují nejlépe na statisticky stabilních datech. Pro nové obchody, sezónní e-shopy nebo situace před větším redesignem jsou oba přístupy omezené. SimGym obě omezení odstraňuje tím, že generuje feedback okamžitě a bez nutnosti živého provozu.

    V rámci Editions Spring 2026 Shopify SimGym rozšiřuje svůj záběr: vedle dříve představeného porovnávání dvou themes (A/B mode) a deep analysis konkrétního theme přichází také standalone analýza libovolného theme — live i draft — bez závislosti na druhé variantě. Merchant si může zvolit konkrétní focus area (homepage, produkty, kolekce, košík, search) a dostat cílený feedback na tu část store, která ho zajímá nejvíce.

    Nástroj stojí na pay-per-use modelu: každá simulace spotřebuje jeden credit. Během Research Preview fáze Shopify přiděluje merchantům free credits; po jejím ukončení bude možné dokupovat top-up balíčky. Funguje výhradně na Liquid storefrontech — Hydrogen a headless architektury nejsou podporovány. Vyžaduje aktivní Shopify Network Intelligence a alespoň jeden produkt v katalogu.
  zdroje:
    - title: "Shopify Help: SimGym — AI-simulated shopper analyzes any theme"
      url: "https://help.shopify.com/en/manual/online-store/simgym"
    - title: "SimGym: deep analýza online store theme"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simgym-deep-theme-analysis/"
    - title: "SimGym v AI Research Preview pro všechny eligible merchanty"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simgym-ai-research-preview/"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "SimGym nově umí analyzovat libovolný theme v izolaci — AI shopper projde celý storefront a vrátí prioritizovaný seznam UX problémů bez potřeby reálné návštěvnosti ani druhé varianty theme."
tagy: [editions, simgym, ai, testing, analytics]
zdroj_kanal: editions
---

## Co se mění

**SimGym** (AI Research Preview) v rámci Editions Spring 2026 přidává možnost standalone analýzy libovolného Liquid theme — live i draft — bez nutnosti porovnávat dvě varianty. AI shoppeři s realistickými profily projdou zvolené části storefront, zaznamenají každou interakci a vrátí strukturovaný report s prioritizovanými doporučeními seřazenými podle dopadu na add-to-cart rate.

Nové možnosti oproti předchozím verzím SimGym:

- **Single theme mode** — analýza jednoho theme bez druhé varianty (dříve byl povinný A/B srovnávací mód)
- **Focus areas** — merchant zvolí konkrétní sekci (homepage, produkty, kolekce, košík, search) místo průchodu celým store
- **Shopper recordings** — přehrávání průchodů jednotlivých AI shopperů s action log
- **Prioritizovaná doporučení** — seznam seřazený podle odhadovaného konverzního dopadu

Technické požadavky: Liquid storefront, aktivní Shopify Network Intelligence, store bez hesla, alespoň jeden produkt. Hydrogen a headless storefronty nejsou podporovány.

## Časová osa

- 2026-03-11 — SimGym spuštěn v AI Research Preview pro všechny eligible merchanty
- 2026-03-26 — Deep theme analysis feature (analýza jednoho theme v izolaci, initial verze)
- 2026-06-17 — Editions Spring '26: standalone analýza libovolného theme jako plnohodnotná funkce, focus areas, shopper recordings

## Dopad pro nás

**Pro vývojáře:**
SimGym nevyžaduje žádnou integraci z naší strany — jde o Shopify-native nástroj s UI v admin. Relevantní je při předávání nového nebo přepracovaného theme klientovi: SimGym lze spustit na draft theme ještě před publikací a výstup použít jako podklad pro finální UX ladění. Liquid-only omezení je pro většinu našich klientů bez dopadu.

**Pro PM / PO:**
Rychlý AI UX audit bez nutnosti rekrutovat testery nebo čekat na dostatek analytických dat — to je potenciálně zajímavá hodnota pro klienty, kteří spouštějí nový obchod nebo přecházejí na nový theme. Stojí za to zmínit při projektových kickoffech a před redesignem. Research Preview status znamená, že nástroj se může měnit a free credits nemusí být trvalé.

## Použití v Integrátoru

SimGym nepotřebuje integraci — lze ho nabídnout jako součást onboardingu nebo redesign projektu pro rychlý pre-launch UX feedback bez reálné návštěvnosti.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Online](/Shopify_news_magexo/zmena/editions-spring-2026-online/)
