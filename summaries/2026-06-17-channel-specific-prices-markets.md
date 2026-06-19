---
date: 2026-06-17
title: "Channel-specific prices přes Markets — pricing/availability/currency per kanál"
title_en: "Set channel-specific prices, availability, and currency with Markets"
slug: channel-specific-prices-markets
zdroj: https://changelog.shopify.com/posts/set-channel-specific-prices-availability-and-currency-with-markets
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s markets a katalogy; channel markets přidávají nový rozměr konfigurace ceníků a dostupnosti produktů per sales channel, což může ovlivnit logiku synchronizace katalogů."
dotcene_klienty: []
souvisejici:
  - "create-channel-markets-graphql-api"
  - "shopify-markets-graph-view"
  - "managed-markets-uk-canada-launch"
tldr: "Shopify Markets nyní podporuje channel markets — merchanté mohou nastavit odlišné ceny, dostupnost produktů a měnu pro každý sales channel samostatně."
tagy: [markets, channel, pricing, currency, sales-channel]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Markets je systém pro správu prodejních trhů, který merchantům umožňuje definovat různé podmínky prodeje pro různé skupiny zákazníků — jiné ceny, měny, jazyky nebo dostupnost produktů. Dosud byl primárním způsobem segmentace geografický region (stát nebo skupina států), případně B2B lokace nebo POS lokace. Každý market mohl mít přiřazený katalog a vlastní konfiguraci, ale prodejní kanály (sales channels) sdílely stejné nastavení v rámci jednoho marketu.

    Nová funkcionalita přidává **channel markets** — typ marketu přímo svázaný s jedním nebo více sales channely. Merchant tak může vytvořit market například pro Facebook Shop, Google Shopping nebo vlastní headless storefront, přiřadit mu dedikovaný katalog a nastavit pro něj specifické ceny, dostupnost produktů a měnu — zcela nezávisle na ostatních kanálech. Každý kanál si přitom zachovává vlastní publishing controls, takže přítomnost channel marketu nezasahuje do toho, které produkty jsou na daném kanále zveřejněny.

    Praktický dopad je největší pro merchanty prodávající přes více distribučních kanálů, kde je potřeba odlišovat ceníky nebo měny — typicky při prodeji na marketplace platforma vedle vlastního e-shopu, nebo při oddělení B2C a wholesale přes různé headless channely. Channel Markets jsou nyní dostupné všem merchantům využívajícím Shopify Markets, a to v novém Adminu.

  zdroje:
    - title: "Shopify: Set channel-specific prices, availability, and currency with Markets"
      url: "https://changelog.shopify.com/posts/set-channel-specific-prices-availability-and-currency-with-markets"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify Markets nově podporuje **channel markets** — merchants mohou vytvořit market vázaný na jeden nebo více sales channels a pro něj nastavit:

- **Ceny** — dedikovaný ceník nezávislý na ostatních kanálech
- **Dostupnost produktů** — jiný katalog produktů pro každý kanál
- **Měna** — odlišná prezentační a transakční měna per channel

Každý channel si zároveň zachovává vlastní publishing controls, takže channel market přebírá konfiguraci podmínek prodeje, ale neruší existující nastavení zveřejnění produktů na kanále.

Feature je dostupná všem merchantům používajícím Shopify Markets v novém Adminu. Podrobné instrukce k nastavení jsou v Shopify Help Center.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-17 | Channel Markets dostupné všem merchantům v Shopify Markets |

## Dopad pro nás

Jedná se o merchant-facing novinku v UI Adminu. Přímý technický dopad je nízký — feature neruší žádné existující API ani chování. Relevantnější je sesterský changelog pro developery ([create-channel-markets-graphql-api](create-channel-markets-graphql-api.md)), který popisuje nové GraphQL možnosti v API 2026-07.

Pokud integrátor zpracovává výčty markets nebo synchronizuje katalogy a ceníky, je vhodné ověřit, zda logika správně počítá s novým typem `MarketType.CHANNEL` — viz zmíněný API changelog.

## Použití v Integrátoru

Channel Markets otevírají scénář, kdy jeden merchant má odlišné ceníky a dostupnost produktů pro různé sales channels. Pokud integrátor:

1. **Čte markets a katalogy** — nový typ `CHANNEL` se může nově objevit ve výčtu, filtrování by ho mělo zpracovat
2. **Synchronizuje ceny nebo dostupnost** — je třeba ověřit, zda logika bere v úvahu, že tentýž produkt může mít různé ceny v různých channel markets
3. **Vytváří markets programaticky** — pro nové channel markets je k dispozici `MarketCreateInput.conditions.channelsCondition` v API 2026-07

Priorita je nízká — feature je aditivní, stávající integrace není nijak narušena.
