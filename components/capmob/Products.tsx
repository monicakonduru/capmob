const PRODUCTS = [
  {
    icon: "📊",
    tag: "CapScore™",
    title: "The complete lender view of your business.",
    desc: "Your AECB Score plus The Hidden 4 — synthesised into one number, broken down factor by factor, explained in plain language. AECB in context, DSCR calculated, 90-day improvement roadmap.",
    link: "Get my CapScore →",
    featured: false,
    delay: " reveal-delay-1",
  },
  {
    icon: "📋",
    tag: "CapReport™",
    title: "Walk into every bank meeting already prepared.",
    desc: "A lender-ready financial profile structured the way credit committees evaluate — not accountants. It speaks their language before the meeting starts. Credit committee format, bank-ready language, gap pre-emption built in.",
    link: "Build my CapReport →",
    featured: true,
    delay: " reveal-delay-2",
  },
  {
    icon: "💬",
    tag: "PACMOB™",
    title: "Your financial copilot. On WhatsApp.",
    desc: "AI assistant that knows your business. Ask about your CapScore, your DSCR, which lender fits best, what to fix first. No apps. No dashboards. Just message. WhatsApp-native, knows your numbers, weekly funding pulse.",
    link: "Start with PACMOB →",
    featured: false,
    delay: " reveal-delay-3",
  },
];

export default function Products() {
  return (
    <section id="products">
      <div className="max-w">
        <div className="section-label reveal">The System</div>
        <h2 className="section-title reveal">
          Three tools. One arc.
          <br />
          <em>Confused to funded.</em>
        </h2>
        <p className="section-sub reveal">
          Each tool is designed for a specific stage of your funding journey.
        </p>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div
              key={p.tag}
              className={`product-card reveal${p.delay}${p.featured ? " featured" : ""}`}
            >
              <div className="p-icon">{p.icon}</div>
              <div className="p-tag">{p.tag}</div>
              <div className="p-title">{p.title}</div>
              <div className="p-desc">{p.desc}</div>
              <a href="#" className="p-link">
                {p.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
