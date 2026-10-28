---
date: 2026-10-28
title: "Editions Fall '26: Agentic — Shopify jako backend pro nakupování napříč všemi hlavními AI platformami"
slug: editions-fall-2026-agentic
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Agentic kanály jsou nová prodejní a akviziční cesta pro e-shopy, které spravujeme; kvalita produktových dat, compare-at cen a firemních faktů v Shopify se nově promítá přímo do nákupů přes AI agenty a změny z AI chatů mohou obcházet naše synchronizace z ERP a PIM."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-spring-2026-agentic"]
editions_release: fall-2026
tldr: "Téma Agentic Fall '26 (15 položek) dotahuje UCP ze Spring '26: Shop Pay checkout přibývá v dalších AI kanálech (Claude Duet, Grok Bot, Instinct, Muse, Google AI Mode a Gemini) a vznikají connectory pro řízení obchodu z ChatGPT, Claude, Grok, Gemini, Muse a Copilotu. Shopify se tak stává backend infrastrukturou pro agentic shopping napříč hlavními AI platformami."
tagy: [editions, agentic, "fall-2026", ucp, shop-pay, shop-mcp, mcp, ai-agents, shopify-catalog, canvas]
zdroj_kanal: editions
kontext:
  background: |
    Agentic commerce je přístup, kdy zákazník zadá pokyn AI asistentovi a ten sám produkty najde, porovná a koupí. Ve Spring '26 Editions Shopify pro tuto vrstvu představil Universal Commerce Protocol (UCP), otevřený standard složený z Catalog, Cart a Checkout MCP serverů, a Shopify Catalog jako datovou páteř, ze které AI kanály čerpají produkty. Spring se věnoval hlavně tomu, jak se produkty a checkout dostanou k agentům: kdo chce, může nad protokolem postavit vlastní nákupní zážitek.

    Fall '26 s přezdívkou Exponential dělá další krok ve dvou směrech. Prvním je prodej: Shop Pay checkout se objevuje ve více AI kanálech a Shopify podle Editions umožní prodávat i přes Google Search včetně AI Mode a přes aplikaci Gemini. Druhým je řízení obchodu z agentů: pro ChatGPT, Claude, Grok, Gemini, Meta Muse a Microsoft Copilot vznikají connectory, takže merchant spravuje obchod tam, kde už pracuje. Část novinek archiv zachytil dřív samostatně, například Shop MCP z 13. 10., Canvas z 1. 10., compare-at ceny pro agenty z 9. 10. nebo Knowledge base v adminu z 26. 10. Editions je teď skládá do jednoho příběhu. Stránka Editions u položek neuvádí stav dostupnosti, podporované trhy ani tarify, proto je před doporučením konkrétnímu obchodu nutné je ověřit.
  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Add shopping and Shop Pay checkout to any agent with Shop MCP"
      url: "https://shopify.dev/changelog/posts/add-shopping-and-shop-pay-checkout-to-any-agent-with-shop-mcp"
    - title: "Shopify: Compare-at prices now shared to agentic channels"
      url: "https://changelog.shopify.com/posts/compare-at-prices-now-displayed-to-agentic-channels"
    - title: "Shopify: Design a fully bespoke store with Canvas"
      url: "https://changelog.shopify.com/posts/design-a-fully-bespoke-store-with-canvas"
    - title: "Shopify: Knowledge base is now built into your admin"
      url: "https://changelog.shopify.com/posts/knowledge-base-is-now-available-in-your-admin"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem tahle Edition téma je

Téma Agentic ve Fall '26 navazuje na Spring '26, kde Shopify definoval Universal Commerce Protocol (UCP) a Shopify Catalog jako základ pro nakupování přes AI agenty. Teď se z protokolu stává hotová nabídka: Shop Pay checkout běží ve více AI kanálech (Claude Duet, Grok Bot, Instinct, Muse), Shopify umožní prodávat ve Google Search včetně AI Mode i v aplikaci Gemini a pro libovolného agenta existuje Shop skill, přes který najde produkt, doporučí ho a dokončí platbu. Pro merchanta to znamená, že nemusí zvlášť připojovat každého agenta. Produkty, ceny a checkout dodává Shopify a AI platformy jsou jen další prodejní kanály. Právě v tom je strategický posun: Shopify se stává backend infrastrukturou pro agentic shopping napříč všemi hlavními AI platformami, ne doplňkem jedné z nich.

Druhá polovina tématu míří opačným směrem, od agenta do administrace. Pro Microsoft Copilot, Grok, Gemini a Meta Muse přibývají connectory, které umožňují spravovat produkty, objednávky, inventář nebo slevy přímo z chatu, a ChatGPT dostane Shopify v postranním panelu. Do agentů se stěhují i další činnosti: návrh obchodu v Canvasu, import produktů od jiných prodejců přes Shopify Collective, vytvoření digitálního produktu ze souboru nebo rozjetí nového obchodu ještě před registrací. Třetí vrstvou je kvalita dat, ze které agenti čerpají: compare-at ceny, kontrola způsobilosti pro Shopify Catalog a schvalování firemních faktů (policies, FAQ), které agenti o obchodu uvidí.

## Top 3 highlights v tomto tématu

- **Shop Pay checkout ve více AI agentech a Shop skill pro libovolného agenta** — Podle Editions mohou zákazníci nakupovat u značek na Shopify i mimo něj přes Claude Duet, Grok Bot, Instinct a Muse a agenti typu ChatGPT nebo Claude dostanou customizovatelný Shop skill pro hledání, doporučování a platbu přes Shop Pay. **Pro merchanty:** zákazník dokončí nákup přímo v konverzaci bez přesměrování na web, což je přesně ten krok, kde se agentní nákupy dosud nejčastěji ztrácely. **Pro vývojáře:** nejblíž k této položce je Shop MCP z 13. 10. (mcp.shop.com, 17 nástrojů, vyhledávání bez API klíče), které archiv popisuje včetně omezení při spuštění: bez webhooků se stav checkoutu zjišťuje pollingem přes get_checkout a uložené adresy i Shop Pay vyžadují přihlášení zákazníka přes Shop. Pro evropské obchody je důležité i rozšíření buyer consent v Checkout a Cart MCP, přes které kupující udělí nebo odmítne marketingové souhlasy přímo v agentovi. Zda je Shop skill z Editions totéž co Shop MCP, stránka výslovně neříká.
- **Prodej přes Google Search (AI Mode) a Gemini** — Shopify umožní prodávat přes AI povrchy Googlu s checkoutem poháněným Shopify a objednávky spravovat v adminu. Je to pravděpodobně nejširší dosah celého tématu, protože Google Search je pro většinu e-shopů dnes hlavní zdroj návštěv. **Co to znamená:** pro merchanty nový prodejní kanál spravovaný z jednoho místa, pro vývojáře a agentury další důvod hlídat kvalitu produktových dat (názvy, atributy, ceny, dostupnost), protože ta rozhodují o tom, zda a jak se produkt v AI odpovědi objeví. Stránka neuvádí podporované trhy, požadavky ani poplatky, takže pro české a evropské obchody je to první věc k ověření.
- **Shopify admin v každém AI agentovi — connectory pro Copilot, Grok, Gemini, Muse a ChatGPT sidebar** — Správa produktů, objednávek, inventáře a slev se přesouvá do chatu: Copilot funguje vedle Outlooku, Wordu a Excelu v Microsoft 365, Gemini spravuje produkty, objednávky a inventář, Muse produkty, inventář a slevy, Grok umí obchod vytvořit nebo připojit a podle Editions postaví AI týmové kolegy pro provoz. ChatGPT dostane Shopify home v postranním panelu s tržbami, sezeními a konverzním poměrem. Navazuje na Spring '26, kdy connectory dostaly Claude, ChatGPT a Perplexity. **Dopad:** merchanti budou měnit produkty, slevy a sklad mimo admin a mimo naše synchronizace, takže stojí za to dopředu ověřit, jaká oprávnění connectory získávají, a hlídat drift oproti ERP nebo PIM jako zdroji pravdy.

## Všechny položky (15 celkem)

Stránka Editions uvádí Shop Pay v agentech ve dvou položkách (druhá přidává Muse), proto je zde sloučena do jedné. U položek není uveden stav (live / preview), odkazy vedou na související články v archivu.

### Pro merchanty

- **Shop Pay in agents** — Zákazníci nakupují u značek na Shopify i mimo něj přes Claude Duet, Grok Bot, Instinct a Muse; Shopify zdůrazňuje zabezpečení podpořené kartovými sítěmi. Dokončení nákupu probíhá v konverzaci s agentem. [→ související: Shop MCP](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/) · [→ Shop Pay mimo Shopify](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)

- **Sell in Google Search, AI Mode and the Gemini app** — Prodej přes AI povrchy Googlu s checkoutem poháněným Shopify a správou objednávek v adminu. [→ související: Agentic Storefronts v adminu](/Shopify_news_magexo/zmena/agentic-storefronts-admin-page/) · [→ Meta jako AI channel](/Shopify_news_magexo/zmena/meta-ai-channel-agentic-storefronts/)

- **Give AI shopping agents your compare-at price** — Agenti přes Shopify Catalog zobrazí původní cenu a slevu bez další konfigurace. Archiv k tomu uvádí přepínač v nastavení catalog mapping a nezmiňuje jeho výchozí stav, proto doporučujeme zkontrolovat jej u každého obchodu a hlídat, aby compare-at cena odpovídala reálné předchozí ceně. [→ detail](/Shopify_news_magexo/zmena/compare-at-prices-shared-agentic-channels/) · [→ Catalog API list_price](/Shopify_news_magexo/zmena/catalog-api-compare-at-prices-list-price/)

- **See whether your store is eligible for Shopify Catalog** — Kontrola způsobilosti obchodu pro Shopify Catalog včetně návodu, co změnit, aby ji obchod splnil. Samostatný článek zatím nemáme.

- **Your business details in AI channels** — Merchant kontroluje a schvaluje fakta, která agenti o obchodu vidí, včetně policies a FAQ, a dostává návrhy na zlepšení obsahu. Nativní podobu v adminu popisuje Knowledge base (Sales Channels > Agentic), kde se nic nedostane k agentům, dokud to merchant nepublikuje; samostatná appka končí 15. 1. 2027. [→ detail](/Shopify_news_magexo/zmena/knowledge-base-shopify-admin/)

- **Connect your store to Microsoft Copilot** — Správa obchodu vedle Outlooku, Wordu a Excelu v Microsoft 365. Samostatný článek zatím nemáme. [→ související: řízení obchodu z AI agentů](/Shopify_news_magexo/zmena/store-management-via-ai-agents/)

- **Connect your store to Google Gemini** — Správa produktů, objednávek a inventáře z asistenta Gemini. Samostatný článek zatím nemáme.

- **Connect your store to Meta's personal AI agent Muse** — Správa produktů, inventáře a slev v aplikaci Muse. Nezaměňovat s Meta jako AI channelem pro sdílení produktů (viz archiv). [→ související: Meta jako AI channel](/Shopify_news_magexo/zmena/meta-ai-channel-agentic-storefronts/)

- **Create a store or connect one to Grok** — Vytvoření nebo připojení obchodu a jeho správa z chatu; Grok Bot umí podle Editions postavit AI týmové kolegy pro provoz byznysu. Samostatný článek zatím nemáme.

- **Pin Shopify to the ChatGPT sidebar** — Domovská stránka Shopify v postranním panelu ChatGPT ukazuje tržby, sezení a konverzní poměr a umožňuje přidávat a hledat produkty. Samostatný článek zatím nemáme.

- **Design stores with Canvas in AI agents** — Návrh obchodu v Canvasu přímo v agentech jako ChatGPT a Claude. Archiv zná Canvas z 1. 10. včetně omezení první fáze (Theme Store themes, Markets, translations, app blocks); zda platí i pro variantu v agentech, stránka neuvádí. [→ detail Canvas](/Shopify_news_magexo/zmena/shopify-canvas-bespoke-store-design/)

- **Digital products in agents** — Digitální soubor předaný agentovi se promění v produkt v adminu s plněním objednávky, cenou a sdílitelným odkazem. Samostatný článek zatím nemáme.

- **Product sourcing in agents** — Merchant v ChatGPT nebo Claude popíše produkty a importuje je od jiných prodejců přes Shopify Collective. Samostatný článek zatím nemáme.

### Pro vývojáře

- **Shop skill for any agent** — Agenti jako ChatGPT nebo Claude přes customizovatelný skill hledají produkty, doporučují je a dokončí checkout přes Shop Pay. Nejbližší popis je Shop MCP; pro osobní AI agenty existuje starší Shop skill ze Spring '26. [→ detail Shop MCP](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/) · [→ Shop skill pro personal AI agenty](/Shopify_news_magexo/zmena/shop-skill-personal-ai-agents/)

- **Store preview in agents** — Obchod lze začít stavět přes Shopify CLI ještě před registrací a po rozhodnutí prodávat si ho ponechat. Zajímavé pro prototypování a pro agentury, které chtějí ukázat rozpracovaný obchod bez zakládání účtu. Samostatný článek zatím nemáme.

- **Protokolový základ (UCP) — související změny v archivu** — Tyto položky stojí pod celým tématem: [Universal Commerce Protocol](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/) · [Agentic Commerce a stavba agentů](/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/) · [Catalog MCP přechází na UCP](/Shopify_news_magexo/zmena/storefront-catalog-mcp-ucp/) · [Checkout a Cart MCP: buyer consent](/Shopify_news_magexo/zmena/checkout-cart-mcp-ucp-buyer-consent/) · [UCP location search pro retail stores](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/). Pozor na termín: starý Global Catalog REST API přestane 2. 11. 2026 odpovídat a kdo ho ještě volá, musí přejít na Global Catalog MCP. [→ detail sunsetu](/Shopify_news_magexo/zmena/global-catalog-rest-api-sunset-2026-11-02/)

## Co tu ještě nemáme

Následující položky nemají zatím samostatný archivní článek a budou žít jen v tomto přehledu a ve zdroji Editions. Pokud Shopify vydá k některé z nich changelog nebo dokumentaci, doplníme je při běžných týdenních bězích:

- **Sell in Google Search, AI Mode and Gemini app** — největší položka tématu bez vlastního článku; chybí informace o trzích, požadavcích na produktová data a o tom, jak se objednávky z Googlu v adminu značí.
- **Shop Pay v Claude Duet, Grok Bot, Instinct a Muse** — konkrétní podoba integrace (autorizace, souhlas kupujícího, zabezpečení kartovými sítěmi) není z Editions zřejmá.
- **Catalog eligibility check** — nástroj ukazující, proč obchod nesplňuje podmínky Shopify Catalogu; užitečný pro audit obchodů, které se v AI kanálech neobjevují.
- **Connectory pro Microsoft Copilot, Google Gemini a Meta Muse a Grok** — oprávnění, rozsah operací a podporované plány nejsou známé; Spring '26 connectory pro Claude, ChatGPT a Perplexity jsou popsané v samostatném článku.
- **ChatGPT sidebar pro Shopify** — přehled tržeb, sezení a konverze v ChatGPT; chybí detail, jaká data se do ChatGPT přenášejí.
- **Canvas v AI agentech** — otázkou zůstává, zda platí stejná omezení jako u Canvasu v adminu (Markets, překlady, app blocks).
- **Store preview před registrací** — workflow přes Shopify CLI by si zasloužilo technický popis.
- **Digital products in agents** — vznik digitálního produktu ze souboru předaného agentovi, včetně plnění objednávky a sdílitelného odkazu.
- **Product sourcing přes Shopify Collective z chatu** — import produktů od jiných prodejců z ChatGPT nebo Claude; podmínky a dostupnost Collective v dané zemi je nutné ověřit.
- **Business details in AI channels (návrhy na zlepšení obsahu)** — Knowledge base v adminu v archivu máme, ale část popisu z Editions (návrhy na zlepšení obsahu policies a FAQ) v samostatném článku není.

## ⬅️ Zpět na hub

[Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
