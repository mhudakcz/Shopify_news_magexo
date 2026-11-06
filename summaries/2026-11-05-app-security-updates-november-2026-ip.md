---
date: 2026-11-05
title: "App security updates (listopad 2026) — IP allowlist now required + další"
title_en: "App security updates: IP allowlist is now required"
slug: app-security-updates-november-2026-ip
zdroj: https://shopify.dev/changelog/blog/app-security-updates-ip-allowlist-is-now-required
shrnuto_dne: 2026-11-06
kategorie: [nova-prilezitost, breaking]
api_oblast: other
nalehavost: kriticka
customer_facing: false
ucinnost_od: 2026-11-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Povinnost se týká public apps volajících Admin API; pokud provozujeme nebo spravujeme aplikaci listovanou v App Store, musíme do 12. a 20. listopadu zapnout IP allowlist, u custom apps je dopad nejspíš nulový, ale je třeba to ověřit."
dotcene_klienty: []
souvisejici: [ip-allowlist-admin-api-restriction, expiring-tokens-migration-january-2027, network-access-rules-shopify-app-toml, editions-fall-2026-developer]
tldr: "Shopify zpřísnil bezpečnost public apps: IP allowlist je povinný pro bulk operace do 12. listopadu 2026 a pro všechna ostatní Admin API volání do 20. listopadu 2026; existující instalace fungují do 1. dubna 2027."
tagy: [security, ip-allowlist, app-security, partners, bulletin]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Admin API tokeny dávají aplikaci přístup k datům obchodu a dosud je šlo použít odkudkoli. Pokud token unikl, útočník ho mohl zneužít ze své infrastruktury. Shopify proto v říjnu 2026 představil IP allowlist, tedy omezení tokenů na adresy nebo sítě serverů aplikace, a doplnil ho expirujícími offline tokeny a deklarací síťových pravidel v shopify.app.toml.

    Tento bezpečnostní bulletin z 5. listopadu 2026 mění IP allowlist z dobrovolného nástroje na povinný požadavek pro každou public app, která volá Admin API. Bulk queries a bulk mutations mají dřívější termín 12. listopadu 2026 (úvodní text stránky uvádí 11. listopadu, proto je rozumné počítat s dřívějším datem), ostatní public apps musí allowlist zapnout do 20. listopadu 2026. Po těchto termínech hrozí blokace bulk operací, vyřazení z App Store pro nové instalace a označení aplikace v nastavení obchodníka.

    Bulletin zároveň shrnuje navazující kroky. Pro aplikace na serverless hostingu nebo s dynamickými IP je k dispozici allowlist podle sítě (ASN). Deklarace network_access se doporučuje otestovat v náhledech vývojových obchodů, bezpečnostní kontroly lze přidat do CI/CD a připravují se samostatné scopy pro bulk queries a bulk mutations. Termíny pro expirující offline tokeny zůstávají beze změny: 1. ledna 2027 pro vyřazení z App Store a 1. dubna 2027 pro selhávání požadavků. Podezřelé incidenty se hlásí na partner-security-reports@shopify.com.
  zdroje:
    - title: "Shopify: App security updates: IP allowlist is now required"
      url: "https://shopify.dev/changelog/blog/app-security-updates-ip-allowlist-is-now-required"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Každá public app, která volá Admin API, musí mít zapnutý IP allowlist. Tokeny pak fungují jen z uvedených adres nebo sítí, takže uniklý token mimo ně nelze použít. Aplikace běžící na serverless hostingu nebo s dynamickými IP adresami mají místo seznamu adres použít allowlist podle sítě (podpora ASN).

Bulletin dále připomíná: neexpirující tokeny lze dohledat filtrováním API logů v Dev Dashboardu podle typu tokenu, deklarace network_access je vhodné otestovat v náhledech vývojových obchodů a bezpečnostní kontroly doporučuje zařadit do CI/CD. Brzy přijdou samostatné scopy pro bulk queries a bulk mutations; aplikace, které spustily bulk operaci za posledních 180 dní, je dostanou automaticky, ostatní je musí doplnit do konfigurace před dalším nasazením. Obchodníci uvidí stav expirujících tokenů a IP allowlistu v Settings > Apps.

## Časová osa

- 12. 11. 2026 (23:59 ET): termín pro IP allowlist u bulk queries a mutations, poté jsou bulk operace bez allowlistu blokovány (úvodní text stránky uvádí 11. 11., počítejte s dřívějším datem).
- 20. 11. 2026 (23:59 ET): termín pro IP allowlist u všech ostatních public Admin API apps; vyřazení z App Store pro nové instalace a označení v Settings > Apps.
- 1. 1. 2027: vyřazení z App Store a označení u aplikací bez expirujících offline tokenů.
- 15. 1. 2027: obchodníci vidí varování v administraci (IP allowlist i expirující tokeny).
- 1. 4. 2027: požadavky na Admin API selhávají; do té doby existující instalace fungují.

## Dopad pro nás

**Pro vývojáře:** U každé public app zjistit, odkud volá Admin API, zadat IP adresy nebo ASN a allowlist zapnout nejdřív u bulk operací (do 12. 11.), pak u zbytku (do 20. 11.). Dohledat neexpirující tokeny v API logech, dokončit migraci na expirující tokeny před lednem 2027 a ověřit deklarace network_access. Připravit se na nové bulk scopy a zařadit bezpečnostní kontroly do CI/CD.

**Pro PM / PO:** Termíny jsou velmi blízko (6 až 14 dní od vydání), takže jde o akutní položku. Je třeba zjistit, které aplikace jsou public a listované v App Store, určit odpovědnou osobu a ověřit, zda nehrozí blokace bulk synchronizací. U custom apps se povinnost nejspíš netýká, ale doporučuje se to potvrdit a zkontrolovat závislosti na aplikacích třetích stran.

## Použití v Integrátoru

Naše integrace nejspíš běží jako custom apps, takže přímý dopad je pravděpodobně nulový; je ale nutné ověřit, že nespravujeme žádnou public app a že aplikace třetích stran, na kterých projekty závisí, termíny splní.
