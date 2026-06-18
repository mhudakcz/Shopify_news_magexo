---
date: 2026-06-17
title: "Managed Markets nově v UK a Kanadě"
title_en: "Managed Markets launches in UK and Canada"
slug: managed-markets-uk-canada-launch
zdroj: https://help.shopify.com/en/manual/international/managed-markets/requirements-and-considerations
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient se sídlem v UK nebo Kanadě prodává globálně, Managed Markets může nahradit vlastní integraci daní a cla — stojí za to zmínit při projektech s cross-border scopem."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-operations", "shopify-markets-graph-view"]
editions_release: spring-2026
kontext:
  background: |
    Managed Markets je Shopify služba pro cross-border prodej, která merchantům zajišťuje komplexní řešení mezinárodního e-commerce — automatický výpočet a výběr cla (duties), správu daní (taxes), generování celních formulářů a compliance pro 200+ zemí a teritorií ve 150+ měnách. Merchant nemusí řešit mezinárodní logistiku ani legislativu sám; Shopify přebírá odpovědnost za to, že zákazník dostane zboží s předem uhrazeným clem bez nepříjemných překvapení při doručení.

    Managed Markets byl původně dostupný pouze pro merchanty se sídlem v kontinentálních USA. Postupnou expanzí Shopify rozšiřuje program i do dalších klíčových e-commerce trhů. Rozšíření do UK a Kanady v rámci Editions Spring '26 je logickým krokem — oba trhy jsou pro Shopify strategicky důležité a zároveň mají přirozenou potřebu cross-border řešení (UK post-Brexit customs, kanadský přeshraniční prodej do USA a EU).

    Pro UK platí specifické technické omezení: fulfillment lokace musí být buď celá v Great Britain, nebo celá v Northern Ireland — nelze kombinovat obě oblasti v rámci jednoho Managed Markets setupu. Obě implementace (UK i Kanada) jsou v době Editions announce ve fázi early access, obecná dostupnost je plánována jako "coming soon". Vyžadují Shopify Payments a integraci se Shopify Tax nebo Basic Tax.

  zdroje:
    - title: "Shopify Help: Managed Markets — Requirements and Considerations"
      url: "https://help.shopify.com/en/manual/international/managed-markets/requirements-and-considerations"
    - title: "Editions Spring '26: Operations theme overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Managed Markets — automatizovaný cross-border prodej s duties, taxes a compliance — je nově dostupný i pro merchanty se sídlem v UK a Kanadě."
tagy: [editions, managed-markets, international, uk, canada]
zdroj_kanal: editions
---

## Co se mění

Managed Markets se rozšiřuje ze svého původního působiště v kontinentálních USA do dvou nových zemí: Spojeného království a Kanady. Merchanti se sídlem v těchto regionech mohou nově využít Shopify jako svého cross-border operátora — Shopify za ně vyřeší výpočet a inkaso cla (prepaid duties), daňovou compliance, generování celních formulářů a podporu 150+ měn při prodeji do 200+ zemí.

Prakticky to znamená, že britský nebo kanadský merchant nemusí budovat vlastní integraci s celními systémy ani uzavírat smlouvy se zahraničními daňovými poradci. Managed Markets to abstrahuje do jedné aktivace v Shopify adminu — za předpokladu, že merchant používá Shopify Payments a má aktivní Shopify Tax (nebo Basic Tax).

Relevantní omezení pro UK setup: fulfillment lokace musí být geograficky konzistentní — buď všechny v Great Britain, nebo všechny v Northern Ireland. Kombinace obou oblastí v jednom Managed Markets setupu není podporována. B2B objednávky, subscription produkty a zero-value orders zůstávají mimo scope Managed Markets i po rozšíření.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; UK a Kanada dostupné v early access
- Coming soon — obecná dostupnost (GA) pro UK a Kanadu (datum Shopify nespecifikuje)

## Dopad pro nás

**Pro vývojáře:**
Managed Markets je merchant-facing aktivace bez přímého API surface pro třetí strany — neexistují dedikované GraphQL mutations pro Managed Markets konfiguraci. Dopad pro vývojáře je spíše nepřímý: orders vytvořené přes Managed Markets mohou mít jiná metadata (duties fields, currency handling), která je potřeba ošetřit v custom fulfillment nebo reporting integraci. Pokud klient přechází na Managed Markets, je vhodné ověřit, že stávající webhook handlery správně zpracují nová pole na objednávkách.

**Pro PM / PO:**
Pro klienty se sídlem v UK nebo Kanadě, kteří chtějí expandovat na globální trhy, jde o relevantní příležitost — Managed Markets snižuje náklady i komplexitu cross-border prodeje. Je vhodné zmínit v kontextu projektů, kde klient řeší mezinárodní expanzi nebo si stěžuje na složitost celní/daňové compliance. Early access fáze znamená, že feature zatím nemusí být dostupná pro všechny; doporučujeme ověřit přímo v Shopify admin nebo přes Shopify support.

## Použití v Integrátoru

Managed Markets nemá vlastní Admin API scope — relevance pro integrátor je spíše konzultační: při cross-border projektech s UK/CA klientem se vyplatí prověřit, zda Managed Markets nepokrývá požadavky, které by jinak vyžadovaly custom integraci daní a cla.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Operations](/Shopify_news_magexo/zmena/editions-spring-2026-operations/)
