---
date: 2026-10-24
title: "EU product identifiers na Shopify Shipping + Managed Markets labelech (povinné od 1. 11. 2026)"
title_en: "New EU Product identifiers supported on Shopify Shipping & Managed Markets labels"
slug: eu-product-identifiers-shopify-shipping-labels
zdroj: https://changelog.shopify.com/posts/new-eu-product-identifiers-supported-on-shopify-shipping-managed-markets-labels
shrnuto_dne: 2026-10-27
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro merchanta synchronizujeme barcodes a SKU z ERP nebo PIM, musí tato data obsahovat GTIN/EAN a výrobcovo číslo produktu; jinak mu od 1. 11. 2026 Shopify nevydá label pro zásilku do EU."
dotcene_klienty: []
souvisejici: [eu-customs-duty-3-euro-import, product-variants-multiple-barcodes-merchant, variants-multiple-barcodes-api]
tldr: "Od 1. 11. 2026 vyžaduje EU u zásilek do 150 EUR odesílaných zákazníkům tři produktové identifikátory (M-PID, S-PID, NS-PID); Shopify je doplňuje do celních dokladů z produktových dat a bez povinného S-PID nebo prohlášení o jeho absenci label nevydá."
tagy: [eu, product-identifiers, shipping-labels, managed-markets, customs, compliance, barcodes]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Od 1. listopadu 2026 platí v EU pravidlo, že u každé položky v zásilce určené přímo spotřebiteli (direct-to-consumer) o hodnotě do 150 EUR musí být uvedeny produktové identifikátory. Týká se zásilek, které do EU přicházejí ze zemí mimo EU. Zásilka bez těchto údajů může být na celnici zadržena nebo odmítnuta a odesílateli mohou být naúčtovány poplatky za vrácení zásilky do místa původu. Pravidlo navazuje na reformu celního režimu pro nízkohodnotné zásilky, jejíž cenovou stránku (paušální clo 3 EUR za tariff line od 1. 7. 2026) Shopify pokryl už dříve.

    Shopify na to reaguje tak, že identifikátory automaticky přidává na labely a celní dokumenty vystavené přes Shopify Shipping a Managed Markets, a to z produktových dat, která už merchant v adminu má. Rozlišují se tři identifikátory. M-PID (merchant product identifier) je ID varianty produktu a Shopify ho doplní samo. S-PID (standardized product identifier) je čárový kód typu GTIN, EAN, UPC nebo ISBN; pokud produkt žádný standardizovaný kód nemá, merchant to musí výslovně deklarovat v detailu produktu. NS-PID (non-standardized manufacturer product identifier) je výrobcovo číslo modelu, dílu nebo stylu uložené jako barcode typu NS-PID; stačí i vlastní kód produktu nebo SKU a když NS-PID chybí, Shopify použije standardizovaný identifikátor.

    Výjimky z povinnosti určuje Shopify podle HS kódu varianty a uplatňuje je automaticky; merchant produkt jako osvobozený sám označit nemůže, takže správné HS kódy jsou podmínkou. Podle nápovědy se výjimky týkají například nezpracovaných zemědělských a rychle se kazících komodit (kapitoly HS 01 až 15), některých ručně vyráběných a řemeslných výrobků a také starožitností, sběratelských předmětů, umění, známek a mincí. Novinka nepokrývá zemi původu, výrobcovská pole ani požadavky GPSR či CBAM; jde výhradně o tři identifikátory produktu na celním prohlášení.
  zdroje:
    - title: "Shopify: New EU Product identifiers supported on Shopify Shipping & Managed Markets labels"
      url: "https://changelog.shopify.com/posts/new-eu-product-identifiers-supported-on-shopify-shipping-managed-markets-labels"
    - title: "Shopify Help Center: EU product identifiers"
      url: "https://help.shopify.com/en/manual/international/shipping/eu-product-identifiers"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify začíná na labely a celní dokumenty pro zásilky do EU doplňovat **tři produktové identifikátory**, které EU od 1. 11. 2026 vyžaduje u každé položky v zásilkách pro spotřebitele do hodnoty 150 EUR. Údaje se berou z produktových dat v adminu, takže merchant nemusí nic ručně přepisovat na label. Platí to pro zásilky kupované přes **Shopify Shipping** a **Managed Markets**. Novinka nejmenuje konkrétní plány ani dopravce.

Tři identifikátory:

- **M-PID** (merchant product identifier) — ID varianty produktu, Shopify ho doplní automaticky, merchant nic nedělá.
- **S-PID** (standardized product identifier) — barcode typu GTIN, EAN, UPC nebo ISBN. Podle nápovědy projde i barcode typu Custom, pokud je to platný GTIN o 8, 12, 13 nebo 14 číslicích. Když produkt standardizovaný kód nemá (ruční výroba, unikáty), zapne se v detailu produktu v sekci Shipping přes **More details** přepínač **Has no standardized identifier** v části EU customs declaration (celní kód Y081). Zapnutý přepínač znamená, že se S-PID neodesílá ani tehdy, když je uložený; používat ho má smysl jen u produktů, které standardizovaný kód opravdu nemají.
- **NS-PID** (non-standardized manufacturer product identifier) — číslo modelu, dílu nebo stylu od výrobce uložené jako barcode typu **NS-PID**. Pokud chybí, Shopify postupně použije standardizovaný barcode, jiný barcode, SKU a nakonec ID varianty. Varianta, která má GTIN nebo SKU, tedy tuto podmínku v praxi plní.

Klíčové omezení: **od 1. 11. 2026 nepůjde koupit label pro zásilku do 150 EUR, pokud některé položce chybí S-PID a není zapnuté prohlášení o jeho absenci.** Chybějící údaje lze doplnit přímo na stránce labelu přes **Edit customs declaration**; u produktů propojených s katalogem se změna uloží zpět do produktu, u custom položek zůstane jen na deklaraci. Hromadně se barcodes a prohlášení doplňují přes bulk editor nebo CSV import.

Důležité upřesnění: novinka se netýká země původu, výrobcovských polí, GPSR ani CBAM. Jde o samostatný celní požadavek na identifikaci zboží v nízkohodnotných zásilkách. Podle nápovědy se týká zásilek odesílaných **z mimo EU do EU**; zásilka z ČR do jiné země EU celním řízením neprochází. Opačný směr (ČR do UK) tato novinka neřeší.

Pokud label kupujete mimo Shopify, musíte si u dopravce, celního deklaranta nebo fulfillment partnera ověřit, že se identifikátory na celnici dostanou jinou cestou.

## Časová osa

- **1. 7. 2026** — v EU začíná paušální clo 3 EUR za tariff line u zásilek do 150 EUR (Shopify ho řeší automaticky, viz související novinka)
- **8. 9. 2026** — varianta produktu může mít až 20 barcodes s typem, což je technický základ pro ukládání S-PID a NS-PID
- **24. 10. 2026** — Shopify publikuje novinku o EU product identifiers na labelech
- **1. 11. 2026** — povinnost je v platnosti; label pro zásilku do 150 EUR s chybějícím S-PID bez prohlášení o jeho absenci nelze koupit

## Dopad pro nás

**Pro vývojáře:** Identifikátory žijí jako typované barcodes na variantě, proto se týkají všeho, co barcodes čte nebo zapisuje. Je vhodné ověřit, že synchronizace z ERP/PIM plní GTIN/EAN do správného typu a že nepřepisuje ručně doplněné NS-PID hodnoty. Jelikož jde o barcode typu NS-PID, stojí za kontrolu, zda ho již podporuje `BarcodeType` a connection `barcodes` v Admin GraphQL; novinka to výslovně neuvádí. Dále je potřeba hlídat, aby mapování nepoužívalo jen starší pole `barcode`, které po přidání dalších kódů vrací pouze první záznam. Přepínač Has no standardized identifier je pole na produktu, které se může hodit do hromadných úprav a importů.

**Pro PM / PO:** Termín je krátký, 1. 11. 2026, takže u merchantů, kterým zásilky do EU přicházejí z třetí země (sklad v UK nebo USA, 3PL v Asii, dropshipping, Managed Markets), je vhodné ihned zkontrolovat pokrytí produktů GTIN/EAN a SKU a správnost HS kódů. Hrozí zastavení nákupu labelu a u již odeslaných zásilek zadržení na celnici nebo poplatky za vrácení. Merchanti prodávající čistě z ČR zákazníkům uvnitř EU nejsou dotčeni, doporučujeme to ale s nimi krátce potvrdit. Praktický postup: exportovat produkty, najít varianty bez barcode i SKU, u unikátních a ručně vyráběných položek zapnout prohlášení a zkontrolovat HS kódy u zboží, které by mělo být osvobozené.

## Použití v Integrátoru

Možná — pokud u některého merchanta synchronizujeme barcodes, SKU nebo HS kódy mezi Shopify a ERP/PIM, je vhodné ověřit, že data pro zásilky do EU z třetích zemí projdou celním prohlášením, případně doplnit hromadné doplnění GTIN/EAN a prohlášení o absenci identifikátoru.
