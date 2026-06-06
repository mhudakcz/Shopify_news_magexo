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
kontext:
  background: |
    Storefront filter URLs jsou webové adresy obsahující parametry pro filtrování produktů v kolekcích nebo výsledcích vyhledávání na Shopify e-shopech. Dříve tyto parametry obsahovaly přímo textové hodnoty atributů (např. `?filter.color=Červená`), které jsou ze své podstaty nestabilní — závislé na konkrétní jazykové verzi a aktuálním znění popisku filtru. Stable identifiers jsou naopak trvalé technické identifikátory ve formátu `gid://shopify/FilterSettingGroup/...`, které se nemění při přejmenování ani překladu.

    Shopify Storefront API dlouhodobě podporuje komplexní filtrování produktů kombinací typů produktů, prodejců, cenových rozsahů, dostupnosti a variant. Přechod na stabilní identifikátory je přirozeným vývojovým krokem: ostatní typy filtrů (např. booleovské nebo cenové) vždy fungovaly přes strukturované vstupy, zatímco textové filtry zůstávaly výjimkou. Tato změna sjednocuje chování celého filtrovacího systému a odstraňuje historicky slabé místo v architektuře URL.

    Pro merchanty i vývojáře je klíčový praktický dopad na SEO a lokalizaci. Dřívější textové URL se lámaly při přejmenování filtru nebo přechodu na vícejazyčný obchod, čímž vznikal duplicitní obsah nebo nefunkční záložky a zpětné odkazy. Stabilní identifikátory tyto problémy eliminují — existující URL filtry zůstávají funkční i po změně popisků, a to bez jakékoli migrace. Změna se dotýká zejména headless storefront implementací a témat pracujících s URL parametry filtrů.

  zdroje:
    - title: "Shopify Changelog: Storefront filter URLs now use stable identifiers"
      url: "https://changelog.shopify.com/posts/storefront-filter-urls-now-use-stable-identifiers-instead-of-text-values"
    - title: "Shopify Docs: Filter products with the Storefront API"
      url: "https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products"
    - title: "Archiv: Storefront Cart Discount Fields"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-cart-discount-fields/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Storefront filter URLs používají stabilní group identifiers místo text values — linky jsou robustní napříč jazyky a při změně filter labelů zůstávají platné."
tagy: [storefront, urls, filters, seo]
---

## Co se mění
URLs s aplikovanými filtry (např. `?filter.color=red`) nyní používají **stabilní group identifiers** místo text values. Důsledek: linky jsou robustní napříč překlady a nelámou se, když merchant přejmenuje filter label.

## Použití v Integrátoru
**Nepoužíváme** — Storefront URL mechanism.
