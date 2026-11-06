---
date: 2026-10-31
title: "Customer account full-page extensions: event.from v currententrychange bude od 2027-01 vracet předchozí stránku"
title_en: "currententrychange returns previous page in event.from for customer account full-page extensions"
slug: currententrychange-event-from-previous-page
zdroj: https://shopify.dev/changelog/posts/currententrychange-now-returns-the-previous-page-in-event-from-for-customer-account-full-page-extensions
shrnuto_dne: 2026-11-06
kategorie: [breaking-change, nova-api]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2027-01-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některé naše customer account full-page rozšíření řeší routing přes event.from v handleru currententrychange, po přechodu na API verzi 2027-01 by zůstalo vykreslovat předchozí stránku."
dotcene_klienty: []
souvisejici: [customer-account-api-per-customer-rate-limit, metafieldinteger-collection-condition-removed-2027-01, automaticdiscounts-query-removed-2027-01]
tldr: "V API verzi 2027-01 začne event.from v události currententrychange u customer account full-page extensions obsahovat předchozí stránku místo nové; kód čtoucí cílovou stránku z event.from je třeba přepsat na shopify.navigation.currentEntry."
tagy: [customer-account, ui-extensions, navigation, events, routing, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Customer account UI extensions typu full-page umožňují aplikaci vykreslit vlastní celou stránku v zákaznickém účtu. Rozšíření běží v targetech customer-account.page.render a customer-account.order.page.render a pro navigaci mezi vlastními trasami využívá Navigation API. To nabízí událost currententrychange, kterou vývojáři běžně používají k tomu, aby po změně adresy překreslili správný obsah.

    Dosud pole event.from v této události obsahovalo stejnou hodnotu jako shopify.navigation.currentEntry, tedy novou stránku, na kterou zákazník přešel. To je odchylka od standardního chování Navigation API, kde from označuje stránku, ze které zákazník odchází. Shopify to v API verzi 2027-01 sjednocuje a event.from nově vrací předchozí položku historie.

    Změna je označená jako breaking s nutnou akcí, ale týká se jen rozšíření, která cílovou stránku čtou právě z event.from a zároveň přejdou na verzi 2027-01. Rozšíření na verzi 2026-10 a starší nejsou dotčena, stejně jako kód používající shopify.navigation.currentEntry (včetně hooku useNavigationCurrentEntry) na jakékoli verzi. Nově získané chování předchozí stránky lze využít například pro tlačítko Zpět, analytiku nebo kontextové chybové hlášky.
  zdroje:
    - title: "Shopify: currententrychange returns previous page in event.from for customer account full-page extensions"
      url: "https://shopify.dev/changelog/posts/currententrychange-now-returns-the-previous-page-in-event-from-for-customer-account-full-page-extensions"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

V customer account full-page extensions (targety `customer-account.page.render` a `customer-account.order.page.render`) se mění význam pole `event.from` v události `currententrychange` Navigation API. Do verze 2026-10 obsahuje `from` totéž co `shopify.navigation.currentEntry`, tedy novou stránku. Od verze 2027-01 obsahuje stránku, kterou zákazník opustil, tedy předchozí položku historie.

Dopad: rozšíření, jehož handler nastavuje trasu z `event.from.url`, bude na 2027-01 po každé navigaci vykreslovat předchozí trasu. Oprava je jednoduchá: místo `event.from.url` číst `shopify.navigation.currentEntry.url` a argument události ignorovat. Upravený kód funguje od verze 2025-10, takže ho lze nasadit ještě před upgradem API verze.

Nové chování zároveň otevírá užitečné scénáře: správné chování tlačítka Zpět, měření toho, odkud zákazník na stránku přišel, nebo chybové hlášky přizpůsobené kontextu.

## Časová osa

- **2026-10-31:** zveřejnění změny v Shopify changelogu (aktualizováno 2026-11-02).
- **Do 2026-10 včetně:** `event.from` odpovídá `shopify.navigation.currentEntry`, beze změny.
- **2027-01:** `event.from` vrací předchozí stránku; změna se projeví při přechodu rozšíření na tuto verzi.
- **Kdykoli předem:** přechod na `shopify.navigation.currentEntry` je možný už od verze 2025-10.

## Dopad pro nás

**Pro vývojáře:** Projít všechna customer account full-page rozšíření a najít handlery `currententrychange`, které čtou `event.from`. Nahradit je čtením `shopify.navigation.currentEntry.url` (nebo hookem `useNavigationCurrentEntry`) ještě před zvednutím API verze na 2027-01. Ověřit navigací mezi dvěma trasami, že se po každém přechodu zobrazí cílová stránka.

**Pro PM / PO:** Jde o malou, ale tichou chybu: po upgradu by zákazník viděl neaktuální stránku bez chybové hlášky. Do plánu přechodu na 2027-01 stačí zařadit krátký úkol na kontrolu a opravu; riziko se týká jen projektů s vlastními full-page stránkami v zákaznickém účtu.

## Použití v Integrátoru

Zatím nelze potvrdit, zda některé naše rozšíření zákaznického účtu používá `event.from`; stojí za to to ověřit při přípravě upgradu na API verzi 2027-01.
