---
date: 2026-02-04
title: "Checkout Kit for Web: JS knihovna pro embed checkout v agentic flows"
title_en: "Checkout Kit for Web"
slug: checkout-kit-for-web
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "JS knihovna pro embedovaný checkout. Naše integrace neimplementují agentic checkout flow."
dotcene_klienty: []

tldr: "JS knihovna pro otevření Shopify checkoutu v pop-up nebo nové záložce — určená pro agentic browser flows."
tagy: [checkout, javascript, embed, agentic-commerce]
---

## Co se mění
**Checkout Kit for Web** je nová JavaScript knihovna umožňující otevřít Shopify checkout merchant store **v pop-up nebo nové záložce** — primárně určená pro agentic flows v prohlížeči (typicky AI asistent klika v rámci uživatelovy session). Alternativa k full redirect na Shopify domain.

## Dopad pro nás
**Pro vývojáře:**
Aktuálně nesahá — používáme buď native checkout flow nebo nedotýkáme se checkout vrstvy. V budoucnu pro hybrid AI experiences relevantní.

**Pro PM / PO:**
Zatím spíše experimentální vrstva. Pokud klient chce custom AI buyer asistenta, tohle je oficiální stavební blok.

## Použití v Integrátoru
**Nepoužíváme** — JS knihovna pro frontend embedování. Naše integrace běží server-side.
