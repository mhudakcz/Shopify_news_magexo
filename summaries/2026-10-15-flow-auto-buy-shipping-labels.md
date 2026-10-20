---
date: 2026-10-15
title: "Shopify Flow action: automatické kupování shipping labels dle podmínek"
title_en: "Buy shipping labels automatically with Shopify Flow"
slug: flow-auto-buy-shipping-labels
zdroj: https://changelog.shopify.com/posts/buy-shipping-labels-automatically-with-shopify-flow
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow action pro nákup labelů může nahradit ruční krok při expedici u předvídatelných objednávek, takže u klientů s vlastním fulfillment flow stojí za to ověřit, zda ji nepoužít místo vlastní logiky."
dotcene_klienty: []
souvisejici: [dhl-express-uk-de-fr-it-es, flow-automatic-charging-vaulted-payments, ups-return-labels-shopify-shipping]
tldr: "Shopify Flow má novou akci, která za merchanta automaticky koupí shipping label u objednávek splňujících zadané podmínky (tag, produkty, single-item objednávka, kombinace atributů), včetně hotové workflow šablony."
tagy: [shopify-flow, shipping-labels, automation, workflow, templates]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Flow je nativní automatizační nástroj, ve kterém merchant skládá workflow z triggerů, podmínek a akcí bez psaní kódu. Dosud Flow uměl s objednávkami pracovat hlavně na úrovni dat a notifikací, tedy označit objednávku tagem, poslat zprávu nebo zapsat metafield. Samotný nákup přepravního štítku zůstával ručním krokem v adminu.

    Shopify Shipping umožňuje nakupovat shipping labels přímo z adminu u nativních přepravců, bez samostatné carrier appky. U shopů s velkým objemem objednávek ale zůstává opakující se rutina: otevřít objednávku, zvolit službu, zadat typ balíku a váhu, koupit label a vytisknout ho. U předvídatelných vzorů, například standardní doprava nebo nejprodávanější SKU, jde o čistě mechanickou práci, která se dá popsat pravidlem.

    Nová Flow akce tento krok uzavírá. Merchant v podmínkách workflow definuje, které objednávky mají nárok na automatický label, a Flow label koupí hned, jak taková objednávka dorazí. Post nezmiňuje dostupnost podle plánu ani regionu, seznam podporovaných carrierů, cenu ani omezení, takže tyto detaily je potřeba ověřit v Help Center dokumentaci k akci.
  zdroje:
    - title: "Shopify: Buy shipping labels automatically with Shopify Flow"
      url: "https://changelog.shopify.com/posts/buy-shipping-labels-automatically-with-shopify-flow"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify Flow přidává akci pro nákup shipping labels. Merchant nastaví podmínky, které objednávky mají nárok na automatický label, a Flow label koupí v okamžiku, kdy objednávka přijde. Objednávky, které podmínkám nevyhovují, zůstávají beze změny a řeší se dál ručně nebo jiným workflow.

V akci se nastavuje:
- **carrier a služba** (service),
- **typ balíku** (package type),
- **váha** (weight),
- **datum odeslání** (ship date).

Jako podmínku pro spuštění lze použít:
- objednávky s konkrétním **tagem**,
- objednávky obsahující určité **produkty**,
- **single-item** objednávky,
- libovolnou **kombinaci atributů objednávky**.

Vytvořené labely jsou k dispozici na stránce Shipping labels v adminu, odkud se dají vytisknout. Pro rychlý start Shopify nabízí hotovou workflow šablonu ve Flow: merchant ji otevře, upraví nastavení pro svůj shop a workflow zapne. Podrobnosti k akci jsou v Help Center článku o shipping label automations (purchase-shipping-label v dokumentaci Flow actions).

Typické využití jsou předvídatelné vzory objednávek, například standardní doprava, nejprodávanější SKU nebo objednávky věrných zákazníků, u kterých se carrier, balík i váha opakují.

## Časová osa

- 2026-10-15 — Shopify oznamuje novou Flow akci pro automatický nákup shipping labels v merchant changelogu a zpřístupňuje hotovou workflow šablonu.

## Dopad pro nás

**Pro vývojáře:** Jde o novou nativní akci ve Flow, ne o změnu veřejného Admin API ani breaking change. Pokud u klientů řešíme vlastní logiku pro automatický nákup labelů nebo ruční expediční krok, stojí za to porovnat, zda stejná pravidla nepokryje Flow workflow s podmínkami nad tagy, produkty a atributy objednávky. Post neuvádí, které carriery a regiony akce podporuje, takže před nasazením je nutné ověřit pokrytí v dokumentaci.

**Pro PM / PO:** Nová příležitost pro klienty s vysokým objemem standardních objednávek, kde dnes expedice kupuje label ručně. Automatizace zkracuje čas na fulfillment a snižuje počet manuálních kroků u předvídatelných vzorů. Hodí se jako téma při account review u e-shopů, které expedují přes Shopify Shipping, a jako argument pro konsolidaci pravidel do jednoho nativního nástroje místo custom řešení.

## Použití v Integrátoru

Přímo nevyužíváme, jde o nativní Flow akci bez API dopadu. U klientů s vlastním fulfillment flow ji ale stojí za to zvážit jako jednodušší alternativu pro objednávky, které se dají popsat jednoduchým pravidlem.
