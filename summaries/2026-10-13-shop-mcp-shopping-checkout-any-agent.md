---
date: 2026-10-13
title: "Shop MCP — přidej shopping + Shop Pay checkout do libovolného AI agenta"
title_en: "Add shopping and Shop Pay checkout to any agent with Shop MCP"
slug: shop-mcp-shopping-checkout-any-agent
zdroj: https://shopify.dev/changelog/posts/add-shopping-and-shop-pay-checkout-to-any-agent-with-shop-mcp
shrnuto_dne: 2026-10-14
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shop MCP je nový nástroj pro AI agenty nad Shopify Catalogem a Shop Pay; v našich modulech jej zatím nepoužíváme, ale může se stát základem pro klientské AI asistenty s nákupním flow."
dotcene_klienty: []
souvisejici: [shopify-catalog-for-all, storefronts-ucp-2026-08-25-support, agentic-commerce-build-commerce-agents]
tldr: "Shopify spustil Shop MCP (mcp.shop.com): jedno MCP připojení, přes které libovolný AI agent hledá v Shopify Catalogu, skládá košík a dokončí platbu přes Shop Pay."
tagy: [shop-mcp, mcp, agentic-commerce, shop-pay, checkout, ai-agents, tools]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Model Context Protocol (MCP) je otevřený standard, kterým AI agenti (Claude, ChatGPT, vlastní LLM aplikace) volají strukturované nástroje externích systémů. Agentic commerce je přístup, kdy zákazník zadá pokyn AI asistentovi a ten sám produkty najde, porovná a koupí. Shopify tuto vrstvu buduje postupně — nejdřív Catalog API a Checkout MCP, později sjednocení komunikace pod protokolem UCP (Universal Commerce Protocol), který nyní podporují i samotné storefronty.

    Slabým místem byl dosud poslední krok. Agent uměl produkt najít, ale pro zaplacení musel zákazníka přesměrovat na web obchodu, kde se řada lidí v nákupu přestala. Shop MCP tento problém řeší tím, že dává agentovi jedno hotové připojení pokrývající vyhledávání, košík, přihlášení přes Shop i samotný checkout se Shop Pay. Přihlášený zákazník tak může zaplatit uloženými údaji přímo v konverzaci s agentem.

    Pro vývojáře je zásadní, že jde o balíček připravený k okamžitému použití: server běží na adrese mcp.shop.com, vyhledávání funguje bez API klíče a vyzkoušet jej lze i z příkazové řádky přes CLI balíček @shopify/shop. Existující integrace nad Catalog API zůstávají beze změny. Objednávky vytvořené přes agenta se v administraci obchodu objeví jako každá jiná objednávka.

  zdroje:
    - title: "Shopify: Add shopping and Shop Pay checkout to any agent with Shop MCP"
      url: "https://shopify.dev/changelog/posts/add-shopping-and-shop-pay-checkout-to-any-agent-with-shop-mcp"
    - title: "Shop MCP — dokumentace"
      url: "https://shop.dev/docs/"
    - title: "Global Catalog MCP — Shopify dokumentace"
      url: "https://shopify.dev/docs/agents/catalog/global-catalog"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify spustil **Shop MCP** — jediné MCP připojení, přes které může libovolný agent nebo aplikace podporující MCP (např. Claude, ChatGPT nebo vlastní LLM kód) vyhledávat v **Shopify Catalogu** (přes miliardu produktů), skládat košík a dokončit platbu přes **Shop Pay**. Server běží na `https://mcp.shop.com`, popis schopností pro agenty (skill) je na `https://mcp.shop.com/skill.md`.

Celkem je k dispozici **17 nástrojů**, rozdělených podle toho, co agent dělá:

- **Vyhledávání a detail produktu** — `search_catalog`, `lookup_catalog`, `get_product`. Search nevyžaduje API klíč.
- **Přihlášení přes Shop** — jedno přihlášení umožní, aby vyhledávání respektovalo zákazníkovy uložené velikosti a preference.
- **Košík a checkout na Shopify obchodech** — agent sestaví košík a vytvoří checkout u obchodu, který produkt prodává. Funguje i bez přihlášení; přihlášený zákazník navíc využije uložené adresy a Shop Pay. Agent platbu finalizuje voláním `complete_checkout` až poté, co zákazník potvrdí celkovou částku a platební metodu.
- **Checkout na ne-Shopify obchodech** — zákazník nákup schválí v aplikaci Shop a agent dostane jednorázové údaje o kartě, kterými zaplatí na vlastním checkoutu daného obchodu.
- **Objednávky** — `search_orders` najde objednávky a tracking přihlášeného zákazníka.

Zapojení má čtyři kroky:
1. **Vyzkoušet CLI** — `npm install -g @shopify/shop`, poté `shop search "<dotaz>"` (výsledek ukáže obchod, cenu a skladovost).
2. **Připojit agenta** — nasměrovat coding agenta na skill.md, nebo přidat `https://mcp.shop.com` jako MCP server do konfigurace agenta.
3. **Zapnout Shop Pay** — zákazník se přihlásí přes Shop. MCP klienti jako Claude a ChatGPT přihlášení zvládnou sami, vlastní kód použije device flow.
4. **Otestovat nákup** — úspěch znamená checkout vrácený se `status: completed` a objektem `order`.

Volitelně lze z Shopify Dev Dashboardu získat API klíč pro vyšší rate limity; vyhledávání funguje i bez přihlašovacích údajů.

## Časová osa
- **2026-10-13** — Shop MCP spuštěn a dostupný (post na dev changelogu, štítek New, plocha Tools, bez vázání na verzi API)
- **Při spuštění** — webhooky nejsou k dispozici; stav checkoutu se sleduje pollingem přes `get_checkout`

## Dopad pro nás
**Pro vývojáře:**
Máme nový oficiální a velmi nízkoprahový způsob, jak dát AI agentovi nákupní schopnosti, aniž bychom skládali vlastní vrstvu nad Catalog API a Checkout MCP. Pro prototyp stačí přidat `https://mcp.shop.com` do konfigurace agenta. Pozor na omezení: bez webhooků je nutný polling `get_checkout`, a uložené adresy, Shop Pay i vyhledání objednávek vyžadují přihlášení zákazníka přes Shop. Kdo dnes volá Catalog API přímo, nemusí nic měnit.

**Pro PM / PO:**
Je to nová příležitost pro klienty, kteří uvažují o AI asistentovi nebo o prodeji v AI chatech. Zásadní obchodní argument: zákazník už nemusí opouštět konverzaci, aby zaplatil, což by mělo snížit odpad v nákupu oproti přesměrování na web. Objednávky z agentů končí v Shopify administraci jako běžné objednávky, takže se zpracovávají stávajícími procesy. U zakázek s AI tématem stojí za to tuto možnost zmínit a ověřit, zda klient chce být dohledatelný v Shopify Catalogu.

## Použití v Integrátoru
**Zatím nepoužíváme** — Shop MCP je nový a žádný náš modul jej nevolá. Kandidát na budoucí využití, pokud budeme stavět klientské AI asistenty s nákupním flow.

## Rizika a edge cases
- Bez webhooků při spuštění je třeba počítat s pollingem a s jeho dopadem na rate limity; pro vyšší limity je doporučen API klíč z Dev Dashboardu.
- Checkout na ne-Shopify obchodech vždy vyžaduje předchozí schválení zákazníkem v Shopu a platí se jednorázovými údaji o kartě na checkoutu cizího obchodu.
- Finalizace platby (`complete_checkout`) smí proběhnout až po potvrzení celkové částky a platební metody zákazníkem — agent nesmí potvrzení přeskočit.
