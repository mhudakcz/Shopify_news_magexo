---
date: 2026-10-28
title: "Sidekick + SimGym — otestuje návrhy před aplikací (sandbox tvého storu)"
title_en: "SimGym tested recommendations"
slug: sidekick-simgym-tested-recommendations
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchant-side funkce v Shopify adminu bez API povrchu, kterou naše moduly nevolají. Možné využití je procesní: návrh změny theme nebo obsahu nechat nejdřív otestovat Sidekickem v SimGymu a teprve pak ho nasadit v obchodě, který spravujeme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-sidekick", "simgym-ai-store-analysis", "simgym-deep-theme-analysis"]
editions_release: fall-2026
tldr: "Ve Fall '26 Sidekick navrhuje vylepšení obchodu a před jejich použitím je testuje v SimGymu, simulátoru AI nakupujících ze Spring '26. Merchant si pak vybere, co z otestovaných návrhů použije. Editions neuvádějí dostupnost, plány ani to, zda výsledek obsahuje odhad dopadu na konverze nebo tržby; to je zatím naše domněnka, kterou je potřeba ověřit přímo v adminu."
tagy: [sidekick, simgym, sandbox, testing, ai]
zdroj_kanal: editions
kontext:
  background: |
    SimGym je Shopify nástroj, který simuluje nakupování pomocí AI. Virtuální shoppeři s realistickými profily procházejí storefront (homepage, kolekce, produktové stránky, košík, vyhledávání) stejně jako skutečný návštěvník a výstupem jsou nahrávky průchodů, logy akcí a doporučení seřazená podle dopadu na konverze. Od března 2026 běží v AI Research Preview pro eligible merchanty a v Editions Spring 2026 přibyla samostatná analýza libovolného theme, živého i konceptu. Podle archivu funguje jen na Liquid storefrontech a každá simulace spotřebuje kredit.

    Sidekick je AI asistent v Shopify adminu. Editions Fall 2026 s názvem Exponential ho posouvají z chatu k agentnímu pracovníkovi. Dvanáct položek tématu Sidekick zahrnuje i položku Recommendations tested by Sidekick: Sidekick sám identifikuje vylepšení obchodu, otestuje je v SimGymu a merchant si prohlédne výsledky a vybere, které z nich použije. Tím se dvě dosud oddělené věci, návrh změny a její ověření, spojují do jednoho kroku.

    Důležité je rozlišit, co Editions říkají a co si k tomu domýšlíme. Stránka Editions uvádí pouze to, že návrhy jsou identifikovány a testovány pomocí SimGymu a že merchant volí, co použije. Neuvádí slovo sandbox, neuvádí odhad dopadu na konverze ani tržby, neuvádí status dostupnosti (live, preview, coming soon), plány, regiony ani cenu testů. Označení sandbox v titulku i představa odhadovaného dopadu před kliknutím na Apply jsou proto náš výklad: SimGym je simulované prostředí, kde se dá změna vyzkoušet bez živých zákazníků, ale to, jak přesně bude výsledek v Sidekickovi vypadat, je nutné ověřit v adminu. Simulovaný nakupující není skutečný zákazník, takže výsledek testu je filtr a podklad pro rozhodnutí, ne záruka výsledku.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Help: SimGym"
      url: "https://help.shopify.com/en/manual/online-store/simgym"
    - title: "Shopify Changelog: SimGym AI Research Preview"
      url: "https://changelog.shopify.com/posts/shopify-simgym-is-now-available-in-ai-research-preview-for-all-eligible-merchants"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Ve Fall '26 (téma Sidekick, položka Recommendations tested by Sidekick) přestává Sidekick navrhovat vylepšení obchodu naslepo. Podle popisu na stránce Editions návrhy nejdřív identifikuje a otestuje pomocí SimGymu a merchant si pak prohlédne výsledky a vybere, které z nich použije. Obrázek u položky podle alt textu ukazuje jednotlivé testy ve stavech dokončeno, běží a koncept, takže se zdá, že testy jsou samostatné běhy, které lze sledovat.

Pracovní postup, jak ho z popisu čteme:

1. **Návrh** — Sidekick najde v obchodě místa k vylepšení (v rámci tématu Guidance from Sidekick on more of your store zohledňuje i nainstalované aplikace a webový průzkum oboru).
2. **Test v SimGymu** — návrh se vyzkouší proti simulovaným nakupujícím, tedy bez živého provozu a bez dopadu na skutečné zákazníky.
3. **Výběr** — merchant vidí výsledky a rozhodne, které návrhy použije. Teprve potom se něco mění v obchodě.

Co je potvrzené a co je naše domněnka:

- **Potvrzeno Editions:** Sidekick navrhuje, SimGym testuje, merchant vybírá.
- **Naše domněnka, neověřeno:** označení sandbox pro simulované prostředí a výstup ve formě odhadovaného dopadu (růst konverzí, změna tržeb) před potvrzením změny. Editions o odhadu dopadu nic neříkají. Archiv u SimGymu zmiňuje doporučení seřazená podle dopadu na konverze, tedy pořadí důležitosti, ne číselný odhad tržeb. Než budeme merchantům slibovat konkrétní čísla, je potřeba vidět, co Sidekick skutečně zobrazuje.
- **Editions neuvádí:** status dostupnosti, plány, regiony, cenu nebo spotřebu kreditů a to, jaké typy změn lze v SimGymu otestovat.

Vazba na SimGym ze Spring '26 přináší několik omezení, která podle archivu platí pro samotný nástroj a mohou se projevit i ve spojení se Sidekickem: funguje na Liquid storefrontech (Hydrogen a headless nejsou podporovány), vyžaduje aktivní Shopify Network Intelligence a alespoň jeden produkt v katalogu a simulace se platí kredity. Zda se to přenáší do Sidekicka, nevíme.

## Časová osa

- 2026-03-11 — SimGym spuštěn v AI Research Preview pro všechny eligible merchanty
- 2026-03-26 — Hloubková analýza jednoho theme v izolaci
- 2026-06-17 — Editions Spring '26: samostatná analýza libovolného theme, zaměření na konkrétní oblasti, nahrávky shopperů
- 2026-10-28 — Editions Fall '26: Sidekick testuje svá doporučení v SimGymu a merchant vybírá, co použije. Stránka Editions u položky neuvádí datum dostupnosti ani status.

## Dopad pro nás

**Pro vývojáře:**
Funkce je čistě merchant-side a nemá žádný API ani extension povrch, takže na naší straně není co implementovat. Prakticky je zajímavá jako rychlá kontrola před předáním změn: před nasazením upraveného theme nebo textů v obchodě, který spravujeme, lze nechat Sidekicka a SimGym ověřit, zda návrh nepůsobí proti nákupnímu procesu. Je potřeba počítat s tím, že simulovaný nakupující není skutečný zákazník, takže výsledek nenahrazuje A/B test ani vlastní QA. Otevřené otázky, které je potřeba vyzkoušet v adminu:

- jaké typy změn lze otestovat (theme je zřejmé, ceny, texty nebo nastavení checkoutu ne);
- zda lze test spustit nad konceptem theme, nebo jen nad živým obchodem;
- jak se test počítá do kreditů a jaké jsou limity;
- zda funguje u obchodů na Hydrogenu nebo jiném headless řešení (podle archivu SimGym ne).

**Pro PM / PO:**
Pro merchanty, zejména s nižší návštěvností, kde A/B testy nemají dost dat, může jít o způsob, jak zkrátit cestu od nápadu k ověřené změně. Jako argument v rozhovoru se zákazníkem je ale vhodné držet se potvrzeného: Sidekick navrhuje, SimGym testuje, rozhoduje merchant. Neslibovat konkrétní zvýšení konverzí ani zobrazení odhadu tržeb, dokud to nepotvrdí admin nebo dokumentace. Spojení s hromadnými změnami z téhož tématu (jeden plán, jedno schválení) vyvolává otázku, zda se test provede i nad celým dávkovým plánem, nebo jen nad jednotlivými návrhy. To Editions také neuvádějí.

## Použití v Integrátoru

Funkce nemá API povrch a do našich modulů nezasahuje. Využijeme ji procesně: návrhy změn v obchodech, které spravujeme, lze nechat nejdřív otestovat Sidekickem a SimGymem a teprve pak je nasadit.

## Související

- [Editions Fall '26: Sidekick — téma](/Shopify_news_magexo/zmena/editions-fall-2026-sidekick/) — celý přehled tématu včetně dávkových změn a plovoucího chatu
- [SimGym: AI simulovaný shopper analyzuje libovolný theme](/Shopify_news_magexo/zmena/simgym-ai-store-analysis/) — nástroj, na kterém testování stojí
- [SimGym: deep analýza theme](/Shopify_news_magexo/zmena/simgym-deep-theme-analysis/) — předchůdce samostatné analýzy

## Zpět na hub

[Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
