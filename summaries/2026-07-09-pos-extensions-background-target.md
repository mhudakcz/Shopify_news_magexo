---
date: 2026-07-09
title: "POS Extensions podporuje background extension target (pos.app.ready.data)"
title_en: "POS Extensions now supports a background extension target"
slug: pos-extensions-background-target
zdroj: https://shopify.dev/changelog/pos-extensions-now-supports-a-background-extension-target
shrnuto_dne: 2026-07-10
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Umožnilo by to sledovat POS eventy (např. dokončení transakce) na pozadí bez nutnosti vlastní UI komponenty."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-offline, ui-extensions-tester, editions-spring-2026-retail]
tldr: "POS Extensions mají nový background target pos.app.ready.data, díky kterému mohou extensions poslouchat POS eventy i mimo viditelnou UI obrazovku."
tagy: [pos, extensions, background, event-listener, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI Extensions umožňují vývojářům rozšiřovat Shopify POS aplikaci o vlastní obrazovky, tlačítka a bloky v rámci smart gridu či workflow pokladny. Doposud byly extensions vázané na konkrétní viditelný target (obrazovku nebo komponentu) — jakmile prodejce z dané obrazovky odešel, extension přestala běžet a nemohla dál reagovat na dění v systému.
    Nový target pos.app.ready.data mění tento model tak, že extension může běžet na pozadí po celou dobu POS session, bez vykreslování jakékoli UI. Extension se k němu připojí přes shopify.addEventListener a poslouchá konkrétní POS eventy, například transactioncomplete, cashtrackingsessionstart nebo cashtrackingsessioncomplete. Díky tomu může logika (logování, synchronizace dat, volání externích API) běžet nezávisle na tom, jakou obrazovku má prodavač právě otevřenou.
    Prakticky to otevírá prostor pro integrace, které potřebují reagovat na POS transakce v reálném čase — třeba odeslání dat do externího CRM, skladového systému nebo věrnostního programu hned po dokončení platby, aniž by k tomu byla nutná interakce uživatele s vlastní obrazovkou extension. Změna je dostupná od API verze 2026-07 a nevyžaduje žádnou akci u existujících extensions, které tento target nevyužívají.
  zdroje:
    - title: "Shopify: POS Extensions now supports a background extension target"
      url: "https://shopify.dev/changelog/pos-extensions-now-supports-a-background-extension-target"
    - title: "Shopify dev docs: App background target (POS UI Extensions)"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/latest/targets/app-background"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidává do POS UI Extensions nový extension target `pos.app.ready.data`, který běží na pozadí po celou dobu trvání POS session — bez vlastní viditelné obrazovky. Extension se k němu napojí přes `shopify.addEventListener` a může naslouchat vybraným POS eventům, aktuálně jde o `transactioncomplete`, `cashtrackingsessionstart` a `cashtrackingsessioncomplete`.

Jednoduchý příklad registrace listeneru:

```js
shopify.addEventListener('transactioncomplete', (event) => {
  console.log('Transaction complete', event);
});
```

Dosavadní extension targety byly vždy vázané na konkrétní obrazovku nebo komponentu POS aplikace — jakmile prodavač obrazovku opustil, extension přestala reagovat. Background target tento limit odstraňuje a umožňuje persistentní, headless logiku napříč celou session.

## Časová osa

- 9. 7. 2026 — changelog zveřejněn, target dostupný od API verze 2026-07
- 13. 7. 2026 — datum účinnosti (effective date) podle Shopify
- Bez migrace pro existující extensions — jde o čistě nový, doplňkový target

## Dopad pro nás

**Pro vývojáře:** Nový target je zajímavý při integracích, které potřebují reagovat na dění v POS v reálném čase bez ohledu na to, jakou obrazovku má prodavač otevřenou — typicky synchronizace transakcí do externího systému, logování cash tracking eventů nebo trigger na věrnostní/CRM API hned po dokončení platby. Jde o doplněk k existujícím UI targetům, ne náhradu — pro vlastní obrazovky a tlačítka se stále používají standardní targety.

**Pro PM / PO:** Přímý dopad na klienty je nízký, jde o vývojářskou možnost bez nutnosti akce. Relevantní je hlavně u retailových klientů s vlastním POS setupem, kde by mohla usnadnit napojení pokladny na externí systémy (sklad, CRM, věrnostní program) bez nutnosti stavět vlastní UI obrazovku jen kvůli sledování eventů.

## Použití v Integrátoru

Potenciálně využitelné u retailových klientů s POS extensions, kde bychom potřebovali reagovat na transakce nebo cash tracking eventy na pozadí bez vlastní UI obrazovky.
