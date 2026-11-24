---
date: 2026-11-17
title: "Sidekick umí analyzovat metafields a metaobjects (pouze s „Filter / group data“)"
title_en: "Analyze your metafields and metaobjects with Sidekick"
slug: sidekick-metafields-metaobjects-analytics
zdroj: https://changelog.shopify.com/posts/analyze-your-metafields-and-metaobjects-with-sidekick
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost, ai]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše metafields a metaobjects u klientů mají správně nastavený „Filter / group data“, získává Sidekick další kontext pro analytické dotazy."
dotcene_klienty: []
souvisejici: []
tldr: "Sidekick teď umí ve svých analytických odpovědích pracovat s metafields a metaobjects (fabric, dodavatel, designer…) — ale jen s těmi, u kterých je zapnutý „Filter“ nebo „group data“."
tagy: [sidekick, ai, metafields, metaobjects, analytics, admin]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Sidekick je AI asistent přímo v Shopify Adminu, který merchantům odpovídá na dotazy k obchodu, dělá analýzy a pomáhá s nastavením. Metafields jsou vlastní datová pole u produktů, objednávek či zákazníků (například materiál nebo dodavatel), metaobjects jsou samostatné strukturované záznamy, na které lze odkazovat (například designer). Sidekick je nově využívá při analytických odpovědích, takže merchant může třeba porovnat prodeje podle materiálu nebo dodavatele bez ručního skládání reportů. Podmínkou je, že dané metafield má zapnutou volbu „Filter" nebo „group data"; ostatní pole Sidekick nevidí. Některé typy polí a reporty zatím nejsou podporované.
  zdroje:
    - title: "Shopify: Analyze your metafields and metaobjects with Sidekick"
      url: "https://changelog.shopify.com/posts/analyze-your-metafields-and-metaobjects-with-sidekick"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Sidekick teď může ve svých analytických odpovědích využívat store metafields a metaobjects, například údaje o materiálu, dodavateli nebo propojeném designerovi. Merchant se tak může ptát na data, která jsou uložená ve vlastních polích, a nemusí je složitě exportovat nebo skládat v reportech.

Podmínka: využitelná jsou pouze ta metafields, která mají zapnutou volbu „Filter" nebo „group data". Pole bez tohoto nastavení Sidekick v analýzách nepoužije. Některé typy polí a některé reporty zatím podporované nejsou.

## Dopad pro nás

**Pro PM / PO:** Při konzultacích s klienty, kteří Sidekick používají, doporučujeme projít nastavení metafields a tam, kde to dává smysl (materiál, dodavatel, značka, kolekce), zapnout „Filter / group data". Klient díky tomu získá z analytických dotazů víc. Jde o drobnou přidanou hodnotu, kterou lze zmínit při běžném review obchodu.

**Pro vývojáře:** Žádný vývoj, jde čistě o konfiguraci v Adminu. Při zakládání nových metafield definic přes API nebo v rámci implementace stojí za to pamatovat na to, že zapnutí filtrování / seskupování ovlivňuje i využitelnost v Sidekicku.

## Použití v Integrátoru

Přímé použití v Integrátoru neexistuje. Změna obohacuje AI vrstvu, kterou klienti využívají přímo v Shopify Adminu. Nepřímo ale platí, že metafields a metaobjects, které Integrátor synchronizuje, budou pro Sidekick užitečnější, pokud mají správně nastavené „Filter / group data".
