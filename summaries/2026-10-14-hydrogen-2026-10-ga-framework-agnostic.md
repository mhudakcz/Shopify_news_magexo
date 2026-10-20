---
date: 2026-10-14
title: "🚀 Hydrogen 2026-10 GA — framework-agnostic JavaScript library (React Router, Next.js starters)"
title_en: "Hydrogen 2026-10 is now available"
slug: hydrogen-2026-10-ga-framework-agnostic
zdroj: https://shopify.dev/changelog/blog/hydrogen-2026-10-is-now-available
shrnuto_dne: 2026-10-20
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-14
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Hydrogen je po čtyřech měsících developer preview v GA a lze ho zapojit do existujícího JS stacku, takže se z feasibility prototypu stává produkční varianta pro každý headless storefront, který bychom nabízeli nebo stavěli."
dotcene_klienty: []
souvisejici: [hydrogen-any-stack-preview, hydrogen-dev-preview-update-sep-2, ai-toolkit-skills-consolidated-shopify]
tldr: "Hydrogen 2026-10 je obecně dostupný jako framework-agnostic JavaScript library pro libovolný JS framework, s ready-to-deploy starters pro React Router a Next.js, 20 skills pro coding agenty a WebMCP podporou; existující storefronty fungují dál bez akce."
tagy: [hydrogen, storefront, headless, framework-agnostic, react-router, nextjs, agent-skills, ga, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify technologie pro headless storefronty, tedy vlastní front-end obchodu napojený na Storefront API. Po většinu své historie byl pevně svázaný s jedním frameworkem (původně Remix, později React Router v7), takže volba Hydrogenu znamenala i volbu tohoto stacku. Na Editions Spring '26 (17. 6. 2026) Shopify ohlásil přepis jako framework-agnostic SDK a spustil developer preview s dvanácti skills pro coding agenty.

    Post z 14. 10. 2026 označuje Hydrogen 2026-10 za obecně dostupný (GA). Od června vyšlo sedm preview releasů založených na zpětné vazbě vývojářů. Hydrogen se nově chová jako knihovna pro commerce vrstvu: cart, varianty produktů, ceny v měně kupujícího, analytiku s respektem k souhlasu, Shop Pay a přihlášení zákazníků. Routing, data loading a rendering zůstávají na zvoleném frameworku, takže si tým ponechává plnou kontrolu nad designem i architekturou. Shopify dodává ready-to-deploy starters pro React Router a Next.js a jako referenci pro Next.js uvádí Vercel Shop, Hydrogen storefront spravovaný společností Vercel.

    Strategicky jde o posun od frameworku, který bylo nutné přijmout celý, ke knihovně, kterou lze přidat do existující aplikace bez replatformingu. Tím se mění i dosavadní otázka Hydrogen versus vlastní Next.js storefront: obě cesty se nově potkávají, protože Hydrogen může běžet jako commerce knihovna uvnitř Next.js. Součástí GA je 20 skills pro coding agenty (Claude, Cursor, Copilot), které žijí přímo v projektu a odpovídají nainstalované verzi Hydrogenu. Shopify uvádí, že existující Hydrogen storefronty fungují dál a akce není vyžadována; migrace je dobrovolná a vede ji migration skill.
  zdroje:
    - title: "Shopify: Hydrogen 2026-10 is now available"
      url: "https://shopify.dev/changelog/blog/hydrogen-2026-10-is-now-available"
    - title: "Shopify: All-new Hydrogen on any stack (developer preview)"
      url: "https://shopify.dev/docs/storefronts/headless/developer-preview"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Hydrogen je od 14. 10. 2026 v GA ve verzi **2026-10** a už není vázaný na jediný framework. Jde o **framework-agnostic JavaScript library**, kterou lze přidat do libovolné JS aplikace a získat Shopify commerce bez replatformingu. Hydrogen řeší commerce vrstvu: cart, product variants, collection filters, predictive search, Markets, analytiku s consent handlingem, Shop Pay a customer accounts. Routing, data loading a rendering zůstávají na frameworku, který už tým používá.

Shopify dodává **ready-to-deploy starters pro React Router a Next.js**. Hydrogen lze hostovat kdekoli, Oxygen zůstává zdarma a pro Next.js je k dispozici reference **Vercel Shop** (Hydrogen storefront spravovaný Vercelem). Zapojení do existujícího projektu probíhá příkazem `npx @shopify/hydrogen@latest setup`. Post uvádí příklad helperu `createCartComponents` pro živý počet položek v košíku v Reactu; pro Vue je k dispozici composable a ostatní frameworky se mohou na cart přihlásit přímo.

**Agent skills.** Hydrogen obsahuje **20 skills**, které učí coding agenty stavět jednotlivé části storefrontu (v preview jich bylo 12). Prompt typu Set up my store with Shopify vede k vytvoření stránek home, collection, search, product, cart a account, přidání analytiky a smoke testu výsledku. Skills jsou součástí projektu a odpovídají nainstalované verzi Hydrogenu; po upgradu je aktualizuje `npx @shopify/hydrogen skills sync`.

**WebMCP a shared cart contract.** V podporovaných prohlížečích mohou nakupující agenti prohledávat katalog a upravovat cart. Po potvrzení kupujícím může Shopify Checkout odeslat objednávku přes `complete_checkout`, bez další práce na straně storefrontu. Hydrogen používá stejné standard storefront actions jako Liquid témata (například `updateCart` na `window.Shopify.actions`), takže aplikace, storefront UI i agenti volají stejné cart akce.

**Migrace.** Existující Hydrogen storefronty fungují dál a Shopify neuvádí žádnou požadovanou akci. Až bude tým připraven, migration skill `migrate-to-hydrogen-2026-10` provede agenta přechodem: stránky a routy zůstávají, mění se zdroj commerce kódu.

## Časová osa

- **2026-06-17** — Editions Spring '26: spuštěn framework-agnostic Hydrogen developer preview (12 skills)
- **2026-06 až 2026-09** — sedm preview releasů (Vercel deploy, caching, Customer Account API, WebMCP, Vue bindings, cart attributes, variant links)
- **2026-10-14** — Hydrogen 2026-10 je GA, účinnost od 12:00 ET, starters pro React Router a Next.js, 20 skills
- **Bez termínu** — existující storefronty fungují dál; migrace na 2026-10 je dobrovolná

## Dopad pro nás

**Pro vývojáře:** GA odstraňuje hlavní výhradu vůči preview, tedy chybějící garanci stability a absenci customer accounts a predictive search. Pro nové headless projekty je nyní rozumné zvažovat Hydrogen jako commerce knihovnu uvnitř zvoleného frameworku, zejména Next.js, místo skládání vlastní integrace Storefront API. Pro existující Hydrogen projekty nehrozí breaking change, ale stojí za to projít migration skill a ověřit, kolik commerce kódu lze nahradit. Skills pro coding agenty (Claude Code, Cursor, Copilot) výrazně zkracují setup; po každém upgradu Hydrogenu je třeba spustit `skills sync`, aby agent nepracoval se zastaralými instrukcemi. Stojí za pozornost i WebMCP, které dává shopping agentům přístup ke katalogu a cartu bez další implementace.

**Pro PM / PO:** Jde o strategický milník pro headless Shopify. Hydrogen přestává být samostatná platforma, kterou je nutné přijmout celou, a stává se knihovnou, kterou lze přidat do stacku, jejž tým nebo zákazník už má. Tím se snižuje bariéra vstupu a mizí dilema Hydrogen versus vlastní Next.js, protože obě cesty lze zkombinovat. U poptávek po vlastním front-endu lze nově nabízet produkční variantu s oficiální podporou, ready-to-deploy startery a nižším rizikem než u skládání vlastního řešení. Je ale potřeba ověřit rozsah náhrady: headless zůstává dražší na vývoj a údržbu než Liquid téma, takže volba má smysl jen tam, kde obchod skutečně potřebuje vlastní UX nebo existující JS stack.

## Použití v Integrátoru

Hydrogen je front-endová technologie, takže se přímo nedotýká Admin API synchronizací; relevantní je pro projekty s headless storefrontem, kde GA mění jeho nabídku z experimentu na produkční variantu. Samotný přechod na Hydrogen 2026-10 u existujících storefrontů není vyžadován.

## ⬅️ Související

🔗 [All-new Hydrogen na libovolném stacku (developer preview)](/Shopify_news_magexo/zmena/hydrogen-any-stack-preview/)
🔗 [Hydrogen developer preview update — 2. 9. 2026](/Shopify_news_magexo/zmena/hydrogen-dev-preview-update-sep-2/)
🔗 [AI Toolkit skills konsolidovány pod jediný namespace shopify](/Shopify_news_magexo/zmena/ai-toolkit-skills-consolidated-shopify/)
