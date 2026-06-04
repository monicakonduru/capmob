"use client";

type NavProps = {
  onOpenMobile: () => void;
};

export default function Nav({ onOpenMobile }: NavProps) {
  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">
        Cap<span>mob</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#problem">The Problem</a>
        </li>
        <li>
          <a href="#how">How It Works</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#solutions">Solutions</a>
        </li>
        <li>
          <a href="#faq">FAQs</a>
        </li>
        <li>
          <a href="#cta" className="nav-cta">
            Get My Best Deal →
          </a>
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
