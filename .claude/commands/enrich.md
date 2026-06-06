---
description: Dohledá AI-generovaný kontext pro články v summaries/ (Haiku model). Default první neobohacený, lze i konkrétní slugy nebo --all.
argument-hint: [slug|--first N|--all] [--force] [--dry-run]
---

# Enrichment kontextu pro Shopify novinky

Cíl: doplnit krátkým, **citovaným** kontextem (background paragraf + volitelný příklad + zdroje) každý článek, který je „chudý" na původní vysvětlení. Používáme Sonnet model — zero hallucinations, vše s atribucí.

## Argumenty

- `<slug>` (např. `mostrelevant-collectionsortorder`) — jeden konkrétní článek (lze i víc, oddělit čárkou nebo mezerou)
- `--first N` — prvních N **neobohacených** článků (chybí frontmatter pole `kontext`), seřazeno datem desc (nejnovější první)
- `--all` — všechny neobohacené (retro batch, ~250)
- `--force` — přepíše i existující `kontext` blok
- `--dry-run` — vypíše co by udělal, nezapisuje

Default (žádný argument): `--first 3`.

## Krok 1 — Připrav seznam cílových článků

Podle argumentu sestav `targets[]` jako pole cest `summaries/*.md`. Pokud bez `--force`, **vynech** soubory, kde frontmatter už obsahuje `kontext:` klíč (Grep `^kontext:` nad jejich obsahem).

Pokud `targets.length === 0`, vypiš „Nothing to enrich." a skonči.

## Krok 2 — Per-položka obohacení (paralelně, max 6 subagentů)

Pro každý cíl spusť **subagenta** (`Agent`, `model='sonnet'`, `subagent_type='general-purpose'`) s následujícím promptem (substituuj `{...}`):

```
Jsi enrichment writer pro interní český agregátor Shopify novinek. Tvůj úkol:
napsat krátký **doplňující kontext** k níže uvedenému článku.

== TENTO ČLÁNEK ==
Title: {entry.data.title}
TL;DR: {entry.data.tldr}
API oblast: {entry.data.api_oblast}
Zdrojový URL: {entry.data.zdroj}
Body:
{entry body (markdown)}

== ÚKOL ==

1. Fetchni plný obsah {entry.data.zdroj} přes WebFetch. Pokud se zdroj zmiňuje
   o nějaké konkrétní entitě (GraphQL type, API verze, feature), volitelně si
   dohledej jednu související stránku v shopify.dev/docs/* (kratší fetch).

2. Najdi až 3 související články v `summaries/*.md` — stejný `api_oblast` NEBO
   překryv `tagy` >= 1, mimo daný článek, max 12 měsíců nazpět. Použij Grep.

3. Napiš JSON odpověď v přesně tomto formátu (a ničím navíc, žádný markdown
   wrapper kolem):

{
  "background": "100-250 slov česky, ROZDĚLENÉ NA 3-4 ODSTAVCE (oddělené dvojím
                 newlinem \\n\\n). Každý odstavec = jedna myšlenka / téma. PRVNÍ
                 odstavec = definice/co to je obecně. DALŠÍ odstavce = širší rámec,
                 historie, související koncept, příklady v ekosystému.
                 NEPřeRIKEJ co je už v TL;DR ani v body. KAŽDÉ tvrzení musí být
                 doložitelné ze zdrojů. NEHALUCINUJ.",
  "priklad": "OPTIONAL — pouze pokud zdroj obsahuje konkrétní snippet (GraphQL
              query, code, URL pattern). Max 8 řádků. Jinak vynech klíč úplně.",
  "zdroje": [
    {
      "title": "Krátký lidský název (např. 'Shopify docs: CollectionSortOrder')",
      "url": "https://... úplná URL zdroje"
    }
    // 1-4 zdrojů. PRVNÍ položka VŽDY = původní zdrojový URL článku.
    // Další: shopify.dev/docs/*, související článek v naší archivu (interní URL
    // /Shopify_news_magexo/zmena/<slug>/), nebo Shopify Partners blog.
  ]
}

== TVRDÁ PRAVIDLA ==

- Plain JSON. Žádné ``` wrappery, žádný komentář před/po.
- "background" česky, neutrální tón, žádné marketing-speak ani buzzwords.
- Když nemáš dost materiálu pro kontext (např. blog post je sám o sobě dostatečně
  bohatý, nebo žádný další zdroj neexistuje), vrať:
  {"skip": true, "reason": "stručný důvod"}
  ...a nic víc. Vynechá se z výsledku.
- NIKDY si nevymýšlej fakta. Když si nejsi jistý, raději napiš méně.
- "background" SE NESMÍ překrývat s tím, co je v "tldr" nebo v "body" článku.
  Pokud by jediné, co máš dodat, byla parafráze, vrať skip=true.
```

Subagent vrátí JSON string. Parsuj ho.

## Krok 3 — Validace + merge

Pro každý úspěšný JSON (ne `skip: true`):

1. **Schema check** — musí mít `background` (string, 80–400 slov), `zdroje` (array of `{title, url}`, min 1), volitelně `priklad`.
2. **Sources check** — všechny `zdroje[].url` musí být platná URL (`new URL()`). První musí být shodná s `entry.data.zdroj`.
3. **Length check** — `background` mezi 80 a 400 slovy (jinak fail; logni a skip).

Pokud validace projde, sestav frontmatter blok:

```yaml
kontext:
  background: |
    {background text — multi-line YAML pipe}
  priklad: |
    {priklad}  # vynech klíč úplně pokud chybí
  zdroje:
    - title: "..."
      url: "https://..."
    - title: "..."
      url: "https://..."
  generated_at: 2026-06-05T13:00:00Z
  model: claude-haiku-4-5
```

Vlož ho do existujícího frontmatter **přesně před** řádek s `tldr:` (zachová stabilní pozici napříč články). Při `--force` přepiš existující `kontext:` blok celý.

Použij Edit tool s přesným `old_string`/`new_string` substitucí, ne přepiš celý soubor.

## Krok 4 — Stop slova / Bezpečnostní guard

Po napsání každého souboru zkontroluj, že:
- Žádný `dotcene_klienty` se NEVYNOŘIL z prázdného pole (pravidlo z P1 auditu — žádná jména klientů publicly)
- Žádné interní reference (shopify-client, find-shopify-method, naše interní MCP názvy) nevznikly v `background` ani v `priklad`

Pokud najdeš porušení, soubor revert na původní stav a logni warning.

## Krok 5 — Závěrečné shrnutí

Vypiš:
```
✅ Enrichment hotov:
   - Pokus: {N celkem}
   - Úspěšně obohaceno: {N OK}
   - Skip (model rozhodl, že nemá co přidat): {N skip}
   - Validace selhala: {N fail}
   - Bezpečnost / revert: {N revert}

🔧 Další krok: lokálně otevři jakýkoli obohacený článek a zkontroluj UI.
   Pokud OK → `git add summaries/ && git commit -m "feat: doplnění kontextu pro N článků" && git push`
```

**ŽÁDNÝ Slack message neposílej.** (Constraint od uživatele.)

**NEcommitni ani nepushuj automaticky.** Nech to na uživateli, ať si výsledek prohlédne.
