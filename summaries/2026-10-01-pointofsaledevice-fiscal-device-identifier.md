---
date: 2026-10-01
title: "PointOfSaleDevice: nové pole fiscalDeviceIdentifier (regulatory compliance)"
title_en: "New fiscalDeviceIdentifier field on PointOfSaleDevice"
slug: pointofsaledevice-fiscal-device-identifier
zdroj: https://shopify.dev/changelog/posts/new-fiscaldeviceidentifier-field-on-pointofsaledevice
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pole se týká jen POS aplikací pro fiskální compliance. Pro běžný e-shop sync je irelevantní, relevantní by bylo až u retail projektu se Shopify POS v zemi s povinnou fiskalizací."
dotcene_klienty: []
souvisejici: [retail-cash-management-capabilities, cash-management-foundations-pos, pos-ui-extensions-staffmemberid-removed-2026-10]
tldr: "Admin GraphQL API 2026-10 přidává na PointOfSaleDevice nullable pole fiscalDeviceIdentifier s Shopify-přiděleným identifikátorem fiskální pokladny, zatím funkční jen pro Švédsko."
tagy: [admin-graphql-api, pos, fiscal-device, compliance, pos-device]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Řada zemí vyžaduje, aby každá pokladna používaná při prodeji v kamenné prodejně byla registrovaná u daňového úřadu a aby každá transakce byla fiskálně podepsána nebo zapsána do fiskálního žurnálu. Aplikace, které tuto povinnost pro obchodníky na Shopify POS řeší (fiskální podpis transakcí, žurnálový reporting), potřebují spolehlivě vědět, o které konkrétní registrované pokladně se právě mluví. Do teď k tomu neměly oficiální pole v Admin GraphQL API.

    Shopify proto na objekt PointOfSaleDevice přidává pole fiscalDeviceIdentifier. Je typu String, nullable a vrací identifikátor fiskální pokladny přidělený Shopify pro zařízení v jurisdikcích, kde se registrace pokladen u daňové autority vyžaduje. Podle changelogu je prvním podporovaným státem Švédsko, pro všechna ostatní umístění pole vrací null. Pole je dostupné od Admin GraphQL API verze 2026-10.

    Pro identifikaci zařízení Shopify doporučuje použít session.deviceId z POS UI Extensions API (dostupné od verze 2026-04), hodnotu fiscalDeviceIdentifier si cachovat per zařízení a počítat s tím, že je stabilní po celou dobu registrace daného zařízení. Aplikace bez fiskálních požadavků pole adoptovat nemusí. Changelog neuvádí požadovaný access scope, ten je proto nutné ověřit v referenci objektu PointOfSaleDevice.
  priklad: |
    query {
      pointOfSaleDevice(id: "gid://shopify/PointOfSaleDevice/123") {
        fiscalDeviceIdentifier
      }
    }
  zdroje:
    - title: "Shopify: New fiscalDeviceIdentifier field on PointOfSaleDevice"
      url: "https://shopify.dev/changelog/posts/new-fiscaldeviceidentifier-field-on-pointofsaledevice"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Objekt **PointOfSaleDevice** v Admin GraphQL API dostává nové pole **fiscalDeviceIdentifier**. Jde o nullable `String`, který vrací fiskální identifikátor pokladny přidělený Shopify. Smysl má všude tam, kde daňová autorita vyžaduje registraci pokladen a fiskální evidenci tržeb. Typický konzument je aplikace, která podepisuje fiskální transakce nebo odesílá reporting do fiskálního žurnálu a potřebuje prodej spárovat s konkrétní registrovanou pokladnou.

Podle changelogu je **prvním podporovaným státem Švédsko**. Pro všechna ostatní umístění pole zatím vrací `null`. Širší rozšíření na další země s povinnou fiskalizací changelog neslibuje, takže na něj nelze spoléhat.

Doporučený postup z changelogu:

- zařízení identifikovat přes `session.deviceId` v POS UI Extensions API (od verze 2026-04),
- hodnotu `fiscalDeviceIdentifier` cachovat per zařízení,
- brát ji jako stabilní po celou dobu registrace zařízení.

Příklad dotazu:

```graphql
query {
  pointOfSaleDevice(id: "gid://shopify/PointOfSaleDevice/123") {
    fiscalDeviceIdentifier
  }
}
```

Aplikace bez fiskálních požadavků se jich změna nijak netýká a pole nemusí používat.

## Časová osa

- 1. 10. 2026 — changelog zveřejněn, pole je k dispozici v Admin GraphQL API 2026-10
- Od spuštění — pole vrací hodnotu jen pro Švédsko, jinde `null`
- Od POS UI Extensions API 2026-04 — k dispozici `session.deviceId` pro identifikaci zařízení
- Žádný deadline ani povinná migrace, jde o čistě aditivní změnu

## Dopad pro nás

**Pro vývojáře:** Změna je aditivní a nic nerozbíjí. Pokud někdo staví POS aplikaci s fiskálním podpisem nebo reportingem, získá oficiální cestu, jak z `session.deviceId` zjistit fiskální identifikátor pokladny a navázat ho na transakce. Je nutné počítat s tím, že pole může být `null` (mimo Švédsko vždy), a ošetřit to v kódu. Access scope changelog neuvádí, před nasazením ho ověřte v referenci objektu PointOfSaleDevice. Hodnotu stačí číst jednou za zařízení a cachovat.

**Pro PM / PO:** Pro české a slovenské projekty se teď nic nemění, protože pole mimo Švédsko vrací `null`. Je to ale signál, že Shopify do POS postupně doplňuje základní stavební kameny pro regulatorní compliance, v návaznosti na cash management funkce z letošního jara. Pokud se objeví retail projekt se Shopify POS ve Švédsku nebo v další zemi s fiskalizací, bude tohle pole součástí analýzy. Do té doby stačí vzít na vědomí.

## Použití v Integrátoru

**Zatím nepoužíváme.** Pole se týká POS fiskální compliance, ne e-shopového synchronizačního toku. Relevantní by se stalo až u retail projektu se Shopify POS v zemi s povinnou fiskalizací, kde by šlo o párování prodeje s registrovanou pokladnou v reportingu.
