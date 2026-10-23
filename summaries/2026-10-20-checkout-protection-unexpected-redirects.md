---
date: 2026-10-20
title: "Online Store: potvrzení před odchodem na externí web (ochrana proti unexpected redirects)"
title_en: "New protection against unexpected redirects"
slug: checkout-protection-unexpected-redirects
zdroj: https://changelog.shopify.com/posts/new-protection-against-unexpected-redirects
shrnuto_dne: 2026-10-23
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-20
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímou závislost na změně nemáme, ale odkazy na externí domény ve storefrontu (theme, obsah, tracking) mohou kupujícím nově zobrazit potvrzovací zprávu před odchodem z obchodu."
dotcene_klienty: []
souvisejici: [reduced-bot-noise-abandoned-checkouts, bots-agents-web-bot-auth, customer-account-web-component]
tldr: "Shopify zobrazuje kupujícím potvrzovací zprávu s adresou cíle před odchodem z Online Store na externí web (pokračovat, nebo se vrátit do obchodu); connected domains a podporované weby Shopify a sociálních sítí výjimku mají, žádná konfigurace ani akce se nevyžaduje."
tagy: [online-store, security, redirects, storefront, external-links, open-redirect]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Odkazy ze storefrontu na externí weby jsou běžná věc: partnerské stránky, sledování zásilek u dopravce, sociální sítě nebo další weby merchanta. Obecně jde ale o klasický vektor zneužití. Kupující klikne na odkaz v důvěryhodném prostředí obchodu a skončí na doméně, kterou nikdo neověřil. Právě takto fungují phishing a open-redirect útoky, kdy je legitimní doména použita jako odrazový můstek.

    Shopify 20. října 2026 v changelogu (štítky Changed a Online Store) oznámil novou ochranu proti unexpected redirects. Před odchodem z obchodu na externí web se kupujícímu zobrazí potvrzovací zpráva s adresou cílového webu a volbou pokračovat, nebo se vrátit do obchodu. Zprávu nespouštějí connected domains ani podporované weby Shopify a sociálních sítí. Weby, které merchant vlastní, ale nepřipojil k obchodu, ji spustit mohou.

    Je důležité rozlišit, co changelog tvrdí a co ne. Změna je popsána pro Online Store a týká se odkazů mimo obchod, nikoli konkrétně checkoutu ani payment flow. Text nepopisuje mechanismus allowlistu (jak se seznam výjimek tvoří a udržuje), nezmiňuje varování jen pro podezřelé domény, nemá žádný přepínač pro zapnutí nebo vypnutí a neuvádí harmonogram rolloutu ani odkaz na dokumentaci. Pro naše účely jde tedy o platform-level bezpečnostní vrstvu bez konfigurace, jejíž přesné chování je potřeba ověřit na vývojářském obchodě.
  zdroje:
    - title: "Shopify: New protection against unexpected redirects"
      url: "https://changelog.shopify.com/posts/new-protection-against-unexpected-redirects"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přidal do Online Store potvrzovací krok pro odchozí odkazy. Když kupující klikne na odkaz vedoucí na web mimo obchod, nepřejde okamžitě, ale zobrazí se mu zpráva s adresou cílového webu. Může pokračovat na cílový web, nebo se vrátit zpět do obchodu. Smyslem je zabránit situaci, kdy by zákazník byl nečekaně přesměrován na cizí doménu (phishing, open-redirect).

Podle changelogu platí:

- Potvrzovací zpráva se zobrazuje u odkazů na weby mimo obchod a obsahuje adresu cíle.
- **Bez zprávy** zůstávají connected domains a podporované weby Shopify a sociálních sítí.
- Weby vlastněné merchantem, které ale nejsou k obchodu připojené, mohou zprávu **stále spustit**.
- Žádná akce od merchanta ani vývojáře se nevyžaduje; changelog nezmiňuje žádné nastavení pro zapnutí nebo vypnutí.

Co changelog **neříká**: jak přesně vzniká seznam výjimek, jestli se ochrana týká i checkoutu a payment flow (včetně 3D Secure přesměrování na banku), jak se chová u odkazů z app bloků nebo u headless storefrontů a zda existují další výjimky. Tyto body zatím vedeme jako neověřené.

## Časová osa

- **2026-10-20** - publikace changelogu (štítky Changed, Online Store); účinnost vedeme od data publikace, harmonogram rolloutu Shopify neuvádí.
- **Deadline** - žádný; nejde o breaking change ani o povinnou migraci.
- **Doporučený krok** - při nejbližší příležitosti ověřit chování na vývojářském obchodě (odkaz na externí doménu, odkaz na vlastní nepřipojenou doménu, odkaz na sociální síť).

## Dopad pro nás

**Pro vývojáře:** Žádná změna v API, webhookách ani datech, jde čistě o chování storefrontu. Prakticky je třeba počítat s tím, že odkazy na externí domény v theme (footer, bannery, sekce s obsahem, embed bloky aplikací) mohou kupujícímu nově zobrazit mezikrok. Stojí za to projít, které odkazy v theme a v obsahu míří na vlastní domény merchanta, a otestovat, zda se zpráva zobrazí. Pokud někde spoléháme na plynulý přechod (například affiliate nebo trackovací odkazy), je nutné ověřit, že mezikrok nerozbije měření. U Hydrogen a dalších headless storefrontů changelog nic neuvádí, proto předpokládáme, že se jich netýká, ale potvrzeno to není.

**Pro PM / PO:** Žádná akce není povinná a nejde o náklad ani o riziko pro provoz obchodu. Je to spíš příležitost ke krátké kontrole: merchanti s více doménami (samostatný blog, landing page, B2B portál, dokumentace) mohou zvážit připojení těchto domén k obchodu, aby kupující nenarazili na zbytečné potvrzení při přechodu mezi vlastními weby. Toto je náš závěr z pravidla o connected domains, changelog to výslovně nedoporučuje. Při komunikaci s merchanty stačí krátká poznámka, že nová zpráva je záměrná bezpečnostní funkce Shopify, ne chyba obchodu. Drobný vliv na proklik odchozích odkazů je možný, ale nedoložený.

## Použití v Integrátoru

Změna nemá API ani webhook rozhraní, takže v našem napojení, exportech ani automatizacích nic neupravujeme. Jediné, co dává smysl ověřit, jsou odkazy na externí a vlastní nepřipojené domény v theme a obsahu, které spravujeme nebo generujeme.
