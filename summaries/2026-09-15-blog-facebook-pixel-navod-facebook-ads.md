---
date: 2026-09-15
title: "Facebook (Meta) pixel — průvodce nastavením pro Facebook Ads"
slug: blog-facebook-pixel-navod-facebook-ads
zdroj: https://www.shopify.com/cz/blog/facebook-pixel
shrnuto_dne: 2026-09-18
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Meta pixel a Conversions API se často řeší při napojování Shopify e-shopu klienta na reklamní účty, návod je proto dobrý podklad pro poradenství."
dotcene_klienty: []
souvisejici: [blog-meta-pixel-helper-instalace-funkce, blog-facebook-ads-manager-2026, blog-meta-business-manager-jak-pouzivat]
tldr: "Shopify vydalo návod na nastavení Facebook (Meta) pixelu a Conversions API pro sledování konverzí v reklamách na Facebooku a Instagramu."
tagy: [facebook-pixel, meta-pixel, facebook-ads, tracking, conversion, marketing]
zdroj_kanal: blog
kontext:
  background: |
    Facebook (Meta) pixel je analytický kód, který se vloží na web a sleduje chování návštěvníků přicházejících z reklam na Facebooku a Instagramu — zobrazení stránky, přidání do košíku, dokončený nákup a další standardní i vlastní události. Na základě těchto dat pak Meta staví retargetingové kampaně, vlastní a lookalike publika a optimalizuje doručování reklam směrem k lidem, kteří mají vyšší pravděpodobnost konverze. Článek popisuje pixel jako nástroj dvou funkcí v jednom: sledování konverzí a zdroj dat pro cílení.

    Na Shopify se pixel nastavuje přes Meta Business Suite (Events Manager) — po vytvoření a pojmenování pixelu doporučuje Shopify zvolit variantu "Conversions API + Meta pixel" místo samotného klientského pixelu. Meta pixel se tak propojí přímo s obchodem přes nativní integraci a eventy (ViewContent, AddToCart, Purchase apod.) se odesílají automaticky bez nutnosti ručně upravovat kód šablony. Správnost instalace lze ověřit rozšířením Meta Pixel Helper, které v prohlížeči ukáže, zda pixel běží a jestli nehlásí duplicitní nebo chybějící eventy.

    Důvodem, proč Shopify doporučuje kombinaci s Conversions API, jsou omezení sledování po iOS 14.5+ — App Tracking Transparency a blokátory v Safari ořezávají data, která by čistě klientský pixel dokázal zachytit. CAPI posílá stejné události ze strany serveru, je tedy odolnější vůči blokování a spolu s Aggregated Event Measurement pomáhá udržet přesnost měření konverzí i v prostředí s omezeným sledováním. Shopify zároveň připomíná, že aktivace pixelu v EU vyžaduje předchozí souhlas s cookies.
  zdroje:
    - title: "Shopify: Facebook (Meta) pixel — průvodce nastavením pro Facebook Ads"
      url: "https://www.shopify.com/cz/blog/facebook-pixel"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---
## O čem to je

Návod vysvětluje, co je Facebook (Meta) pixel, jak funguje a jak ho na Shopify správně nastavit pro reklamy na Facebooku a Instagramu. Pixel sleduje akce návštěvníků na webu (zobrazení produktu, přidání do košíku, nákup) a tato data pak Meta využívá jak pro měření výkonu kampaní, tak pro cílení — vlastní publika na základě chování na webu, lookalike publika odvozená od zákazníků a dynamické reklamy generované z produktového katalogu.

Praktická část popisuje nastavení přes Meta Business Suite: založení pixelu v Events Manageru a volbu "Conversions API + Meta pixel" jako doporučené kombinace, díky které se eventy posílají jak z prohlížeče (klientský pixel), tak ze serveru (Conversions API). Server-side část je odolnější vůči ad blockerům a omezením prohlížečů a společně s Aggregated Event Measurement kompenzuje výpadky měření po zavedení App Tracking Transparency na iOS 14.5+. Správnou instalaci lze zkontrolovat rozšířením Meta Pixel Helper, které rovnou pojmenuje typické problémy — pixel se nenačetl, aktivoval se vícekrát, nebo neodpovídá formát standardní události.

Text také upozorňuje na legislativní stránku věci — aktivace pixelu v EU je podmíněná souhlasem návštěvníka s cookies, takže bez fungujícího consent mechanismu pixel nesmí sbírat data.

## Pro koho je to relevantní

Jde o obecný marketingový návod od Shopify bez přímého zásahu do Admin API nebo datových toků obchodu — přímo nemění žádnou funkčnost e-shopu. Užitečný je nicméně jako referenční materiál pro situace, kdy se u klienta řeší napojení Meta pixelu a Conversions API na nový nebo přebíraný e-shop, protože shrnuje aktuální doporučený postup (pixel + CAPI současně) i nejčastější chyby při ověřování instalace.

Hodí se i jako podklad pro komunikaci s klientem, který se ptá, proč mu "nesedí" čísla v Events Manageru, nebo proč je po iOS 14.5+ měření konverzí méně přesné — článek srozumitelně vysvětluje příčinu (ochrana soukromí, blokátory) i doporučené řešení (kombinace klientského a server-side sledování).
