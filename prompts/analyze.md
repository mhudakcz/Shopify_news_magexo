# Analyze prompt

Vytvoř český souhrn jedné novinky ze Shopify changelogu pro tým **vývojářů + projekťáků + project ownerů**.

## Tón
- Semi-technická čeština
- Technické termíny ponechej v originále: *webhook*, *mutation*, *query*, *scope*, *checkout extension*, *metafield* atd.
- Konkrétně: co se mění, od kdy, koho se to týká
- Žádné fráze typu „v rámci ekosystému“ nebo „umožňuje uživatelům“

## Klasifikace (do frontmatter)

**kategorie** (1-3 z): `breaking-change`, `nova-prilezitost`, `seo`, `integrace`, `nova-api`, `deprecation`, `fyi`

**api_oblast** (1 z): `admin`, `storefront`, `checkout`, `webhooks`, `billing`, `pos`, `hydrogen`, `partners`, `other`

**nalehavost** (1 z):
- `kriticka` — breaking change s blízkým termínem (< 30 dnů) **a** my to v Integrátoru používáme
- `vysoka` — breaking change v < 90 dnech, nebo nová příležitost s velkým dopadem
- `stredni` — breaking change > 90 dnů, nebo standardní novinka
- `nizka` — FYI bez akce

**customer_facing** (true/false): vidí to end-customer (např. změna v checkout UI), nebo jen interní (API/webhook)?

## Pole pro frontmatter

| Pole | Co tam patří |
|---|---|
| `api_verze` | Pole stringů (např. `["2025-04", "2025-07"]`); prázdné pokud nerelevantní |
| `ucinnost_od` | Datum účinnosti (`YYYY-MM-DD`); `null` pokud není uvedeno |
| `deprecation_do` | Datum end-of-life staré varianty; `null` pokud nerelevantní |
| `migrace_doporucena_do` | Doporučený deadline (typicky `deprecation_do` mínus rezerva); `null` pokud nerelevantní |
| `dotcene_klienty` | Pole názvů klientů — vyplň jen pokud Integrathor check najde konkrétní match a víš jméno klienta. Jinak prázdné. |
| `souvisejici` | Pole slugů jiných souhrnů ze `summaries/`. Prozkoumej existující soubory a najdi souvislosti. Jinak prázdné. |
| `zdroj_dokumentace` | Hluboký odkaz na referenční dokumentaci (ne jen changelog). Pokud je v textu novinky link na `shopify.dev/docs/...`, použij ho. Jinak `null`. |
| `tagy` | Volné tagy (1-5), např. `["checkout-extension", "metafield", "graphql-cost"]`. Pomůžou při hledání. |

## Body — sekce (vynech tu, která nemá obsah)

### `## Co se mění`
2-4 věty, konkrétně, technicky.
Pokud existuje měřitelná změna chování (před → po), použij tabulku:

```markdown
| Před | Po |
|---|---|
| `discount.applied = 10.00 → 8.30` | `discount.applied = 10.00 → 8.31` |
```

### `## Časová osa`
Bullet body ve formátu:
- **YYYY-MM-DD** — popis (oznámeno / začíná platit / končí podpora staré verze / …)

Pokud žádné datum v textu není, sekci celou vynech.

### `## Dopad pro nás`

**Pro vývojáře:**
{2-3 věty — co budeme muset upravit, kde, jak. Pokud breaking change, buď konkrétní (název modulu, scope, mutation).}

**Pro PM / PO:**
{2-3 věty — co říct klientovi, jaký je scope/timing/cena, kdo má rozhodovací roli.}

### `## Použití v Integrátoru`
1-2 věty navázané na Integrathor check:
- `ano` → které moduly/soubory, kolik výskytů
- `ne` → stručně proč nerelevantní
- `mozna` → co je třeba prověřit

### `## Rizika a edge cases`
1-3 odrážky — co se může pokazit, co testovat. Vynech sekci, pokud nic kritického.

### `## Související`
Vynech sekci, pokud nic.
- Pokud najdeš v `summaries/` souvislost: link
- Shopify docs: hluboký link na referenční stránku (ne na changelog)
- GraphQL/REST schema reference, pokud existuje

## Pravidla výstupu
- **Sekce bez obsahu vynech celé** (žádné prázdné nadpisy)
- **Žádný „Originál" citát** — odkaz v `zdroj` stačí
- **Žádný „Checklist migrace"** — to píšeme do interního ticketu
- **Žádné „Otázky k diskusi"** — řešíme v Slacku
