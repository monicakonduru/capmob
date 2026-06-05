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
          <a href="#solutions">Solutions</a>
        </li>
        <li>
          <a href="#how">How it Works</a>
        </li>
        <li>
          <a href="#hidden">The Hidden 4</a>
        </li>
        <li>
          <a href="#faq">FAQs</a>
        </li>
        <li>
          <a href="#cta" className="nav-refer">
            Refer &amp; Earn
          </a>
        </li>
        <li>
          <a href="#cta" className="nav-signin">
            Sign in
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
