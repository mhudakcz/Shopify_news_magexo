# Analyze prompt

Vytvoř český souhrn jedné novinky ze Shopify changelogu pro tým **vývojářů + projekťáků + project ownerů**.

## Tón
- Semi-technická čeština
- Technické termíny ponechej v originále: *webhook*, *mutation*, *query*, *scope*, *checkout extension*, *metafield* atd.
- Žádné fráze typu "v rámci ekosystému" nebo "umožňuje uživatelům"
- Konkrétně: co se mění, od kdy, koho se to týká

## Struktura výstupu (markdown body, bez frontmatter)

```markdown
## Co se mění
{2-3 věty. Konkrétně, technicky. Pokud je v originále verze API nebo datum účinnosti — uveď.}

## Dopad pro nás
{2-3 věty z pohledu Magexo/Integrátor:
- breaking change → co budeme muset upravit
- nová příležitost → komu z klientů to nabídnout
- SEO → jaký dopad na frontend/structured data/sitemap
- integrace → mění to způsob jak voláme API?}

## Použití v Integrátoru
{1 věta + výsledek z mcp__integrathor__query-platform.
Pokud "ano": kde konkrétně to už používáme.
Pokud "ne": stručně proč není relevantní (nebo "zatím nepoužíváme").
Pokud "možná": vágní match, doporučuji prověřit.}

## Akce
- [ ] {konkrétní TODO pokud existuje, jinak vynech sekci}
```

## TL;DR
Přilož samostatně **jednu větu** (max 140 znaků) shrnující změnu pro PM/PO. Žádný žargon, žádné API termíny pokud nejsou nutné.

## Klasifikace

Vyber kategorie (1-3 z):
- `breaking-change` — něco přestane fungovat / se musí upravit
- `nova-prilezitost` — něco nového, co můžeme nabídnout klientům
- `seo` — týká se vyhledávačů, structured data, výkonu
- `integrace` — týká se způsobu komunikace mezi systémy
- `nova-api` — nový endpoint / mutation / scope
- `deprecation` — něco se rušuje (varianta breaking-change s delším horizontem)
- `fyi` — nic z výše uvedeného, ale stojí za zmínku

Vyber API oblast (1 z):
`admin`, `storefront`, `checkout`, `webhooks`, `billing`, `pos`, `hydrogen`, `partners`, `other`
