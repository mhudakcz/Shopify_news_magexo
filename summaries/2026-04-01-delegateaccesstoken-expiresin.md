---
date: 2026-04-01
title: "delegateAccessTokenCreate vrací expiresIn"
title_en: "delegateAccessTokenCreate mutation now returns expiresIn"
slug: delegateaccesstoken-expiresin
zdroj: https://shopify.dev/changelog/delegateaccesstokencreate-mutation-now-returns-expiresin
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se delegate access tokens (typicky pro service-to-service auth). Pokud používáme tento pattern pro klientské integrace, můžeme číst expiresIn pro lepší token rotation."
dotcene_klienty: []

kontext:
  background: |
    Delegate access token je typ přístupového tokenu v Shopify Admin GraphQL API, který nese pouze podmnožinu oprávnění (scopes) svého rodičovského tokenu. Vytváří se mutací `delegateAccessTokenCreate` a slouží k předání omezeného přístupu subsystémům nebo servisním vrstvám aplikace — podle principu nejmenšího nutného oprávnění (least privilege). Na rozdíl od plného offline tokenu nemůže delegovaný token překročit oprávnění rodiče.

    Zásadní vlastností delegate tokenů je dědění doby životnosti (TTL) od rodičovského tokenu, pokud volající explicitně nezvolí kratší expirace. Před verzí API 2026-04 nebylo pole `expiresIn` v odpovědi mutace dostupné, takže vývojáři museli expirace odhadovat (typicky předpokládali 24 hodin) nebo ji sledovat externě. Tato nejistota komplikovala implementaci čisté token rotation logiky v service-to-service scénářích.

    Přidání `expiresIn` je součástí širšího Shopify trendu k explicitní správě životnosti tokenů. Shopify od dubna 2026 vyžaduje expirující offline tokeny pro nové veřejné aplikace a od ledna 2027 pro všechny veřejné aplikace. Transparentní expirace u delegate tokenů umožňuje vývojářům implementovat refresh v přesném čase, předcházet neočekávanému selhání volání API a budovat robustnější autentizační vrstvu bez zbytečných bezpečnostních rezerv.

    Typické použití je v aplikacích s více interními službami, kde každá služba dostane token s minimálním rozsahem potřebným pro svou funkci, s jasně definovanou dobou platnosti.
  zdroje:
    - title: "Shopify Changelog: delegateAccessTokenCreate mutation now returns expiresIn"
      url: "https://shopify.dev/changelog/delegateaccesstokencreate-mutation-now-returns-expiresin"
    - title: "Shopify Docs: delegateAccessTokenCreate mutation"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate"
    - title: "Archiv: Expirující offline access tokens povinné pro nové public apps od 1. 4. 2026"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-required/"
    - title: "Archiv: Expirující offline tokens povinné pro VŠECHNY public apps od 1. 1. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Mutace delegateAccessTokenCreate nově vrací expiresIn (sekundy do expirace)."
tagy: [auth, token, oauth, security]
editions_release: spring-2026
---

## Co se mění
Mutace `delegateAccessTokenCreate` v API **2026-04** nově vrací pole `expiresIn` — počet sekund do expirace tokenu. Dříve klient musel hodnotu odhadovat z konvence (typicky 24 hodin).

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud používáme delegate access tokens (např. pro krátkodobé service-to-service auth k Shopify Admin API), můžeme z odpovědi číst `expiresIn` a implementovat čistší token refresh logic. Bez breaking change.

## Použití v Integrátoru
**Možná** — záleží, jestli někde voláme `delegateAccessTokenCreate`. Pokud ano, lze rozšířit query selektor o `expiresIn`.
