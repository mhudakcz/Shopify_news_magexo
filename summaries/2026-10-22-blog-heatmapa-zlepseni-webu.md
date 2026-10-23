---
date: 2026-10-22
title: "Jak používat heatmapy ke zlepšení webu"
slug: blog-heatmapa-zlepseni-webu
zdroj: https://www.shopify.com/cz/blog/heatmapa
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o blogový průvodce bez dopadu na API, ale heatmapy se hodí jako kvalitativní podklad pro CRO konzultace a pro hypotézy A/B testů u klientských e-shopů; nasazení měřicího skriptu je navíc otázka nastavení trackingu a rychlosti stránek."
dotcene_klienty: []
souvisejici: [blog-prodejni-funnel-jak-opravit-deravy-2027, blog-uzivatelske-testovani, rollouts-schedule-ab-test-themes-checkout]
tldr: "Shopify CZ blog vysvětluje, jak heatmapy (kliky, pohyb kurzoru, scroll, pozornost, segmenty) ukazují, co návštěvníci na stránce skutečně dělají, a jak z nich odvodit úpravy layoutu, hypotézy pro A/B testy i odhalit technické chyby; data je třeba sbírat 2 až 4 týdny."
tagy: [heatmap, ux, konverze, analytika, hotjar, microsoft-clarity]
zdroj_kanal: blog
kontext:
  background: |
    Shopify CZ blog publikoval krátký edukační článek (zhruba pět minut čtení, kategorie Marketing) o heatmapách, tedy teplotních mapách chování návštěvníků na webu. Nejde o oznámení nové funkce Shopify ani o změnu platformy, ale o metodický materiál pro merchanty, kteří chtějí upravovat rozvržení stránek podle skutečného chování lidí, a ne podle dojmu. Heatmapa je barevná vrstva položená přes stránku: teplé barvy (červená) označují místa s vysokou interakcí, chladné (modrá) místa, kterých si lidé téměř nevšímají, žlutá a zelená střední zájem. Měřicí skript sbírá pohyby myši, kliky či klepnutí a hloubku scrollování, data seskupí podle typu akce a vizualizuje je. Pokročilejší nástroje umí oddělit náhled pro desktop a mobil, protože mobilní layout potřebuje jiný přístup.

    Článek rozlišuje pět typů heatmap a doporučuje je kombinovat. Click mapy ukazují, kam lidé klikají nebo klepají; klikání na statický obrázek nebo běžný text signalizuje matoucí strukturu a hlavní tlačítko nad ohybem stránky, které dostává méně kliknutí než prvek pod ním, je kandidát na přeuspořádání. Move mapy (pohyb kurzoru) pomáhají s umístěním výzev k akci, ale pozice kurzoru neznamená vždy pozornost, takže je vhodné číst je spolu s kliky. Scroll mapy ukazují, kolik procent návštěvníků se dostane na jednotlivé úrovně stránky; místo, kde se barva láme do modré, je bod odchodu a v ukázce se formulář pro sběr e-mailů přesouvá z chladné zóny do aktivní. Attention mapy spojují kliky, scroll a pohyb do jednoho pohledu a odhalují neklikatelné prvky, které přesto přitahují pozornost (například GIF uprostřed stránky). Segmentované heatmapy dělí data podle lokality, zařízení nebo demografie, takže lze zjistit například to, že na mobilu lidé dojdou na konec stránky, zatímco na desktopu zájem klesá v polovině.

    Praktické využití článek shrnuje do pěti oblastí: optimalizace rozvržení, odhalení oblíbených prvků, zlepšení uživatelského zážitku (kliknutelné prvky bez reakce, rozdíly mezi novými a vracejícími se zákazníky), podpora A/B testování a odhalení technických problémů. U A/B testů autoři zdůrazňují, že heatmapy rozdělené testy nenahrazují. Slouží jako zdroj hypotéz (například otestovat výrazné sdělení o dopravě zdarma, když lidé reagují na stručné texty) a po testu jako srovnání chování mezi variantami. U technických chyb je příkladem nákupní tlačítko, na které návštěvníci opakovaně klikají, ale na některých mobilech nereaguje, což může vysvětlit pokles objednávek lépe než sezónnost. V sekci s otázkami článek uvádí, že Google nemá vlastní heatmap nástroj (zmiňuje přehledy toku chování v Google Analytics nebo propojení s externí aplikací jako Hotjar) a že postup je vybrat nástroj, vložit měřicí kód do hlavičky webu a sbírat data přibližně 2 až 4 týdny, než se začne vyhodnocovat.

    Poznámka ke zdroji: článek jmenuje jen Hotjar a Heatmap.com, nezmiňuje Microsoft Clarity ani Lucky Orange a neuvádí žádné konkrétní statistiky ani studie; jediné číslo je doporučená doba sběru dat. Ostatní příklady jsou ilustrativní. Clarity a Lucky Orange jsou běžné alternativy, které do této kategorie nástrojů patří, ale v textu článku nejsou.
  zdroje:
    - title: "Shopify: Jak používat heatmapy ke zlepšení webu"
      url: "https://www.shopify.com/cz/blog/heatmapa"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify CZ blog vydal úvodní průvodce heatmapami: co to je, jak se data sbírají, jaké typy existují a k čemu je v praxi použít. Článek je krátký, edukační a nástrojově spíš neutrální. Hlavní myšlenka je, že heatmapy nahrazují odhady konkrétním pozorováním toho, co návštěvníci na stránce dělají.

**Jak heatmapa funguje.** Měřicí skript sbírá pohyb myši, kliky (na mobilu klepnutí) a hloubku scrollování. Výsledek se zobrazí jako barevná vrstva přes stránku, kde červená znamená vysokou aktivitu a modrá minimální. Doporučuje se mít samostatné pohledy pro desktop a mobil.

**Pět typů heatmap.**
- **Click map.** Ukazuje, kam lidé klikají. Klikání na neklikatelné prvky (obrázek, text) je signál matoucího designu, slabě klikané primární CTA je kandidát na přesun.
- **Move map.** Ukazuje pohyb kurzoru a pomáhá s umístěním CTA a klíčových sdělení. Kurzor ale neznamená totéž co pohled, proto ji číst společně s kliky.
- **Scroll map.** Ukazuje, jak velké procento lidí dojde na kterou část stránky, a tedy kde zájem klesá. Důležité prvky (formulář pro e-mail, CTA) patří nad tento zlom.
- **Attention map.** Spojuje kliky, scroll a pohyb do jednoho pohledu a odhaluje i neklikatelné prvky, které upoutají pozornost.
- **Segmentované heatmapy.** Dělí chování podle lokality, zařízení nebo demografie, takže lze ladit desktop a mobil zvlášť.

**Pět způsobů využití.** Optimalizace layoutu, odhalení oblíbených prvků, zlepšení UX (prvky, které vypadají klikatelně, ale nereagují), podpora A/B testování a hledání technických chyb, například tlačítka, které na části mobilních zařízení nefunguje. Autoři upozorňují, že heatmapa je zdroj hypotéz a nenahrazuje samotný split test; po testu se ale dají mapy variant porovnat a pochopit, proč jedna vyhrála.

**Praktika.** Vybrat nástroj, vložit měřicí kód do hlavičky webu a sbírat data přibližně 2 až 4 týdny, než se začnou dělat závěry. Z nástrojů článek jmenuje Hotjar a Heatmap.com; Microsoft Clarity ani Lucky Orange v něm nejsou, ačkoli jde o běžné alternativy.

## Pro koho je to relevantní

**Merchanti na Shopify** s dostatečnou návštěvností, kteří řeší nízkou konverzi a nevědí proč. Heatmapa odpoví na otázku, co lidé na stránce dělají, a doplňuje čísla ze Shopify Analytics nebo GA4, která říkají jen to, kde lidé odpadají. Rozumně se hodí na homepage, kolekce, produktovou stránku a landing pages. Při nízkém provozu je 2 až 4 týdny sběru často málo na spolehlivý vzorek.

**CRO, UX a marketingové role v agentuře.** Jako kvalitativní vrstva před A/B testem: heatmapa navrhne hypotézu (přesunout CTA, zkrátit stránku, odstranit rušivý prvek), test ji ověří. V Shopify pak na to navazují rollouty a A/B testy témat, které stojí za to číst společně s tímto článkem. Hodí se i jako podklad při reklamaci typu pokles objednávek bez zjevné příčiny, protože heatmapa a záznamy relací často odhalí rozbité tlačítko nebo prvek, který na mobilu nereaguje.

**Praktické poznámky mimo samotný článek** (vlastní doplnění, ne obsah zdroje):
- Heatmap skript je další JavaScript na storefrontu, takže ovlivňuje rychlost načítání. Po nasazení stojí za to zkontrolovat Core Web Vitals.
- Nástroje sbírají data o chování návštěvníků, takže patří pod cookie consent a zásady zpracování osobních údajů. Citlivá pole (formuláře, e-mail, adresy) je vhodné maskovat podle nastavení nástroje.
- Samotný checkout řídí Shopify a ve standardním nastavení do něj externí skripty nevložíte tak volně jako do témat, takže heatmapy typicky pokryjí hlavně storefront a ne poslední kroky nákupu.
- Čísla z heatmap je dobré brát jako směr, ne jako důkaz. O změně rozhoduje test s dostatečným vzorkem.
