"use client";

import Link from "next/link";

type LegalNavProps = {
  onOpenMobile: () => void;
};

export default function LegalNav({ onOpenMobile }: LegalNavProps) {
  return (
    <nav id="navbar" className="legal-nav">
      <Link href="/" className="nav-logo">
        Cap<span>mob</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/#problem">The Problem</Link>
        </li>
        <li>
          <Link href="/#how">How It Works</Link>
        </li>
        <li>
          <Link href="/#products">Products</Link>
        </li>
        <li>
          <Link href="/#faq">FAQs</Link>
        </li>
        <li>
          <Link href="/#cta" className="nav-cta">
            Get My Best Deal →
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="nav-mobile-toggle"
        onClick={onOpenMobile}
        aria-label="Open menu"
      >
        ☰
      </button>
    </nav>
  );
}
