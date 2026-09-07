---
date: 2026-08-25
title: "Oxygen dostupný také na trial plan stores"
title_en: "Oxygen is now available on trial plan stores"
slug: oxygen-trial-plan-stores
zdroj: https://shopify.dev/changelog/oxygen-is-now-available-on-trial-plan-stores
shrnuto_dne: 2026-09-08
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Umoznuje nabidnout headless PoC na Hydrogenu jiz behem trial obdobi, bez nutnosti placeneho planu."
dotcene_klienty: []
souvisejici: [oxygen-development-stores, hydrogen-developer-preview-update-aug-18, hydrogen-deploys-to-vercel]
tldr: "Oxygen hosting pro Hydrogen je nove dostupny i na trial plan stores, ne jen na placenych a development storech."
tagy: [oxygen, hydrogen, hosting, trial-plan, developer-experience]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Oxygen je Shopify spravovaný hosting pro Hydrogen storefronty – postará se o nasazení, edge cachování a škálování bez nutnosti vlastní infrastruktury. Doposud byl navázaný na placený Shopify plán, takže si ho vyzkoušel jen ten, kdo už měl aktivní předplatné.

    Od 25. 8. 2026 může Oxygen běžet i na trial plan storech. Navazuje to na změnu z 3. 8. 2026, kdy Shopify otevřel Oxygen pro development stores. Tímto krokem se okruh dostupných plánů dále rozšiřuje a potenciální merchant si tak může celý stack Hydrogen + Oxygen osahat už během zkušební doby, dříve než se rozhodne pro placený plán.

    Existuje jedno praktické omezení: trial účty nemají veřejné (public) prostředí, takže deployment URL vyžaduje autentizaci do storu, než se k nasazené verzi dá přistoupit. Pro interní testování a demo to nevadí, pro sdílení s koncovými uživateli mimo tým už je potřeba přejít na placený plán. Shopify zároveň odkazuje na dokumentaci k podporovaným plánům, kde jsou detaily o dostupnosti napříč různými typy účtů.
  zdroje:
    - title: "Shopify: Oxygen is now available on trial plan stores"
      url: "https://shopify.dev/changelog/oxygen-is-now-available-on-trial-plan-stores"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Oxygen (Shopify spravovaný hosting pro Hydrogen) byl dosud omezený na placené plány. Od 25. 8. 2026 ho Shopify zpřístupnil také na trial plan storech – vývojář si tak může nasadit Hydrogen storefront na Oxygen už v okamžiku, kdy testuje Shopify jen na zkušební období, bez placené subskripce.

Deployment URL na trial plánu není veřejný – vyžaduje přihlášení do storu, protože trial účty nemají public environment. Jde tedy o rozšíření pro interní testování a evaluaci, ne o plnohodnotnou produkční distribuci.

## Časová osa

- 3. 8. 2026 – Oxygen zpřístupněn na development stores
- 25. 8. 2026 – Oxygen zpřístupněn také na trial plan stores

## Dopad pro nás

**Pro vývojáře:** Můžeme si Hydrogen + Oxygen celý flow (build, deploy, edge caching) vyzkoušet i na čistém trial storu, bez zakládání placeného plánu – hodí se na rychlé PoC nebo interní demo před rozhodnutím klienta.

**Pro PM / PO:** Snižuje se bariéra pro nabídku headless řešení potenciálním klientům – můžeme jim ukázat funkční Hydrogen storefront ještě před tím, než si pořídí placený Shopify plán. Pro veřejně dostupné demo je pořád potřeba počítat s přechodem na placený plán kvůli chybějícímu public environmentu.

## Použití v Integrátoru

Relevantní hlavně pro presales a rychlé ověření proveditelnosti headless řešení na Hydrogenu – u nás přímo nepoužíváno, ale může zjednodušit demo pro klienty zvažující headless architekturu.
