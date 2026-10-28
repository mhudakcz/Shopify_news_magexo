---
date: 2026-10-28
title: "POS sales attribution — každý sale tracknut na associate (commission, performance)"
title_en: "Sales attribution per associate POS"
slug: pos-sales-attribution-per-associate
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud synchronizujeme POS objednávky do ERP nebo BI reportingu, může být atribuce prodavače podkladem pro výpočet provizí a hodnocení výkonu. Zda a v jaké podobě se atribuce objeví v datech objednávek, Editions neuvádí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-retail", "staff-attribution-pos-improvements", "unified-pos-staff-management"]
editions_release: fall-2026
tldr: "Editions Fall '26 v tématu Retail slibuje, že se každý prodej v POS zapíše prodavači, který ho udělal, aby šel hodnotit výkon jednotlivců a coachovat tým podle reálných dat. Popis je stručný a neuvádí tarif, region, datum ani API. Část základů (staff picker, reporty, automatická atribuce) už Shopify vydal v létě 2026."
tagy: [pos, sales-attribution, associate, commission, performance, retail]
zdroj_kanal: editions
kontext:
  background: |
    Atribuce prodejů prodavačům je v retailu základní stavební kámen pro provize, odměny a hodnocení výkonu. Bez ní se z pokladních dat nedá zjistit, kdo konkrétně prodal, a obchodníci proto dlouho řešili evidenci aplikacemi třetích stran, vlastními exporty nebo ručními tabulkami.

    Shopify POS má atribuci personálu už delší dobu. V červnu 2026 přišel redesignovaný výběr zaměstnance v POS v11.9, nové reporty Staff Attribution v POS Analytics a od 6. července 2026 automatická atribuce pro obchody, které si žádné vlastní nastavení nezvolily. Fall '26 Editions tuto oblast zařazují mezi položky tématu Retail a na stránce je nadepsaná jako Track every sale to the associate. Popis říká, že se zaznamená, který člen personálu každý prodej udělal, aby šlo posuzovat výkon jednotlivců a coachovat tým podle skutečných dat. Odkazuje na nápovědu k přidání personálu k prodeji.

    Zdrojová stránka neuvádí tarifní omezení, regiony, číslo verze POS ani datum nasazení a nezmiňuje žádné nové API. Z popisu také není zřejmé, kolik z položky je skutečná novinka a kolik jen shrnutí toho, co už je v POS k dispozici od léta. Dělené transakce a asistence, o kterých se v souvislosti s touto položkou uvažuje, Editions výslovně nezmiňují, jde tedy o náš výklad k ověření.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Staff attribution v POS automaticky zapnuto"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/staff-attribution-pos-improvements/"
    - title: "Archiv: Unified staff management pro POS a admin"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/unified-pos-staff-management/"
    - title: "Archiv: Editions Fall '26, Retail / POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-retail/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v podzimní edici Fall '26 zařadil do tématu Retail položku o atribuci prodejů jednotlivým prodavačům. Na stránce Editions nese nadpis Track every sale to the associate a slibuje, že POS zaznamená, který člen personálu každý prodej udělal. Obchodník tak může hodnotit výkon jednotlivců a coachovat tým na reálných číslech místo odhadů. Položka je v přehledu Retail řazená do části Personál a governance, vedle jednotné správy uživatelů, activity logu a hromadné správy personálu.

Co to znamená v praxi:

- **Každý prodej má svého prodavače.** Tržba se nepřipisuje jen pokladně nebo zařízení, ale konkrétnímu člověku.
- **Využití.** Podklad pro provizní schémata, hodnocení výkonu a týmové incentivy.
- **Nápověda.** Stránka odkazuje na dokumentaci k přidání personálu k prodeji, ruční zásah tedy zůstává součástí workflow.

Je potřeba držet v hlavě, že tohle není úplně nová oblast. Základy už vydal Shopify v létě 2026: nový výběr zaměstnance v POS v11.9, reporty Staff Attribution v POS Analytics a od 6. července 2026 automatickou atribuci pro obchody bez vlastního nastavení (podrobnosti v [článku o staff attribution](/Shopify_news_magexo/zmena/staff-attribution-pos-improvements/)). Z popisu v Editions nelze poznat, zda Fall '26 přidává něco nad rámec těchto funkcí, nebo jen shrnuje stav, ke kterému se POS za půl roku dostal.

Co Editions u této položky neuvádějí: tarifní omezení, regiony, číslo verze POS, datum nasazení ani žádné nové API nebo pole. Pokud počítáte s dělenými transakcemi nebo s asistencemi (více prodavačů u jednoho prodeje), je to náš výklad, který stránka nepotvrzuje.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-22 | Staff attribution improvements: nový staff picker v POS v11.9 a reporty Staff Attribution v POS Analytics |
| 2026-07-06 | Automatická aktivace atribuce pro eligible obchody bez vlastní konfigurace |
| 2026-09-17 | API verze 2026-10 odstraňuje z POS UI Extensions pole session.currentSession.staffMemberId (náhrada: reaktivní session.staffMember.value?.id) |
| 2026-10-28 | Editions Fall '26 uvádějí atribuci prodejů prodavačům jako položku tématu Retail, bez data dostupnosti |

U samotné položky z Editions žádné datum ani označení připravovaná funkce uvedené není. Před nabídkou obchodníkovi je proto potřeba ověřit stav přímo v jeho obchodě a v nápovědě Shopify.

## Dopad pro nás

**Pro vývojáře:** Editions u této položky nezmiňují žádné API. Pokud obchodník počítá provize nebo výkon mimo Shopify, tedy v ERP, BI nástroji nebo mzdovém systému, je nutné na testovacím obchodě ověřit tři věci. Zaprvé, zda a v jaké podobě se atribuce prodavače objevuje v datech objednávek (na úrovni objednávky, nebo jednotlivých položek). Zadruhé, jaká oprávnění aplikace potřebuje k přístupu k datům o personálu. Zatřetí, jak se atribuce chová u vratek, výměn a dělených plateb, protože právě tam se provize obvykle počítají špatně. Pokud nasazená POS UI extension čte identitu přihlášeného zaměstnance, pozor na [odstranění session.currentSession.staffMemberId v API 2026-10](/Shopify_news_magexo/zmena/pos-ui-extensions-staffmemberid-removed-2026-10/).

**Pro PM / PO:** Jde o merchant-facing funkci s nízkou naléhavostí, bez povinné akce. Je to ale dobrý obchodní argument pro retail obchodníky s e-shopem, kteří dnes provize a výkon prodavačů vedou ručně nebo aplikací třetí strany. U takových obchodníků má smysl zjistit, jak atribuci používají (automatická, ruční, na úrovni položky), a nabídnout propojení atribuovaných prodejů s jejich mzdovým nebo reportingovým systémem. U větších týmů souvisí atribuce s [jednotnou správou uživatelů POS a Adminu](/Shopify_news_magexo/zmena/unified-pos-staff-management/), protože kvalita dat stojí na tom, že má každý prodavač vlastní účet. Sdílené přihlášení na pokladně by atribuci znehodnotilo.

## Použití v Integrátoru

Atribuce prodavače by se u retailových obchodníků mohla stát vstupem pro export POS objednávek do ERP nebo reportingu a pro výpočet provizí, pokud se ukáže, že je dostupná v datech objednávek. Do ověření toho na testovacím obchodě nemáme důvod nic měnit a nasazené synchronizace tím nejsou ovlivněny.
