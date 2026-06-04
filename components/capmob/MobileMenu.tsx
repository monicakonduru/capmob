"use client";

import { useCallback, useState } from "react";

export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);
  return { open, openMenu, closeMenu };
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
      <button type="button" className="mobile-close" onClick={onClose} aria-label="Close menu">
        ✕
      </button>
      <a href="#problem" onClick={onClose}>
        The Problem
      </a>
      <a href="#how" onClick={onClose}>
        How It Works
      </a>
      <a href="#products" onClick={onClose}>
        Products
      </a>
      <a href="#faq" onClick={onClose}>
        FAQs
      </a>
      <a href="#cta" className="btn-primary" onClick={onClose}>
        Get My Best Deal →
      </a>
    </div>
  );
}
