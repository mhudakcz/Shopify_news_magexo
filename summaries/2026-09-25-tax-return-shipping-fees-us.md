---
date: 2026-09-25
title: "US merchants: tax se počítá i na return shipping fees (od 23. 10.)"
title_en: "Tax is now calculated on return shipping fees"
slug: tax-return-shipping-fees-us
zdroj: https://changelog.shopify.com/posts/tax-is-now-calculated-on-return-shipping-fees
shrnuto_dne: 2026-09-30
kategorie: [breaking-change, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-23
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro US obchody řešíme return workflow, refundy nebo export daňových dat do účetnictví a daň z return shipping fees se dosud dopočítávala mimo Shopify, po 23. 10. hrozí dvojí započtení daně."
dotcene_klienty: []
souvisejici: [us-tax-calculation-fulfillment-location-routing, return-window-overrides, ups-return-labels-shopify-shipping]
tldr: "Od 23. 10. 2026 Shopify Tax u US objednávek automaticky počítá daň z return shipping fees stejnými pravidly jako u běžného shippingu, takže stávající ruční workaroundy je třeba zkontrolovat, aby se daň nezapočetla dvakrát."
tagy: [shopify-tax, us-tax, returns, shipping-fees, tax-calculation, "2026-10-23"]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Tax je nativní daňová služba v Shopify Adminu, která merchantům v USA automaticky počítá sales tax z objednávek. Return workflow, tedy vytvoření vratky, refund a případný poplatek za zpětné odeslání zboží, ale byl z hlediska daně dlouho slabé místo: poplatek za return shipping, který si merchant účtuje zákazníkovi, se často vůbec nezdaňoval nebo se daň řešila ručně mimo systém.

    Shopify proto od 23. 10. 2026 rozšiřuje automatický výpočet i na return shipping fees. Platí pro merchanty v USA, kteří používají Shopify Tax (nebo Tax Platform) a zpracovávají vratky u objednávek doručovaných na US adresy. Poplatek za return shipping se zdaňuje stejnými pravidly jako běžný shipping, takže se neřeší žádná zvláštní konfigurace. Existující nastavení zůstávají zachována: státy, kde je shipping nastavený jako nezdaňovaný, budou z daně vyjímat i return shipping fees.

    Jde především o compliance zlepšení, protože daň z return shipping fees se nově bude evidovat konzistentně a automaticky se propíše do tax reportů. Shopify zároveň upozorňuje na jediné riziko: kdo dnes používá ruční workaround pro výpočet, výběr, import nebo odsouhlasení této daně, má ho před 23. 10. zrevidovat, aby se daň nezapočetla dvakrát.
  zdroje:
    - title: "Shopify: Tax is now calculated on return shipping fees"
      url: "https://changelog.shopify.com/posts/tax-is-now-calculated-on-return-shipping-fees"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Od **23. 10. 2026** Shopify Tax u **US objednávek** automaticky počítá daň z **return shipping fees**. Používají se stejná pravidla jako u standardních shipping poplatků, merchant nemusí nic zapínat ani nastavovat.

Praktické chování:

- Při vytváření vratky v adminu se zobrazí **odhad daně** z return shipping fee.
- Při zpracování vratky se zaznamená **finální výše daně**.
- Daň se automaticky propíše do **tax reportů**, není nutná ruční reconciliace.
- **Stávající nastavení shipping tax zůstávají v platnosti**: ve státech, kde je shipping nezdaňovaný, zůstává return shipping fee od daně osvobozená.
- Scope je omezen na objednávky odesílané na **US adresy**.

Shopify výslovně upozorňuje: pokud merchant dnes používá ruční workaround pro výpočet, výběr, import nebo odsouhlasení daně z return shipping fees, má ho **zkontrolovat před 23. 10.**, aby nedošlo k double-countingu daně.

## Časová osa

- **2026-09-25** — Shopify zveřejňuje oznámení v merchant changelogu
- **2026-10-23** — automatický výpočet daně z return shipping fees začíná platit pro US merchanty s Shopify Tax

## Dopad pro nás

**Pro vývojáře:** Changelog neuvádí žádnou změnu API ani nová pole, jde o změnu logiky výpočtu uvnitř Shopify Tax. Riziko je nepřímé: pokud u US obchodu existuje custom logika, která k refundu nebo vratce dopočítává daň z return shipping fees (vlastní tax line, úprava refund částky, import do účetnictví nebo ERP), po 23. 10. se taková daň započte podruhé. Stojí za to projít refund a returns flow, napojení na tax reporty a případné exporty, a ověřit, jak se nová daň z return shipping fees projeví v refund a tax datech, která čteme nebo dál posíláme do externích systémů. Stejně tak se můžou změnit celkové částky refundů, pokud se na nich dosud počítalo bez daně z return shipping.

**Pro PM / PO:** Pro US merchanty jde o pozitivní compliance změnu, protože odpadá ruční řešení a snižuje se riziko chyb v daňových reportech. Současně je to termínovaná akce s datem 23. 10.: doporučujeme se aktivně zeptat merchantů prodávajících do USA, jestli používají vlastní nebo ruční postup pro daň z return shipping fees (účetní workaround, aplikace třetí strany, upravený refund proces), a domluvit jeho vypnutí nebo úpravu dřív, než automatický výpočet začne platit. Týká se jen US, pro EU ani ostatní trhy se nic nemění.

## Použití v Integrátoru

Přímo nepoužíváme, jde o změnu výpočtu daně uvnitř Shopify Tax bez nového API. Relevantní je jen u amerických obchodů, kde vlastní return, refund nebo účetní logika dopočítává daň z return shipping fees, a tam je potřeba ji před 23. 10. zkontrolovat kvůli riziku dvojího započtení.
