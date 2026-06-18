---
date: 2026-06-17
title: "Sidekick na všech obrazovkách mobilní app + Apple Watch"
title_en: "Sidekick everywhere in Shopify app + Apple Watch"
slug: sidekick-everywhere-mobile-watch
zdroj: https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick/set-up
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Sidekick na mobilu a Watch je merchant-facing UX feature — přímý vývojářský dopad je minimální, ale indikuje směr AI-first produktivity v Shopify ekosystému."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-sidekick", "editions-spring-2026"]
editions_release: spring-2026
kontext:
  background: |
    Sidekick je Shopify vlastní AI asistent integrovaný přímo do Shopify adminu — LLM-based chatbot, který rozumí kontextu konkrétního obchodu a dokáže nejen odpovídat na otázky, ale i provádět akce (editace produktů, tvorba zákazníků, analýza dat). Funguje přes text nebo hlasový vstup a jako kontext používá stránku, na které se merchant právě nachází.

    Původně byl Sidekick dostupný pouze v dedikované sekci desktopového admin a jako oddělená část mobilní aplikace. Merchant musel vědomě "přejít do Sidekicku", což zvyšovalo tření a omezovalo situační využití. Spring '26 mění tento model — Sidekick je nyní dostupný na každé obrazovce mobilní Shopify aplikace bez nutnosti přepínat sekci.

    Druhou novinkou je podpora Apple Watch. Merchant může klást dotazy na business data (denní tržby, počet nevyřízených objednávek, upozornění) přímo z hodinek přes hlas — bez nutnosti sáhnout po telefonu. Watch verze je záměrně omezená: pouze čtení dat, žádné editace ani navigace v adminu. Jde o first-party wearable integraci Shopify, která nemá mezi e-commerce platformami přímý ekvivalent.

    Obě funkce jsou součástí širšího "omnipresence" záměru Spring '26: Sidekick se posouvá z opt-in chatboxu na všudypřítomnou vrstvu, která je dostupná kdekoliv a kdykoliv merchant s platformou interaguje — na desktopu, telefonu, hodinkách i uvnitř třetích aplikací (Klaviyo, Judge.me a další).
  zdroje:
    - title: "Shopify Editions Spring '26: Sidekick everywhere in Shopify app + Apple Watch"
      url: "https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick/set-up"
    - title: "Shopify Editions Spring '26 — Sidekick téma (hub)"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Sidekick je nyní dostupný na každé obrazovce mobilní Shopify aplikace (text i hlas) a nově i na Apple Watch pro rychlé dotazy na obchodní metriky."
tagy: [editions, sidekick, mobile, apple-watch, wearable]
zdroj_kanal: editions
---

## Co se mění

Shopify Editions Spring '26 přináší dvě změny ve způsobu přístupu k Sidekicku:

**Sidekick na každé obrazovce mobilní aplikace.** Dříve byl Sidekick v mobilní aplikaci dostupný pouze z dedikované sekce — merchant musel záměrně přejít na Sidekick tab, aby mohl položit dotaz nebo zadat příkaz. Nově je ikona Sidekicku persistentně přítomna napříč všemi obrazovkami aplikace: Orders, Analytics, Products a dalšími sekcemi. Vstup je dostupný jak přes text, tak přes hlas. Merchant tak může reagovat na kontext aktuální obrazovky bez přepínání — například rovnou u detailu objednávky se zeptat na historii zákazníka nebo požádat o doporučení dalšího kroku.

**Sidekick na Apple Watch.** Nová Apple Watch aplikace umožňuje klást hlasové dotazy na obchodní data přímo z hodinek. Typické use cases jsou rychlé přehledy: kolik přišlo objednávek dnes, jaké jsou aktuální tržby, existují nevyřízené fulfillment úkoly. Watch verze je záměrně read-only — nelze provádět změny v obchodu ani navigovat admin. Jde o rychlý informační kanál, nikoliv o plnohodnotný remote management.

Obě funkce jsou živé od 17. června 2026, kdy proběhl Editions Spring '26 launch.

## Časová osa

- **2026-06-17** — Editions Spring '26 announce; obě funkce označeny jako live

## Dopad pro nás

**Pro vývojáře:**
Žádný přímý technický dopad — obě funkce jsou first-party Shopify UX změny bez veřejného API nebo extension pointu. Apple Watch integrace ani rozšíření Sidekicku v mobilní aplikaci nevyžadují žádnou akci na straně vývojáře ani úpravu integračního kódu. Stojí za to sledovat, zda Shopify v budoucnu zpřístupní Sidekick App Extension API pro mobilní kontext (v tuto chvíli není veřejně dokumentováno).

**Pro PM / PO:**
Pro merchanty, kteří řídí obchod z mobilu nebo jsou hodně "on the go", je to viditelné zlepšení každodenní práce. Při onboardingu nebo review schůzkách s klienty lze upozornit, že Sidekick je nyní dostupný kdekoliv v mobilní aplikaci — snižuje to bariéru pro první použití. Apple Watch funkce je spíše demonstrační než produkčně kritická, ale pro tech-savvy merchanty je to zajímavý detail. Celkově jde o nízkou naléhavost — žádný klient nic neztrácí, pokud to hned nepoužije.

## Použití v Integrátoru

Sidekick je Shopify vlastní merchant-facing tool bez integration surface — pro náš Integrátor není přímý touch point, ale trendově ilustruje, jakým směrem Shopify posouvá produktivitu merchantů.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Sidekick](/Shopify_news_magexo/zmena/editions-spring-2026-sidekick/)
