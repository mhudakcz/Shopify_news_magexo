# Shopify News Magexo

Automatický český souhrn novinek ze Shopify. Generuje se v úterý a ve čtvrtek (později automaticky přes Claude Routine), posílá DM v Slacku a archivuje na statickém webu s fulltextovým vyhledáváním.

## Architektura

```
RSS / HTML scrape (Shopify)
        │
        ▼
┌───────────────────┐    ┌─────────────────────────┐
│ /run-news (Claude)│───▶│ Integrathor MCP (check) │
└───────────────────┘    └─────────────────────────┘
        │
        ├──▶ summaries/YYYY-MM-DD-slug.md  (commit)
        ├──▶ Slack DM (link na web)
        └──▶ state.json (last_run timestamp)
                 │
                 ▼ git push
        ┌────────────────┐
        │ GitHub Actions │──▶ Astro build + Pagefind ──▶ GitHub Pages
        └────────────────┘
```

## Komponenty

| Cesta | Co dělá |
|---|---|
| `.claude/commands/run-news.md` | slash command `/run-news` — manuální spuštění pipeline |
| `prompts/` | reusable prompty pro triage, analýzu a souhrn |
| `summaries/` | generované markdown s YAML frontmatter (jeden soubor = jedna novinka) |
| `state.json` | last-run timestamp per zdroj (proti duplikátům) |
| `site/` | Astro statický web + Pagefind |
| `.github/workflows/deploy-site.yml` | build a deploy webu při push do `main` |

## Spuštění (MVP — manuální)

1. Otevři Claude Code v tomhle adresáři
2. Spusť `/run-news`
3. Claude:
   - načte `state.json`
   - stáhne `https://shopify.dev/changelog/feed.xml`
   - filtruje nové položky
   - per-položka: kategorizace, Integrathor check, český souhrn
   - zapíše `summaries/*.md`, aktualizuje `state.json`, pošle DM v Slacku, commit + push

### Build webu lokálně

```bash
cd site
npm install
npm run build
npm run preview
```

## Zdroje (fáze)

- [x] **Fáze 1 — MVP**: `shopify.dev/changelog` (RSS)
- [ ] **Fáze 2**: Claude Routine pro automatický cron (Út+Čt 9:00)
- [ ] **Fáze 3**: `shopify.dev/docs/api/release-notes` (HTML scrape)
- [ ] **Fáze 4**: `shopify.com/news` + `shopify.com/blog` (HTML scrape)
- [ ] **Fáze 5**: cross-check se Slackem `#shopify-changelog`

## Audience a tón

Vývojáři + projekťáci + project owneři. Semi-technická čeština: termíny jako *webhook*, *mutation*, *scope* zůstávají, zbytek překládat. Každá novinka má TL;DR pro PM/PO a hloubkovější sekci pro vývojáře.

## Slack target

Zatím DM na `U07R9V594B1` (Michal Hudák). Po odladění přesměrujeme na sdílený privátní kanál.
