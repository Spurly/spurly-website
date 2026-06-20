import { ChromeLink } from "./Button.jsx";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#who", label: "Who it's for" },
  { href: "#pricing", label: "Pricing" },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={"mobile-menu" + (open ? " open" : "")} aria-hidden={open ? "false" : "true"}>
      {LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose}>{l.label}</a>
      ))}
      <ChromeLink variant="primary" size="lg" onClick={onClose}>
        Start free — 100 credits
      </ChromeLink>
    </div>
  );
}
