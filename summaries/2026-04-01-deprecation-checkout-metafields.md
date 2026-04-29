---
date: 2026-04-01
title: "Deprecation checkout metafields v checkout a customer account UI extensions"
title_en: "Deprecation of checkout metafields in checkout and customer account UI extensions"
slug: deprecation-checkout-metafields
zdroj: https://shopify.dev/changelog/deprecation-of-checkout-metafields-in-checkout-and-customer-account-ui-extensions
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: checkout
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 12+ metafield methods (metafieldsSet, getMetafieldDefinitionByNamespaceAndKey, getCustomerMetafieldsByNamespace …). Checkout metafields jsou specifický typ — pokud naše integrace zapisuje metafields, které mají být dostupné v checkout extensions, je nutné migrovat na cart/order metafields."
dotcene_klienty: []
souvisejici: []

tldr: "Checkout metafields v checkout/customer account UI extensions deprecated; migrace na cart a order metafields v API 2026-04."
tagy: [metafield, checkout, deprecation, cart, order]
---

## Co se mění
V API verze **2026-04** jsou checkout metafields v checkout a customer account UI extensions **deprecated**. Místo nich se používají **cart metafields** (před checkoutem) a **order metafields** (po checkout). Order metafield definitions nově podporují **cart-to-order copying** — automatické přenesení hodnoty z cart na order v okamžiku objednání.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit, deprecation oznámeno

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace zapisuje metafields určené pro čtení v checkout extensions klienta, je třeba refactor na cart/order metafields. Cart metafields se zapisují přes Storefront API (na cart objektu), order metafields přes Admin API. Cart-to-order copy nutí trochu jinou architekturu zápisu.

**Pro PM / PO:**
Týká se klientů, co mají customizace v checkout (např. dárky, custom poznámky, B2B fields). Migrace má časový horizont (deprecation, ne immediate removal), ale je dobré zařadit do roadmapy.

## Použití v Integrátoru
**Možná** — máme metafield methods (`metafieldsSet`, `metafieldsSetBulkMutationInput`). Pokud aktivně zapisujeme do checkout namespace metafields, prověřit a převést na cart/order namespace.

## Rizika a edge cases
- Cart metafields se cleanup-ují po expiraci cart — data nepřežijí dlouho neaktivní košík
- Cart-to-order copy musí být explicitně nakonfigurováno v order metafield definition
- Existující checkout metafield data nebudou auto-migrovaná
