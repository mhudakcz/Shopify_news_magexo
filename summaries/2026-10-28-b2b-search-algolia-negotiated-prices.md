---
date: 2026-10-28
title: "B2B search přes Algolia — B2B customers vidí jen svůj katalog s negotiated prices"
title_en: "B2B search with Algolia"
slug: b2b-search-algolia-negotiated-prices
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše B2B práce s katalogy, firemními profily a cenami běží přes Admin API a Storefront API; pokud B2B obchod nasadí vyhledávání přes Algolia, bude nutné ověřit, jak se do indexu propisují katalogy a vyjednané ceny. Editions stránka žádné API ani technický mechanismus neuvádí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-online", "storefront-search-ai-fuzzy", "b2b-for-all-merchants"]
editions_release: fall-2026
tldr: "Shopify ve Fall '26 oznamuje B2B search přes aplikaci Algolia: B2B zákazník v hledání vidí jen produkty ze svého katalogu a rovnou s vyjednanými cenami, takže vyhledávání přestane ukazovat veřejné ceny a produkty mimo jeho nabídku. Stránka neuvádí dostupnost, plán, cenu ani API, takže jde zatím o příležitost k ověření, ne o hotové řešení."
tagy: [b2b, algolia, search, catalog, pricing, negotiated]
zdroj_kanal: editions
kontext:
  background: |
    Shopify B2B je sada nativních nástrojů pro velkoobchodní prodej: firemní profily (Companies) s kontakty a lokacemi, individuální katalogy produktů s vlastními cenami, objemové a kvantitativní pravidla, platební podmínky a nákupní objednávky. Od jara 2026 je B2B dostupné i mimo plán Plus, takže s ním pracuje mnohem víc obchodů než dřív. Katalog přiřazený firemní lokaci určuje, které produkty B2B zákazník vidí a za kolik je koupí.

    Slabým místem bývá vyhledávání. Nativní storefront search i externí search služby typu Algolia pracují nad indexem produktů, který je z podstaty veřejný. Když B2B zákazník hledá, typicky dostane výsledky z celého veřejného katalogu a s veřejnými cenami, ne s cenami, které si s dodavatelem vyjednal. To je u velkoobchodu dvojí problém: zákazník vidí produkty, které pro něj nejsou určené, a vidí ceny, které neodpovídají jeho podmínkám, takže mu pak košík nebo objednávka ukážou něco jiného než hledání.

    Fall '26 Editions v tématu Online store uvádí jako položku 15 B2B search přes Algolia. Podle popisu na stránce mohou B2B zákazníci používat vyhledávání omezené na jejich konkrétní katalog a s vyjednanými cenami, a to přes aplikaci Algolia. Stránka u položky neuvádí stav dostupnosti (GA, beta), podporované plány, cenu ani žádné API či dokumentaci, takže mechanismus, kterým se katalog a ceny do Algolia výsledků propisují, ze zdroje nelze vyčíst. Všechny technické závěry níže jsou proto naše úvahy, ne tvrzení Shopify.

    Položka stojí v tématu vedle spring vylepšení nativního vyhledávání (tolerance překlepů a neobvyklých formulací) i vedle rozšíření B2B na další plány a ukazuje, že Shopify chce řešit vyhledávání i pro obchody, které místo nativního search používají specializovanou službu.
  zdroje:
    - title: "Shopify Editions Fall '26 (Online store, položka B2B search přes Algolia)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Storefront search s AI fuzzy matchingem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-search-ai-fuzzy/"
    - title: "Archiv: Shopify zpřístupňuje B2B features všem plánům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 Editions v tématu Online store oznamují **B2B search přes Algolia**. Podle popisu na Editions stránce mohou B2B zákazníci používat vyhledávání, které:

- **zobrazuje jen jejich konkrétní katalog** — výsledky neobsahují produkty, které firemní lokaci nejsou nabízené,
- **ukazuje vyjednané (negotiated) ceny** — u produktů je cena z B2B katalogu zákazníka, ne veřejná cena,
- **běží přes aplikaci Algolia** — jde o integraci s externí vyhledávací službou, ne o změnu nativního Shopify search.

Tím se řeší klasický problém B2B vyhledávání: veřejný index, který B2B zákazníkovi ukazuje veřejné ceny a celý veřejný sortiment, zatímco košík a checkout pak počítají podle jeho katalogu.

Co Editions stránka **neuvádí**: stav dostupnosti (GA, beta, early access), podporované plány Shopify ani Algolie, cenu, způsob konfigurace, ani to, zda se změní nějaké API. Nevíme tedy, zda se katalogy a ceny propisují automaticky, nebo si je obchod musí do indexu dodat sám. Do ověření v dokumentaci to bereme jako příležitost, ne jako hotové řešení.

## Časová osa

- 2026-04-02 — B2B features se otevírají i plánům Basic, Grow a Advanced ([b2b-for-all-merchants](/Shopify_news_magexo/zmena/b2b-for-all-merchants/))
- 2026-06-17 — Editions Spring '26: nativní storefront search dostává AI toleranci překlepů a frází ([storefront-search-ai-fuzzy](/Shopify_news_magexo/zmena/storefront-search-ai-fuzzy/))
- 2026-10-28 — Editions Fall '26: B2B search přes Algolia oznámen jako položka 15 tématu Online store
- Datum spuštění, rolloutu ani dostupnosti Editions stránka neuvádí — nutné ověřit v nápovědě Shopify a u Algolie

## Dopad pro nás

**Pro vývojáře:**
Žádná breaking change, žádná povinná migrace. Z textu Editions nevyplývá nové API ani nový scope. Praktické body k ověření, než funkci někomu doporučíme (jde o naše úvahy, ne o tvrzení Shopify):

- **Jak se katalog a cena dostanou do Algolie.** Algolia indexuje produkty mimo Shopify. Aby výsledky odpovídaly firemní lokaci, musí být někde vyřešeno omezení sortimentu i cena pro konkrétní kupující kontext. Je potřeba zjistit, zda to aplikace řeší sama (např. čtením katalogů a cen ze Shopify), nebo zda vyžaduje vlastní filtry či indexy.
- **Headless a vlastní search.** U obchodů s headless storefrontem nebo s již nasazenou Algolií a vlastními indexy je třeba ověřit, jak se nové chování pojí s existující konfigurací a zda funguje i mimo Shopify theme.
- **Konzistence cen.** Cena v hledání se musí shodovat s cenou v košíku a checkoutu. Doporučujeme vyzkoušet na vývojovém obchodu s několika firmami a katalogy, včetně objemových slev a kvantitativních pravidel, a porovnat cenu v search, na detailu produktu i v košíku.
- **Zpoždění indexu.** Změna ceny v B2B katalogu nebo přiřazení katalogu k lokaci se musí do vyhledávání propsat. Pokud jde o asynchronní indexaci, může být po změně krátce vidět stará cena, což je u velkoobchodu viditelný problém.
- **Soukromí cen.** Zkontrolovat, že vyjednané ceny nejsou dostupné nepřihlášenému návštěvníkovi ani jiné firmě, například přes přímé volání search API s veřejným klíčem.

**Pro PM / PO:**
Jde o příležitost pro obchody s B2B kanálem a individuálními katalogy, kde je dnes největší bolestí, že hledání ukazuje nesprávné ceny nebo produkty. Zlepšit se může důvěra B2B zákazníků v obchod, počet sebeobslužných objednávek a odlehčení obchodníkům, kteří dnes cenu zákazníkům potvrzují ručně. Na druhou stranu jde o závislost na třetí straně: Algolia je samostatná služba s vlastním ceníkem a konfigurací, takže před nabídkou obchodu je nutné zjistit náklady, dostupnost podle plánu a to, zda se vyplatí oproti nativnímu hledání, které se na jaře zlepšilo. Priorita je nízká, protože datum dostupnosti ani podmínky nejsou známé. Doporučujeme zařadit mezi témata k ověření při příštím B2B projektu a sledovat dokumentaci.

## Použití v Integrátoru

Naše B2B práce s katalogy, firemními profily a cenami přes Admin API a Storefront API se tímto oznámením nemění. Pokud obchod nasadí B2B search přes Algolia, je potřeba ověřit, že ceny ve vyhledávání odpovídají cenám ze Shopify katalogů, které spravujeme.

## ⬅️ Související
🔗 [Editions Fall '26 hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Online](/Shopify_news_magexo/zmena/editions-fall-2026-online/)
🔗 [Storefront search s AI fuzzy matchingem](/Shopify_news_magexo/zmena/storefront-search-ai-fuzzy/)
🔗 [Shopify zpřístupňuje B2B features všem plánům](/Shopify_news_magexo/zmena/b2b-for-all-merchants/)
