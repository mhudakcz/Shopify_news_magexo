---
date: 2026-08-18
title: "Prompty pro Midjourney — struktura, tipy a příklady"
slug: blog-prompty-pro-midjourney
zdroj: https://www.shopify.com/cz/blog/prompty-pro-midjourney
shrnuto_dne: 2026-08-19
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Principy stavby promptu (subjekt/styl/parametry) lze využít při návrhu AI-asistovaných workflow pro generování vizuálů k produktům."
dotcene_klienty: []
souvisejici: [blog-ai-prompty, blog-prompty-chatgpt-ecommerce, blog-graficke-trendy-2026]
tldr: "Shopify blog radí, jak stavět prompty pro Midjourney — strukturu subjekt/styl/parametry, práci s váhou prvků a klíčové parametry pro produktové vizuály a branding."
tagy: [midjourney, ai, prompts, image-generation, design, creative]
zdroj_kanal: blog
kontext:
  background: |
    Midjourney je nástroj pro generování obrázků z textového popisu, který běží přes Discord (nebo webové rozhraní) a vyžaduje placené předplatné. Shopify blog v článku vysvětluje, jak psát efektivní prompty tak, aby výsledný obrázek co nejvíc odpovídal představě zadavatele, a to i v kontextu e-commerce use cases jako produktové mock-upy, reklamní vizuály nebo branding.

    Prompt se podle článku skládá ze čtyř částí: příkazu "/imagine", volitelných referenčních obrázků, samotného textového popisu (subjekt, prostředí, styl, nálada, kvalita světla) a technických parametrů na konci. Doporučená maximální délka je zhruba 60 slov, přičemž i jednodušší formulace mohou fungovat stejně dobře jako komplexní. Klíčovým doporučením je konkrétnost — zmínit denní dobu, roční období, kvalitu světla a atmosféru — a odkazování na známé umělecké nebo fotografické styly. Článek zmiňuje i váhování prvků promptu pomocí dvojtečky a čísla (např. "baloons::2"), kterým lze zdůraznit důležitost jednotlivých slov, a doporučuje iterativní přístup — měnit vždy jen jeden prvek a sledovat, jak se výsledek mění.

    Z technických parametrů článek popisuje --stylize (--s, 0-1000) pro míru uměleckého stylu, --chaos (--c, 1-100) pro rozmanitost výsledků, --weird (--w, 0-3000) pro netradiční interpretace a --style raw pro fotorealističtější, méně stylizovaný výstup. Praktické příklady použití v e-commerce zahrnují reklamní kampaně (portréty modelů s produktem), vizuály pro sociální sítě, mock-upy produktů v reálném použití (které mohou zvyšovat konverzní poměr) a generování inspirace pro brandingové materiály, jako jsou barevné palety a vizuální manuály. Článek upozorňuje, že Midjourney je primárně trénované na angličtinu, takže i když přijímá zadání v jiných jazycích, nejlepších výsledků se dosahuje s anglickými prompty.
  zdroje:
    - title: "Shopify: Prompty pro Midjourney — struktura, tipy a příklady"
      url: "https://www.shopify.com/cz/blog/prompty-pro-midjourney"
  generated_at: 2026-08-19T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify blog přináší praktický návod, jak psát prompty pro Midjourney tak, aby generované obrázky odpovídaly zadání. Vysvětluje strukturu promptu — subjekt, prostředí, styl a technické parametry — a doplňuje ji o konkrétní tipy: konkrétnost v popisu (světlo, roční doba, atmosféra), odkazování na umělecké styly, váhování jednotlivých slov (např. "baloons::2") a iterativní ladění po jednom prvku. Popisuje také klíčové parametry jako --stylize, --chaos, --weird a --style raw, kterými lze ovlivnit míru kreativity a realismu výsledku. Nejde o žádnou novou Shopify funkci ani API změnu, ale o vzdělávací obsah zaměřený na využití externího AI nástroje pro tvorbu vizuálů.

## Pro koho je to relevantní

Relevantní je hlavně pro marketingové a content týmy obchodníků, kteří chtějí generovat produktové vizuály, reklamní kampaně, materiály pro sociální sítě nebo brandingovou inspiraci bez nutnosti fotostudia. Sekundárně se týká i vývojářů a agentur, které mohou principy stavby promptu (jasná struktura, váhování priorit, iterativní ladění) přenést do vlastních AI-asistovaných workflow pro generování obsahu. Přímý dopad na Shopify platformu nebo API není žádný — jde o návod k práci s externím nástrojem třetí strany.
