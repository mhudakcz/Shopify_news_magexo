---
date: 2026-10-27
title: "shopify.app.toml: sekce network_access — deklarace navigačních hostů a povolených zdrojů"
title_en: "Secure your app with network access rules in shopify.app.toml"
slug: network-access-rules-shopify-app-toml
zdroj: https://shopify.dev/changelog/posts/secure-your-app-with-network-access-hosts-in-shopify-app-toml
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímou závislost nemáme potvrzenou, ale každá app nebo extension, která ze storefrontu, checkoutu či adminu načítá kód z vlastního CDN nebo volá vlastní API, může svoje originy nově deklarovat v shopify.app.toml."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, securing-your-app-together-shopify, checkout-protection-unexpected-redirects, shopify-ai-toolkit-security-check]
tldr: "Shopify přidal do shopify.app.toml sekci network_access: allowed_navigation_hosts (až 20 externích webů, na které app odkazuje, a Shopify u nich nezobrazí varování před odchodem) a allowed_sources (až 20 HTTPS originů, odkud app kód ve storefrontu, checkoutu a adminu načítá data nebo kam posílá požadavky). Žádná akce není povinná, ale Shopify deklaraci všem apps důrazně doporučuje."
tagy: [security, shopify-cli, app-toml, network-access, egress, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify 27. října 2026 v dev changelogu (štítky Platform a New) oznámil novou sekci `[network_access]` v souboru `shopify.app.toml`, tedy v konfiguraci aplikace, kterou spravuje Shopify CLI. Vývojář v ní deklaruje dvě věci. Za prvé `allowed_navigation_hosts`, tedy externí weby, na které app z obchodu odkazuje (typicky vlastní doména vývojáře). Za druhé `allowed_sources`, tedy HTTPS originy, ze kterých kód aplikace na storefrontu, v checkoutu a v administraci Shopify načítá obsah nebo na které posílá požadavky. Do této kategorie patří extensions, App Home i stránky přes app proxy. Každý seznam má limit 20 položek. Konfigurace se aplikuje příkazem `shopify app deploy` a vydáním nové verze.

    Je důležité nezaměnit to s omezením odchozích volání z backendu aplikace. Podle changelogu jde o originy, se kterými komunikuje kód aplikace běžící v prohlížeči kupujícího nebo merchanta, ne o serverový provoz mezi backendem aplikace a Shopify nebo třetími stranami. Post také výslovně neříká, co se stane s hostem nebo zdrojem, který deklarovaný není. Popisuje jen dva efekty: odkazy na hosty z `allowed_navigation_hosts` nespustí varování před odchodem z Shopify a seznam `allowed_sources` Shopify využívá k ochraně aplikace a ke sledování storefrontů kvůli škodlivým požadavkům. Tvrzení o blokování nedeklarovaných volání v changelogu nenajdeme.

    Změna zapadá do bezpečnostní linie posledních týdnů. Blog Securing your app, together z 20. října 2026 slíbil přísnější hranice pro storefront kód aplikací a řekl, že detaily i termíny Shopify sdělí dopředu. Ve stejný den Shopify spustil potvrzovací zprávu před odchodem z Online Store na externí web. Network access rules vypadají jako první konkrétní nástroj, kterým vývojář může svůj obchodní kontext Shopify sdělit sám. Propojení s ochranou proti unexpected redirects a s připravovanými hranicemi storefront kódu je ale náš výklad, changelog ho přímo nepotvrzuje. Přehled Editions Fall '26 pro Developery z 28. října tuto položku jmenovitě neuvádí, jen obecně zdůrazňuje zpřísňování ekosystému. Pro merchanty je dopad nepřímý: apps, které deklarují svoje originy, budou mít méně falešných varování a Shopify jim bude lépe rozumět.
  zdroje:
    - title: "Shopify: Secure your app with network access rules in shopify.app.toml"
      url: "https://shopify.dev/changelog/posts/secure-your-app-with-network-access-hosts-in-shopify-app-toml"
    - title: "Shopify Docs: App configuration — network_access"
      url: "https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#network_access"
    - title: "Shopify Docs: Declare network access (storefront security)"
      url: "https://shopify.dev/docs/apps/build/security/storefront/declare-network-access"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Securing your app, together — Shopify blog o bezpečnosti aplikací"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/securing-your-app-together-shopify/"
    - title: "Archiv: Online Store, potvrzení před odchodem na externí web"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/checkout-protection-unexpected-redirects/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

V `shopify.app.toml` přibyla nová sekce `[network_access]`, ve které app deklaruje, s jakými externími adresami její kód pracuje. Syntaxe z changelogu:

```toml
[network_access]
allowed_navigation_hosts = ["app.example.com"]
allowed_sources = ["https://api.app.example.com"]
```

**Dvě vlastnosti:**

- **`allowed_navigation_hosts`** (limit 20): externí weby, na které app odkazuje ze storefrontu, například vlastní doména vývojáře. Každý host musí přesně odpovídat odkazům, které app používá. Pro odkazy na deklarované hosty Shopify nezobrazí své obvyklé varování, když kupující opouští Shopify.
- **`allowed_sources`** (limit 20): HTTPS originy, ze kterých kód aplikace načítá obsah nebo na které posílá požadavky na storefrontu, v checkoutu a v administraci Shopify. Týká se extensions, App Home a stránek přes app proxy. Shopify tento seznam používá k ochraně aplikace a ke sledování storefrontů kvůli škodlivým požadavkům.

**Co changelog neříká:** nepopisuje, co se stane s požadavkem na origin, který v seznamu není. Slovo blokování ani vynucení v něm nepadá. Neuvádí ani žádný termín, od kdy by deklarace byla povinná. Značka u položky je New a post výslovně říká, že žádná akce není vyžadována, přitom ale všem apps deklaraci důrazně doporučuje.

**Doporučený postup podle Shopify:**

1. Do `allowed_navigation_hosts` přidat weby, na které app odkazuje zákazníky.
2. Do `allowed_sources` přidat servery, ze kterých app načítá obsah nebo na které posílá požadavky (například API nebo CDN).
3. Spustit `shopify app deploy` a vydat novou verzi.

**Pozor na přesnost zadání:** nejde o allowlist odchozího provozu z backendu aplikace. Sekce se týká kódu, který běží na storefrontu, v checkoutu a v adminu, tedy v prohlížeči. Serverová volání mezi backendem aplikace a jinými systémy touto konfigurací podle changelogu neřídíme.

## Časová osa

- **2026-10-20:** blog Securing your app, together slibuje přísnější hranice pro storefront kód aplikací; ve stejný den Shopify spouští potvrzovací zprávu před odchodem z Online Store na externí web.
- **2026-10-27 (12:00 ET):** publikace changelogu, sekce `[network_access]` je k dispozici (účinnost vedeme od data publikace).
- **2026-10-28:** Editions Fall '26, téma Developer, s obecným důrazem na zabezpečení ekosystému. Network access rules tam nejsou jmenovitě.
- **Deadline:** žádný. Povinná akce ani datum vynucení nejsou uvedeny.

## Dopad pro nás

**Pro vývojáře:** Jde o malou, nízkorizikovou úpravu `shopify.app.toml`, kterou má smysl udělat u každé app, kterou spravujeme. Praktický postup: projít extensions, App Home a app proxy stránky a sepsat všechny originy, ze kterých se načítá kód nebo na které míří fetch (vlastní API, CDN, analytika, fonty, platební nebo jiné třetí strany) a zvlášť všechny externí domény v odkazech. Počítejte s limitem 20 položek v každém seznamu, takže app s mnoha různými originy bude muset seznam zkonsolidovat, například přes jednu vlastní doménu nebo proxy. Host v `allowed_navigation_hosts` musí odpovídat odkazům přesně, takže subdomény a varianty `www` je potřeba vyjmenovat. Protože changelog nepopisuje chování pro nedeklarované originy, doporučujeme po nasazení otestovat na vývojářském obchodě, že storefront, checkout i admin fungují jako dřív. Je rozumné počítat s tím, že Shopify seznam později využije přísněji (blog z 20. října hranice pro storefront kód slibuje), ale je to náš odhad, ne informace ze zdroje.

**Pro PM / PO:** Nejde o povinnou migraci ani o termín s dopadem na provoz, proto střední naléhavost a žádný deadline. Doporučujeme zařadit krátký úkol do bezpečnostního backlogu k tomu, co plyne z bloku Securing your app, together a z dřívějšího security checku: inventura originů a odkazů, deklarace v `shopify.app.toml`, nasazení a ověření. Pro apps, které chceme mít v Shopify App Store nebo jim chceme dát lepší bezpečnostní profil, je deklarace levný signál, že vývojář svůj síťový kontext zná. Pro merchanty je přínos nepřímý, protože odkazy z app na vlastní doménu vývojáře nebudou zbytečně spouštět varování před odchodem z obchodu.

## Použití v Integrátoru

U našich apps a extensions, které ze storefrontu, checkoutu nebo adminu načítají kód či data z vlastních serverů, stojí za to originy a odkazované domény do `shopify.app.toml` doplnit a po nasazení krátce ověřit funkčnost na vývojářském obchodě. Serverová komunikace backendu s Shopify a třetími stranami se tím nemění.
