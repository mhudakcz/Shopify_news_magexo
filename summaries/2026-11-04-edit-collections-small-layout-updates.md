---
date: 2026-11-04
title: "Edit collections — menší layout updates pro rychlejší workflow (UI refresh)"
title_en: "Edit collections faster with small layout updates"
slug: edit-collections-small-layout-updates
zdroj: https://changelog.shopify.com/posts/edit-collections-faster-with-small-layout-updates
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde jen o změnu UI stránky kolekce v Adminu, API ani data se nemění; dotčeni jsou hlavně merchandiseři, kteří kolekce ručně spravují."
dotcene_klienty: []
souvisejici: [shopify-admin-new-look-2026, collections-multi-source-variants, editions-fall-2026-merchandising]
tldr: "Shopify předělal stránku detailu kolekce v Adminu, aby byly běžné úpravy rychlejší; kolekce, podmínky ani produkty se nemění a není potřeba žádná akce."
tagy: [admin, collections, ui, merchandising, workflow]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify v rámci postupného vizuálního obnovení Adminu upravil layout stránky detailu kolekce. Jde o menší změny zaměřené na to, aby se časté úpravy kolekcí dělaly s méně klikání a scrollování.

    Změna navazuje na dřívější vývoj kolekcí, kde se objevily kolekce s více zdroji a nové API modely kolekcí. Nový layout lépe zobrazuje, odkud produkty v kolekci pocházejí a jaká pravidla je tam dostávají.

    Shopify výslovně uvádí, že žádná akce není potřeba. Kolekce, jejich podmínky i produkty zůstávají beze změny, mění se pouze rozložení a ovládací prvky.
  zdroje:
    - title: "Shopify: Edit collections faster with small layout updates"
      url: "https://changelog.shopify.com/posts/edit-collections-faster-with-small-layout-updates"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Stránka detailu kolekce v Shopify Adminu má nový layout. Popis kolekce lze upravovat přímo na stránce a formátování (tučné písmo, seznamy) je vidět bez otevírání editoru. Šablona tématu je nově umístěna pod názvem kolekce, ne v samostatné kartě níže na stránce.

Podmínky jsou přehledněji seskupené a ovládací prvky pro shodu jsou srozumitelnější, takže je snazší poznat, které produkty pravidlo zahrnuje nebo vylučuje. Na desktopu zůstává sloupec se zdroji viditelný při scrollování seznamem produktů. Akce u jednotlivých zdrojů jsou sloučené do menu ⋯, kde lze vyloučit produkty, vyloučit kolekce nebo zdroj odebrat.

Kolekce, podmínky ani produkty se nemění a Shopify uvádí, že není potřeba žádná akce.

## Časová osa

- 2026-11-04: zveřejnění novinky a nasazení nového layoutu stránky kolekce v Adminu.
- Žádné deadliny ani migrace, nic se nemusí zapínat.

## Dopad pro nás

**Pro vývojáře:** Žádný dopad na API, webhooky ani data kolekcí. Nic není třeba upravovat ani testovat.

**Pro PM / PO:** Drobné UX zlepšení pro merchandisery a klienty, kteří spravují kolekce ručně. Stojí za to upozornit klienty na inline úpravu popisu a menu ⋯ u zdrojů. Pokud máme interní návody nebo screenshoty stránky kolekce, mohou zastarat.

## Použití v Integrátoru

Změna se Integrátoru netýká, pracuje s daty kolekcí přes API a UI Adminu nemění nic na synchronizaci. Případně mohou zastarat screenshoty v dokumentaci.
