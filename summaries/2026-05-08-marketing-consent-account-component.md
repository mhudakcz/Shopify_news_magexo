---
date: 2026-05-08
title: "Sběr marketing consent na account component (nikoli jen sign-in page)"
title_en: "Collect marketing consent on the account component"
slug: marketing-consent-account-component
zdroj: https://changelog.shopify.com/posts/collect-marketing-consent-on-the-account-component
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme customer methods včetně updateCustomerEmailMarketingConsent. Account component je nový enrollment touchpoint pro marketing consent."
dotcene_klienty: []
souvisejici: [marketing-consent-customer-signin]

tldr: "Account component (Customer Account UI) nyní obsahuje marketing opt-in checkbox pod e-mail polem — zákazníci se mohou přihlásit k marketing newsletteru přímo z účtu, ne jen ze sign-in page."
tagy: [customer-account, marketing-consent, gdpr]
---

## Co se mění
**Account component** v Customer Account UI (logged-in customer profil) má nově **marketing opt-in checkbox** pod e-mail polem. Pokud zákazník zaškrtne, je automaticky přidán do email marketing subscriber list.

Rozšiřuje předchozí feature **Marketing consent on sign-in page** o další touchpoint.

## Dopad pro nás
**Pro vývojáře:**
Naše `updateCustomerEmailMarketingConsent` queries / mutace mohou nově dostávat stav opt-in i z account flow (nejen sign-in). Žádný kódový dopad, jen širší zdroj consent.

## Použití v Integrátoru
**Možná** — pokud klient řeší marketing consent flow, tohle je další vstupní bod.

## Související
- [Marketing consent na sign-in page](../zmena/marketing-consent-customer-signin/)
