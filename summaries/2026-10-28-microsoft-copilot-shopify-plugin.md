---
date: 2026-10-28
title: "Microsoft Copilot plugin — spravuj Shopify vedle Outlook/Word/Excel"
title_en: "Microsoft Copilot plugin for Shopify"
slug: microsoft-copilot-shopify-plugin
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Obchody s Microsoft 365 stackem budou moci měnit produkty, ceny a sklad z Copilota mimo Shopify admin i mimo naše synchronizace z ERP a PIM, takže má smysl dopředu ověřit rozsah oprávnění a hlídat drift dat."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-agentic", "store-management-via-ai-agents", "shop-mcp-shopping-checkout-any-agent"]
editions_release: fall-2026
tldr: "Fall '26 Editions oznamuje propojení obchodu s Microsoft Copilotem, takže merchant spravuje obchod vedle Outlooku, Wordu a Excelu v Microsoft 365. Stránka Editions neuvádí dostupnost, plány, trhy ani rozsah oprávnění, proto je před slibem nutné ověřit help doc."
tagy: [microsoft-copilot, "m365", agentic, plugin, admin]
zdroj_kanal: editions
kontext:
  background: |
    Správa obchodu přes AI asistenty je u Shopify směr, který se postupně rozšiřuje na další platformy. Ve Spring '26 Editions dostali connectory pro řízení obchodu Claude, ChatGPT a Perplexity: merchant v chatu zadá pokyn přirozeným jazykem a asistent provede operaci v Shopify adminu v rámci oprávnění, která merchant udělil. Fall '26 (Exponential) přidává další asistenty. V tématu Agentic jsou connectory pro Microsoft Copilot, Google Gemini, Meta Muse a Grok a ChatGPT dostane Shopify v postranním panelu.

    Položka o Copilotu je mezi nimi specifická tím, že míří do kancelářského prostředí Microsoft 365. Podle Editions merchant připojí obchod ke Copilotu a spravuje své podnikání vedle Outlooku, Wordu a Excelu. Právě tam se běžně odehrává část provozu: komunikace s dodavateli a zákazníky, cenové listy, objednávkové tabulky a texty produktů. Pro firmy, které na Microsoft 365 stojí, je to přirozenější místo než samostatné okno admina nebo další chatovací aplikace.

    Pozor na záměnu se Spring '26. Tehdy Shopify oznámil nakupování přes Shop Pay přímo v Microsoft Copilotu, což je zákaznická strana: kupující nakupuje u obchodu. Tato novinka míří opačným směrem, na stranu merchanta, který obchod provozuje. Stránka Editions u položky uvádí jen jednu větu a odkaz na help doc. Stav dostupnosti, podporované trhy a tarify, rozsah operací ani způsob autorizace neuvádí, proto vše nad rámec té jedné věty v tomto článku označujeme jako předpoklad.
  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Spring '26: Store management with agents"
      url: "https://www.shopify.com/build-with-ai#chat-connectors"
    - title: "Shopify: Add shopping and Shop Pay checkout to any agent with Shop MCP"
      url: "https://shopify.dev/changelog/posts/add-shopping-and-shop-pay-checkout-to-any-agent-with-shop-mcp"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v tématu Agentic na Editions Fall '26 uvádí položku Connect your store to Microsoft Copilot. Doslovný smysl je, že merchant může propojit obchod s Microsoft Copilotem a spravovat své podnikání vedle Microsoft 365 aplikací Outlook, Word a Excel. Stránka odkazuje na help doc, jehož obsah jsme v době psaní neviděli.

Co z oficiálního textu víme:

- **Kam se obchod připojuje:** do Microsoft Copilotu v prostředí Microsoft 365, tedy tam, kde merchant už pracuje s e-maily, dokumenty a tabulkami.
- **K čemu:** správa obchodu (manage your business). Konkrétní seznam operací stránka neuvádí.

Co stránka neříká:

- **Dostupnost a tarify:** není uvedeno, zda je funkce live, v preview nebo teprve přichází, ani na jakých plánech Shopify funguje.
- **Trhy a jazyky:** není uvedeno, zda funguje pro české a evropské obchody a zda Copilot rozumí pokynům v češtině.
- **Oprávnění:** není uvedeno, jaké scope connector získává, zda lze práva omezit po jednotlivých oblastech a jak se přístup odvolává.
- **Technická forma:** z textu nepoznáme, zda jde o stejný typ MCP connectoru jako u Claude a ChatGPT ze Spring '26, nebo o jiný mechanismus. Označení plugin v zadání je naše zkratka, Editions mluví o připojení obchodu.

**Předpoklad k ověření:** Gemini a Muse connectory mají podle Editions spravovat produkty, objednávky, inventář a slevy. Je rozumné čekat, že Copilot nabídne podobný rozsah, ale oficiálně to potvrzené není.

Možné scénáře využití v Microsoft 365 jsou naše úvaha, ne dokumentovaná funkce: porovnat cenový list od dodavatele v Excelu s cenami v obchodu, připravit popisy produktů ve Wordu a přenést je do Shopify nebo si nechat Copilotem shrnout objednávky a výjimky při práci v Outlooku. Zda tohle všechno konkrétně půjde, ukáže až help doc nebo vlastní test.

Nezaměňovat s tím, že Copilot už od Spring '26 slouží i jako nákupní kanál s Shop Pay checkoutem. Tam jde o zákazníky obchodu, tady o merchanta.

## Časová osa

- 2026-06-17 — Editions Spring '26: connectory pro řízení obchodu z Claude, ChatGPT a Perplexity; v rámci stejného releasu také nákup přes Shop Pay v Copilotu (zákaznická strana)
- 2026-10-28 — Editions Fall '26: oznámeno připojení obchodu k Microsoft Copilotu v tématu Agentic, stav dostupnosti neuveden
- Datum spuštění, rollout po zemích a tarify: neuvedeno, ověřit v help docu a ve vlastním adminu

## Dopad pro nás

**Pro vývojáře:**
Počítejme s tím, že další cesta, jak změnit produkt, cenu nebo sklad, vznikne mimo admin a mimo naše synchronizace. U obchodů, kde je zdrojem pravdy ERP nebo PIM, to znamená riziko, že ruční změna z Copilota bude při příštím běhu synchronizace přepsána, nebo naopak přepíše hodnoty, které synchronizace spravuje. Praktické kroky: po zveřejnění help docu ověřit, jaká oprávnění connector žádá a zda jde omezit na čtení, zjistit, jak se změny z Copilota značí v adminu a v logu změn (zda jako akce uživatele nebo aplikace), a v synchronizačních procesech zkontrolovat, že reagují na webhooky o změně produktů a skladu, nejen na vlastní plánované běhy. Rozsah API se v Editions neuvádí, proto zatím žádná změna kódu není potřeba.

**Pro PM / PO:**
Přirozeným adresátem jsou merchanti s Microsoft 365 stackem, tedy spíš větší firmy, B2B obchody a prodejci s kancelářskými procesy kolem dodavatelů a velkoobchodních zákazníků. Šance je v nabídce poradenství kolem governance: kdo smí obchod ke Copilotu připojit, jaká práva mu dát a jak hlídat změny dat vedle ERP nebo PIM. Doporučený postup je nic neslibovat, dokud nepotvrdíme dostupnost pro český trh, tarif a oprávnění. Pak lze zvážit krátký pilot na jednom obchodu s M365 a výsledek použít jako podklad pro nabídku. Urgence je střední: není uveden termín ani povinná migrace, jde o novou příležitost a o riziko driftu dat, ne o změnu s pevným datem.

## Použití v Integrátoru

Zatím jen sledujeme: pokud obchod připojí Copilot, mohou změny produktů, cen a skladu vznikat mimo naše synchronizace z ERP a PIM, takže je třeba ověřit rozsah oprávnění a hlídat drift dat. Samostatný článek o stejném principu pro Claude, ChatGPT a Perplexity už archiv má.

## ⬅️ Související

🔗 [Editions Fall '26 hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-fall-2026-agentic/)
🔗 [Řízení Shopify storu z AI agentů — Claude, ChatGPT, Perplexity](/Shopify_news_magexo/zmena/store-management-via-ai-agents/)
🔗 [Shop MCP: nakupování a Shop Pay checkout v libovolném agentovi](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/)
