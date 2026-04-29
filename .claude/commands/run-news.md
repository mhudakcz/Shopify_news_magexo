---
description: Spustí pipeline souhrnu Shopify novinek a pošle DM v Slacku
argument-hint: [--dry-run]
---

# Spuštění Shopify news pipeline

Postupuj přesně podle těchto kroků. Pokud byl předán argument `--dry-run`, vynech kroky 6 (Slack), 7 (state) a 8 (commit) — jen vypiš co bys udělal.

## Krok 1 — Načti stav
Přečti `state.json`. Vyber `sources.shopify_dev_changelog.last_item_pubdate`. Pokud je `null`, použij datum o 7 dní zpět od dnešního dne.

## Krok 2 — Stáhni RSS
Použij `WebFetch` na `https://shopify.dev/changelog/feed.xml` s promptem:
> "Vrať plain JSON pole všech `<item>` elementů. Každý prvek: `{title, link, pubDate, description}`. Žádný komentář, jen JSON."

Vyparsuj JSON.

## Krok 3 — Filtruj nové
Vezmi jen položky s `pubDate` novějším než `last_item_pubdate` z kroku 1.

**Pokud žádné nejsou:**
- Pošli `slack_send_message` na channel `U07R9V594B1` s textem:
  ```
  📭 *Shopify news — {datum dnes}*
  Tento týden nic nového hodného pozornosti.
  ```
- Aktualizuj `state.json` (`last_run` = teď, `last_item_pubdate` zůstává).
- Skonči.

## Krok 4 — Per-položka analýza (paralelně)
Pro každou novou položku spusť **subagenta** (`Agent` tool, subagent_type=`general-purpose`) s úkolem:

1. **Kategorie** (vyber 1-3): `breaking-change`, `nova-prilezitost`, `seo`, `integrace`, `nova-api`, `deprecation`, `fyi`
2. **API oblast** (jedno z): `admin`, `storefront`, `checkout`, `webhooks`, `billing`, `pos`, `hydrogen`, `partners`, `other`
3. **Integrathor check** — zavolej `mcp__integrathor__query-platform` s klíčovým slovem z titulku (např. název API, scope, mutation). Výsledek shrň jako `ano` / `ne` / `mozna` + 1 věta odůvodnění.
4. **Český souhrn** podle `prompts/analyze.md`.

Subagent vrací JSON: `{slug, title_cz, kategorie, api_oblast, pouzivame_v_integratoru, dukaz_integratoru, tldr, body_md}`.

## Krok 5 — Zapiš souhrny
Pro každý výsledek vytvoř soubor `summaries/YYYY-MM-DD-{slug}.md` s frontmatter podle `prompts/summary.md`. Slug pochází z URL novinky (poslední segment), bez diakritiky, max 80 znaků.

## Krok 6 — Slack DM
Sestav zprávu (markdown, mrkdwn formát):

```
📅 *Shopify news — {datum dnes}*
{N} nových položek ({počet breaking-change} breaking change{s/y/}, {počet nova-prilezitost} příležitost{í/i})

{Pro každou položku:}
• *{title_cz}* _{kategorie joined}_
  {tldr}
  🔗 {link na web archiv}/zmena/{slug}/
```

Pošli přes `slack_send_message` na channel `U07R9V594B1`.

## Krok 7 — Update state
Aktualizuj `state.json`:
- `sources.shopify_dev_changelog.last_run` = ISO timestamp teď
- `sources.shopify_dev_changelog.last_item_pubdate` = nejnovější `pubDate` z dnešního běhu

## Krok 8 — Commit + push
```bash
git add summaries/ state.json
git commit -m "📰 Souhrn {YYYY-MM-DD}: {N} položek"
git push origin main
```

GitHub Action poté automaticky rebuilduje Astro web.

## Po skončení
Stručně shrň: kolik položek, kategorie distribuce, kolik z toho používáme v Integrátoru. Žádný markdown bullshit, 2-3 věty.
