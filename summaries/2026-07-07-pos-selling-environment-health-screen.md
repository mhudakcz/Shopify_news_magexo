---
date: 2026-07-07
title: "POS selling environment health screen — internet, service status, hardware v jednom view"
title_en: "See your POS selling environment health at a glance"
slug: pos-selling-environment-health-screen
zdroj: https://changelog.shopify.com/posts/see-your-pos-selling-environment-health-at-a-glance
shrnuto_dne: 2026-07-10
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o UI vylepšení v POS appce bez nového API, ale relevantní pro retail klienty při konzultacích o troubleshootingu prodejen."
dotcene_klienty: []
souvisejici: [pos-devices-manage-from-admin, pos-v11-rebuild-deep-dive, pos-ui-extensions-offline]
tldr: "Shopify POS má aktualizovanou connectivity screen, která na jednom místě ukazuje stav internetu, Shopify služeb a hardwaru (čtečka karet, tiskárna) a rovnou navrhne, co dělat."
tagy: [pos, health-check, monitoring, hardware, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Retail prodejny běžící na Shopify POS se často potýkají s výpadky, které nejsou vždy jednoznačné — může selhat internetové připojení v obchodě, výpadek může být na straně Shopify služeb, nebo problém způsobuje konkrétní hardware jako čtečka karet či tiskárna účtenek. Doposud musel personál prodejny často kontaktovat IT oddělení nebo hádat, co přesně nefunguje, což prodlužuje dobu výpadku a frustruje jak zákazníky, tak obsluhu.

    Shopify proto aktualizoval connectivity screen v POS aplikaci do podoby jednotného přehledu zdraví prodejního prostředí. Na jedné obrazovce, dostupné přes ikonu v levém dolním rohu POS appky, teď obsluha vidí stav internetového připojení, aktuální status Shopify služeb a zdraví připojeného hardwaru. Když panel detekuje problém, nenabízí jen diagnózu, ale rovnou "next-best action" — typicky pokyn, jak aktivovat offline prodej, aby prodejna mohla pokračovat v transakcích i bez plného spojení.

    Feature je automaticky dostupná od POS v11.10, není potřeba žádná instalace ani konfigurace. Jde o čistě UI/UX vylepšení uvnitř POS aplikace bez dopadu na API nebo datové modely — pro naši práci na integracích je tedy informační povahy, ale je užitečné vědět o něm při podpoře retail klientů, kteří řeší časté výpadky nebo hardwarové problémy na prodejnách.
  zdroje:
    - title: "Shopify: See your POS selling environment health at a glance"
      url: "https://changelog.shopify.com/posts/see-your-pos-selling-environment-health-at-a-glance"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify aktualizoval connectivity screen v POS aplikaci na jednotnou obrazovku zdraví prodejního prostředí. Místo aby obsluha musela zvlášť zjišťovat, jestli nefunguje internet, Shopify služby, nebo konkrétní hardware, vidí teď vše na jednom místě:

- **Stav internetového připojení** prodejny
- **Status Shopify služeb** (jestli je výpadek na straně Shopify)
- **Zdraví hardwaru** — čtečka karet, tiskárna účtenek a další připojená zařízení

Panel navíc nabízí konkrétní "next-best action" — například instrukci, jak zapnout offline prodej, aby prodejci mohli pokračovat v transakcích i při výpadku připojení, místo aby museli volat IT nebo support.

Feature je dostupná automaticky, bez nutnosti aktualizace nebo konfigurace, a najde se pod ikonou v levém dolním rohu Shopify POS aplikace.

## Časová osa

- **7. 7. 2026** — oznámeno v Shopify merchant changelogu, dostupné automaticky od POS v11.10

## Dopad pro nás

**Pro vývojáře:** Jde čistě o UI vylepšení uvnitř POS aplikace — nepřidává žádné nové API endpointy ani datové modely, takže žádný přímý zásah do integrací není potřeba. Stojí za to vědět, že existuje, pro případ, že klient hlásí problém s POS a support ho odkáže právě na tuto obrazovku.

**Pro PM / PO:** Užitečná informace při komunikaci s retail klienty — pokud řeší časté výpadky na prodejnách nebo si stěžují na složité troubleshootování, můžeme je nasměrovat na tuto novou health screen jako první krok před eskalací na IT nebo na nás.

## Použití v Integrátoru

Feature nemá dopad na naše API integrace ani datové toky — je to interní nástroj POS aplikace pro diagnostiku na straně prodejny.
