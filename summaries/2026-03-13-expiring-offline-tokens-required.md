---
date: 2026-03-13
title: "Expirující offline access tokens povinné pro nové public apps od 1. 4. 2026"
title_en: "Expiring offline access tokens required for new public apps as of April 1, 2026"
slug: expiring-offline-tokens-required
zdroj: https://shopify.dev/changelog/expiring-offline-access-tokens-required-for-public-apps-april-1-2026
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se public apps (Shopify App Store). Naše integrace běží jako custom apps, ale pokud bychom v budoucnu publikovali public app, OAuth flow musí podporovat refresh tokens."
dotcene_klienty: []

kontext:
  background: |
    Offline access token je typ OAuth 2.0 přihlašovacího tokenu, který aplikace na Shopify používají pro přístup k Admin API bez přímé interakce s obchodníkem. Na rozdíl od online tokenů (které váže relaci na přihlášeného uživatele) jsou offline tokeny určeny pro práci na pozadí — například zpracování webhooků nebo plánované synchronizace. Historicky byly trvalé a bylo je možné zneplatnit pouze odinstalací aplikace.

    Shopify zavedl expirující variantu offline tokenů v prosinci 2025 jako reakci na moderní bezpečnostní standardy (OAuth 2.0 best practices, RFC 6749). Přístupový token má životnost 1 hodinu, refresh token platí 90 dní. Každé obnovení vydá nový pár — starý refresh token se okamžitě zneplatní. Motivací je minimalizovat škody při úniku tokenu: útočník má jen omezené časové okno.

    Pro vývojáře veřejných aplikací to znamená implementovat refresh middleware — tj. sledovat expirace, volat refresh endpoint a ukládat nový pár tokenů. Shopify poskytuje šablony a knihovny (Remix app template, shopify-app-js), kde je tento flow již zabudován. Vlastní integrace musí refresh logiku doplnit. Povinnost od dubna 2026 se týká nových public apps; existující budou muset migrovat do 1. 1. 2027 (rozšíření oznámeno v květnu 2026).

    Příbuznou změnou je přidání pole `expiresIn` v mutaci `delegateAccessTokenCreate` (API 2026-04), které usnadňuje přesné sledování životnosti i delegate tokenů — viz článek delegateAccessToken-expiresIn.
  zdroje:
    - title: "Shopify Changelog: Expiring offline access tokens required for public apps (April 1, 2026)"
      url: "https://shopify.dev/changelog/expiring-offline-access-tokens-required-for-public-apps-april-1-2026"
    - title: "Shopify Docs: Offline access tokens"
      url: "https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens"
    - title: "Shopify Changelog: Expiring offline tokens for all public apps (January 1, 2027)"
      url: "https://shopify.dev/changelog/expiring-offline-access-tokens-required-for-all-public-apps-as-of-january-1-2027"
    - title: "Archiv: delegateAccessTokenCreate vrací expiresIn"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/delegateaccesstoken-expiresin/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Public apps vytvořené po 1. 4. 2026 musí používat expirující offline access tokens (s refresh)."
tagy: [auth, oauth, security, public-app]
editions_release: spring-2026
---

## Co se mění
**Public apps** vytvořené **po 1. dubnu 2026** musí používat **expirující offline access tokens** s explicit refresh flow. Dříve mohly mít trvalé tokeny. Cíl: vyšší security posture, méně rizika z dlouhodobě platných credentials.

## Časová osa
- **2026-04-01** — povinné pro nové public apps

## Dopad pro nás
**Pro vývojáře:**
Náš shopify-client je strukturován pro custom apps (privátní pro každého klienta). Pokud kdy publikujeme do App Store, OAuth handshake musí ukládat `expires_in` a refresh token, plus implementovat refresh middleware.

**Pro PM / PO:**
Pokud uvažujeme o publikaci nějaké funkcionality jako veřejné app pro Shopify App Store, architectural impact — vyžaduje refresh flow.

## Použití v Integrátoru
**Možná** — aktuálně neimpactuje custom apps. Při budoucí publikaci public app je třeba zohlednit.
