"use client";

import CapmobEffects from "./CapmobEffects";
import CTA from "./CTA";
import Cursor from "./Cursor";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Lenders from "./Lenders";
import Marquee from "./Marquee";
import MobileMenu, { useMobileMenu } from "./MobileMenu";
import Nav from "./Nav";
import HiddenFourSection from "./HiddenFourSection";
import PacmobAISection from "./PacmobAISection";
import Products from "./Products";
import Solutions from "./Solutions";
import Testimonials from "./Testimonials";

export default function CapmobShell() {
  const { open, openMenu, closeMenu } = useMobileMenu();

  return (
    <div className="capmob-site">
      <Cursor />
      <MobileMenu open={open} onClose={closeMenu} />
      <Nav onOpenMobile={openMenu} />
      <Hero />
      <Marquee />
      <HiddenFourSection />
      <HowItWorks />
      <Products />
      <Solutions />
      <Lenders />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <CapmobEffects />
    </div>
  );
}
