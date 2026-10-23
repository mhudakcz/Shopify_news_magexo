---
date: 2026-10-22
title: "Co je digitální pas výrobku? Průvodce zavedením DPP"
slug: blog-digitalni-pas-vyrobku-dpp
zdroj: https://www.shopify.com/cz/blog/digitalni-pas-vyrobku
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "DPP vyžaduje strukturovaná produktová data (materiály, původ, servis, recyklace) a unikátní identifikátor v QR kódu. U klientů v regulovaných kategoriích se bude řešit, kde tato data žijí (Shopify metafields, PIM, ERP) a jak se synchronizují."
dotcene_klienty: []
souvisejici: [product-listings-disclosures-field, scannable-discount-codes-qr, inventory-transfer-metafields-admin-api]
tldr: "Shopify blog vysvětluje, co je digitální pas výrobku (DPP) podle EU legislativy o oběhovém hospodářství, jaká data obsahuje (původ, materiály, uhlíková stopa, servis, recyklace) a jak se na něj připravit včetně QR kódů nebo RFID jako nosiče dat."
tagy: [dpp, digitalni-pas-vyrobku, eu-regulace, udrzitelnost, compliance, "2026"]
zdroj_kanal: blog
kontext:
  background: |
    Digitální pas výrobku (Digital Product Passport, DPP) je strukturovaný digitální záznam, který shromažďuje informace o dopadu výrobku na životní prostředí a o společenské odpovědnosti při jeho výrobě. Podle Shopify blogu obsahuje údaje o původu surovin, použitých materiálech, výrobních postupech a pokyny k opravě nebo recyklaci. Zákazník i kontrolní orgán se k datům dostanou naskenováním QR kódu na výrobku nebo obalu. Cílem je větší transparentnost dodavatelských řetězců, dohledatelnost a soulad s předpisy.

    Článek řadí DPP do rámce unijní politiky oběhového hospodářství (Akční plán pro oběhové hospodářství). Jako hlavní důvody zavedení uvádí podporu opětovného použití, oprav a recyklace, posílení důvěry spotřebitelů, boj proti greenwashingu pomocí standardizovaných dat o uhlíkové stopě a vytvoření prostoru pro firmy s etickými dodavatelskými řetězci. Konkrétně jmenuje kategorie dat: původ produktu (model, výrobce, země původu), složení materiálu, výrobní proces (uhlíková stopa, spotřeba energie), sociální a etický dopad, servis a opravy, recyklace a likvidace a údaje o životním cyklu (záruka, očekávaná životnost, certifikace).

    Praktická část doporučuje pět kroků: seznámit se s předpisy a akty v přenesené pravomoci pro svůj obor (zejména elektronika, textil, akumulátory), zavést systémy sběru dat napříč dodavatelským řetězcem s možností dálkové aktualizace záznamů, zvolit nosič dat s unikátním identifikátorem (QR kód nebo RFID štítek), sladit model hodnotového řetězce s DPP spolu s dodavateli a logistikou a hledat nové příjmy, například prodloužené záruky, servisní sady nebo zpětný odběr. Důležité omezení: článek neuvádí harmonogram zavádění ani přesné termíny pro jednotlivé kategorie a neobsahuje implementační kroky pro Shopify (metafields, metaobjects) ani konkrétní aplikace. Tyto části jsou naše doplňující kontext a je nutné je ověřit v aktuálních aktech EU.

    Doplňující kontext mimo článek: rámcem je nařízení o ekodesignu udržitelných výrobků (ESPR, nařízení EU 2024/1781), které DPP zavádí postupně pro jednotlivé skupiny výrobků přes akty v přenesené pravomoci. Pro baterie platí samostatné nařízení o bateriích s povinným bateriovým pasem, jehož start je plánován na rok 2027. U textilu a elektroniky se uvádí horizont zhruba 2027 až 2028, přesné termíny a rozsah se ale mohou měnit s přijetím konkrétních aktů, takže před komunikací klientům je třeba je ověřit u oficiálních zdrojů Evropské komise.
  zdroje:
    - title: "Shopify: Co je digitální pas výrobku? Průvodce zavedením DPP"
      url: "https://www.shopify.com/cz/blog/digitalni-pas-vyrobku"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify blog na českém webu vysvětluje koncept digitálního pasu výrobku (DPP), tedy digitálního záznamu o výrobku, ke kterému se přistupuje přes QR kód nebo jiný nosič dat s unikátním identifikátorem. Pas shrnuje, odkud výrobek pochází, z čeho je vyrobený, jakou stopu zanechala jeho výroba, jak se opravuje a jak se po skončení životnosti recykluje nebo likviduje. Článek jako příklad složení materiálu zmiňuje baterie do elektromobilů a výčet dat dělí do sedmi oblastí: původ produktu, složení materiálu, výrobní proces, sociální a etický dopad, servis a opravy, recyklace a likvidace a životní cyklus.

Text vysvětluje, proč EU DPP prosazuje: podpora oběhového hospodářství, důvěra spotřebitelů, boj proti greenwashingu a nové obchodní příležitosti pro firmy s transparentním řetězcem. Pro e-shopy nabízí pětikrokový postup přípravy: sledovat předpisy pro svůj obor, zavést sběr dat napříč dodavatelským řetězcem, vybrat nosič dat (QR nebo RFID), sladit hodnotový řetězec s dodavateli a využít DPP k novým příjmům, například ze servisu, prodloužených záruk nebo zpětného odběru. Odpověď na otázku, kterých odvětví se DPP týká, zní podle článku především elektronika, textil, baterie, automobilový průmysl a obaly.

Důležité je, co článek neřeší. Neobsahuje časový harmonogram ESPR, přesné požadavky po kategoriích, ani konkrétní postup pro Shopify (metafields, metaobjects, generování QR kódů) či doporučené aplikace. Jde tedy o úvodní edukativní text, ne o implementační návod. Pro Shopify jsou technicky nejpřirozenějším místem pro strukturovaná data pas-relevantních atributů produktové metafields a metaobjects a QR kód může odkazovat na veřejnou stránku produktu nebo na dedikovanou stránku s daty. To je ale náš návrh, nikoli obsah článku, a konkrétní datový model bude záviset na finálních aktech pro danou kategorii.

## Pro koho je to relevantní

Pro PM/PO a obchodníky je to dobrý podklad pro rozhovory s klienty z textilu, elektroniky, baterií a dalších regulovaných kategorií, kteří se na DPP teprve připravují. Hodí se k vysvětlení, proč se vyplatí začít už teď sbírat strukturovaná produktová data (materiály, původ, servisní a recyklační informace) a mít je v řízeném zdroji, ať už jde o Shopify metafields, PIM nebo ERP. Nalehavost je střední: povinnost se podle dostupných informací blíží (okolo let 2027 až 2028 u některých kategorií), ale přesné termíny je nutné ověřit a jde spíše o plánování než o okamžitou akci.

Pro vývojáře žádná akce neplyne. Nejde o změnu Shopify platformy ani API, takže se nemění žádné endpointy ani verze. Souvislost je pouze koncepční: DPP bude vyžadovat spolehlivě udržovaná produktová data a unikátní identifikátory, což se podobá již existujícím vzorům s product metafields pro regulatorní informace a QR kódům jako nosičům odkazů. Pokud některý klient prodává regulovanou kategorii, stojí za to při dalším návrhu datového modelu produktů počítat s tím, že na něj bude DPP navazovat.
