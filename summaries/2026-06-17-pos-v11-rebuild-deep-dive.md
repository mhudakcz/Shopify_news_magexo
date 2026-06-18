---
date: 2026-06-17
title: "POS v11 rebuild — nejrychlejší POS v historii Shopify"
title_en: "POS v11 rebuild — fastest-ever POS"
slug: pos-v11-rebuild-deep-dive
zdroj: https://www.shopify.com/blog/retail-roundup-february-2026
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "POS v11 se přímo netýká API integrace, ale retail klienti s vyšším objemem transakcí mohou mít zájem o nasazení — relevantní při konzultacích o POS workflow."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-retail", "unified-pos-staff-management"]
editions_release: spring-2026
kontext:
  background: |
    Shopify POS (Point of Sale) je nativní aplikace pro fyzický retail, která umožňuje prodejcům zpracovávat transakce přímo v kamenné prodejně nebo na eventech. POS v11 není iterativní update — jde o kompletní rebuild aplikace od základů, zaměřený na výkon, konzistenci UX a přípravu na komplexní retailové scénáře.

    Dosavadní POS architektura vznikala postupně a nesla s sebou technický dluh v podobě modálních oken, přerušovaného zobrazení košíku a pomalých UI přechodů. Každá akce zaměstnance vyžadovala navigaci pryč od košíku a zpět, což při vysokém objemu transakcí kumulovalo sekundy do měřitelných ztrát throughput. Shopify se rozhodl aplikaci přepsat s cílem "fewer taps, fewer interruptions, more flow" — méně kroků, méně přerušení, plynulejší práce.

    Klíčovou architektonickou změnou v v11 je always-present cart: košík je vždy viditelný na obrazovce, akce se otevírají vedle něj formou side panelů místo modálů zakrývajících celé UI. Přidány jsou on-page animace odstraňující stovky milisekund při každém kroku checkoutu. Výsledkem je úspora přes jedné minuty na transakci při běžném retail workflow, což se při desítkách denních transakcí promítá do citelného zlepšení kapacity obchodu.

    POS v11 je součástí širší retail strategie Shopify Editions Spring '26, která vedle výkonnostního přepisu přinesla multi-entity selling, pokročilý cash management a nový hardware Verifone Victa Mobile. Rebuild POS je tedy základním kamenem, na nějž navazují ostatní retailové funkce — bez výkonnostní základny by komplexnější scénáře nebyly prakticky použitelné.

  zdroje:
    - title: "Shopify Retail Roundup: February 2026 — POS v11 rebuild"
      url: "https://www.shopify.com/blog/retail-roundup-february-2026"
    - title: "Shopify Editions Spring '26: Retail theme overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "POS v11 je kompletní přepis pokladního softwaru Shopify — always-present cart, inline vyhledávání a on-page animace ušetří přes minutu na transakci a zásadně zvýší throughput retail prodejen."
tagy: [editions, pos, performance, retail, rebuild]
zdroj_kanal: editions
---

## Co se mění

POS v11 je kompletní rebuild Shopify pokladní aplikace. Nešlo o přidání nových funkcí do stávající architektury — Shopify přepisoval UI vrstvu od základů s jediným cílem: odstranit zbytečné kroky a čekání z každodenního retail workflow.

**Always-present cart** je nejdůležitější architektonická změna. Košík je nyní trvale viditelný na obrazovce. Akce (přidání zákazníka, aplikace slevy, změna množství) se otevírají v side panelu vedle košíku, nikoli v modálním okně přes celou obrazovku. Zaměstnanec nikdy neztrácí kontext o aktuální transakci.

**Inline search suggestions** fungují jako ghost text autocomplete v reálném čase — výsledky hledání se zobrazují průběžně při psaní, včetně přesného matchovaného textu (SKU, barcode, název zákazníka). Zákaznické vyhledávání prioritizuje nejčastěji používaná pole (jméno, e-mail, telefon).

**Multi-select** umožňuje hromadné úpravy — aplikovat slevu nebo změnu na více produktů najednou bez opakování kroků.

**Inline customer creation** s předvyplněnými poli se spouští automaticky, pokud vyhledávání nevrátí výsledek — bez nutnosti přecházet do jiné části aplikace.

**Inline number pad** nahrazuje systémovou klávesnici při zadávání hotovostních plateb nebo split payment — menší surface, rychlejší vstup.

**Per-device offline checkout** — manažer může nastavit chování POS v offline režimu samostatně pro každé zařízení.

Technicky byl rebuild vydán jako v11.0 (core redesign) a v11.1 (refinements oprávnění a vyhledávání), paralelně s v10.20 přinášejícím přesun zásob.

## Časová osa

- **2026-02** — Retail Roundup: first public description of POS v11 principles
- **2026-06-17** — Editions Spring '26 announce; POS v11 rebuild jako klíčová retail položka
- **v11.0** — core redesign (always-present cart, inline search, on-page animace)
- **v11.1** — permissions refinements a search improvements

## Dopad pro nás

**Pro vývojáře:**
POS v11 rebuild je čistě UI/UX přepis na straně nativní aplikace — nevystavuje nové API endpointy ani nepřidává nové GraphQL mutations/queries specificky pro rebuild. Pokud pracujeme s POS UI extensions (POS App Extensions), je vhodné ověřit, zda přechod na side panel layout a always-present cart neovlivňuje pozicování nebo chování vlastních extension widgetů. Jinak pro backend/API vrstvy bez změny.

**Pro PM / PO:**
Retail klienti s vyšším denním objemem transakcí (10+ transakcí/den) mohou zaznamenat měřitelné zlepšení rychlosti checkout workflow — přes minutu úspory na transakci. Při konzultacích o POS nasazení nebo upgrade je vhodné zmínit výkonnostní přínos v11 jako argument pro přechod na nejnovější verzi. Jde o standardní update, nevyžaduje žádné konfigurační kroky ze strany merchantů.

## Použití v Integrátoru

POS v11 rebuild se přímo integrátoru netýká — je to nativní UI přepis bez API změn. Relevantní při projektech zahrnujících POS nasazení nebo audit retail workflow retail klientů.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Retail](/Shopify_news_magexo/zmena/editions-spring-2026-retail/)
