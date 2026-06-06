---
date: 2026-04-01
title: "App-owned metaobjects ($app prefix) nepotřebují access scopes"
title_en: "App-owned metaobjects can be used without access scopes"
slug: app-owned-metaobjects-without-scopes
zdroj: https://shopify.dev/changelog/metaobject-scopes-not-required-for-app-metaobjects
shrnuto_dne: 2026-04-29

kategorie: [nova-api, integrace]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 12 metaobject methods. Pokud používáme app-owned metaobjects ($app:* prefix) v naších custom apps, můžeme zjednodušit OAuth scope manifest."
dotcene_klienty: []
souvisejici: [removing-private-publicread-enums-metaobjects]

kontext:
  background: |
    Metaobjekty (metaobjects) jsou v Shopify strukturované datové typy, které umožňují ukládat opakovaně použitelná data s více poli — například autorské profily, tabulky velikostí nebo záruční informace. Na rozdíl od metapolí, která rozšiřují existující zdroje, tvoří metaobjekty zcela nové datové entity.

    Shopify rozlišuje dva modely vlastnictví metaobjektů: merchant-owned (s libovolným prefixem, spravované obchodníkem) a app-owned (s vyhrazeným prefixem `$app`, konfigurované v `shopify.app.toml`). App-owned metaobjekty jsou ze své podstaty izolované — jsou viditelné a přístupné pouze jejich vlastnické aplikaci. Historicky však i pro ně Shopify vyžadoval explicitní deklaraci OAuth scopů jako `read_metaobjects` nebo `write_metaobjects` v manifestu aplikace, přestože jiné aplikace k těmto datům přístup nemají.

    Odstranění povinných scopů pro app-owned metaobjekty v API 2026-04 snižuje tření při instalaci aplikace: merchant vidí kratší seznam požadovaných oprávnění, což zvyšuje důvěru a konverzní poměr instalací. Tato změna se dotýká pouze metaobjektů s `$app:` prefixem — merchant-owned metaobjekty nadále vyžadují příslušné scopy.

    Změna je součástí širší evoluce přístupového modelu metaobjektů v Shopify. Souběžně probíhá deprecace starých enum hodnot `PRIVATE` a `PUBLIC_READ` v `MetaobjectAdminAccess` (plánováno pro API 2026-07) a přidání pole `access` do `StandardMetaobjectDefinitionTemplate`, což dohromady tvoří konzistentnější a srozumitelnější systém řízení přístupu k vlastním datovým strukturám.
  zdroje:
    - title: "Shopify Changelog: Metaobject scopes not required for app metaobjects"
      url: "https://shopify.dev/changelog/metaobject-scopes-not-required-for-app-metaobjects"
    - title: "Shopify Docs: Metaobjects — vlastnictví a access scopes"
      url: "https://shopify.dev/docs/apps/build/custom-data/metaobjects"
    - title: "Digest: Odstranění PRIVATE/PUBLIC_READ enumů na metaobject definitions (2026-04-15)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/removing-private-publicread-enums-metaobjects/"
    - title: "Digest: access pole na StandardMetaobjectDefinitionTemplate (2026-04-01)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/access-field-standardmetaobjectdefinitiontemplate/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "App-owned metaobjects identifikované $app prefixem už nepotřebují access scopes v API 2026-04+."
tagy: [metaobject, scopes, oauth, simplification]
---

## Co se mění
Od API verze **2026-04** mohou aplikace pracovat s **app-owned metaobjects** (identifikované `$app:` prefixem v `type` field) bez nutnosti deklarovat specific access scopes v OAuth manifest. App-owned metaobjects jsou data izolovaná pro konkrétní app — Shopify nepotřebuje další permission, protože app může k vlastním datům přistupovat default.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace ukládá custom data do metaobjects pomocí `$app:` namespace, můžeme z OAuth scope manifestu odebrat příslušné `read_metaobjects`/`write_metaobjects` scope (pro tyto specifické metaobjects). Méně permissions = méně friction při app installation.

**Pro PM / PO:**
Tichá technická změna — uživatel/merchant uvidí během installace méně requested permissions u nově nasazených apps.

## Použití v Integrátoru
**Ano** — máme 12 metod. Pokud používáme `$app:*` namespace pro vlastní data structures (typicky settings, custom mapping), můžeme po upgradu na 2026-04 cleanup OAuth scopes.
