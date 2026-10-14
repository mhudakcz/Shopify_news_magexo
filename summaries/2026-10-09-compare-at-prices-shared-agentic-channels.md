---
date: 2026-10-09
title: "Compare-at prices (slevy z X na Y) sdíleny AI shopping agentům"
title_en: "Compare-at prices now shared to agentic channels"
slug: compare-at-prices-shared-agentic-channels
zdroj: https://changelog.shopify.com/posts/compare-at-prices-now-displayed-to-agentic-channels
shrnuto_dne: 2026-10-14
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud do Shopify synchronizujeme ceny včetně compare-at price z ERP nebo PIM, tato data se nově dostávají i k AI shopping agentům, takže jejich správnost ovlivňuje i agentic kanály."
dotcene_klienty: []
souvisejici: [meta-ai-channel-agentic-storefronts, agentic-storefronts-admin-page, compare-at-prices-catalogs]
tldr: "Shopify nově předává compare-at price AI shopping agentům přes Shopify Catalog, takže agenti poznají zlevněný produkt; viditelnost se řídí přepínačem v nastavení catalog mapping."
tagy: [compare-at-price, agentic-channels, shopify-catalog, ai-shopping, pricing, discounts]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Catalog je vrstva, přes kterou se produkty merchantů dostávají k AI shopping agentům a do AI kanálů v rámci Agentic Storefronts. Agent si z Catalogu načítá produktová data, ceny a dostupnost a na jejich základě doporučuje zboží uživateli v konverzaci. Compare-at price je naproti tomu klasické pole varianty produktu, které se na storefrontu zobrazuje jako přeškrtnutá původní cena vedle aktuální prodejní ceny a vizuálně vyjadřuje slevu.

    Do této změny agenti čtoucí Catalog viděli pouze aktuální cenu. Slevy, které si návštěvník všimne na storefrontu (přeškrtnutá cena), se do Catalogu nepřenášely, takže agent nemohl rozpoznat, že je produkt zlevněný. Nově Shopify compare-at price do AI shopping agentů předává. Merchant to řídí v adminu: přepínač je v sekci Compare-at v nastavení catalog mapping a určuje, zda agenti compare-at ceny uvidí.

    Changelog je stručný a několik věcí neuvádí. Nejmenuje konkrétní agenty ani platformy, neuvádí žádné pole v API (například jak se hodnota objeví v odpovědi Catalog API) a neříká, jaký je výchozí stav přepínače. Z kontextu Agentic Storefronts lze usuzovat, že se týká AI kanálů připojených přes Catalog (viz související článek o Meta jako AI channelu), ale to post sám nepotvrzuje. Z našeho pohledu je zajímavý hlavně marketingový a datový dopad: zobrazená sleva ovlivňuje to, jak agent produkt prezentuje, a stejně jako u klasického storefrontu platí, že compare-at price musí odpovídat reálné předchozí ceně. Zavádějící slevy se tak díky většímu dosahu mohou snáz dostat do hledáčku regulace, například podle evropských pravidel pro uvádění slev (Omnibus směrnice).
  zdroje:
    - title: "Shopify: Compare-at prices now shared to agentic channels"
      url: "https://changelog.shopify.com/posts/compare-at-prices-now-displayed-to-agentic-channels"
    - title: "Shopify Help: Catalog mapping"
      url: "https://help.shopify.com/en/manual/shopify-catalog/mapping"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify nově sdílí **compare-at price** s AI shopping agenty přes **Shopify Catalog**. Agent, který čte Catalog, tak vedle aktuální ceny vidí i původní cenu před slevou a pozná, že je produkt zlevněný. Dosud agenti dostávali jen aktuální cenu a markdown viditelný na storefrontu se do Catalogu nepromítal.

Viditelnost řídí merchant v adminu:

- **Přepínač** je v sekci **Compare-at** v nastavení catalog mapping (`admin.shopify.com/mappings/shopify-catalog-mapping`).
- Přepínač určuje, zda AI agenti smějí compare-at ceny vidět.
- Nastavení je popsané v nápovědě Shopify k catalog mapping (`help.shopify.com/en/manual/shopify-catalog/mapping`).

Co changelog **neuvádí**: konkrétní agenty nebo platformy, název pole v API a výchozí stav přepínače. Cokoli nad rámec výše uvedeného (například konkrétní field v Catalog API na vývojářské straně) je zatím nepotvrzené a stojí za to ověřit v dokumentaci nebo ve vývojářském changelogu.

## Časová osa

- **2026-10-09** — changelog publikován, compare-at price se sdílí AI shopping agentům přes Shopify Catalog, v adminu je k dispozici přepínač.
- Žádná deprecation ani migrační lhůta, jde o additivní změnu bez breaking changes.
- Případné navazující změny v Catalog API (pokud nějaké budou) post nezmiňuje.

## Dopad pro nás

**Pro vývojáře:**
Z changelogu nevyplývá žádná změna v API ani žádné nové pole, takže není co implementovat. Praktický dopad je v datech: pokud do Shopify zapisujeme `compareAtPrice` na variantách (z ERP, PIM nebo importu), tyto hodnoty se nově mohou dostat k AI agentům. Stojí za to zkontrolovat, že compare-at price je vyplněné jen tam, kde skutečně probíhá sleva, a že se po skončení akce spolehlivě maže nebo vrací. Zbytková compare-at cena u produktu bez aktuální slevy by se jinak mohla agentovi jevit jako akční nabídka. Pokud budeme stavět nad Catalog API vlastní nástroje, sledujeme, zda Shopify na vývojářské straně přidá odpovídající pole.

**Pro PM / PO:**
Je to nová příležitost i drobné riziko. Příležitost: slevy z X na Y se mohou objevit v doporučeních AI agentů, což může zvýšit atraktivitu produktů v agentic kanálech (efekt na konverzi ale nikde změřený není, jde o náš předpoklad). Riziko: sleva se bude zobrazovat v dalším kanálu, takže je potřeba hlídat, aby compare-at ceny odpovídaly reálné předchozí ceně a pravidlům pro uvádění slev. Merchantům, kteří compare-at používají jako marketingovou ozdobu bez skutečné slevy, doporučujeme probrat nastavení přepínače. Protože výchozí stav v postu uveden není, je rozumné v adminu zkontrolovat, jak je přepínač nastaven u konkrétního obchodu.

## Použití v Integrátoru

Přímo nic nové nevyužíváme, změna je na straně Shopify Catalogu a admin nastavení. Nepřímo se týká všech synchronizací cen, které zapisují compare-at price, protože kvalita těchto dat se nově promítá i do AI kanálů.
