---
date: 2026-04-21
title: "Redesign local pickup UX v checkoutu"
title_en: "Updates to local pickup user experience in checkout"
slug: local-pickup-checkout-redesign
zdroj: https://changelog.shopify.com/posts/updates-to-local-pickup-user-experience-in-checkout
zdroj_kanal: merchant-changelog
obrazek: https://cdn.shopify.com/static/checkout/Checkout%20pickup%20changelog%20.png
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Checkout UI redesign. API mutations pro pickup volby nedotčeny."
tldr: "Checkout redesign zobrazí shipping a pickup volby inline, s nejbližší pickup lokací nahoře a modálem pro výběr jiné lokace — rychlejší rozhodnutí customera."
tagy: [checkout, pickup, ux, mobile]
---

## Co se mění
**Local pickup** v checkoutu má redesign:
- Shipping a pickup options se zobrazují **inline** vedle sebe (ne přepínač jako dřív)
- **Nejbližší pickup lokace** se zobrazí jako první default
- Modál pro výběr jiné lokace, s mapou a dostupností

Cíl: rychlejší rozhodnutí + méně friction pro customera.

## Použití v Integrátoru
**Nepoužíváme** — UI/UX redesign checkoutu. Naše integrace mohou číst delivery method z orderu (vč. pickup), payload se nemění.
