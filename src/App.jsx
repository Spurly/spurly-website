import { useState } from "react";
import Nav from "./components/Nav.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Hero from "./components/Hero.jsx";
import LogoCloud from "./components/LogoCloud.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Audiences from "./components/Audiences.jsx";
import Webcam from "./components/Webcam.jsx";
import LiveDemo from "./components/LiveDemo.jsx";
import Pricing from "./components/Pricing.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import TweaksPanel from "./components/TweaksPanel.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";
import useMagnetic from "./hooks/useMagnetic.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();
  useMagnetic();

  function setMenu(open) {
    setMenuOpen(open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  return (
    <>
      <Nav menuOpen={menuOpen} onToggleMenu={() => setMenu(!menuOpen)} />
      <MobileMenu open={menuOpen} onClose={() => setMenu(false)} />

      <main id="top">
        <Hero />
        <LogoCloud />
        <ProductShowcase />
        <HowItWorks />
        <Audiences />
        <Webcam />
        <LiveDemo />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
      <TweaksPanel />
    </>
  );
}
