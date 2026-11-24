---
date: 2026-11-19
title: "Online-store apps musí deklarovat network access (CSP-styl bezpečnosti)"
title_en: "Network access declarations are now required for apps that run on the online store"
slug: network-access-declarations-required-online-store-apps
zdroj: https://shopify.dev/changelog/posts/network-access-declarations-are-now-required-for-apps-that-run-on-the-online-store
shrnuto_dne: 2026-11-24
kategorie: [breaking, bezpecnost]
api_oblast: storefront
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-19
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud dodáváme Theme App Extensions, Web Pixels nebo storefront UI Extensions, které volají externí URL, bude třeba doplnit network access deklaraci v manifestu aplikace."
dotcene_klienty: []
souvisejici: [security-deadlines-nov-dec-2026-update, ip-allowlists-required-breaking]
tldr: "Aplikace, které běží v online storu (Theme App Extensions, Web Pixels, storefront UI Extensions), nově musí deklarovat, k jakým externím hostům přistupují — Shopify tak dostává vrstvu v duchu CSP."
tagy: [security, online-store, csp, theme-app-extensions, web-pixels, declarations]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Network access declaration je explicitní seznam externích hostů a URL, ke kterým smí aplikace běžící na storefrontu posílat požadavky. Funguje v duchu Content Security Policy: místo aby kód z aplikace mohl volat cokoli, Shopify předem ví, kam se data z obchodu mohou dostat. Cílem je omezit riziko úniku zákaznických dat a zneužití skriptů třetích stran na storefrontu. Změna zapadá do security push z listopadu a prosince 2026, který přináší více povinných bezpečnostních opatření pro aplikace i merchanty. Přesné místo deklarace (manifest aplikace, `shopify.app.toml`) a detaily vynucování je třeba ověřit v dokumentaci.
  zdroje:
    - title: "Shopify: Network access declarations are now required for apps that run on the online store"
      url: "https://shopify.dev/changelog/posts/network-access-declarations-are-now-required-for-apps-that-run-on-the-online-store"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Aplikace, které běží na online storu, musí od 19. 11. 2026 deklarovat, k jakým externím zdrojům přistupují. Týká se to Theme App Extensions, Web Pixels a UI Extensions na storefrontu. Aplikace nově uvede seznam hostů (domén), na které posílá požadavky nebo odkud načítá obsah, a Shopify tuto deklaraci využívá jako bezpečnostní vrstvu v duchu CSP (Content Security Policy).

Deklarace se pravděpodobně uvádí v manifestu aplikace, typicky v `shopify.app.toml`. Přesný formát a způsob vynucování (varování při buildu, odmítnutí při deployi) zatím nemáme potvrzený, proto doporučujeme prostudovat původní changelog a navazující dokumentaci.

Změna je součástí širšího security pushe z listopadu a prosince 2026.

## Dopad pro nás

**Pro vývojáře:** Je třeba projít všechny naše aplikace a extensions, které běží na storefrontu, a zjistit, jaké externí služby volají (analytika, chat, tracking, vlastní API). Pro každý takový host doplníme deklaraci. Doporučujeme sledovat build warnings a výstupy `shopify app deploy`, protože právě tam se nejspíš objeví první upozornění na chybějící deklarace. Nezapomeňte na hosty, které se volají nepřímo (skripty načítané dalšími skripty).

**Pro PM / PO:** Jde o další bezpečnostní opatření ze strany Shopify. Nemá přímý dopad na zákazníky ani na vzhled obchodu. Riziko spočívá v tom, že nedeklarované volání může po vynucení přestat fungovat, proto je vhodné počítat s malou revizní prací v nejbližším sprintu.

## Použití v Integrátoru

Možná. Pokud dodáváme Theme App Extensions, Web Pixels nebo storefront UI Extensions, které volají externí endpointy, deklaraci doplnit musíme. Doporučujeme zkontrolovat, zda takové komponenty v Integrátoru máme, a případně založit úkol na doplnění deklarací.
