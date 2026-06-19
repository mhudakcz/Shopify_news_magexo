---
date: 2026-06-17
title: "Vytváření channel markets přes GraphQL Admin API 2026-07"
title_en: "Create channel markets with the GraphQL Admin API"
slug: create-channel-markets-graphql-api
zdroj: https://shopify.dev/changelog/create-channel-markets-with-the-graphql-admin-api
shrnuto_dne: 2026-06-18
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s markets a katalogy; nový MarketType.CHANNEL rozšiřuje dostupné typy markets a může ovlivnit logiku filtrování a tvorby markets."
dotcene_klienty: []
souvisejici:
  - "managed-markets-uk-canada-launch"
  - "shopify-markets-graph-view"
  - "storefront-catalog-mcp-ucp"
tldr: "GraphQL Admin API 2026-07 přidává podporu pro vytváření a správu channel markets — nový typ trhu vázaný na konkrétní sales channel s vlastním katalogem, ceníkem a měnou."
tagy: [markets, channel, admin-api, sales-channel]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Markets je systém pro správu trhů, který umožňuje merchantům konfigurovat různé podmínky prodeje pro různé skupiny zákazníků — odlišné ceny, měny, jazyky nebo dostupnost produktů. Dosud existovaly typy markets vázané na geografické regiony (country/region), maloobchodní lokace (POS) a firemní lokace (B2B). Každý typ trhu má vlastní podmínky pro rozpoznání kupujícího.

    S verzí API 2026-07 přibývá nový typ: **channel market** (MarketType.CHANNEL). Tento typ trhu je svázán přímo s konkrétním sales channelem — například s Facebook shopem, Google shopping feedem nebo vlastním headless channelem. Sales channels tak mohou mít vlastní market s nezávislou konfigurací katalogů, cen a měny, bez nutnosti sdílet nastavení s ostatními distribučními kanály.

    Prakticky to znamená, že aplikace spravující sales channels mohou programaticky vytvářet markets přes nové pole `MarketCreateInput.conditions.channelsCondition` s parametrem `channelIds`. Pro dotazování jsou dostupné nové relace: `Market.channels`, `Market.channelsCount`, `Channel.markets`, `Channel.marketsCount` a `Channel.activeRegions`. Markets lze filtrovat podle typu pomocí `markets(type: CHANNEL)`. Stávající logika, která předpokládá, že markets jsou pouze regionální nebo B2B, může vyžadovat revizi.

  zdroje:
    - title: "Shopify: Create channel markets with the GraphQL Admin API"
      url: "https://shopify.dev/changelog/create-channel-markets-with-the-graphql-admin-api"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

GraphQL Admin API verze 2026-07 přidává plnou podporu pro **channel markets** — nový typ trhu (MarketType.CHANNEL) vázaný na konkrétní sales channel.

**Nové enumy:**
- `MarketType.CHANNEL` — identifikuje market svázaný s channelem
- `MarketConditionType.CHANNEL` — typ podmínky pro channel-based markets

**Nové mutation vstupy:**
- `MarketCreateInput.conditions.channelsCondition` — nové pole pro vytvoření channel marketu
- `MarketConditionsChannelsInput.channelIds` — pole ID channelů, na které se market váže
- `MarketUpdateInput.conditions` — úprava channel podmínek u existujících markets

**Nové query relace:**
- `Market.channels` / `Market.channelsCount` — jaké channels jsou vázány na daný market
- `Channel.markets` / `Channel.marketsCount` — jaké markets má daný channel
- `Channel.activeRegions` — regiony, kde má channel aktivní product feed
- `markets(type: CHANNEL)` — filtr markets pouze na channel typ

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-17 | Changelog publikován, dostupné v API verzi 2026-07 |
| 2026-07 | API verze 2026-07 becomes stable |

## Dopad pro nás

Jde o rozšíření datového modelu Markets. Kód, který předpokládá, že market je vždy regionální nebo B2B, může selhat nebo vracet neočekávané výsledky, pokud merchant začne channel markets používat. Konkrétně:

- Filtrování a výčty markets by měly počítat s novým typem `CHANNEL`
- Při vytváření markets pro sales channels (custom channely, feed aplikace) je nyní možné použít nativní channel podmínky místo workaroundů
- Nové relace `Channel.markets` otevírají přímé dotazování na propojení channelů s trhy

## Použití v Integrátoru

Integrátor pracuje s markets a katalogy. Channel markets rozšiřují dostupné typy — pokud integrátor vytváří markets nebo přistupuje k jejich výčtu, je vhodné:

1. Ověřit, zda existující filtrování markets (`markets(type: ...)`) správně zpracovává nový typ `CHANNEL`
2. V případě potřeby vytváření markets pro konkrétní channels využít nové `channelsCondition` místo dřívějších workaroundů
3. Zvážit dotazování `Channel.activeRegions` pro zjištění, kde je product feed aktivní

Priorita je nízká — feature je aditivní a nijak nerozbíjí existující chování.
