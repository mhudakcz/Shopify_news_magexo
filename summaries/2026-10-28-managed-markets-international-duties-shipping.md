---
date: 2026-10-28
title: "Managed Markets — all-in international prices (duties + taxes + flat-rate shipping)"
title_en: "Managed Markets general"
slug: managed-markets-international-duties-shipping
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zdroje u Managed Markets neuvádějí žádné konfigurační API, ale objednávky z marketů s all-in cenami mají jinou strukturu cen, cla, daní, shipping lines a výplat než domácí objednávky. Dotkne se to mapování v ERP, reportingu a fulfillmentu u obchodů, které stavíme, pokud přes Managed Markets prodávají."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-payments", "managed-markets-duties-inclusive-pricing", "guaranteed-flat-rate-shipping-managed-markets"]
editions_release: fall-2026
tldr: "Editions Fall '26 v tématu Payments uvádí Managed Markets jako položku All-in prices and flat-rate shipping: mezinárodní cena včetně garantovaných cel a daní a paušální doprava v checkoutu. Shopify tvrdí +50 % mezinárodní konverze u značek, které to používají (vlastní údaj, ne nezávislé měření). Za položkou stojí tři změny, které archiv popisuje zvlášť: automatické duty-inclusive pricing, konec DDU a garantovaná flat-rate doprava. Stránka neuvádí země ani datum. Z archivu plyne, že prodejce musí být z USA, UK nebo Kanady, takže dostupnost pro české obchody je nutné ověřit."
tagy: [managed-markets, international, duties, taxes, flat-rate-shipping, cross-border]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions Fall '26 (název Exponential) vyšlo 28. října 2026. V tématu Payments je mezi položkami o daních a mezinárodním prodeji řádek s názvem All-in prices and flat-rate shipping. Stránka ho popisuje jednou větou: mezinárodní ceny zahrnují garantovaná cla a daně a v checkoutu se účtuje paušální sazba za dopravu. K tomu přidává statistiku, že značky na Managed Markets zaznamenaly o 50 % vyšší mezinárodní konverzi, a obrázek eurové ceny produktu, která prochází storefrontem, checkoutem a výplatou s clem, daněmi, poplatky, dopravou a DPH v ceně. Položka nemá štítek coming soon, early access ani rolling out, takže se prezentuje jako dostupná. Stránka neuvádí datum, seznam zemí ani plány, jen odkaz na nápovědu k nastavení dopravy v Managed Markets.

    Managed Markets je Shopify služba pro cross-border prodej, ve které Shopify (podle našeho archivu přes partnera Global-e jako merchant of record) počítá a vybírá cla a daně a řeší celní compliance. Řádek na Editions je shrnutím tří kroků, které archiv popisuje od léta. V červenci přišlo automatické duty-inclusive pricing: cla, import daně, poplatky za konverzi měny a poplatek Managed Markets se promítají přímo do zobrazené ceny a Shopify garantuje vypočtenou výši cla, takže případný rozdíl hradí on. Od 24. srpna skončila podpora DDU a trhy s dostupným DDP se přepnuly na clo vybrané už v checkoutu. Dne 24. října přibyla garantovaná flat-rate doprava: Managed Markets nastavuje sazby Standard a Express, část nákladů je v ceně produktů a zbytek v checkoutu, a u kvalifikovaných prepaid štítků FedEx a DHL Express se merchantovi neúčtují pozdější cenové úpravy od dopravce. Podmínkou je zapnuté duty-inclusive pricing a sazby merchant ručně neupraví.

    Pojem FX hedging se na stránce Editions neobjevuje. Archiv uvádí jen to, že poplatky za konverzi měny jsou zahrnuty v zobrazené ceně. Zda Shopify kryje i kurzové riziko mezi zobrazením ceny a výplatou, ze zdrojů nevyplývá a je potřeba to ověřit v nápovědě. Podobně označení konkurence typu Global-e nebo Zonos je naše zasazení do trhu: jde o alternativní řešení cross-border prodeje (tarifní a celní služby, merchant of record), s Global-e se ale podle archivu Managed Markets nevylučuje, protože na něm staví.
  zdroje:
    - title: "Shopify Editions Fall '26 (Payments)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Guaranteed flat-rate shipping, now with Managed Markets"
      url: "https://changelog.shopify.com/posts/guaranteed-flat-rate-shipping-now-in-managed-markets"
    - title: "Shopify: Drive international conversion with automated duties-inclusive pricing from Shopify Managed Markets"
      url: "https://changelog.shopify.com/posts/drive-international-conversion-with-automated-duties-inclusive-pricing-from-shopify-managed-markets"
    - title: "Shopify Help Center: Set up shipping in Managed Markets"
      url: "https://help.shopify.com/en/manual/international/managed-markets/shipping/set-up-shipping"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 v tématu Payments uvádí Managed Markets jako položku **All-in prices and flat-rate shipping**: merchant může zahraničním kupujícím nabídnout cenu, která už obsahuje garantovaná cla a daně, a v checkoutu k ní přidat paušální sazbu za dopravu. Shopify k tomu uvádí, že značky na Managed Markets viděly o 50 % vyšší mezinárodní konverzi. Je to tvrzení Shopify, ne nezávislé měření a stránka neříká, na jakém vzorku ani za jaké období.

Položka není nová funkce, ale zastřešení tří kroků, které už máme v archivu zvlášť:

- **Ceny včetně cel a daní.** Cla, import daně, poplatky za konverzi měny a poplatek Managed Markets jsou v zobrazené ceně od produktové stránky po dokončení objednávky. Shopify garantuje vypočtenou výši cla a případný rozdíl proti skutečnosti hradí sám. Detail: [duty-inclusive pricing](/Shopify_news_magexo/zmena/managed-markets-duties-inclusive-pricing/).
- **Jen DDP.** DDU (clo placené při doručení) skončilo 24. 8. 2026 a trhy s dostupným DDP přešly na clo vybrané v checkoutu. Detail: [ukončení DDU](/Shopify_news_magexo/zmena/managed-markets-ending-ddu-support/).
- **Paušální doprava.** Managed Markets nastavuje pro každou destinaci sazby Standard a Express. Část nákladů je v cenách produktů, zbytek v checkoutu, a merchant může část nákladů volitelně absorbovat. U kvalifikovaných prepaid štítků FedEx a DHL Express se neúčtují pozdější úpravy ceny od dopravce. Detail: [guaranteed flat-rate shipping](/Shopify_news_magexo/zmena/guaranteed-flat-rate-shipping-managed-markets/).

Pro čtení výrazu Shopify kryje rozdíl: platí pro rozdíl mezi vypočteným a skutečným clem a pro dodatečné cenové úpravy dopravce u kvalifikovaných štítků. Není to obecná záruka, že merchantova marže je při mezinárodním prodeji pevná.

**Omezení a podmínky podle archivu:**

- Sazby dopravy nastavuje a aktualizuje Managed Markets a merchant je ručně neupraví. Chce-li vlastní sazby, funkci pro daný market vypne a přijde o garanci nákladů na štítky.
- Flat-rate doprava vyžaduje zapnuté duty-inclusive pricing.
- Managed Markets vyžaduje Shopify Payments a Shopify Tax nebo Basic Tax. B2B objednávky, předplatné a zero-value objednávky zůstávají mimo scope.
- Prodejce musí být ze zemí, kde je služba dostupná. Archiv zmiňuje kontinentální USA a od jara v early access také UK a Kanadu ([UK a Kanada](/Shopify_news_magexo/zmena/managed-markets-uk-canada-launch/)). Česká republika v archivu uvedena není.

**Co stránka Editions neříká:**

- seznam zemí prodejců ani cílových destinací, datum obecné dostupnosti a ceník,
- zda se all-in cena propisuje do Storefront API a do feedů pro headless nebo vlastní storefronty,
- zda Shopify kryje i kurzové riziko (FX hedging). Zdroje zmiňují jen poplatky za konverzi měny v ceně,
- jak se náklady na dopravu dělí mezi cenu produktu a checkout.

## Časová osa

- **2026-06-17** — Managed Markets v early access pro UK a Kanadu
- **2026-07-10** — automatické duty-inclusive pricing a garance vypočteného cla
- **2026-07-16** — automatické 14denní právo na zrušení a vrácení pro EU kupující ([EU buyer cancellation](/Shopify_news_magexo/zmena/managed-markets-eu-buyer-cancellation-returns/))
- **2026-08-11** — oznámeno ukončení DDU
- **2026-08-24** — DDU končí, trhy s dostupným DDP přecházejí na DDP
- **2026-10-24** — garantovaná flat-rate doprava v Managed Markets
- **2026-10-28** — Editions Fall '26: Managed Markets jako položka All-in prices and flat-rate shipping, bez data dostupnosti
- **2026-11-01** — EU product identifiers na labelech Shopify Shipping a Managed Markets ([EU identifikátory](/Shopify_news_magexo/zmena/eu-product-identifiers-shopify-shipping-labels/))

## Dopad pro nás

**Pro vývojáře:** Editions ani changelog nezmiňují žádné nové API, mutation ani scope. Jde o nastavení v adminu (Markets, sekce Managed Markets). Dopad je nepřímý a týká se dat z objednávek:

- Objednávky z marketů s all-in cenami mají jinou strukturu cen, cla, daní, shipping lines a výplat než domácí objednávky. Cla a doprava jsou částečně už v ceně produktu, ne jako samostatné řádky. ERP, účetní export nebo reporting, který clo a dopravu sčítá zvlášť, je může započítat dvakrát nebo je naopak nenajde.
- Shipping lines vznikají podle pravidel Managed Markets, ne podle vlastních sazeb obchodu. Je vhodné ověřit, jak se chovají vedle vlastních delivery profiles a carrier services. Související téma vlastních sazeb per market je v [market-driven shipping Admin API](/Shopify_news_magexo/zmena/market-driven-shipping-admin-api/).
- U headless storefrontů, cenových feedů a vlastních product stránek je potřeba ověřit, zda zobrazená mezinárodní cena odpovídá ceně v checkoutu. Zda se all-in cena vrací přes Storefront API, zdroje neuvádějí.
- Labely z Managed Markets podléhají od 1. 11. 2026 pravidlům o EU product identifiers. Bez povinného S-PID nebo prohlášení o jeho absenci label nevznikne, takže produktová data pro EU zásilky musí být v pořádku předem.

**Pro PM / PO:** Příležitost je u obchodů, které řeší vysokou míru opuštěných košíků u zahraničních zákazníků, stížnosti na doplatek cla při doručení nebo složitost celní a daňové compliance. Cena bez překvapení v checkoutu a paušální doprava jdou přesně proti těmto bolestem. Čísla +50 % konverze berte jako marketingový údaj Shopify, ne jako očekávání pro konkrétní obchod.

Hlavní otázka pro nás je dostupnost. Podle archivu je služba určena pro prodejce z USA, UK a Kanady, takže u českého obchodu, který prodává mimo EU, nelze zapnutí slibovat, dokud to neověříme v nápovědě nebo u Shopify Support. Do té doby je to signál směru: Shopify posouvá all-in ceny a paušální dopravu jako výchozí cestu pro mezinárodní prodej a tradiční DDU model už nenabízí.

Trade-offy, které stojí za to s obchodem probrat: ztráta kontroly nad sazbami dopravy, poplatek Managed Markets zabudovaný do ceny, závislost na Shopify Payments a vyloučení B2B a předplatného. Pro obchody, které dnes používají externí cross-border řešení typu Global-e nebo Zonos, nebo vlastní celní integraci, je smysluplné porovnat marži a pokrytí zemí. Před přechodem je dobré využít náhled mezinárodních cen a výplat pro konkrétní market, který Managed Markets nabízí.

Nalehavost je střední. Žádný deadline u této položky není, ale změny kolem DDU a flat-rate dopravy už proběhly, takže obchody se zahraničním prodejem by měly vědět, jak se jejich objednávky z Managed Markets dnes chovají.

## Použití v Integrátoru

Možná — Managed Markets nemá podle zdrojů konfigurační API, relevance je v tom, že objednávky z marketů s all-in cenami mají jinou strukturu cen, cla a dopravy, což se projeví v mapování pro ERP, reporting a fulfillment. U cross-border projektů je vhodné to ověřit na testovací objednávce, než se napojí účetnictví nebo sklad.

## Související

- [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Payments](/Shopify_news_magexo/zmena/editions-fall-2026-payments/)
