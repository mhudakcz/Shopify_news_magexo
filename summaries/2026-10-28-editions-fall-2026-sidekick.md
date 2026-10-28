---
date: 2026-10-28
title: "Editions Fall '26: Sidekick — agentní pracovník, který návrhy nejdřív otestuje v SimGymu"
slug: editions-fall-2026-sidekick
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Sidekick je merchant-facing AI vrstva v Shopify adminu bez vlastního API povrchu pro naše moduly; relevantní je pro školení merchantů, pro audit hromadných změn v obchodech a pro rozhodnutí, jak stavět extensions napojené na Sidekicka (app intents, tools). Přímé použití v našich modulech zatím nevidíme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-spring-2026-sidekick"]
editions_release: fall-2026
tldr: "Téma Sidekick ve Fall '26 (12 položek): Sidekick se posouvá z chatu k agentnímu pracovníkovi. Zvládá vícekrokové technické úkoly, navržené změny nejdřív otestuje v SimGymu a hromadné úpravy provede podle jednoho schváleného plánu. Plovoucí chat na každé stránce redesignovaného adminu a personalizovaný úvod adminu z něj dělají výchozí vrstvu ovládání. Přibývá práce s draft orders, print-on-demand, cenami, platbami a checkoutem a markdown soubory, jimiž lze Sidekicka učit, jak je postavený theme."
tagy: [editions, sidekick, "fall-2026", ai, simgym, admin, batch-changes, checkout, pricing, payments]
zdroj_kanal: editions
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Editions Spring 2026 ho rozšířily na další povrchy: mobilní aplikaci, Apple Watch, Online Store Editor a třetí aplikace přes Sidekick app extensions. V říjnu 2026 přibyl Sidekick do editoru checkoutu a customer accounts, do Canvasu (kde za merchanta píše a validuje kód theme) a dostal generování obrázků s průhledným pozadím. Vývoj do Fall '26 tak byl postupný: Sidekick se dostával na více míst, ale pořád hlavně odpovídal a radil.

    Fall '26 s názvem Exponential mění charakter tématu. Podle stránky Editions Sidekick zvládá vícekrokové technické úkoly včetně kódu a webového vyhledávání, pamatuje si předchozí požadavky, svá doporučení testuje v SimGymu, dřív než je merchant použije, a hromadné změny provádí podle jednoho schváleného plánu. Zároveň se přesouvá do středu adminu: plovoucí prompt na každé stránce redesignovaného adminu a personalizovaná doporučení při otevření adminu. K tomu přibývá práce s draft orders, print-on-demand designem, cenami (přes modely Shopify Smart Pricing), platbami a customizací checkoutu a accounts včetně Checkout Blocks. Markdown soubory pak umožňují naučit Sidekicka, jak je postavený theme, a uložit designové preference napříč konverzacemi.

    Důležité je, co stránka Editions neříká. U žádné ze 12 položek neuvádí status dostupnosti (live, preview, coming soon), plány, regiony ani technické limity, například rozsah dávkových změn nebo to, jak hluboko SimGym u různých typů návrhů testuje. Tento přehled proto vychází pouze z popisů na stránce Editions a z navazujících záznamů v archivu. Před slibováním konkrétního chování merchantům je potřeba funkce ověřit přímo v adminu.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Customize checkout and accounts configurations with Sidekick"
      url: "https://changelog.shopify.com/posts/customize-checkout-and-accounts-configurations-with-sidekick"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem téma je

Spring '26 udělal ze Sidekicka všudypřítomného asistenta: dostal se do mobilní aplikace, na Apple Watch a do třetích aplikací. Fall '26 mění sloveso. Sidekick už nejen odpovídá a občas něco provede, ale funguje jako pracovník, který přijme zadání, rozloží ho na kroky, navrhne změny, ověří je a po jednom schválení provede. Dvanáct položek tématu to ukazuje ze tří stran: **schopnosti** (vícekrokové technické úkoly, dávkové změny, draft orders, print-on-demand, ceny, platby, checkout), **důvěra** (doporučení otestovaná v SimGymu ještě před aplikací, jeden plán a jedno schválení, zvýrazněné změny ke kontrole) a **paměť** (markdown soubory, kterými merchant učí Sidekicka, jak je postavený jeho theme a jaké má designové preference).

Druhá vrstva je umístění. Plovoucí prompt na každé stránce redesignovaného adminu a personalizovaná doporučení při otevření adminu znamenají, že Sidekick přestává být místem, kam merchant záměrně jde, a stává se vrstvou, přes kterou se admin používá. To je podle našeho čtení důležitější než kterákoli jednotlivá funkce: kdo má chat po ruce na každé obrazovce a každé ráno dostane seznam dalších kroků, bude ho používat i na práce, které dosud dělal ručně v UI. Sidekick přitom vstupuje do míst, kde chyba stojí peníze (ceny, výplaty, checkout), a právě tady Shopify zdůrazňuje testování před aplikací a schvalování před provedením.

---

## Top 3 highlights

### 1. Doporučení, která Sidekick nejdřív otestuje v SimGymu

**Co Editions uvádí:** Sidekick navrhne vylepšení obchodu, otestuje je v SimGymu a merchant si vybere, které z nich použije.

**Pro merchanty:** AI doporučení byla dosud hypotéza, kterou bylo potřeba ověřit vlastním úsudkem nebo A/B testem. SimGym je podle archivu nástroj, který simuluje chování nakupujícího na storefrontu a dává prioritizovaná doporučení podle dopadu na konverze, a to bez nutnosti živého provozu. Spojení se Sidekickem může zkrátit cestu od nápadu k ověřené změně, zejména u obchodů s nižší návštěvností, kde A/B testy nemají dost dat.

**Pro vývojáře a agentury:** Zatím nevíme, jaké typy změn lze v SimGymu testovat (u theme je to zřejmé, u cen nebo textů ne) a jak věrná je simulace. Simulovaný nakupující není reálný zákazník, takže výsledek testu je filtr, ne garance. Jako rychlý audit před předáním změn je ale kombinace Sidekick plus SimGym zajímavý pracovní nástroj.

Související záznamy: [SimGym: AI-simulovaný shopper analyzuje libovolný theme](/Shopify_news_magexo/zmena/simgym-ai-store-analysis/) · [SimGym: deep analýza theme](/Shopify_news_magexo/zmena/simgym-deep-theme-analysis/) · [SimGym v AI Research Preview](/Shopify_news_magexo/zmena/simgym-ai-research-preview/)

### 2. Jeden plán, jedno schválení, dávka změn (a technické úkoly)

**Co Editions uvádí:** Merchant dostane plán, jednou ho schválí a Sidekick provede více změn najednou, například aktualizuje popisy napříč celou kolekcí. Vedle toho Sidekick zvládá složitější technické úkoly: vícekrokové workflows, výpočty, kód, vyhledávání na webu a pamatuje si předchozí požadavky.

**Pro merchanty:** Hromadné úpravy, které dřív znamenaly export do CSV, Shopify Flow nebo aplikaci na hromadné editace, lze zadat jednou větou. Klíčová je kontrolní brána: schválení plánu je místo, kde merchant musí zkontrolovat rozsah (kolik produktů, která pole), protože po schválení se změny provedou najednou.

**Pro vývojáře a agentury:** Sidekick, který kóduje a drží kontext, se blíží roli pomocného vývojáře přímo v adminu. Spolu s Canvasem (Sidekick píše a validuje kód theme) a markdown soubory z této edice vzniká řetěz naučit, naplánovat, provést. Co zatím nevíme: jak vypadá vrácení dávky zpět, jak se změny zapisují do historie a jaké platí limity počtu položek. S hromadnými změnami, které proběhnou mimo naše skripty, je rozumné počítat při auditu změn v obchodech, které spravujeme.

Související záznam: [Shopify Canvas: vizuální workspace pro bespoke obchody se Sidekickem](/Shopify_news_magexo/zmena/shopify-canvas-bespoke-store-design/)

### 3. Plovoucí chat na každé stránce a personalizovaný úvod adminu

**Co Editions uvádí:** Na každé stránce redesignovaného adminu je plovoucí prompt, který nabízí pomoc v kontextu aktuálního úkolu. Po otevření adminu Sidekick zobrazí personalizovaná doporučení a další kroky.

**Pro merchanty:** Pomoc bez přepínání do zvláštní sekce a úvod adminu, který začíná doporučeními místo prázdného dashboardu. Předchůdce najdeme už ve Spring '26 (tipy při otevření admin session a Sidekick na každé obrazovce mobilní aplikace); Fall '26 stejný princip přenáší na celý desktopový admin.

**Pro vývojáře a agentury:** Pokud je Sidekick výchozí vrstvou adminu, rozhoduje se tady i o viditelnosti aplikací. Cestou do této vrstvy jsou Sidekick app extensions (intents, tools), takže jejich kvalita a splnění pravidel App Store začíná mít vliv na to, zda a jak se aplikace ve Sidekickovi objeví. To je naše interpretace, Editions to takto výslovně netvrdí.

Související záznamy: [Sidekick na všech obrazovkách mobilní aplikace a Apple Watch](/Shopify_news_magexo/zmena/sidekick-everywhere-mobile-watch/) · [Sidekick napojený na třetí aplikace](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/) · [Sidekick invokuje app intents bez tools](/Shopify_news_magexo/zmena/sidekick-invoke-app-intents-without-tools/) · [Nové App Store requirements pro Sidekick app extensions](/Shopify_news_magexo/zmena/sidekick-app-extensions-app-store-requirements/)

---

## Všechny položky (12 celkem)

Číslování odpovídá pořadí na stránce Editions. Stránka u žádné položky neuvádí status dostupnosti, proto ho tady nedoplňujeme.

### Pro merchanty

- **#2 Recommendations tested by Sidekick** — Sidekick navrhne vylepšení obchodu, otestuje je v SimGymu a merchant si vybere, které použije. [→ detail SimGymu](/Shopify_news_magexo/zmena/simgym-ai-store-analysis/)

- **#3 Guidance from Sidekick on more of your store** — Doporučení růstu, která zohledňují nainstalované aplikace a webový průzkum oboru merchanta. Související kontext: [Sidekick napojený na třetí aplikace](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/)

- **#4 Make a plan, approve once, and watch Sidekick apply multiple changes** — Dávkové úpravy napříč mnoha položkami najednou, například aktualizace popisů v celé kolekci, po jednom schválení plánu.

- **#5 Chat with Sidekick from a floating prompt surface** — Prompt na každé stránce redesignovaného adminu s pomocí v kontextu aktuálního úkolu. Související kontext: [Sidekick na všech obrazovkách mobilní aplikace](/Shopify_news_magexo/zmena/sidekick-everywhere-mobile-watch/)

- **#6 Personalized recommendations when you open the admin** — Sidekick po otevření adminu ukáže doporučení a další kroky. Předchůdce ve Spring '26: [Editions Spring '26: Sidekick](/Shopify_news_magexo/zmena/editions-spring-2026-sidekick/)

- **#7 Draft orders** — Sidekick vytváří a upravuje draft orders a změny zvýrazní, aby je merchant před uložením nebo zahozením zkontroloval. Podobný princip zadání v přirozeném jazyce známe ze Spring '26: [Sidekick vytváří zákazníky](/Shopify_news_magexo/zmena/sidekick-creates-customers-tests/)

- **#8 Print-on-demand design** — Merchant vytvoří nebo nahraje design, vidí jeho náhled na produktu a publikuje ho jako print-on-demand. Editions nespecifikuje, zda se používá stejný generátor obrázků jako v říjnové novince: [Sidekick: obrázky s průhledným pozadím](/Shopify_news_magexo/zmena/sidekick-transparent-background-images/). Kontext z blogu: [Print-on-demand nápady: 9 nik](/Shopify_news_magexo/zmena/blog-print-on-demand-napady-9-niki-2026/) · [Print-on-demand dodavatelé: top 10](/Shopify_news_magexo/zmena/blog-print-on-demand-dodavatele-top10-2026/)

- **#9 Pricing questions** — Doporučení cen na úrovni produktu s využitím modelů Shopify Smart Pricing, což je samostatná aplikace. [→ detail Smart Pricing](/Shopify_news_magexo/zmena/shopify-smart-pricing-app/)

- **#10 Payments questions** — Sidekick vysvětlí nižší než očekávané výplaty a chargebacky a pomůže s ověřením firmy v Shopify Payments. Související kontext: [Payouts page redesign](/Shopify_news_magexo/zmena/payouts-page-redesign-list-view/) · [Čitelnější payout balance](/Shopify_news_magexo/zmena/clearer-payout-balance-shopify-payments/). Otevřená otázka: jak se Sidekick chová vůči staff permissions u financí, viz [Nové staff permissions pro payments, payouts, disputes](/Shopify_news_magexo/zmena/staff-permissions-payments-payouts-disputes-tax/).

- **#11 Checkout and accounts customization** — Pomoc při tvorbě a optimalizaci customizací v editoru checkoutu a accounts a v Checkout Blocks. [→ detail](/Shopify_news_magexo/zmena/sidekick-checkout-accounts-customize/) Pozor na formulaci: changelog z 13. října mluví o vysvětlování nastavení, doporučování aplikací a plánování bloků a neuvádí, že by Sidekick konfiguraci sám zapisoval, zatímco Editions používá silnější slova build a optimize. Chování je potřeba vyzkoušet.

### Pro vývojáře a tvůrce themes

- **#1 More technical tasks with Sidekick** — Vícekrokové workflows, výpočty, kód, vyhledávání na webu a paměť předchozích požadavků.

- **#12 Markdown files** — Soubory, kterými lze Sidekicka naučit, jak je postavený theme, a uložit designové preference, které přetrvají napříč konverzacemi. Související kontext: [Shopify Canvas](/Shopify_news_magexo/zmena/shopify-canvas-bespoke-store-design/), kde Sidekick píše a validuje kód theme.

---

## Co tu ještě nemáme

Z 12 položek má samostatný záznam v archivu jen jedna: **#11** (customizace checkoutu a accounts). U **#2** a **#9** máme záznamy o navazujícím nástroji (SimGym, Smart Pricing), ale ne o samotné Sidekick funkci. Ostatní položky žijí zatím jen v tomto přehledu a ve zdroji Editions:

- **#1 Technické úkoly** a **#4 dávkové změny** — nemáme žádný detail o limitech, vracení změn zpět ani o tom, jak se akce Sidekicka zapisují do historie. Jde o nejvýznamnější mezery, protože se týkají kontroly nad změnami v obchodě.
- **#5 Plovoucí chat** a **#6 personalizovaný úvod adminu** — závisí na redesignu adminu, ke kterému zatím nemáme samostatný záznam.
- **#7 Draft orders** — v archivu máme jen API změny kolem draft orders, ne práci Sidekicka s nimi.
- **#8 Print-on-demand design** — bez záznamu; není jasné, odkud se design bere ani jak probíhá publikace.
- **#10 Payments** — bez záznamu; chybí informace o přístupových právech a o tom, k jakým finančním datům má Sidekick přístup.
- **#12 Markdown soubory** — bez záznamu; chybí formát, umístění souborů a pravidla, jak s nimi Sidekick zachází.
- **#3 Širší doporučení s ohledem na aplikace a webový průzkum** — bez vlastního záznamu; nevíme, jaké zdroje Sidekick používá a jak s nimi nakládá.

Až bude k některé z těchto položek dostupný changelog nebo dokumentace, stojí za to založit samostatný záznam a v tomto přehledu na něj odkázat.

---

## Související v archivu

- [Shop MCP: shopping a Shop Pay checkout pro libovolného agenta](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/) — pro srovnání jde o agenta na straně nakupujícího, zatímco Sidekick je agent na straně merchanta. Obě linie Shopify buduje souběžně.
- [Editions Spring '26: Sidekick](/Shopify_news_magexo/zmena/editions-spring-2026-sidekick/) — předchozí kapitola tématu.

## Zpět na hub

[Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
