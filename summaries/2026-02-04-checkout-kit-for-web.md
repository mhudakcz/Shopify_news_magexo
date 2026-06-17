---
date: 2026-02-04
title: "Checkout Kit for Web: JS knihovna pro embed checkout v agentic flows"
title_en: "Checkout Kit for Web"
slug: checkout-kit-for-web
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "JS knihovna pro embedovaný checkout. Naše integrace neimplementují agentic checkout flow."
dotcene_klienty: []

kontext:
  background: |
    Checkout Kit for Web je klientská JavaScript knihovna, která umožňuje vývojářům spustit Shopify checkout přímo uvnitř třetí strany — v pop-up okně nebo nové záložce prohlížeče — bez nutnosti přesměrování celé stránky na doménu Shopify. Jde o webový protějšek obdobných nativních SDK, která Shopify vydal pro iOS (Swift), Android a React Native.

    Shopify dlouhodobě rozvíjí „headless" a „embedded" checkout přístupy, aby umožnil merchantům prodávat mimo klasický e-shop. S nástupem agentic commerce — kde AI asistenti jako ChatGPT nebo Microsoft Copilot mohou sami aktivně nakupovat za zákazníka — vznikla potřeba, aby checkout mohl probíhat přímo v kontextu AI rozhraní bez rušivých přesměrování. Checkout Kit for Web byl představen jako součást Shopify Editions Winter 2026 (kódové jméno Renaissance) a zapadá do širší sady nástrojů zahrnující Catalog API a Checkout MCP.

    V praxi je knihovna stavebním blokem pro vývojáře budující AI kupující agenty nebo konverzační nakupovací zážitky v prohlížeči. Úzce souvisí s Agentic Storefronts — funkcí vystavující Shopify katalog AI kanálům — a s frameworkem Agentic Commerce, který kombinuje Catalog API pro discovery produktů s Checkout MCP pro standardizovanou komunikaci při nákupu.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
    - title: "Agentic Storefronts: nový dedicated admin page"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-storefronts-admin-page/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
