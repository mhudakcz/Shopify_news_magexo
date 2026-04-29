# Summary file format

Každý soubor v `summaries/` je jedna novinka. Cesta: `summaries/{YYYY-MM-DD}-{slug}.md`.

## Frontmatter — kompletní

```yaml
---
# identita
date: 2026-04-29                          # datum publikace na shopify.dev
title: "Změna zaokrouhlování slev v POS 11.5"
title_en: "Minor rounding change for custom line item discounts in POS 11.5"
slug: zmena-zaokrouhlovani-slev-pos-115
zdroj: https://shopify.dev/changelog/...
zdroj_dokumentace: https://shopify.dev/docs/api/pos-extensions/discounts
shrnuto_dne: 2026-04-29

# klasifikace
kategorie: [breaking-change, integrace]
api_oblast: pos
api_verze: ["2025-04", "2025-07"]
nalehavost: stredni                       # kriticka | vysoka | stredni | nizka
customer_facing: true

# časová osa (mohou být null)
ucinnost_od: 2025-07-01
deprecation_do: null
migrace_doporucena_do: 2026-06-30

# dopad
pouzivame_v_integratoru: ne                # ano | ne | mozna
dukaz_integratoru: "query-platform pro 'pos discount' — žádný match"
dotcene_klienty: []
souvisejici: [pos-110-discount-api]

# meta
tldr: "POS 11.5 mění zaokrouhlování custom line item discounts."
tagy: [checkout-extension, metafield]
---
```

## Pravidla

**Povinné**: `date`, `title`, `slug`, `zdroj`, `kategorie`, `api_oblast`, `nalehavost`, `pouzivame_v_integratoru`, `tldr`

**Volitelné** (smí být `null` nebo prázdné pole): `title_en`, `zdroj_dokumentace`, `shrnuto_dne`, `api_verze`, `customer_facing`, `ucinnost_od`, `deprecation_do`, `migrace_doporucena_do`, `dukaz_integratoru`, `dotcene_klienty`, `souvisejici`, `tagy`

- `slug` — z URL novinky, ASCII, bez diakritiky, kebab-case, max 80 znaků
- `date` — formát `YYYY-MM-DD` (ne ISO timestamp)
- `kategorie` — pole, alespoň jedna hodnota
- `tldr` — max 140 znaků, jedna věta, **pro PM/PO srozumitelná bez žargonu**
- Body — sekce dle `prompts/analyze.md`, prázdné sekce vynech
