---
date: 2026-09-27
title: "Jak zjistit, kdo vlastní doménu"
slug: blog-jak-zjistit-kdo-vlastni-domenu
zdroj: https://www.shopify.com/cz/blog/kdo-vlastni-domenu
shrnuto_dne: 2026-09-30
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Postup ověření vlastníka domény se hodí při due diligence e-shopu, při řešení DNS a doménových problémů před migrací a při hledání kontaktu na registranta cizí domény."
dotcene_klienty: []
souvisejici: [blog-ceny-domen-2026, blog-overeni-nazvu-firmy-obsazenost, blog-mam-domenu-jak-zacit-web]
tldr: "Shopify vysvětluje, jak přes WHOIS, RDAP a registry jako CZ.NIC nebo ICANN Lookup zjistit vlastníka domény, a upozorňuje, že kvůli GDPR a novým pravidlům ICANN jsou osobní údaje často skryté."
tagy: [domain, whois, ownership, research, gdpr, privacy]
zdroj_kanal: blog
kontext:
  background: |
    WHOIS je veřejně dostupný záznam o registraci domény. Obvykle obsahuje registrátora, datum registrace a expirace, name servery a kontaktní údaje registranta, správce a technického kontaktu. U generických domén (gTLD) jej postupně nahrazuje modernější protokol RDAP (Registration Data Access Protocol), který vrací strukturovaná data a umožňuje lépe řídit, komu se jaké údaje zobrazí. U české koncovky .cz vede registr sdružení CZ.NIC, které má vlastní vyhledávač a vlastní pravidla pro zveřejňování údajů.

    Článek popisuje pětikrokový postup: vybrat nástroj (WHOIS.com, ICANN Lookup, CZ.NIC, případně vyhledávače registrátorů jako GoDaddy nebo Hostinger), zadat doménu, ověřit, zda jsou údaje dostupné, nebo skryté za proxy službou, dohledat firmu přes obchodní rejstřík a nakonec použít reverzní vyhledávání k nalezení dalších domén stejného vlastníka. Pro historické záznamy a hromadné dotazy zmiňuje placené služby jako DomainTools, WhoisXML API nebo ViewDNS.info, pro dohledání e-mailových kontaktů pak Hunter.io a LinkedIn. Mezi typické důvody uvádí nákup již registrované domény, prověření dodavatelů a partnerů, řešení porušování autorských práv a bezpečnostní kontroly. Doporučuje také prověřit historii domény na PhishTank a případné spory o ochranné známky v databázi WIPO.

    Důležitou částí je ochrana soukromí. Od srpna 2025 platí nová ICANN Registration Data Policy, která omezuje veřejný přístup k osobním údajům, a spolu s GDPR proto velká část záznamů zobrazuje jen redigovaná data nebo údaje privacy služby. Pro oprávněné případy existuje systém RDRS (Registration Data Request Service), přes který lze požádat o neveřejné údaje u gTLD domén. Pokud WHOIS nic nevydá, pomáhají i techniky mimo samotný článek, například kontrola DNS a name serverů (často je vidět Cloudflare nebo hosting), historické snímky na Web Archive s původním impresem webu, reverzní DNS nebo prostý kontaktní formulář a impresum na webu. Je ale třeba počítat s tím, že výsledkem nemusí být konkrétní osoba, a s údaji nakládat v souladu s GDPR.
  zdroje:
    - title: "Shopify: Jak zjistit, kdo vlastní doménu"
      url: "https://www.shopify.com/cz/blog/kdo-vlastni-domenu"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Obecný edukační článek na českém blogu Shopify, který vysvětluje, jak zjistit, komu patří konkrétní doména. Vychází z WHOIS vyhledávání a jeho moderního nástupce RDAP. Ukazuje, jak postupovat přes oficiální vyhledávače (ICANN Lookup pro gTLD, CZ.NIC pro domény .cz) i komerční služby a jak z výsledku dohledat firmu v obchodním rejstříku nebo další domény stejného majitele. Samostatná část se věnuje ochraně osobních údajů. Po nástupu GDPR a zpřísnění pravidel ICANN od srpna 2025 je v záznamech často jen redigovaná podoba dat nebo kontakt na privacy službu, takže cesta k vlastníkovi vede přes RDRS, registrátora nebo nepřímé stopy, jako jsou DNS záznamy, historie webu nebo impresum.

Jde o čistě informační text bez jakékoli změny v platformě Shopify, API nebo administraci. Praktická hodnota je v opakovatelném postupu pro business research, competitive intelligence a hledání kontaktu při nákupu domény nebo při ověřování partnera.

## Pro koho je to relevantní

Článek je užitečný pro obchodníky a agentury, které řeší nákup už registrované domény, prověřují dodavatele nebo konkurenci, nebo potřebují dohledat kontakt na majitele webu, který například kopíruje jejich obsah. Hodí se i při přípravě migrace nebo spuštění nového e-shopu, kde je potřeba ověřit, kdo skutečně drží doménu a u koho je vedená, aby šlo správně nastavit DNS a předat přístupy.

Pro vývojáře a projektové manažery je hlavním poučením praktický rámec pro doménové due diligence a upozornění, že kvůli GDPR nelze na veřejné WHOIS údaje spoléhat. Vyplatí se mít v projektu jasně zaznamenaného registrátora a kontaktní osobu už při startu. Nalehavost je nízká a článek nevyžaduje žádnou akci, ale může posloužit jako podpůrný materiál při onboardingu a presales rozhovorech o doménách.
