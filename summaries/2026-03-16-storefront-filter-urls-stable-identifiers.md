---
date: 2026-03-16
title: "Storefront filter URLs používají stable identifiers"
title_en: "Storefront filter URLs now use stable identifiers instead of text values"
slug: storefront-filter-urls-stable-identifiers
zdroj: https://changelog.shopify.com/posts/storefront-filter-urls-now-use-stable-identifiers-instead-of-text-values
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Storefront URL filter mechanism, ne backend API."
tldr: "Storefront filter URLs používají stabilní group identifiers místo text values — linky jsou robustní napříč jazyky a při změně filter labelů zůstávají platné."
tagy: [storefront, urls, filters, seo]
---

## Co se mění
URLs s aplikovanými filtry (např. `?filter.color=red`) nyní používají **stabilní group identifiers** místo text values. Důsledek: linky jsou robustní napříč překlady a nelámou se, když merchant přejmenuje filter label.

## Použití v Integrátoru
**Nepoužíváme** — Storefront URL mechanism.
