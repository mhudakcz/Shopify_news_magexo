---
date: 2026-07-07
title: "Shopify Flow: runtime_url actions se rezolvují at execution — auto-update dev URLs"
title_en: "Shopify Flow: Action runtime URLs now update automatically"
slug: flow-action-runtime-urls-auto-update
zdroj: https://shopify.dev/changelog/shopify-flow-action-runtime-urls-now-update-automatically
shrnuto_dne: 2026-07-10
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme mít vlastní Flow action extension, nebude potřeba po každém redeployi nebo restartu dev tunnelu ručně řešit staré runtime_url ve workflow – Flow si při spuštění vždy natáhne aktuální hodnotu."
dotcene_klienty: []
souvisejici: [flow-action-extensions-relative-paths, flow-new-actions-get-data, flow-test-events-existing-data]
tldr: "Shopify Flow nově rezolvuje endpoint URL akcí (runtime_url) až při samotném spuštění workflow, ne při jeho aktivaci – takže se automaticky promítne nová dev tunnel URL i nová produkční application_url bez nutnosti workflow znovu ukládat."
tagy: [flow, action-extensions, runtime-url, dev-experience, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Flow je no-code automatizační platforma, kde merchanti i developeři skládají workflow z triggerů, podmínek a akcí. Flow action extensions jsou vlastní akce třetích stran – aplikace zaregistruje endpoint (runtime_url), na který Flow při vykonání akce pošle HTTP request s daty.

    Dosud se hodnota runtime_url "zamrzla" do workflow v okamžiku jeho aktivace (uložení/zapnutí). Pokud se pak endpoint aplikace změnil – ať už kvůli redeploy s novou produkční adresou, nebo kvůli restartu `shopify app dev` s novou tunnel URL – existující, už aktivní workflow si nadále pamatovaly starou adresu. Merchant musel workflow znovu uložit nebo reaktivovat, aby se propsala aktuální URL.

    Nově Flow resolvuje runtime_url až v okamžiku každého spuštění (execution), ne při aktivaci workflow. V praxi to znamená: v produkci se po redeployi aplikace s novým application_url nové workflow spuštění automaticky trefí na správný endpoint bez zásahu merchanta; ve vývoji `shopify app dev` průběžně aktualizuje runtime_url ve workflow na dev shopu podle aktuální tunnel URL, takže vývojář nemusí po každém restartu tunelu nic ručně měnit ani workflow reaktivovat. Jde o čistě behaviorální změnu na straně Shopify – žádná akce ze strany merchanta ani úprava existujících extensions není vyžadována, jen je dobré vědět, že se runtime_url chová jinak než dřív (přestává být "zamrzlá" po aktivaci).

  zdroje:
    - title: "Shopify: Shopify Flow: Action runtime URLs now update automatically"
      url: "https://shopify.dev/changelog/shopify-flow-action-runtime-urls-now-update-automatically"
    - title: "Flow action extensions now support relative paths for endpoint URLs"
      url: "https://shopify.dev/changelog/flow-action-extensions-now-support-relative-paths-for-endpoint-urls"
    - title: "Flow action configuration reference"
      url: "https://shopify.dev/docs/apps/build/flow/actions/reference"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Endpoint URL Flow akce (`runtime_url`) se dosud do workflow "zapekla" v okamžiku jeho aktivace – při každém volání akce Flow použil URL platnou v tu chvíli, kdy byl workflow naposledy uložen/zapnut. Pokud se aplikace mezitím přesunula na jinou adresu (redeploy, nová dev tunnel URL), muselo se workflow ručně znovu aktivovat, aby se propsala nová hodnota.

Po této změně Flow rezolvuje `runtime_url` dynamicky při každém spuštění (execution), nikoliv jednorázově při aktivaci. Dopad:

- **Produkce:** po redeployi aplikace s novým `application_url` se další spuštění existujících, už aktivních workflow automaticky trefí na aktuální endpoint.
- **Vývoj (`shopify app dev`):** dev tunnel URL se ve workflow na development shopu průběžně aktualizuje sama, bez nutnosti workflow znovu ukládat po každém restartu tunelu.
- **Bez akce merchanta:** workflow nadále fungují beze změny konfigurace nebo reaktivace.

Jediné, co si vývojáři budují Flow action extensions mají pohlídat: pokud se dosud spoléhali na to, že `runtime_url` zůstane po aktivaci workflow neměnná až do reaktivace, toto chování už neplatí – aktualizace se propisují automaticky.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-07 | Automatická rezoluce `runtime_url` při execution dostupná pro všechny Flow action extensions |

## Dopad pro nás

**Pro vývojáře:** Pokud budujeme nebo budeme budovat vlastní Flow action extension, tato změna zjednodušuje lokální vývoj – po restartu `shopify app dev` tunelu se nemusí workflow na dev shopu ručně přeaktivovat, protože Flow si vždy natáhne aktuální URL. V kombinaci s dřívější podporou relativních cest pro `runtime_url` (viz související novinka) jde o druhý krok ke stejnému cíli: méně manuální práce s adresami endpointů při vývoji Flow akcí.

**Pro PM / PO:** Jde o interní vylepšení chování platformy bez dopadu na merchanty ani na existující funkčnost – nevyžaduje komunikaci směrem ke klientům ani úpravu zadání.

## Použití v Integrátoru

Relevantní pouze v okamžiku, kdy bychom pro klienta vyvíjeli vlastní Flow action extension (např. akci spouštějící synchronizaci nebo odeslání dat do externího systému) – pak tato změna spolu s podporou relativních cest odstraňuje potřebu ručně řešit tunnel URL při vývoji i po nasazení.
