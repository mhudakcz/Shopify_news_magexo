---
date: 2026-05-11
title: "Agentic Storefronts: nový dedicated admin page"
title_en: "A new home for Agentic Storefronts in your admin"
slug: agentic-storefronts-admin-page
zdroj: https://changelog.shopify.com/posts/a-new-home-for-agentic-storefronts-in-your-admin
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-12

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin UI dashboard pro Agentic Storefronts. Naše integrace přímo neřeší AI agent storefront performance."
dotcene_klienty: []
souvisejici: [agentic-commerce-build-commerce-agents, shopify-catalog-for-all]

kontext:
  background: |
    Agentic Storefronts je kanál distribuce produktů, který zpřístupňuje zboží merchantů přímo uvnitř konverzačních AI platforem — zákazník tak může objevit a koupit produkt bez návštěvy e-shopu, přímo v chatovacím rozhraní jako ChatGPT, Microsoft Copilot nebo Perplexity. Shopify zajišťuje propojení automaticky skrze svůj Catalog, merchantovi stačí mít data v pořádku.

    Tato funkce je součástí širší strategie Agentic Commerce, kterou Shopify prezentoval v rámci Editions Winter 2026. Technickým základem je Shopify Catalog MCP server (v dubnu 2026 migrovaný na protokol UCP — Unified Commerce Protocol), který AI agentům poskytuje živá produktová data včetně cen, dostupnosti a variant. Cílem je replikovat úlohu klasického vyhledávače, ale v prostředí AI konverzace.

    Z pohledu merchantů jde o nový výkonnostní kanál srovnatelný s organickým vyhledáváním: viditelnost závisí na kvalitě produktových dat (popisy, atributy, obrázky). Nový admin dashboard centralizuje monitoring tohoto kanálu na jednom místě. Doplňkovými nástroji ekosystému jsou soubory `/llms.txt` a `/agents.md`, které merchantům umožňují řídit, jak AI agenti interpretují jejich obchod.

  zdroje:
    - title: "A new home for Agentic Storefronts in your admin"
      url: "https://changelog.shopify.com/posts/a-new-home-for-agentic-storefronts-in-your-admin"
    - title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
    - title: "Customizable /llms.txt a /agents.md v theme editoru"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-llms-txt-agents-md/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Agentic Storefronts (přístupnost produktů pro AI kanály jako ChatGPT, Perplexity) má nyní dedikovanou admin stránku — performance tracking, query rankings, doporučení na vylepšení dat."
tagy: [agentic-commerce, ai, storefront, dashboard, admin]
---

## Co se mění
**Agentic Storefronts** — feature, která vystavuje obchod AI kanálům (ChatGPT, Perplexity, Copilot atd.) — má v Adminu nový dedikovaný dashboard:
- **Product accessibility** pro AI channels
- **Performance tracking** — kdy/kde se produkty zobrazí v AI rozhovorech
- **Query rankings** — na jaké dotazy klient ranknul
- **Data improvement recommendations** — co doplnit do produktových popisků, aby AI lépe rozuměl

## Dopad pro nás
**Pro PM / PO:**
Pokud klient zvažuje AI exposure (typicky e-shop, kde end-customer používá ChatGPT k nákupu), je to nově measurable. Můžeme nabídnout pomoc s optimizací produktových dat pro AI discovery.

## Použití v Integrátoru
**Nepoužíváme** — Admin dashboard feature.

## Související
- [Agentic Commerce framework](../zmena/agentic-commerce-build-commerce-agents/)
- [Shopify Catalog for All](../zmena/shopify-catalog-for-all/)
