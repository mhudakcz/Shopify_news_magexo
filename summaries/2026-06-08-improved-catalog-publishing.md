---
date: 2026-06-08
title: "Vylepšený workflow publikování katalogů"
title_en: "Improved catalog publishing"
slug: improved-catalog-publishing
zdroj: https://changelog.shopify.com/posts/improved-catalog-publishing
shrnuto_dne: 2026-06-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-08
pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin UI improvement, naší integrace se netýká."
dotcene_klienty: []
souvisejici: [shopify-catalog-for-all, compare-at-prices-catalogs, storefront-catalog-mcp-ucp]
kontext:
  background: |
    Shopify katalogy jsou nativní mechanismus pro správu produktů a cen pro různé skupiny kupujících. Slouží jak B2B merchantům (velkoobchodní ceníky svázané s Company objekty), tak segmentaci trhů přes Markets (odlišné ceny a dostupnost produktů per region). Každý katalog sdružuje produkty, ceník a publikační pravidla — merchant tak může mít desítky katalogů se stovkami produktů a specifickými kombinacemi cen.

    Při práci s rozsáhlými katalogy byla dosud každá úprava okamžitě aplikována nebo musela být uložena jednotlivě, bez možnosti připravit soubor změn a odeslat je najednou. Pro merchanty spravující složité B2B portfolia nebo více Markets to znamenalo buď riskantní průběžné úpravy (každá změna je hned živá), nebo zdlouhavé ruční opakování kroků bez přehledu o celkovém stavu. Batch editing je standardní UX pattern v enterprise admin nástrojích, jehož absence v katalogovém editoru byla viditelnou mezerou.

    S touto aktualizací může merchant postupně nakonfigurovat libovolný počet produktových úprav v rámci jednoho katalogu, poté je přehledně zkontrolovat a uložit — nebo zahodit — jedním krokem. Praktický dopad je nejvýraznější při sezonních aktualizacích cen, zavádění nové produktové řady do B2B ceníku nebo ladění dostupnosti produktů pro konkrétní market. Snižuje se riziko neúplného stavu (část produktů aktualizována, část ne) i kognitivní zátěž při hromadných změnách.

  zdroje:
    - title: "Shopify Changelog: Improved catalog publishing"
      url: "https://changelog.shopify.com/posts/improved-catalog-publishing"
    - title: "Shopify Help: Create and manage your catalogs"
      url: "https://help.shopify.com/en/manual/b2b/catalogs"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6
tldr: "Katalogový editor v Admin nyní podporuje batch workflow: merchant může upravit libovolný počet produktů, zkontrolovat všechny změny najednou a uložit nebo zahodit je jediným krokem. Snižuje riziko neúplných aktualizací rozsáhlých B2B nebo Markets katalogů."
tagy: [catalog, publishing, b2b]
zdroj_kanal: merchant-changelog
editions_release: spring-2026
---

## Co se mění

Shopify přidal do Admin UI pro katalogy nový batch publishing workflow. Merchant nyní může:

- Provést libovolný počet úprav produktů v rámci jednoho katalogu (ceny, dostupnost, viditelnost).
- Zkontrolovat všechny čekající změny najednou před tím, než se projeví.
- Uložit nebo zahodit celou sadu změn jedním krokem.

Dříve bylo nutné ukládat každou změnu zvlášť nebo pracovat s vědomím, že každá úprava se okamžitě aplikuje bez přehledu o celkovém rozsahu provedených změn.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-08 | Funkce dostupná v Shopify Admin |

Žádná deprecation ani migrační lhůta — jde o additivní UI improvement bez breaking changes.

## Dopad pro nás

Tato změna je čistě Admin UI improvement bez dopadů na API. Naše integrace komunikuje se Shopify přes Admin API a katalogy spravuje programaticky (viz `createCatalog`, `updateCatalogContext` a příbuzné mutace) — nový UI workflow se API vrstvy netýká.

Nepředpokládáme žádnou nutnou akci na naší straně ani u klientů.

## Použití v Integrátoru

Nevyužíváme. Integrační logika pro katalogy pracuje přímo s Admin API a batch publishing probíhá na naší straně programaticky — nový UI krok je pro naše workflow irelevantní.
