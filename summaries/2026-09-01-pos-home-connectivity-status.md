---
date: 2026-09-01
title: "POS Home: status indicator pro device connectivity"
title_en: "Check connectivity status from POS Home"
slug: pos-home-connectivity-status
zdroj: https://changelog.shopify.com/posts/check-connectivity-status-from-pos-home
shrnuto_dne: 2026-09-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Čistě UI vylepšení v POS appce bez nového API, ale relevantní pro retail klienty při konzultacích o troubleshootingu prodejen."
dotcene_klienty: []
souvisejici: [pos-selling-environment-health-screen, pos-devices-manage-from-admin, pos-v11-rebuild-deep-dive]
tldr: "Shopify POS Home teď má status indikátor connectivity přímo na hlavní obrazovce, takže personál prodejny vidí problém s připojením ještě předtím, než začne prodávat."
tagy: [pos, connectivity, retail, ux, monitoring]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Personál v retail prodejnách dosud musel status připojení POS zařízení hledat v postranní navigaci — ikonka signalizující stav sítě a Shopify služeb nebyla na první pohled vidět. To znamenalo, že se problém s konektivitou často odhalil až uprostřed prodeje, typicky ve chvíli, kdy platba nebo synchronizace selhala a zákazník už stál u pokladny.

    Shopify proto přesunul status indikátor connectivity přímo na POS Home, hlavní obrazovku aplikace. Personál tak vidí stav připojení hned po otevření appky, ještě před zahájením jakékoli transakce. Po kliknutí na ikonku se otevře popover s podrobnějšími informacemi o tom, co přesně je v pořádku a co ne. Cílem je posunout odhalování problémů z reaktivního režimu (řešíme uprostřed prodeje) do proaktivního (víme dopředu, že něco nefunguje, a můžeme přepnout na offline prodej nebo kontaktovat IT ještě před otevřením prodejny).

    Feature navazuje na červencový selling environment health screen, který sjednotil zobrazení stavu internetu, Shopify služeb a hardwaru do jednoho panelu. Zatímco health screen řešil obsah (co všechno se kontroluje a jak diagnostikovat problém), tato aktualizace řeší umístění a viditelnost — stejné informace jsou teď na dosah jednoho pohledu, bez nutnosti prokliku do navigace. Update je dostupný automaticky od Shopify POS v11.14, bez nutnosti instalace nebo konfigurace. Jde o čistě UI/UX vylepšení bez dopadu na API nebo datové modely.
  zdroje:
    - title: "Shopify: Check connectivity status from POS Home"
      url: "https://changelog.shopify.com/posts/check-connectivity-status-from-pos-home"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Status indikátor connectivity, který dřív žil schovaný v postranní navigaci POS aplikace, se přesouvá přímo na POS Home — úvodní obrazovku, kterou personál vidí hned po otevření appky. Ikonka signalizuje stav připojení na první pohled, a po kliknutí se otevře popover s detaily (stav internetu, stav Shopify služeb, případně stav hardwaru).

Prakticky to znamená, že problém s konektivitou už nemusí čekat, až ho odhalí selhaná platba nebo zamrzlá synchronizace uprostřed prodeje. Personál ho vidí dřív, než vůbec začne obsluhovat prvního zákazníka, a může se rozhodnout — přepnout do offline režimu, zkusit restart, nebo zavolat IT — ještě než dojde k výpadku v provozu.

Update je automaticky dostupný od Shopify POS v11.14, žádná instalace ani konfigurace se nevyžaduje.

## Časová osa

- 2026-07-07 — POS selling environment health screen: sjednocený panel stavu internetu, Shopify služeb a hardwaru
- 2026-09-01 — status indikátor connectivity se přesouvá na POS Home (POS v11.14), automaticky nasazeno

## Dopad pro nás

**Pro vývojáře:** Žádný nový API endpoint ani datový model — čistě UI úprava uvnitř POS aplikace. Není co implementovat ani testovat na naší straně.

**Pro PM / PO:** Užitečný detail pro konzultace s retail klienty, kteří řeší časté výpadky nebo nejasné hlášky o konektivitě na prodejnách. Můžeme jim říct, že Shopify teď dělá diagnostiku problému viditelnější a dostupnější hned na úvodní obrazovce, což by mělo zkrátit dobu, než personál pozná, že je problém na jejich straně (internet), na straně Shopify, nebo v hardwaru.

## Použití v Integrátoru

Feature nemá žádný dopad na naši integraci — jde o čistě UI vylepšení v nativní POS appce bez nového API. Relevantní jen jako kontext při podpoře retail klientů.
