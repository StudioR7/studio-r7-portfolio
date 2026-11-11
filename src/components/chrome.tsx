import Link from "next/link";
import { asset, site } from "@/content";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/design/", label: "Design" },
  { href: "/papers/", label: "Papers" },
  { href: "/toolbox/", label: "Toolbox" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Studio R7 Portfolio, home" className="flex shrink-0 items-center gap-2.5 font-bold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo.svg")} alt="" width={34} height={34} className="rounded-lg" />
          <span className="hidden whitespace-nowrap sm:inline">
            Studio R7 <span className="font-medium text-muted">Portfolio</span>
          </span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-0.5 text-[15px] font-semibold sm:gap-2 sm:text-[16px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-lg px-2 py-2 text-ink hover:bg-surface sm:px-3">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-night text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-2xl font-bold text-white">Have a problem that technology should solve?</p>
          <p className="mt-2 max-w-xl">
            Tell us in two minutes. A person reads every brief and replies with a plan and a price.
          </p>
          <a
            href={`${site.url}/start`}
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-night hover:bg-accent"
          >
            Start a project
          </a>
        </div>
        <ul className="space-y-2 text-[16px] font-medium">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href={site.url}>
              studior7.com
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href={site.repo}>
              This portfolio on GitHub
            </a>
          </li>
          <li>Studio R7 · Bangkok</li>
        </ul>
      </div>
    </footer>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p className={`text-[15px] font-bold uppercase tracking-[0.14em] ${tone === "dark" ? "text-accent" : "text-primary-ink"}`}>
      {children}
    </p>
  );
}
