# Triage prompt

Rozhodni, zda je novinka relevantní pro tým, který staví Shopify integrace pro klienty (Magexo / Integrathor).

## Vstup
Titulek + popis položky z `shopify.dev/changelog`.

## Výstup
Jedno z:
- `relevant` — týká se API, webhooks, admin, checkout, storefront, billing, POS, scope/permissions, OAuth, GraphQL/REST schémat, deprecations
- `noise` — jen Hydrogen-only frontend, marketing copy, in-app drobnosti bez impactu na integrace

Buď spíš velkorysý — když na vážkách, vol `relevant`. Filter má jen odstřihnout zjevný šum.
