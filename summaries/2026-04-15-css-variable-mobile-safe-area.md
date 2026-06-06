---
date: 2026-04-15
title: "Nová CSS proměnná --shopify-safe-area-inset-bottom pro mobilní embedded apps"
title_en: "New CSS variable for mobile safe area insets"
slug: css-variable-mobile-safe-area
zdroj: https://shopify.dev/changelog/new-css-variable-for-mobile-safe-area-insets
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se embedded apps běžících v Shopify Mobile přes App Bridge. Neděláme embedded apps."
dotcene_klienty: []

kontext:
  background: |
    App Bridge je JavaScriptové SDK od Shopify, které umožňuje takzvaným embedded apps komunikovat s Shopify adminem i s nativní mobilní aplikací Shopify. Embedded app je webová aplikace třetí strany, která se zobrazuje uvnitř Shopify adminu nebo Shopify Mobile v prvku iframe — není tedy otevřena jako samostatná stránka, ale je vložena přímo do rozhraní Shopify.

    Protože moderní mobilní zařízení (iPhony s výřezem, zařízení s průhledítkem nebo s virtuálním tlačítkem Home) vyhrazují část obrazovky pro systémové prvky, vzniká riziko, že obsah aplikace bude těmito prvky překryt. Standardní webová řešení používají CSS funkci `env()` — konkrétně hodnoty jako `env(safe-area-inset-bottom)` — kterou Apple zavedl pro Safari na iOS, aby vývojáři mohli reagovat na výřezy a domovský indikátor.

    Shopify jde podobnou cestou prostřednictvím vlastní proměnné `--shopify-safe-area-inset-bottom`: ta zohledňuje nejen systémové safe area zařízení, ale také plovoucí spodní navigační lištu Shopify Mobile, jejíž výška se může dynamicky měnit. App Bridge tuto hodnotu automaticky aplikuje jako spodní padding na element body, takže většina aplikací nevyžaduje žádné úpravy — výjimkou jsou prvky s pevnou nebo sticky pozicí na spodním okraji stránky.
  priklad: |
    .my-floating-button {
      bottom: calc(16px + var(--shopify-safe-area-inset-bottom, 0px));
    }
  zdroje:
    - title: "Shopify Changelog: New CSS variable for mobile safe area insets"
      url: "https://shopify.dev/changelog/new-css-variable-for-mobile-safe-area-insets"
    - title: "Shopify App Bridge — přehled"
      url: "https://shopify.dev/docs/api/app-bridge"
    - title: "MDN Web Docs: CSS env() funkce (safe-area-inset-*)"
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/env"
  generated_at: 2026-06-05T15:00:00Z
  model: claude-sonnet-4-5
tldr: "App Bridge poskytuje --shopify-safe-area-inset-bottom CSS variable pro embedded apps na Shopify Mobile."
tagy: [app-bridge, mobile, css]
---

## Co se mění
App Bridge v embedded apps běžících v Shopify Mobile poskytuje novou CSS proměnnou `--shopify-safe-area-inset-bottom`, která vyplňuje hodnotu safe area (notch, home indicator) — pro prevenci překrytí obsahu systémovými prvky.

## Použití v Integrátoru
**Nepoužíváme** — neděláme embedded apps běžící uvnitř Shopify Mobile přes App Bridge.
