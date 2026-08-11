---
date: 2026-08-03
title: "Oxygen hosting nyní dostupný na development stores (Hydrogen)"
title_en: "Oxygen is now available on development stores"
slug: oxygen-development-stores
zdroj: https://shopify.dev/changelog/oxygen-is-now-available-on-development-stores
shrnuto_dne: 2026-08-11
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-03
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme Hydrogen storefront, můžeme nově celý deploy pipeline (build, deploy na Oxygen) odzkoušet na development store ještě před tím, než klient přejde na produkční plán."
dotcene_klienty: []
souvisejici: [hydrogen-deploys-to-vercel, hydrogen-any-stack-preview, hydrogen-developer-preview-update-jul-2026]
tldr: "Oxygen (Shopify managed hosting pro Hydrogen) teď funguje i na development stores, takže lze end-to-end vyzkoušet deploy ještě před produkcí."
tagy: [oxygen, hydrogen, development-stores, hosting, developer-experience]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Oxygen je Shopify managed hosting určený speciálně pro Hydrogen storefronty — spravuje build, deploy a edge distribuci bez toho, aby vývojář musel řešit vlastní infrastrukturu. Doteď byl ale Oxygen prakticky svázán s produkčním nebo placeným plánem obchodu, takže vývojáři testovali Hydrogen storefront lokálně a na Oxygen nasazovali až v pozdější fázi projektu, často až s ostrým obchodem.
    Tato změna otevírá Oxygen i pro development stores, které jsou zdarma a slouží primárně k vývoji a testování. Vývojářský tým tak může sestavit kompletní pipeline (kód → build → deploy → produkční URL) mnohem dřív v projektu, aniž by čekal na založení nebo upgrade produkčního obchodu.
    Existuje jedno praktické omezení: development stores nemají veřejné prostředí, takže každá deploy URL na development store vyžaduje přihlášení do obchodu (store login). Pro plné veřejné testování bez přihlašování je tak stále potřeba přejít na plán, který Oxygen podporuje naplno.
  zdroje:
    - title: "Shopify: Oxygen is now available on development stores"
      url: "https://shopify.dev/changelog/oxygen-is-now-available-on-development-stores"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšířil dostupnost Oxygen hostingu i na development stores. Dříve platilo, že Hydrogen storefront šlo na Oxygen nasadit prakticky jen v kontextu obchodu na placeném (produkčním) plánu — na development store se dal Hydrogen vyvíjet a spouštět lokálně, ale ne nasadit na skutečnou managed infrastrukturu Shopify.

Nově lze celý deploy proces (build → nasazení → běžící URL na Oxygen) vyzkoušet přímo na development store. To znamená, že vývojářský tým může ověřit, že aplikace se chová správně i v produkčním-like prostředí, ještě než klient rozhodne o startu nebo upgradu obchodu na placený plán.

Jediný rozdíl oproti produkčnímu nasazení: development stores nemají veřejné prostředí, takže deploy URL vždy vyžaduje přihlášení do obchodu. Pro veřejně dostupný, nepřihlášený přístup je potřeba přejít na plán, který Oxygen plně podporuje.

## Časová osa

- 31. 7. 2026 — vytvořeno/aktualizováno v Shopify changelogu
- 3. 8. 2026 — zveřejněno jako changelog entry "Oxygen is now available on development stores"

## Dopad pro nás

**Pro vývojáře:** Můžeme dřív v projektu ověřit celý deploy pipeline na reálné Oxygen infrastruktuře (ne jen lokální dev server), a to bez závislosti na tom, jestli už klient má produkční plán. Usnadňuje to demo a interní review před předáním klientovi. Je potřeba počítat s tím, že demo URL bude vyžadovat store login — pro demo klientovi je tedy nutné buď dát mu přístup do development store, nebo počkat na plán s veřejným Oxygen nasazením.

**Pro PM / PO:** Otevírá to prostor nabídnout klientovi funkční, "živou" ukázku Hydrogen storefrontu už ve fázi vývoje/PoC, bez nutnosti řešit produkční plán obchodu předem. Při plánování demo prezentací je ale třeba počítat s krokem přihlášení do obchodu, protože development store URL nejsou veřejné.

## Použití v Integrátoru

Přímý dopad na žádnou existující integraci nemá — jde o vylepšení Shopify-managed hostingu pro Hydrogen, které se týká jen projektů, kde stavíme headless storefront na tomto frameworku.
