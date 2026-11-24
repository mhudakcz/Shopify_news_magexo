---
date: 2026-11-16
title: "Analytics: přesnější detekce botů v košíku a checkoutu (očekávejte lehký pokles sessions)"
title_en: "Improved bot detection for cart and checkout activity"
slug: analytics-improved-bot-detection-cart-checkout
zdroj: https://changelog.shopify.com/posts/improved-bot-detection-for-cart-and-checkout-activity
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-16
pouzivame_v_integratoru: ne
dukaz_integratoru: "Jde o interní analytický filtr v Shopify Adminu; integrátor to neovlivňuje."
dotcene_klienty: []
souvisejici: []
tldr: "Analytics teď v cart a checkout aktivitě lépe detekuje boty — reporty s human-only filtrem mohou ukázat mírný pokles sessions, zatímco orders, sales a customer data zůstávají beze změny."
tagy: [analytics, bot-detection, cart, checkout, sessions]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Boti, kteří generují návštěvy v košíku a checkoutu, zkreslují sessions a konverzní poměry, takže Shopify svou detekci dále zpřesňuje. Merchanti tak dostanou čistší data o skutečném chování zákazníků. Orders, sales ani data zákazníků se nemění, upravuje se pouze segmentace sessions.
  zdroje:
    - title: "Shopify: Improved bot detection for cart and checkout activity"
      url: "https://changelog.shopify.com/posts/improved-bot-detection-for-cart-and-checkout-activity"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Analytics od 16. 11. 2026 přesněji detekuje bot traffic v aktivitě v košíku a checkoutu. Reporty, které používají filtr pouze na lidské návštěvníky („humans only"), proto mohou ukazovat mírně nižší počet sessions, protože se do nich dostane méně botů.

Změna se týká výhradně segmentace sessions. Orders, sales ani customer data nejsou dotčena a zůstávají beze změny.

## Dopad pro nás

**Pro PM / PO:** Doporučujeme předem upozornit klienty, kteří sledují week-over-week vývoj sessions ve filtru „humans only". Mohou zaznamenat lehký propad, který ale neznamená skutečný pokles traffic, jde o čistší data. Případné dotazy na „propad návštěvnosti" od 16. 11. je vhodné vysvětlit touto změnou, než se začne hledat chyba v kampaních nebo na webu.

**Pro vývojáře:** Žádný dopad.

## Použití v Integrátoru

Ne. Jde o interní analytický filtr v Shopify Adminu a integrátor jím není ovlivněn.
