---
date: 2026-07-29
title: "UPS return labels v Shopify — vytvořte z fulfilled orders, s Shopify sazbami nebo vlastním UPS účtem"
title_en: "UPS return labels are now available"
slug: ups-return-labels-shopify-shipping
zdroj: https://changelog.shopify.com/posts/ups-return-labels-now-available
shrnuto_dne: 2026-07-31
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienty řešíme return workflow nebo napojení na UPS, je dobré vědět, že Shopify nyní nabízí generování return labelu přímo z adminu bez nutnosti vlastního řešení."
dotcene_klienty: []
souvisejici: [blog-shopify-shipping-vs-shipstation, carrier-services-no-auto-shipping-profile, pos-returns-exchanges-cart]
tldr: "Merchanti mohou nově vytvořit UPS return label přímo z fulfilled objednávky v adminu — buď za zvýhodněnou Shopify sazbu, nebo přes vlastní UPS účet; zatím jen pro doručení v rámci USA."
tagy: [shipping, returns, ups, labels, fulfillment, carriers]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Vracení zboží je pro e-shopy operačně i nákladově citlivá oblast — merchant potřebuje zákazníkovi rychle vystavit přepravní štítek, sledovat jeho stav a zároveň nepřeplácet za nevyužité labely. Dosud Shopify nabízel vytváření return labelů primárně u amerických carrierů typu USPS, což řadu obchodníků nutilo řešit UPS returns mimo platformu — přes samostatný UPS účet, externí nástroj nebo ruční komunikaci se zákazníkem.
    Nová funkce rozšiřuje tento return workflow o UPS jako přímo podporovaného carriera. Merchant otevře fulfilled objednávku v Shopify adminu, zahájí return a jako carrier zvolí UPS. Label se poté doručí zákazníkovi e-mailem nebo přes sdílený odkaz, takže se return proces odehrává celý uvnitř adminu bez nutnosti přepínat mezi systémy.
    Klíčová je flexibilita v ceně: merchant si může vybrat mezi Shopify zvýhodněnou UPS sazbou (bez nutnosti vlastního vyjednaného kontraktu s UPS) nebo vlastním UPS účtem, pokud už má nasmlouvané výhodnější podmínky. Platí se přitom jen v okamžiku, kdy UPS štítek skutečně naskenuje — nevyužitý label automaticky expiruje po 6 měsících a merchant za něj nic nezaplatí. Funkce je zatím omezena na domácí (US-to-US) zásilky, mezinárodní UPS returns podporované nejsou.
  zdroje:
    - title: "Shopify: UPS return labels are now available"
      url: "https://changelog.shopify.com/posts/ups-return-labels-now-available"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšiřuje nativní return workflow o podporu UPS jako carriera pro return labels. Merchant nyní z fulfilled objednávky přímo v adminu vytvoří return a vybere UPS — dosud byla tato možnost prakticky omezena na jiné US carriery (typicky USPS). Label lze zákazníkovi doručit e-mailem nebo přes sdílený odkaz, takže celý proces vrácení — od iniciace merchantem po předání štítku zákazníkovi — zůstává uvnitř Shopify adminu.

Zásadní je volba sazby: merchant si může vybrat Shopify zvýhodněnou UPS sazbu, pokud sám nemá vlastní vyjednaný UPS kontrakt, nebo napojit svůj existující UPS účet a využít vlastní ceny. Platba se strhává až ve chvíli, kdy UPS štítek reálně naskenuje při přebírání zásilky — pokud zákazník label nevyužije, po 6 měsících automaticky expiruje bez jakéhokoli poplatku. Funkce zatím pokrývá jen domácí zásilky v rámci USA, mezinárodní UPS returns nejsou součástí tohoto rozšíření.

## Časová osa

- 2026-07-29 — Shopify zveřejnil changelog a funkce je dostupná merchantům (US domestic UPS return labels)

## Dopad pro nás

**Pro vývojáře:** Jde o čistě adminové/UI rozšíření nativního return flow, žádná nová veřejná Admin API pole ani mutace changelog nezmiňuje. Pokud pro klienta stavíme vlastní return/exchange flow (např. přes Return API nebo custom app), stojí za to ověřit, zda by nativní UPS label z adminu nemohl nahradit část vlastního řešení pro UPS-specifické returns u US zákazníků.

**Pro PM / PO:** Relevantní hlavně pro klienty s americkým trhem a UPS jako preferovaným carrierem pro vratky — může zjednodušit provoz zákaznické podpory a snížit náklady na nevyužité štítky (6měsíční expirace bez poplatku). Pro EU/CZ klienty prakticky bez dopadu, dokud Shopify nerozšíří podporu mimo US domestic zásilky.

## Použití v Integrátoru

Přímo nevyužíváme, ale je dobré mít na paměti u klientů s US skladem/zákazníky a UPS jako carrierem — může to být jednodušší alternativa k vlastnímu return-label řešení.
