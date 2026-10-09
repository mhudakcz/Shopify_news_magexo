---
date: 2026-10-07
title: "Customer Account API: nový per-customer rate limit"
title_en: "Per-customer request limit for the Customer Account API"
slug: customer-account-api-per-customer-rate-limit
zdroj: https://shopify.dev/changelog/posts/per-customer-request-limit-for-the-customer-account-api
shrnuto_dne: 2026-10-08
kategorie: [fyi, deprecation]
api_oblast: customer
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některý náš projekt volá Customer Account API (customer portál, headless storefront, vlastní account stránky), měl by umět zpracovat HTTP 429 a respektovat hlavičku Retry-After."
dotcene_klienty: []
souvisejici: [bots-agents-web-bot-auth, metafieldsset-dynamic-complexity-cost, built-for-shopify-returns-subscriptions-customer-account-api]
tldr: "Customer Account API od 7. 10. 2026 vynucuje limit 3000 requestů za minutu na jednoho zákazníka a obchod, sdílený všemi aplikacemi; po překročení vrací HTTP 429 s kódem THROTTLED a hlavičkou Retry-After."
tagy: [customer-account-api, rate-limit, throttling, abuse-prevention]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Customer Account API slouží k přístupu zákazníka k jeho vlastním datům – objednávkám, adresám, platebním metodám nebo údajům v profilu. Používají ho jak vlastní customer account stránky a headless storefronty, tak aplikace pro vratky, předplatné nebo věrnostní programy. Dosud byl provoz do této API omezován hlavně cost-based rate limitem, který se počítá podle složitosti dotazů.

    Shopify nově přidává druhou vrstvu ochrany: per-customer rate limit 3000 requestů za minutu na jednoho zákazníka v rámci jednoho obchodu. Limit je sdílený napříč všemi aplikacemi, které za daného zákazníka na daném obchodu API volají, a platí navíc k původnímu cost-based limitu. Po překročení API vrací HTTP status 429 Too Many Requests, chybový kód THROTTLED a hlavičku Retry-After s informací, jak dlouho počkat.

    Shopify změnu nepovažuje za action required a upozorňuje, že běžný provoz zákazníka zůstává hluboko pod limitem – 3000 requestů za minutu odpovídá zhruba 50 requestům za sekundu. Limit proto míří spíš na extrémní scénáře: neřízené smyčky, paralelní načítání velkého množství dat nebo zneužití jednoho zákaznického účtu. Konkrétní API verze, od které by limit platil, changelog neuvádí – podle všeho se vynucuje na úrovni platformy bez ohledu na verzi.
  zdroje:
    - title: "Shopify: Per-customer request limit for the Customer Account API"
      url: "https://shopify.dev/changelog/posts/per-customer-request-limit-for-the-customer-account-api"
    - title: "Shopify: Customer Account API rate limits"
      url: "https://shopify.dev/docs/api/customer/latest#rate-limits"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Customer Account API nově vynucuje per-customer rate limit ve výši 3000 requestů za minutu na jednoho zákazníka a obchod. Limit je sdílený napříč všemi aplikacemi, které API za daného zákazníka na daném obchodu volají, takže si o rozpočet dělí například vlastní headless frontend a nainstalovaná aplikace pro vratky nebo předplatné.

Nový limit se uplatňuje navíc k existujícímu cost-based rate limitu – požadavek tedy musí projít oběma. Po překročení per-customer limitu API vrací:

- HTTP status `429 Too Many Requests`
- chybový kód `THROTTLED`
- hlavičku `Retry-After` s dobou, po kterou je potřeba počkat

Shopify změnu neoznačuje jako action required a uvádí, že běžný buyer provoz zůstává hluboko pod limitem. Doporučení se týká retry logiky: aplikace má rozpoznat HTTP 429, přečíst `Retry-After`, počkat uvedenou dobu a požadavek zopakovat.

Poznámka ke kategorizaci: i když je položka vedená mezi `deprecation`, nejde o odstranění žádné funkce – je to nové omezení provozu. Dosavadní chování se mění jen tam, kde by jeden zákazník generoval víc než 3000 requestů za minutu.

## Časová osa

- **2026-10-06** – changelog vytvořen
- **2026-10-07** – zveřejnění changelogu a účinnost limitu
- Konkrétní API verze, od které by limit platil, není uvedena

## Dopad pro nás

**Pro vývojáře:** U běžných storefront a account flow se nic měnit nemusí, ale u všeho, co volá Customer Account API ve větším objemu za jednoho zákazníka, je vhodné ověřit tři věci:

- **Retry logika** – detekovat HTTP 429 / kód `THROTTLED`, číst `Retry-After` a čekat přesně tak dlouho; ne fixní krátký backoff ani okamžitý retry, který by limit jen dál zahlcoval.
- **Fronta a omezení souběžnosti** – flow jako refresh customer portálu nebo načítání celé historie objednávek by neměly spouštět desítky paralelních dotazů najednou; lepší je dávkovat nebo řadit requesty do fronty.
- **Sdílený rozpočet** – protože je limit společný pro všechny aplikace na daném obchodu, nelze počítat s tím, že máme celých 3000 requestů pro sebe; je vhodné šetřit requesty (slučovat dotazy do jednoho GraphQL požadavku, cachovat data, která se nemění).

U headless storefrontů stojí za to hlídat i chování frontendu při chybě: uživatel by při THROTTLED neměl vidět rozbitou stránku, ale rozumný stav načítání nebo opakování.

**Pro PM / PO:** Střední naléhavost – nejde o breaking change a Shopify nežádá žádnou akci, ale limit je v platnosti už od 7. 10. 2026. Reálné riziko je u projektů s vlastním customer portálem nebo headless account stránkami, kde by chybějící retry logika mohla při špičce nebo chybě v kódu vést k chybějícím datům v UI. Vhodné je zařadit kontrolu retry/queueing logiky do nejbližší úpravy příslušného modulu, ne jako samostatný urgentní úkol.

## Použití v Integrátoru

Pokud některý náš projekt volá Customer Account API ve větším objemu (customer portál, headless account stránky, hromadné načítání historie objednávek), je potřeba ověřit, že umí zpracovat HTTP 429 a respektovat `Retry-After`. Pro projekty bez těchto flow se nic nemění.
