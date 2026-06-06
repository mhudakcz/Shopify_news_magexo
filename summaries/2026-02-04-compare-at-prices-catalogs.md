---
date: 2026-02-04
title: "Compare-at prices v B2B catalogs přes Admin (bez CSV/API)"
title_en: "Compare-at Prices in Catalogs"
slug: compare-at-prices-catalogs
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme catalog methods (createCatalog, updateCatalogContext atd.) pro B2B price lists. Compare-at prices lze nyní nastavit přímo v admin UI bez nutnosti CSV nebo API hacks."
dotcene_klienty: []
souvisejici: [erp-systems-integration-b2b]

kontext:
  background: |
    Compare-at price je referenční cena zobrazená vedle aktuální prodejní ceny — typicky přeškrtnutá. Slouží k vizuálnímu znázornění slevy oproti doporučené maloobchodní ceně (MSRP). V Shopify ji lze nastavit na úrovni produktové varianty a zobrazuje se zákazníkům jako „původní" hodnota.

    B2B katalogy (Catalogs) jsou nativní Shopify mechanismus pro správu produktů a cen pro konkrétní skupiny kupujících — typicky velkoobchodní partnery nebo firemní zákazníky (Companies). Každý katalog je svázán s ceníkem (Price List), který definuje vlastní ceny a slevy nezávisle na maloobchodním storefront. Historicky bylo nastavení compare-at cen v těchto B2B ceníkách možné pouze přes CSV import nebo přímé API volání, nikoli z administrátorského rozhraní.

    Přidání compare-at prices do Admin UI pro B2B katalogy snižuje bariéru pro obchodníky bez technického zázemí. Umožňuje zobrazovat MSRP vs. velkoobchodní cenu přímo v zákaznickém účtu, což podporuje vnímání hodnoty nabídky. Funkce navazuje na širší trend demokratizace B2B nástrojů — Shopify postupně přesouvá pokročilé B2B funkce z API a CSV do grafického rozhraní a zpřístupňuje je i menším plánům.

    Tato změna je součástí Shopify Editions Winter 2026, kde Shopify výrazně posílil celou B2B vrstvu — od nativních ERP integrací přes rozšíření B2B katalogů na všechny cenové plány až po nové platební podmínky a checkout flow.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Shopify B2B pro všechny plány"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
    - title: "Nativní ERP integrace B2B (Winter 2026)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/erp-systems-integration-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Compare-at prices (přeškrtnutá cena) lze nově nastavit v B2B catalogs přímo z Adminu, bez CSV importu nebo API workaroundu."
tagy: [b2b, catalog, pricing, compare-at]
---

## Co se mění
Pro B2B price-list catalogs (typicky tier pricing pro různé skupiny zákazníků) lze nyní nastavit **compare-at prices** (přeškrtnutá MSRP cena) **přímo v Shopify Adminu** — předtím to vyžadovalo CSV import nebo API hack. Užitečné pro „MSRP vs. wholesale" pricing.

## Použití v Integrátoru
**Možná** — máme catalog methods. Pokud klient zatím setuploval compare-at přes naše API workarounds, může nyní přejít na admin UI. Nebo lze rozšířit naše integrace o explicit compareAtPrice field v catalog mutations.
