---
date: 2026-10-28
title: "⚠️ Script tag deprecation — povinná migrace na theme app extensions nebo web pixels"
title_en: "Script tag deprecation"
slug: script-tag-deprecation-theme-app-extensions
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost, breaking]
api_oblast: other
nalehavost: kriticka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některá app, kterou stavíme nebo udržujeme, vkládá JavaScript do storefrontu přes ScriptTag API, musí přejít na theme app extensions nebo web pixely. Totéž platí pro starší třetí strany, které máme v obchodech nasazené. Je potřeba ověřit, zda script tagy někde používáme, protože po 1. 3. 2027 přestanou běžet."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "online-store-script-tags-deprecated-2027", "app-pixel-activity-log"]
editions_release: fall-2026
tldr: "Editions Fall '26 potvrzuje, že apps už nesmějí script tagy vytvářet ani upravovat a musí přejít na theme app extensions (UI a funkce ve storefrontu) nebo web pixely (analytika a tracking). Podle archivu vracejí scriptTagCreate a scriptTagUpdate chyby od 1. 10. 2026 a existující script tagy přestanou běžet 1. 3. 2027, takže zbývá zhruba čtyři měsíce na audit a migraci."
tagy: [script-tag, deprecation, theme-app-extensions, web-pixels, breaking, security]
zdroj_kanal: editions
kontext:
  background: |
    Script tagy jsou starý mechanismus, kterým apps vkládaly vlastní JavaScript přímo do storefrontu, aniž by musely zasahovat do kódu tématu. Používaly se hlavně pro analytické a reklamní pixely, chat widgety, bannery, popupy nebo drobné úpravy vzhledu. Výhoda byla v tom, že app si skript nasadila sama a merchant nemusel nic dělat. Nevýhodou je, že takový skript běží ve stejném kontextu jako celá stránka: může zpomalit načítání, sahat na libovolnou část DOM a Shopify nad ním nemá velkou kontrolu.

    Shopify tuto cestu ruší po etapách. Podle dev changelogu, který už máme v archivu, začaly mutace scriptTagCreate a scriptTagUpdate vracet chyby 1. října 2026 a existující script tagy přestanou na storefrontu běžet 1. března 2027. Editions Fall '26 tuto změnu shrnuje v tématu Developer, v bloku Secure ecosystem, jedinou větou: apps už nemohou script tagy vytvářet ani upravovat a musí přejít na theme app extensions nebo web pixely. Stránka Editions u položky žádné datum neuvádí a důvod nerozepisuje. Termíny proto přebíráme z archivu, a ne z Editions.

    Náhrada se dělí podle účelu. Pro analytiku a tracking slouží web pixely, které běží v izolovaném sandboxu a dostávají standardní události z obchodu. Pro prvky, které se zobrazují zákazníkovi, slouží theme app extensions, tedy app bloky a app embed bloky, které merchant zapíná v theme editoru. Jde o stejný krok jako u dřívější deprecace Shopify Scripts: starý způsob mizí a nový vyžaduje práci na straně vývojáře i změnu v onboardingu. Tahle položka patří do skupiny bezpečnostních termínů celého Developer tématu spolu s expirujícími offline tokeny.
  zdroje:
    - title: "Shopify Editions Fall '26 (Developer, Secure ecosystem, položka Script tag deprecation)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Online Store Script Tags deprecated, konec 1. 3. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/online-store-script-tags-deprecated-2027/"
    - title: "Archiv: Shopify changelog, Script tags are deprecated and will stop running on March 1, 2027"
      url: "https://shopify.dev/changelog/online-store-script-tags-deprecation"
    - title: "Archiv: App pixel activity log v Customer events"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pixel-activity-log/"
    - title: "Archiv: Expirující offline tokeny povinné pro všechny public apps od 1. 1. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 v tématu Developer uvádí, že **apps už nemohou script tagy vytvářet ani upravovat a musí přejít na theme app extensions nebo web pixely**. Jde o zrušení ScriptTag API jako cesty, jak vložit vlastní JavaScript do online store.

Náhrada závisí na tom, co script tag dělal:

| Co script tag dělal | Čím ho nahradit | Kdo to zapíná |
|---|---|---|
| Analytika, měření konverzí, reklamní a remarketingové pixely | **Web pixely** (web pixel extension v app) | Instaluje se s appkou, merchant nemusí nic dělat |
| Viditelné prvky ve storefrontu: widgety, bannery, popupy, úpravy vzhledu | **Theme app extensions** (app block nebo app embed block) | Merchant v theme editoru |
| Kód, který dělá obojí | Rozdělit: sběr událostí do pixelu, UI do theme app extension | Kombinace obou |

Pár věcí, které je dobré mít jasně rozlišené:

- **Web pixel není náhrada za cokoli.** Běží v izolovaném sandboxu a odebírá standardní události, takže nemůže libovolně měnit stránku. Co mění vzhled nebo chování storefrontu, patří do theme app extension.
- **Theme app extension vyžaduje krok merchanta.** Script tag se nasadil sám, app embed block se musí zapnout v theme editoru. To mění onboarding nových obchodů i upgrade těch stávajících.
- **Script tagy s `display_scope: order_status`** mají podle archivu samostatnou, dřívější deprecaci a tento termín se jich netýká.

**Co zdroje neříkají (a tedy to netvrdíme):**

- Stránka Editions u položky neuvádí žádné datum. Termíny níže jsou z dev changelogu v archivu.
- Důvody změny (výkon, bezpečnost) Editions u této položky nerozepisuje. Je to náš výklad, který odpovídá tomu, jak oba nové mechanismy fungují: sandbox u pixelů a řízené načítání u theme app extensions.
- Zda budou apps, které script tagy dál používají, odstraněny z App Store, Editions ani archiv nepotvrzují. Berte to jako pravděpodobné riziko, ne jako fakt.
- Nevíme, jak přesně se bude chovat stránka po 1. 3. 2027 u skriptu, který přestane běžet. Archiv říká jen, že kód stavěný na script tagech přestane fungovat.

## Časová osa

- **1. 10. 2026** (už proběhlo): mutace `scriptTagCreate` a `scriptTagUpdate` vracejí user errors. Nové script tagy nejdou založit ani upravit. Existující běží beze změny.
- **28. 10. 2026**: Editions Fall '26 deprecaci shrnují mezi bezpečnostními položkami Developer tématu a formulují ji jako povinnou migraci.
- **1. 3. 2027**: Shopify přestane script tagy na storefrontu spouštět. Do tohoto data zbývá zhruba čtyři měsíce, a to včetně Black Friday a vánoční sezóny, kdy se do tracking kódu nechce nikomu zasahovat.

Doporučený milník z archivu (migrace do 1. 10. 2026) už je za námi. Jakákoli migrace, která dosud neproběhla, je tedy po doporučeném termínu.

## Dopad pro nás

**Pro vývojáře:**

Postup, který doporučujeme (jde o naše doporučení, ne o text Shopify):

1. **Inventura v kódu.** Projít všechny naše apps a skripty a najít volání `scriptTagCreate`, `scriptTagUpdate` a REST resource `script_tags`. Pokud nějaké existuje, dnes už vrací chybu, takže je to buď mrtvý kód, nebo skrytá chyba v onboardingu.
2. **Inventura v obchodech.** V každém obchodě zjistit, jaké script tagy aktuálně běží. Admin GraphQL vrací `scriptTags` s polem `src` a `displayScope` pod scopem `read_script_tags`, pro rychlou kontrolu stačí i zdrojový kód stránky a hledání skriptů třetích stran. Výsledek roztřídit podle toho, která app skript vložila a k čemu slouží.
3. **Rozhodnutí podle účelu.** Tracking převést na web pixel, UI na theme app extension. Smíšené skripty rozdělit.
4. **Web pixely.** Vytvořit web pixel extension, přihlásit se k odběru standardních událostí a ověřit, že všechna data, která skript dřív četl z DOM, jsou dostupná v události. Co v události chybí, se přes pixel získat nedá. Počítat s tím, že pixely respektují nastavení souhlasu zákazníka, takže počet zachycených událostí se může oproti starému skriptu lišit. Dohled nad tím, kdy se přístup pixelu k datům mění, pomáhá [app pixel activity log](/Shopify_news_magexo/zmena/app-pixel-activity-log/).
5. **Theme app extensions.** Vytvořit app block nebo app embed block, do onboardingu přidat jasný krok pro aktivaci v theme editoru a ve stavu app ukazovat, zda je embed zapnutý. U obchodů s více tématy nebo s tématem, které se mění, hlídat aktivaci znovu.
6. **Přechod bez zdvojení.** Po nasazení nové varianty ověřit, že starý script tag neposílá stejné události znovu, jinak se konverze v analytice počítají dvakrát. Mazání starých script tagů (`scriptTagDelete`) je potřeba ověřit na vývojovém obchodě, protože archiv popisuje blokaci jen u create a update.
7. **Test na vývojovém obchodě.** Porovnat počty událostí před a po, projít storefront s vypnutým a zapnutým embedem a zkontrolovat výkon stránky.

Pro audit kódu před review se hodí i nový [security check](/Shopify_news_magexo/zmena/shopify-ai-toolkit-security-check/), který projde konfiguraci extensions a závislosti. Souvisí s tím i další bezpečnostní termín stejného tématu, [expirující offline tokeny](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/), takže má smysl řešit audit apps jednou pro obojí.

**Pro PM / PO:**

Naléhavost je kritická, protože jde o tvrdý termín bez možnosti odkladu a o změnu, která se může projevit tichým výpadkem dat. Skript, který přestane běžet, nemusí vyvolat viditelnou chybu, jen zmizí konverze v analytice, reklamní pixel přestane optimalizovat kampaně nebo ze storefrontu zmizí widget. Takový problém se pozná pozdě.

Doporučení:

- **Do konce listopadu** udělat soupis apps v obchodech, o které se staráme, a označit ty, které stále používají script tagy. U apps třetích stran se zeptat dodavatele, zda je migrace hotová, a zjistit, jestli existuje náhrada.
- **Plánovat po Black Friday, hotovo do konce února.** Zásah do trackingu uprostřed kampaní je rizikový, ale termín 1. 3. 2027 nenechává velkou rezervu. Nejrizikovější jsou obchody s vlastními nebo opuštěnými apps, u kterých nemá kdo migraci udělat.
- **Počítat s komunikací s merchantem.** Přechod na theme app extension znamená, že merchant musí něco zapnout. Je třeba mu to říct a ověřit to, ne spoléhat na to, že se to stane samo.
- **Žádný poplatek ani nový plán** se z Editions nevyplývá. Náklad je práce na migraci a testování.

## Použití v Integrátoru

Možná: je potřeba ověřit, zda některá naše app nebo synchronizace nasazuje JavaScript do storefrontu přes ScriptTag API. Pokud ne, týká se nás změna hlavně nepřímo, při auditu apps třetích stran v obchodech, které spravujeme.

## Související

- [Editions Fall '26, přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Téma Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [Online Store Script Tags deprecated, konec 1. 3. 2027](/Shopify_news_magexo/zmena/online-store-script-tags-deprecated-2027/)
- [App pixel activity log v Customer events](/Shopify_news_magexo/zmena/app-pixel-activity-log/)
- [Expirující offline tokeny povinné pro všechny public apps](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/)
