---
date: 2026-07-01
title: "Merchant-owned delivery profile APIs deprecovány kvůli market-driven shipping"
title_en: "Merchant-owned delivery profile APIs deprecated for market-driven shipping"
slug: merchant-owned-delivery-profile-apis-deprecated
zdroj: https://shopify.dev/changelog/merchant-owned-delivery-profile-apis-are-deprecated-for-market-driven-shipping
shrnuto_dne: 2026-07-02
kategorie: [deprecation, breaking-change]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s delivery profiles při exportu produktů a nastavení dopravy — potenciálně čte nebo zapisuje merchant-owned profily přes GraphQL."
dotcene_klienty: []
souvisejici:
  - "delivery-profiles-covers-all-items"
  - "carrier-services-no-auto-shipping-profile"
  - "create-channel-markets-graphql-api"
tldr: "Merchant-owned delivery profile GraphQL APIs jsou od 1. 7. 2026 deprecated — aplikace musí před říjnem 2026 migrovat na Markets API nebo app-owned delivery profiles, jinak se u nových instalací zobrazí varování o nekompatibilitě."
tagy: [shipping, delivery-profile, deprecation, markets, action-required, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify historicky spravoval nastavení dopravy přes tzv. merchant-owned delivery profiles — skupiny pravidel přiřazené přímo k obchodu merchantovi. Tato konfigurace byla dostupná přes Admin GraphQL API skrze queries `deliveryProfile`, `deliveryProfiles`, `deliveryProfilesCount` a mutace `deliveryProfileCreate`, `deliveryProfileUpdate`, `deliveryProfileRemove`. Aplikace třetích stran mohly tyto profily číst i zapisovat pro synchronizaci dopravních sazeb nebo nastavení fulfillmentu.

    Se spuštěním market-driven shipping — kde je doprava řízena per-market logikou přes Shopify Markets — se merchant-owned profily stávají nekonzistentní vrstvou. Shopify oznámil, že u shopů s market-driven shipping mohou čtecí operace vracet zastaralý snapshot legacy konfigurace a zapisovací operace mohou zdánlivě uspět (bez chyby), ale ve skutečnosti nijak nezmění živé nastavení dopravy merchantovi. To je zásadní tiché selhání, které může vést k nesprávným dopravním sazbám bez zjevné příčiny.

    Od 1. července 2026 jsou tyto APIs formálně deprecated. Od 1. října 2026 začne Shopify rollout, při kterém nové instalace aplikací stále spoléhajících na deprecated APIs obdrží varování o nekompatibilitě. Úplná deprecace pro všechny merchantovi nastane 1. července 2027, kdy Shopify dokončí přechod všech obchodů na market-driven shipping model a legacy APIs přestanou být funkční pro konfiguraci merchantovy dopravy. App-owned delivery profiles (spravované přes stejné API aplikacemi, nikoliv merchantem) zůstávají funkční a nejsou dotčeny.

  zdroje:
    - title: "Shopify: Merchant-owned delivery profile APIs deprecated for market-driven shipping"
      url: "https://shopify.dev/changelog/merchant-owned-delivery-profile-apis-are-deprecated-for-market-driven-shipping"
    - title: "Shopify Docs: Upgrade your app to market-driven shipping"
      url: "https://shopify.dev/docs/apps/build/orders-fulfillment/market-driven-shipping/upgrade-your-app"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Následující Admin GraphQL API operace jsou od **1. července 2026 deprecated** pro konfiguraci merchant-owned shipping:

**Queries (čtení):**
- `deliveryProfile`
- `deliveryProfiles`
- `deliveryProfilesCount`
- `deliveryProfileLocationGroup`
- `deliveryProfileLocationGroups`

**Mutations (zápis):**
- `deliveryProfileCreate`
- `deliveryProfileUpdate`
- `deliveryProfileRemove`

Důvod: u shopů s aktivním market-driven shipping mohou čtecí operace vracet **zastaralý snapshot** a zapisovací operace **tiše selhat** — tzn. API vrátí success, ale změna se neprojeví v živém nastavení dopravy.

**App-owned delivery profiles jsou nedotčeny** — pouze merchant-owned konfigurace je deprecated.

### Náhradní přístupy

Migrace závisí na use-case aplikace:

| Dosavadní chování | Doporučená náhrada |
|---|---|
| Čtení merchantových sazeb (sales channels) | Contextual Product Feeds (preferred) |
| Čtení merchantových sazeb (obecně) | Markets API — pole `delivery` |
| Zápis merchantových sazeb | App-owned delivery profile (preferred) nebo Markets API mutations |
| Správa app-owned profilů | Beze změny — stávající API zůstávají |

**Contextual Product Feeds** jsou nová funkce bez závislosti na shipping modelu merchantovi — fungují pro legacy i market-driven obchody a vracejí sazby z obou zdrojů v jedné odpovědi. Vyžadují scope `read_product_listings`. Do července 2026 dostupné pouze na dev storech.

**Markets API cesta** vyžaduje větvení logiky podle pole `marketDrivenShipping` v `ShopFeatures` a scopey `read_markets` + `write_markets`.

## Časová osa

| Datum | Událost |
|---|---|
| 1. července 2026 | Formální oznámení deprecace |
| 1. října 2026 | Rollout začíná; nové instalace nekompatibilních aplikací dostávají varování |
| 1. července 2027 | Všichni merchanté přechod dokončen; legacy APIs plně nefunkční pro merchant konfiguraci |

Vývojáři by měli otestovat na dev storu s povoleným feature preview a po dokončení migrace odeslat **compatibility attestation form**.

## Dopad pro nás

Tato změna je relevantní pro jakoukoli aplikaci nebo integraci, která:
- čte delivery profiles pro sestavení dopravních sazeb nebo export produktů do externích kanálů,
- zapisuje nebo modifikuje delivery profiles jako součást onboardingu nebo synchronizace nastavení,
- předpokládá, že `deliveryProfileCreate` / `deliveryProfileUpdate` skutečně změní merchant konfiguraci.

U shopů, které ještě nepoužívají market-driven shipping, APIs technicky fungují dál — ale od října 2026 se začnou zobrazovat varování a od července 2027 přestanou fungovat zcela. Migrace by měla proběhnout **před říjnem 2026**.

Zásadní je tiché selhání: aplikace nemusí dostat chybovou odpověď, ale nastavení dopravy merchantovi se fakticky nezmění. To může vést k obtížně dohledatelným produkčním bugům u zákazníků s market-driven shipping.

## Použití v Integrátoru

Integrátor (Thor / Magexo sync pipeline) potenciálně pracuje s delivery profiles při exportu produktů nebo nastavení dopravy. Je nutné prověřit, zda Thor při syncu produktů nebo nastavení fulfillmentu volá `deliveryProfiles` query nebo `deliveryProfileCreate`/`deliveryProfileUpdate` mutace.

Pokud ano, prioritní migrace:
1. Čtení sazeb nahradit **Contextual Product Feeds** (pokud jde o sales channel use-case).
2. Zápis konfigurace přesunout na **app-owned delivery profiles** — nevyžaduje nové scopey a je forward-compatible.
3. Přidat větvení logiky podle `ShopFeatures.marketDrivenShipping` pro plynulý přechod.

Bez migrace hrozí tiché selhání synchronizace dopravních nastavení u merchantů přecházejících na Markets.
