---
date: 2026-11-11
title: "Shopify Tax free discount — už se neresetuje ročně (cumulative přes roky)"
title_en: "Shopify Tax free discount will no longer reset annually"
slug: shopify-tax-free-discount-no-annual-reset
zdroj: https://changelog.shopify.com/posts/shopify-tax-free-discount-will-no-longer-reset-annually
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2027-01-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Obchody klientů, které používají Shopify Tax, mohou po překročení limitu začít platit poplatky za výpočet daně; integrace samotná se nemění."
dotcene_klienty: []
souvisejici: [shopify-tax-canada, editions-fall-2026-developer, tax-webhook-global-ids]
tldr: "Od 1. ledna 2027 se bezplatná sleva na poplatky Shopify Tax neobnovuje každý rok, ale počítá se z celkových (lifetime) globálních tržeb obchodu do limitu 100 000 v měně obchodu."
tagy: [shopify-tax, discount, billing, subscription, pricing]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Tax je nativní služba pro automatický výpočet daní z prodeje při checkoutu a pro automatickou aktualizaci sazeb. Malým obchodům nabízela slevu na poplatky, která se každý rok obnovovala.
    Nově je sleva vázána na celoživotní globální tržby obchodu. Poplatky jsou plně prominuty, dokud obchod nedosáhne 100 000 v měně ceníku (CAD pro Kanadu, EUR pro EU, GBP pro Spojené království, jinak USD). Počítají se všechny tržby bez ohledu na lokaci zákazníků.
    Sazby poplatků za objednávku, stávající roční stropy i funkce výpočtu daní zůstávají beze změny. Stránka neuvádí, jak se naloží se stávajícími zůstatky slevy ani s obchody, které limit už překročily.
  zdroje:
    - title: "Shopify: Shopify Tax free discount will no longer reset annually"
      url: "https://changelog.shopify.com/posts/shopify-tax-free-discount-will-no-longer-reset-annually"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Sleva na poplatky Shopify Tax se přestává každý rok resetovat. Místo toho se vztahuje na celkové globální tržby obchodu za celou dobu jeho existence. Dokud obchod nedosáhne 100 000 v měně ceníku, jsou poplatky plně prominuty. Jakmile limit dosáhne nebo překročí, další roční sleva se už neobnoví a poplatky se účtují u způsobilých objednávek, kde Shopify Tax daň počítá. Sazby za objednávku a roční stropy zůstávají stejné.

## Časová osa

- 2026-11-11: zveřejnění změny v changelogu.
- 2027-01-01: účinnost; obchody nad limitem nedostanou novou roční slevu.
- Akce ze strany merchanta není vyžadována.

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani chování výpočtu daní. Jde čistě o billing Shopify Tax.

**Pro PM / PO:** U klientů používajících Shopify Tax (typicky Kanada, EU, UK, USA) je vhodné ověřit lifetime tržby a upozornit ty, kteří limit už překročili, že od roku 2027 mohou platit poplatky. Pro menší a rostoucí obchody je to naopak předvídatelnější model. Nová příležitost: argument při doporučování Shopify Tax místo externích daňových služeb.

## Použití v Integrátoru

Integrace s Shopify Tax přímo nesouvisí, jde o fakturační změnu na straně platformy. Může jen ovlivnit nákladové odhady u klientů, kteří spoléhají na nativní výpočet daní.
