---
date: 2026-10-22
title: "Co je OneTrust software? Klíčové funkce, výhody a nevýhody"
slug: blog-onetrust-software-cookie-consent
zdroj: https://www.shopify.com/cz/blog/onetrust-software
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro merchanty řešíme tracking, marketingové automatizace nebo napojení na CRM, volba consent platformy ovlivňuje, jaká data a kdy smíme zpracovávat; přímý dopad na API integrace článek nemá."
dotcene_klienty: []
souvisejici: [app-pixel-activity-log, customer-data-erasure-recent-orders, online-store-script-tags-deprecated-2027]
tldr: "Shopify blog představuje OneTrust jako enterprise platformu pro privacy a compliance (consent, vyřizování žádostí o výmaz, řízení rizik, ESG), ale neobsahuje ceník, srovnání s Cookiebotem ani návod na napojení do Shopify."
tagy: [onetrust, cookie-consent, gdpr, privacy, compliance, srovnani]
zdroj_kanal: blog
kontext:
  background: |
    Článek na českém Shopify blogu je produktový přehled OneTrustu, globální softwarové firmy zaměřené na ochranu dat a compliance. Podle textu ji v roce 2016 založil Kabir Barday a pomáhá firmám plnit předpisy jako GDPR a připravovaný EU AI Act. Platforma se opírá o čtyři oblasti. Privacy a data governance zahrnuje správu souhlasů, cookie lišty a vyřizování žádostí subjektů údajů (například o výmaz). GRC a security assurance řeší řízení rizik, bezpečnostní hodnocení a auditní dokumentaci. Ethics a compliance pokrývá školení zaměstnanců a bezpečné nahlašování pochybení. ESG a udržitelnost slouží ke sledování dopadů, například uhlíkové stopy, a k reportingu pro investory a regulátory.

    Z funkcí článek jmenuje centrální evidenci souhlasů a preferencí se synchronizací do dalších systémů a propojením na reklamní sítě, mapování a kontrolu třetích stran a dodavatelů, dokumentaci AI nástrojů a jejich přístupu k datům, automatizaci privacy úkolů (výmazy, označování citlivých dat, retenční pravidla), jednotný panel pro politiky a hodnocení rizik a řízení využívání dat včetně označování datasetů pro trénink AI. Platforma se podle textu napojuje na jiné nástroje přes integrace a API, například na CRM a e-mailové systémy. Konkrétní konektory ani postup pro Shopify článek neuvádí.

    Hodnocení je záměrně stručné. Výhodou je všechno na jednom místě, automatická synchronizace preferencí napříč systémy a integrace na běžné nástroje. Nevýhodou je cena, která se liší podle velikosti firmy a rozsahu a pro menší subjekty může být vysoká, pokud využijí jen zlomek funkcí, a také čas na zavedení a zaškolení. V sekci s častými dotazy se uvádí, že OneTrust používá 75 firem z Fortune 100, že drží certifikace ISO 27001 a HITRUST a že mezi uživateli jsou například Microsoft, Pfizer, PUMA a Samsung. Radu pro začátek formuluje článek obecně, tedy začít jednou funkcí a postupně rozšiřovat. Cenové úrovně, srovnání s Cookiebotem a samostatná sekce o Shopify v textu chybí, takže původní zadání, které s nimi počítalo, článek nenaplňuje.
  zdroje:
    - title: "Shopify: Co je OneTrust software? Klíčové funkce, výhody a nevýhody"
      url: "https://www.shopify.com/cz/blog/onetrust-software"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Jde o edukační blogový článek, ne o produktovou novinku Shopify ani o změnu v API. Vysvětluje, co je OneTrust a k čemu slouží, a prochází jeho moduly. Text je psaný pro širší publikum a míří spíš na větší firmy, které řeší compliance napříč celou organizací, než na typický menší e-shop.

Z pohledu e-commerce je nejzajímavější privacy část. Zahrnuje cookie lištu a správu souhlasů, centrální evidenci voleb zákazníků a jejich synchronizaci do dalších systémů, například CRM, e-mailingu nebo reklamních sítí, a také automatizované vyřizování žádostí o výmaz osobních údajů. Ostatní oblasti (GRC, etika a compliance, ESG, řízení AI a třetích stran) patří spíš do interního governance velkých firem.

Hodnocení v článku je krátké. Plus je jednotné místo pro privacy, preference a rizika s integracemi na běžné nástroje. Mínus je cena závislá na velikosti firmy a rozsahu nasazení a nutnost investovat čas do zavedení. Jako důkaz důvěryhodnosti text uvádí 75 firem z Fortune 100, certifikace ISO 27001 a HITRUST a jména jako Microsoft, Pfizer, PUMA nebo Samsung.

Důležité je, co v článku není. Neobsahuje ceník ani cenové úrovně, jen konstatuje, že cena se liší. Nesrovnává OneTrust s Cookiebotem ani jinými consent management platformami. A nemá žádnou sekci o napojení na Shopify, takže se z něj nedozvíme, jak OneTrust komunikuje s Customer Privacy API nebo s pixely v obchodě. Kdo hledá právě tyto informace, musí sáhnout po dokumentaci OneTrustu a Shopify Help Center.

Naše poznámka, která v článku není. Rozhodnutí kupujícího o souhlasu se na Shopify promítá do toho, jak se chovají app pixels. Z dřívější novinky o activity logu pro app pixels víme, že režim Optimized umí data access automaticky pozastavit, pokud kupující souhlas nevyjádřil. Consent platforma tedy není izolovaná cookie lišta, ale ovlivňuje i to, co z obchodu odchází do analytiky a reklamy. Další souvislost je deprecation ScriptTag API k 1. 3. 2027. Pokud některá consent nebo tracking aplikace dosud vkládá své skripty přes script tagy, bude potřeba ověřit u dodavatele, že má plán migrace na Web Pixels nebo Theme App Extensions.

## Pro koho je to relevantní

Relevantní je to hlavně jako FYI pro PM, PO a obchodní rozhovory s merchanty, kteří se ptají na GDPR, cookie lištu nebo alternativy k Cookiebotu. Článek dává základní slovník a přehled toho, co enterprise privacy platforma umí, ale pro rozhodnutí o výběru nástroje nestačí. Chybí v něm cena, srovnání a Shopify specifika, takže ho nelze použít jako podklad pro nabídku nebo doporučení konkrétního řešení.

Pro technický tým je přímý dopad nulový. Žádná změna chování platformy ani API se neoznamuje a termín nebo akce z toho neplyne. Hodí se jako orientační text, když merchant zmíní OneTrust a my potřebujeme rychle pochopit, co všechno za tím je. U menších a středních obchodů je rozumné počítat s tím, že plný rozsah OneTrustu bude převyšovat jejich potřeby a že relevantní bude spíš samotná consent část.

Souvislosti s dalšími novinkami. Activity log pro app pixels dává merchantovi přehled o tom, kdy a proč se měnil data access jednotlivých pixelů, což je užitečný podklad pro GDPR audit. Změny ve zpracování žádostí o výmaz přes webhook customers/redact ukazují, že i na straně Shopify se compliance flow upřesňují a systémy ukládající data o zákaznících s nimi musí počítat. Automaticky generované store policies pak pokrývají právní texty obchodu, ale nenahrazují consent management ani právní poradenství.
