---
date: 2026-10-20
title: "Securing your app, together — Shopify blog o bezpečnosti aplikací"
title_en: "Securing your app, together"
slug: securing-your-app-together-shopify
zdroj: https://shopify.dev/changelog/blog/securing-your-app-together
shrnuto_dne: 2026-10-23
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše aplikace jsou custom apps, kde platí stejné principy (ověřené webhooky, izolace dat obchodů, správa tokenů a přístupů), takže osm doporučení z blogu můžeme použít jako kontrolní seznam."
dotcene_klienty: []
souvisejici: [shopify-ai-toolkit-security-check, expiring-offline-tokens-all-public-apps-2027, dev-dashboard-filterable-logs-health-metrics]
tldr: "Shopify vyzývá všechny vývojáře aplikací, aby tento týden prošli osm bezpečnostních kroků (security check v AI Toolkitu, expirující tokeny, skenery zranitelností, escapování dat, kontrola logů, dvoufázové ověření účtů, aktuální nouzový kontakt) a zároveň slibuje přísnější hranice pro storefront kód, IP omezení klíčů a vyšší bezpečnostní požadavky App Store."
tagy: [security, app-store, best-practices, vulnerabilities, partners]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Blogový příspěvek vychází 20. října 2026 a na Shopify changelogu je označen jako Update s příznakem Action required a oblastí Platform. Shopify v něm otevřeně říká, že merchanti instalují aplikace, protože věří jim i App Storu, a že útočníci se tuto důvěru snaží zneužít. Podle příspěvku útoků napříč ekosystémem aplikací přibývá, protože AI je stále lepší v hledání zranitelností. Proto Shopify žádá každého vývojáře aplikací, aby kroky z článku provedl ještě tento týden.

    Příspěvek navazuje na oznámení AI Toolkit security check z 15. října 2026, které přineslo příkaz `shopify app security check` pro lokální kontrolu kódu, konfigurace extensions a závislostí. Ten byl tehdy popsán jako dobrovolný nástroj bez termínu. Nový blog ho staví na první místo seznamu a zároveň ho zasazuje do širšího rámce sdílené odpovědnosti: Shopify má na starosti ochranu na úrovni platformy, vývojář odpovídá za bezpečnost vlastního kódu, serverů a účtů. Podle příspěvku většina partnerů, kteří check testovali v early access, našla něco, o čem nevěděli.

    Důležitá je návaznost na dříve oznámenou migraci na expirující offline access tokens. Blog uvádí, že Shopify brzy zpřísní povinnost pro všechny public apps, ale nezmiňuje konkrétní datum. Dříve publikované oznámení z června 2026 mluví o termínu 1. ledna 2027 s doporučenou migrací do prosince 2026. Na platformní straně Shopify avizuje přísnější hranice pro storefront kód aplikací, IP omezení, díky nimž budou klíče aplikací fungovat jen ze serverů vývojáře, a vyšší bezpečnostní požadavky pro App Store. U těchto tří změn příspěvek žádné detaily ani termíny nedává a slibuje, že je sdílí dopředu, než cokoli vstoupí v platnost.
  zdroje:
    - title: "Shopify: Securing your app, together"
      url: "https://shopify.dev/changelog/blog/securing-your-app-together"
    - title: "Shopify: Build with confidence: Shopify AI Toolkit's security check"
      url: "https://shopify.dev/changelog/blog/build-more-secure-apps-with-shopify-s-ai-toolkit-security-check"
    - title: "Shopify Docs: Migrate to expiring offline access tokens"
      url: "https://shopify.dev/docs/apps/build/authentication-authorization/migrate-to-expiring-offline-access-tokens"
    - title: "Shopify Docs: Dev Dashboard monitoring and logs"
      url: "https://shopify.dev/docs/apps/build/dev-dashboard/monitoring-and-logs#logs"
    - title: "Shopify Docs: Following security best practices"
      url: "https://shopify.dev/docs/apps/build/security/following-security-best-practices"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify publikoval výzvu pro všechny vývojáře aplikací: bezpečnost je sdílená odpovědnost a platforma sama ji nezajistí. Příspěvek obsahuje osm doporučení pro vývojáře, seznam toho, co dělá Shopify na úrovni platformy, a jasné rozdělení odpovědnosti při incidentu.

**Doporučení pro vývojáře aplikací:**

1. **Spustit nový security check.** Jediný prompt v AI Toolkitu zkontroluje problémy typické pro Shopify aplikace: neautentizované routes, přístup k datům jiného obchodu (cross-shop data access) a neověřené webhooky.
2. **Přejít na expirující access tokens.** Krátkodobé tokeny omezují škodu, pokud token unikne. Shopify uvádí, že to brzy bude povinné pro všechny public apps.
3. **Spustit skenery zranitelností** a ověřit, že jsou všechny endpointy aplikace zabezpečené.
4. **Brát všechna renderovaná data jako nedůvěryhodná**, včetně dat z metafields nebo z vlastních serverů, a důsledně escapovat a sanitizovat vstupy.
5. **Projít API aktivitu v Dev Dashboardu** a hledat podezřelé chování. Logy jde filtrovat podle IP adresy, ze které požadavek přišel, takže se dají odhalit vzorce provozu a podezřelé zdroje.
6. **Chránit každý účet spojený s aplikací.** Zapnout dvoufázové ověření pro Partner účet, hosting, CDN, repozitáře kódu a e-mail a odebrat přístup lidem, kteří ho už nepotřebují.
7. **Udržovat aktuální nouzový kontakt.** E-mail pro nouzové situace v Partner Dashboardu musí končit u někoho, kdo dokáže rychle jednat.
8. **Uplatnit bezpečnostní best practices** z dokumentace Shopify.

**Co dělá Shopify na úrovni platformy:** zpřísňuje hranice pro storefront kód aplikací, přidává IP omezení tak, aby klíče aplikací fungovaly jen ze serverů vývojáře, zvyšuje bezpečnostní požadavky App Store, bude předem sdílet detaily a termíny každé změny a dál investuje do platformních ochran, nástrojů a dokumentace.

**Rozdělení odpovědnosti:** při podezření na bezpečnostní problém je vývojář povinen okamžitě informovat Shopify na adrese partner-security-reports@shopify.com. Za opravu a za informování dotčených merchantů odpovídá vývojář, Shopify ho přitom podpoří. Obecné dotazy ke bezpečnosti jdou přes Shopify Support.

Příspěvek je strategický a odkazuje na další dokumentaci. Neobsahuje technické detaily o secure codingu, správě secrets ani aktualizaci závislostí. K těmto tématům jen odkazuje na stránku s best practices a na security check, který závislosti kontroluje.

## Časová osa

- **2026-10-15:** Shopify zveřejnil AI Toolkit security check (příkaz `shopify app security check`) jako dobrovolný nástroj.
- **2026-10-20:** Zveřejnění blogu (označeno Update, Action required, oblast Platform). Shopify žádá, aby vývojáři kroky provedli tento týden.
- **2026-10-21 (12:00 ET):** Datum účinnosti podle metadat changelogu.
- **2027-01-01:** Dříve oznámený termín povinných expirujících offline tokens pro všechny public apps (podle oznámení z června 2026). Blog sám uvádí jen, že to bude povinné brzy, bez data.
- **Bez termínu:** přísnější hranice storefront kódu, IP omezení klíčů aplikací a vyšší požadavky App Store. Shopify slibuje, že detaily a časový plán sdílí předem.

## Dopad pro nás

**Pro vývojáře:** Nejrychlejší krok je projít si osm bodů jako kontrolní seznam u každé aplikace, kterou spravujeme. Security check z bodu 1 stojí za to pustit nad kódem všech vlastních aplikací, pokud jsme to po oznámení z 15. října ještě neudělali. U bodu 2 platí, že povinnost se týká public apps. Custom apps ji mít nemusí, ale krátkodobé tokeny jsou stejně dobrý bezpečnostní vzor a dřívější migrační analýzu máme popsanou v souvisejícím článku. Bod 4 je prakticky review všech míst, kde renderujeme data z metafields nebo z vlastních API bez escapování. Bod 5 jde udělat hned: v Dev Dashboardu si projít logy a filtrovat podle IP. Bod 6 je organizační (dvoufázové ověření u Partner účtu, hostingu, CDN, repozitářů a e-mailu, plus audit, kdo má přístup). Největší otevřená otázka jsou IP omezení klíčů: pokud naše služby běží z proměnlivých IP adres (serverless, CI/CD, lokální vývoj), může se omezení dotknout i nás. Dokud Shopify nezveřejní detaily, nemáme jak dopad posoudit, takže doporučujeme sledovat další oznámení.

**Pro PM / PO:** Nejde o změnu chování API ani o termín s přímým dopadem na merchanty, ale Shopify výslovně žádá akci tento týden a řadí bezpečnost mezi priority App Store. Doporučení je zařadit osm bodů do bezpečnostního backlogu a určit vlastníka u každého. Zkontrolovat je také potřeba organizační věci, které nejdou vyřešit kódem: kdo je nouzový kontakt v Partner Dashboardu, kdo má přístup k účtům a repozitářům a kdo by řešil incident a komunikaci s dotčenými merchanty. Připravované vyšší požadavky App Store je dobré sledovat, protože mohou ovlivnit plánování případného publikování aplikací. Urgence je střední: není tvrdý deadline, ale Shopify očekává rychlou reakci.

## Použití v Integrátoru

Naše aplikace běží jako custom apps, takže povinnost expirujících tokenů se nás přímo netýká, ale zbylé body (security check, escapování dat, kontrola logů, zabezpečení účtů a aktuální nouzový kontakt) jsou dobrý kontrolní seznam i pro ně. Sledovat je třeba hlavně detaily k IP omezením klíčů, až je Shopify zveřejní.
