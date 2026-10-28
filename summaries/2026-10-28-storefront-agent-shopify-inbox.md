---
date: 2026-10-28
title: "Storefront agent — Shopify Inbox chat s recommendations + checkout + staff handoff"
title_en: "Storefront agent (Shopify Inbox)"
slug: storefront-agent-shopify-inbox
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shopify Inbox je samostatná aplikace a Fall stránka k agentovi neuvádí žádné API ani nastavení pro vývojáře; relevance je v doporučení obchodům a v ověření, jak se chat chová na headless storefrontu, ne v přímém volání z našich synchronizací."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-online", "shopify-inbox-ai-sales-associate", "sign-in-shop-lead-forms"]
editions_release: fall-2026
tldr: "Storefront agent v Shopify Inbox umí zákazníkům nabídnout personalizovaná doporučení, spustit checkout přímo z chatu a předat konverzaci obsluze obchodu; Shopify uvádí, že zákazníci přihlášení přes Shop v Inbox chatech konvertují až 1,5x lépe, ale dostupnost, plán ani technické detaily Fall stránka neuvádí."
tagy: [shopify-inbox, agent, chatbot, recommendations, checkout, storefront]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Inbox je bezplatná chat aplikace pro obchody na Shopify, přes kterou obchodník komunikuje se zákazníky přímo na storefrontu. Dlouho šlo hlavně o podporu (dotazy na produkty, stav objednávky, reklamace). Jarní Edition '26 přidal do Inboxu AI sales associate, který pro zákazníky přihlášené přes Shop generuje personalizovaná doporučení produktů přímo v konverzaci. Tento krok už v archivu máme.

    Fall '26 v tématu Online store uvádí položku nazvanou chytřejší storefront agent. Její znění je krátké: zákazníci mohou dostat personalizovaná doporučení, spustit checkout z chatu a snadno se dostat k obsluze přes Shopify Inbox. K položce patří údaj, že zákazníci přihlášení přes Shop konvertují v Inbox chatech až 1,5x lépe. Stránka u položky neuvádí datum, stav (GA, beta), plán ani cenu, jen odkaz na aplikaci Shopify Inbox. V tématu Retail je navíc poznámka, že zákazníci se Shop účtem jsou rozpoznáni jak v chatu s online agentem, tak u pokladny v prodejně, což ukazuje, že Shopify s Shop identitou počítá napříč kanály.

    Důležité rozlišení: formulace storefront agent a představa, že jde o chatbota nové generace napojeného nativně na katalog a sklad, je náš výklad z kontextu, ne tvrzení Shopify. Stránka nepopisuje, z jakých dat agent čerpá, jak přesně checkout z chatu funguje (zda jde o odkaz na standardní checkout, nebo o dokončení nákupu v konverzaci), ani jak a kdy se konverzace předává člověku. Podobně není uvedeno, zda agent funguje v češtině, polštině a slovenštině a zda ho lze nasadit na headless storefront. Tyto body je nutné ověřit v nápovědě k Inboxu nebo na vývojovém obchodu.
  zdroje:
    - title: "Shopify Editions Fall '26 (Online store, položka storefront agent)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Inbox — chat aplikace pro obchody na Shopify"
      url: "https://www.shopify.com/inbox"
    - title: "Archiv: Shopify Inbox AI sales associate — recommendations pro Shop sign-in zákazníky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-inbox-ai-sales-associate/"
    - title: "Archiv: Editions Fall '26 — Online store"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-online/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Inbox dostává ve Fall '26 rozšířeného storefront agenta. Podle Editions stránky mohou zákazníci v chatu na storefrontu:

- dostat **personalizovaná doporučení** produktů,
- **spustit checkout přímo z chatu**,
- **snadno se dostat k obsluze** obchodu, tedy předat konverzaci člověku.

Shopify k položce uvádí jediný číselný údaj: zákazníci přihlášení přes Shop konvertují v Inbox chatech až 1,5x lépe. Jde o tvrzení výrobce bez uvedené metodiky, takže ho berte jako orientační argument, ne jako garantovaný efekt.

Co je nové oproti jaru: jarní AI sales associate uměl hlavně doporučovat produkty přihlášeným Shop zákazníkům. Fall položka přidává dva kroky nákupní cesty, které v archivu nemáme popsané, tedy zahájení checkoutu z chatu a řízené předání člověku. Chat se tak z doporučovače posouvá k nástroji, který vede zákazníka od dotazu až k objednávce.

Co stránka neříká (a my to neodhadujeme jako fakt):

- datum spuštění, stav (GA, beta) a dostupnost podle plánu nebo země,
- jazyky, které agent zvládá (zejména češtinu, slovenštinu a polštinu),
- zdroj dat agenta (katalog, sklad, nákupní historie) a míru, v jaké čerpá ze skladových zásob,
- technický mechanismus checkoutu z chatu a pravidla předání obsluze,
- jakékoli API, rozšíření nebo konfiguraci pro vývojáře,
- cenu; Inbox byl dosud bezplatný, ale u nové AI vrstvy to Fall stránka nepotvrzuje.

## Časová osa

- **17. 6. 2026** — Spring '26 Edition: AI sales associate v Shopify Inbox s doporučeními pro Shop zákazníky
- **28. 10. 2026** — Fall '26 Edition: chytřejší storefront agent s doporučeními, checkoutem z chatu a předáním obsluze; datum dostupnosti není uvedeno

## Dopad pro nás

**Pro vývojáře:** Na základě dostupných informací jde o spravovanou funkci Shopify bez veřejného API, takže přímý integrační vývoj nehrozí. Praktické body k ověření:

1. **Headless storefronty.** Jarní archivní článek předpokládal, že Inbox lze na headless frontend dostat jako JavaScriptový chat widget. Zda to platí i pro nového agenta včetně checkoutu z chatu, Fall stránka nepotvrzuje. Na vývojovém obchodu otestovat, jak se checkout z chatu chová mimo Liquid theme.
2. **Custom checkout a Functions.** Pokud obchod používá vlastní checkout logiku (Shopify Functions, úpravy checkoutu), ověřit, zda checkout spuštěný z chatu prochází stejnou cestou jako běžný nákup. Je to hypotéza k ověření, nikoli informace ze zdroje.
3. **Souhlasy a soukromí.** Chat, který pracuje s identitou zákazníka přihlášeného přes Shop, zpracovává osobní údaje. Fall stránka právní stránku (GDPR, ePrivacy) neřeší; je dobré mít odpovědi připravené před nasazením u evropských obchodů.
4. **Konflikt s jinými chat nástroji.** U obchodů, které už mají jiný chat nebo AI asistenta (Tidio, Gorgias, vlastní řešení), je potřeba zvážit duplicitní widgety na storefrontu.

**Pro PM / PO:** Střední naléhavost, žádná akce není povinná. Je to nízkonákladová příležitost pro B2C obchody s opakovanými zákazníky a širším katalogem, kde dává smysl cross-sell a kde zákazníci často zůstávají na dotazu před nákupem. Doporučený postup:

- Zjistit, u kterých obchodů je Inbox nainstalovaný a aktivně používaný, a kde ne, nabídnout krátký pilot.
- Argumentovat údajem o až 1,5x vyšší konverzi u přihlášených Shop zákazníků jako orientačním, ne garantovaným výsledkem. Efekt závisí na podílu zákazníků přihlášených přes Shop, který se u českých a středoevropských obchodů může lišit.
- Před slibem obchodu ověřit jazykovou podporu a dostupnost pro konkrétní tarif a region, protože Fall stránka tyto údaje neuvádí.
- U zakázek, kde se řeší AI zákaznická podpora, počítat s tím, že nativní agent může část požadavků na vlastní chatbot nahradit. Definovat, kdy se konverzace předává člověku (reklamace, B2B dotazy, komplikované objednávky).

## Použití v Integrátoru

Inbox je samostatná aplikace bez API, které bychom v synchronizacích volali, takže se přímo nemění nic; relevance je v doporučení obchodům a v ověření chování chatu na headless storefrontu.
