---
date: 2026-07-10
title: "CPSC eFiling fields pro Managed Markets — US import compliance"
title_en: "CPSC eFiling fields now available to Managed Markets merchants"
slug: cpsc-efiling-fields-managed-markets
zdroj: https://changelog.shopify.com/posts/cpsc-efiling-fields-now-available
shrnuto_dne: 2026-08-14
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta spravujeme product disclosures nebo mapujeme produktová data do Managed Markets, měli bychom vědět, že přibyla struktura pro CPSC certifikační data."
dotcene_klienty: []
souvisejici: [product-listings-disclosures-field, managed-markets-uk-canada-launch, managed-markets-duties-inclusive-pricing]
tldr: "Merchanti na Managed Markets mohou nově vyplnit CPSC eFiling fields v product disclosures — strukturovaná certifikační data potřebná pro elektronické celní hlášení dovozu do USA."
tagy: [managed-markets, cpsc, efiling, us-import, compliance, product-disclosures, safety]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Od 8. července 2026 platí v USA nová celní povinnost: američtí importéři musí elektronicky hlásit vybraná produktová data přes systém Automated Commercial Environment (ACE), spravovaný U.S. Customs and Border Protection ve spolupráci s Consumer Product Safety Commission (CPSC). Jde o změnu principu — dříve stačilo mít certifikační záznamy k dispozici na vyžádání, nově se certifikační data musí předávat elektronicky u každé regulované zásilky již při vstupu na hranici.

    Týká se to produktů spadajících pod CPSC dohled — typicky dětských hraček, dětského oblečení, spotřebičů a dalšího zboží podléhajícího bezpečnostním normám. Shopify na to reagovalo rozšířením product disclosures o nová CPSC eFiling fields: reference PGA (Partner Government Agency) Message Set pole pro produkty s předem nahranými certifikačními daty, a samostatné vstupy pro Certifier ID, Product ID a Version ID. Data se sdílejí s fulfillment providery pro celní odbavení, ale zákazníkům na storefrontu se nezobrazují.

    Funkce je dostupná merchantům na Managed Markets, kde Shopify díky integraci s Global-e usnadňuje navazující celní zpracování. Merchanti mimo Managed Markets si musí compliance řešit sami — Shopify je odkazuje na CPSC zdroje a jejich logistické partnery. Jde tedy o doplněk k dřívějšímu obecnému disclosures fieldu (Prop 65, choking hazards), tentokrát cílený konkrétně na strukturovaná data pro elektronické celní hlášení.
  zdroje:
    - title: "Shopify: CPSC eFiling fields now available to Managed Markets merchants"
      url: "https://changelog.shopify.com/posts/cpsc-efiling-fields-now-available"
  generated_at: 2026-08-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přidal do product disclosures nová pole pro **CPSC eFiling** — strukturovaný způsob, jak uložit certifikační data vyžadovaná při dovozu regulovaných produktů (hračky, dětské oblečení, spotřebiče) do USA. Jde o reakci na povinnost, která platí od 8. července 2026: američtí importéři musí certifikační data k produktům elektronicky hlásit přes systém ACE u každé zásilky, nikoliv je jen archivovat pro případnou kontrolu.

Nová pole umožňují:

- Vyplnit **reference PGA Message Set** data pro produkty s již existujícím certifikátem
- Zadat **Certifier ID**, **Product ID** a **Version ID**
- Sdílet tato data s fulfillment providery pro celní odbavení — zákazníkům na storefrontu zůstávají skrytá

Funkce je dostupná merchantům na **Managed Markets**, kde ji Shopify propojuje s integrací Global-e pro plynulejší zpracování na hranici. Merchanti mimo Managed Markets si musí compliance zajistit jinak (CPSC zdroje, vlastní logistický partner).

## Časová osa

- **8. 7. 2026** — v USA vstoupila v platnost povinnost elektronického hlášení certifikačních dat přes ACE pro regulované produkty
- **10. 7. 2026** — Shopify zpřístupnil CPSC eFiling fields v product disclosures pro Managed Markets merchanty

## Dopad pro nás

**Pro vývojáře:** Pokud spravujeme produktová data pro klienty prodávající regulované zboží (hračky, dětské oblečení, spotřebiče) do USA a klient používá Managed Markets, je vhodné vědět o existenci těchto polí a případně je zahrnout do onboardingu produktů nebo do mapování dat mezi Shopify a externími systémy (ERP/PIM). Pole jsou dodatečná k obecnému disclosures fieldu z předchozí novinky (Prop 65, choking hazards) — jde o samostatnou strukturu specificky pro celní hlášení.

**Pro PM / PO:** Relevantní hlavně pro klienty s US trhem a produkty spadajícími pod CPSC (hračky, dětské zboží, spotřebiče), kteří zároveň využívají Managed Markets. Bez Managed Markets funkce dostupná není a klient musí compliance řešit mimo Shopify. Nejde o povinnost pro všechny merchanty — jen pro ty s CPSC-regulovaným sortimentem.

## Použití v Integrátoru

Pokud u některého klienta integrujeme produktová data do externích systémů nebo mu spravujeme Managed Markets nastavení, stojí za to ověřit, zda prodává CPSC-regulované zboží do USA a případně doplnit tato pole do procesu zakládání produktů.
