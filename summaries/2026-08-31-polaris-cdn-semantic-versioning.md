---
date: 2026-08-31
title: "Polaris CDN přechází na semantic versioning"
title_en: "The Polaris CDN is adopting semantic versioning"
slug: polaris-cdn-semantic-versioning
zdroj: https://shopify.dev/changelog/the-polaris-cdn-is-adopting-semantic-versioning
shrnuto_dne: 2026-09-08
kategorie: [fyi, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-31
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud third-party apps pro klienty načítají Polaris web components z CDN, jde o novou konvenci URL a pinování verzí, kterou je dobré znát při update strategii."
dotcene_klienty: []
souvisejici: [polaris-web-components-migration-guides, shopify-cli-40-semver-autoupdates, removing-outdated-polaris-docs]
tldr: "Polaris Web Components na CDN teď dodržují semantic versioning (major.minor), takže apps si můžou vybrat mezi automatickými kompatibilními update a pevně přišpendlenou verzí."
tagy: [polaris, cdn, "semver", versioning, api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Polaris Web Components — sada UI komponent pro third-party apps — se dosud distribuovaly přes CDN bez jasného verzovacího schématu, což znamenalo, že aktualizace mohly přinést breaking changes bez předchozího varování. Vývojáři neměli spolehlivý způsob, jak si vybrat mezi "chci nejnovější opravy" a "chci stabilitu, dokud sám neaktualizuji".

    Shopify teď zavádí standardní semantic versioning (major.minor.patch) i pro CDN distribuci. Major verze mohou obsahovat breaking API nebo behaviorální změny vyžadující úpravu appky, zatímco minor verze přinášejí jen kompatibilní změny — nové komponenty, API rozšíření, bugfixy, accessibility a performance vylepšení nebo vizuální doladění.

    Prakticky to znamená tři distribuční kanály na CDN: stabilní major větev (např. `polaris-1.js`), která se automaticky aktualizuje v rámci minor/patch verzí; pevně přišpendlená verze (např. `polaris-1.1.js`), která se needituje vůbec, dokud si ji vývojář sám nepovýší; a release candidate větev (`polaris-1-rc.js`) pro testování připravovaných funkcí před jejich oficiálním vydáním. Legacy URL `polaris.js` zůstává v provozu a bude se dál mapovat na aktuální major verzi, ale nebude se už automaticky posouvat mezi major verzemi jako dřív.

    Změna se týká výhradně third-party apps, které si Polaris Web Components natahují přímo z CDN. Netýká se App Home UI extensions, Admin UI extensions ani App Bridge — ty mají vlastní distribuční a verzovací mechanismy. Existující apps nemusí dělat nic okamžitě; nové schéma běží paralelně a balíček `@shopify/polaris-types` se sladí s CDN verzemi, takže typové definice budou odpovídat reálně nasazené verzi komponent.
  zdroje:
    - title: "Shopify: The Polaris CDN is adopting semantic versioning"
      url: "https://shopify.dev/changelog/the-polaris-cdn-is-adopting-semantic-versioning"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Polaris CDN doteď fungovalo na principu "latest wins" — appka si stáhla aktuální verzi komponent a při další návštěvě klidně i novější, bez záruky, že se něco nerozbije. Nově Shopify zavádí standardní semantic versioning (major.minor.patch), takže je z verze rovnou vidět, jestli jde o bezpečnou kompatibilní aktualizaci, nebo o změnu, která může vyžadovat zásah do kódu.

Konkrétně vzniká rozdíl mezi třemi typy URL: stabilní major větev, která se sama posouvá v rámci minor/patch verzí (nové komponenty, opravy, accessibility a performance vylepšení), pevně přišpendlená konkrétní verze, která se nemění vůbec, a release candidate větev pro ty, kdo chtějí testovat nadcházející funkce dřív. Legacy URL zůstává funkční, ale přestává tiše přeskakovat mezi major verzemi.

## Časová osa

- Změna je účinná od 18. 8. 2026, oznámena 31. 8. 2026
- Existující apps nemusí nic měnit — nové URL konvence běží paralelně vedle staré
- `@shopify/polaris-types` se postupně sladí s verzováním na CDN

## Dopad pro nás

**Pro vývojáře:** Pokud u klienta stavíme nebo udržujeme third-party app, která natahuje Polaris Web Components přímo z CDN, stojí za to přejít z legacy `polaris.js` na explicitní major URL (`polaris-1.js`) a zvážit, jestli chceme automatické minor updaty, nebo radši pevně přišpendlenou verzi kvůli předvídatelnosti releasů. Nejde o povinnou migraci, ale o možnost získat víc kontroly nad tím, kdy se UI komponenty mění.

**Pro PM / PO:** Žádná akce není nutná okamžitě a nic se pro klienty navenek nemění. Užitečné je to hlavně jako podklad při plánování údržby appek — dává nám to slovník (major/minor/patch) pro komunikaci s klientem o tom, kdy a proč aktualizujeme UI vrstvu jejich aplikace.

## Použití v Integrátoru

Přímo se nás to netýká, protože nejde o vlastní e-shop, ale je dobré mít v hlavě tuto konvenci, pokud spravujeme třetí straně app postavenou na Polaris Web Components a řešíme, kdy a jak aktualizovat CDN odkaz.
