import Link from "next/link";
import { ChromeLink } from "./Button.jsx";
import Footer from "./Footer.jsx";

/* Shell for static content pages (legal, support, blog). Reuses the site's
   glass nav + footer. Nav anchors point back to homepage sections. */

const NAV = [
  { href: "/#product", label: "Product" },
  { href: "/#how", label: "How it works" },
  { href: "/#who", label: "Who it's for" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog", internal: true },
];

export default function ContentShell({ children }) {
  return (
    <>
      <header className="nav scrolled" role="banner">
        <nav className="nav-inner" aria-label="Primary">
          <Link className="brand" href="/" aria-label="Spurly home">
            <img src="/Spurly icon copy.png" alt="" width="56" height="56" />
            <span>Spurly</span>
          </Link>
          <div className="nav-links">
            {NAV.map((l) =>
              l.internal ? (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ) : (
                <a key={l.href} href={l.href}>{l.label}</a>
              )
            )}
          </div>
          <div className="nav-cta">
            <ChromeLink variant="primary" size="sm">Start free</ChromeLink>
          </div>
        </nav>
      </header>

      <main className="content-page">{children}</main>

      <Footer />
    </>
  );
}
