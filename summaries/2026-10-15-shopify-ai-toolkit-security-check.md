---
date: 2026-10-15
title: "Shopify AI Toolkit: security check command — scan app vulnerabilities + remediation"
title_en: "Build with confidence: Shopify AI Toolkit's security check"
slug: shopify-ai-toolkit-security-check
zdroj: https://shopify.dev/changelog/blog/build-more-secure-apps-with-shopify-s-ai-toolkit-security-check
shrnuto_dne: 2026-10-20
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Check podporuje i custom apps a běží lokálně, takže ho můžeme zkusit nad kódem našich vlastních aplikací jako další vrstvu kontroly před releasem."
dotcene_klienty: []
souvisejici: [shopify-ai-toolkit, new-app-submission-experience-partner-dashboard, ai-toolkit-skills-consolidated-shopify]
tldr: "Shopify CLI má nový příkaz shopify app security check, který lokálně prohledá kód, konfiguraci extensions i závislosti aplikace a ke každému nálezu vrátí soubor, řádek, závažnost a návrh opravy; doporučeno spouštět před submission a při každém release."
tagy: [ai-toolkit, security, vulnerabilities, app-submission, remediation]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify AI Toolkit je sada nástrojů, která propojuje Shopify platformu s AI vývojovými agenty (Claude Code, Cursor, Codex a další). Agent díky ní dostává aktuální dokumentaci, GraphQL schémata, validaci kódu a CLI příkazy místo hádání z tréninkových dat. Od spuštění v dubnu 2026 se toolkit rozšiřoval o commerce skills, migrační pomůcky pro Polaris web components a v září 2026 o konsolidaci skills pod jediný skill `shopify`. Security check je první přírůstek zaměřený přímo na bezpečnost vyvíjené aplikace.

    Shopify v oznámení argumentuje tím, že AI sice zrychluje vývoj aplikací, ale stejně tak pomáhá útočníkům hledat a zneužívat bezpečnostní mezery. Bezpečnost proto popisuje jako sdílenou odpovědnost, která doplňuje ochranu na straně platformy. Partneři, kteří nástroj testovali, měli podle changelogu zlepšit své security posture bez změny stacku nebo frameworku. Changelog jmenuje dvě oblasti, kde testeři nacházeli problémy: mezery v autentizaci a způsob izolace dat merchantů napříč obchody.

    Samotný příkaz `shopify app security check` je součástí Shopify CLI a je open source. Zdroj je v repozitáři Shopify CLI v adresáři `packages/app/src/cli/services/app-security-engine/`. Zpětná vazba se sbírá v komunitním fóru v kategorii app-security. Nástroj navazuje na dřívější snahy Shopify o strukturovanější review aplikací, například nový submission workflow v Partner Dashboardu s pre-submission kontrolami.
  zdroje:
    - title: "Shopify: Build with confidence: Shopify AI Toolkit's security check"
      url: "https://shopify.dev/changelog/blog/build-more-secure-apps-with-shopify-s-ai-toolkit-security-check"
    - title: "Shopify: App security checks (guide)"
      url: "https://shopify.dev/docs/apps/build/security/app-security-checks"
    - title: "Shopify: Secure your Shopify app"
      url: "https://shopify.dev/docs/apps/build/security"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify CLI nově obsahuje příkaz `shopify app security check`, který zkontroluje aplikaci na nejčastější bezpečnostní zranitelnosti ještě před vydáním. Check běží **lokálně** na vývojářském stroji a prochází tři oblasti: zdrojový kód aplikace, konfiguraci napříč jejími extension points a závislosti (dependencies), na kterých aplikace stojí. Je framework-agnostic, podporuje veřejné i custom aplikace a changelog jmenuje například React Router, Rails, Django, Laravel i vlastní implementace autentizace.

Changelog **neuvádí kompletní seznam kategorií** zranitelností, mluví obecně o častých vzorech zranitelností v Shopify aplikacích. Konkrétně zmiňuje dvě oblasti, kde partneři při testování nacházeli problémy: mezery v autentizaci a izolaci dat merchantů mezi obchody (multi-tenant izolace).

Příkaz lze spustit dvěma způsoby:

- **Přes coding agenta** s nainstalovaným AI Toolkitem, například promptem `/shopify Check my app for common security vulnerabilities`. Agent si příkaz sám spustí přes Shopify CLI.
- **Přímo přes Shopify CLI**, pokud chceme vidět jeho prompty a kontext, který agentovi předává.

Každý nález obsahuje dotčený soubor a řádek, závažnost (severity), vysvětlení, proč na něm záleží, ukázku kódu s jednou z možných oprav a odkazy na dokumentaci k danému vzoru i opravě. Doporučený postup je řešit nejdřív nálezy s kritickou a vysokou závažností, a to buď s agentem, nebo ručně, změny zrevidovat a check pustit znovu. Shopify výslovně upozorňuje, že čistý report nezaručuje bezpečnost aplikace a má se používat spolu s dalšími nástroji a review.

Spouštění je **manuální**. Changelog nepopisuje automatické ani plánované běhy, doporučení je pustit check před odesláním aplikace do review a při každém release.

## Časová osa

- **2026-04-02:** Spuštění Shopify AI Toolkitu jako sady dokumentace, schémat a validace pro AI nástroje.
- **2026-09-25:** Konsolidace AI Toolkit skills pod jediný skill `shopify`.
- **2026-10-13:** Datum účinnosti podle metadat changelogu.
- **2026-10-15:** Zveřejnění changelogu (označeno jako New, bez požadované akce).
- **Bez termínu:** žádná povinnost ani deadline, jde o dobrovolný nástroj.

## Dopad pro nás

**Pro vývojáře:** Nic se nemusí měnit v existujících aplikacích. Příkaz je dostupný přes Shopify CLI a dává smysl ho vyzkoušet nad kódem aplikací, které si sami vyvíjíme, zejména před větším releasem. Check cílí na kód, konfiguraci extensions a závislosti, takže se hodí jako rychlá první vrstva kontroly vedle code review a dependency auditu. Nálezy je potřeba brát jako vstup k posouzení, ne jako konečný verdikt. Falešně pozitivní i nezachycené problémy jsou možné a Shopify sám říká, že čistý report nic nezaručuje. Pokud pracujeme s AI agenty, stačí mít nainstalovaný skill `shopify` a zadat prompt z oznámení. Pro pochopení toho, co přesně se kontroluje, je užitečný open source kód enginu.

**Pro PM / PO:** Jde o dobrovolný vývojářský nástroj bez dopadu na storefronty, merchanty ani termíny. Přínos je procesní: levný krok před releasem, který může zachytit typické chyby v autentizaci nebo izolaci dat merchantů dřív, než se dostanou do produkce nebo do review. Doporučení je zvážit zařazení tohoto kroku do release checklistu u aplikací, kde držíme vlastní kód. Nejde o náhradu penetračního testu ani bezpečnostního review. Urgence je nízká, stačí vyzkoušet při nejbližším vhodném releasi.

## Použití v Integrátoru

Naše aplikace běží jako custom apps a check custom apps podporuje, takže ho můžeme zkusit nad jejich kódem jako doplňkový krok před releasem. Nejde o povinnost ani změnu chování stávajících aplikací.
