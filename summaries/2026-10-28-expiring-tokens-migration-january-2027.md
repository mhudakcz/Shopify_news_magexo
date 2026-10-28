---
date: 2026-10-28
title: "⚠️ Expiring tokens — povinná migrace z permanent offline tokens do ledna 2027"
title_en: "Migrate to expiring tokens (deadline January 2027)"
slug: expiring-tokens-migration-january-2027
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost, breaking]
api_oblast: admin
nalehavost: kriticka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Povinnost se podle Editions i archivního changelogu týká aplikací listovaných v Shopify App Store, ne custom apps. Naše integrace běží jako custom apps, takže přímý dopad je nejspíš nulový, ale je potřeba ověřit, že nespravujeme žádnou public app a že žádná třetí strana, na které naše projekty závisí, nemá termín nesplněný."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "expiring-offline-tokens-all-public-apps-2027", "token-exchanges-resilient-migration-no-session"]
editions_release: fall-2026
tldr: "Editions Fall '26 připomíná, že public apps musí před lednem 2027 přejít na expirující tokeny (krátký access token plus refresh), jinak nezůstanou v App Store; přístupové tokeny lze získat i přes client credentials. Archivní changelog uvádí pevný termín 1. 1. 2027 a doporučuje dokončit migraci do prosince 2026. Do deadlinu zbývá 65 dní."
tagy: [security, oauth, access-tokens, migration, breaking, deadline, "2027"]
zdroj_kanal: editions
kontext:
  background: |
    Offline access token je přihlašovací údaj, kterým aplikace volá Admin API bez přítomnosti uživatele, typicky pro webhooky, plánované synchronizace a práci na pozadí. Historicky byl tento token trvalý: platil, dokud aplikaci obchodník neodinstaloval, a pokud unikl, útočník ho mohl zneužívat bez časového omezení. Shopify proto zavedl expirující variantu. Podle dřívějších článků v archivu má access token životnost 1 hodinu a k jeho obnově slouží refresh token s životností 90 dní. Každé obnovení vydá nový pár a předchozí refresh token se zneplatní. Přechod z trvalého tokenu na expirující je pro existující aplikaci jednorázový a bez nové autorizace obchodníkem nevratný.

    Termíny se zpřísňovaly postupně. Pro nově vytvořené public apps je expirující token povinný od 1. dubna 2026. Dev changelog z května 2026 povinnost rozšířil na všechny public apps od 1. ledna 2027 a doporučil migraci dokončit do prosince 2026. V létě a na podzim Shopify migraci zjednodušil: od 28. srpna zůstává starý refresh token použitelný až 30 dní, aby souběžný refresh nebo výpadek při ukládání nezpůsobil ztrátu přístupu, a od 29. září lze token exchange bez user session až sedm dní opakovat původním tokenem a dostat stejný pár zpět.

    Editions Fall '26 (28. října 2026) toto téma vybírá jako samostatnou položku v části pro vývojáře. Položka se jmenuje Migrate to use expiring tokens, vyzývá k prostudování dokumentace před lednem 2027 s odůvodněním, aby aplikace zůstala v App Store, a odkazuje na client credentials jako způsob, jak si access tokeny získat přímo. Odkaz vede na dokumentaci k application-only access tokens. Samotná stránka Editions žádné další technické detaily neuvádí. Konkrétní mechanismus, kterým Shopify po termínu nemigrované aplikace odstraní nebo zablokuje, nepopisuje ani Editions, ani archivní changelog.
  zdroje:
    - title: "Shopify Editions Fall '26 (Developer, Secure ecosystem)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Expirující offline tokens povinné pro všechny public apps od 1. 1. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/"
    - title: "Archiv: Expirující offline access tokens povinné pro nové public apps od 1. 4. 2026"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-required/"
    - title: "Archiv: Odolnější token exchange při migraci bez user session"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/token-exchanges-resilient-migration-no-session/"
    - title: "Archiv: Odolnější refreshes pro expiring offline access tokens"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/offline-access-tokens-resilient-refreshes/"
    - title: "Shopify Docs: Offline access tokens"
      url: "https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v Editions Fall '26 řadí mezi bezpečnostní položky pro vývojáře výzvu **přejít na expirující tokeny před lednem 2027**, aby aplikace zůstala v Shopify App Store. Smysl změny je jednoduchý: trvalý (permanent) offline token, který unikne, je zneužitelný donekonečna, kdežto expirující token dává útočníkovi okno v řádu hodin.

Co to znamená technicky:

- **Krátký access token + refresh token.** Aplikace už nedrží jeden věčný token, ale pár. Access token se používá pro volání API a rychle expiruje, refresh token slouží k vydání dalšího páru. Podle archivu je životnost access tokenu 1 hodina a refresh tokenu 90 dní.
- **Rotace při každém refreshi.** Každé obnovení vydá nový pár a starý refresh token se zneplatní. Aplikace proto musí nový pár uložit atomicky a refresh serializovat per obchod.
- **Jednorázová a nevratná migrace.** Existující trvalý token se vymění za expirující pár přes token exchange. Zpět na trvalý token se bez nové autorizace obchodníkem přejít nedá.
- **Client credentials jako druhá cesta.** Editions uvádí, že access tokeny si vývojář může získat přímo přes client credentials (odkaz míří na dokumentaci application-only access tokens). Hodí se tam, kde aplikace potřebuje token pro vlastní backendové volání a není vázaná na instalaci obchodníkem.

**Co Editions stránka neuvádí:**

- přesné datum v lednu (Editions říká jen před lednem 2027, archivní changelog uvádí 1. 1. 2027),
- přímo vyslovený následek po termínu. Editions to formuluje jako podmínku zůstat listovaný, přísnější formulace (odstranění z App Store, nefunkční tokeny) vychází z archivního changelogu a z našeho výkladu,
- zda se povinnost týká i custom apps a apps vytvořených přes Dev Dashboard pro jediný obchod. Archivní changelog mluví výslovně o public apps,
- podrobnosti ke client credentials (životnost tokenu, jaké typy aplikací ho smí použít, scopes).

## Časová osa

- **2025-12:** Shopify zavádí expirující offline tokens jako volitelnou možnost
- **2026-04-01:** expirující tokeny povinné pro nově vytvořené public apps ([detail](/Shopify_news_magexo/zmena/expiring-offline-tokens-required/))
- **2026-05:** rozšíření povinnosti na všechny public apps od 1. 1. 2027 ([detail](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/))
- **2026-08-28:** starý refresh token zůstává použitelný až 30 dní ([detail](/Shopify_news_magexo/zmena/offline-access-tokens-resilient-refreshes/))
- **2026-09-29:** token exchange bez user session lze až 7 dní opakovat původním tokenem ([detail](/Shopify_news_magexo/zmena/token-exchanges-resilient-migration-no-session/))
- **2026-10-28:** Editions Fall '26 zařazují migraci mezi položky pro vývojáře
- **2026-12 (doporučeno):** dokončená migrace s rezervou na ověření v produkci
- **2027-01-01:** deadline pro všechny public apps, do té doby zbývá 65 dní

## Dopad pro nás

**Pro vývojáře:**

Nejdřív zjistit, jestli se nás změna vůbec týká. Podle podkladů dopadá na public apps. Níže jsou naše úvahy, ne tvrzení Shopify:

- **Inventura.** Projít, jestli spravujeme nebo spoluvytváříme nějakou aplikaci listovanou v App Store, a u každé ověřit, zda už používá expirující offline tokeny. Pokud ano, je to hotové. Pokud ne, je to práce s pevným termínem.
- **Refresh logika.** Podle archivu mají refresh zabudovaný oficiální šablona (Remix, nově React Router) a knihovna shopify-app-js, vlastní kód bez frameworku ho musí doplnit. Pro PHP a Python vyšly oficiální SDK ve verzi 1.0 s podporou token exchange i obnovy tokenů ([viz SDK](/Shopify_news_magexo/zmena/shopify-app-sdks-php-python/)).
- **Ukládání.** Ukládat access token, refresh token a hodnoty expirace společně v jedné transakci. Refresh pouštět jen jednou souběžně na obchod.
- **Migrační job.** Převod uložených trvalých tokenů navrhnout jako idempotentní. Při chybě uložení výměnu zopakovat původním tokenem do sedmi dnů a původní token zahodit až po potvrzeném uložení. Chybu `invalid_subject_token` ošetřit novou autorizací.
- **Expirace refresh tokenu.** Počítat s tím, že refresh token po 90 dnech vyprší. Obchod, který se neozval déle, bude potřebovat re-autorizaci, a ta musí proběhnout bez ručního zásahu.
- **Client credentials.** Pokud aplikace potřebuje token pro vlastní backendové volání, posoudit tuto cestu místo ukládání offline tokenu. Dokud Editions neuvádí detaily, ověřit podmínky v dokumentaci.
- **Test.** Celý cyklus (exchange, refresh, selhání refreshe, re-autorizace) vyzkoušet na vývojovém obchodě a až potom na produkci.

**Pro PM / PO:**

Pokud žádnou public app neprovozujeme, jde hlavně o informační položku. Dvě věci stojí za pozornost i tak:

- **Závislost na třetích stranách.** Merchantům, které podporujeme, mohou běžet aplikace třetích stran. Aplikace, která termín nesplní, může z App Store zmizet a obchodník o ni přijde. Při nejbližších revizích projektů se vyplatí zkontrolovat seznam nainstalovaných aplikací a u kritických ověřit, že vývojář migraci oznámil.
- **Nabídka služby.** Migrace na expirující tokeny je konkrétní, časově vymezená zakázka pro majitele public apps, kteří termín nestihnou. Je to příležitost, ale s velmi krátkým oknem.

Při plánování počítat s deadlinem 1. 1. 2027 jako s pevným datem a s doporučeným dokončením v prosinci 2026. Do vánočního útlumu zbývá málo času.

## Použití v Integrátoru

Možná: naše integrace běží jako custom apps a povinnost se týká public apps, takže přímý dopad je nepravděpodobný. Je ale vhodné ověřit, že nikde nepoužíváme aplikaci listovanou v App Store s trvalým offline tokenem, a v refresh logice držet atomické ukládání páru tokenů.

## Související

- [Editions Fall '26, přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Téma Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [Expirující offline tokens povinné pro všechny public apps od 1. 1. 2027](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/)
- [Odolnější token exchange při migraci bez user session](/Shopify_news_magexo/zmena/token-exchanges-resilient-migration-no-session/)
- [Odolnější refreshes pro expiring offline access tokens](/Shopify_news_magexo/zmena/offline-access-tokens-resilient-refreshes/)
