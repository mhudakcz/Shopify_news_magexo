---
date: 2026-06-17
title: "Visualized markets graph — vizuální přehled Shopify Markets setupu"
title_en: "Visualized markets graph — clearer view of Markets setup"
slug: shopify-markets-graph-view
zdroj: https://help.shopify.com/manual/markets/graph-view
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Graph view je admin UX feature — při onboardingu klientů s komplexním multi-market setupem ho lze využít jako diagnostický nástroj pro přehled nastavení."
dotcene_klienty: []
souvisejici: ["customize-themes-per-market", "customize-checkout-accounts-by-market"]
editions_release: spring-2026
kontext:
  background: |
    Shopify Markets je systém pro správu mezinárodního prodeje — každý market reprezentuje jeden nebo více regionů (zemí) s vlastní měnou, jazykem, katalogem, cenovými pravidly a checkout konfigurací. Jeden obchod může obsluhovat desítky trhů, přičemž každý může mít vlastní nastavení discountů, business entity, daní i tématu storefront.

    S rostoucí adopcí Markets a přidáváním per-market vrstev (theme customizace, checkout per market, customer accounts per market, market discounts, katalogy, submarkets) se stala celková konfigurace nepřehlednou. Merchant se při správě většího počtu markets musel pohybovat mezi mnoha stránkami adminu, aniž by měl ucelený pohled na to, co se kde dědí a kde je nastavení přebito lokální hodnotou. Tato fragmentace vedla k chybám v konfiguraci a zbytečnému ladění problémů.

    Graph view přichází jako vizualizační vrstva nad celou hierarchií Markets — zobrazuje markets a jejich submarkets jako propojené uzly v interaktivním diagramu. Každý uzel nese klíčové údaje: přiřazené země, aktivní jazyky a doménu, počet produktů a měnu, discounty, business entity, checkout konfiguraci a nastavení daní. Linie mezi uzly znázorňují vztahy rodič–submarket a umožňují sledovat, odkud se nastavení dědí. Hover nad konkrétním nastavením vizuálně zvýrazní, zda se používá výchozí hodnota z parent marketu, nebo lokální přepsání.

    Funkce je dostupná přímo na stránce Markets v Shopify adminu přes přepínač Graph view. Součástí je vyhledávání pro rychlé nalezení konkrétního marketu v rozsáhlých hierarchiích a integrovaný Sidekick s předpřipravenými prompty pro dotazy na konfiguraci přímo z grafu. Pro Online Store markets je navíc dostupný checkout preview — náhled zákaznické cesty včetně košíku, dopravy a aplikovaných slev.
  zdroje:
    - title: "Shopify Editions Spring '26: Visualized markets graph — clearer view of Markets setup"
      url: "https://help.shopify.com/manual/markets/graph-view"
    - title: "Shopify Help: Customize themes per market"
      url: "https://help.shopify.com/manual/online-store/themes/customizing-themes/markets"
    - title: "Shopify Changelog: Customize checkout and customer accounts by market"
      url: "https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify přidal do Markets adminu interaktivní graph view — vizualizaci celé hierarchie markets, jejich nastavení a dědění, která merchantům s komplexním multi-market setupem usnadňuje orientaci a diagnostiku konfigurace."
tagy: [editions, markets, internationalization, ux]
zdroj_kanal: editions
---

## O čem to je

Shopify Markets dostalo v rámci Editions Spring '26 nový pohled na celou konfiguraci — **graph view**. Jde o interaktivní diagram, který zobrazuje všechny markets obchodu jako uzly propojené hierarchickými vazbami (rodič → submarket).

Každý uzel grafu obsahuje kompaktní přehled klíčových nastavení daného marketu:

- **Countries / Regions** — vlajky zemí a aktivní sales channels
- **Localization** — doména, aktivní jazyky, použité theme
- **Products** — počet dostupných produktů, měna a catalog info
- **Discounts** — počet a typy aplikovaných slev
- **Business Entity** — název, typ a adresa přiřazené entity
- **Checkout** — konfigurace s přímým odkazem do checkout editoru
- **Taxes & Duties** — stav výběru a nastavení zobrazení

Klíčová funkce je **vizualizace dědění**: hover nad libovolným nastavením zvýrazní, zda uzel používá výchozí hodnotu z parent marketu (oba uzly se zvýrazní), nebo lokálně přepsanou hodnotu (uzel zůstane sám). To okamžitě odpoví na otázku "kde se bere toto nastavení?" bez nutnosti ručně procházet každý market.

Dalšími součástmi jsou fulltextové **vyhledávání** v grafu pro rychlé nalezení konkrétního marketu a integrovaný **Sidekick** s předpřipravenými prompty pro AI dotazy na konfiguraci přímo z kontextu grafu. Pro markets napojené na Online Store je dostupný **checkout preview** — náhled zákaznické cesty se košíkem, dopravou a aplikovanými slevami pro konkrétní trh.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, graph view dostupný v Shopify adminu

## Dopad pro nás

**Pro vývojáře:**
Graph view je čistě admin UX feature bez API dopadu — nevyžaduje žádné úpravy na straně aplikací ani integrací. Při řešení problémů s per-market konfigurací (nesprávné dědění discountů, překrývající se nastavení katalogů, chybná business entity) lze graph view využít jako diagnostický nástroj namísto ruční iterace přes každý market. Zvláště užitečné u klientů se strukturou submarkety (např. DACH jako parent → DE/AT/CH jako children).

**Pro PM / PO:**
Graph view přímo nerozšiřuje obchodní možnosti obchodu, ale výrazně snižuje operační zátěž při správě komplexního multi-market setupu. Pro klienty se 10+ markety nebo víceúrovňovou submarket hierarchií jde o přímé zefektivnění onboardingu a auditu nastavení. Při přípravě nového marketu nebo ladění výpadku slevy v konkrétním regionu se orientace v grafu výrazně zkrátí. Nemá smysl aktivně nabízet jako feature, ale může být argumentem při prezentaci hodnoty Shopify Plus pro mezinárodní expanzi.

## Použití v Integrátoru

Graph view je vizuální admin nástroj bez API povrchu — přímá integrace není relevantní. Nepřímo může urychlit onboarding a diagnostiku klientů s multi-market architekturou.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Online](/Shopify_news_magexo/zmena/editions-spring-2026-online/)
