---
date: 2026-11-11
title: "Storefront MCP policies+FAQs tool DEPRECATED — nahrazeno UCP MCP Ask tool"
title_en: "Storefront MCP policies and FAQs tool deprecated in favor of UCP MCP Ask"
slug: storefront-mcp-policies-faqs-deprecated-ucp-ask
zdroj: https://shopify.dev/changelog/posts/storefront-mcp-policies-and-faqs-tool-is-being-deprecated-in-favor-of-ucp-mcp-ask-tool
shrnuto_dne: 2026-11-16
kategorie: [breaking]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud někde využíváme Storefront MCP pro dotazy na politiky a FAQ obchodu, je nutné přejít na nový nástroj do 15. 1. 2027."
dotcene_klienty: []
souvisejici: [ucp-ask-endpoint-business-facts, storefront-mcp-cart-tools-deprecated-ucp, editions-fall-2026-agentic]
tldr: "Nástroj search_shop_policies_and_faqs ve Storefront MCP je deprecated; nahrazuje ho ask_business v UCP MCP a migrovat je třeba do 15. ledna 2027."
tagy: [mcp, storefront-mcp, ucp, deprecation, policies, faqs, agentic]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Storefront MCP server (https://{shop}.myshopify.com/api/mcp) nabízel nástroj search_shop_policies_and_faqs, který agentům vracel informace o politikách a FAQ obchodu. Shopify jej nyní označilo za deprecated.

    Náhradou je nástroj ask_business v UCP MCP, který implementuje capability dev.ucp.common.ask na endpointu https://{shop-domain}/api/ucp/mcp. Na rozdíl od starého nástroje nevrací surová data ani plné texty politik, ale hotovou textovou odpověď na dotaz kupujícího, opřenou o fakta o obchodu, která merchant publikoval.

    Jde o další krok v postupném přesunu agentních funkcí ze Storefront MCP do UCP, podobně jako dříve u nástrojů pro košík.
  zdroje:
    - title: "Shopify: Storefront MCP policies and FAQs tool deprecated in favor of UCP MCP Ask"
      url: "https://shopify.dev/changelog/posts/storefront-mcp-policies-and-faqs-tool-is-being-deprecated-in-favor-of-ucp-mcp-ask-tool"
    - title: "Shopify: Ask MCP documentation"
      url: "https://shopify.dev/docs/agents/ask"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Nástroj `search_shop_policies_and_faqs` na Storefront MCP serveru je deprecated. Nahrazuje ho `ask_business` v UCP MCP (`https://{shop-domain}/api/ucp/mcp`), který odpovídá na dotazy kupujících o politikách a službách obchodu.

Migrace vyžaduje několik úprav: volání se přepne na UCP endpoint, každý požadavek musí obsahovat objekt `meta` s `ucp-agent.profile` (profil agenta musí deklarovat `dev.ucp.common.ask`), dotaz kupujícího se posílá v `ask.query` a volitelný kontext (země, jazyk) v `ask.context`. Odpověď se čte z `result.structuredContent.answer.plain` a jde o napsanou odpověď, ne o surová fakta nebo plné znění politik. Dostupnost nástroje u konkrétního obchodu ověříte přes `tools/list`.

## Časová osa

- 2026-11-11: oznámení deprecace
- 2027-01-15: termín migrace; starý nástroj je dostupný do tohoto data
- Datum definitivního odstranění po tomto termínu Shopify neuvádí

## Dopad pro nás

**Pro vývojáře:** Je třeba najít případná volání `search_shop_policies_and_faqs`, přepsat je na `ask_business`, doplnit `meta` s agent profilem a upravit parsování odpovědi na hotový text místo surových dat.

**Pro PM / PO:** Termín je 15. ledna 2027. Pokud nějaká integrace či agentní řešení starý nástroj používá, zařaďte migraci do plánu; jinak se nás změna netýká.

## Použití v Integrátoru

Přímé využití Storefront MCP pro dotazy na politiky a FAQ zatím není potvrzeno; stačí ověřit, zda se tento nástroj někde nevolá.
