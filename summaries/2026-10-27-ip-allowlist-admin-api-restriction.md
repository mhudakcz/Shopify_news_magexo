---
date: 2026-10-27
title: "Admin API: IP allowlist restrictions per app (compromised token mitigation)"
title_en: "Restrict Admin API access with an IP allowlist"
slug: ip-allowlist-admin-api-restriction
zdroj: https://shopify.dev/changelog/posts/restrict-admin-api-access-to-your-app-with-an-ip-allowlist
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se každé aplikace, která volá Admin API z pevných IP adres. Pokud naše aplikace běží na serverech se statickou adresou, můžeme tokeny omezit jen na ně; pokud běží serverless nebo z proměnlivých adres, funkce pro ně zatím není k dispozici."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, securing-your-app-together-shopify, expiring-offline-tokens-all-public-apps-2027, network-access-rules-shopify-app-toml]
tldr: "Dev Dashboard má u každé aplikace novou sekci IP allowlist: zadáte IP adresy nebo CIDR rozsahy svých serverů, otestujete je proti nedávnému provozu a zapnete vynucování, po kterém Shopify odmítá požadavky na GraphQL i REST Admin API s tokeny té aplikace z jiných adres chybou 403. Je to určené pro aplikace se statickými IP; serverless s dynamickými IP zatím podporované nejsou."
tagy: [security, admin-api, ip-allowlist, access-control, app-security, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Admin API tokeny jsou přihlašovací údaje, které aplikaci dávají přístup k datům obchodu. Dosud platilo, že kdo token získá, může s ním volat API odkudkoli na světě. Pokud token unikne, například z repozitáře, logu, zálohy nebo z kompromitovaného serveru, útočník ho může zneužít ze své vlastní infrastruktury a Shopify nemá jak poznat, že požadavek nepřichází z legitimního serveru aplikace. Expirující tokeny tento problém zmenšují časovým omezením platnosti, ale neřeší, odkud se token smí použít.

    Nová funkce přidává druhou vrstvu ochrany: omezení podle zdrojové IP adresy. Vývojář v Dev Dashboardu u dané aplikace zadá adresy nebo CIDR rozsahy svých serverů a Shopify pak odmítá požadavky na GraphQL Admin API a REST Admin API s tokeny té aplikace, které nepřijdou z povoleného rozsahu. Takový požadavek skončí chybou 403. Uniklý token tak mimo povolené adresy nefunguje. Nastavení má tři kroky: zadat adresy, otestovat je proti nedávnému provozu aplikace a teprve potom zapnout vynucování, což snižuje riziko, že vývojář omylem zablokuje vlastní legitimní provoz. Funkce je určená pro aplikace, které volají Shopify ze statických IP adres; aplikace na serverless platformách s dynamickými adresami zatím podporované nejsou a Shopify u nich uvádí jen, že podpora přijde brzy, bez data.

    Změna zapadá do bezpečnostní linie, kterou Shopify rozvinul kolem Editions Fall '26. Blog Securing your app, together z 20. října 2026 slíbil, že platforma přidá IP omezení tak, aby klíče aplikací fungovaly jen ze serverů vývojáře, ale bez detailů a termínů. Tento changelog je první konkrétní podoba toho slibu. Editions Fall '26 pak IP allowlisting zařadil do bezpečnostní části vývojářského tématu spolu s expirujícími offline tokeny, konci script tagů a security checkem. Pro merchanty se nemění nic viditelného; funkce je nástroj pro vývojáře aplikací, který může pomoci při bezpečnostních auditech a při odpovědích na dotazníky o ochraně přístupových údajů. Shopify post neoznačil jako vyžadující akci, jde o dobrovolné zpřísnění.
  zdroje:
    - title: "Shopify: Restrict Admin API access with an IP allowlist"
      url: "https://shopify.dev/changelog/posts/restrict-admin-api-access-to-your-app-with-an-ip-allowlist"
    - title: "Shopify Docs: IP allowlist (Dev Dashboard)"
      url: "https://shopify.dev/docs/apps/build/dev-dashboard/ip-allowlist"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Securing your app, together"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/securing-your-app-together-shopify/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify 27. října 2026 zpřístupnil v Dev Dashboardu omezení Admin API přístupu aplikace podle IP adresy. Na stránce **Settings** každé aplikace přibyla sekce **IP allowlist**. Po jejím zapnutí Shopify odmítá požadavky na **GraphQL Admin API** i **REST Admin API**, které používají tokeny dané aplikace a přicházejí z adresy mimo seznam. Odmítnutý požadavek dostane HTTP status `403`.

Nastavení probíhá ve třech krocích:

1. **Zadat adresy.** Do seznamu se vloží IP adresy nebo CIDR rozsahy serverů, ze kterých aplikace Shopify volá.
2. **Otestovat je.** Shopify seznam porovná s nedávným provozem aplikace, takže je vidět, zda by vynucování zablokovalo legitimní požadavky.
3. **Zapnout vynucování.** Teprve tímto krokem se pravidlo začne uplatňovat a požadavky z cizích adres začnou končit chybou 403.

Pro koho je funkce určená: Shopify ji doporučuje aplikacím, které volají Shopify ze **statických IP adres**. Aplikace hostované na serverless platformách s dynamickými IP zatím podporované nejsou. Shopify u nich uvádí, že podpora přijde brzy (coming soon), bez konkrétního data. Postup nastavení je v dokumentaci na shopify.dev v části o IP allowlistu v Dev Dashboardu.

**Co zdrojový post neuvádí** (je třeba ověřit v dokumentaci nebo vyzkoušet na testovací aplikaci):

- limit počtu adres nebo rozsahů v allowlistu,
- zda je podporováno IPv6, nebo jen IPv4 a CIDR,
- jak přesně funguje test proti nedávnému provozu (za jak dlouhé období a co se vyhodnotí),
- tělo a detail odpovědi 403,
- rozlišení druhů tokenů (offline, online, expirující); post mluví obecně o tokenech aplikace,
- zda se funkce týká i aplikací vytvořených mimo Dev Dashboard,
- postupné zavádění nebo jiné časové omezení; funkce je účinná od data zveřejnění.

Post je označen jako nový (New), s oblastí Dev Dashboard, a není označen jako vyžadující akci. Nejde tedy o povinnou změnu, ale o nový bezpečnostní nástroj k dobrovolnému zapnutí.

## Časová osa

- **2026-10-20** - blog Securing your app, together slibuje IP omezení klíčů aplikací, ale bez detailů a termínů
- **2026-10-27** - zveřejnění changelog postu, účinnost od téhož dne (12:00 ET); sekce IP allowlist je dostupná v nastavení aplikací v Dev Dashboardu
- **2026-10-28** - Editions Fall '26 zařazuje IP allowlisting mezi bezpečnostní položky vývojářského tématu
- **Bez data** - podpora aplikací na serverless platformách s dynamickými IP adresami (podle Shopify coming soon)

## Dopad pro nás

**Pro vývojáře:** Žádná akce není povinná, ale u production aplikací stojí za to funkci zapnout, pokud mají stabilní odchozí adresy. Praktické poznámky:

- Nejdřív zjistit, z jakých adres aplikace skutečně volá Shopify. Kromě hlavního backendu je třeba zahrnout i workery, plánované úlohy, CI/CD kroky, které volají API, a případné administrační skripty. Cokoli mimo seznam po zapnutí vynucování dostane 403.
- Využít testovací krok. Seznam otestovat proti nedávnému provozu a vynucování zapnout až poté, co test neukáže blokovaný legitimní provoz.
- Lokální vývoj a staging z proměnlivých adres (domácí a kancelářské sítě, VPN) by se po zapnutí zablokovaly. Vynucování proto zapínat jen u production aplikace a pro vývoj a testování používat samostatnou aplikaci bez omezení. To je naše doporučení, ne tvrzení z postu.
- Do monitoringu přidat alert na vlny odpovědí 403 z Admin API. Změna egress adresy (migrace hostingu, nový NAT, změna poskytovatele) bez úpravy allowlistu způsobí výpadek integrace. Do postupu pro migraci hostingu proto zařadit krok aktualizace allowlistu.
- Aplikace na serverless platformách funkci zatím použít nemohou. U nich zůstávají jako ochrana expirující tokeny, minimální scopes a zabezpečení účtů a repozitářů.
- Nezaměňovat s konfigurací network access rules v `shopify.app.toml`: ta se týká kódu běžícího v prohlížeči (storefront, checkout, admin), ne serverových volání Admin API.

**Pro PM / PO:** Jde o levné snížení rizika u uniklého tokenu, které nevyžaduje změny v kódu ani souhlas merchantů. Doporučení je zařadit zapnutí allowlistu do bezpečnostního backlogu u production aplikací se statickými IP a určit vlastníka, který bude allowlist udržovat při změnách infrastruktury. Zapnutí je dobré zdokumentovat jako kontrolní opatření pro bezpečnostní dotazníky a audity (například při požadavcích na řízení přístupu a ochranu přístupových údajů); formální vliv na konkrétní certifikace je ale potřeba ověřit s auditorem, Shopify takové tvrzení v postu neuvádí. Urgence je střední: není termín ani sankce, ale po říjnovém blogu o bezpečnosti aplikací a Editions Fall '26 jde o směr, kterým se ekosystém ubírá, a lze očekávat, že zpřísňování bude pokračovat.

## Použití v Integrátoru

Pokud naše aplikace volají Admin API z pevných serverových adres, můžeme jejich tokeny omezit na tyto adresy a snížit dopad případného úniku. U aplikací běžících serverless nebo z proměnlivých adres je funkce zatím nedostupná, takže je potřeba nejdřív ověřit, kde která aplikace běží.
