---
date: 2026-10-20
title: "Stock counts v Shopify Admin — kompletní cycle count workflow bez third-party apps"
title_en: "Create, manage and review stock counts in Shopify admin"
slug: stock-counts-shopify-admin
zdroj: https://changelog.shopify.com/posts/create-manage-and-review-stock-counts-in-shopify-admin
shrnuto_dne: 2026-10-23
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-20
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Schválená inventura mění on-hand množství, takže se dotkne každé synchronizace skladu s ERP nebo WMS u obchodníků, kteří stock counts začnou používat."
dotcene_klienty: []
souvisejici: [pos-run-stock-counts, physical-inventory-feature-preview, inventory-adjustment-full-change-tracking]
tldr: "Shopify Admin má nativní workflow pro inventury: vytvoření a naplánování countu, přidání produktů vyhledáním nebo skenem čárových kódů, přidělení personálu pro práci v Admin nebo POS, kontrola rozdílů a schválení před změnou skladu, to vše s auditní stopou a novými oprávněními."
tagy: [inventory, stock-counts, cycle-count, admin, operations, pos]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Inventura skladu je jedna z nejméně atraktivních, ale nejdůležitějších provozních činností každého obchodníka s fyzickým zbožím. Pokud se napočítaný stav liší od stavu v systému, obchod buď prodává zboží, které nemá, nebo naopak drží zásoby, které se v e-shopu neukazují. Do Shopify Adminu se přitom výsledek inventury dlouho dostával oklikou: obchodníci počítali na papír nebo v tabulkách, případně používali samostatné inventory aplikace třetích stran, a výsledná čísla pak ručně zapisovali jako úpravy množství. Proces byl pomalý, náchylný na překlepy a bez spolehlivé stopy o tom, kdo konkrétní číslo napočítal.

    Shopify v posledních měsících tuto mezeru zaplňuje postupně. V červenci 2026 ukázal v unstable Admin GraphQL API preview primitiv pro fyzický sklad včetně counts, což byl signál pro vývojáře, ne hotová funkce. Koncem září pak přišla první merchant verze na straně POS, kde personál počítá zboží na prodejně a plánování i schválení zůstává v Admin. Nový post z 20. října 2026 tento obraz dokončuje: stock counts lze nyní vytvářet, spravovat a kontrolovat přímo v Shopify Adminu jako ucelený proces od plánování po schválení.

    Podle zdrojového postu Shopify drží celý workflow uvnitř Adminu, takže obchodník nepotřebuje tabulky ani manuální obchvaty a zároveň má záznam o tom, kdo co napočítal a co se změnilo. Post neuvádí žádné API ani GraphQL rozšíření, dostupnost podle tarifu či regionu ani rozpis nasazení. Přidělování countů přes Shopify Mobile se v něm také nezmiňuje, zmíněny jsou pouze Admin a POS. Podrobnosti jsou v nápovědě Shopify v sekci Inventory counts.
  zdroje:
    - title: "Shopify: Create, manage and review stock counts in Shopify admin"
      url: "https://changelog.shopify.com/posts/create-manage-and-review-stock-counts-in-shopify-admin"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify Admin dostal nativní workflow pro inventury skladu. Celý proces se dá vést na jednom místě a skládá se z těchto kroků:

- **Vytvoření a naplánování:** stock count se vytvoří a naplánuje přímo v Adminu.
- **Výběr produktů:** produkty se do countu přidávají vyhledáním nebo skenováním čárových kódů.
- **Přidělení personálu:** count lze přidělit členům týmu, kteří ho dokončí buď v Adminu, nebo v POS.
- **Souběžná práce:** do jednoho countu může přispívat více lidí, aniž by si navzájem přepisovali napočítané hodnoty.
- **Sledování:** u každého množství je vidět, kdo ho zapsal, a průběh countu je dohledatelný od vytvoření po dokončení.
- **Review a schválení:** rozdíly mezi napočítaným a evidovaným množstvím se zkontrolují dřív, než se změní stav skladu.
- **Oprávnění:** nová nastavení řídí, kdo smí počítat a kdo smí rozdíly kontrolovat a schvalovat.

Stojí za to vztáhnout si to k dřívější novince o stock counts v POS. Tam šlo o to, že personál na prodejně počítá v POS a Admin slouží k plánování a schválení. Nový post rozšiřuje obraz o plnohodnotnou práci s countem v Adminu: vytváření, správa, přidělování i review jsou teď součástí jednoho nástroje. Cycle count (průběžná kontrola části sortimentu) a plná inventura celé lokace se v postu nerozlišují jako dva typy. Rozdíl je dán rozsahem produktů, které obchodník do countu přidá.

Co post neříká, je stejně důležité jako to, co říká. Neuvádí žádnou novou API metodu ani změnu schématu, tarifní podmínky ani minimální verzi POS. U dřívějšího POS postu byly podmínkou POS Pro a verze 11.16 nebo novější. Zda stejné podmínky platí pro nový Admin workflow, z postu nevyplývá, a proto to před nabídkou obchodníkovi stojí za ověření v nápovědě nebo na jeho obchodě.

## Časová osa

- **2026-07-17** — Shopify zveřejnil v unstable Admin GraphQL API feature preview Physical inventory (bins, counts, purchase orders), zatím jen pro vývojáře a mimo produkci.
- **2026-09-28** — Stock counts v POS: počítání na prodejně, plánování a schválení v Admin.
- **2026-10-20** — Zveřejněn kompletní workflow pro vytváření, správu a review stock counts v Shopify Adminu, včetně přidělování personálu a nových oprávnění.
- **Další vývoj** — datum případné stabilizace API pro counts a rozpis nasazení podle tarifů nebo regionů zdrojový post neuvádí.

## Dopad pro nás

**Pro vývojáře:** Post neoznamuje žádnou novou API metodu ani změnu schématu, takže není co migrovat. Týká se nás nepřímo: schválení countu změní on-hand množství, a tedy ovlivní každý systém, který inventář synchronizuje (ERP, WMS, feedy pro marketplace). Dokud je count rozpracovaný nebo čeká na schválení, sklad se nemění, takže neschválené rozdíly se do navazujících systémů nedostanou. Doporučujeme u prvního obchodníka, který funkci zapne, ověřit na testovacím countu, jak se schválení projeví v inventory událostech a webhookách, které naše synchronizace odebírá (typicky změny inventory levels), a zda se po schválení množství nepřepíše jiným zdrojem pravdy o skladu. Pokud externí systém drží vlastní inventurní proces, hrozí dvojí evidence stejné činnosti. Je dobré dopředu domluvit, který systém je pro inventuru hlavní. Souvisí to také s dříve zveřejněným preview primitiv physical inventory v unstable Admin API, které zatím zůstává mimo produkční použití, a s auditními údaji o úpravách skladu dostupnými přes inventory adjustment groups.

**Pro PM / PO:** Jde o novou příležitost pro obchodníky s kamennými prodejnami i sklady, kteří dnes inventury řeší tabulkami, CSV importy nebo samostatnými aplikacemi. Nativní workflow sjednocuje proces pro online i retail a nabízí auditní stopu, která se při počítání na papír ztrácí. Můžeme ji nabídnout jako zjednodušení provozu a potenciální úsporu nákladů za aplikaci třetí strany, ale je třeba být opatrní: post nezmiňuje API, takže obchodníci, kteří mají inventuru napojenou na WMS nebo ERP, nemusí nativní nástroj bez dalších úprav použít. Při konzultaci stojí za to hlídat tři věci: nastavení oprávnění (kdo smí počítat a kdo schvalovat), kvalitu čárových kódů u produktů (skenování je tak dobré, jak čistá jsou data, pomáhá i podpora více barcodes na variantu) a pravidla, co dělat s většími rozdíly před schválením. Urgence je střední: nic nevyprší ani se nerozbije, ale funkce se obchodníkům objeví přímo v Adminu, takže se na ni mohou začít ptát.

## Použití v Integrátoru

Přímý dopad na naši integraci nemáme, funkce je čistě na straně Admin a POS a post nezmiňuje žádné API. Relevantní je u obchodníků, kterým synchronizujeme sklad s externím systémem, protože schválená inventura se stane novým zdrojem změn on-hand množství.
