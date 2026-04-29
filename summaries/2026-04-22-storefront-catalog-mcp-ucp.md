---
date: 2026-04-22
title: "Storefront Catalog MCP přechází na UCP — breaking change"
title_en: "Storefront Catalog MCP now implements UCP"
slug: storefront-catalog-mcp-ucp
zdroj: https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, integrace]
api_oblast: storefront
api_verze: []
nalehavost: vysoka
customer_facing: false

ucinnost_od: 2026-04-22
deprecation_do: 2026-06-15
migrace_doporucena_do: 2026-05-31

pouzivame_v_integratoru: ne
dukaz_integratoru: "find-shopify-method 'catalog' vrátil B2B price-list metody (createCatalog, getCompanyLocationsWithCatalogs, updateCatalogContext) — to je B2B catalog API, ne Storefront Catalog MCP server."
dotcene_klienty: []
souvisejici: []

tldr: "Shopify's Storefront Catalog MCP přechází na UCP protokol; staré nástroje budou odstraněny do 15. 6. 2026."
tagy: [mcp, storefront, catalog, ucp, ai]
---

## Co se mění
Shopify's **Storefront Catalog MCP server** (oficiální MCP server pro AI asistenty komunikující se Shopify storefronty) přešel na **UCP (Unified Commerce Protocol)**. Změnily se endpointy a request/response schémata. Staré nástroje (tools) zůstávají dostupné jako **deprecated do 15. 6. 2026**, poté budou odstraněny bez náhrady.

## Časová osa
- **2026-04-22** — UCP verze nasazena, staré tools deprecated
- **2026-06-15** — staré tools odstraněny

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom měli klienta, kterého integrujeme s Storefront Catalog MCP (typicky AI chatboti, copilot funkce nad katalogem), je nutné migrovat na UCP endpointy. Aktuálně **nepoužíváme** Storefront Catalog MCP v žádném známém modulu — naše „catalog" methods jsou pro B2B price-list katalogy (jiný koncept).

**Pro PM / PO:**
Žádná akce. Pokud klient zmíní Shopify AI integrace nad katalogem (chatbot, asistent), prověřit, jaký konkrétní MCP/protokol používá.

## Použití v Integrátoru
**Nepoužíváme** — `find-shopify-method "catalog"` vrátil B2B price-list metody (`createCatalog`, `getCompanyLocationsWithCatalogs`), nikoliv Storefront Catalog MCP server. Jiný koncept.

## Rizika a edge cases
- Pokud někdy v budoucnu napojíme klientského AI asistenta na Shopify katalog, musí použít UCP — staré schéma už nebude k dispozici po 15. 6. 2026
