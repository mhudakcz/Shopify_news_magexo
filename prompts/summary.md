# Summary file format

Každý soubor v `summaries/` je jedna novinka. Cesta: `summaries/{YYYY-MM-DD}-{slug}.md`.

## Frontmatter (YAML)

```yaml
---
date: 2026-04-29                      # datum publikace na shopify.dev (ne datum souhrnu)
title: "Změna zaokrouhlování slev v POS 11.5"
slug: zmena-zaokrouhlovani-slev-pos-115
kategorie: [breaking-change, integrace]
api_oblast: pos
pouzivame_v_integratoru: ne           # ano | ne | mozna
dukaz_integratoru: "Žádný klient zatím nepoužívá POS, projížděno query-platform pro 'pos discount'"
tldr: "POS 11.5 mění zaokrouhlování custom line item discounts — přepočet probíhá nově až po slevě."
zdroj: https://shopify.dev/changelog/minor-rounding-change-for-custom-line-item-discounts-in-pos-115
shrnuto_dne: 2026-04-29               # datum, kdy běžela pipeline
---

## Co se mění
…

## Dopad pro nás
…

## Použití v Integrátoru
…
```

## Pravidla

- `slug` — z URL novinky, ASCII, bez diakritiky, kebab-case, max 80 znaků
- `date` — formát YYYY-MM-DD (ne ISO timestamp)
- `kategorie` — pole, alespoň jedna hodnota
- `tldr` — max 140 znaků, jedna věta, **pro PM/PO srozumitelná bez žargonu**
- `zdroj` — vždy plná URL na shopify.dev
- Body — sekce `## Co se mění`, `## Dopad pro nás`, `## Použití v Integrátoru`, volitelně `## Akce`
