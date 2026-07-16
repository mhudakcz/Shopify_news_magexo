---
date: 2026-07-10
title: "Shopify Managed Markets: automatické duties-inclusive pricing pro mezinárodní conversion"
title_en: "Drive international conversion with automated duties-inclusive pricing from Shopify Managed Markets"
slug: managed-markets-duties-inclusive-pricing
zdroj: https://changelog.shopify.com/posts/drive-international-conversion-with-automated-duties-inclusive-pricing-from-shopify-managed-markets
shrnuto_dne: 2026-07-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Objednávky z Managed Markets s duties-inclusive pricing mohou mít jiná pricing/payout metadata, která je vhodné ověřit u custom reportingu nebo ERP integrace."
dotcene_klienty: []
souvisejici: [managed-markets-uk-canada-launch, eu-customs-duty-3-euro-import, channel-specific-prices-markets]
tldr: "Shopify Managed Markets nově automaticky zahrnuje cla, daně a poplatky přímo do zobrazené ceny produktu, takže mezinárodní zákazník u checkoutu nenarazí na žádné skryté náklady."
tagy: [managed-markets, international, duties, pricing, conversion, transparency]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Managed Markets je Shopify služba pro cross-border prodej, ve které Shopify (přes partnera Global-e jako merchant of record) přebírá odpovědnost za výpočet a výběr cla, daní a celní compliance při prodeji do zahraničí. Dosud se tyto náklady typicky objevovaly jako samostatné položky až v checkoutu nebo dokonce až při doručení, což je jedna z hlavních příčin opuštěných košíků a nespokojenosti zákazníků u přeshraničních nákupů.

    Nová funkce posouvá Managed Markets o krok dál: duties, import daně, poplatky za konverzi měny a Managed Markets fee se nyní promítají přímo do zobrazené ceny produktu, kterou zákazník vidí od prvního zobrazení produktu až po dokončení objednávky. Cena je tedy stabilní a transparentní po celou dobu nákupního journey — bez překvapení u pokladny. Shopify navíc garantuje vypočtenou výši cla: pokud se skutečné celní poplatky liší, rozdíl hradí Shopify, nikoli merchant ani zákazník.

    Pro merchanty to znamená, že jejich payout zůstává konzistentní s domácími objednávkami — zákazník platí navýšenou (duties-inclusive) cenu přes Shopify Payments, ale merchant dostává vyrovnanou částku bez nutnosti řešit kolísání celních sazeb. Merchanti mohou náhled cenové kalkulace zkontrolovat přímo na produktové stránce přes "View as demo" a zákazníci vidí rozpad ceny (produkt, clo, daně, poplatky) i zpětně v sekci platby na objednávce po nákupu.
  zdroje:
    - title: "Shopify: Drive international conversion with automated duties-inclusive pricing from Shopify Managed Markets"
      url: "https://changelog.shopify.com/posts/drive-international-conversion-with-automated-duties-inclusive-pricing-from-shopify-managed-markets"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Managed Markets nově nabízí **automatické duties-inclusive pricing** — cla, import daně, poplatky za konverzi měny a Managed Markets fee se započítávají přímo do zobrazené ceny produktu, místo aby se objevovaly jako dodatečné položky až v checkoutu.

Zákazník tak vidí stabilní a transparentní cenu po celou dobu nákupu, od produktové stránky až po dokončení objednávky, bez skrytých nákladů u pokladny nebo při doručení. Shopify zároveň garantuje vypočtenou výši cla: pokud se skutečné celní poplatky liší od odhadu, rozdíl hradí Shopify.

Merchant dostává payout konzistentní s domácími objednávkami, protože navýšenou cenu hradí zákazník přes Shopify Payments. Pro kontrolu je k dispozici:

- **Demo náhled** — merchant si na produktové stránce může zobrazit lokalizovaný rozpad ceny přes "View as demo"
- **Rozpad ceny po nákupu** — zákazník vidí detailní kalkulaci (produkt, clo, daně, poplatky) v sekci platby na objednávce

## Časová osa

- 2026-07-10 — Shopify changelog oznamuje automatické duties-inclusive pricing pro Managed Markets

## Dopad pro nás

**Pro vývojáře:** Feature nemá vlastní dedikovaný Admin API scope — jde o merchant-facing nastavení uvnitř Managed Markets. Nepřímý dopad může být v tom, že objednávky z Managed Markets s aktivním duties-inclusive pricing mohou mít odlišnou strukturu cenových/payout dat (např. jiný rozpad mezi product price a duties/tax položkami). Pokud klient tato data zpracovává ve vlastním reportingu, fakturaci nebo ERP integraci, je vhodné ověřit, že mapování cen počítá s tímto navýšením a nezobrazuje duplicitně clo, které je již součástí ceny produktu.

**Pro PM / PO:** Relevantní téma pro klienty s Managed Markets nebo klienty zvažující cross-border expanzi — transparentní pricing bez surprise costs typicky zvyšuje conversion rate u mezinárodních objednávek a snižuje počet reklamací kvůli neočekávaným poplatkům při doručení. Stojí za to zmínit v kontextu projektů, kde klient řeší vysokou míru opuštěných košíků u zahraničních zákazníků nebo si stěžuje na complaints ohledně cla při doručení.

## Použití v Integrátoru

Přímý technický dopad na integrátor je nízký, protože jde o cenovou logiku uvnitř Managed Markets bez nové API funkcionality. Relevance je spíše konzultační — při práci s objednávkovými daty z Managed Markets je vhodné počítat s tím, že zobrazená cena produktu už zahrnuje duties a fees.
