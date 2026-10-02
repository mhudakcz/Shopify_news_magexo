---
date: 2026-10-01
title: "orderCancel mutation vrací structured jobResult (lepší async handling)"
title_en: "The orderCancel mutation now returns a structured jobResult"
slug: ordercancel-mutation-structured-jobresult
zdroj: https://shopify.dev/changelog/posts/the-ordercancel-mutation-now-returns-a-structured-jobresult
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše synchronizace ruší objednávky přes orderCancel a sleduje, jestli asynchronní cancel doběhl, nové pole jobResult vrací stav, chyby i dotčenou objednávku přímo v odpovědi mutation místo generického pole job."
dotcene_klienty: []
souvisejici: [self-serve-order-cancellation-requests, ordercreate-multiple-tracking-numbers-fulfillment, invalid-metafield-queries-error-2026-10]
tldr: "Admin GraphQL API 2026-10 přidává k orderCancel mutation pole jobResult typu OrderCancelJobResult se stavem zrušení, chybami a dotčenou objednávkou; stávající pole job zůstává beze změny, takže jde o čistě aditivní vylepšení bez nutnosti zásahu do existujícího kódu."
tagy: [admin-graphql-api, orders, order-cancel, async, job-result]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Mutation orderCancel v Admin GraphQL API je asynchronní operace. Aplikace jí pošle požadavek na zrušení objednávky spolu s volbami, jako je důvod zrušení, refund, restock zboží do skladu nebo notifikace zákazníka, ale samotné zrušení Shopify provede na pozadí jako job. Odpověď mutation tedy neříká, že je objednávka zrušená. Říká pouze, že Shopify požadavek přijal a zařadil ke zpracování.

    Dosud mutation vracela jen generické pole job. Podle changelogu v něm chyběl cancellation-specific status i informace o chybách. Aplikace, která potřebovala vědět, jestli zrušení opravdu proběhlo a jestli nenastal problém (například při refundu nebo restocku), musela stav jobu zjišťovat zvlášť a výsledek si ověřit dodatečným dotazem na samotnou objednávku. Taková logika se v praxi píše defenzivně, s pollingem, timeouty a opakováním, a snadno se v ní udělá chyba.

    V Admin GraphQL API ve verzi 2026-10 přidává Shopify k mutation nové pole jobResult typu OrderCancelJobResult. Jde o strukturovaný výsledek specifický pro zrušení objednávky, který obsahuje status zrušení, případné chyby a dotčenou objednávku. Změna je aditivní: původní pole job zůstává funkční a podle Shopify není u stávajících implementací potřeba žádná akce. Changelog neuvádí seznam jednotlivých polí typu OrderCancelJobResult ani příklad dotazu, a přesné názvy polí je proto nutné ověřit ve schématu verze 2026-10.
  zdroje:
    - title: "Shopify: The orderCancel mutation now returns a structured jobResult"
      url: "https://shopify.dev/changelog/posts/the-ordercancel-mutation-now-returns-a-structured-jobresult"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Mutation `orderCancel` ve verzi **Admin GraphQL API 2026-10** nově vrací kromě dosavadního pole `job` také pole **`jobResult`** typu `OrderCancelJobResult`. Podle changelogu jde o strukturovaný výsledek specifický pro zrušení objednávky, který zahrnuje:

- **status zrušení**, tedy informaci, v jakém stavu asynchronní cancel je nebo jak skončil,
- **případné chyby**, které při zpracování nastaly,
- **dotčenou objednávku**, takže aplikace nemusí odpověď párovat s objednávkou zvlášť.

Dosavadní pole `job` zůstává nezměněné a funkční. Změna je čistě **aditivní**, takže existující integrace běží dál bez úprav a `jobResult` lze přidávat do dotazů postupně.

Důležité upozornění k obsahu changelogu: Shopify v oznámení nepopisuje jednotlivá pole typu `OrderCancelJobResult`, jejich hodnoty ani konkrétní příklad dotazu. Zmínka o částečných selháních (partial failures) nebo o chování při refundu a restocku se v oznámení výslovně neobjevuje, proto je potřeba před implementací zkontrolovat schéma 2026-10 (introspection nebo dokumentace mutation `orderCancel`) a ověřit, jaké stavy a chyby `jobResult` skutečně rozlišuje.

## Časová osa

- 2026-06-17 — Spring '26 Edition přidává self-serve cancellation requests v customer accounts, ruční schválení zrušení pak dělá merchant (související kontext)
- 2026-07-24 — Shopify oznamuje, že Admin GraphQL API 2026-10 bude vracet error u neplatných metafield queries (související změna ve stejné verzi API)
- 2026-08-03 — Shopify rozšiřuje mutation `orderCreate` o více tracking numbers na fulfillment, rovněž ve verzi 2026-10 (související kontext)
- 2026-10-01 — Shopify oznamuje `jobResult` u mutation `orderCancel` ve verzi 2026-10, účinnost od data oznámení

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbije a není nutné nic měnit. Zajímavé je to pro kód, který dnes po zavolání `orderCancel` čeká na dokončení jobu a pak zvlášť čte stav objednávky. Po přechodu na verzi 2026-10 se dá tato dvoukroková logika zjednodušit, protože status, chyby a dotčená objednávka přicházejí ve strukturované podobě. Doporučený postup je takový:

- Přidat `jobResult` do dotazu mutation při přechodu na 2026-10 a existující zpracování `job` zatím ponechat jako fallback.
- Chyby z `jobResult` napojit na retry a alerting (například rozlišit chybu, která se vyplatí opakovat, od trvalé chyby), místo obecného předpokladu, že cancel doběhl.
- Nespoléhat na domněnky o polích typu `OrderCancelJobResult`. Changelog je nespecifikuje, a proto je nutné je ověřit ve schématu verze 2026-10 a otestovat na development store, zejména scénáře zrušení s refundem a restockem.
- Při upgradu na 2026-10 počítat i s dalšími změnami ve stejné verzi, například s tím, že neplatné metafield filtry začnou vracet error.

**Pro PM / PO:** Jde o malé, ale praktické zlepšení spolehlivosti u workflow, která rozhodují o zrušení objednávek mimo Shopify admin, například při propagaci storna z ERP nebo OMS, při automatických zrušeních po neprošlé platbě nebo při zpracování žádostí o zrušení. Jasnější výsledek async operace znamená méně objednávek ve stavu nejasně zrušená, méně ručních kontrol a méně support dotazů typu, proč zákazník dostal nebo nedostal refund. Příležitost je hlavně u obchodů s větším objemem storen a s napojeným skladem nebo účetnictvím, kde chybný nebo nedokončený cancel způsobí rozpor mezi systémy. Změna není viditelná pro koncové zákazníky ani pro merchanty v adminu a nevyžaduje komunikaci směrem k nim. Zároveň nejde o nutnost, protože stávající pole `job` funguje dál, takže adopci lze zařadit do běžného upgradu API verze.

## Použití v Integrátoru

Pokud synchronizační flow zahrnuje rušení objednávek (například propagaci storna z ERP nebo OMS do Shopify), `jobResult` umožní spolehlivěji vyhodnotit, zda cancel doběhl, bez dodatečného dotazu na objednávku. Přímý dopad je zatím nízký, protože změna je aditivní a existující pole `job` funguje beze změny; adopci je vhodné spojit s přechodem na API verzi 2026-10.
