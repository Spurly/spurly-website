import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import { MenuIcon } from "../icons.jsx";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#who", label: "Who it's for" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav({ menuOpen, onToggleMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")} role="banner">
      <nav className="nav-inner" aria-label="Primary">
        <a className="brand" href="#top" aria-label="Spurly home">
          <img src="/Spurly icon copy.png" alt="" />
          <span>Spurly</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="nav-cta">
<Button variant="primary" size="sm" magnetic href="https://chromewebstore.google.com/detail/dcohpfeaohfiiinjjiinojlbnnfmihoh?utm_source=item-share-cb" target="_blank" rel="noopener">Start free</Button>
          <button className="nav-toggle" aria-label="Open menu" aria-expanded={menuOpen ? "true" : "false"} onClick={onToggleMenu}>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
