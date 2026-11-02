---
date: 2026-10-27
title: "Dev Dashboard: detail store a instalace aplikace (výdělky, aktivita a logy per store)"
title_en: "Store and app install details in the Dev Dashboard"
slug: store-app-install-details-dev-dashboard
zdroj: https://shopify.dev/changelog/posts/store-and-app-install-details-in-the-dev-dashboard
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "U apps, které máme nainstalované na více obchodech, ukáže detail instalace v Dev Dashboardu na jednom místě aktivitu instalace a billingu, aktuální předplatné a rychlý přechod do logů dané store."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, new-dev-dashboard-command-center, dev-dashboard-filterable-logs-health-metrics]
tldr: "Dev Dashboard nově ukazuje stránku jedné store (nainstalované apps organizace, collaboratori, výdělky) a detail instalace app na dané store (lifetime výdělky, feed instalačních a billingových událostí, aktuální předplatné a rychlý přechod do logů)."
tagy: [dev-dashboard, partners, debugging, app-installs, metrics]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Dev Dashboard je webové rozhraní pro vývojáře, agentury a partnery, přes které spravují své apps, stores a související data. Dosud bylo možné v přehledu apps vidět celkový počet instalací, ale otázka co se děje na jednom konkrétním obchodě vyžadovala skládat informace z několika míst: ze seznamu stores, z billingu, z logů a někdy i z admina samotného obchodu.

    Novinka z 27. října 2026 přidává dvě nové úrovně detailu. První je stránka jedné store, která ukazuje, které apps organizace jsou na ní nainstalované, kteří uživatelé organizace mají k obchodu collaborator přístup a jaké výdělky z obchodu organizace má (celkové výdělky z apps, celkové výdělky z témat a recurring revenue share). Druhá je detail instalace jedné app na jedné store, kde je vidět lifetime hrubý výdělek z dané store, feed událostí instalace a billingu, aktuální předplatné a rychlý přístup k logům pro tuto store. Podle zdrojového oznámení závisí to, co konkrétně uvidíte, na vašich oprávněních a na přístupu ke store. Oznámení neuvádí žádnou API verzi, rollout plán ani akci, kterou by bylo nutné provést.

    Novinka navazuje na přepracovaný Dev Dashboard z 25. září 2026, který zavedl Stores index a logy napříč nainstalovanými stores, a vychází jen den před spuštěním Editions Fall '26 (28. října 2026). V přehledu Developer tématu jsme samostatnou položku s tímto názvem nenašli; logicky ale doplňuje tamní blok o Dev Dashboardu a výdělcích partnerů. Pro agentury a vývojáře znamená menší závislost na ručním dohledávání: u jednoho obchodu uvidí, co se kdy instalovalo, jak se app účtovala a kam kliknout pro logy. Zdroj nezmiňuje data jako verze app, plán obchodu, metriky využití nebo chybovost přímo v detailu instalace, takže takové údaje v něm neočekáváme; k chybám a requestům slouží logy, na které detail jen odkazuje.
  zdroje:
    - title: "Shopify: Store and app install details in the Dev Dashboard"
      url: "https://shopify.dev/changelog/posts/store-and-app-install-details-in-the-dev-dashboard"
    - title: "Shopify docs: Where to manage stores"
      url: "https://shopify.dev/docs/apps/build/stores#where-to-manage-stores"
    - title: "Shopify docs: View one store's app history"
      url: "https://shopify.dev/docs/apps/launch/distribution/track-app-usage#view-one-stores-app-history"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify 27. října 2026 rozšířil **Dev Dashboard** o detail jedné store a detail instalace app na této store.

**Stránka store** zobrazuje:

- **apps organizace nainstalované na dané store**,
- **uživatele organizace s collaborator přístupem** k této store,
- **výdělky ze store**: celkové výdělky z apps, celkové výdělky z témat a recurring revenue share.

**Detail instalace app** zobrazuje:

- **hrubý lifetime výdělek** z dané store pro vybranou app,
- **feed aktivit** s událostmi instalace a billingu,
- **aktuální předplatné** app na této store s rychlým přístupem k **logům** pro danou store.

Co přesně uvidíte, závisí na vašich oprávněních a na přístupu ke store.

**Kde to najít:** stránku store otevřete výběrem store v sekci **Stores** v Dev Dashboardu. K detailu instalace se dostanete z **Overview** vaší app: klikněte na počet instalací v kartě **Installs** a poté vyberte store. Dokumentace je v sekcích o správě stores a o sledování využití apps na shopify.dev.

Oznámení nemá přiřazenou API verzi ani dotčené API a nevyžaduje žádnou akci. Žádné pole typu verze app, plán obchodu nebo metriky využití v něm zmíněné nejsou.

## Časová osa

- **27. října 2026** — Shopify oznamuje stránku store a detail instalace app v Dev Dashboardu.
- **Bez dalšího termínu** — oznámení neuvádí žádné postupné zapínání ani plánované rozšíření a nic se nemusí zapínat ani konfigurovat.

## Dopad pro nás

**Pro vývojáře:** Hlavní přínos je rychlejší dohledání kontextu u jednoho obchodu. Když merchant hlásí problém s appkou, na detailu instalace vidíme, kdy proběhla instalace, jaké billingové události následovaly a jaké je aktuální předplatné, a odtud rovnou otevřeme logy pro danou store. Netřeba si to skládat z více obrazovek. Detail ale sám o sobě neukazuje chybovost ani verzi app, takže pro vlastní diagnostiku zůstávají klíčové logy a naše vlastní monitorování.

**Pro PM / PO:** Jde o změnu interního nástroje bez dopadu na storefront nebo merchanty. Stránka store s přehledem collaborator přístupů a výdělků se hodí pro agenturní reporting: jedním pohledem je vidět, jaké apps a témata na obchodě běží a kolik z něj organizace vydělává. Nalehavost je nízká, je to příležitost k pohodlnější práci, ne povinnost. Protože viditelnost závisí na oprávněních, stojí za to ověřit, kdo v týmu má jaká práva, aby si údaje neprohlíželi jen vybraní lidé.

## Použití v Integrátoru

Pokud naše apps spravujeme přes Dev Dashboard, přidáme detail instalace do troubleshooting postupu u merchantů: nejdřív se podíváme na feed instalace a billingu a pak přejdeme do logů dané store. Změna kódu ani konfigurace to nevyžaduje.
