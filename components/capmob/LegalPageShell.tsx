"use client";

import CapmobEffects from "./CapmobEffects";
import Cursor from "./Cursor";
import Footer from "./Footer";
import LegalNav from "./LegalNav";
import MobileMenu, { useMobileMenu } from "./MobileMenu";

type LegalPageShellProps = {
  children: React.ReactNode;
};

export default function LegalPageShell({ children }: LegalPageShellProps) {
  const { open, openMenu, closeMenu } = useMobileMenu();

  return (
    <div className="capmob-site legal-page">
      <Cursor />
      <MobileMenu open={open} onClose={closeMenu} />
      <LegalNav onOpenMobile={openMenu} />
      {children}
      <Footer />
      <CapmobEffects />
    </div>
  );
}
