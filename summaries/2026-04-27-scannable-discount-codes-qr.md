---
date: 2026-04-27
title: "Skenovatelné QR kódy pro slevové kódy v Adminu"
title_en: "Scannable discount codes"
slug: scannable-discount-codes-qr
zdroj: https://shopify.dev/changelog/scannable-discount-codes
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

ucinnost_od: null
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: ne
dukaz_integratoru: "Funkce je v Shopify Admin UI, ne v API. Naše discount methods (createDiscountCodeBasic, getDiscountCode) jsou nedotčené."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    QR kód pro slevový kód je vizuální reprezentace URL ve tvaru `https://{shop}.myshopify.com/discount/{CODE}`, kde `{CODE}` je textový identifikátor slevy. Zákazník nebo personál kód naskenuje a Shopify automaticky aplikuje příslušnou slevu do košíku. Tento mechanismus nevyžaduje žádné API volání na straně vývojáře aplikace — vše řídí Shopify storefront routing na základě URL.

    Shopify Admin historicky umožňoval sdílení slev přes tzv. shareable links — textové URL generované ručně nebo přes marketing campaigns. Generování QR kódů přímo z Adminu rozšiřuje tento koncept na fyzický (in-store a tiskový) kanál: obchodník může kód umístit na leták, plakát nebo výložní plochu. Funkce vznikla jako doplněk k POS workflow, kde POS aplikace od verze 11.5 umí tyto kódy skenovat a ihned aplikovat při pokladní transakci.

    Klíčovým technickým detailem je dvojité URL encoding speciálních znaků (mezery, `#`, `+`, `%`). Shopify interně kóduje znaky jednou (např. mezera → `%20`), a celý zakódovaný řetězec pak kóduje znovu (např. `%20` → `%2520`). Vývojáři vlastních nástrojů generujících QR kódy slev musejí toto chování replikovat, jinak se kód při skenování nerozpozná správně.

    Funkce tvoří součást širší snahy Shopify propojit online a offline slevové kanály — spolu s POS Smart Grid discount tiles a napojením slev na marketing campaigns s UTM parametry.
  zdroje:
    - title: "Shopify Changelog: Scannable discount codes"
      url: "https://shopify.dev/changelog/scannable-discount-codes"
    - title: "Shopify Archive: Skenování QR slevových kódů v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-scan-discount-codes/"
    - title: "Shopify Archive: Smart Grid – dropdown výběr slev"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-smart-grid-discount-tiles/"
    - title: "Shopify Archive: Tracking slev s marketing campaigns"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/track-discounts-marketing-campaigns/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Adminu lze nyní generovat QR kódy slev — speciální znaky vyžadují dvojité URL encoding."
tagy: [discount, qr-code, admin-ui, marketing]
---

## Co se mění
V Shopify Adminu lze nyní generovat **QR kódy pro slevové kódy** přímo z UI. URL formát obsahuje samotný discount code; pokud kód obsahuje speciální znaky (mezery, hashe, plusy), je nutné použít **dvojité URL encoding** (jednou pro URL a podruhé v rámci QR payload).

## Dopad pro nás
**Pro vývojáře:**
Žádný API impact — funkce je čistě v Admin UI. Pokud bychom budovali nástroj generující vlastní QR kódy slev (např. v marketing toolu klienta), pozor na shodu URL encoding s tím, co dělá Shopify Admin.

**Pro PM / PO:**
Nice-to-have feature pro klienty, co tisknou letáky / in-store materiály. Stojí za zmínit při review marketing flowu klienta.

## Použití v Integrátoru
**Nepoužíváme** — funkce je v Admin UI, ne v API. Naše discount methods (`createDiscountCodeBasic`, `getDiscountCode`) jsou tím nedotčené.
