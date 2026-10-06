---
date: 2026-10-01
title: "Return policy profiles v GraphQL Admin API — multi-policy management"
title_en: "Return policy profiles are now available in the GraphQL Admin API"
slug: return-policy-profiles-graphql-admin
zdroj: https://shopify.dev/changelog/posts/return-policy-profiles-are-now-available-in-the-graphql-admin-api
shrnuto_dne: 2026-10-06
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud řešíme returns workflow, notifikace nebo reporting vratek pro obchod s více markets, lze nově číst strukturovaná return pravidla per market přes Admin GraphQL API místo parsování textu return policy."
dotcene_klienty: []
souvisejici: [return-window-overrides, managed-markets-eu-buyer-cancellation-returns, graphql-admin-market-hierarchies-query]
tldr: "Admin GraphQL API ve verzi 2026-10 zpřístupňuje return policy profiles, tedy sady return pravidel přiřazené k markets, které lze číst přes dvě nové query a přiřazovat přes marketCreate a marketUpdate."
tagy: [admin-graphql-api, returns, return-policy, profiles, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Return policy dosud žila v Shopify hlavně jako textová politika obchodu. Aplikace, které potřebovaly zjistit, jak dlouhá je lhůta pro vrácení zboží nebo jaká pravidla platí pro konkrétní trh, ji musely buď parsovat z textu, nebo si hodnoty držet ručně ve vlastní konfiguraci. U obchodů prodávajících do více zemí to bylo obzvlášť nepohodlné, protože právní požadavky na vratky se mezi trhy liší, například 14denní právo na odstoupení v EU oproti delším lhůtám jinde.

    Nový objekt ReturnPolicyProfile představuje sadu return pravidel, kterou merchant přiřadí k markets, a podle oznámení nahrazuje tradiční textovou store return policy. Díky němu mohou aplikace číst strukturovaná data, například délku return window pro daný market. Každý obchod má jeden nepojmenovaný výchozí profil, který platí pro všechny markets bez přiřazeného profilu, a merchant může vytvořit další pojmenované profily pro konkrétní markets. Profily se vytvářejí a upravují výhradně v Shopify adminu, přes API jsou pouze ke čtení a k přiřazování.

    Oznámení doplňuje admin funkci return window overrides z 29. 9. 2026, která umožňuje měnit lhůtu per market a per collection, product nebo variant. Důležité upřesnění: profily se přiřazují k markets, nikoli přímo ke kolekcím nebo produktům, a changelog sám neuvádí, že by přes nový API povrch byly dostupné i tyto overrides. Programový přístup tedy pokrývá čtení profilů a jejich vazbu na markets, nikoli kompletní správu return pravidel.
  zdroje:
    - title: "Shopify: Return policy profiles are now available in the GraphQL Admin API"
      url: "https://shopify.dev/changelog/posts/return-policy-profiles-are-now-available-in-the-graphql-admin-api"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Admin GraphQL API ve verzi **2026-10** zpřístupňuje **return policy profiles**. Profil je sada return pravidel, kterou merchant asociuje s markets. Aplikace tak mohou číst strukturovaná data o vratkách, například délku return window pro každý market, místo práce s textem return policy.

Nový API povrch:

- **`returnPolicyProfile`** — query pro načtení jednoho profilu podle ID.
- **`returnPolicyProfiles`** — query pro načtení profilů obchodu s volitelným argumentem `default` pro filtrování.
- **`marketCreate`** — při vytváření marketu lze přiřadit profil.
- **`marketUpdate`** — při úpravě marketu lze profil přiřadit i odebrat.
- **`Market.returnPolicyProfile`** — pole vrací přímo přiřazený profil, nebo `null`, pokud žádný přiřazen není.

Potřebné access scopes: **`read_legal_policies`** pro čtení profilů a **`write_markets`** pro přiřazování a odebírání profilů u markets.

Pravidla modelu:

- Každý obchod má jeden **nepojmenovaný výchozí profil**, který platí pro všechny markets bez vlastního přiřazeného profilu.
- Merchant může vytvořit **pojmenované profily** pro konkrétní markets (například standardní vs. regulované zboží).
- Profily se **spravují pouze v Shopify adminu**. API je v tomto kroku read-only pro samotné profily, zapisovat lze jen vazbu profil – market.
- Přiřazení je na úrovni **markets**, nikoli kolekcí nebo produktů. Výjimky per collection, product nebo variant řeší return window overrides v adminu.

Pojem multi-policy management v titulku je tedy třeba číst opatrně: více policies existuje a lze je programově číst a vázat na markets, ale jejich tvorba a editace zůstává v adminu.

## Časová osa

- 2026-06-17 — Shopify rozšiřuje self-serve returns o cancellation requests a pravidla pro vrácení a zrušení (související kontext)
- 2026-07-16 — Managed Markets automaticky pokrývá 14denní právo na odstoupení pro EU objednávky (související kontext)
- 2026-09-17 — Admin GraphQL API 2026-10 přidává čtení market hierarchií (související kontext)
- 2026-09-29 — Return window overrides v adminu (per market a per collection, product nebo variant)
- 2026-10-01 — Return policy profiles jsou dostupné v Admin GraphQL API verze 2026-10

## Dopad pro nás

**Pro vývojáře:** Jde o aditivní změnu bez povinné migrace. Pokud aplikace nebo vlastní returns portál odvozuje lhůtu pro vrácení z hardcoded konstanty nebo z textu return policy, lze to po přechodu na verzi 2026-10 nahradit čtením profilu přes `returnPolicyProfiles` nebo přes `Market.returnPolicyProfile`. Je třeba počítat s logikou fallbacku: pokud je u marketu hodnota `null`, platí nepojmenovaný výchozí profil obchodu. Aplikace potřebuje scope `read_legal_policies` pro čtení a `write_markets` pro přiřazování, což může znamenat novou žádost o oprávnění u již nainstalovaných aplikací. Nesmí se předpokládat, že API umí profily vytvářet nebo editovat, ani že pokrývá výjimky z return window overrides per collection, product nebo variant. Tuto část je před implementací nutné ověřit v dokumentaci objektu `ReturnPolicyProfile`.

**Pro PM / PO:** Nová příležitost pro merchanty prodávající na více trzích, kde se liší regulace a očekávání zákazníků. Konzistentní return pravidla per market jsou nyní strojově čitelná, což usnadňuje auditní reporting, notifikace a nastavení returns aplikací třetích stran. Stojí za to otevřít téma u obchodů s EU i non-EU prodejem, kde je potřeba ohlídat zákonné minimum 14 dní. Zároveň je dobré upozornit, že správa profilů zůstává ruční v adminu, takže automatizace celého životního cyklu return pravidel přes API zatím není možná. Priorita je nízká, protože nejde o breaking change ani o termín s deadlinem.

## Použití v Integrátoru

Přímý dopad je zatím nízký a spíše konzultační: při návrhu return workflow, notifikací a reportingu vratek pro obchody s více markets lze nově čerpat lhůty a pravidla ze strukturovaných profilů přes Admin GraphQL API. Jakékoli programové přiřazování profilů k markets vyžaduje scope `write_markets` a ověření chování v dokumentaci.
