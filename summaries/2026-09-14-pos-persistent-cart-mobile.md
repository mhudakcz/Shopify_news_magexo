---
date: 2026-09-14
title: "POS v11.15 na mobilu: persistent cart button — položky + totals bez opuštění screen"
title_en: "Keep the cart in view on mobile POS"
slug: pos-persistent-cart-mobile
zdroj: https://changelog.shopify.com/posts/keep-the-cart-in-view-on-mobile-pos
shrnuto_dne: 2026-09-15
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-14
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čistě POS UI vylepšení bez API dopadu, ale relevantní kontext pro retail klienty prodávající z telefonů, ne jen z tabletů."
dotcene_klienty: []
souvisejici: [pos-v11-rebuild-deep-dive, pos-online-cart-visibility-store-staff, pos-returns-exchanges-cart]
tldr: "Shopify POS v11.15 přidává na telefonech persistent cart button s počtem položek a running total, takže personál nemusí opustit obrazovku product lookupu nebo zákaznického profilu, aby zkontroloval rozjednaný prodej."
tagy: [pos, mobile, cart, ux, retail, "v11-15"]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS prošel v roce 2026 rozsáhlým rebuildem (v11), jehož klíčovou architektonickou změnou byl always-present cart — košík trvale viditelný na obrazovce, aby personál při doplňování zákazníka, slevy nebo dalšího produktu neztrácel kontext o rozjednaném prodeji. Tento koncept se ale navrhoval primárně pro tablety, kde je dost prostoru pro trvale zobrazený side panel s obsahem košíku vedle hlavního UI.

    Na telefonech, kde je displej podstatně menší, takový trvalý side panel nedává smysl. Verze 11.15 proto přináší ekvivalent přizpůsobený mobilnímu rozhraní: persistent cart button, který na obrazovkách Home, Products, Orders i Search zobrazuje naposledy přidané položky, jejich počet a průběžný total. Tlačítko se v reálném čase aktualizuje při každé změně — přidání produktu, slevy, zákazníka nebo poplatku. Jedním tapnutím se z něj otevře plný košík a po jeho zavření se personál automaticky vrátí na obrazovku, odkud přišel. Tlačítko zároveň nahrazuje dosavadní Cart tab ve spodní navigaci mobilní aplikace.

    Funkčně jde o rozšíření stejné filozofie jako u v11 rebuildu — méně přerušení, méně ztraceného kontextu mezi jednotlivými selling tasky — jen v podobě vhodné pro menší displej. Spolu s dřívějšími POS vylepšeními (viditelnost online košíku identifikovaného zákazníka, connectivity status na Home obrazovce) tak Shopify dál sjednocuje UX napříč tablety i telefony a posouvá mobilní POS blíž paritě s tabletovou verzí.
  zdroje:
    - title: "Shopify: Keep the cart in view on mobile POS"
      url: "https://changelog.shopify.com/posts/keep-the-cart-in-view-on-mobile-pos"
  generated_at: 2026-09-15T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS v11.15 přidává na mobilních telefonech persistent cart button, který je viditelný napříč obrazovkami Home, Products, Orders a Search. Tlačítko průběžně zobrazuje naposledy přidané položky, jejich počet a running total, a v reálném čase reaguje na jakoukoli změnu v košíku — přidání produktu, slevy, zákazníka nebo poplatku. Jedním tapnutím se z něj otevře celý košík; po jeho zavření se personál vrací přesně tam, kde skončil, bez nutnosti ručně navigovat zpět.

Tlačítko zároveň nahrazuje dosavadní Cart tab ve spodní navigaci mobilní aplikace — jde tedy nejen o přidání nové funkce, ale i o změnu navigační struktury pro obchody používající telefony místo tabletů.

## Časová osa

- 2026-09-14 — funkce publikována na Shopify changelogu, součást POS v11.15

## Dopad pro nás

**Pro vývojáře:** Jde o čistě nativní UI změnu na straně mobilní POS aplikace, bez dopadu na Admin API nebo GraphQL vrstvu. Pokud pro klienta pracujeme s POS UI extensions, které cílí na bottom navigation nebo Cart tab na telefonech, stojí za to ověřit, že náhrada Cart tabu persistent cart buttonem neovlivňuje umístění nebo chování vlastního extension widgetu na mobilních zařízeních.

**Pro PM / PO:** Relevantní hlavně pro retail klienty, kde personál prodává z telefonů, ne z tabletů — persistent cart button jim dává stejnou výhodu (nepřerušovaný přehled o rozjetém prodeji), jakou tabletoví uživatelé mají od v11 rebuildu. Stojí za zmínku při konzultacích o mobilním POS workflow.

## Použití v Integrátoru

Nepoužíváme — jde o nativní POS UI vylepšení bez API dopadu. Relevantní jen jako kontext při konzultacích o mobilním retail workflow klientů.
