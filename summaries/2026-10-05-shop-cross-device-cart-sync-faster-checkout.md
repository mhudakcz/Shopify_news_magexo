---
date: 2026-10-05
title: "Shop: rychlejší checkout + synchronizované košíky napříč zařízeními"
title_en: "Faster checkout, carts synced across devices via Shop"
slug: shop-cross-device-cart-sync-faster-checkout
zdroj: https://changelog.shopify.com/posts/faster-checkout-carts-synced-across-devices-via-shop
shrnuto_dne: 2026-10-06
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímý zásah do synchronizací nebo API to nemá, jde o chování Shopu a Shop Pay na straně Shopify. Týká se obchodů, kde je Shop Pay nebo Shop kanál zapnutý, protože se u nich může zlepšit konverze Shop-přihlášených zákazníků."
dotcene_klienty: []
souvisejici: [sign-in-shop-lead-forms, editions-spring-2026-shop-app, redesigned-checkout-spring-2026]
tldr: "Shop nově synchronizuje košíky mezi zařízeními a aplikací a storefrontem, zrychluje checkout, personalizuje tlačítko Buy with Shop Pay a nabízí one-tap přihlášení, bez nutnosti zásahu ze strany merchanta."
tagy: [shop-app, shop-pay, checkout, cross-device, cart-sync, conversion]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shop je spotřebitelská nákupní platforma Shopify a zároveň prodejní kanál, přes který se zákazníci dostávají k produktům merchantů. Součástí ekosystému je Shop Pay, accelerated checkout s uloženými údaji zákazníka (adresa, platební karta), který zkracuje cestu k dokončení objednávky. Zákazníci s Shop účtem tak mají vůči běžnému hostovi v checkoutu méně tření.
    Shopify v tomto oznámení spojuje několik vylepšení kolem Shop identity do jedné novinky. Zrychluje se načítání checkoutu, košíky se synchronizují napříč zařízeními zákazníka, tlačítko Buy with Shop Pay se personalizuje podle naposledy použité karty a přihlášení do zákaznického účtu pro Shop uživatele funguje na jedno klepnutí. Shop navíc připomíná zákazníkům nedokončené košíky. Podle changelogu to funguje ve všech prohlížečích a Shop dokáže zákazníka rozpoznat už před nákupem, protože aktivitu z procházení synchronizuje s jeho Shop účtem.
    Pro merchanta jde o změnu na straně platformy bez konfigurace. Cílem je vyšší konverze u zákazníků přihlášených do Shopu, například když člověk začne nákup na desktopu a dokončí ho na mobilu. Oznámení neuvádí žádné API, žádné nové nastavení ani časový harmonogram nasazení. Navazuje na dřívější kroky kolem Shop identity, o kterých jsme psali v souvislosti se Sign in with Shop a s Editions Spring 26.
  zdroje:
    - title: "Shopify: Faster checkout, carts synced across devices via Shop"
      url: "https://changelog.shopify.com/posts/faster-checkout-carts-synced-across-devices-via-shop"
    - title: "Sign in with Shop nově funguje na více lead capture forms"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/sign-in-shop-lead-forms/"
    - title: "Editions Spring '26: Shop app — AI search, omnichannel a Shop Minis"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-shop-app/"
    - title: "Redesignovaný checkout Spring 2026 — tighter UX + elevated pay button"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/redesigned-checkout-spring-2026/"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify oznámil sadu vylepšení pro zákazníky, kteří používají Shop. Cílem je zkrátit cestu od prvního kliknutí k dokončené objednávce a zbavit nákup tření, když zákazník střídá zařízení.

Podle changelogu se konkrétně mění tyto věci:

- **Expedited checkout** – rychlejší načítání a menší tření při dokončení nákupu.
- **Synchronizace košíků napříč zařízeními** – košíky se synchronizují a zůstávají aktuální na všech zařízeních zákazníka. Košík založený v aplikaci Shop se přenese na storefront merchanta a naopak.
- **Personalizované tlačítko Buy with Shop Pay** – tlačítko zobrazuje kartu, kterou zákazník použil naposledy.
- **One-tap sign-in** – rychlejší přihlášení do zákaznického účtu pro Shop uživatele.
- **Připomínky nedokončených košíků** – Shop zákazníky upozorňuje, aby dokončili košíky, které opustili.

Shop dokáže zákazníka identifikovat už před nákupem, protože aktivitu z procházení synchronizuje s jeho Shop účtem. Funkce jsou podporované ve všech prohlížečích. Oznámení odkazuje na článek v Shopify Help Center o synchronizaci nákupní aktivity se Shop účty.

Změna se týká jen zákazníků se Shop účtem, ostatní návštěvníci se chovají jako dosud. Oznámení neuvádí žádné API, žádný nový přepínač v administraci ani povinnou akci pro merchanta.

## Časová osa

- 2026-10-05 – novinka zveřejněna v Shopify merchant changelogu
- Plošný harmonogram nasazení changelog neuvádí, funkce se projeví postupně na straně Shopify

## Dopad pro nás

**Pro vývojáře:** Žádná povinná akce a žádné API ke změně. Přínos je na straně Shopify, takže na storefrontu s Shop Pay není co implementovat. U custom storefrontů nebo headless řešení stojí za ověření, jestli se synchronizovaný košík a personalizované tlačítko chovají správně, hlavně pokud máme vlastní práci s cartem, vlastní cart drawer nebo přizpůsobený checkout. Oznámení konkrétní omezení pro takové implementace nepopisuje, jde o preventivní kontrolu. Stejně tak je rozumné počítat s tím, že košík se může objevit z jiného zařízení nebo z aplikace Shop, a testovat chování při načtení stránky s už existujícím košíkem.

**Pro PM / PO:** Informativní novinka s potenciálem zlepšit konverzi u Shop-přihlášených zákazníků, bez nákladů a bez zásahu. Hodí se ji zmínit u obchodů, které mají zapnutý Shop Pay nebo prodávají přes kanál Shop, jako argument pro zachování Shop Pay v checkoutu. Dopad na čísla bude nejlépe vidět v analytice konverzí a opuštěných košíků, proto má smysl sledovat tyto metriky před a po nasazení. Nalehavost je nízká, jde o příležitost, ne o povinnost.

## Použití v Integrátoru

Přímé využití nemá, jde o chování Shopu a Shop Pay na straně Shopify bez dopadu na API a synchronizace. Praktická souvislost je jen u obchodů, které Shop Pay nebo Shop kanál používají, kde může novinka zlepšit konverze a ovlivnit data v analytice.
