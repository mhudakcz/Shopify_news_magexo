---
date: 2026-10-16
title: "Shopify Shipping: labely v Nizozemsku a Polsku (DHL eCommerce discounted)"
title_en: "Buy shipping labels on Shopify, now in the Netherlands and Poland"
slug: shipping-labels-netherlands-poland-dhl
zdroj: https://changelog.shopify.com/posts/buy-shipping-labels-on-shopify-now-in-the-netherlands-and-poland
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nativní nákup DHL eCommerce labelů v adminu je alternativa k externím carrier appkám u klientů, kteří expedují z NL nebo PL lokace; API dopad changelog neuvádí."
dotcene_klienty: []
souvisejici: [dhl-express-uk-de-fr-it-es, blog-shopify-shipping-vs-shipstation, ups-return-labels-shopify-shipping]
tldr: "Merchanti expedující z Nizozemska nebo Polska si mohou přímo v Shopify adminu koupit zlevněné DHL eCommerce labely bez příplatku nad rámec svého plánu."
tagy: [shipping-labels, netherlands, poland, dhl-ecommerce, discounted-rates, europe]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Shipping umožňuje merchantům nakupovat přepravní štítky přímo v adminu, bez samostatné carrier appky a bez zakládání vlastního smluvního účtu u dopravce. Dostupnost ale dlouho závisela na zemi: nejdřív USA a Kanada, později vybrané evropské trhy. Dne 13. 8. 2026 Shopify přidal DHL Express pro UK, Německo, Francii, Itálii a Španělsko; nynější novinka je další krok v rozšiřování nativního carrier poolu po Evropě, tentokrát s produktem DHL eCommerce, který je zaměřený na e-commerce balíky z pickup bodů a lockerů.
    Podle changelogu ze 16. 10. 2026 si merchanti expedující z Nizozemska nebo Polska mohou kupovat DHL eCommerce labely přímo v Shopify adminu za zlevněné sazby a bez dalšího poplatku nad rámec jejich Shopify plánu. Nizozemsko je pokryto pro domácí zásilky na vhodné nizozemské adresy s odevzdáním na DHL service pointu nebo v lockeru. Polsko je pokryto pro zásilky na vhodné adresy v ostatních zemích EU s odevzdáním v DHL lockeru. Changelog nedefinuje, co přesně znamená eligible address, a neuvádí výši slevy ani konkrétní plány.
    Pro české prostředí je důležité vymezení: novinka se týká lokace, ze které se expeduje, nikoli země, kde je firma usazená. Český merchant s fulfillment lokací v Polsku (například externí sklad nebo 3PL) tak může být potenciálním příjemcem benefitu, ale changelog to výslovně nepotvrzuje a požadavky na vedení účtu je nutné ověřit v Help Centru. Srovnávací článek ze Shopify blogu z července 2026 přitom uvádí, že zlevněné labely přes Shopify Shipping nejsou pro tuzemské české merchanty dostupné, takže tato novinka na stav v ČR sama o sobě nic nemění.
  zdroje:
    - title: "Shopify: Buy shipping labels on Shopify, now in the Netherlands and Poland"
      url: "https://changelog.shopify.com/posts/buy-shipping-labels-on-shopify-now-in-the-netherlands-and-poland"
    - title: "Shopify Help Center: DHL shipping labels"
      url: "https://help.shopify.com/manual/fulfillment/fulfilling-orders/shipping-labels/shipping-carriers/dhl"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšiřuje Shopify Shipping o nákup labelů u DHL eCommerce pro merchanty, kteří expedují z Nizozemska nebo Polska. Sazby jsou zlevněné a podle changelogu za ně neplatíte žádný poplatek navíc nad svůj Shopify plán. Výši slevy ani konkrétní plány post neuvádí.

Pokryté trasy jsou dvě:

- **Z Nizozemska:** domácí objednávky na vhodné nizozemské adresy, balík se odevzdává na DHL service pointu nebo v DHL lockeru.
- **Z Polska:** objednávky na vhodné adresy v ostatních zemích EU, balík se odevzdává v DHL lockeru.

Label se kupuje per order, takže adresa doručení, položky i váha jsou předvyplněné. Merchant vybere službu a vytiskne label, tracking se doplní do objednávky a odešle zákazníkovi a objednávka se automaticky označí jako fulfilled. V adminu stačí otevřít unfulfilled objednávku a kliknout na **Create shipping label**. Pro více objednávek najednou lze označit několik orders a tisknout v bulku, stejně tak je podporován nákup jednotlivého labelu.

Pozor na záměnu produktů: srpnová novinka se týkala DHL Express (expres, domestic i international, UK/DE/FR/IT/ES), kdežto tady jde o DHL eCommerce, tedy levnější balíkovou službu s předáním na výdejním bodě nebo v lockeru. Changelog ani jedno z toho nespojuje s API a neuvádí žádnou změnu pro vývojáře.

## Časová osa

- 2026-08-13 — Shopify přidává DHL Express labely pro UK, DE, FR, IT, ES (předchozí vlna rozšiřování carrier poolu).
- 2026-10-16 — Shopify oznamuje v merchant changelogu nákup zlevněných DHL eCommerce labelů pro NL a PL; changelog nepopisuje postupný rollout, dostupnost je uvedena jako současná.
- 2026-10-20 — zařazeno do týdenního digestu.

## Dopad pro nás

**Pro vývojáře:** Jde o čistě adminovou funkci Shopify Shipping bez nové API metody a bez breaking change, takže žádná technická akce není potřeba. Pokud u klienta řešíme vlastní fulfillment nebo label integraci s polským či nizozemským skladem, stojí za to počítat s tím, že merchant může tracking a fulfilled stav dostávat z nativního flow v adminu. Při návrhu synchronizace fulfillmentů je dobré ověřit, že se nativní label nepřekrývá s tím, co už zapisuje externí systém (dvojí fulfillment téže objednávky, duplicitní tracking číslo).

**Pro PM / PO:** Příležitost s nízkou naléhavostí. Týká se hlavně klientů, kteří expedují z Polska nebo Nizozemska, například přes externí fulfillment centrum, a dnes platí DHL přes samostatnou smlouvu nebo carrier appku. Může jít o argument pro zjednodušení shipping stacku a ušetření poplatků za appku, ale konkrétní úsporu nelze vyčíslit, protože sleva není v changelogu uvedená. Před oslovením klienta je potřeba v Help Centru ověřit, zda se benefit dá využít i u obchodu se sídlem mimo PL/NL (typicky CZ merchant s polskou fulfillment lokací) a které adresy jsou eligible. Pro čistě české expedice z CZ novinka nic nemění.

## Použití v Integrátoru

Přímo nevyužíváme, jde o nativní funkci Shopify adminu bez API dopadu. Hodí se mít ji na paměti u klientů s polskou nebo nizozemskou expediční lokací jako možnou alternativu k jejich současnému DHL řešení.
