---
date: 2026-10-11
title: "Shopify Functions — nový způsob, jak si přizpůsobit Shopify"
slug: blog-shopify-functions-prizpusobeni-shopify
zdroj: https://www.shopify.com/cz/blog/shopify-functions
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o úvodní přehled platformy bez změny API, ale Functions jsou nástupcem Shopify Scripts a týkají se každého Plus obchodníka, který potřebuje vlastní logiku slev, dopravy nebo plateb v checkoutu."
dotcene_klienty: []
souvisejici: [shopify-scripts-deprecated-june-2026, prerequisites-product-discount-functions, blog-kdy-prejit-shopify-plus-limity-ukazatele-2027]
tldr: "Úvodní článek českého Shopify blogu představuje Shopify Functions jako backend platformu postavenou na WebAssembly pro slevy, dopravu a platby; vlastní Functions může psát jen Shopify Plus, ostatní obchodníci je dostanou jako aplikace z App Store."
tagy: [shopify-functions, customization, backend, wasm, apps, extensibility]
zdroj_kanal: blog
kontext:
  background: |
    Shopify Functions jsou vývojářská platforma, která umožňuje rozšířit nebo nahradit část backendové logiky Shopify vlastním kódem. Článek na českém blogu Shopify z 11. října 2026 (zhruba čtyři minuty čtení) je pojatý jako úvod pro obchodníky i vývojáře: vysvětluje, že Shopify takzvaně odemyká svůj backend, takže si obchodník může přizpůsobit klíčová pravidla bez provozu vlastního serveru, řešení hostingu a bezpečnosti nebo údržby oddělené větve kódu. Functions běží přímo na infrastruktuře Shopify, aktualizují se spolu s platformou a podle autorů se vykonají v řádu jednotek milisekund (uvádí se méně než 5 ms), takže zvládnou i největší prodejní události. Nasazují se jako součást aplikace, a obchodník je proto nastavuje v administraci vedle nativních nastavení, bez psaní kódu.

    Z technického pohledu se Functions píší v libovolném jazyce, který se dá zkompilovat do WebAssembly (WASM). Článek konkrétní jazyky nejmenuje, ale z dokumentace a z našich dřívějších novinek víme, že se v praxi používá Rust a JavaScript či TypeScript. Uživatelské rozhraní konfigurace se staví přes App Bridge a React, vývoj probíhá lokálně a nasazení přes Shopify CLI. V době vzniku článku se uvádí podpora pro slevy, dopravu (delivery) a platební metody, s plánovaným rozšířením o shipping rates, validaci plateb, validaci košíku, validaci vratek a order routing. Jde tedy o spíše úvodní a marketingově laděný pohled; aktuální rozsah API je v dokumentaci i v našem archivu už širší (například Cart a Checkout Validation Functions nebo Cart Transform).

    Kontext tvoří Shopify Scripts, které Shopify zavedl v roce 2016 pro drobné úpravy checkoutu. Článek tvrdí, že obchodníci používající Scripts zaznamenali nárůst průměrné hodnoty objednávky až o 20 %, a Functions staví jako snazší nástupce, protože nevyžadují ruční editaci kódu v administraci. Praktické příklady zahrnují kombinaci vlastní množstevní slevy typu utratíš X, dostaneš Y s nativní dopravou zdarma a zobrazení slev vytvořených přes Functions v Shopify Analytics včetně reportu tržeb podle slev. Důležité omezení: Functions z App Store mohou používat obchodníci bez dalších podmínek, ale psát vlastní Functions a distribuovat je přes privátní custom app do vlastního obchodu mohou jen obchodníci na Shopify Plus. Jako příklad se uvádí prodejce domácích spotřebičů, který dává slevu 2 000 Kč při nákupu nad 10 000 Kč u jedné značky a 1 000 Kč u druhé, přičemž značku čte vlastní Function z metafieldu produktu. Dokumentace na shopify.dev je zatím jen v angličtině.
  zdroje:
    - title: "Shopify: Shopify Functions — nový způsob, jak si přizpůsobit Shopify"
      url: "https://www.shopify.com/cz/blog/shopify-functions"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Článek představuje Shopify Functions jako způsob, jak do backendu Shopify dostat vlastní obchodní logiku bez toho, aby ji obchodník nebo vývojář musel hostovat jinde. Kód se zkompiluje do WebAssembly, nahraje se jako součást aplikace přes Shopify CLI a Shopify ho spouští na vlastní infrastruktuře v bezpečném sandboxu. Podle textu je odezva v řádu jednotek milisekund, takže logika nebrzdí checkout ani při špičkách, jako je Black Friday. Konfigurační rozhraní si aplikace staví sama (App Bridge a React), takže obchodník nastavení najde v administraci vedle nativních voleb a nemusí sahat do kódu.

Z hlediska obsahu jde o úvodní vysvětlení, ne o technický návod. Zmiňuje tři oblasti, které Functions pokrývají: slevy, dopravu a platební metody. Do budoucna se slibuje rozšíření o validace, shipping rates a order routing. Zajímavé je, že vlastní slevy z Functions lze kombinovat s nativními slevami na produkt, objednávku a dopravu a že se objevují v Shopify Analytics v reportu tržeb podle slev, takže obchodník má jeden zdroj pravdy o všech slevách. Argumentačně se text opírá o historii Shopify Scripts z roku 2016 a o tvrzení, že Scripts zvýšily průměrnou hodnotu objednávky až o 20 %. Čísla ani rozsah aktuálního API článek blíže nerozvádí, takže pro skutečný návrh řešení je nutné vyjít z dokumentace na shopify.dev.

Důležitá je hranice mezi používáním a psaním Functions. Hotové Functions v aplikacích z App Store si může nainstalovat kdokoli, kdežto vlastní Functions v privátní custom app jsou vyhrazené pro Shopify Plus. To odpovídá pravidlům, která platila už pro Shopify Scripts, a je to jeden z podstatných argumentů při rozhodování o přechodu na Plus. Na tuto novinku navazuje naše dřívější shrnutí o ukončení Scripts (30. 6. 2026) a o tom, že migrace není přímočará kvůli jinému jazyku, jinému způsobu nasazení a přísnějším runtime limitům.

## Pro koho je to relevantní

Článek míří hlavně na obchodníky a e-commerce manažery, kteří řeší, jak si na Shopify nastavit nestandardní slevy, doručení nebo omezení platebních metod, a na vývojáře, kteří hledají orientační úvod do platformy. Pro tým, který dělá integrace a vývoj pro Shopify, je to především připomínka, že Functions jsou oficiální cesta pro vlastní checkout logiku po vypnutí Scripts, a užitečný odkaz, který lze poslat obchodníkovi, když potřebuje v češtině vysvětlit, co Functions jsou. Přímý dopad na naše API integrace nemá: žádná změna schématu ani verze se neoznamuje a Functions v našem kódu implementujeme jen minimálně.

Prakticky se hodí při diskusích s Plus obchodníky, kteří dosud používali Scripts nebo mají nestandardní požadavky na slevy a dopravu: ověřit, zda stačí hotová aplikace z App Store, nebo je nutná vlastní Function, a podle toho odhadnout náročnost. Jako podklad pro rozhodování o přechodu na Plus ho lze doplnit o náš přehled limitů a ukazatelů Plus a o shrnutí Product Discount Functions s prerequisites. Protože je dokumentace zatím jen anglicky a článek je spíše úvodní, doporučujeme při konkrétním návrhu vycházet z oficiální dokumentace a z aktuálního seznamu Function API.
