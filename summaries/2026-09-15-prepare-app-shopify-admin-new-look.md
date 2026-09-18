---
date: 2026-09-15
title: "Připravte app na nový vzhled Shopify adminu — Polaris migration guide"
title_en: "Prepare your app for the Shopify admin new look"
slug: prepare-app-shopify-admin-new-look
zdroj: https://shopify.dev/changelog/prepare-your-app-for-the-shopify-admins-new-look
shrnuto_dne: 2026-09-18
kategorie: [fyi, deprecation]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Admin UI a App Home extensions dostanou nový vzhled automaticky, ale appky mimo Polaris web components musí migrovat, aby zůstaly vizuálně konzistentní s redesignem."
dotcene_klienty: []
souvisejici: [shopify-admin-new-look-2026, polaris-cdn-1-1-release-candidate, polaris-web-components-migration-guides]
tldr: "Shopify vydal developer guidance k redesignu adminu - Admin/App Home extensions se aktualizují samy, appky bez Polaris web components je musí migrovat, aby seděly na nové barvy, typografii a spacing."
tagy: [polaris, admin, redesign, ui, migration, app-preparation]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Souběžně s vizuálním redesignem Shopify adminu, jehož rollout startuje 15. 9. 2026 (nové barvy, typografie, spacing a reorganizovaná side navigace), publikoval Shopify i developer guidance pro vývojáře appek. Cílem je, aby vlastní admin UI nezůstalo vizuálně pozadu za novým designovým jazykem a nepůsobilo vedle přerodového adminu jako cizí prvek.

    Guidance rozděluje appky do tří skupin podle toho, co musí udělat. Admin UI extensions a App Home UI extensions postavené na Polaris komponentách nový vzhled přebírají automaticky, bez jakéhokoli zásahu vývojáře. Embedded App Home appky, které už používají Polaris Web Components 1.0, mají volitelnou možnost migrovat na chystaný Polaris 2.0 release candidate, aby byly plně sladěné s refreshnutým stylingem — jde o explicitní, ne vynucený krok. Appky, které Polaris Web Components vůbec nepoužívají (vlastní CSS, starší komponenty nebo custom Polaris themes), migraci potřebují, jinak riskují vizuální nekonzistenci vedle nového designu.

    Pro testování je už teď k dispozici release candidate Polaris Web Components 1.1, na kterém lze appku vyzkoušet ještě před tím, než Polaris 2.0 RC naváže vlastní refreshnutou stylingovou vrstvou. Shopify zároveň připomíná, že díky semantic versioningu se adopce major verze děje záměrně a řízeně — appky se tedy nemusí bát, že jim komponenty "utečou" pod rukama bez upgrade kroku.
  zdroje:
    - title: "Shopify: Prepare your app for the Shopify admin new look"
      url: "https://shopify.dev/changelog/prepare-your-app-for-the-shopify-admins-new-look"
    - title: "Archiv: Nový vzhled Shopify adminu — barvy, typografie, Sidekick jako floating chat"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-admin-new-look-2026/"
    - title: "Archiv: Polaris CDN 1.1 release candidate"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-cdn-1-1-release-candidate/"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---
## Co se mění

Shopify doplnil vizuální redesign adminu o konkrétní developer guidance: co musí vývojáři appek udělat, aby jejich UI sedělo na nové barvy, typografii a spacing. Appky postavené na Admin UI extensions nebo App Home UI extensions s Polaris komponentami nemusí dělat nic — nový styling se aplikuje automaticky v rámci postupného rolloutu. Appky, které už jedou na Polaris Web Components 1.0, mají otevřenou volitelnou cestu na Polaris 2.0 release candidate, jakmile vyjde. Appky bez Polaris Web Components (vlastní CSS, staré komponenty, custom Polaris themes) migraci potřebují — jinak budou vedle nového adminu vizuálně nekonzistentní.

Prakticky doporučovaný testovací postup je začít migrací na Polaris Web Components už teď, vyzkoušet appku na dostupném release candidate 1.1 a mít tak menší skok, až vyjde Polaris 2.0 RC naladěný na finální redesign. Kontrola stojí hlavně na vizuální konzistenci: spacing mezi prvky, typografické škály a chování starších komponent nebo custom themes v novém designovém rámci.

## Časová osa

- 2026-08-31 — dostupný release candidate Polaris Web Components 1.1 pro předběžné testování
- 2026-09-15 — Shopify spouští rollout nového vzhledu adminu a publikuje developer guidance k přípravě appek
- dále — očekává se Polaris 2.0 release candidate naladěný na redesign (přesné datum changelog neuvádí)

## Dopad pro nás

**Pro vývojáře:** Pokud appka staví admin UI čistě na Admin/App Home UI extensions s Polaris komponentami, nic dělat nemusíme — styling se aplikuje sám. Pokud máme embedded app home s vlastním CSS, staršími komponentami nebo custom Polaris theme mimo web components, stojí za to zařadit migraci na Polaris Web Components do plánu a appku otestovat na release candidate 1.1, než dorazí Polaris 2.0.

**Pro PM / PO:** Jde o navazující, čistě vývojářskou přípravu na redesign adminu oznámený 15. 9. — nemá vlastní deadline ani dopad na klienty, ale je dobré si poznamenat, které appky v portfoliu ještě nejedou na Polaris web components, aby migrace nezůstala pozadu, až Polaris 2.0 vyjde jako stabilní verze.

## Použití v Integrátoru

Přímý dopad zatím nemáme, protože jde o guidance pro vlastní admin UI appek, ne o změnu API. Relevantní bude až ve chvíli, kdy bychom stavěli nebo upravovali admin UI extension či app home postavené na Polaris komponentách.
