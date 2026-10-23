---
date: 2026-10-22
title: "Nový design payment metod v checkout (vizuální refresh)"
title_en: "Refreshed payment method design in checkout"
slug: refreshed-payment-method-design-checkout
zdroj: https://changelog.shopify.com/posts/refreshed-payment-method-design-in-checkout
shrnuto_dne: 2026-10-23
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čistě vizuální změna nativního checkoutu bez API plochy, ale mění vzhled výběru platby, takže se dotkne QA screenshotů, vizuálních testů a interní dokumentace checkout flow."
dotcene_klienty: []
souvisejici: [checkout-default-last-used-payment-method, redesigned-checkout-spring-2026, checkout-email-field-saved-indicator]
tldr: "Checkout zobrazuje payment metody v nové dlaždicové (tiled) podobě, pokud splňují display criteria, například nabízejí čtyři nebo méně metod; jinak zůstává standardní list view. Žádná konfigurace není potřeba."
tagy: [checkout, payment-methods, ui, design, conversion]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Výběr platební metody je jeden z posledních kroků v checkoutu a právě tady zákazník rozhoduje, zda nákup dokončí. Shopify proto dlouhodobě ladí vzhled a chování tohoto kroku. Letos už přibyl redesign celého checkoutu s důrazem na spacing a výraznější pay button a také automatické předvyplnění naposledy použité platební metody pro přihlášené zákazníky. Nový payment method refresh navazuje na stejnou řadu drobných UX úprav v nativním checkoutu.

    Podle oficiálního changelogu Shopify představuje dlaždicové (tiled) rozvržení payment metod. Zobrazí se jen tehdy, když nabízené metody splňují určitá display criteria, mezi která patří čtyři nebo méně payment metod. Ve všech ostatních konfiguracích, tedy například při větším počtu metod, se dál používá standardní list view. Post je velmi stručný: nepopisuje podrobnosti jako podobu loga, spacing nebo styl vybraného stavu, nespecifikuje rozsah rolloutu podle plánů či regionů a neuvádí žádný dopad na API ani checkout extensions.

    Změna je součástí průběžného checkout polish a pro merchanty je pasivní. Není co zapínat v administraci, nic se nemění v theme ani v kódu extensions. Případný dopad na conversion rate (nejspíš menší, hlavně na mobilu) je zatím jen předpoklad, Shopify ho v postu nekvantifikuje, takže ho stojí za to ověřit na vlastních datech, pokud pro daný obchod sledujeme checkout funnel.
  zdroje:
    - title: "Shopify: Refreshed payment method design in checkout"
      url: "https://changelog.shopify.com/posts/refreshed-payment-method-design-in-checkout"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify v checkoutu zavádí nové dlaždicové (tiled) rozvržení payment metod. Místo klasického seznamu se metody zobrazí jako dlaždice, ale jen tehdy, když splňují display criteria. Jedním z uvedených kritérií je, že obchod nabízí čtyři nebo méně platebních metod. Pokud kritéria splněna nejsou, například při pěti a více metodách, checkout dál používá standardní list view.

Změna je automatická pro nativní Shopify checkout. Merchant nemusí nic nastavovat, upravovat theme ani měnit checkout extensions. Oficiální post je velmi krátký a neuvádí, jak přesně vypadají loga, spacing nebo vybraný stav ani zda existuje další display criteria kromě počtu metod. Tyto detaily proto nepředpokládáme a je potřeba je ověřit přímo v testovacím checkoutu.

Prakticky to znamená, že dva obchody mohou mít po změně rozdílný vzhled výběru platby podle toho, kolik metod mají aktivních a jak jsou nakonfigurované.

## Časová osa

- **22. 10. 2026** — Shopify zveřejnil změnu v merchant changelogu (tag Checkout)
- **Rollout:** přesné načasování ani postupné nasazování post neuvádí, předpokládáme automatické nasazení bez akce merchanta

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani nutná úprava kódu. Pokud máme vlastní checkout UI extensions kolem payment metod nebo automatizované vizuální testy (screenshoty checkoutu), je dobré počítat s tím, že se výběr platby může zobrazit v tiled podobě a snímky či selektory spoléhající na list view se mohou lišit. Doporučuji projít testovací checkout u obchodů s čtyřmi a méně platebními metodami a porovnat ho s obchody, které mají metod více.

**Pro PM / PO:** Jde o pasivní UX vylepšení, které nevyžaduje komunikaci ani rozhodnutí. Může být drobným argumentem v diskuzi o optimalizaci checkout conversion, ale Shopify žádný konkrétní uplift neslibuje, takže bych ho nepodávali jako garantovaný přínos. Pokud obchod sleduje checkout funnel, vyplatí se zaznamenat datum změny (22. 10. 2026), aby šlo případný posun metrik vysvětlit.

## Použití v Integrátoru

Přímý dopad je minimální, jde o nativní vizuální změnu checkoutu bez API plochy. Relevantní je hlavně pro QA a dokumentaci checkout flow, kde se může změnit vzhled výběru platby.
