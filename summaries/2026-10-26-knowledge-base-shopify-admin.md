---
date: 2026-10-26
title: "📚 Knowledge base nativně v Shopify Admin — fakta pro AI agenty, samostatná appka končí 15. 1. 2027"
title_en: "Knowledge base is now built into your admin"
slug: knowledge-base-shopify-admin
zdroj: https://changelog.shopify.com/posts/knowledge-base-is-now-available-in-your-admin
shrnuto_dne: 2026-10-27
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-26
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Knowledge base řídí, jaká fakta o obchodu vidí AI agenti. Přímo ji nevyužíváme, ale u obchodů na agentic kanálech je potřeba ohlídat migraci ze samostatné appky před 15. 1. 2027."
dotcene_klienty: []
souvisejici: [agentic-storefronts-admin-page, shopify-agentic-plan, compare-at-prices-shared-agentic-channels, shop-mcp-shopping-checkout-any-agent]
tldr: "Knowledge base je nově součástí Shopify Adminu (Sales Channels > Agentic > Knowledge base) a nahrazuje samostatnou appku, která po 15. 1. 2027 přestane být dostupná; obchody s více než 1 000 fakty musí zbylá fakta přidat ručně."
tagy: [knowledge-base, admin, agentic, ai, ai-agents, migration]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify v posledních měsících buduje vrstvu, přes kterou se obchody dostávají k AI shopping agentům: Shopify Catalog dodává produktová data, Agentic Storefronts v adminu řídí, kde se produkty zobrazují, a Shop MCP umožňuje agentům hledat, skládat košík a platit. Chybějící kus tvořila informace, které nejsou v produktovém katalogu: kontaktní údaje, doplňkové služby typu dárkového balení, podmínky nebo odpovědi na časté dotazy. Právě tato fakta o obchodu agentům dodávala samostatná aplikace Knowledge Base, která se objevila už při spuštění Agentic planu.

    Changelog z 26. října 2026 oznamuje, že Knowledge base je nově přímo v Shopify adminu a nahrazuje původní appku. Jde o jednu stránku, kde merchant kontroluje, upravuje a publikuje fakta, která AI agenti o jeho obchodě používají. Shopify tato fakta předvyplní z publikovaných stránek storefrontu a každý návrh odkazuje na zdrojovou stránku, takže je vidět, odkud informace pocházejí. Nic, co Shopify navrhl, se k agentům nedostane, dokud to merchant sám nepublikuje. Stránka je v adminu v sekci Sales Channels > Agentic > Knowledge base.

    Důležité je, co post neříká. Oznámení se týká výhradně faktů pro AI agenty a migrace z appky. Nezmiňuje vyhledávání v dokumentaci, kontextovou nápovědu ani odpovědi Sidekicku, a nic takového tedy z něj nevyplývá. Neuvádí ani omezení podle plánu či regionu, ani postupné zpřístupňování, jen že funkce je dostupná v adminu. Praktický dopad je hlavně v termínu 15. ledna 2027, kdy původní appka skončí, a v pravidlu o 1 000 faktech: obchody, které jich v appce měly víc, je do nové stránky nepřevedly automaticky a musí si zbylá vybrat samy.
  zdroje:
    - title: "Shopify: Knowledge base is now built into your admin"
      url: "https://changelog.shopify.com/posts/knowledge-base-is-now-available-in-your-admin"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přesouvá **Knowledge base** přímo do Shopify Adminu. Je to jedna stránka, kde merchant kontroluje, upravuje a publikuje **fakta, která AI agenti používají o jeho obchodě**, například kontaktní údaje nebo informace o službách jako dárkové balení. Nahrazuje samostatnou aplikaci Knowledge Base, která po **15. lednu 2027** přestane být dostupná.

Jak to funguje:

- **Umístění:** Sales Channels > Agentic > Knowledge base v adminu.
- **Návrhy faktů:** Shopify fakta předvyplní z publikovaných stránek storefrontu a u každého návrhu je odkaz na zdrojovou stránku.
- **Publikace:** nic z navržených faktů se nedostane k AI agentům, dokud merchant sám nepublikuje. Publikovaný fakt lze kdykoli stáhnout zpět (unpublish).

Migrace z původní appky se liší podle počtu faktů:

- **Méně než 1 000 faktů:** fakta, která merchant napsal nebo upravil, Shopify přenesl a rovnou je publikoval, takže je AI agenti mohou dál používat. Není potřeba žádná akce.
- **Více než 1 000 faktů:** fakta se nepřenesla. Knowledge base pojme až 1 000 dalších faktů, takže si merchant musí vybrat a doplnit ta, která chce zachovat, a to **před 15. lednem 2027**. Tyto obchody Shopify kontaktoval e-mailem.
- **Obchody, které appku nepoužívaly:** žádná akce. Fakta se navrhnou ze storefrontu a zůstanou nepublikovaná, dokud je merchant nepublikuje.

Co post **neuvádí**: nemluví o vyhledávání v dokumentaci, kontextové nápovědě ani o Sidekicku, o dostupnosti podle plánu nebo regionu ani o postupném zavádění. Cokoli z toho je zatím nepotvrzené. Formulace o limitu 1 000 faktů je také stručná, takže přesné počítání (zda se limit vztahuje na všechna fakta, nebo jen na nově přidaná) stojí za ověření v nápovědě Shopify.

## Časová osa

- **2026-10-26** — Knowledge base je dostupná v adminu (Sales Channels > Agentic > Knowledge base).
- **2026-10-26** — obchody s méně než 1 000 fakty mají fakta z appky již přenesená a publikovaná.
- **2027-01-15** — samostatná aplikace Knowledge Base přestává být dostupná; do tohoto data musí obchody s více než 1 000 fakty doplnit fakta, která chtějí zachovat.

## Dopad pro nás

**Pro vývojáře:**
Z changelogu nevyplývá žádná změna v API, žádné nové pole ani webhook, takže není co implementovat. Změna je čistě v adminu a týká se obsahu, ne kódu. Z technického pohledu stojí za zmínku jen to, že Shopify fakta odvozuje z publikovaných stránek storefrontu. Kvalita a aktuálnost obsahu stránek (kontakt, doprava, vrácení, služby) se tak nepřímo promítá do toho, co AI agenti o obchodě říkají. Pokud na stránkách generujeme obsah přes metafields, metaobjects nebo sekce tématu, projeví se jejich správnost i zde.

**Pro PM / PO:**
Jde o příležitost i o termínovaný úkol. Příležitost: merchanti na agentic kanálech mají jedno místo, kde řídí, co o nich AI agenti vědí, a mohou to využít jako součást přípravy obchodu na prodej přes AI. Úkol: u obchodů, které původní appku používaly, ověřit, zda se fakta přenesla, a u těch s více než 1 000 fakty je ručně doplnit před 15. lednem 2027, jinak o ně přijdou. Doporučujeme projít stav Knowledge base v adminu u konkrétních obchodů a zkontrolovat, že publikovaná fakta (kontakty, podmínky, služby) odpovídají skutečnosti, protože se po publikaci dostávají přímo k agentům. Protože automaticky přenesená fakta byla publikována bez dalšího kroku, je rozumné je jednou zkontrolovat.

## Použití v Integrátoru

Knowledge base přímo nevyužíváme a změna se nedotýká žádné synchronizace. Nepřímo se týká obchodů prodávajících přes agentic kanály, kde je vhodné při příštím auditu zkontrolovat migraci faktů a jejich aktuálnost.
