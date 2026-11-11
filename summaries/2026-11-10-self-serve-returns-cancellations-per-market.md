---
date: 2026-11-10
title: "Self-serve returns + cancellations — nastavení per market (různé policies per region)"
title_en: "Configure self-serve returns and cancellations for each market"
slug: self-serve-returns-cancellations-per-market
zdroj: https://changelog.shopify.com/posts/configure-self-serve-returns-and-cancellations-for-each-market-you-sell-in
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zapnutí nebo vypnutí vrácení a zrušení se nově liší podle marketu, takže logika, která zpracovává žádosti o vrácení a zrušení objednávek, nemůže předpokládat jedno pravidlo pro celý obchod."
dotcene_klienty: []
souvisejici: ["self-serve-order-cancellation-requests", "return-window-overrides", "managed-markets-eu-buyer-cancellation-returns", "return-policy-profiles-graphql-admin"]
tldr: "Obchodníci prodávající ve více marketech si mohou samoobslužná vrácení a zrušení objednávek nastavit zvlášť pro každý market. Dosavadní nastavení se přenesla automaticky, ale market bez pravidel pro vrácení nemá časový limit."
tagy: [self-serve-returns, cancellations, markets, international, policies]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Self-serve vrácení a zrušení znamená, že zákazník může objednávku zrušit nebo požádat o vrácení zboží sám z účtu zákazníka, bez kontaktu se zákaznickou podporou. Do teď šlo o jedno nastavení pro celý obchod, které platilo pro kupující ve všech marketech stejně.

    Markets jsou způsob, jak jeden obchod Shopify obsluhuje více zemí nebo regionů s vlastní měnou, jazykem, cenami a katalogem. Požadavky na vrácení se přitom mezi zeměmi liší, ať jde o zákonnou lhůtu pro odstoupení od smlouvy, nebo o logistiku zpětné dopravy. Jedno globální nastavení proto nutilo obchodníky ke kompromisu nebo k aplikaci třetí strany.

    V archivu na tuto změnu navazuje několik dřívějších kroků: samoobslužné žádosti o zrušení objednávky, přepisy lhůty pro vrácení a profily pravidel vrácení v Admin GraphQL. Novinka z 10. listopadu 2026 přidává do stejné oblasti rozměr marketu.
  zdroje:
    - title: "Shopify: Configure self-serve returns and cancellations for each market"
      url: "https://changelog.shopify.com/posts/configure-self-serve-returns-and-cancellations-for-each-market-you-sell-in"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify umožňuje nastavit samoobslužná vrácení a zrušení objednávek zvlášť pro každý market, ve kterém obchodník prodává. Dřív platilo jedno nastavení pro celý obchod. Dotýká se to obchodů s více markety.

Nastavení najdete v administraci: Settings, Customer Accounts, Order Actions, Manage, poté Order Status a ozubené kolo s nastavením. Přepínače Return a Cancel se nejdřív nastaví jako výchozí pro obchod, uloží se, a potom se vybere konkrétní market a udělá se totéž pro něj.

Stávající nastavení se přenesla automaticky, nic se tedy znovu zapínat nemusí. V editoru checkoutu se navíc u aplikací třetích stran pro vrácení objevily nové přepínače, které usnadňují srovnání s vestavěnou funkcí Shopify.

Důležité upozornění: pokud market nemá nastavená pravidla pro vrácení, administrace ukáže odkaz na jejich nastavení. Bez pravidel mohou kupující v daném marketu žádat o vrácení bez časového omezení. Konkrétní lhůty a poplatky za zpětnou dopravu, například odlišné pro USA, Británii nebo Německo, si obchodník musí nastavit sám. Changelog žádné takové hodnoty nepředepisuje.

## Časová osa

- 10. 11. 2026: novinka zveřejněna v merchant changelogu a nastavení per market je dostupné.
- Stávající nastavení se přenesla automaticky, bez nutnosti akce.

## Dopad pro nás

**Pro vývojáře:** Changelog neuvádí žádnou změnu API. Pokud ale některý obchod zpracovává žádosti o vrácení nebo zrušení programově, nesmí předpokládat jedno pravidlo pro celý obchod. Doporučujeme ověřit, zda se tyto žádosti chovají podle marketu kupujícího, a počítat s tím, že market bez pravidel nemá časový limit.

**Pro PM / PO:** U klientů prodávajících do více zemí je to příležitost sladit podmínky vrácení s místní legislativou a logistikou. Při auditu nastavení stojí za kontrolu, zda každý aktivní market má pravidla pro vrácení, aby se nestalo, že lhůta chybí. Výhodné je i srovnání vestavěné funkce s aplikacemi třetích stran, které by mohly jít vypnout.

## Použití v Integrátoru

Přímé použití zatím neplyne z dostupných informací, jde o nastavení v administraci bez nového API. Dopad případně nastane tam, kde synchronizace zpracovává objednávky se stavy vrácení a zrušení, a to je třeba ověřit.
