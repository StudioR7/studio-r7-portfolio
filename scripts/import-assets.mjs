// Copies the chosen showcase images from the source projects into public/work,
// resized and converted to WebP. Sources live outside this repo, so this runs
// on the studio machine only; the converted images are committed.
//
// Usage: node scripts/import-assets.mjs
import { mkdir, access } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import sharp from "sharp";

const HOME = homedir();
const OUT = join(import.meta.dirname, "..", "public", "work");
const MAX_WIDTH = 1600;

const SITE = "code/studio-r7-site";
const SOC = "Documents/StudioR7-social";
const DWN = "code/dwn-platform";
const PT_KIT = "Documents/PaiTor-brand";
const PT_DEALER = "code/paitor-dealer-design/docs/design/dealer-backend/shots";

/** [source path relative to home, output path relative to public/work (no extension)] */
const ASSETS = [
  // Studio R7: site
  [`${SITE}/public/showcase/sites/studior7-en.webp`, "studio-r7/site-home-en"],
  [`${SITE}/public/showcase/sites/studior7-th.webp`, "studio-r7/site-home-th"],
  [`${SITE}/public/showcase/sites/studior7-pricing-en.webp`, "studio-r7/site-pricing-en"],
  [`${SITE}/public/showcase/pages/home-phone-en.webp`, "studio-r7/site-home-phone-en"],
  [`${SITE}/public/showcase/pages/services-desktop-en.webp`, "studio-r7/site-services-en"],
  [`${SITE}/public/showcase/pages/contact-phone-th.webp`, "studio-r7/site-contact-phone-th"],
  [`${SITE}/public/showcase/sites/invoice-maker-en.webp`, "studio-r7/app-invoice-maker"],
  [`${SITE}/public/showcase/sites/namecard-maker-en.webp`, "studio-r7/app-namecard-maker"],
  [`${SITE}/public/apps/invoice/doc-th-front.png`, "studio-r7/app-invoice-doc-th"],
  [`${SITE}/public/apps/invoice/doc-en-front.png`, "studio-r7/app-invoice-doc-en"],
  [`${SITE}/public/apps/namecard/card-en-front.png`, "studio-r7/app-namecard-front"],
  [`${SITE}/public/apps/namecard/card-en-back.png`, "studio-r7/app-namecard-back"],
  // Studio R7: sections
  [`${SITE}/docs/design/a11y-2026-11-09/brand-board-1440.png`, "studio-r7/section-brand-board"],
  [`${SITE}/docs/design/a11y-2026-11-09/device-chat-line-1440.png`, "studio-r7/section-line-chat"],
  [`${SITE}/docs/design/a11y-2026-11-09/stack-assembly-1440.png`, "studio-r7/section-stack-assembly"],
  [`${SITE}/docs/design/a11y-2026-11-09/namecard-gallery-1440.png`, "studio-r7/section-namecard-gallery"],
  [`${SITE}/docs/design/a11y-2026-11-09/demos-telegram-1440.png`, "studio-r7/section-telegram-demo"],
  [`${SITE}/docs/design/a11y-2026-11-09/showcase-whatsapp-message-390.png`, "studio-r7/section-whatsapp-phone"],
  [`${SITE}/docs/design/a11y-2026-11-09/portal-demo-1440.png`, "studio-r7/section-portal-demo"],
  // Studio R7: engine map
  [`${SITE}/docs/design/engine-map/engine-map-1440.png`, "studio-r7/engine-map"],
  [`${SITE}/docs/design/engine-map/engine-map-1440-selected.png`, "studio-r7/engine-map-selected"],
  [`${SITE}/docs/design/engine-map/engine-map-390.png`, "studio-r7/engine-map-phone"],
  // Studio R7: client back end
  [`${SITE}/docs/design/client-backend/delivery/home-1440.png`, "studio-r7/portal-home"],
  [`${SITE}/docs/design/client-backend/delivery/home-390.png`, "studio-r7/portal-home-phone"],
  [`${SITE}/docs/design/client-backend/delivery/timeline-1440.png`, "studio-r7/portal-timeline"],
  [`${SITE}/docs/design/client-backend/delivery/timeline-th-390.png`, "studio-r7/portal-timeline-phone-th"],
  [`${SITE}/docs/design/client-backend/delivery/request-1440.png`, "studio-r7/portal-request"],
  [`${SITE}/docs/design/client-backend/delivery/request-th-390.png`, "studio-r7/portal-request-phone-th"],
  [`${SITE}/docs/design/client-backend/delivery/upload-progress-1440.png`, "studio-r7/portal-upload"],
  [`${SITE}/docs/design/client-backend/delivery/staff-delivery-1440.png`, "studio-r7/portal-staff-delivery"],
  [`${SITE}/docs/design/client-backend/delivery/staff-all-1440.png`, "studio-r7/portal-staff-all"],
  [`${SITE}/docs/design/client-backend/mocks/approvals-1440.png`, "studio-r7/portal-mock-approvals"],
  [`${SITE}/docs/design/client-backend/mocks/email-1440.png`, "studio-r7/portal-mock-email"],
  // Studio R7: brand and social
  [`${SITE}/docs/platform/setup-packs/brand-pack/brand/brand-sheet.png`, "studio-r7/brand-sheet"],
  [`${SITE}/brand/social/facebook-cover-1640x624.png`, "studio-r7/brand-facebook-cover"],
  [`${SITE}/brand/social/linkedin-cover-1584x396.png`, "studio-r7/brand-linkedin-cover"],
  [`${SITE}/brand/logos/logo-512.png`, "studio-r7/brand-logo"],
  [`${SITE}/brand/line/rich-menu.png`, "studio-r7/brand-line-rich-menu"],
  [`${SOC}/facebook/assets/contact-sheet.png`, "studio-r7/social-facebook-sheet"],
  [`${SOC}/facebook/assets/cover.png`, "studio-r7/social-facebook-cover"],
  [`${SOC}/facebook/assets/posts/post-01-manifesto.png`, "studio-r7/social-post-manifesto"],
  [`${SOC}/facebook/assets/posts/post-02-how-we-decide.png`, "studio-r7/social-post-how-we-decide"],
  [`${SOC}/facebook/assets/posts/post-03-before-after.png`, "studio-r7/social-post-before-after"],
  [`${SOC}/facebook/assets/posts/post-06-carousel-1-cover.png`, "studio-r7/social-post-carousel"],
  [`${SOC}/facebook/assets/posts/post-07-pricing-faq.png`, "studio-r7/social-post-pricing-faq"],
  [`${SOC}/linkedin/assets/contact-sheet.png`, "studio-r7/social-linkedin-sheet"],
  [`${SOC}/linkedin/assets/post-01-belief-1080x1350.png`, "studio-r7/social-linkedin-belief"],
  [`${SOC}/linkedin/assets/post-03-keep-integrate-build-1080x1350.png`, "studio-r7/social-linkedin-keep-integrate-build"],
  [`${SOC}/linkedin/assets/post-05-how-we-build-1080x1350.png`, "studio-r7/social-linkedin-how-we-build"],
  [`${SOC}/line-setup/richmenu-en-2500x1686.png`, "studio-r7/social-line-richmenu-en"],
  [`${SOC}/line-setup/richmenu-v4-2500x1686.png`, "studio-r7/social-line-richmenu-th"],
  [`${SOC}/wa-catalog/01-brief.jpg`, "studio-r7/social-wa-01"],
  [`${SOC}/wa-catalog/02-build.jpg`, "studio-r7/social-wa-02"],
  [`${SOC}/wa-catalog/03-connect.jpg`, "studio-r7/social-wa-03"],
  [`${SOC}/wa-catalog/04-line.jpg`, "studio-r7/social-wa-04"],
  [`${SOC}/wa-catalog/05-chat.jpg`, "studio-r7/social-wa-05"],
  [`${SOC}/wa-catalog/06-web.jpg`, "studio-r7/social-wa-06"],

  // Dee Wan Nee
  [`${SITE}/public/showcase/sites/deewannee-en.webp`, "dee-wan-nee/site-home-en"],
  [`${SITE}/public/showcase/sites/deewannee-th.webp`, "dee-wan-nee/site-home-th"],
  [`${SITE}/public/apps/dwn/cover-en.jpg`, "dee-wan-nee/cover-en"],
  [`${DWN}/public/brand/dwn-lineup.png`, "dee-wan-nee/brand-lineup"],
  [`${DWN}/public/brand/derived/hero-scene.webp`, "dee-wan-nee/brand-hero-scene"],
  [`${DWN}/public/brand/derived/moo.webp`, "dee-wan-nee/cast-moo"],
  [`${DWN}/public/brand/derived/kai.webp`, "dee-wan-nee/cast-kai"],
  [`${DWN}/public/brand/derived/pa.webp`, "dee-wan-nee/cast-pa"],
  [`${DWN}/public/brand/derived/pet.webp`, "dee-wan-nee/cast-pet"],
  [`${DWN}/public/brand/derived/chilly.webp`, "dee-wan-nee/cast-chilly"],
  [`${DWN}/public/brand/derived/jai.webp`, "dee-wan-nee/cast-jai"],
  [`${DWN}/public/og/dee-wan-nee-en.jpg`, "dee-wan-nee/share-card-en"],
  [`${DWN}/public/og/dee-wan-nee-th.jpg`, "dee-wan-nee/share-card-th"],
  [`${DWN}/public/og/dee-wan-nee-zh-Hans.jpg`, "dee-wan-nee/share-card-zh"],
  [`${DWN}/scripts/design/richmenu/dwn-richmenu-2500x1686.jpg`, "dee-wan-nee/line-rich-menu"],
  [`${DWN}/scripts/design/welcome/welcome-moo.jpg`, "dee-wan-nee/line-welcome-moo"],
  [`${DWN}/scripts/design/welcome/welcome-kai.jpg`, "dee-wan-nee/line-welcome-kai"],
  [`${DWN}/scripts/design/welcome/welcome-pa.jpg`, "dee-wan-nee/line-welcome-pa"],
  [`${DWN}/scripts/design/welcome/welcome-jai.jpg`, "dee-wan-nee/line-welcome-jai"],

  // PaiTor: product screens
  [`${PT_KIT}/kit/screens/landing-1280-en.png`, "paitor/screen-landing"],
  [`${PT_KIT}/kit/screens/browse-1280-en.png`, "paitor/screen-browse"],
  [`${PT_KIT}/kit/screens/listing-390-en.png`, "paitor/screen-listing-phone"],
  [`${PT_KIT}/kit/screens/editor-1-car-390-en.png`, "paitor/flow-1-car"],
  [`${PT_KIT}/kit/screens/editor-2-photos-390-en.png`, "paitor/flow-2-photos"],
  [`${PT_KIT}/kit/screens/editor-3-condition-390-en.png`, "paitor/flow-3-condition"],
  [`${PT_KIT}/kit/screens/editor-4-price-390-en.png`, "paitor/flow-4-price"],
  [`${PT_KIT}/kit/screens/preview-390-en.png`, "paitor/flow-5-preview"],
  [`${PT_KIT}/kit/screens/share-390-en.png`, "paitor/flow-6-share"],
  [`${PT_KIT}/kit/screens/sold-390-en.png`, "paitor/flow-7-sold"],
  [`${PT_KIT}/kit/screens/dark/landing-390-en-dark.png`, "paitor/screen-landing-dark"],
  // PaiTor: brand
  [`${PT_KIT}/kit/logo/logo-guide-en.png`, "paitor/brand-logo-guide"],
  [`${PT_KIT}/kit/foundations/art-direction-en.png`, "paitor/brand-art-direction"],
  [`${PT_KIT}/kit/components/library-1280-en.png`, "paitor/brand-component-library"],
  [`${PT_KIT}/kit/share/og-en.png`, "paitor/share-og"],
  [`${PT_KIT}/kit/share/portrait-en.png`, "paitor/share-portrait"],
  [`${PT_KIT}/kit/share/story-en.png`, "paitor/share-story"],
  [`${PT_KIT}/kit/social/line-rich-en.png`, "paitor/line-rich-menu"],
  [`${PT_KIT}/vehicle-cast/art/lineup.png`, "paitor/cast-lineup"],
  [`${PT_KIT}/vehicle-cast/art/world-scene.png`, "paitor/cast-world-scene"],
  [`${PT_KIT}/vehicle-cast/comparison.png`, "paitor/cast-comparison"],
  [`${PT_KIT}/story/frames/storyboard-sheet.png`, "paitor/story-storyboard"],
  // PaiTor Pro: dealer back end designs
  [`${PT_DEALER}/desktop-today.png`, "paitor/pro-today"],
  [`${PT_DEALER}/desktop-stock.png`, "paitor/pro-stock"],
  [`${PT_DEALER}/desktop-editor.png`, "paitor/pro-editor"],
  [`${PT_DEALER}/desktop-import.png`, "paitor/pro-import"],
  [`${PT_DEALER}/desktop-connections.png`, "paitor/pro-connections"],
  [`${PT_DEALER}/desktop-chats.png`, "paitor/pro-chats"],
  [`${PT_DEALER}/desktop-banner-design.png`, "paitor/pro-banner-design"],
  [`${PT_DEALER}/desktop-boost-bulk.png`, "paitor/pro-boost-bulk"],
  [`${PT_DEALER}/phone-today.png`, "paitor/pro-phone-today"],
  [`${PT_DEALER}/phone-stock.png`, "paitor/pro-phone-stock"],
  [`${PT_DEALER}/line-car-card.png`, "paitor/pro-line-car-card"],
  [`${PT_DEALER}/line-carousel-alert.png`, "paitor/pro-line-carousel"],
  [`${PT_DEALER}/line-yard-weekly.png`, "paitor/pro-line-weekly"],
];

const manifest = {};
let missing = 0;

for (const [source, target] of ASSETS) {
  const from = join(HOME, source);
  const to = join(OUT, `${target}.webp`);
  try {
    await access(from);
  } catch {
    console.error(`MISSING  ${source}`);
    missing += 1;
    continue;
  }
  await mkdir(dirname(to), { recursive: true });
  const info = await sharp(from)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(to);
  manifest[target] = { width: info.width, height: info.height };
}

const { writeFile } = await import("node:fs/promises");
await writeFile(
  join(import.meta.dirname, "..", "src", "content", "image-sizes.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
console.log(`Imported ${Object.keys(manifest).length} images, ${missing} missing.`);
