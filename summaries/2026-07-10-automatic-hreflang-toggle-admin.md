---
date: 2026-07-10
title: "Automatické hreflang tagy nyní lze vypnout/zapnout v admin nastavení"
title_en: "Turn automatic hreflang tags on or off from your admin settings"
slug: automatic-hreflang-toggle-admin
zdroj: https://changelog.shopify.com/posts/turn-automatic-hreflang-tags-on-or-off-from-your-admin-settings
shrnuto_dne: 2026-07-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Relevantní pro tenanty s vlastním hreflang řešením nebo custom SEO strategií, kde by duplicitní automaticky generované tagy kolidovaly s ručně spravovanými."
dotcene_klienty: []
souvisejici: [shopify-markets-graph-view, customize-themes-per-market, storefront-filter-urls-stable-identifiers]
tldr: "Merchanti mohou v Online Store → Preferences nově vypnout automatickou generaci hreflang tagů, pokud si SEO signály pro jazykové/regionální varianty spravují vlastním řešením."
tagy: [seo, hreflang, i18n, admin, markets]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Hreflang tagy jsou HTML značky v hlavičce stránky, které říkají vyhledávačům (především Google), kterou jazykovou nebo regionální verzi stránky mají zobrazit konkrétním návštěvníkům. Jde o standardní SEO mechanismus pro weby s více jazykovými nebo geografickými variantami téhož obsahu — bez správných hreflang tagů může vyhledávač indexovat nesprávnou jazykovou verzi nebo penalizovat obsah jako duplicitní.

    Shopify tyto tagy dosud generoval automaticky a bez možnosti vypnutí, na základě konfigurace jazyků a domén v Shopify Markets. Pro naprostou většinu obchodů to funguje bez zásahu, ale obchody s pokročilejší mezinárodní SEO strategií — typicky větší multi-market weby s vlastním řešením lokalizace, custom subdoménovou strukturou mimo Markets, nebo agenturou spravující SEO nezávisle na Shopify — narážely na to, že automaticky generované tagy Shopify kolidovaly s tagy vloženými vlastním řešením (např. přes theme úpravu nebo app), což vedlo k duplicitním nebo protichůdným hreflang signálům na stránce.

    Nový přepínač v Online Store → Preferences (sekce Social sharing and SEO) řeší přesně tento okrajový případ: umožňuje automatickou generaci úplně vypnout, takže merchant (nebo jeho agentura/integrátor) může spravovat hreflang tagy zcela vlastním způsobem bez rizika duplicity. Výchozí stav zůstává zapnutý — jde o opt-out, nikoli změnu chování pro běžné obchody.
  zdroje:
    - title: "Shopify: Turn automatic hreflang tags on or off from your admin settings"
      url: "https://changelog.shopify.com/posts/turn-automatic-hreflang-tags-on-or-off-from-your-admin-settings"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přidal do admin nastavení nový přepínač pro automatickou generaci hreflang tagů. Ty se doteď generovaly vždy automaticky na základě jazykové a doménové konfigurace v Shopify Markets, bez možnosti to vypnout. Nově lze tuto automatiku v **Online Store → Preferences**, v sekci **Social sharing and SEO**, jednoduše vypnout nebo zase zapnout.

Výchozí nastavení zůstává zapnuté — pro drtivou většinu obchodů se tedy nic nemění. Přepínač cílí na obchody, které si hreflang tagy spravují vlastním řešením (custom theme kód, SEO aplikace, nebo agenturní proces mimo Shopify Markets) a dosud museli řešit kolizi mezi Shopify automatikou a vlastními tagy — typicky duplicitní nebo protichůdné `<link rel="alternate" hreflang="...">` značky v hlavičce stránky.

## Časová osa

- 2026-07-10 — Shopify changelog: přepínač automatické generace hreflang tagů dostupný v admin Preferences

## Dopad pro nás

**Pro vývojáře:** Jde o čistě admin-side toggle bez API povrchu — žádná GraphQL/REST mutace ani webhook. Relevantní jen v situaci, kdy klient má vlastní hreflang implementaci (např. custom snippet v theme layoutu) souběžně s automatikou Shopify. V takovém případě je vhodné přepínač vypnout, aby nevznikaly duplicitní tagy, a ověřit, že vlastní implementace pokrývá všechny jazykové/market varianty, které dřív řešila automatika.

**Pro PM / PO:** Nízká naléhavost a bez dopadu na běžné klienty — automatika zůstává zapnutá ve výchozím stavu. Stojí za zmínku u klientů s pokročilou mezinárodní SEO strategií nebo těch, kteří řeší duplicitní/konfliktní hreflang tagy nahlášené přes Search Console či SEO audit.

## Použití v Integrátoru

Bez přímého API dopadu — čistě admin nastavení. Užitečné vědět jako referenci při řešení SEO auditů nebo hreflang konfliktů u multi-market klientů s custom lokalizačním řešením.

## ⬅️ Související
🔗 [Visualized markets graph](/Shopify_news_magexo/zmena/shopify-markets-graph-view/)
🔗 [Customize themes per market](/Shopify_news_magexo/zmena/customize-themes-per-market/)
🔗 [Storefront filter URLs — stable identifiers](/Shopify_news_magexo/zmena/storefront-filter-urls-stable-identifiers/)
