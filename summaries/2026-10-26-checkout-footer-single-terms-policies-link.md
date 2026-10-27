---
date: 2026-10-26
title: "Checkout footer: jeden sloučený odkaz 'Podmínky a zásady' místo rozsypaných odkazů"
title_en: "The checkout footer now shows one 'Terms and policies' link"
slug: checkout-footer-single-terms-policies-link
zdroj: https://changelog.shopify.com/posts/the-checkout-footer-now-shows-one-terms-and-policies-link
shrnuto_dne: 2026-10-27
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-26
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čistě vizuální změna nativního checkoutu bez API plochy, ale mění patičku checkoutu, takže se dotkne QA screenshotů, vizuálních testů a dokumentace checkout flow u obchodů, které patičku upravují."
dotcene_klienty: []
souvisejici: [auto-generated-store-policies, refreshed-payment-method-design-checkout, redesigned-checkout-spring-2026]
tldr: "Patička checkoutu místo samostatného odkazu pro každou policy zobrazuje jediný odkaz 'Terms and policies', který otevře modal s výběrem policies. Obsah policies se nemění a merchant nemusí nic dělat."
tagy: [checkout, footer, terms, policies, ui, konverze]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Patička nativního Shopify checkoutu dosud zobrazovala odkaz na každou policy zvlášť, typicky refund policy, shipping policy, privacy policy nebo terms of service. U obchodů s více policies tak vznikala řada drobných odkazů pod platebním formulářem. Ty stahují pozornost od hlavní akce, tedy dokončení objednávky, a zejména na mobilu zabírají místo.

    Shopify v changelogu z 26. 10. 2026 tuto řadu odkazů nahrazuje jediným odkazem Terms and policies. Po kliknutí se otevře modal, ve kterém zákazník vybere kteroukoli z policies obchodu. Shopify výslovně uvádí, že obsah policies zůstává stejný a merchant nemusí podnikat žádné kroky. Změna navazuje na sérii checkout UX úprav z posledních týdnů, například na nový design výběru platebních metod nebo na dřívější redesign checkoutu s důrazem na spacing a přehlednost.

    Post je velmi stručný. Neuvádí, které konkrétní policies se v modalu zobrazují, ani jak je modal uspořádaný. Nepopisuje postupné nasazování ani dostupnost podle plánů pro výchozí patičku a nekvantifikuje žádný dopad na conversion rate. Jediná konfigurační možnost se týká Shopify Plus, kde lze výchozí patičku skrýt a přidat vlastní odkazy na policies přes Checkout UI extensions. Případný uplift konverze je proto jen rozumný předpoklad, ne slib Shopify.
  zdroje:
    - title: "Shopify: The checkout footer now shows one 'Terms and policies' link"
      url: "https://changelog.shopify.com/posts/the-checkout-footer-now-shows-one-terms-and-policies-link"
    - title: "Shopify: Automatically generated policies help you launch faster"
      url: "https://changelog.shopify.com/posts/automatically-generated-policies-help-you-launch-faster"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Patička nativního checkoutu nově místo samostatného odkazu pro každou policy zobrazuje **jediný odkaz Terms and policies**. Po kliknutí se otevře modal, kde zákazník vybere kteroukoli z policies obchodu, například refund policy, shipping policy, privacy policy nebo terms of service. Samotný obsah policies se nemění, mění se jen způsob, jakým se k nim zákazník v checkoutu dostane.

Změna je **automatická**. V adminu se nic nezapíná, nic se nenastavuje a theme ani kód nemusíme upravovat. Čistě v textu changelogu je jen jedna výjimka: merchanti na **Shopify Plus** mohou výchozí patičku skrýt a přidat vlastní odkazy na policies přes **Checkout UI extensions**. Pro ostatní plány podobnou konfiguraci post nepopisuje.

Co changelog neříká:

- Neuvádí, které přesně policies se v modalu zobrazují a v jakém pořadí.
- Nepopisuje rollout po fázích ani omezení podle plánu pro samotnou výchozí patičku.
- Neuvádí žádný dopad na API, webhooky ani na existující extensions, které patičku nepoužívají.
- Nekvantifikuje vliv na conversion rate. Čistější UI a méně distrakcí nejspíš pomůže drobně, hlavně na mobilu, ale je to předpoklad.

Stránka changelogu je navíc označená štítkem Changed Admin, který post nijak nevysvětluje. Nepředpokládáme z něj žádnou změnu v adminu a doporučujeme to ověřit v testovacím obchodě.

## Časová osa

- **2026-06-17** — Redesign checkoutu pro jaro 2026 s důrazem na spacing a čistší vzhled (související kontext)
- **2026-10-08** — Automaticky generované store policies v adminu (související kontext)
- **2026-10-22** — Nový dlaždicový design payment metod v checkoutu (související kontext)
- **2026-10-26** — Shopify zveřejnil změnu patičky checkoutu, jeden odkaz Terms and policies s modalem
- **Rollout:** přesné načasování ani postupné nasazování post neuvádí, předpokládáme automatické nasazení bez akce merchanta

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani povinná úprava kódu. Pokud máme automatizované vizuální testy nebo screenshoty checkoutu, mohou se po změně lišit v oblasti patičky, protože místo několika odkazů tam zůstane jeden. Selektory nebo E2E testy, které hledají konkrétní odkaz na policy přímo v patičce, např. refund policy, přestanou fungovat a musí nově otevřít modal a vybrat policy tam. U Plus obchodů s vlastními policy odkazy v Checkout UI extensions stojí za kontrolu, zda se výchozí patička a vlastní odkazy nezdvojují, případně zda ji nemá smysl skrýt. Doporučuji projít testovací checkout a ověřit, jak se modal chová na mobilu a zda je dobře dostupný z klávesnice.

**Pro PM / PO:** Jde o pasivní UX vylepšení, které nevyžaduje komunikaci ani rozhodnutí. Pro nás je to nová příležitost hlavně v tom, že čistší patička je malý, ale bezplatný krok k přehlednějšímu checkoutu. Může být drobným argumentem v diskuzi o optimalizaci konverze, ale Shopify žádný konkrétní uplift neslibuje, takže bych ho nepodávali jako garantovaný přínos. Pokud obchod sleduje checkout funnel, vyplatí se zaznamenat datum změny (26. 10. 2026), aby šlo případný posun metrik vysvětlit a oddělit od jiných checkout změn, které přišly ve stejném období. U obchodů v EU je dobré si ověřit, že právně povinné informace, například obchodní podmínky a informace o právu na odstoupení, jsou po změně stále pro zákazníka dostatečně dostupné i přes modal. Priorita je nízká, nejde o breaking change ani o termín s deadlinem.

## Použití v Integrátoru

Přímý technický dopad je minimální, jde o nativní vizuální změnu checkoutu bez API plochy. Relevantní je hlavně pro QA a dokumentaci checkout flow, kde se změní vzhled patičky a cesta k policies.
