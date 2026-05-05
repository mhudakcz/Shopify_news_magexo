---
date: 2026-03-23
title: "Sběr marketing consent na customer sign-in page"
title_en: "Collect marketing consent on the customer sign-in page"
slug: marketing-consent-customer-signin
zdroj: https://changelog.shopify.com/posts/collect-marketing-consent-on-the-customer-sign-in-page
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Customer Account feature. Pokud klient řeší GDPR/marketing consent flow přes naše customer methods, je to relevantní config."
tldr: "Sign-in page nyní podporuje sběr marketing consent (stejné settings jako checkout) — opt-iny se zachycují dřív v customer journey."
tagy: [customer-account, marketing-consent, gdpr]
---

## Co se mění
**Customer sign-in page** nyní umí sbírat **marketing consent** (e-mail / SMS opt-in) — stejné settings jako v checkoutu. Customer dá souhlas dřív v journey.

## Použití v Integrátoru
**Možná** — máme `updateCustomerEmailMarketingConsent` v shopify-client. Pokud klient řeší consent flow, ten field může nově být plněn dřív (před checkoutem).
