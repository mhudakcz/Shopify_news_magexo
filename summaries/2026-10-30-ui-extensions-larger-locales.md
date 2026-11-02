---
date: 2026-10-30
title: "UI extensions podporují větší počet locales (i18n rozšíření)"
title_en: "UI extensions now support a larger number of locales"
slug: ui-extensions-larger-locales
zdroj: https://shopify.dev/changelog/posts/ui-extensions-now-support-a-larger-number-of-locales
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se jen případů, kdy vlastníme nebo udržujeme UI extension s větším počtem jazykových mutací; u extensions, které se do dřívějšího limitu vešly, bez dopadu a bez nutné akce."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "ui-extensions-bundle-size-exception-request", "right-to-left-languages-arabic-hebrew-urdu", "admin-3-new-languages-rtl"]
tldr: "Shopify zrušil limit 256 KB na celkovou velikost všech locale souborů UI extension, takže extension může nést víc jazyků; limit 30 KB na jeden locale soubor zůstává a formát, pojmenování i fallback se nemění."
tagy: [ui-extensions, i18n, locales, checkout, customer-account, developer]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Technicky jde o odstranění jednoho limitu, ne o nový seznam jazyků. Podle dev changelogu UI extensions od 30. října 2026 nemají omezení 256 KB na součet velikostí svých locale souborů. Limit 30 KB na každý jednotlivý locale soubor zůstává, stejně jako formát souborů, jejich pojmenování (příspěvek uvádí jako příklad de.json a pt-BR.json) a pravidla fallbacku na jiný jazyk. Pro extensions, které se do původního limitu vešly, se nemění nic a nemusí nic dělat.

    Změna navazuje na zvyšující se jazykové pokrytí platformy. Dva dny před zveřejněním vyšel Editions Fall '26 a už 2. října 2026 Shopify oznámil, že Admin je dostupný v arabštině, urdu a hebrejštině a že RTL podpora zahrnuje i checkout a customer accounts. Samotný příspěvek ale žádné konkrétní nové jazyky nejmenuje a Editions téma Developer tuto položku neobsahuje, takže spojitost s RTL jazyky je náš výklad kontextu, ne tvrzení Shopify. Zároveň je dobré nezaměňovat tento limit s limitem na velikost zkompilovaného JavaScriptu (bundle), o kterém jsme psali dříve a kterého se tento příspěvek netýká.

    Pro merchanty a týmy, které extension spravují, je dopad nepřímý: překladové soubory přestávají být omezením při rozšiřování o další trhy. Praktický význam to má hlavně u aplikací, které nabízejí rozhraní v mnoha jazycích najednou. Při plně vytížených souborech by dřívější strop 256 KB stačil jen na zhruba osm souborů po 30 KB, takže u obsáhlejších překladů a desítek jazyků mohl být reálnou překážkou.
  zdroje:
    - title: "Shopify: UI extensions now support a larger number of locales"
      url: "https://shopify.dev/changelog/posts/ui-extensions-now-support-a-larger-number-of-locales"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v dev changelogu oznámil, že UI extensions **už nemají limit 256 KB na celkovou velikost všech locale souborů**. Dosud se do tohoto limitu sčítaly všechny soubory ve složce `locales`, takže extension s větším počtem jazyků nebo s obsáhlými překlady mohla narazit na strop dřív, než jí došly jazyky k přidání. Nově tento souhrnný strop neplatí.

Beze změny zůstává:

- limit **30 KB na každý jednotlivý locale soubor**,
- formát a pojmenování souborů (například `de.json`, `pt-BR.json`),
- chování fallbacku, tedy to, co se zobrazí, když pro daný jazyk překlad chybí.

Příspěvek je psaný obecně pro UI extensions a odkazuje na návody k lokalizaci checkout a customer account extensions. Admin ani POS v textu nezmiňuje. Neuvádí ani žádnou konkrétní verzi API ani žádné nové jazyky; z toho, co je publikované, jde výhradně o uvolnění limitu.

## Časová osa

- **30. 10. 2026** — changelog zveřejněn; podle textu příspěvku změna platí od tohoto dne
- **31. 10. 2026** — datum účinnosti v metadatech stránky se o den liší od textu příspěvku; v praxi to nemá význam, protože změna je pouze uvolnění limitu
- **Dál** — existující verze extensions fungují jako dříve a nevyžadují novou verzi ani redeploy

## Dopad pro nás

**Pro vývojáře:** Pokud jsme u některé extension dosud museli omezovat počet jazyků nebo zkracovat překladové řetězce kvůli limitu 256 KB, můžeme jazyky přidat zpět. Postup podle Shopify je jednoduchý: přidat locale soubory do složky `locales` (každý pod 30 KB), nasadit přes `shopify app deploy` a otestovat v development store s nastaveným jazykem obchodu nebo zákazníka na nový jazyk. Stále platí limit 30 KB na soubor, takže je lepší nepřenášet do locale souborů zbytečně dlouhé texty. Žádná migrace ani změna kódu není nutná.

**Pro PM / PO:** Nízká naléhavost a žádný termín. Pro české a slovenské obchody se aktuálně nic nemění. Změna je relevantní hlavně tehdy, když projekt cílí na víc trhů najednou a používá vlastní checkout nebo customer account extension s vlastními texty. V takovém případě už počet jazyků nemusí být technicky omezený velikostí překladových souborů, ale spíš tím, kolik jazyků dokážeme udržovat a testovat. Související RTL jazyky (arabština, hebrejština, urdu) jsou samostatné téma popsané v [přehledu RTL](/Shopify_news_magexo/zmena/right-to-left-languages-arabic-hebrew-urdu/) a tento příspěvek je výslovně nezmiňuje.

## Použití v Integrátoru

Bez přímého dopadu, pokud žádná naše UI extension dosud nenarazila na limit locale souborů. Užitečné jako informace při plánování vícejazyčných extensions, kde už se nemusí hlídat součet velikostí překladů, jen velikost každého souboru.

## ⬅️ Související

🔗 [Editions Fall '26 — přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Editions Fall '26 — Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
🔗 [UI extensions: výjimka z limitu velikosti bundlu](/Shopify_news_magexo/zmena/ui-extensions-bundle-size-exception-request/)
🔗 [Right-to-left jazyky — Arabic, Hebrew, Urdu](/Shopify_news_magexo/zmena/right-to-left-languages-arabic-hebrew-urdu/)
🔗 [Shopify Admin: nové jazyky Arabic, Urdu, Hebrew](/Shopify_news_magexo/zmena/admin-3-new-languages-rtl/)
