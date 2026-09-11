---
date: 2026-09-08
title: "Meta jako AI channel v adminu — Agentic Storefronts + auto product sharing"
title_en: "Meta is now an AI channel in your admin"
slug: meta-ai-channel-agentic-storefronts
zdroj: https://changelog.shopify.com/posts/meta-is-now-an-ai-channel-in-your-admin
shrnuto_dne: 2026-09-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Meta se nově řadí mezi AI channels v Agentic Storefronts, produkty se sdílí automaticky přes Shopify Catalog, takže při onboardingu klientů je dobré vědět o defaultním chování a nastaveních přístupu."
dotcene_klienty: []
souvisejici: [agentic-storefronts-admin-page, improved-catalog-publishing, blog-facebook-shop-ceske-eshopy]
tldr: "Meta se stala plnohodnotným AI channelem v Agentic Storefronts a produkty se do jejích AI shopping surfaces na Instagramu a Facebooku sdílí automaticky přes Shopify Catalog."
tagy: [meta, ai-channel, agentic-storefronts, catalog, discovery, marketing]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify od začátku roku 2026 postupně buduje takzvané Agentic Storefronts — sadu nástrojů a rozhraní, díky kterým se produkty merchantů dostávají do AI-driven nákupních zážitků (chatboti, AI asistenti, agentní vyhledávání) mimo klasický e-shop. Dřív šlo hlavně o vlastní Shopify plochy (Shop app, Storefront MCP, UCP) a partnerství s velkými AI hráči typu OpenAI či Perplexity. Tento changelog rozšiřuje ekosystém o Meta jako další "AI channel" přímo v administraci.
    Konkrétně to znamená, že Meta se objevuje v seznamu AI channels na dedikované Agentic Storefronts admin stránce (viz samostatný changelog z května 2026). Produkty se do Meta AI surfaces (nákupní zážitky v rámci Instagramu a Facebooku poháněné AI) sdílí automaticky přes Shopify Catalog — merchant tedy nemusí nic ručně nastavovat, aby se produkty objevily. Nastavitelné zůstávají dvě věci: přístup ke Catalogu (jestli se produkty vůbec sdílí) a přístup k přímému checkoutu (jestli Meta umožní dokončit nákup přímo ve svém prostředí, nebo jen odkáže zpět na e-shop).
    Merchant navíc v adminu vidí performance metriky pro Meta jako kanál — kolik prodejů, kliků nebo konverzí přes tento AI channel prošlo, agregovaně vedle ostatních AI channels v Agentic Storefronts dashboardu. Jde o pokračování trendu, kdy Shopify stírá hranici mezi klasickým "sales channel" (aplikace, kterou merchant instaluje) a "AI channel" (surface, kam se produkty distribuují automaticky přes katalogový mechanismus). Pro české merchanty je relevantní hlavně to, že Facebook/Instagram shopping už dnes funguje primárně jako přesměrování na e-shop (viz blog o Facebook Shopu), takže reálný dopad automatického sdílení do Meta AI je zatím spíš o viditelnosti produktů v AI vyhledávání než o novém checkout kanálu.
  zdroje:
    - title: "Shopify: Meta is now an AI channel in your admin"
      url: "https://changelog.shopify.com/posts/meta-is-now-an-ai-channel-in-your-admin"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Meta (Instagram a Facebook) se v adminu nově řadí mezi AI channels v rámci Agentic Storefronts. Dosud šlo o kanály spíš spojené s klasickým "sales channel" konceptem (instalovatelná aplikace pro Facebook/Instagram Shopping); teď Shopify Meta explicitně zařazuje do stejné kategorie jako ostatní AI-driven discovery surfaces.

Klíčová změna je v tom, že produkty z merchantova Shopify Catalogu se do Meta AI shopping surfaces sdílí **automaticky, ve výchozím nastavení**. Merchant nemusí nic aktivně zapínat — sdílení běží by default. Co si merchant může nastavit:

- **Přístup ke Catalogu** — zda se produkty vůbec do Meta sdílí.
- **Přístup k přímému checkoutu** — zda Meta smí nabídnout dokončení nákupu přímo ve svém prostředí, nebo jen odkazuje zpět na e-shop.

V adminu (na Agentic Storefronts stránce) se navíc zobrazují performance metriky za Meta jako kanál, vedle ostatních AI channels.

## Časová osa

- **2026-09-08** — changelog publikován, Meta se objevuje jako AI channel v adminu, automatické sdílení produktů z Catalogu aktivní.

## Dopad pro nás

**Pro vývojáře:** Žádná nová API práce se nevyžaduje — jde o admin-side feature bez nutnosti kódovat proti novému endpointu. Pokud bychom v budoucnu chtěli programově řídit Catalog přístup pro Meta (např. hromadně pro víc klientů), stálo by za to sledovat, jestli Shopify tato nastavení zpřístupní i přes Admin GraphQL API, protože zatím jde o čistě UI-driven nastavení.

**Pro PM / PO:** Při onboardingu nebo auditu klientů se Facebook/Instagram Shopping napojením je dobré vědět, že se produkty do Meta AI surfaces mohou sdílet automaticky, i bez explicitní akce klienta. Stojí za zmínku klientům, kteří chtějí mít pod kontrolou, co se kam publikuje — ať zkontrolují nastavení Catalog a checkout přístupu na Agentic Storefronts stránce v adminu.

## Použití v Integrátoru

Přímo se nás netýká kódově, ale je dobré o defaultním automatickém sdílení vědět při komunikaci s klienty ohledně jejich Meta/Facebook napojení a případných dotazů na to, odkud se produkty v Meta AI zobrazují.
