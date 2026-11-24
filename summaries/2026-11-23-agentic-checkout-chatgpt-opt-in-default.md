---
date: 2026-11-23
title: "Agentic checkout v ChatGPT: Shopify zapíná automaticky eligible storům"
title_en: "Manage agentic checkout for ChatGPT"
slug: agentic-checkout-chatgpt-opt-in-default
zdroj: https://changelog.shopify.com/posts/manage-whether-ai-agents-can-buy-your-products-for-shoppers-through-chatgpt
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost, ai]
api_oblast: other
nalehavost: vysoka
customer_facing: true
ucinnost_od: 2026-11-23
pouzivame_v_integratoru: ne
dukaz_integratoru: "Nastavení probíhá přímo v Shopify Adminu pod ChatGPT settings → Agentic Storefronts; integrátor do toho nezasahuje."
dotcene_klienty: []
souvisejici: [editions-fall-2026-agentic, ucp-ask-endpoint-business-facts, storefront-mcp-cart-tools-deprecated-ucp]
tldr: "Shopify přejmenoval „direct checkout“ na „agentic checkout“ a pustil ho pro ChatGPT — u eligible storů s „Manage for me“ nebo „Automatically enable new channels“ je zapnutý by default a vypíná se v Agentic Storefronts."
tagy: [agentic, chatgpt, checkout, ai-agents, commerce, direct-checkout]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Agentic checkout (dříve „direct checkout") umožňuje AI agentovi, v tomto případě ChatGPT, dokončit nákup za zákazníka přímo v konverzaci, bez přechodu na e-shop. Agent vyhledá produkt, zákazník v chatu potvrdí objednávku a ta se založí v Shopify obchodě stejně jako běžná objednávka. Technicky navazuje na Universal Commerce Protocol (UCP) a na obchodní integrace ChatGPT. Pro obchodníka to znamená nový prodejní kanál s minimem tření, ale zároveň menší kontrolu nad zážitkem, brandingem a cross-sellem, které jinak nabízí vlastní storefront. Proto Shopify ponechává možnost opt-outu. Novinka zapadá do Editions Fall 2026, jejichž hlavním tématem je agentní commerce.
  zdroje:
    - title: "Shopify: Manage whether AI agents can buy your products for shoppers through ChatGPT"
      url: "https://changelog.shopify.com/posts/manage-whether-ai-agents-can-buy-your-products-for-shoppers-through-chatgpt"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

**Je to velká customer-facing novinka:** Shopify může u vašich klientů od 23. 11. 2026 automaticky umožnit nákupy přes AI agenta, aniž by o to někdo žádal.

Funkce dříve známá jako „direct checkout" se přejmenovává na **„agentic checkout"** a je nově dostupná pro **ChatGPT**. Zákazník tak může v ChatGPT najít produkt a koupit ho přímo v chatu, zatímco objednávka vznikne v Shopify obchodě.

Klíčová je výchozí konfigurace. Agentic checkout je **zapnutý by default** u eligible storů, které mají aktivní volbu **„Manage for me"** nebo **„Automatically enable new channels"**. Merchant tedy nemusí nic nastavovat, a přesto se jeho produkty mohou začít prodávat přes ChatGPT.

Existující opt-outs zůstávají v platnosti. Obchod, který se dříve rozhodl pro vypnutí, tedy změna nezasáhne.

Vypnout agentic checkout lze v nastavení ChatGPT pod položkou **„Agentic Storefronts"** v Shopify Adminu.

## Dopad pro nás

**Pro PM / PO:**
- S klienty je potřeba projít, zda jsou jejich obchody „eligible" a zda mají zapnuté „Manage for me" nebo „Automatically enable new channels". Právě tam se agentic checkout aktivuje sám.
- Je vhodné se klientů aktivně zeptat, zda chtějí prodávat přes AI agenta. Pro část brandů je to nová příležitost k tržbám, pro jiné může být problém, že zákazník nevidí vlastní web, upsell ani brandovanou zkušenost.
- Komunikačně doporučujeme informovat klienty dříve, než si změny všimnou sami, zejména ty, kteří mají přísná pravidla pro cenotvorbu, dostupnost nebo prezentaci značky.
- Souvisí s tématem agentního commerce z Editions Fall 2026, takže lze očekávat další podobné kroky.

**Pro vývojáře:** Zatím bez vývojové práce. Nastavení probíhá přímo v Shopify Adminu a nevyžaduje zásah do kódu ani integrací. Doporučujeme jen sledovat, jak se agentní objednávky projevují v datech objednávek (zdroj, kanál), kdyby je bylo třeba odlišit v reportingu.

## Použití v Integrátoru

Ne. Agentic checkout se nastavuje přímo v Shopify Adminu (ChatGPT settings → Agentic Storefronts) a Integrátor do toho nezasahuje.
