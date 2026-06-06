---
description: Spustí pipeline souhrnu Shopify novinek a pošle DM v Slacku
argument-hint: [--dry-run]
---

# Spuštění Shopify news pipeline

Postupuj přesně podle těchto kroků. Pokud je předán `--dry-run`, vynech kroky 6 (Slack), 7 (state) a 8 (commit) — jen vypiš co bys udělal.

## Krok 1 — Načti stav
Přečti `state.json`. Vyber `sources.shopify_dev_changelog.last_item_pubdate`. Pokud je `null`, použij datum o 7 dní zpět od dnešního dne.

## Krok 2 — Stáhni RSS
Použij `WebFetch` na `https://shopify.dev/changelog/feed.xml` s promptem:
> „Vrať plain JSON pole všech `<item>` elementů. Každý prvek: `{title, link, pubDate, description}`. Žádný komentář, jen JSON."

## Krok 3 — Filtruj nové
Vezmi jen položky s `pubDate` novějším než `last_item_pubdate`.

**Pokud žádné nejsou:**
- Pošli `slack_send_message` na channel `C07JP5X0BNJ`:
  ```
  📭 *Shopify news — {datum dnes}*
  Tento týden nic nového hodného pozornosti.
  🌐 https://mhudakcz.github.io/Shopify_news_magexo/
  ```
- Aktualizuj `state.json` (`last_run` = teď, `last_item_pubdate` zůstává).
- Skonči.

## Krok 4 — Per-položka analýza (paralelně)
Pro každou novou položku spusť **subagenta** (`Agent`, `subagent_type=general-purpose`):

1. **Klasifikace** dle `prompts/analyze.md`:
   - kategorie (1-3), api_oblast (1), nalehavost (1), customer_facing (bool)
2. **Časová osa** — vytěž z textu novinky datumy (`ucinnost_od`, `deprecation_do`, `migrace_doporucena_do`).
3. **API verze** — pokud je v textu uvedena (např. „from 2025-07"), zaznamenej.
4. **Hluboký odkaz** — pokud novinka linkuje na `shopify.dev/docs/...`, ulož do `zdroj_dokumentace`.
5. **Integrathor check** — `mcp__integrathor__query-platform` s relevantním klíčovým slovem (název API, scope, mutation, endpoint). Výsledek = `ano` / `ne` / `mozna` + 1 věta odůvodnění do `dukaz_integratoru`.
6. **Související** — projdi existující `summaries/` a najdi sourozence (např. předchozí verze stejné API oblasti). Vrať pole slugů.
7. **Tagy** — 1-5 volných tagů.
8. **Český body** podle `prompts/analyze.md`:
   - Co se mění (s tabulkou před/po pokud relevantní)
   - Časová osa (bullet body s daty)
   - Dopad pro nás (rozdělit na **Pro vývojáře** / **Pro PM/PO**)
   - Použití v Integrátoru
   - Rizika a edge cases (vynech, pokud nic)
   - Související (vynech, pokud nic)

Subagent vrací JSON strukturu odpovídající kompletnímu frontmatter z `prompts/summary.md` + `body_md`.

## Krok 5 — Zapiš souhrny
Pro každý výsledek vytvoř `summaries/YYYY-MM-DD-{slug}.md` s frontmatter dle `prompts/summary.md` a body z analýzy.

## Krok 5b — Enrichment kontextu (Sonnet)

Pro každou právě vytvořenou novinku spusť **enrichment subagenta** (`Agent`, `model='sonnet'`, `subagent_type='general-purpose'`), který doplní `kontext:` blok do frontmatter — background paragraf (100-250 slov, 3-4 odstavce oddělené prázdnou řádkou) + citace zdrojů.

Použij stejný prompt template jako `.claude/commands/enrich.md` (sekce Krok 2). Subagent vrátí JSON `{status: 'written'|'skipped'|'failed', file, reason?, word_count?, sources_count?}` a sám si `Edit`-em vloží YAML blok BEFORE řádek `tldr:`.

Pokud nějaký vrátí `failed`, logni, ale neblokuj zbytek pipeline. Skip je OK — některé novinky jsou už komplet (např. dlouhý Editions článek).

Per article cost: ~30k tokens Sonnet (~$0.10). Při typickém běhu 1-20 novinek to je acceptable.

**Tímto krokem se nová novinka dostává na web už s obohaceným kontextem od první chvíle.**

## Krok 6 — Slack DM (bohatý formát)

Sestav zprávu (Slack mrkdwn):

```
📅 *Shopify news — {datum dnes, čs. formát}*
*{N} nových položek* · {🔥 X breaking} · {✨ Y příležitost} · {📋 Z FYI}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{Pro každou položku, seřazené podle nalehavost (kriticka → vysoka → stredni → nizka), pak datum desc:}

{emoji-prio} *{KATEGORIE-LABEL}*{ · ucinnost_od ? "začíná " + ucinnost_od : ""}
*{title}*
{tldr}
🔧 Integrátor: {pouzivame_v_integratoru} · 🎯 Akce: {odhad podle nalehavost a používání}
🔗 https://mhudakcz.github.io/Shopify_news_magexo/zmena/{slug}/

POZOR: `{slug}` = frontmatter `slug` field (BEZ data v URL).
Astro 5 glob loader používá frontmatter `slug` jako entry ID, ne filename.
Filename `summaries/2026-04-27-pos-115-rounding.md` → URL `/zmena/pos-115-rounding/`.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Web archiv & search: https://mhudakcz.github.io/Shopify_news_magexo/
```

**Mapování emoji-prio + LABEL:**
- `kriticka` → `🚨 KRITICKÉ`
- `breaking-change` → `🔥 BREAKING`
- `deprecation` → `⏰ DEPRECATION`
- `nova-prilezitost` → `✨ NOVÁ PŘÍLEŽITOST`
- `nova-api` → `🆕 NOVÉ API`
- `seo` → `🔍 SEO`
- `integrace` → `🔌 INTEGRACE`
- `fyi` → `📋 FYI`

**Akce — odhadni podle (nalehavost, pouzivame):**
- (kriticka, ano) → "okamžitá kontrola, info klientovi"
- (vysoka, ano) → "naplánovat migraci"
- (vysoka, ne) → "zvážit nabídku klientům"
- (stredni, ano) → "zvážit refactor"
- (stredni, ne) → "monitor"
- (nizka, *) → "žádná"

Pošli přes `slack_send_message` na channel `C07JP5X0BNJ`.

## Krok 7 — Update state
Aktualizuj `state.json`:
- `sources.shopify_dev_changelog.last_run` = ISO timestamp teď
- `sources.shopify_dev_changelog.last_item_pubdate` = nejnovější `pubDate` z dnešního běhu

## Krok 8 — Commit + push
```bash
git add summaries/ state.json
git commit -m "📰 Souhrn {YYYY-MM-DD}: {N} položek ({počet breaking} breaking)"
git push origin main
```

GitHub Action poté rebuilduje Astro web.

## Po skončení
Stručně shrň: kolik položek, distribuce kategorií, kolik z toho používáme v Integrátoru, kolik kritických/vysokých. 2-3 věty.
