---
date: 2026-10-28
title: "Unified checkout in apps — Shop Pay + Cart/checkout permalinks přes UCP buy endpoint"
title_en: "Unified checkout in apps + Shop Pay + permalinks"
slug: unified-checkout-apps-shop-pay-permalinks
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo spravujeme AI agenta, mobilní či headless aplikaci nebo kampaně s nákupními odkazy, můžeme místo vlastního košíku a checkoutu použít permalinky UCP buy a Shop Pay v aplikaci. Stávající synchronizace se nemění, objednávky ale vznikají novou cestou a atribuci nese samotný odkaz."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "universal-commerce-protocol-ucp", "shop-pay-anywhere-off-platform"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidávají tři stavební bloky pro vlastní nákupní aplikace a agenty: společný checkout napříč více obchody přes Shop Pay (early access), element Shop Pay do libovolné aplikace (web a WebView) a permalinky UCP buy, které předvyplní košík, zákazníka, slevy a atribuci. Permalinky jsou použitelné hned, unified checkout zatím jen s přidělením přístupu."
tagy: [unified-checkout, shop-pay, ucp, permalinks, apps, developer, agentic]
zdroj_kanal: editions
kontext:
  background: |
    Universal Commerce Protocol (UCP) je otevřený standard, který Shopify představil ve Spring '26 a který definuje, jak AI agenti a aplikace komunikují s obchody: Catalog MCP pro hledání produktů, Cart MCP pro košík a Checkout MCP pro dokončení nákupu. Dosud platilo, že agent nebo aplikace produkt snadno našla a vložila do košíku, ale poslední krok, platba, byl slabé místo. Buď se kupující přesměroval na web obchodu, nebo se použila hotová cesta přes Shop MCP z 13. října 2026, která je určená hlavně agentům.

    Developer téma Editions Fall '26 přidává tři položky, které tuhle mezeru řeší pro vývojáře vlastních aplikací. První je sjednocený checkout, kde aplikace složí košíky z více obchodů do jednoho checkoutu s Shop Pay. Druhá je Shop Pay přidaný do libovolné aplikace jako hotový element, takže aplikace nikdy nepřijde do styku s platebními údaji. Třetí jsou permalinky na endpointu UCP buy, tedy odkazy, které po otevření vytvoří košík nebo checkout a přenesou produkty, údaje o kupujícím, slevy a atribuci. Souvisí s nimi i aktualizovaný Checkout Kit v4, přes který se checkout vkládá do webu, nativních aplikací a agentních zážitků.

    Stránka Editions u těchto položek neuvádí stav ani termín. Podrobnosti v článku vycházejí z dokumentace na shopify.dev, kterou jsme přečetli 28. října 2026, a mohou se měnit. Z ní plyne, že permalinky jsou běžná schopnost UCP, kdežto unified checkout je v early access, tedy jen pro API klíče s přiděleným přístupem, a názvy nástrojů i pole odpovědí se do GA mohou změnit. Údaje o síti Shop Pay (400 milionů kupujících a vyšší konverze o aspoň 10 %) jsou tvrzení Shopify. Jarní článek o Shop Pay mimo Shopify uváděl 250 milionů. Komentáře k dopadu na evropské obchody jsou náš úsudek, ne text Shopify.
  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential (Developer: agentic experiences)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify dev docs: Universal checkout in your app"
      url: "https://shopify.dev/docs/agents/carts-and-checkout/universal-checkout"
    - title: "Shopify dev docs: Add Shop Pay to any app or shopping experience"
      url: "https://shopify.dev/docs/agents/carts-and-checkout/shop-pay"
    - title: "Shopify dev docs: Cart and checkout permalinks (UCP buy endpoint)"
      url: "https://shopify.dev/docs/agents/carts-and-checkout/permalinks"
    - title: "Shopify: Universal Commerce Protocol"
      url: "https://www.shopify.com/ucp"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Developer část Editions Fall '26 uvádí v bloku agentic experiences tři související položky. Dohromady dávají vývojáři hotový checkout pro vlastní aplikaci nebo nákupního agenta, takže nemusí stavět vlastní platební tok. Shopify je popisuje v dokumentaci Carts and checkout for agents.

### 1. Unified checkout v aplikaci (košík napříč značkami)

Aplikace může produkty ze Shopify Catalogu od více obchodů složit do jednoho společného checkoutu, ve kterém se kupující přihlásí a zaplatí přes Shop Pay. Postup podle dokumentace:

1. Pro každého obchodníka se vytvoří košík nástrojem `create_cart` na jeho Cart MCP endpointu.
2. Na globálním UCP endpointu se zavolá `create_checkout` s až 15 ID košíků.
3. Jsou-li košíky kompatibilní, odpověď obsahuje společnou `continue_url` a pro každý košík i vlastní `continue_url`.
4. Společný checkout se vykreslí přes Checkout Kit for Web a aplikace sleduje události `start`, `update`, `complete`, `error`, `close` a `blocked`.

Podmínky: API přihlašovací údaje z Catalogs v Dev Dashboardu (stejný klíč jako pro Catalog), schválený early access pro tento klíč přes formulář, profil agenta s deklarovanou draft schopností `dev.shopify.shopping.universal_checkout`, košíky ve stejné měně a produkty nejlépe z Global Catalogu. Společná `continue_url` je podle dokumentace tajná, nesmí se logovat, ukládat ani sdílet.

Pozor na formulaci jedna transakce. Pro kupujícího jde o jeden společný checkout, ale výsledkem jsou samostatné objednávky u jednotlivých obchodníků a aplikace po dokončení ukazuje jedno potvrzení na každou z nich. Dokumentace výslovně popisuje i částečné dokončení, vyřazení jednoho obchodu (`failed`, `ejected`) a zablokované vyskakovací okno. Nelze tedy počítat s tím, že projdou buď všechny objednávky, nebo žádná.

### 2. Shop Pay v libovolné aplikaci

Shop Pay se do aplikace přidává jako element `<shop-pay>` z balíčku `@shopify/checkout-kit/shop-pay`, buď jako tlačítko, nebo jako řádek v seznamu platebních metod. Atribut `src` se nastaví na `continue_url` ze sjednoceného checkoutu.

- Kupující se do Shop Pay přihlašuje v samostatném okně nad checkoutem aplikace. Aplikace nikdy nesbírá ani nedrží platební údaje.
- Shop Pay se má zobrazit jen tehdy, když ho akceptují všichni obchodníci v košíku. Obchodník ho inzeruje položkou `dev.shopify.shop_pay` ve svém profilu na `/.well-known/ucp`.
- Při každé změně košíku se `src` vymaže, Shop Pay se skryje a checkout se vytvoří znovu.
- Dostupný je web a WebView. Podpora obchodníků mimo Shopify a mobilních SDK (Swift, Kotlin, React Native) je v dokumentaci označená jako coming soon.
- Nezaměňovat se Shop Pay Wallet API ze Spring '26. To slouží značce na jiné platformě, aby dala Shop Pay do vlastního checkoutu. Tady jde o aplikaci, která nad Shopify obchody stojí jako samostatný nákupní zážitek.

### 3. Permalinky pro košík a checkout (UCP buy endpoint)

Permalink je odkaz, který po otevření v prohlížeči vytvoří na obchodě košík nebo rovnou checkout. Samotné otevření neodešle objednávku ani nestrhne platbu, kupující ji dokončí v checkoutu. Odkaz se skládá z cesty `/buy/{variant_id}:{množství}` (více položek oddělených čárkou) a z query parametrů. Příklad s vymyšlenými hodnotami:

```text
https://{domena-obchodu}/buy/12345678:2?buyer/email=jana%40example.com&discounts/codes/0=JARO10&attribution/utm_source=newsletter
```

Co lze přenést:

- **Zákazník:** `buyer/email`, `buyer/phone_number` (E.164), dále `context/address_country`, `context/language` a adresa doručení přes `fulfillment/methods/0/destinations/0/...`.
- **Platba:** `context/payment/0/handler` s hodnotou `dev.shopify.shop_pay`.
- **Slevy:** `discounts/codes/{index}`, indexováno od nuly bez mezer.
- **Atribuce:** `attribution/utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `attribution/referring_domain` a dvojice pro click ID a activity ID.
- **Cíl po otevření:** `continue_to`, například `/cart`; neplatná nebo duplicitní hodnota spadne zpět na checkout.

Předpoklady a omezení z dokumentace:

- Obchod musí ve svém `/.well-known/ucp` inzerovat schopnost `dev.ucp.shopping.permalink` a základní URL je `config.endpoint` z tohoto profilu. Musí prodávat přes online store, headless kanál nebo Shopify Catalog, jinak zůstávají legacy permalinky košíku.
- ID variant se berou z Global Catalogu nebo Storefront Catalogu. Odkaz smí mít nejvýše 500 položek a 2 048 bajtů.
- Každé otevření vytvoří nový košík jen s položkami z odkazu a nahradí kupujícímu stávající košík.
- Duplicitní pole o kupujícím nebo košíku způsobí, že Shopify ignoruje všechny údaje o kupujícím a košíku a vytvoří košík jen s položkami. Hodnoty musí být správně URL-enkódované, jinak přijde chyba 400.
- Neparametrizované `utm_source` nebo `gclid` se ignorují. Atribuci kanálu prodeje (`source_name`) permalink nepodporuje.
- Nepodporované jsou selling plans (položka jen s předplatným košík nevytvoří), poznámky a atributy košíku, vlastnosti řádků a referral kódy `ref`.
- Košík se vytvoří až při skutečném otevření odkazu, ne při prefetchi. Ochrana proti botům může vyžadovat ověření.

### Co Editions neříká

Stránka u položek nezmiňuje dostupnost podle zemí, poplatky ani termín GA unified checkoutu. Nevíme tedy, které české a evropské obchody a jaké platební metody budou pokryté, ani jak vypadá právní role aplikace při prodeji z více obchodů. Ověřit to bude třeba v dokumentaci a v testu.

## Časová osa

- **17. 6. 2026** — Spring '26: UCP jako otevřený standard pro agentic commerce, Shop Pay Wallet API pro značky mimo Shopify
- **28. 8. 2026** — Shopify obchody začínají inzerovat UCP verzi `2026-08-25`, na kterou se permalinky v dokumentaci odkazují (`ucp/version=2026-08-25`)
- **13. 10. 2026** — Shop MCP: vyhledávání, košík a Shop Pay checkout pro libovolného agenta
- **28. 10. 2026** — Editions Fall '26: položky unified checkout, Shop Pay v aplikaci a permalinky v Developer tématu; dokumentace je veřejná, unified checkout je podle ní v early access
- **2. 11. 2026** — starý Global Catalog REST API přestává odpovídat, podle archivu je nutný přechod na Global Catalog MCP (UCP). Týká se každého, kdo produkty pro tyto toky hledá přes REST
- **Neuvedeno** — termín GA unified checkoutu a podpory obchodníků mimo Shopify a mobilních SDK (označeno jako coming soon)

## Dopad pro nás

Nalehavost je střední. Žádný termín se netýká existujících integrací, jde o novou možnost, kterou stojí za to znát dřív, než ji někdo od nás bude chtít.

**Pro vývojáře:**

- **Permalinky lze zkusit hned.** Nepotřebují early access. Stačí ověřit, že obchod inzeruje `dev.ucp.shopping.permalink`, vzít `config.endpoint` z jeho profilu a sestavit odkaz z ID variant z katalogu. Zkusit zejména chování při duplicitních polích, kódování znaků (`+` v telefonu) a nahrazení stávajícího košíku.
- **Unified checkout vyžaduje přístup předem.** Je potřeba API klíč z Catalogs v Dev Dashboardu a žádost o early access. Do té doby jde jen o přípravu: profil agenta se schopností `dev.shopify.shopping.universal_checkout`, autorizace Cart MCP u každého obchodníka a hlavička `Shopify-Buyer-IP` u každého volání s přístupovým tokenem.
- **Stavový automat je na aplikaci.** Počítat s částečným dokončením a vyřazeným obchodem, s blokovaným oknem, s vytvořením čerstvé session pro každý pokus a s tím, že po `checkout_timeout` se nemá automaticky opakovat, protože checkout už mohl vzniknout. Při změně košíku se checkout vytváří znovu.
- **Měny a obchody.** Košíky v jednom společném checkoutu musí mít stejnou měnu a Shop Pay se nabízí jen tehdy, když ho akceptují všichni obchodníci v košíku. Pro obchody s více měnami to může zúžit, kdy se společný checkout vůbec nabídne.
- **Katalog.** Pokud se produkty pro tyto toky hledají přes starý Global Catalog REST API, je nutné přejít na Global Catalog MCP před 2. 11. 2026.
- **Platformní rozsah.** Teď jen web a WebView. Nativní mobilní aplikace v Swiftu, Kotlinu nebo React Native a obchodníci mimo Shopify jsou označeni jako coming soon, s nativní aplikací zatím nepočítat.

**Pro PM / PO:**

- **Příležitost.** Zakázky na vlastní nákupní aplikaci, agenta nebo kurátorský výběr produktů z více značek mohou stát na hotovém checkoutu místo vlastního. Permalink se hodí i mimo aplikace: odkaz s předvyplněným zákazníkem, slevou a UTM do e-mailu, SMS, chatbota nebo QR kódu vede kupujícího rovnou do checkoutu a atribuce zůstane u zdroje. Pro kampaně může být atraktivní, ale kód slevy v odkazu je třeba hlídat jako každý jiný.
- **Early access není závazek.** Unified checkout může změnit nástroje, vstupy i pole odpovědí. Do nabídky ho zařazovat jen jako prototyp s výhradou, dokud Shopify neoznačí GA.
- **Otázky k ověření před doporučením českému nebo evropskému obchodu:** dostupnost Shop Pay a Shopify Catalogu v dané zemi, kdo je při prodeji z více obchodů prodávajícím a kdo řeší vratky, reklamace a komunikaci se zákazníkem, jak vypadá DPH a doprava u více objednávek z jednoho checkoutu a zda a jaké poplatky Shopify účtuje. Editions to neuvádí.
- **Osobní údaje v odkazu.** Permalink může obsahovat e-mail a telefon kupujícího přímo v adrese, která se objeví v historii prohlížeče, logách serverů a analytice. U odkazů rozesílaných hromadně nebo sdílených v kanálech proto zvážit, zda e-mail do odkazu vůbec dávat. Právní posouzení GDPR a ePrivacy patří obchodníkovi a není součástí oznámení.
- **Doporučený postup.** Zařadit na sledování, u projektu s agentním nebo aplikačním tématem požádat o early access a v dev obchodě vyzkoušet permalink s předvyplněným zákazníkem, slevou a atribucí a podívat se, jak objednávka vypadá v adminu.

## Použití v Integrátoru

Tyto cesty zatím nepoužíváme a stávající synchronizace se nemění. Mohou se stát relevantními u AI agenta, mobilní nebo headless aplikace či kampaní s nákupními odkazy, kde by objednávky vznikaly mimo vlastní košík obchodu, a proto je při revizi toku objednávek dobré ověřit, jak je poznáme podle atribuce.

## Související

- [Editions Fall '26, hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [Universal Commerce Protocol (UCP) — otevřený standard pro agentic commerce](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/)
- [Shop Pay i mimo Shopify — Shop Pay Wallet API](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)
- [Shop MCP — shopping a Shop Pay checkout pro libovolného AI agenta](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/)
- [Checkout MCP a Cart MCP: UCP buyer consent](/Shopify_news_magexo/zmena/checkout-cart-mcp-ucp-buyer-consent/)
- [Global Catalog REST API sunset 2. 11. 2026](/Shopify_news_magexo/zmena/global-catalog-rest-api-sunset-2026-11-02/)
