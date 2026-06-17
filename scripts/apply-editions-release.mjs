#!/usr/bin/env node
// One-off script: apply `editions_release: spring-2026` to articles in cross-ref list.
// Inserts line after `zdroj_kanal:` line. Skips files that already have the field.

import fs from 'node:fs';
import path from 'node:path';

const SLUGS = [
  "multi-currency-payout-expansion","local-payment-methods-more-countries","shopify-tax-canada",
  "clearer-payout-balance-shopify-payments","refreshed-signin-page-customer-accounts",
  "cumulative-metrics-analytics","sms-marketing-automations-messaging",
  "multiple-legal-entities-shopify-payments","flow-test-events-existing-data",
  "balance-app-new-look","italy-sardinian-provinces-update",
  "unified-branding-checkout-customer-accounts","simpler-inventory-transfers",
  "print-packing-slips-inventory-transfers","agentic-storefronts-admin-page",
  "multi-currency-gift-cards","flow-shopifyql-action","marketing-consent-account-component",
  "benchmark-comparisons-analytics-removed","publish-unpublish-variants-independently",
  "inventory-adjustment-full-change-tracking","target-discounts-specific-markets",
  "annotations-analytics-events","flow-workflow-version-history-rollback",
  "apply-discounts-refund-page","mark-fulfillments-delivered-without-tracking",
  "track-inventory-locations-without-fulfillment","flow-triggers-inventory-transfer",
  "scannable-discount-codes-qr","app-uninstall-reasons-update",
  "new-app-submission-experience-partner-dashboard","mostrelevant-collectionsortorder",
  "hydrogen-april-2026-release","shopify-scripts-deprecated-june-2026",
  "ui-extensions-tester","shopify-ai-toolkit","actionbar-removed-mobile-titlebar",
  "draftorderlineitem-grams-removed","checkout-blocks-order-value-limits-all-plans",
  "customers-default-addresses-checkout","lineitem-weight-public-admin-api",
  "mtls-payments-cert-renewal","search-filter-saved-views-orders-products",
  "add-tags-to-discounts","cart-checkout-validation-billing-po",
  "delegateaccesstoken-expiresin","deprecation-checkout-metafields",
  "multi-channel-sales-channel-apps","payment-method-identifier-required",
  "prerequisites-product-discount-functions","removing-outdated-polaris-docs",
  "subscription-contracts-without-payment-methods","b2b-for-all-merchants",
  "cash-management-foundations-pos","updates-is-now-posts-shop-feed",
  "capital-remittance-shopify-payments-us","see-which-apps-use-extensions-functions",
  "product-bundles-draft-order-customer-account","visual-updates-checkout-blocks",
  "rollouts-storefront-changes","create-pickup-orders-pos","rbac-org-management-partners",
  "tax-inclusive-countries-update","shipping-options-setup-updates",
  "customer-data-erasure-recent-orders","shopify-cli-force-flag-deprecated",
  "barcode-inventory-shipments","pretax-price-removed-rest","quick-sale-every-country",
  "flow-more-fields-admin-api","flow-new-actions-get-data",
  "shipping-delivery-settings-redesign","capital-launches-france",
  "customize-shop-product-pages-blocks","redesigned-theme-editor-navigation",
  "faster-discount-entry-pos","credit-remittances-shopify-payments-texas",
  "flow-actions-markets-articles","checkout-customer-account-extensions-dev-shops",
  "marketing-consent-customer-signin","isactive-field-inventorylevel",
  "includeinactive-arg-inventorylevels","inventorytransferdelete-invalid-state",
  "sync-customer-data-identity-provider","pos-ui-extensions-offline",
  "retail-cash-management-capabilities","shipping-quick-sale",
  "sign-in-shop-lead-forms","storefront-filter-urls-stable-identifiers",
  "customize-checkout-accounts-by-market","pos-smart-grid-discount-tiles",
  "track-app-activity-permissions","returns-metrics-renamed-reversals",
  "track-discounts-marketing-campaigns","fielddefinitions-optional-metaobject-create",
  "metaobject-access-shopify-functions","storefront-cart-discount-fields",
  "app-listing-image-standards","address-autocomplete-validation-improvements",
  "admin-intents-settings","customize-themes-per-market","expiring-offline-tokens-required",
  "createdat-updatedat-metaobject-definition","inventorysetscheduledchanges-removed",
  "line-items-visual-hierarchy","flow-document-workflows-notes",
  "pickup-multiple-locations-transfer","identifier-support-productupdate",
  "simgym-ai-research-preview","shop-minis-march-april-update",
  "marketing-automations-moving","shopify-catalog-for-all",
  "agentic-commerce-build-commerce-agents","erp-systems-integration-b2b",
  "2048-variants-per-product","compare-at-prices-catalogs","combine-bundle-options",
  "single-view-analytics-multi-store","bin-locations-order-printer","pickup-in-store-b2b",
  "klarna-more-countries","more-order-filtering-capabilities","checkout-kit-for-web",
  "edi-workflows-crstl-sps","store-credit-b2b","dynamic-payment-terms-deposits-b2b",
  "ach-payments-b2b","comprehensive-inventory-history","rules-order-review-b2b",
  "app-quality-checks-partner-dashboard","cart-line-mutations-view-key",
  "headless-checkout-sso-silent","giftcardcashouttransaction-resolvable",
  "gift-card-local-currency","inventory-transfer-webhooks-origin-destination",
  "multi-location-pickup-pos","improved-catalog-publishing",
  "rollouts-schedule-ab-test-themes-checkout","scatter-plots-radar-charts-analytics",
  "shopify-collective-australia","verified-tracking-shopify-collective",
  "unified-pos-staff-management","unlink-customer-identity-provider",
  "appsubscriptioncancel-partner-api","shop-user-metafields-functions",
  "cart-line-view-key-field","shopify-ai-toolkit-polaris-migration",
  "streamlined-metaobject-api"
];

const RELEASE = 'spring-2026';
const SUMMARIES_DIR = 'C:/Users/Michal Hudák/Vibe Coding/Shopify_news/summaries';

const allFiles = fs.readdirSync(SUMMARIES_DIR).filter(f => f.endsWith('.md'));

let updated = 0, skipped_already = 0, not_found = 0;
const notFoundSlugs = [];

for (const slug of SLUGS) {
  // Match file ending with -{slug}.md
  const matchingFile = allFiles.find(f => f.endsWith(`-${slug}.md`));
  if (!matchingFile) {
    not_found++;
    notFoundSlugs.push(slug);
    continue;
  }
  const fullPath = path.join(SUMMARIES_DIR, matchingFile);
  const content = fs.readFileSync(fullPath, 'utf8');
  if (/^editions_release:/m.test(content)) {
    skipped_already++;
    continue;
  }
  // Insert after first occurrence of `zdroj_kanal:` line, within frontmatter
  const lines = content.split('\n');
  let frontmatterStartIdx = -1, frontmatterEndIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (frontmatterStartIdx === -1) frontmatterStartIdx = i;
      else { frontmatterEndIdx = i; break; }
    }
  }
  if (frontmatterStartIdx === -1 || frontmatterEndIdx === -1) {
    console.error(`SKIP (no frontmatter): ${matchingFile}`);
    continue;
  }
  // Find zdroj_kanal line in frontmatter
  let insertAt = -1;
  for (let i = frontmatterStartIdx + 1; i < frontmatterEndIdx; i++) {
    if (lines[i].startsWith('zdroj_kanal:')) {
      insertAt = i + 1;
      break;
    }
  }
  if (insertAt === -1) {
    // Fallback: insert just before closing ---
    insertAt = frontmatterEndIdx;
  }
  lines.splice(insertAt, 0, `editions_release: ${RELEASE}`);
  fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
  updated++;
}

console.log(JSON.stringify({
  total_slugs: SLUGS.length,
  updated,
  skipped_already,
  not_found,
  not_found_slugs: notFoundSlugs
}, null, 2));
