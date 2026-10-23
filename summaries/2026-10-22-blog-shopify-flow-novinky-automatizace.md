---
date: 2026-10-22
title: "Shopify Flow novinky pro rychlejší a bezpečnější automatizaci"
slug: blog-shopify-flow-novinky-automatizace
zdroj: https://www.shopify.com/cz/blog/shopify-flow-novinky
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow je nativní merchant nástroj bez dopadu na API, ale tvorba workflow přes Sidekick, Test run a hromadné rušení běhů se hodí jako argument při doporučování automatizací merchantům."
dotcene_klienty: []
souvisejici: [flow-auto-buy-shipping-labels, flow-trigger-lifecycle-callback-relative-urls, flow-test-events-existing-data]
tldr: "Shopify Flow nově umí vytvořit workflow z popisu v běžné řeči přes Sidekick, má svislý layout editoru, Test run se vzorovými daty před spuštěním a možnost rušit čekající nebo opakující se běhy jednotlivě i hromadně."
tagy: [shopify-flow, automatizace, workflows, novinky, vat]
zdroj_kanal: blog
kontext:
  background: |
    Shopify Flow je nativní no-code automatizační nástroj v administraci Shopify. Workflow se v něm skládá ze tří stavebních bloků: triggeru (spouštěcí událost), volitelné podmínky a akce. Merchanti ho používají k rutinním úkolům, například k tagování zákazníků, upozornění na nízký sklad nebo k automatickému zpracování objednávek podle úrovně rizika. Aplikace třetích stran mohou Flow rozšiřovat vlastními triggery a akcemi, takže workflow často sahá i mimo samotný Shopify.

    Dosud ale zůstávaly čtyři slabá místa. Sestavit workflow vyžadovalo znát strukturu triggerů a podmínek. Rozsáhlé diagramy se špatně četly. Ověření logiky před ostrým spuštěním šlo jen pomocí vzorových dat nebo čekáním na reálnou událost. A pokud workflow začalo selhávat, třeba kvůli nedostupné externí službě, nebylo jednoduché zastavit už zařazené a opakující se běhy. V posledních měsících Shopify přidal několik nástrojů pro správu Flow, například version history s rollbackem a generování test events ze skutečných dat obchodu přes Sidekick. Nová dávka vylepšení na tyto kroky navazuje.

    Blogový článek ze 22. října 2026 shrnuje čtyři změny: tvorbu workflow z popisu v přirozeném jazyce pomocí Sidekicku, svislý layout editoru, funkci Test run a rušení selhávajících běhů. Nejde o oznámení nových triggerů nebo akcí a článek neuvádí konkrétní metriky rychlosti ani změny v zabezpečení. Rychlejší a bezpečnější automatizace je tu míněna prakticky, tedy kratší cesta k hotovému workflow a menší riziko škod při chybě.
  zdroje:
    - title: "Shopify: Shopify Flow novinky pro rychlejší a bezpečnější automatizaci"
      url: "https://www.shopify.com/cz/blog/shopify-flow-novinky"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

**Tvorba workflow přes Sidekick.** Sidekick, AI asistent v Shopify administraci, z popisu v běžné řeči vygeneruje kompletní workflow s triggerem, podmínkou a akcí. Článek uvádí příklad s označením zákazníků jako VIP po objednávce nad 4 000 Kč. Druhý příklad popisuje upozornění e-mailem, když zásoba některé varianty poprvé klesne pod 5 kusů. Autor pak před aktivací změní podmínku z méně než 5 na 5 a méně, celý postup mu zabere pod tři minuty. Sidekick workflow nikdy sám nezapne. Otevře ho k revizi a spustí se až po kliknutí na Activate. Aby Sidekick workflow postavil, musí být Flow nainstalovaný a otevřený v administraci. Čím konkrétnější zadání, tím lepší výsledek, takže věta s prahovou částkou funguje lépe než obecné označ VIP zákazníky. Složitější vícekrokové podmíněné logiky mohou vyžadovat ruční úpravy. Sidekick umí pracovat i s akcemi nainstalovaných aplikací třetích stran, například Klaviyo nebo ShipStation, ale logika specifická pro danou aplikaci se může muset dolaďovat ručně. Před aktivací se vyplatí zkontrolovat podmínky, porovnávací operátory a napojení na zákaznická data.

**Svislý layout editoru.** Workflow se teď čte shora dolů. Panel s nastavením je vlevo a návrhy Sidekicku zůstávají vpravo, takže diagram, doporučení i konfigurace jsou vidět současně. Přibyly čistší karty, výraznější zvýraznění výběru a rovnoměrnější odstupy mezi kroky. Tlačítko Auto-arrange přeskládá přeplněný diagram do svislé posloupnosti a více kroků lze vybrat pomocí Shift a táhnout je společně. Nová workflow používají svislý layout automaticky, starší byla podle článku převedena dříve a u každého workflow jde layout přepnout ručně. Jde čistě o vizuální změnu, triggery, podmínky ani akce se nemění.

**Test run před spuštěním.** Funkce simuluje workflow na vzorových datech ještě před aktivací. Jednotlivé kroky se postupně rozsvěcují a u každé podmínky je vidět, proč vyšla jako pravdivá nebo nepravdivá. Akce se pouze zobrazí, ale neprovedou, takže se nemění objednávky, zákaznické profily ani sklad. Když simulace dojde k reálné změně, například k odeslání e-mailu, úpravě skladu nebo zrušení objednávky, náhled se zastaví. Příklad z článku popisuje workflow se třemi větvemi podle rizika objednávky. Nízké riziko jde do běžného zpracování, střední se označí k ruční kontrole a vysoké se automaticky zruší s vrácením peněz. Test spočívá v prohnání vzorových objednávek každou větví. Článek doporučuje realistická vzorová data, otestování všech větví if/then/else, kontrolu výstupu Liquid proměnných (prázdné `customer.first_name` naznačuje jinou strukturu dat, než se čekalo) a opakování testu po každé změně limitu nebo podmínky.

**Rušení selhávajících běhů.** Běhy workflow, které čekají ve frontě nebo se opakují po chybě, lze zrušit jednotlivě i hromadně, fronta se vyčistí zhruba do 10 sekund. Článek popisuje situaci, kdy přes den vypadne API přepravní služby a čeká 200 objednávek, z nichž každá volá toto API. Bez možnosti běhy zastavit by se pokusy opakovaly hodiny, vyčerpávaly by limity požadavků a zaplevelovaly historii běhů i po vypnutí workflow. S rušením se fronta vyčistí během vteřin, integrace se opraví a workflow se znovu spustí. Jeden běh se ruší v historii běhů tlačítkem Cancel run, více běhů se vybere zaškrtávátky a zruší tlačítkem Cancel runs. Při deaktivaci workflow s probíhajícími běhy se Flow zeptá, zda je zrušit, nebo nechat doběhnout. Rušení je zdarma a nepočítá se do limitů Flow operací. Zastaví ale jen budoucí kroky, už provedené akce, třeba odeslané e-maily nebo upravený sklad, se vrátit nedají. U workflow s více akcemi je proto potřeba v detailu běhu zkontrolovat, které kroky už proběhly.

## Pro koho je to relevantní

Změny míří především na merchanty a e-shop týmy, které ve Flow automatizují provoz, a na ty, kteří s ním teprve začínají. Sidekick snižuje vstupní bariéru, protože první verzi workflow lze získat popisem v češtině nebo angličtině a vyladit ji ručně. Zkušenější uživatelé ocení svislý layout a Auto-arrange u rozsáhlých workflow a také Test run, který umožňuje bezpečně ověřit větvení před nasazením, zejména tam, kde workflow mění objednávky, sklad nebo refundace.

Pro agentury a implementační týmy je zajímavé hlavně rušení běhů. U workflow závislých na externích službách, například na přepravcích, ERP nebo aplikacích třetích stran, zkracuje výpadek služby dobu, po kterou fronta selhávajících běhů zatěžuje limity i přehlednost historie. Zároveň je dobré počítat s omezením, že zrušení nevrací provedené akce, takže u kritických automatizací pořád platí opatrný návrh workflow a kontrola dílčích kroků. Sidekick a Test run také dobře doplňují dřívější novinky kolem Flow, tedy generování test events z reálných dat obchodu a automatický nákup shipping labels. Dohromady usnadňují postavit, ověřit a provozovat automatizaci bez vývojářské práce.

Z hlediska priority jde o informativní novinku bez dopadu na veřejné API a bez nutnosti akce. Nic se nemusí měnit v existujících integracích ani workflow, nové funkce jsou volitelné. Dostupnost jednotlivých funkcí podle plánu a regionu článek podrobně nerozebírá, takže před doporučením konkrétnímu merchantovi stojí za to ověřit ji v Help Center dokumentaci Flow.
