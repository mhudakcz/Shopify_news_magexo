---
date: 2026-10-08
title: "Checkout & Customer Account UI extensions: owner_type pro metafield deklarace (povinné 2027-01)"
title_en: "New owner_type field for metafield declarations in Checkout and Customer Account UI extensions, required in 2027-01"
slug: metafield-owner-type-checkout-customer-account-ui
zdroj: https://shopify.dev/changelog/posts/metafield-owner-types-required-for-checkout-and-customer-account-ui-extensions
shrnuto_dne: 2026-10-14
kategorie: [deprecation, breaking-change]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše aplikace nebo jejich checkout a customer account UI extensions deklarují metafields v shopify.extension.toml, musí se před přechodem na API 2027-01 doplnit owner_type ke každé deklaraci, jinak bude deployment zablokován."
dotcene_klienty: []
souvisejici: [deprecation-checkout-metafields, metafields-definition-required-customer-account-api, metafieldinteger-collection-condition-removed-2027-01]
tldr: "Od API 2026-10 lze v deklaracích metafields v shopify.extension.toml uvádět owner_type, od 2027-01 bude povinný a deployment bez něj se zablokuje."
tagy: [checkout-ui, customer-account-ui, metafields, owner-type, action-required, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Checkout UI extensions a Customer Account UI extensions si v konfiguračním souboru shopify.extension.toml deklarují, které metafields budou číst. Deklarace se zapisují do sekcí [[extensions.metafields]] a [[extensions.targeting.metafields]] a dosud stačilo uvést namespace a key. Shopify tak z konfigurace nevěděl, ke kterému typu zdroje (produkt, zákazník, objednávka, ...) metafield patří, a musel data dohledávat obecněji, než bylo nutné.

    Nové pole owner_type tuto informaci doplňuje. Určuje, který typ zdroje metafield vlastní, například PRODUCT nebo CUSTOMER. Shopify díky tomu může pro každou extension načítat jen metafields z typů zdrojů, které opravdu potřebuje, což podle changelogu zlepšuje výkon. Schéma deklarace je navíc přesnější, což by v budoucnu mohlo usnadnit validaci a autocomplete v nástrojích, ale to je jen náš předpoklad, changelog tento přínos neuvádí.

    Pole je od API verze 2026-10 volitelné a od verze 2027-01 povinné. Shopify tedy nejdřív umožní nový zápis jako opt-in a po přechodu na novou verzi ho začne vynucovat, stejně jako u dalších změn plánovaných na 2027-01. Praktický dopad je omezený na extensions, které metafields v shopify.extension.toml opravdu deklarují. Extensions bez těchto deklarací zůstávají beze změny.
  zdroje:
    - title: "Shopify: New owner_type field for metafield declarations in Checkout and Customer Account UI extensions, required in 2027-01"
      url: "https://shopify.dev/changelog/posts/metafield-owner-types-required-for-checkout-and-customer-account-ui-extensions"
    - title: "Shopify Docs: Configure metafields for Checkout UI extensions (2026-10)"
      url: "https://shopify.dev/docs/api/checkout-ui-extensions/2026-10#configuration"
    - title: "Shopify Docs: Configure metafields for Customer Account UI extensions (2026-10)"
      url: "https://shopify.dev/docs/api/customer-account-ui-extensions/2026-10#configuration"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Od API verze **2026-10** je možné u každé deklarace metafieldu v `shopify.extension.toml` uvést vlastnost **`owner_type`**. Určuje, jaký typ zdroje metafield vlastní (changelog uvádí jako příklady `PRODUCT` a `CUSTOMER`). Vlastnost se týká deklarací v sekcích `[[extensions.metafields]]` i `[[extensions.targeting.metafields]]` a platí pro **Checkout UI extensions** i **Customer Account UI extensions**.

Shopify hodnotu používá k tomu, aby pro extension načítal pouze metafields z typů zdrojů, které extension potřebuje. Výsledkem má být lepší výkon.

Orientační příklad deklarace (syntaxi a povolené hodnoty vždy ověřte v dokumentaci konfigurace pro danou verzi, changelog sám žádný kód neuvádí):

```toml
[[extensions.metafields]]
namespace = "custom"
key = "gift_note"
owner_type = "PRODUCT"
```

Dvě pravidla, na která si dát pozor:

- **Povinnost od 2027-01.** Každá deklarace metafieldu musí `owner_type` obsahovat. Deployment s deklarací bez něj bude zablokován.
- **Jeden owner_type na deklaraci.** Pokud extension potřebuje stejnou dvojici `namespace` a `key` pro více typů zdrojů, je nutné vytvořit samostatnou deklaraci pro každý `owner_type`.

Netýká se extensions, které v `shopify.extension.toml` žádné metafields nedeklarují.

## Časová osa

- **2026-10-08** — publikace changelogu (aktualizován 2026-10-09)
- **API 2026-10** — `owner_type` je volitelný, lze ho doplnit už teď
- **API 2027-01 a novější** — `owner_type` je povinný na každé deklaraci metafieldu, deployment bez něj se zablokuje

## Dopad pro nás

**Pro vývojáře:** Projít všechny checkout a customer account UI extensions a v jejich `shopify.extension.toml` dohledat deklarace metafieldů. U každé doplnit správný `owner_type`. Tam, kde se stejné `namespace` a `key` čte z více typů zdrojů, rozdělit deklaraci na několik. Poté extension znovu nasadit a ověřit, že deployment projde bez validačních chyb u metafield deklarací. Doplnění jde udělat už na 2026-10, takže není důvod čekat na přechod na 2027-01. Obecně doporučujeme změnu zavést spolu s plánovaným povýšením API verze.

**Pro PM / PO:** Riziko není v tom, že by se při přechodu rozbil běh extension u zákazníků obchodu. Changelog mluví výslovně o blokaci deploymentu. Prakticky to ale znamená, že po přechodu na 2027-01 nepůjde nasadit ani drobná oprava extension, dokud deklarace nebudou doplněné. Změna je malá a mechanická, stačí ji zařadit do běžné údržby extensions před lednem 2027. Pomůže předem sepsat, které extensions metafields deklarují, aby se při povýšení API verze nic nezdrželo.

## Použití v Integrátoru

**Možná** — týká se jen případu, kdy námi vyvíjené nebo spravované checkout či customer account UI extensions deklarují metafields v `shopify.extension.toml`. V takovém případě je třeba před přechodem na API 2027-01 doplnit `owner_type`, jinak se zablokuje deployment.
