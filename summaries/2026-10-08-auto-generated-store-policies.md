---
date: 2026-10-08
title: "Automaticky generované store policies — returns/contact/terms/shipping/legal"
title_en: "Automatically generated policies help you launch faster"
slug: auto-generated-store-policies
zdroj: https://changelog.shopify.com/posts/automatically-generated-policies-help-you-launch-faster
shrnuto_dne: 2026-10-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Při onboardingu nového obchodu nebo rozšíření na další markets lze legal boilerplate nechat vygenerovat a udržovat v sync se store settings přímo v adminu, místo ručního psaní textů."
dotcene_klienty: []
souvisejici: [return-window-overrides, return-policy-profiles-graphql-admin, managed-markets-eu-buyer-cancellation-returns]
tldr: "Shopify admin umí automaticky generovat pět typů policies (returns a refunds, contact information, terms of service, shipping, legal notices) a udržovat je aktuální podle store settings, takže odpadá ruční psaní legal textů před launchem."
tagy: [policies, legal, returns, shipping, terms, onboarding, launch]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Store policies patří mezi věci, které merchant musí mít hotové, než obchod spustí. Jde o return and refund policy, kontaktní údaje, terms of service, shipping policy a právní oznámení. Shopify na to dosud poskytoval především šablony, které si merchant musel projít, upravit a následně hlídat, aby odpovídaly skutečnému nastavení obchodu. V praxi tak legal boilerplate často zdržoval launch nejvíc, protože vyžaduje čas, znalost místní legislativy a ideálně i právníka.

    Nová funkce posouvá tuto práci na platformu. Merchant v Shopify adminu u vybrané policy zapne volbu pro automated policy a Shopify text vygeneruje na základě store settings a vlastních doporučení. Podstatná je druhá část oznámení: generované policies se mají měnit společně s nastavením obchodu, takže například změna shipping nebo returns nastavení se promítne i do textu. Tím se řeší klasický problém, kdy policy zastará a přestane odpovídat realitě. Shopify jako motivaci uvádí rychlejší launch a snazší expanzi na nové markets.

    Je důležité číst oznámení střízlivě. Shopify výslovně uvádí, že merchant zůstává odpovědný za své policies i za soulad obchodu s platnými zákony, takže generovaný text není právní poradenství. Changelog také neuvádí žádný API povrch, omezení podle plánu ani to, zda do legal notices spadá i privacy policy. Jde tedy o admin funkci, kterou je před doporučením konkrétnímu merchantovi nutné ověřit v Help Center a v samotném adminu.
  zdroje:
    - title: "Shopify: Automatically generated policies help you launch faster"
      url: "https://changelog.shopify.com/posts/automatically-generated-policies-help-you-launch-faster"
    - title: "Shopify Help Center: Refund, privacy, and terms of service"
      url: "https://help.shopify.com/en/manual/checkout-settings/refund-privacy-tos"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify admin nově umožňuje **automaticky generovat store policies** a držet je synchronizované s nastavením obchodu. Podporovanou sadu tvoří pět typů:

- **Return and refund policy** — podmínky vrácení zboží a vrácení peněz.
- **Contact information** — kontaktní údaje obchodu.
- **Terms of service** — obchodní podmínky.
- **Shipping policy** — pravidla dopravy a doručení.
- **Legal notices** — právní oznámení.

Zapnutí je v **Settings > Policies**. Merchant vybere konkrétní policy, aktivuje volbu **Use automated policy** a uloží ji přes **Save**. Policies se pak aktualizují, když se změní store settings, a drží se v souladu s doporučeními Shopify.

Co changelog neříká:

- Neuvádí žádné omezení podle plánu ani dostupnost per region.
- Nezmiňuje privacy policy výslovně, může spadat pod legal notices, ale z textu to nevyplývá.
- Nepopisuje žádné API ani webhook, jde o funkci v adminu.
- Shopify zdůrazňuje, že merchant zůstává odpovědný za své policies i za compliance s platnými zákony.

Navazuje na předchozí změny v oblasti returns, například na return window overrides (per market a per collection, product nebo variant) nebo return policy profiles v Admin GraphQL API. Oznámení tak zapadá do širšího trendu, kdy Shopify přesouvá policy a compliance logiku z ručně psaného textu do strukturovaného, platformou udržovaného nastavení.

## Časová osa

- 2026-07-16 — Managed Markets automaticky pokrývá 14denní právo na odstoupení pro EU objednávky (související kontext)
- 2026-09-29 — Return window overrides v adminu (související kontext)
- 2026-10-01 — Return policy profiles v Admin GraphQL API verze 2026-10 (související kontext)
- 2026-10-08 — Shopify oznamuje automaticky generované policies (returns, contact, terms, shipping, legal) udržované v sync se store settings

## Dopad pro nás

**Pro vývojáře:** Změna je čistě v adminu a bez povinné migrace, takže na kódu nic nevynucuje. Nic v changelogu nenaznačuje nový endpoint ani webhook, proto nelze předpokládat programový přístup k vygenerovaným textům ani možnost automated policy zapnout přes API. Pokud storefront theme nebo aplikace zobrazuje obsah policies (například v patičce, checkoutu nebo returns portálu), je dobré po zapnutí funkce ověřit, že se text načítá z aktuální policy a nekopíruje se do vlastní konfigurace. Opsaný text by se totiž přestal synchronizovat se store settings. Související Admin GraphQL API pro return policy profiles používá scope `read_legal_policies`, takže stojí za ověření, jak se automated policies promítají do API při čtení policies. Do doby ověření je to otevřená otázka.

**Pro PM / PO:** Jde o novou příležitost zejména pro onboarding nových obchodů a migrace, kde legal boilerplate bývá častým blockerem launchu. Automatické generování zkracuje čas k prvnímu spuštění a snižuje riziko, že obchod poběží s nedokončenými nebo zastaralými texty. Přínos je i při expanzi na nové markets, protože Shopify tuto motivaci uvádí přímo. Je potřeba merchantům férově sdělit tři věci. Za prvé, generovaný text nenahrazuje právní kontrolu, odpovědnost za compliance zůstává na merchantovi. Za druhé, před zapnutím je vhodné projít výsledné znění, hlavně u českého a slovenského prodeje, kde jsou specifické požadavky na spotřebitelská práva, jako je lhůta pro odstoupení od smlouvy. Za třetí, nastavení returns v adminu by mělo odpovídat tomu, co se slibuje zákazníkům, protože policy se bude řídit store settings. Priorita je nízká, nejde o breaking change ani o termín s deadlinem.

## Použití v Integrátoru

Přímý technický dopad je nulový, protože oznámení nepopisuje žádné API. Relevance je konzultační: při onboardingu a launch checklistech nového obchodu lze nabídnout zapnutí automated policies jako rychlou cestu k hotovým legal textům, s jasným upozorněním na kontrolu znění před spuštěním.
