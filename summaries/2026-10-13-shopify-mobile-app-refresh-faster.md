---
date: 2026-10-13
title: "Shopify Mobile App (iOS + Android): rychlejší + nový design matching admin"
title_en: "A faster Shopify app with a refreshed look"
slug: shopify-mobile-app-refresh-faster
zdroj: https://changelog.shopify.com/posts/a-faster-shopify-app-with-a-refreshed-look
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o merchant-facing update mobilní aplikace bez API dopadu, ale sjednocuje vzhled mobilu s redesignem adminu a týká se merchantů, kteří obchod spravují z telefonu."
dotcene_klienty: []
souvisejici: [shopify-admin-new-look-2026, shopify-mobile-android-security-update, sidekick-everywhere-mobile-watch]
tldr: "Shopify vydává aktualizaci mobilní aplikace pro iOS a Android s rychlejším startem, svižnějšími obrazovkami a plynulejšími přechody a s vizuálem sladěným s redesignem adminu."
tagy: [shopify-mobile-app, ios, android, performance, redesign, admin]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Mobile App je oficiální aplikace, přes kterou merchanti spravují obchod z telefonu nebo tabletu: sledují objednávky, upravují produkty, komunikují se zákazníky a mají přehled o tržbách bez nutnosti otevírat plnou admin konzoli v prohlížeči. Pro menší provozy, kde se obchod řídí z mobilu mezi jinou prací, je to často hlavní způsob, jak se k datům a akcím dostat.

    Tato aktualizace navazuje na redesign Shopify adminu, jehož postupný rollout odstartoval 15. 9. 2026 (nové barvy, typografie, ikony a reorganizovaná navigace). Mobilní aplikace dostala vizuální jazyk, který odpovídá právě těmto změnám v adminu, takže merchant, který střídá desktop a telefon, nevidí dvě různé podoby jednoho produktu. Shopify mluví o mobile-first vzhledu a chování, tedy o designu přizpůsobeném práci jednou rukou na malé obrazovce, a ne o pouhém zmenšení desktopové verze.

    Druhou částí změny je výkon. Aplikace se má rychleji spouštět, rychleji načítat obrazovky a mít plynulejší přechody mezi nimi. Zdrojový changelog k tomu neuvádí žádná čísla (ani zkrácení času startu, ani cílové verze aplikace) a nepopisuje ani konkrétní časový plán nasazení, jen to, že update se postupně zpřístupňuje. Na iOS a Android jde o standardní aktualizaci aplikace přes příslušný obchod, nové funkce ani API s ní nepřicházejí.
  zdroje:
    - title: "Shopify: A faster Shopify app with a refreshed look"
      url: "https://changelog.shopify.com/posts/a-faster-shopify-app-with-a-refreshed-look"
    - title: "Archiv: Nový vzhled Shopify adminu, barvy, typografie, Sidekick jako floating chat"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-admin-new-look-2026/"
    - title: "Archiv: Bezpečnostní update Shopify Mobile Android, vyžaduje Android 11+"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-mobile-android-security-update/"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify vydává aktualizaci mobilní aplikace pro iOS i Android se dvěma hlavními změnami. První je rychlost: rychlejší spuštění aplikace, rychlejší načítání obrazovek a plynulejší přechody mezi nimi. Druhá je vzhled: aplikace přebírá barvy, typografii a ikony z nedávných úprav Shopify adminu a stylem se hlásí k mobile-first přístupu. Cílem je, aby mobilní a webový admin působily jako jeden produkt.

Changelog je stručný. Neuvádí žádná měřitelná čísla k rychlosti, žádné cílové verze aplikace ani regionální nebo procentuální plán rolloutu. Update se označuje jako postupně nasazovaný, takže ho jednotliví merchanti uvidí v různou chvíli. Nejde o nové funkce ani o změnu API, jen o výkonovou a vizuální vrstvu stávající aplikace.

## Časová osa

- 2026-09-15 — start rolloutu redesignu Shopify adminu, na který nový vzhled mobilní aplikace navazuje
- 2026-10-13 — Shopify publikuje changelog a začíná postupně zpřístupňovat aktualizovanou aplikaci pro iOS a Android
- dále — přesný harmonogram nasazení changelog neuvádí

## Dopad pro nás

**Pro vývojáře:** Přímý technický dopad je minimální. Nemění se žádné API, extension point ani oprávnění a nic se nedeprekuje. Jediná praktická věc je ověřit, jak v nové mobilní aplikaci vypadají a chovají se naše app home obrazovky a admin extensions, pokud je merchanti používají z telefonu. Rychlejší přechody a nový vizuální rámec by neměly nic rozbít, ale u embedded UI s vlastním CSS nebo staršími komponentami se vyplatí rychlý vizuální test na iOS i Androidu. Souvisí to s dřívější přípravou na nový vzhled adminu a s Polaris migrací.

**Pro PM / PO:** Merchanti, kteří obchod spravují hlavně z mobilu, hlavně menší provozy, si po updatu všimnou jiného vzhledu a svižnějšího chování. Stojí za to mít po ruce krátkou odpověď na dotaz proč to najednou vypadá jinak: jde o plánovaný Shopify update, ne o chybu ani o naši úpravu. Pokud máme v onboardingových nebo training materiálech mobilní screenshoty, budou postupně zastarávat stejně jako ty z desktopového adminu, takže je vhodné je přegenerovat až po dosažení nového vzhledu. Nalehavost je nízká, nic není potřeba řešit hned.

## Použití v Integrátoru

Přímý dopad na Integrátor nemáme, protože jde o výkon a vzhled nativní mobilní aplikace bez změny API. Je to jen kontext pro komunikaci s merchanty, kteří obchod spravují z telefonu.
