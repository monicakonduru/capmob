const SOLUTIONS = [
  {
    type: "Working Capital",
    title: "Cash Finance",
    desc: "Working capital lines and term loans structured against your revenue, contracts, or assets. Unsecured options available.",
    delay: " reveal-delay-1",
  },
  {
    type: "Trade & Supply Chain",
    title: "Trade Finance",
    desc: "Letters of Credit, bank guarantees, and supply chain facilities for traders and contractors operating across UAE and international markets.",
    delay: " reveal-delay-2",
  },
  {
    type: "Assets & Receivables",
    title: "Asset-Based Finance",
    desc: "Invoice discounting, factoring, and real estate-backed structures for businesses with strong receivables or property assets.",
    delay: " reveal-delay-3",
  },
  {
    type: "Cross-Border",
    title: "Foreign Exchange",
    desc: "FX solutions for businesses managing cross-border payments, supplier obligations, or currency exposure.",
    delay: " reveal-delay-1",
  },
  {
    type: "Contract Finance",
    title: "Bank Guarantees",
    desc: "Performance, advance payment, and tender guarantees — structured to preserve your working capital while fulfilling contract requirements.",
    delay: " reveal-delay-2",
  },
  {
    type: "Non-Bank Lenders",
    title: "Private Lending",
    desc: "Non-bank financing for businesses that don't fit traditional credit boxes. Faster, more flexible structures built around how your business actually operates.",
    delay: " reveal-delay-3",
  },
];

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="max-w">
        <div className="section-label reveal">What We Structure</div>
        <h2 className="section-title reveal">
          Every facility type.
          <br />
          <em>One relationship.</em>
        </h2>
        <p className="section-sub reveal">
          We don&apos;t sell products. We structure the right facility for how your business
          actually operates — then match it to the lender most likely to say yes.
        </p>
        <div className="solutions-grid">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className={`sol-card reveal${s.delay}`}>
              <div className="sol-type">{s.type}</div>
              <div className="sol-title">{s.title}</div>
              <div className="sol-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
