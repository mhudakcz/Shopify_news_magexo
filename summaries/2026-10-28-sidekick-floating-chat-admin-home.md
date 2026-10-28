---
date: 2026-10-28
title: "Sidekick: floating chat na každé stránce + personalized Admin home"
title_en: "Sidekick floating chat + personalized admin home"
slug: sidekick-floating-chat-admin-home
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o merchant-facing UX vrstvu adminu bez veřejného API, takže přímý dopad na naše moduly nečekáme. Relevantní je pro školicí materiály, screenshoty v dokumentaci a pro rozhodnutí, zda stavět rozšíření napojená na Sidekicka, protože právě tam se bude rozhodovat o viditelnosti aplikací."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-sidekick", "shopify-admin-new-look-2026", "sidekick-app-extensions-third-party"]
editions_release: fall-2026
tldr: "Editions Fall '26 popisuje Sidekicka jako plovoucí prompt dostupný na každé stránce redesignovaného adminu, který pomáhá v kontextu aktuálního úkolu, a jako personalizovaný úvod adminu, který po otevření ukáže doporučení a další kroky. Sidekick se tak z oddělené sekce mění na výchozí vrstvu, přes kterou se admin používá. Status dostupnosti stránka Editions neuvádí."
tagy: [sidekick, admin, floating-chat, personalization, redesign]
zdroj_kanal: editions
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Až do léta 2026 žil na desktopu hlavně jako postranní panel ukotvený vedle obsahu stránky, a merchant tak musel Sidekicka otevřít záměrně. Editions Spring '26 začaly tuto hranici posouvat: Sidekick se dostal na každou obrazovku mobilní aplikace a při otevření admin session začal zobrazovat konkrétní tipy podle stavu obchodu.

    Dne 15. září 2026 Shopify oznámil postupný rollout nového vzhledu adminu. Součástí je i změna Sidekicka z fixního postranního panelu na plovoucí chat ukotvený v dolní části stránky, dostupný odkudkoliv v adminu. Rollout probíhá automaticky, account po accountu, bez opt-in a bez nutné akce merchanta.

    Editions Fall '26 stejný směr pojmenovávají v tématu Sidekick dvěma položkami. Položka 5 popisuje plovoucí prompt na každé stránce redesignovaného adminu s pomocí v kontextu aktuálního úkolu. Položka 6 popisuje personalizovaná doporučení a další kroky, které Sidekick zobrazí po otevření adminu. Editions výslovně neříká, že plovoucí prompt je tentýž prvek jako chat z říjnového rolloutu, vzhledem k popisu je to ale nejpravděpodobnější. Stránka také u žádné z položek neuvádí status dostupnosti, plány, regiony ani to, z jakých dat se doporučení skládají. Tento záznam proto vychází z popisů na stránce Editions a z navazujících záznamů v archivu.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: A new look for the Shopify admin"
      url: "https://changelog.shopify.com/posts/see-the-shopify-admin-s-new-look"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 přinášejí dvě související změny v tom, jak merchant potkává Sidekicka v adminu.

**Plovoucí chat na každé stránce.** Na každé stránce redesignovaného adminu je dostupný prompt, přes který merchant osloví Sidekicka, aniž by opouštěl rozdělanou práci. Podle Editions nabízí pomoc v kontextu aktuálního úkolu, tedy například nad detailem produktu, objednávky nebo nastavení. Rozdíl proti dřívějšímu modelu je v tom, že Sidekick není samostatná sekce ani panel, který zabírá část obrazovky, ale vrstva nad stránkou.

**Personalizovaný úvod adminu.** Po otevření adminu Sidekick zobrazí doporučení a další kroky šité na konkrétní obchod. Místo obecného dashboardu tak merchant začíná seznamem toho, co dává smysl udělat dál. Předchůdce známe ze Spring '26, kde Sidekick při otevření admin session ukazoval tipy pro akvizici, konverzi a opakované nákupy. Fall '26 stejný princip povyšují na hlavní vstup do adminu.

Dohromady z toho podle našeho čtení vzniká výchozí navigační vrstva: merchant se může zeptat, co má udělat, nebo se nechat navést doporučeními, a nemusí znát cestu adminem. Je to naše interpretace, Editions ji takto nepojmenovávají.

Co Editions neříkají: zda lze plovoucí chat nebo úvodní doporučení vypnout či skrýt, zda doporučení respektují oprávnění jednotlivých členů týmu, jaké jazyky jsou podporovány a zda doporučení zahrnují i nainstalované aplikace třetích stran.

## Časová osa

- **2026-06-17** — Editions Spring '26: tipy od Sidekicka při otevření admin session a Sidekick na každé obrazovce mobilní aplikace
- **2026-09-15** — Shopify spouští postupný rollout nového vzhledu adminu včetně Sidekicka jako plovoucího chatu, bez opt-in a bez nutné akce merchanta
- **2026-10-28** — Editions Fall '26 uvádějí plovoucí prompt (položka 5) a personalizovaná doporučení při otevření adminu (položka 6) jako součást tématu Sidekick. Status dostupnosti není uveden, rollout proto počítáme jako postupný

## Dopad pro nás

**Pro vývojáře:**
Žádný veřejný API ani extension point se k těmto položkám neváže, takže nejde o breaking change a není potřeba měnit integrační kód. Praktické dopady jsou tři:

- **Layout.** Plovoucí chat ukotvený dole na stránce se může vizuálně překrývat s prvky na spodním okraji, například s lištou pro uložení nebo akčními tlačítky v app home a admin UI extensions. Po zasažení obchodu rolloutem stojí za to projít naše aplikace a rozšíření v novém rámci stránky.
- **Kontext stránky.** Sidekick pracuje s tím, kde se merchant právě nachází. Zatím nevíme, zda a jak vidí obsah embedded aplikací. Pokud ano, kvalita našich stránek (názvy sekcí, srozumitelné popisky) může ovlivnit i kvalitu odpovědí.
- **Viditelnost aplikací.** Pokud se Sidekick stane výchozím způsobem práce s adminem, bude záležet i na tom, zda je aplikace ve Sidekickovi dosažitelná. Cestou jsou Sidekick app extensions a app intents (viz související záznamy). To je naše úvaha, Editions to výslovně netvrdí.

**Pro PM / PO:**
Merchanti, kteří dostanou nový vzhled, uvidí chat i doporučení bez jakékoli akce z naší strany. Doporučujeme tři kroky:

1. Aktualizovat screenshoty a nahrávky v onboardingu a školicích materiálech, protože umístění Sidekicka i úvod adminu se změní.
2. Mít připravenou jednoduchou odpověď na dotaz proč admin vypadá jinak a odkud se berou doporučení: jde o plánovaný rollout Shopify, ne o naši úpravu.
3. Doporučení od Sidekicka vnímat jako vstup, ne jako rozhodnutí. Jsou generovaná platformou a nemusí odpovídat strategii obchodu ani prioritám, které s merchantem řešíme. U obchodů, které spravujeme, má smysl si před prvním nasazením ověřit, co jejich admin ve skutečnosti zobrazuje.

Naléhavost je střední: nic se nerozbije, ale změní se denní zkušenost merchantů a s ní i otázky, které budeme dostávat. Před slibováním konkrétního chování je potřeba funkce ověřit přímo v adminu zasaženého obchodu.

## Použití v Integrátoru

Přímý dopad na Integrátor nemáme, protože jde o first-party UX vrstvu adminu bez API. Sledovat to má smysl, pokud bychom do budoucna stavěli admin UI nebo rozšíření pro Sidekicka, kde nová pozice chatu a úvodních doporučení ovlivní, jak merchant naše funkce objeví.

## ⬅️ Související

🔗 [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Sidekick (Fall '26)](/Shopify_news_magexo/zmena/editions-fall-2026-sidekick/)
🔗 [Nový vzhled Shopify adminu](/Shopify_news_magexo/zmena/shopify-admin-new-look-2026/)
🔗 [Sidekick napojený na třetí aplikace](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/)
🔗 [Sidekick na všech obrazovkách mobilní aplikace a Apple Watch](/Shopify_news_magexo/zmena/sidekick-everywhere-mobile-watch/)
