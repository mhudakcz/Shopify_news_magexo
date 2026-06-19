---
date: 2026-06-18
title: "Flow action extensions: relative paths pro endpoint URLs"
title_en: "Flow action extensions now support relative paths for endpoint URLs"
slug: flow-action-extensions-relative-paths
zdroj: https://shopify.dev/changelog/flow-action-extensions-now-support-relative-paths-for-endpoint-urls
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme budovat vlastní Flow action extension (např. pro spuštění integrace z workflow), nebudeme muset při každém restartu dev tunnelu ručně aktualizovat runtime_url v konfiguraci."
dotcene_klienty: []
souvisejici: ["flow-new-actions-get-data", "flow-shopifyql-action", "flow-test-events-existing-data"]
tldr: "Flow action extensions nově podporují relativní cesty (např. /api/flow/execute) místo absolutních HTTPS URL – Shopify CLI je automaticky překládá na URL tunelu při vývoji a na application_url po nasazení."
tagy: [flow, extension, dev, tunneling]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Flow je automatizační platforma umožňující merchantům i developerům sestavovat no-code workflow triggered různými událostmi ve Shopify (objednávky, zákazníci, produkty apod.). Flow action extensions jsou rozšíření třetích stran, která přidávají vlastní akce do těchto workflow – developer definuje endpoint (HTTP), na který Flow odešle data při spuštění akce.

    Dosud musely být všechny endpoint URL pro Flow action extensions zadávány jako absolutní HTTPS adresy. To byl problém zejména při lokálním vývoji: Shopify CLI vytváří vývojový tunel s dynamicky generovanou URL, která se při každém restartu mění. Developer musel po každé změně tunelu manuálně aktualizovat hodnoty runtime_url, validation_url, config_page_url a config_page_preview_url v konfiguraci extension.

    Nově lze tyto properties nastavit jako relativní cesty začínající lomítkem (např. /api/flow/actions/place-bid). Shopify CLI je automaticky překládá na aktuální URL tunelu v průběhu lokálního vývoje a na hodnotu application_url aplikace po produkčním nasazení. Absolutní HTTPS URL zůstávají plně podporovány pro případy, kdy endpoint běží na jiné doméně než samotná aplikace.

  zdroje:
    - title: "Shopify: Flow action extensions now support relative paths for endpoint URLs"
      url: "https://shopify.dev/changelog/flow-action-extensions-now-support-relative-paths-for-endpoint-urls"
    - title: "Flow action configuration reference"
      url: "https://shopify.dev/docs/apps/build/flow/actions/reference"
    - title: "Create a Flow action guide"
      url: "https://shopify.dev/docs/apps/build/flow/actions/create"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Flow action extensions nově přijímají **relativní cesty** jako hodnoty pro tyto konfigurační properties:

- `runtime_url` – hlavní endpoint volaný při spuštění akce
- `validation_url` – endpoint pro validaci vstupních polí
- `config_page_url` – URL config stránky akce
- `config_page_preview_url` – URL preview config stránky

**Formát relativní cesty:** musí začínat jediným lomítkem, např. `/api/flow/actions/place-bid`.

**Překládání URL:**
- Při lokálním vývoji (Shopify CLI) → tunel URL
- Po nasazení → `application_url` aplikace definovaná v konfiguraci

**Co zůstává nepodporováno:** protocol-relative URL ve stylu `//example.com/api` nadále nejsou povoleny.

**Předpoklad pro nasazení:** před deployem s relativními cestami musí mít aplikace nastavenou platnou HTTPS `application_url`.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-18 | Funkce dostupná pro všechny Flow action extensions |

## Dopad pro nás

Změna je čistě additivní – existující absolutní URL funkční zůstávají. Přínos je zejména pro developer experience: odpadá nutnost ručně aktualizovat tunnel URL v konfiguraci extension při každém restartu `shopify app dev`. Pokud máme nebo budeme mít Flow action extensions, stačí přejít na relativní cesty a vývoj se zjednodušší.

Omezení: relativní cesty fungují pouze pro endpointy hostované na stejné doméně jako aplikace. Pro endpointy na jiné doméně (např. dedikovaný microservice) je stále nutná absolutní URL.

## Použití v Integrátoru

Pokud bychom pro Integrátor vytvářeli Flow action extension (např. akci "Spustit synchronizaci" nebo "Odeslat data do externího systému"), mohli bychom endpointy definovat jako relativní cesty. Tím bychom eliminovali manuální správu tunnel URL při vývoji a zároveň zajistili, že konfigurace extension pracuje správně v obou prostředích (dev i produkce) bez jakýchkoliv změn.
