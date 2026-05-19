# Design Brief — Shopify News Magexo

> Interní webový agregátor Shopify novinek pro tým Magexo. Žádáme čerstvý design návrh.

---

## 1. Projekt v jedné větě

Aplikace **2× týdně agreguje Shopify novinky ze 4 zdrojů**, překládá je do češtiny, kategorizuje, a archivuje na webu s vyhledáváním a filtrováním.

**Live verze:** https://mhudakcz.github.io/Shopify_news_magexo/
**Repo:** https://github.com/mhudakcz/Shopify_news_magexo

## 2. Cílová audience

| Persona | Co hledá |
|---|---|
| **Vývojář** | Breaking changes v API, deprecated mutations, věci co se týkají naší codebase (Integrátor) |
| **Project Manager** | Co můžu nabídnout klientům, jaké jsou nové možnosti |
| **Project Owner** | Strategický kontext, B2B trendy, ekosystémové novinky |

Pět lidí, interní použití. Nelze očekávat masu uživatelů.

## 3. Datový model — jedna položka (článek)

```yaml
date: 2026-05-12
title: "Český titulek novinky"
title_en: "Original English title"
slug: kebab-case-slug
zdroj: https://shopify.dev/...                    # URL na originál
zdroj_kanal: dev-changelog | merchant-changelog | editions | product-news | blog
obrazek: https://cdn.shopify.com/...               # volitelná hero image
kategorie: [breaking-change, integrace]            # 1-3 z 7 enum
api_oblast: admin                                  # admin | storefront | checkout | webhooks | billing | pos | hydrogen | partners | other
api_verze: ["2026-07"]
nalehavost: vysoka                                  # kriticka | vysoka | stredni | nizka
customer_facing: true
ucinnost_od: 2026-07-01
deprecation_do: null
pouzivame_v_integratoru: ano                       # ano | ne | mozna
tldr: "1-2 věty pro PM/PO srozumitelné bez žargonu."
tagy: [discount, b2b]
```

**Tělo článku** (markdown): `## Co se mění`, `## Časová osa`, `## Dopad pro nás` (s podnadpisy *Pro vývojáře* / *Pro PM/PO*), `## Použití v Integrátoru`, `## Rizika a edge cases`, `## Související`.

## 4. Stránky k designu

### 4.1 Listing (index, paginated)
URL: `/`, `/2/`, `/3/` …

**Sekce:**
1. **Header** — brand link „Shopify novinky — český souhrn" + theme toggle (☀️/🌙)
2. **Hero** — nadpis "Shopify novinky" + podtitulek o zdrojích + 5 inline statistik (tento týden / měsíc / celkem / breaking / používáme)
3. **Search bar** — Pagefind fulltext search
4. **Filtry** — dvě skupiny:
   - *Kategorie* (7 chips): Vše · 🔥 Breaking · ✨ Příležitost · ⏰ Deprecation · ⚙️ Používáme · 👤 Customer-facing · 🚨 Urgentní
   - *Zdroj* (5 chips): 🆕 Dev · 🛍️ Merchant · 🎉 Editions · 📰 News · 📝 Blog
5. **Karty článků** — seskupené po týdnech, 30 článků/stránka. Každá karta:
   - **Ikona** (52×52, barevné pozadí podle kategorie) — emoji 🔥 ✨ ⏰ 🆕 🚨 nebo obrázek (blog)
   - **Urgency badge** + datum + titulek
   - **TL;DR** (1-2 věty)
   - **Tags row** — kategorie + api_oblast + zdroj-badge + používáme flag
6. **Pagination** — prev / strana X z Y / next
7. **Footer**

### 4.2 Article detail
URL: `/zmena/{slug}/`

**Sekce:**
1. **Header** (sdílený)
2. **Back link** „← zpět na přehled"
3. **Title (h1)** — Český titulek
4. **Title EN** (drobně, italic, muted) — Original English
5. **Hero image** (jen pokud je `obrazek`) — full-width, max-height ~360px
6. **Meta řádka** — datum · odkaz na originál (např. „shopify.dev/changelog ↗")
7. **Badges row** — urgency · kategorie · api_oblast · používáme/prověřit · tagy
8. **TL;DR blockquote** — accent-left-border, výrazný
9. **Timeline box** (volitelně, žlutý warning-styled) — pokud má článek datumy:
   - 2026-07-01 — začíná platit
   - 2026-08-15 — končí podpora staré verze
10. **Body** — markdown render se sekcemi h2/h3
11. **Affected klienti** (volitelně) — list
12. **Související u nás** (volitelně) — interní cross-link
13. **Source footer link** — „🔗 Originální zpráva — shopify.dev / changelog"
14. **Prev / Next navigace** — 2-column karty (Starší / Novější) s titulkem + datum
15. **Detail Integrathor checku** — collapsible details

### 4.3 Pagination pages (stejný layout jako listing, jen jiný content)

## 5. Komponenty

| Komponenta | Použití | Stavy |
|---|---|---|
| **Card** | List item | default, hover, active |
| **Filter chip** | Filtry | default, hover, active |
| **Tag** | Per-card metadata | static (color per kategorie) |
| **Urgency badge** | Per-card | 4 varianty: kriticka (red bg), vysoka (orange bg), stredni (neutral), nizka (outlined) |
| **Stats inline** | Hero | static, font-variant-numeric: tabular |
| **Hero image** | Detail | static |
| **TL;DR blockquote** | Detail | static |
| **Timeline box** | Detail | static |
| **Theme toggle** | Header | light / dark |
| **Search input** | Listing | default, focus, results |
| **Pagination nav** | Listing | links with disabled state |
| **Prev/Next nav** | Detail | 2 karty, 1 chybí (first/last) |

## 6. Stavy / edge cases

- **Empty state** — „Zatím žádné souhrny" (málokdy uvidíme, ale je tam)
- **Filter bez výsledků** — current page items filtered out
- **Search bez výsledků** — Pagefind „nic nenalezeno"
- **Bez Hero image** — fallback emoji ikona ve velkém kruhu nahoře?
- **Long title** — 2-line clamp v navigaci
- **Many tags** — wrap

## 7. Voice & tone

**Český jazyk**, semi-technický:
- Technické termíny ponechány v originále: *webhook*, *mutation*, *scope*, *checkout extension*, *metafield*
- Žádné fráze typu „v rámci ekosystému" nebo „umožňuje uživatelům"
- Konkrétně co, kdy, koho se týká
- Příklad TL;DR: „Od API 2026-07 lze v Admin API číst tax IDs (VAT) zákazníků sebrané při checkoutu."

**Tón vizuálu (aktuální):**
- Modern dashboard / SaaS-style
- Čisté, productivity-focused
- Indigo accent (`#4f46e5`) jako primary
- Subtle gradient text na h1 (indigo → violet → pink)

## 8. Tech constraints

- **Astro 5** static site generator → SSG, žádné runtime API
- **Pagefind** pro fulltext search (má vlastní CSS)
- **GitHub Pages** hosting (no backend)
- **Markdown jako CMS** (1 soubor = 1 článek)
- **Inter font** (variable, currently used)
- **Dark mode** povinný (CSS vars + `data-theme` attribute)
- **Mobile-responsive** (audience na desktopu primárně, ale mobil functional)
- **Cca 200+ článků v archivu** (paginated, lazy considerations)

## 9. Sample data

**3 reálné položky pro mockup:**

```
🔥 BREAKING · vysoka · 7. 5. 2026 · dev-changelog
**Bots a AI agents musí identifikovat přes Web Bot Auth**
Shopify zavádí přísnější rate limity pro boty a AI agenty na Storefront API.
Bez podpisu request → nižší rate limit. Action Required pro custom AI integrace.
TAGS: breaking-change · integrace · storefront · API
🔧 Integrátor: možná
```

```
✨ NOVÁ PŘÍLEŽITOST · stredni · 7. 5. 2026 · dev-changelog · API 2026-07
**Publish/unpublish product variants nezávisle od produktu**
Od API 2026-07 je ProductVariant typu Publishable — varianty lze publikovat/skrýt
per channel bez ovlivnění produktu. Užitečné pro klienty s velkou produktovou maticí.
TAGS: nova-api · nova-prilezitost · admin · product · variant
⚙️ Integrátor: ano (30+ product methods)
```

```
📝 BLOG · nizka · 7. 5. 2026 · cz blog
**Shopify retail: shrnutí aktualizací (2026)**
[HERO IMAGE]
České shrnutí Shopify retail/POS aktualizací z 2026 — POS v11.5,
cash management, returns/exchanges, transfers.
TAGS: fyi · pos · retail · summary
```

## 10. Co na aktuálním designu funguje (zachovat)

- **Skupinování karet po týdnech** s ISO week markerem
- **Per-kategorie ikona + barva pozadí** (vizuální skenování)
- **Filtry s emoji** (rychlá vizuální orientace)
- **Hero gradient text** na h1
- **Indigo accent**
- **Czech-first** UI
- **Dark mode**

## 11. Co bychom rádi vylepšili

(Otevřené k návrhu — žádné fixní requirements.)

- Hero sekce může být víc „wow" — pageland-style
- Karty mohou být vizuálně atraktivnější — víc hierarchy, possibly large numbers / stats per card
- Detail page může mít víc dynamiky — maybe sticky meta sidebar na desktopu
- Lepší integrace search + filter (currently oddělené)
- Possibly: data viz / sparkline statistiky (např. „breaking changes za poslední 4 týdny")
- Hover states / mikro-animace

## 12. Inspirace / mood board

Stačí navrhnout volně. Reference / přibližné vibe:
- **Vercel Changelog** (https://vercel.com/changelog) — clean, technical, accent-driven
- **Linear changelog** — productivity / SaaS estetika
- **GitHub Blog** — pro Czech technical content tón
- **Stripe Docs** — pro density a typography

---

## Deliverables, které potřebujeme

1. **Listing stránka** — desktop + mobile mockup, light + dark mode
2. **Detail stránka** — desktop + mobile mockup, light + dark mode (s i bez hero image)
3. **Komponenty** — card + variants, filter chips, urgency badges, tags
4. **CSS proměnné / design tokens** — pokud to design tool dá

Žádné production-ready CSS nebo komponenty, jen vizuální návrh, který si pak naimplementuju v Astro/CSS.
