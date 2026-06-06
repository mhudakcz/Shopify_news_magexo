---
date: 2026-03-17
title: "Auto-sync customer dat z external identity provider (Plus)"
title_en: "Automatically sync customer data from your identity provider"
slug: sync-customer-data-identity-provider
zdroj: https://changelog.shopify.com/posts/enrich-customer-records-with-data-from-external-identity-providers
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 26 customer methods. Pokud klient (Plus) používá external IdP (Auth0, Okta, atd.) pro customer accounts, tato nativní sync feature může nahradit část naší custom integrace."
dotcene_klienty: []

kontext:
  background: |
    External identity provider (IdP) je služba, která spravuje identity uživatelů centrálně a umožňuje přihlašování do více aplikací přes jeden účet. Populární platformy jako Auth0, Okta nebo Azure Active Directory implementují standardy jako OpenID Connect (OIDC) nebo SAML 2.0, díky nimž obchodník ovládá autentizaci zákazníků mimo Shopify.

    Shopify Plus dlouhodobě umožňuje nahradit výchozí přihlašovací stránku vlastním IdP, čímž značky s komplexními zákaznickými portály nebo B2B procesy získají jednotné přihlašování (SSO). Historicky však Shopify neměl mechanismus, jak automaticky udržovat zákaznický profil v Admin synchronizovaný s atributy uloženými v externím IdP — obchodníci museli stavět vlastní synchronizační logiku pomocí webhooků nebo plánovaných volání Admin API.

    Nativní auto-sync eliminuje tuto potřebu: při každém přihlášení zákazníka přes IdP Shopify automaticky přepíše jméno, e-mail, telefon, adresy a tagy hodnotami z tokenu IdP. Díky tomu zákaznická data v Shopify odráží skutečný stav bez dalšího middlewaru, což snižuje riziko nekonzistencí a zjednodušuje compliance při změnách kontaktních údajů. Tato funkce se dotýká i dalších oblastí zákaznického ekosystému, jako je checkout personalizace nebo správa marketing souhlasů.

    Do budoucna lze očekávat rozšíření synchronizovatelných atributů a hlubší propojení s Customer Account Extensions, které obchodníkům umožňují budovat vlastní stránky v rámci nového zákaznického portálu Shopify.
  zdroje:
    - title: "Enrich customer records with data from external identity providers — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/enrich-customer-records-with-data-from-external-identity-providers"
    - title: "Customizace checkoutu a customer accounts per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/"
    - title: "Sběr marketing consent na customer sign-in page"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-consent-customer-signin/"
    - title: "Connect your own identity provider — Shopify Help Center"
      url: "https://help.shopify.com/en/manual/customers/customer-accounts/classic-customer-accounts/identity-provider"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Plus merchanti s external identity provider (Auth0, Okta…) mohou auto-syncovat name, email, phone, addresses a tags do Shopify customer records bez custom middleware."
tagy: [customer, identity, idp, plus, sso]
---

## Co se mění
**Plus merchanti** používající external identity providers (Auth0, Okta, Azure AD atd.) mohou nyní **automaticky synchronizovat customer data** do Shopify customer records:
- name, email, phone
- addresses
- tags

Bez custom middleware.

## Dopad pro nás
**Pro vývojáře:**
Pokud máme custom integraci, která syncuje data z klientského IdP do Shopify customers (typicky přes `createCustomer` / `updateCustomer`), nativní řešení může nahradit / zjednodušit část kódu. Audit existujících klientů s SSO setupem.

**Pro PM / PO:**
Diskovery question pro Plus klienty: „máte SSO / external IdP?" Pokud ano, nativní sync může ušetřit licence a zkrátit projekt.

## Použití v Integrátoru
**Možná** — relevantní pro Plus klienty s external auth. Audit case-by-case.
