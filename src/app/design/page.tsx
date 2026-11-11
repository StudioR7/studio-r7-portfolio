import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/chrome";
import { Shot } from "@/components/shot";
import type { Frame } from "@/content/types";

export const metadata: Metadata = {
  title: "Design",
  description: "Brand systems, characters, social kits and chat channel design from the Studio R7 products.",
};

type Item = { image: string; caption: string };
type Group = { title: string; body: string; frame: Frame; columns: string; items: Item[] };
type Section = { id: string; label: string; title: string; intro: string; link?: { href: string; label: string }; groups: Group[] };

const TWO = "sm:grid-cols-2";
const THREE = "sm:grid-cols-2 lg:grid-cols-3";
const FOUR = "grid-cols-2 lg:grid-cols-4";

const SECTIONS: Section[] = [
  {
    id: "brands",
    label: "Brand systems",
    title: "Four brands, four different jobs.",
    intro:
      "A studio that helps businesses with technology, a food-deals app, a car-selling tool and a business suite should not look alike. Each brand starts from who it speaks to.",
    groups: [
      {
        title: "Studio R7: calm and exact",
        body: "Night blue, one action blue, one signal teal. A mark that reads at favicon size.",
        frame: "plain",
        columns: TWO,
        items: [
          { image: "studio-r7/brand-sheet", caption: "Brand sheet: colour, type, spacing, the mark" },
          { image: "studio-r7/brand-facebook-cover", caption: "Cover" },
        ],
      },
      {
        title: "PaiTor: golden hour on the soi",
        body: "Sunset tile, a road into a half-set sun, a price on a Thai number plate, lane dashes as dividers.",
        frame: "plain",
        columns: TWO,
        items: [
          { image: "paitor/brand-logo-guide", caption: "Logo system: Thai, English, stacked, single-colour, dark" },
          { image: "paitor/brand-art-direction", caption: "Illustration and photo direction" },
        ],
      },
      {
        title: "RevIQ: serious tools, warm voice",
        body: "Deep indigo with an emerald action colour, and a kit a developer can build from without asking.",
        frame: "plain",
        columns: THREE,
        items: [
          { image: "reviq/logo-lockup", caption: "Lockup" },
          { image: "reviq/logo-tile", caption: "App tile" },
          { image: "reviq/logo-construction", caption: "Construction" },
        ],
      },
    ],
  },
  {
    id: "characters",
    label: "Characters",
    title: "Two casts, twenty-three characters.",
    intro:
      "Characters give a product a voice people remember. Both casts come with written rules about what a character may and may not do.",
    groups: [
      {
        title: "Dee Wan Nee: six food guides",
        body: "Soft, round and hungry. Each one owns a job in the app and a colour in the interface.",
        frame: "plain",
        columns: TWO,
        items: [
          { image: "dee-wan-nee/brand-lineup", caption: "The approved line-up" },
          { image: "dee-wan-nee/brand-hero-scene", caption: "Moo in the hero scene" },
        ],
      },
      {
        title: "",
        body: "",
        frame: "plain",
        columns: THREE,
        items: [
          { image: "dee-wan-nee/cast-moo", caption: "Moo" },
          { image: "dee-wan-nee/cast-kai", caption: "Kai" },
          { image: "dee-wan-nee/cast-pa", caption: "Pa" },
          { image: "dee-wan-nee/cast-pet", caption: "Pet" },
          { image: "dee-wan-nee/cast-chilly", caption: "Chilly" },
          { image: "dee-wan-nee/cast-jai", caption: "Jai" },
        ],
      },
      {
        title: "PaiTor: the Pak Soi crew",
        body: "Seventeen characters made from the furniture of a Thai street, drawn as layered vector art ready for animation.",
        frame: "plain",
        columns: TWO,
        items: [
          { image: "paitor/cast-lineup", caption: "The five helpers, with silhouettes" },
          { image: "paitor/cast-world-scene", caption: "The world they live in" },
          { image: "paitor/cast-comparison", caption: "Animals or vehicles? Two casts tested side by side" },
          { image: "paitor/story-storyboard", caption: "Launch film storyboard" },
        ],
      },
    ],
  },
  {
    id: "systems",
    label: "Design systems",
    title: "Tokens first, screens second.",
    intro:
      "Colour, type and spacing are defined once as tokens. Components are composed from them, in light and dark, with every state drawn.",
    groups: [
      {
        title: "",
        body: "",
        frame: "browser",
        columns: TWO,
        items: [
          { image: "paitor/brand-component-library", caption: "PaiTor component library, light and dark" },
          { image: "reviq/brand-kit-full", caption: "RevIQ brand kit, the full page" },
        ],
      },
    ],
  },
  {
    id: "chat",
    label: "Chat channels",
    title: "Designed for where people already talk.",
    intro:
      "In Thailand a business lives in LINE. A rich menu is a home screen, a message card is a product page, and a WhatsApp catalogue is a shop window.",
    groups: [
      {
        title: "LINE rich menus",
        body: "The six-button menu at the bottom of a LINE chat, for three products.",
        frame: "plain",
        columns: THREE,
        items: [
          { image: "studio-r7/social-line-richmenu-en", caption: "Studio R7" },
          { image: "dee-wan-nee/line-rich-menu", caption: "Dee Wan Nee" },
          { image: "paitor/line-rich-menu", caption: "PaiTor" },
        ],
      },
      {
        title: "Messages that do something",
        body: "Welcome cards, car cards and alerts, designed as part of the product.",
        frame: "phone",
        columns: FOUR,
        items: [
          { image: "paitor/pro-line-car-card", caption: "Price-drop card" },
          { image: "paitor/pro-line-carousel", caption: "New matches" },
          { image: "paitor/pro-line-weekly", caption: "Weekly update" },
          { image: "studio-r7/section-whatsapp-phone", caption: "WhatsApp catalogue" },
        ],
      },
      {
        title: "",
        body: "",
        frame: "plain",
        columns: FOUR,
        items: [
          { image: "dee-wan-nee/line-welcome-moo", caption: "Welcome, Moo" },
          { image: "dee-wan-nee/line-welcome-kai", caption: "Welcome, Kai" },
          { image: "dee-wan-nee/line-welcome-pa", caption: "Welcome, Pa" },
          { image: "dee-wan-nee/line-welcome-jai", caption: "Welcome, Jai" },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Social kits",
    title: "Posts made as code.",
    intro:
      "Each post is an HTML page that a script renders to an image. A wording change is one edit and one command, and the whole set stays consistent.",
    groups: [
      {
        title: "Studio R7 on Facebook and LinkedIn",
        body: "",
        frame: "plain",
        columns: FOUR,
        items: [
          { image: "studio-r7/social-post-manifesto", caption: "Belief" },
          { image: "studio-r7/social-post-how-we-decide", caption: "How we decide" },
          { image: "studio-r7/social-post-before-after", caption: "Before and after" },
          { image: "studio-r7/social-post-carousel", caption: "Carousel" },
          { image: "studio-r7/social-linkedin-belief", caption: "LinkedIn: belief" },
          { image: "studio-r7/social-linkedin-how-we-build", caption: "LinkedIn: how we build" },
          { image: "studio-r7/social-linkedin-keep-integrate-build", caption: "LinkedIn: first question" },
          { image: "studio-r7/social-post-pricing-faq", caption: "Pricing" },
        ],
      },
      {
        title: "Share images",
        body: "What a link looks like when someone pastes it into a chat.",
        frame: "plain",
        columns: THREE,
        items: [
          { image: "dee-wan-nee/share-card-en", caption: "Dee Wan Nee" },
          { image: "paitor/share-og", caption: "PaiTor listing" },
          { image: "studio-r7/social-wa-01", caption: "Studio R7 on WhatsApp" },
        ],
      },
    ],
  },
];

export default function DesignPage() {
  return (
    <>
      <section className="border-b border-line bg-band-mint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Eyebrow>Design</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Brands, characters and chat channels.
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink">
            The design work from all four products in one place. For the screens and flows, open a project story.
          </p>
          <ol className="mt-8 flex flex-wrap gap-2">
            {SECTIONS.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="block rounded-full border border-line bg-white px-4 py-2 text-[16px] font-semibold hover:border-primary">
                  {index + 1}. {section.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {SECTIONS.map((section, index) => (
          <section key={section.id} id={section.id} className="border-b border-line py-16 last:border-0">
            <p className="text-[15px] font-bold uppercase tracking-[0.14em] text-primary-ink">
              {index + 1} · {section.label}
            </p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{section.title}</h2>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-ink">{section.intro}</p>
            <div className="mt-10 space-y-12">
              {section.groups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {group.title && <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>}
                  {group.body && <p className="mt-2 max-w-2xl text-muted">{group.body}</p>}
                  <ul className={`grid items-start gap-x-6 gap-y-8 ${group.columns} ${group.title ? "mt-6" : ""}`}>
                    {group.items.map((item) => (
                      <li key={item.image}>
                        <figure>
                          <Shot src={item.image} alt={item.caption} frame={group.frame} />
                          <figcaption className="mt-3 text-center text-[15px] font-medium text-muted">{item.caption}</figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="py-12 text-lg">
          <Link href="/#work" className="font-bold text-primary-ink underline underline-offset-4">
            Back to the four project stories
          </Link>
        </p>
      </div>
    </>
  );
}
