---
date: 2026-04-01
title: "Tagy na slevách v Admin API od 2026-04"
title_en: "Add Tags to Discounts"
slug: add-tags-to-discounts
zdroj: https://shopify.dev/changelog/add-tags-to-discounts
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme discount methods (createDiscountCodeBasic, getAllDiscountCodes, getDiscountCode). Pole tags lze přidat do queries pro lepší organizaci a filtraci slev."
dotcene_klienty: []
souvisejici: [scannable-discount-codes-qr]

kontext:
  background: |
    Systém tagů je v Shopify Admin GraphQL API dlouhodobě přítomen u klíčových objektů: Product, Order, Customer i Article již dříve podporovaly pole `tags` jako seznam řetězců (`[String!]!`), přičemž aktualizace pole přepíše všechny stávající tagy — pro přidávání bez mazání slouží mutace `tagsAdd`.

    Přidáním pole `tags` na objekty slev (DiscountCode, DiscountAutomatic) v API verzi 2026-04 Shopify rozšiřuje tuto konzistentní filozofii tagování napříč celým datovým modelem. Tagy na slevách jsou definovány jako vyhledávatelná klíčová slova: například merchant může označit slevové kódy tagem `loajalita` a snadno je odlišit od ostatních akcí.

    Toto rozšíření přináší praktické výhody v celém ekosystému: filtry v Admin API umožní vyhledávat slevy pomocí syntaxe `tag:nazev-tagu`, obchodníci mohou organizovat desítky nebo stovky slev do logických skupin bez nutnosti externích nástrojů. Vstupní objekt `DiscountCodeBasicInput` (i jeho obdoba pro automatické slevy) nově obsahuje pole `tags: [String!]`, takže tagy lze nastavit již při vytváření slevy jedinou mutací.

    Konzistentnost tagů napříč Produkty, Objednávkami, Zákazníky i Slevami zároveň otevírá možnosti pro Shopify Flow — triggery a podmínky Flow pracující s tagy mohou být nově aplikovány i na slevy, což umožňuje automatizovat pracovní postupy jako notifikace nebo úpravy kampaní podle přítomnosti konkrétního tagu.
  priklad: |
    mutation {
      discountCodeBasicCreate(basicCodeDiscount: {
        title: "Loajalitní sleva 10 %"
        code: "LOYAL10"
        startsAt: "2026-04-01T00:00:00Z"
        tags: ["loajalita", "jaro-2026"]
        customerGets: { value: { percentage: 0.10 }, items: { all: true } }
        customerSelection: { all: true }
      }) {
        codeDiscountNode { id }
        userErrors { field message }
      }
    }
  zdroje:
    - title: "Shopify Changelog: Add Tags to Discounts"
      url: "https://shopify.dev/changelog/add-tags-to-discounts"
    - title: "Admin GraphQL: DiscountCodeBasicInput (2026-04)"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-04/input-objects/DiscountCodeBasicInput"
    - title: "Admin GraphQL: DiscountCodeApp — pole tags"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-04/objects/DiscountCodeApp"
    - title: "Admin GraphQL: Product — pole tags"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-product-tags"
  generated_at: 2026-06-05T15:00:00Z
  model: claude-sonnet-4-5
tldr: "Od API 2026-04 lze taggovat slevy v Admin API pro lepší organizaci a filtrování."
tagy: [discount, tags, organization]
editions_release: spring-2026
---

## Co se mění
API verze **2026-04** zavádí pole `tags` na slevách (`DiscountCode`, `DiscountAutomatic`) v Admin GraphQL API. Tagy umožňují labelovat slevy a později filtrovat — např. `kampan-zima-2026`, `b2b-only`, `vip-tier`.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pole `tags` lze přidat do existujících discount queries (`getAllDiscountCodes`, `getDiscountCode`). Při zápisu (`createDiscountCodeBasic`) lze tagy nastavit. Žádný breaking change — pole je opt-in.

**Pro PM / PO:**
Vhodné pro klienty s velkým počtem slev — usnadní reporting (např. „kolik objednávek prošlo přes slevu z kampaně X"). Nice-to-have feature.

## Použití v Integrátoru
**Možná** — přidat tags do discount queries pokud konkrétní klient potřebuje granulárnější tracking/filtraci. Vyžaduje upgrade na 2026-04.
