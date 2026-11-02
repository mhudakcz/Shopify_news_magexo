---
date: 2026-10-28
title: "POS: rozpoznání více zákazníků v prodejně přes digitální účtenku (Shopify Payments)"
title_en: "Identify more in-store customers with POS"
slug: identify-more-in-store-customers-pos
zdroj: https://changelog.shopify.com/posts/identify-more-in-store-customers-with-pos
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nově rozpoznaní zákazníci se ukládají do zákaznického seznamu obchodu, takže mohou změnit data, ze kterých čerpá synchronizace zákazníků do CRM, věrnostního programu nebo ERP. Zdrojový post o dopadu na API nic neuvádí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-retail", "pos-online-cart-visibility-store-staff", "staff-attribution-pos-improvements", "enhanced-printed-receipt-editor-pos"]
tldr: "Shopify POS nově rozpozná víc zákazníků v prodejně, pokud už dříve platili v obchodě se Shopify Payments a u pokladny si zvolí digitální účtenku. Nákup se propojí se zákaznickým profilem bez ptaní na kontakt. Vyžaduje POS verzi 11.17, Shopify Payments a zapnutou Network Intelligence v nastavení soukromí."
tagy: [pos, customer-identification, shopify-payments, retail, omnichannel, digital-receipts, network-intelligence]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS dostalo schopnost rozpoznat víc zákazníků přímo na pokladně. Podle oznámení POS pozná oprávněné kupující, kteří už dříve platili v obchodě používajícím Shopify Payments. Když si takový kupující u pokladny zvolí digitální účtenku, nákup se propojí se zákaznickým profilem a uloží se do zákaznického seznamu obchodníka. Obsluha se přitom nemusí ptát na e-mail nebo telefon. Kupující může účtenku dostat přes aplikaci Shop, e-mailem nebo SMS a své údaje sdílí podle Shopify jedním klepnutím. Zdrojový post nepopisuje podrobně, podle čeho přesně se rozpoznání provádí, a nezmiňuje například platební karty. Pojem oprávněný kupující také nevysvětluje.

    Funkce je součástí položky In-store customer recognition v tématu Retail na Editions Fall '26. Shopify v něm popisuje omnichannel identitu zákazníka jako jeden z hlavních proudů: zákazník, kterého Shopify zná z online nákupů, se pozná i u pokladny, a digitální účtenky z prodejny se vracejí do aplikace Shop. Podle Shopify má známý zákazník v prodejně o více než 60 procent vyšší lifetime value než neznámý. Na rozpoznání navazují další položky tématu, například zobrazení opuštěného online košíku zaměstnanci nebo sdílené uložené košíky.

    Pro obchodníky, kteří prodávají online i v prodejně, jde o způsob, jak zmenšit podíl anonymních nákupů bez dodatečné práce personálu. Rozpoznaný zákazník podle Shopify umožňuje lepší personalizaci a opakované návštěvy. Marketing je ale podmíněn tím, že zákazník udělil souhlas s marketingem. Funkce navíc vyžaduje zapnutou Shopify Network Intelligence v nastavení soukromí, což je rozhodnutí, které by obchodník měl udělat vědomě a s ohledem na vlastní pravidla ochrany osobních údajů.
  zdroje:
    - title: "Shopify: Identify more in-store customers with POS"
      url: "https://changelog.shopify.com/posts/identify-more-in-store-customers-with-pos"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify nápověda: Privacy settings (Network Intelligence)"
      url: "http://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings#network-intelligence"
    - title: "Shopify nápověda: Customer receipt selection"
      url: "http://help.shopify.com/en/manual/sell-in-person/shopify-pos/receipt-management/customer-receipt-selection#manage-customer-receipt-selection"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify POS nově rozpozná více zákazníků, kteří nakupují v prodejně. Funguje to pro oprávněné kupující, kteří už dříve platili v obchodě používajícím Shopify Payments. Když si takový kupující u pokladny vybere digitální účtenku (přes aplikaci Shop, e-mail nebo SMS), nákup se propojí se zákaznickým profilem a uloží do zákaznického seznamu obchodníka. Zaměstnanec se nemusí ptát na kontaktní údaje, kupující svůj souhlas se sdílením údajů potvrdí podle Shopify jedním klepnutím.

Podmínky provozu, které post uvádí:

- **POS aplikace verze 11.17.** U obchodů s displejem pro kupujícího musí být ve verzi 11.17 nebo novější také Customer View. Žádný další krok není potřeba.
- **Bez displeje pro kupujícího** musí obchodník v Shopify Admin zapnout výběr účtenky zákazníkem (customer receipt selection), jinak kupující možnost digitální účtenky u pokladny nedostane.
- **Shopify Payments pro POS** a **zapnutá Shopify Network Intelligence** v nastavení soukromí v Adminu.

Post nezmiňuje POS Pro ani žádné tarifní omezení, nedefinuje, kdo je oprávněný kupující, a neuvádí, jaký identifikátor se pro rozpoznání používá. Marketing na takto získané zákazníky je možný jen tehdy, pokud se k odběru marketingu přihlásili.

## Časová osa

- 2026-10-28: oznámení na Shopify changelogu, funkce dostupná v POS aplikaci verze 11.17.
- Podmínka pro obchody s displejem pro kupujícího: Customer View ve verzi 11.17 nebo novější.
- Podmínka pro obchody bez displeje: ruční zapnutí výběru účtenky zákazníkem v Adminu.
- Konkrétní datum plošného nasazení ani seznam zemí post neuvádí, dostupnost je proto vhodné ověřit v konkrétním obchodě.

## Dopad pro nás

**Pro vývojáře:** Post nezmiňuje žádné nové API ani webhook a funkce běží na straně POS a Adminu. Nepřímý dopad ale existuje: nově rozpoznaní zákazníci se zapisují do zákaznického seznamu obchodu a jejich prodejní nákupy se propojují s profilem, takže mohou přibývat záznamy a objednávky navázané na zákazníky. Pokud má obchodník synchronizaci zákazníků do CRM, věrnostního programu nebo ERP, stojí za to na testovacím obchodě ověřit, jak se rozpoznaný zákazník páruje s existujícími profily a jestli nevznikají duplicity nebo neočekávané změny v souhlasech s marketingem.

**Pro PM / PO:** Pro retail obchodníky s e-shopem jde o nízkonákladový způsob, jak zvýšit podíl identifikovaných nákupů v prodejně. Funguje to v praxi takto: bez práce navíc u pokladny a bez vlastní databáze karet či vlastního věrnostního čipu. Je to i příležitost otevřít konzultaci o omnichannel datech, věrnostním programu a retargetingu. Zároveň je to citlivé téma. Funkce vyžaduje zapnutou Network Intelligence, a obchodník v EU by proto měl s právním poradcem nebo pověřencem projít, jak se to promítne do jeho informací o zpracování osobních údajů. To je náš výklad, zdroj k právním aspektům nic nepíše. Rozpoznání je dané sítí Shopify Payments, takže nenahrazuje vlastní zákaznickou databázi a zasáhne jen část zákazníků.

## Použití v Integrátoru

Přímo se Integrátoru funkce netýká, protože běží čistě v POS a Adminu a žádné nové API nepřináší. Může ale ovlivnit zákaznická data, na která se napojují synchronizace zákazníků a souhlasů do externích systémů, takže ji zohledníme při práci s obchody, které mají v provozu POS.
