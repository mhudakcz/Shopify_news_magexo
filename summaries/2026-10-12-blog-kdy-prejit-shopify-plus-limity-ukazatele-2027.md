---
date: 2026-10-12
title: "Kdy přejít na Shopify Plus — limity a ukazatele pro 2027"
slug: blog-kdy-prejit-shopify-plus-limity-ukazatele-2027
zdroj: https://www.shopify.com/cz/blog/shopify-plus
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Plus odemyká vyšší API limity a Checkout Extensibility, takže merchant po přechodu na Plus mění podmínky, za kterých naše integrace běží (throughput, checkout logika, multi-store)."
dotcene_klienty: []
souvisejici: [b2b-for-all-merchants, blog-co-je-gmv-vypocet-2027, shopify-scripts-deprecated-june-2026]
tldr: "Shopify Plus dává smysl zhruba od 1,5 mil. Kč online tržeb měsíčně, ale rozhodují i provozní signály — API limity, customizace checkoutu, B2B a multi-store — a platformní poplatek začíná na 2 100 EUR měsíčně."
tagy: [shopify-plus, upgrade, enterprise, b2b, scale, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Shopify Plus je enterprise tarif Shopify určený pro rychle rostoucí značky a větší obchodníky. Na rozdíl od standardních plánů (Basic, Grow, Advanced) přidává vyšší API limity, plnou Checkout Extensibility včetně Shopify Functions, administraci organizace pro více obchodů, rozšířené B2B nástroje, prioritní technickou podporu 24/7 a přístup k beta programům. Cena je tvořena platformním poplatkem, který se u větších objemů může změnit na poplatek odvozený od tržeb.

    Článek na českém blogu Shopify shrnuje, kdy má přechod smysl. Orientační práh uvádí na úrovni zhruba 1,5 milionu Kč online tržeb měsíčně (v textu se objevuje i řádová hodnota kolem 20 milionů Kč ročně, proto doporučujeme přesné číslo ověřit u obchodního zástupce Shopify). Zároveň zdůrazňuje, že nejde o tvrdý limit — rozhodují provozní signály: omezené možnosti úprav pokladny, složité řízení více obchodů, potřeba vyšší propustnosti API pro integrace s PIM, ERP, OMS, CRM, 3PL a WMS a komplexnější B2B procesy. Před rozhodnutím se doporučuje spočítat úspory na transakčních poplatcích a zvážit plány na automatizaci.

    Kontext pro rok 2027: Shopify Scripts přestaly fungovat v červnu 2026, takže customizace checkoutu na Plus stojí výhradně na Checkout Extensibility a Shopify Functions. Zároveň se od roku 2026 nativní B2B funkce otevřely i nižším plánům, takže samotné B2B už nemusí být dostatečným důvodem pro Plus — silnějším argumentem je kombinace API throughput, checkout logiky, multi-store organizace a podpory. Článek neobsahuje srovnání cen s plánem Advanced, ceny nižších plánů je proto nutné dohledat na oficiální stránce s ceníkem.
  zdroje:
    - title: "Shopify: Kdy přejít na Shopify Plus — limity a ukazatele pro 2027"
      url: "https://www.shopify.com/cz/blog/shopify-plus"
    - title: "Shopify zpřístupňuje B2B features všem plánům (nejen Plus)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
    - title: "Shopify Scripts budou deprecated 30. 6. 2026"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-scripts-deprecated-june-2026/"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je
Edukační článek Shopify o tom, kdy a proč přejít z nižšího plánu na Shopify Plus. Vedle orientačního prahu tržeb (zhruba 1,5 mil. Kč měsíčně) rozebírá konkrétní ukazatele podle oblastí:

- **API** — limity volání až o 500 % vyšší než u standardních plánů; po úvodním ověření lze zdvojnásobit limit pro soukromé i veřejné aplikace a vyšší datový tok lze vyžádat u podpory. Relevantní hlavně pro velké synchronizace katalogu, skladů a objednávek.
- **Checkout** — Checkout Extensibility bez kódu, UI extensions a Shopify Functions pro vlastní logiku slev, dopravy a dárků zdarma. Článek tyto možnosti označuje jako dostupné pouze v Plus.
- **B2B** — velkoobchod i maloobchod z jedné platformy: ceníky na míru, specifické katalogy, upravené platební podmínky, opakování objednávek a samoobslužný B2B portál.
- **Více obchodů** — administrace organizace (správa uživatelů, vytváření obchodů, centralizovaná analytika), jedna společná faktura a až devět rozšiřujících obchodů zdarma pro lokalizaci (jazyky, obsah, měny). Jedna smlouva Plus ale pokrývá jen jednu značku; další značka vyžaduje vlastní smlouvu.
- **Podpora a nástroje** — prioritní technická podpora 24/7, předčasný přístup k funkcím, Launchpad pro plánování kampaní, Shopify Audiences, Gift Card API a User API.

**Ceny:** platformní poplatek začíná od 2 100 EUR měsíčně (cca 51 130 Kč) při tříleté smlouvě, resp. od 2 300 EUR měsíčně (cca 56 000 Kč) při roční smlouvě. Větší nebo složitější provozy mohou přejít na variabilní poplatek odvozený od tržeb; přesné podmínky řeší obchodní zástupce. Shopify za samotný přechod neúčtuje poplatek, náklady na případnou migraci nese obchodník. Paušální sazby a Shopify Payments mohou snížit transakční náklady, což je potřeba započítat do výpočtu návratnosti.

**Migrace:** data a aplikace se přenášejí bez nového budování obchodu, ale starší úpravy pokladny a aplikace postavené na zastaralých mechanismech bude nutné přepracovat přes Checkout Extensibility nebo nativní B2B nástroje. Pro každodenní správu vývojář nutný není, pro vlastní checkout aplikace a unikátní vzhled ano.

Poznámka k datům: článek neuvádí ceny ani parametry plánu Advanced, takže přímé cenové srovnání Advanced vs. Plus z něj nelze odvodit. Konkrétní práh tržeb je navíc v textu formulován nejednotně (měsíční vs. roční hodnota), proto ho berte jako orientační.

## Pro koho je to relevantní
**Obchodní a presales tým:** užitečný podklad pro konzultace s merchanty, kteří narážejí na limity stávajícího plánu. Poskytuje strukturu rozhodování — tržby, API throughput, potřeba customizace checkoutu, multi-store a B2B — a konkrétní cenový rámec platformního poplatku. Hodí se do discovery hovorů a při přípravě nabídek, kde je třeba obhájit nebo naopak vyvrátit upgrade na Plus.

**Vývojáři a architekti integrací:** přechod na Plus mění provozní podmínky integrací — vyšší rate limity umožňují častější synchronizace a větší dávky dat, ale zároveň je potřeba počítat s tím, že starší checkout customizace musí běžet na Checkout Extensibility a Shopify Functions (Shopify Scripts už nefungují). U multi-store organizací je nutné počítat s více obchody pod jednou organizací a se správou přístupů přes User API.

**Product owneři a PM:** přínosné při plánování roadmapy merchantů na rok 2027. Pokud merchant roste, stojí za to včas vyhodnotit, zda ho spíš než B2B funkce (dnes dostupné i na nižších plánech) k upgradu tlačí API propustnost, checkout logika nebo rozšíření na další trhy. Nejde o změnu s technickým termínem ani breaking change, proto má článek nízkou naléhavost a slouží jako referenční materiál.
