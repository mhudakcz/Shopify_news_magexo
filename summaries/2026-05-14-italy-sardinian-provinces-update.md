---
date: 2026-05-14
title: "Updates italských provincií (Sardinie) — Gallura Nord-Est, Sulcis Iglesiente"
title_en: "Updates to Italy's Sardinian province definitions"
slug: italy-sardinian-provinces-update
zdroj: https://changelog.shopify.com/posts/italy-s-sardinian-province-definitions-updated
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-19

kategorie: [fyi]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše customer/order sync flow validuje province kódy pro IT adresy, je třeba update enum hodnot. Týká se klientů prodávajících do/z Itálie."
dotcene_klienty: []

kontext:
  background: |
    Provincie (province) jsou v Shopify podúrovní adresní hierarchie — odpovídají státům, krajům nebo regionům podle místní správní struktury dané země. Pro Itálii Shopify udržuje seznam 107 provincií odvozený ze standardu ISO 3166-2:IT. Každá provincie má svůj dvoupísmenný kód (např. OT pro Olbia-Tempio / Galluru), který se používá v adresách zásilek, fakturačních adresách a definicích shipping zón.

    Italská správní mapa prošla v červnu 2025 reorganizací na Sardinii, kde region historicky prošel několika restrukturalizacemi (zrušení provincií v roce 2016, jejich částečné obnovení). Shopify průběžně aktualizuje tyto enumerace, aby reflektovaly reálné administrativní členění — zastaralé nebo neexistující provinční kódy by vedly k neplatnými adresám při validaci a potenciálně k chybám v doručení.

    Prakticky se tato změna projevuje v dropdownu výběru provincie při checkoutu (customer-facing), v address validation API, v definici shipping zón pro IT a v daňových pravidlech vázaných na region. Aplikace a integrace, které ukládají province kódy pro italské adresy (např. při synchronizaci objednávek do ERP), musejí zajistit, že jejich enum hodnoty odpovídají aktuálnímu Shopify seznamu — jinak hrozí odmítnutí adresy nebo nesprávné přiřazení daňové sazby.

    Tato aktualizace navazuje na širší Shopify trend průběžné údržby adresních dat, který zahrnuje také vylepšení address autocomplete a validation pro různé země zaváděná v průběhu roku 2026.
  zdroje:
    - title: "Italy's Sardinian province definitions updated — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/italy-s-sardinian-province-definitions-updated"
    - title: "Address Autocomplete and Validation Improvements — Shopify Changelog"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/address-autocomplete-validation-improvements/"
    - title: "Cart and Checkout Validation: billing address a PO number error targets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cart-checkout-validation-billing-po/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Updated province definitions reflektují administrativní obnovu Sardinie z června 2025. Gallura Nord-Est Sardegna (OT) nově selectable; Carbonia-Iglesias přejmenováno na Sulcis Iglesiente."
tagy: [italy, province, address, validation]
---

## Co se mění
Shopify aktualizuje **definice italských provincií** (Sardinie) — administrativní obnova z června 2025:
- **Gallura Nord-Est Sardegna (OT)** — nově dostupná jako selectable province
- **Carbonia-Iglesias → Sulcis Iglesiente** — rename

Týká se address validation, tax rules, shipping zones v IT.

## Použití v Integrátoru
**Možná** — pokud naše sync flow ukládá province kódy do ERP a klient prodává do/z Itálie, prověřit, že enum hodnoty obsahují nové názvy.
