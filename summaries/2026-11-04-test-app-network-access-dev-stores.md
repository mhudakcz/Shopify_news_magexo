---
date: 2026-11-04
title: "Test app network access configuration na dev stores (preflight pro egress rules)"
title_en: "Test app network access configuration on dev stores"
slug: test-app-network-access-dev-stores
zdroj: https://shopify.dev/changelog/posts/test-app-network-access-configuration-on-dev-stores
shrnuto_dne: 2026-11-06
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše aplikace přidává na storefront skripty nebo odkazy na externí servery, můžeme si na dev store ověřit sekci network_access dřív, než ji uvidí merchanti."
dotcene_klienty: []
souvisejici: [securing-your-app-together-shopify, checkout-protection-unexpected-redirects, shopify-ai-toolkit-security-check]
tldr: "Dev store s feature preview network_access_testing ukáže varování při odkazech a požadavcích na hosty, které aplikace nemá uvedené v sekci network_access; nic neblokuje, jen varuje."
tagy: [security, network-access, dev-stores, shopify-cli, testing, egress]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify doporučuje, aby aplikace, které ze storefrontu odkazují na externí servery nebo je kontaktují, měly v konfiguraci aplikace vyplněnou sekci network_access. Seznam povolených hostů pomáhá předejít varováním při opuštění obchodu na webech merchantů a Shopify díky němu snáz rozpozná podezřelou aktivitu.
    Dosud bylo obtížné ověřit, zda je seznam úplný, protože chybějící host se projevil až u reálného merchanta. Novinka přidává feature preview network_access_testing, které lze zapnout při vytvoření dev store a které chování simuluje.
    Je důležité nepřeceňovat rozsah. Podle changelogu preview pouze upozorňuje a žádné požadavky ani navigaci neblokuje. Týká se hostů, na které odkazuje nebo se připojuje storefront, ne obecného serverového egressu aplikace. Podrobný postup je v dokumentaci Shopify s názvem Test network access configuration on a dev store.
  zdroje:
    - title: "Shopify: Test app network access configuration on dev stores"
      url: "https://shopify.dev/changelog/posts/test-app-network-access-configuration-on-dev-stores"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidal na dev stores feature preview `network_access_testing`. Pokud dev store vytvoříte s tímto preview, můžete ověřit, že hodnoty v sekci `[network_access]` konfigurace aplikace odpovídají skutečnosti.

Preview ukazuje dvě věci. Za prvé, odkazy na hosty, které nejsou v `allowed_navigation_hosts`, zobrazí varování při opuštění obchodu, takže lze zkontrolovat, že se varování objevuje tam, kde má, a u důvěryhodných hostů ne. Za druhé, konzole prohlížeče varuje, když storefront stránka načítá obsah z nebo posílá požadavky na server, který není v `allowed_sources`.

Důležité omezení: preview jen varuje, nic neblokuje. Changelog nezmiňuje žádné příkazy CLI a označuje změnu jako bez povinné akce.

## Časová osa

- 2026-11-04: oznámení a dostupnost feature preview na dev stores.
- Povinná akce: žádná. Shopify ale doporučuje, aby všechny dotčené aplikace tuto konfiguraci vyplnily.

## Dopad pro nás

**Pro vývojáře:** Pokud aplikace vkládá na storefront skripty, widgety nebo odkazy na externí domény, vytvořte si dev store s `network_access_testing` a projděte konzoli a navigaci. Nalezené hosty doplňte do `allowed_navigation_hosts` a `allowed_sources` v konfiguraci aplikace. Zkontrolujte i méně zjevné zdroje, například CDN, analytiku nebo API třetích stran volané z prohlížeče.

**Pro PM / PO:** Jde o nízkonákladové preventivní ověření bez rizika pro produkci. Doporučujeme zařadit ho do kontroly před vydáním u aplikací s frontendovou částí. Nejde o změnu, která by vyžadovala okamžitou akci.

## Použití v Integrátoru

Pokud Integrátor nebo související aplikace nevkládá na storefront nic externího, změna se ho netýká. Pokud ano, doporučujeme ověřit sekci `[network_access]` na dev store.
