---
date: 2026-10-28
title: "Checkout Kit v4 — embed Shopify checkout do web, mobile, agentic app"
title_en: "Checkout Kit v4"
slug: checkout-kit-v4
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Checkout Kit je klientská vrstva pro vkládání checkoutu do webů, nativních aplikací a agentních zážitků, kterou server-side synchronizace nepoužívají. Dotkne se nás hlavně u projektů s mobilní aplikací nebo vlastním front-endem, kde bude potřeba přejít na v4, a u nových agentních kanálů."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "checkout-kit-for-web", "webmcp-checkout-support"]
editions_release: fall-2026
tldr: "Editions Fall '26 v developer tématu uvádějí aktualizovaný Checkout Kit, který vkládá optimalizovaný Shopify checkout do webu, nativních mobilních aplikací i agentních nákupních zážitků. Stránka Editions neuvádí, co přesně se ve verzi 4 mění, ani datum nebo stav dostupnosti, a odkazuje jen na návod k upgradu na v4, takže před plánováním migrace je nutné projít dokumentaci."
tagy: [checkout-kit, v4, mobile, web, agentic, embed, sdk]
zdroj_kanal: editions
kontext:
  background: |
    Checkout Kit je sada knihoven od Shopify pro vkládání Shopify checkoutu do míst, která nejsou klasický online store. Jde o případy, kdy obchod prodává z vlastní nativní mobilní aplikace, z headless front-endu nebo z prostředí třetí strany a chce, aby se platba odehrála v Shopify checkoutu se stejnou funkčností (Shop Pay, uložené platební metody, checkout extensions, slevy a daně), ale bez přesměrování uživatele pryč. V archivu máme z dřívějška článek o webové variantě, Checkout Kit for Web, která otevírá checkout v pop-up okně nebo nové záložce a míří hlavně na agentní scénáře v prohlížeči.

    V Editions Fall '26 (Exponential, 28. října 2026) se Checkout Kit objeví v developer tématu v bloku platform primitives. Zdrojová stránka o položce říká, že aktualizovaný Checkout Kit vkládá optimalizovaný Shopify checkout do webových, nativních mobilních a agentních nákupních zážitků. Označení verze 4 se na stránce neobjevuje v textu položky, ale v adrese odkazované dokumentace, která vede na návod k upgradu na v4. Stránka u položky neuvádí štítek (beta, early access, coming soon), datum vydání, seznam změn proti předchozí verzi, názvy balíčků ani podporované platformy.

    Položka zapadá do širší linie agentic commerce, kterou Shopify v posledních týdnech rozvíjí: WebMCP nástroje pro checkout, Shop MCP a Checkout MCP s Cart MCP přes protokol UCP. Tyto vrstvy řeší, jak agent nákup najde, sestaví a předá. Checkout Kit je doplňující vrstva, která řeší, kde a v jakém rozhraní se checkout zobrazí uživateli. Tento článek proto popisuje jen to, co je jisté ze stránky Editions, a odděluje to od domněnek. Podrobnosti o změnách ve v4 je potřeba doplnit po přečtení upgrade guide v dokumentaci pro vývojáře.
  zdroje:
    - title: "Shopify Editions Fall '26 (developer, platform primitives: Checkout Kit)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Checkout Kit for Web — JS knihovna pro embed checkout v agentic flows"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/checkout-kit-for-web/"
    - title: "Archiv: WebMCP — podpora pro checkout"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/webmcp-checkout-support/"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v developer tématu Editions Fall '26 uvádí aktualizovaný **Checkout Kit**, který vkládá optimalizovaný Shopify checkout do tří typů prostředí:

- **webových zážitků** (stránky a aplikace mimo Shopify storefront),
- **nativních mobilních aplikací**,
- **agentních nákupních zážitků** (rozhraní, ve kterém nakupuje nebo nakupování zprostředkovává AI agent).

Položka je v bloku platform primitives, vedle Polarisu, POS rozšíření a Admin API. Odkazuje na dokumentaci pro vývojáře, přesněji na návod k upgradu na verzi 4. Označení v4 plyne právě z adresy tohoto odkazu a z názvu položky, který používáme v archivu.

**Co stránka Editions výslovně neříká** (a nelze to z ní vyčíst):

- co přesně se ve verzi 4 oproti v3 mění (nová API, změny chování, odstraněné funkce),
- zda je v4 obecně dostupná, nebo v nějakém preview, protože položka nemá žádný štítek,
- zda je předchozí verze deprecated a do kdy bude podporovaná,
- které platformy a balíčky se týkají (iOS, Android, React Native, web) a jaké jsou minimální verze,
- jak se mění integrace s checkout extensions, Shop Pay nebo autentizací zákazníka.

Zadání článku z naší analýzy zmiňovalo jako hlavní novinky podporu agentního kontextu (checkout v chat rozhraní), mobilní deep linky a headless commerce. Stránka Editions pojmenovává web, nativní mobil a agentní zážitky, ale deep linky ani konkrétní mechaniku pro chat rozhraní neuvádí. Tyto detaily proto berte jako nepotvrzené, dokud je nepotvrdí upgrade guide.

**Kontext z archivu:** [Checkout Kit for Web](/Shopify_news_magexo/zmena/checkout-kit-for-web/) je webová varianta, která otevírá checkout v pop-up okně nebo nové záložce a míří na agentní scénáře v prohlížeči. Nativní SDK pro iOS, Android a React Native zmiňuje tentýž článek jako příbuzná. Fall '26 tedy nejspíš sjednocuje tuto rodinu knihoven pod jednu verzi, ale tuto domněnku Editions samo nepotvrzuje.

## Časová osa

- Winter '26 Editions — Checkout Kit for Web (v archivu pod datem 4. 2. 2026): webová knihovna pro embed checkoutu v agentních flows.
- 2026-09-28 — WebMCP dostává podporu pro checkout: browser agenti mohou checkout číst, upravovat a po potvrzení kupujícím dokončit, viz [WebMCP: podpora pro checkout](/Shopify_news_magexo/zmena/webmcp-checkout-support/).
- 2026-10-28 — Editions Fall '26 (Exponential): Checkout Kit uveden v developer tématu s odkazem na návod k upgradu na v4. Bez štítku beta nebo coming soon.
- Datum GA, termín konce podpory starší verze a případný povinný termín migrace: neuvedeno, ověřit v upgrade guide na shopify.dev.

## Dopad pro nás

Nalehavost je střední. Nejde o změnu Admin API ani o termín, který by nás nutil jednat hned, ale u projektů, kde checkout vkládáme mimo klasický online store, je to položka, kterou je potřeba zmapovat dřív, než přijde povinná migrace.

**Pro vývojáře:**

- **Zmapovat, kde Checkout Kit používáme nebo kde se používá v projektech, které udržujeme.** Týká se to nativních mobilních aplikací obchodů, headless front-endů (včetně Hydrogen a Next.js) a vlastních webových embedů. U každého ověřit, jaká verze Checkout Kitu je nasazená a zda existuje upgrade na v4.
- **Přečíst upgrade guide před odhadem práce.** Stránka Editions seznam změn neobsahuje, takže bez návodu nejde říct, zda jde o drobný upgrade závislosti, nebo o změnu API s úpravou kódu. Doporučený postup: otevřít odkazovaný návod, projít breaking changes a minimální verze platforem a teprve potom odhadovat.
- **Otestovat na dev obchodě nebo stagingu.** Checkout je kritická cesta, takže upgrade ověřit celým průchodem: košík, předání do checkoutu, platba (včetně Shop Pay a 3D Secure), návrat do aplikace nebo na web, potvrzení objednávky a webhooky o objednávce.
- **Ověřit chování checkout extensions.** Pokud obchod používá checkout UI extensions nebo Functions, zkontrolovat, že se v embedovaném checkoutu chovají stejně jako na webu. Stránka Editions o tom nic neříká, takže jde o prověrku, ne o potvrzenou změnu.
- **Agentní scénáře sledovat.** Pro vlastní AI nákupní asistenty je Checkout Kit stavební blok pro zobrazení checkoutu uživateli. Spolu s [WebMCP pro checkout](/Shopify_news_magexo/zmena/webmcp-checkout-support/) a Shop MCP pokrývá nové vrstvy agentního nákupu, ale konkrétní podporu v4 pro chat rozhraní je potřeba ověřit v dokumentaci.

**Pro PM / PO:**

- **Možnost nabídnout obchodům s mobilní aplikací nebo vlastním front-endem.** Embedovaný checkout znamená, že obchod nemusí stavět vlastní platební tok a získá Shop Pay, uložené platební metody a rozšíření checkoutu. Pokud takový zájemce nebo existující projekt řeší vlastní aplikaci, je Checkout Kit v4 argument pro oficiální cestu.
- **Zatím neslibovat rozsah ani termíny.** Dokud nevíme, co v4 mění a zda je GA, nedáváme obchodům ani interním týmům konkrétní odhady migrace. Rozumný krok je krátká analýza po přečtení upgrade guide.
- **Plánovat v rámci udržování existujících aplikací.** Pokud některý projekt už Checkout Kit používá, zařadit upgrade do běžného backlogu, a ne jako urgentní zásah. Pokud se v dokumentaci objeví termín konce podpory starší verze, nalehavost se zvýší a článek aktualizujeme.
- **Agentní nabídka.** Pro obchody, které chtějí prodávat v AI rozhraních, je Checkout Kit jedna ze tří částí skládačky vedle vyhledávání (Catalog) a protokolů pro košík a checkout (UCP, MCP). Má smysl o něm mluvit až s úplným obrazem po prostudování dokumentace.

## Použití v Integrátoru

Checkout Kit je klientská knihovna pro vkládání checkoutu do aplikací a webů, naše server-side synchronizace ji nepoužívají, takže přímý dopad zatím není. Při příští práci na projektu s mobilní aplikací nebo headless front-endem ověřit verzi Checkout Kitu a naplánovat upgrade na v4 podle návodu na shopify.dev.

## Související

- [Editions Fall '26, hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [Checkout Kit for Web — JS knihovna pro embed checkout v agentic flows](/Shopify_news_magexo/zmena/checkout-kit-for-web/)
- [WebMCP: podpora pro checkout — AI agenti mohou dokončit nákup](/Shopify_news_magexo/zmena/webmcp-checkout-support/)
