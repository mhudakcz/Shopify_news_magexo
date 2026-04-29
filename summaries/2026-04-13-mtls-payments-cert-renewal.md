---
date: 2026-04-13
title: "Renewal mTLS klientského certifikátu pro Payments Apps 15. 6. 2026"
title_en: "mTLS client certificate renewal for Payments Apps"
slug: mtls-payments-cert-renewal
zdroj: https://shopify.dev/changelog/mtls-client-certificate-renewal-for-payments-apps
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, integrace]
api_oblast: billing
api_verze: []
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-06-15

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Payments Apps. Neděláme payment processing aplikace."
dotcene_klienty: []

tldr: "Shopify obnovuje mTLS certifikát pro Payments Apps 15. 6. 2026; vlastní validační logika v platebních appech musí být aktualizovaná."
tagy: [payments, mtls, security, certificate]
---

## Co se mění
Shopify **15. června 2026** obnovuje klientský mTLS certifikát používaný pro komunikaci mezi Shopify a Payments Apps. Aplikace s vlastní validační logikou (ne defaultní trust store) musí před tímto datem aktualizovat povolený certifikát, jinak přestane mTLS handshake fungovat.

## Časová osa
- **2026-06-15** — nasazení nového certifikátu

## Použití v Integrátoru
**Nepoužíváme** — týká se Payments Apps API, neimplementujeme platební aplikace.
