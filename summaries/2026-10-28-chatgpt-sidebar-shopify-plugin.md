---
date: 2026-10-28
title: "ChatGPT sidebar pro Shopify — manage products + view sales z chatu"
title_en: "ChatGPT sidebar for Shopify"
slug: chatgpt-sidebar-shopify-plugin
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Úpravy produktů a cen z postranního panelu v ChatGPT probíhají mimo naše synchronizace z ERP a PIM a mohou přepsat data, která řídíme z jiného zdroje pravdy; zároveň je to příležitost nabídnout merchantům nastavení oprávnění a pravidla pro provoz obchodu přes AI chat."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-agentic", "store-management-via-ai-agents", "shop-mcp-shopping-checkout-any-agent"]
editions_release: fall-2026
tldr: "Shopify v Editions Fall '26 přidává domovskou stránku do postranního panelu ChatGPT: merchant po připnutí vidí tržby, sezení a konverzní poměr a může z chatu přidávat a hledat produkty, bez přepnutí do Shopify adminu. Stránka Editions neuvádí dostupnost ani podporované trhy a změny z ChatGPT mohou obcházet synchronizaci z ERP nebo PIM."
tagy: [chatgpt, agentic, sidebar, admin, plugin]
zdroj_kanal: editions
kontext:
  background: |
    Dosud se Shopify v AI chatech používalo hlavně jako konektor, který merchant zavolal z konverzace: napsal příkaz, agent ho přeložil na operace nad Admin API a vrátil výsledek. Ve Spring '26 Editions Shopify takové konektory vydal pro ChatGPT, Claude a Perplexity a archiv je popisuje v článku o řízení obchodu z AI agentů. Konektor ale vždy čekal na to, až se merchant sám zeptá.

    Sidebar je další krok: Shopify se v ChatGPT dá připnout do postranního panelu a odtud otevřít domovskou stránku, která podle Editions ukazuje tržby, sezení a konverzní poměr a umožňuje přidávat a hledat produkty. Merchant tak má základní provozní přehled po ruce v nástroji, ve kterém už stejně pracuje, a nemusí kvůli kontrole čísel nebo drobné úpravě produktu otevírat Shopify admin. Podle nápovědy Shopify pro plugin pro ChatGPT jde o část sekce o správě obchodu; plugin nenahrazuje admin ani Sidekick.

    Pro agentury a vývojáře, kteří spravují e-shopy s napojením na ERP, PIM nebo jiné zdroje dat, je podstatná jedna věc: další místo, kde se dají měnit produkty, vzniká mimo admin a mimo naše synchronizace. Podle nápovědy plugin pracuje v rozsahu oprávnění, která merchant schválí, a nemůže měnit nastavení tarifu, plateb, daní ani domén, vracet platby nebo rušit objednávky. Zápis do produktů, kolekcí, inventáře a slev ale možný je, pokud merchant udělí přístup pro zápis.

  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Help: Shopify plugin for ChatGPT — managing your store"
      url: "https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-plugin-for-chatgpt#managing-your-store"
    - title: "Shopify Editions Spring '26: Store management with agents"
      url: "https://www.shopify.com/build-with-ai#chat-connectors"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 v tématu Agentic uvádí položku **Pin Shopify to the ChatGPT sidebar**. Merchant si Shopify připne do postranního panelu ChatGPT a odtud otevře domovskou stránku, na které podle Editions uvidí:

- **tržby** (sales),
- **sezení** (sessions),
- **konverzní poměr** (conversion rate),

a může tam **přidávat a hledat produkty**. K položce vede odkaz na nápovědu Shopify k pluginu pro ChatGPT, konkrétně do sekce o správě obchodu.

Co o tom říká nápověda k pluginu (stav v době psaní článku):

- Plugin umí z konverzace v ChatGPT vytvářet a upravovat produkty, hledat v katalogu, měnit stav produktů hromadně (po dávkách do 50 kusů), pracovat s kolekcemi, inventářem a slevami, zjišťovat analytiku a zdrojovat produkty přes Shopify Collective. Objednávky a zákazníky čte pouze pro čtení.
- Rozsah akcí závisí na úrovni přístupu, kterou merchant při instalaci schválí, a na oprávněních jeho staff účtu. Bez přístupu pro zápis plugin data jen čte.
- Plugin nemění živé téma, nastavení tarifu, plateb, daní ani domén a nevrací platby, neruší ani nepotvrzuje platbu objednávek a nespravuje dárkové karty, ani když má přístup pro zápis.
- Plugin nenahrazuje Shopify admin ani Sidekick. Platby, daně, domény a kontrola připravenosti k spuštění se dál dělají v adminu.
- Změny provádí po jedné položce, takže velké dávky se mohou zastavit v půlce a zbytek je potřeba dokončit v adminu.
- Nápověda uvádí, že Shopify nespravuje rozhraní ChatGPT, které provozuje OpenAI. Co přesně se z obchodu do ChatGPT přenáší, nápověda nepopisuje.

Co stránka Editions neuvádí: stav dostupnosti (live nebo preview), podporované trhy, tarify Shopify ani tarify ChatGPT, a také to, zda je sidebar dostupný ve webové i desktopové aplikaci ChatGPT. Předpokládáme obě verze, ale nemáme to potvrzené. Nápověda k pluginu doporučuje pro nastavení desktopový prohlížeč a dostupnost v mobilní aplikaci odkazuje na ChatGPT.

Nezaměňovat s položkou **ChatGPT Ads** ze stejné stránky, která se týká reklamy v ChatGPT a aplikace pro sledování jejího výkonu. Jde o jiný produkt.

## Časová osa

- 2026-06-17 — Spring '26: Shopify spouští connectory pro řízení obchodu z Claude, ChatGPT a Perplexity (viz související článek)
- 2026-10-28 — Editions Fall '26: oznámení domovské stránky Shopify v postranním panelu ChatGPT
- Datum dostupnosti, podporované trhy a rozsah nasazení — **neuvedeno**, ověřit v nápovědě nebo u merchanta v ChatGPT

## Dopad pro nás

**Pro vývojáře:**
Zápisy z ChatGPT jdou přes pluginem schválená oprávnění do Shopify Admin API, takže pro naše napojení vypadají jako jakákoli jiná změna produktu, slevy nebo inventáře. Praktické důsledky, které stojí za ověření na vývojovém obchodě:

- **Drift oproti zdroji pravdy.** Pokud ERP nebo PIM řídí názvy, popisy, ceny nebo sklad, ruční změna z chatu se při příštím běhu synchronizace přepíše, nebo naopak synchronizace přepíše změnu merchanta. Je potřeba mít definované, která pole jsou řízena zvenku, a umět rozpoznat změnu, kterou nezpůsobil náš proces (webhooky na produkty a inventář, porovnání s posledním stavem z ERP).
- **Zamčená pole.** Pole spravovaná synchronizací (například metafieldy, SKU, ceny a sklad) je lepší dokumentovat merchantovi jako určená jen pro čtení v chatu, protože AI asistent o synchronizaci nic neví.
- **Oprávnění pluginu.** Při instalaci merchant schvaluje úroveň přístupu a plugin se řídí oprávněním staff účtu. Doporučujeme ověřit, jaký přístup plugin skutečně žádá, a u obchodů s napojením na ERP zvážit omezení na čtení.
- **Přenos dat do ChatGPT.** Pokud domovská stránka zobrazuje tržby a konverzi uvnitř ChatGPT, obchodní data opouštějí Shopify směrem k OpenAI. Rozsah z dostupných zdrojů není zřejmý a pro obchody s přísnějšími pravidly pro práci s daty (smlouvy, GDPR) je to bod k vyjasnění dříve, než plugin merchant zapne.
- **Limity dávek.** Plugin pracuje po jedné položce a dávky u hromadných operací zastavuje, takže pro hromadné úpravy dál platí naše synchronizace nebo Admin API, ne chat.

**Pro PM / PO:**
Sidebar posouvá ChatGPT z nástroje, kam merchant zajde při ad-hoc dotazu, na trvale otevřený provozní panel. Pro merchanty s menšími týmy je to lákavé, protože tržby, sezení a konverzi mají jedním kliknutím a drobné úpravy produktů zvládnou bez adminu. Pro nás z toho plynou dva kroky:

- **Nabídka:** v rámci podpory nabídnout nastavení pluginu (oprávnění, rozsah přístupu, které údaje a operace jsou vhodné z chatu) a krátká pravidla pro tým merchanta, co se z ChatGPT měnit nemá. Je to přirozené navázání na connectory ze Spring '26.
- **Rizika:** u obchodů s ERP nebo PIM jako zdrojem pravdy domluvit pravidla provozu předem a doplnit je do dokumentace předání, jinak hrozí zbytečné incidenty typu ručně změněná cena přepsaná synchronizací.

Doporučení: u každého obchodu zjistit, zda tým merchanta ChatGPT už používá, ověřit dostupnost sidebaru v jejich zemi a tarifu a teprve potom plugin doporučit. Nalehavost je střední, protože nejde o změnu API ani o deadline, ale o nový způsob, jak se mohou data v obchodě měnit.

## Použití v Integrátoru

Sidebar je nový vstupní bod pro ruční změny produktů a slev mimo naše synchronizace, takže stojí za to ověřit, jak se tyto změny projeví u obchodů se zdrojem pravdy v ERP nebo PIM. Samotné napojení na ChatGPT zatím nepoužíváme.

## ⬅️ Související

🔗 [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-fall-2026-agentic/)
🔗 [Řízení Shopify storu z AI agentů — Claude, ChatGPT, Perplexity](/Shopify_news_magexo/zmena/store-management-via-ai-agents/)
🔗 [Shop MCP — shopping + Shop Pay checkout v libovolném AI agentovi](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/)
