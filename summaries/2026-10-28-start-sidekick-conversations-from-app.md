---
date: 2026-10-28
title: "Start Sidekick conversation z vlastní app (Sidekick Launch API s předvyplněným promptem)"
title_en: "Start Sidekick conversations from your app"
slug: start-sidekick-conversations-from-app
zdroj: https://shopify.dev/changelog/posts/start-sidekick-conversations-from-your-app
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se jen případu, kdy bychom pro projekt stavěli vlastní embedded app s reporty nebo analytikou a chtěli merchantovi nabídnout tlačítko Ask Sidekick; synchronizačních toků se netýká."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-sidekick", "sidekick-invoke-app-intents-without-tools", "sidekick-app-extensions-third-party", "sidekick-floating-chat-admin-home"]
tldr: "Embedded app může přes App Bridge metodu shopify.sidekick.launch otevřít v adminu Sidekicka s předvyplněnou zprávou, kterou Sidekick přijme jako zprávu merchanta (typicky tlačítko Ask Sidekick u reportu). Nejde o deep link a nelze předat skrytý kontext: vše musí být v textu zprávy do 5 500 znaků."
tagy: [sidekick, apps, app-bridge, launch-api, agentic, developer]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Od Editions Spring '26 ho mohou třetí aplikace rozšiřovat přes Sidekick app extensions, takže merchant z konverzace dotazuje data nebo spouští akce v aplikacích. Směr byl dosud jednosměrný: konverzaci začínal merchant v Sidekickovi a Sidekick si případně vyvolal aplikaci. Aplikace sama Sidekicka otevřít nemohla.

    Změna z 28. října 2026 přidává opačný směr. Embedded aplikace v adminu může přes App Bridge zavolat metodu shopify.sidekick.launch s textem zprávy, otevřít panel Sidekicka a odeslat tu zprávu jako zprávu merchanta. Changelog sám je stručný (označený jako New, dotčené API App Bridge, bez nutné akce) a jako příklad uvádí tlačítko Ask Sidekick vedle reportu. Podrobnosti o omezeních, chybách a chování jsou až v dokumentaci Sidekick API v App Home, ze které tento záznam vychází. Změna vyšla v den Editions Fall '26, v archivním přehledu tématu Sidekick ale mezi jeho 12 položkami není.

    Pro merchanty jde o kontextovou pomoc bez opuštění aplikace: místo hledání nápovědy nebo vlastního chatbota v aplikaci se rovnou otevře Sidekick s konkrétním dotazem. Pro vývojáře je to nová vstupní brána do Sidekicka, ale s přísnými hranicemi. Zpráva se kontroluje, spuštění je omezené počtem volání a konverzace smí používat jen nástroje vlastní aplikace ze Sidekick app extensions. Dokumentace nezmiňuje, jestli musí extension existovat, aby volání uspělo, a neuvádí potřebné scopes ani konkrétní limity.
  zdroje:
    - title: "Shopify: Start Sidekick conversations from your app"
      url: "https://shopify.dev/changelog/posts/start-sidekick-conversations-from-your-app"
    - title: "Shopify Dev Docs: Sidekick Launch API (App Home)"
      url: "https://shopify.dev/docs/api/app-home/latest/apis/user-interface-and-interactions/sidekick-api"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Embedded aplikace běžící ve webovém Shopify adminu může nově spustit konverzaci se Sidekickem pomocí `shopify.sidekick.launch({ message })`. Metoda otevře panel Sidekicka a odešle `message` jako zprávu merchanta. Zkrácený zápis `launch('text')` je ekvivalentní. Metoda vrací `Promise` s `id` nové konverzace. Typický příklad z changelogu je tlačítko Ask Sidekick vedle reportu: merchant se dívá na metriku, klikne a Sidekick dostane otázku k té konkrétní metrice.

Rozhraní má i pomocné části. `isEnabled()` a `isOpen()` vrací, zda je Sidekick dostupný a otevřený, `open()` panel otevře bez nové zprávy a událost `shopify:sidekick:visibilitychange` na `window` hlásí otevření a zavření. Metoda pro zavření neexistuje, o zavření Sidekicka rozhoduje merchant.

Důležitější než samotné volání jsou hranice. Z dokumentace plyne:

- **Žádný deep link a žádný skrytý kontext.** Parametr je jediný, `message`, povinný a po ořezání mezer neprázdný, nejvýše 5 500 znaků. Další pole se ignorují bez chyby. Skryté instrukce, scénář, ID konverzace ani features se nepodporují. Veškerý kontext (která metrika, jaké období) proto musí být v textu zprávy, který merchant vidí.
- **Kontrola promptu.** Zpráva se před odesláním prověřuje, kontrola při selhání odmítne (fails closed), přidává latenci a může spuštění zamítnout. Povolené jsou dotazy, čtení, shrnutí, návrhy textů a opravy obsahu u pojmenovaných zdrojů a změny uvnitř vlastní aplikace. Odmítnuty jsou prompty s URL nebo odkazy, pokusy řídit Sidekicka, sběr dat, rizikové změny obchodu a akce napříč aplikacemi.
- **Jen vlastní nástroje.** Spuštěná konverzace smí používat pouze nástroje vaší aplikace ze Sidekick app extensions, ne nástroje jiných aplikací. Pokud merchant aplikaci ve Sidekickovi vypnul, volání se zamítne.
- **Omezení počtu.** Spuštění je limitované podle merchanta, podle aplikace i napříč aplikacemi. Konkrétní čísla dokumentace neuvádí. Volat se má jen jako odpověď na akci merchanta (klik), ne při načtení stránky ani na časovač.
- **Změny v obchodě.** Sidekick u konverzace zobrazuje, že ji spustila aplikace. Změny v obchodě navrhne a provede až poté, co o ně merchant požádá vlastní zprávou.
- **Dostupnost.** Funguje v embedded aplikacích ve webovém adminu, které načítají App Bridge z `cdn.shopify.com/shopifycloud/app-bridge.js`. V mobilní aplikaci Shopify zatím ne. Balíček `@shopify/app-bridge-types` zatím `shopify.sidekick` neobsahuje, takže v TypeScriptu bude potřeba vlastní deklarace.

Ilustrační zjednodušený příklad podle dokumentace:

```js
if (await shopify.sidekick.isEnabled().catch(() => false)) {
  button.addEventListener('click', async () => {
    try {
      const { id } = await shopify.sidekick.launch(
        'Why did the conversion rate drop last week in this report?'
      );
    } catch (error) {
      // chyby s prefixem sidekick.launch: nastaly před odesláním zprávy
    }
  });
}
```

Chyby s prefixem `sidekick.launch:` (prázdná nebo příliš dlouhá zpráva, aplikace vypnutá ve Sidekickovi, zamítnutí kontrolou, nedostupnost kvůli údržbě) nastávají dřív, než Shopify cokoli odešle. Chyby bez prefixu mohou nastat až po odeslání, takže se podle dokumentace nemají automaticky opakovat.

## Časová osa

- **28. 10. 2026** — changelog zveřejněn (flag New, dotčené API App Bridge, bez nutné akce); účinnost od stejného dne. Vyšlo v den Editions Fall '26.
- **Verze API a minimální verze App Bridge** — changelog ani dokumentace je neuvádějí.
- **Mobilní aplikace Shopify** — zatím nepodporována, termín podpory není uveden.

## Dopad pro nás

**Pro vývojáře:** Nejde o breaking change a nic se samo nemění, je to nový volitelný povrch. Praktické body při případném použití: volat metodu jen z klikacího prvku, před zobrazením tlačítka ověřit `isEnabled()` (objekt `shopify.sidekick` může existovat i tam, kde API nefunguje), ošetřit chyby s prefixem `sidekick.launch:` a nevolat znovu automaticky u chyb bez prefixu. Kontext je nutné vkládat přímo do textu zprávy, a to bez URL a v mezích 5 500 znaků, a prompt psát jako přirozenou otázku merchanta, protože je odeslán jeho jménem a prochází kontrolou. Nezodpovězené zůstává, zda musí mít aplikace Sidekick app extension, aby volání uspělo, jaké scopes jsou potřeba a jaké jsou přesné limity počtu spuštění. To je potřeba ověřit na vývojovém obchodě.

**Pro PM / PO:** Vzor předání je jasný: aplikace dodá specializovanou funkci (report, analýzu, workflow) a pro konverzační vysvětlení nebo doptání předá merchanta Sidekickovi s připravenou otázkou. Pro projekty, kde stavíme nebo plánujeme vlastní embedded aplikaci, to může nahradit vlastní chatbot nebo rozsáhlou nápovědu. Při plánování je ale nutné počítat s omezeními: funguje jen ve webovém adminu, ne v mobilní aplikaci, závisí na tom, že je Sidekick u obchodu dostupný a merchant aplikaci ve Sidekickovi nevypnul, a zpráva může být zamítnuta kontrolou. Shopify změnu označuje jako bez nutné akce. Střední nalehavost proto odráží hodnotu pro plánování nových aplikací a navazuje na dřívější zpřístupnění aplikací Sidekickovi, ne na termín.

## Použití v Integrátoru

Netýká se integračního API ani synchronizačních toků. Relevantní je jen u projektů, kde bychom pro merchanta stavěli vlastní embedded aplikaci s reporty nebo analytikou a chtěli v ní nabídnout kontextovou pomoc přes Sidekicka.
