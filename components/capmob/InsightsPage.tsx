import Link from "next/link";

const INSIGHTS = [
  {
    tag: "Debt & Liquidity",
    title: "Unlocking liquidity without adding more debt",
    summary:
      "How restructuring expensive facilities and using asset-backed structures can free up cash flow for UAE SMEs without stacking new term loans.",
    highlight:
      "Capmob case studies on unlocking AED 500K for a mid-sized business and cleaning up expensive legacy debt for a Dubai consumer brand.",
  },
  {
    tag: "BNPL & Working Capital",
    title: "BNPL for SMEs: tool or trap?",
    summary:
      "Buy Now, Pay Later is growing fast in SME finance — but the real impact depends on how it’s structured against your cash cycle and margins.",
    highlight:
      "When BNPL behaves like hidden debt and how to compare it to traditional working capital lines on total cost, flexibility, and risk.",
  },
  {
    tag: "Islamic Finance",
    title: "Murabaha and Islamic facilities, explained",
    summary:
      "Why Murabaha isn’t just another loan, and how Islamic structures change the way SMEs think about assets, risk, and repayment.",
    highlight:
      "What lenders actually look for in Islamic facilities and how to prepare your books and contracts before applying.",
  },
  {
    tag: "Trade & FX",
    title: "The real cost of USD invoicing",
    summary:
      "Many UAE founders assume USD invoicing is ‘safer’. In reality, FX leakage and timing can quietly erode 3–5% of every deal.",
    highlight:
      "How to structure payables, receivables, and hedging so FX works for your margins instead of against them.",
  },
  {
    tag: "Credit Readiness",
    title: "Why most rejections are about timing, not strength",
    summary:
      "Most UAE SME loan applications fail before a credit officer truly reviews the file. The issue isn’t always eligibility — it’s readiness.",
    highlight:
      "The five lender criteria Capmob tracks from LinkedIn: AECB in context, DSCR, revenue consistency, banking behaviour, and business vintage.",
  },
] as const;

export default function InsightsPage() {
  return (
    <>
      <div className="page-hero page-hero--centered">
        <div className="hero-grid" aria-hidden />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> › Insights
          </div>
          <h1 className="page-title reveal">
            Field notes from the
            <br />
            <em>UAE SME funding market.</em>
          </h1>
          <p className="page-sub reveal">
            Long-form versions of the ideas we share on LinkedIn — distilled into practical
            playbooks you can act on before you apply for your next facility.
          </p>
        </div>
      </div>

      <section className="how-journey">
        <div className="about-max-w">
          <div className="section-label reveal">Capmob Insights</div>
          <h2 className="section-title reveal">
            Learn how lenders
            <br />
            <em>actually think.</em>
          </h2>
          <div className="journey-grid">
            {INSIGHTS.map((item) => (
              <article key={item.title} className="journey-card reveal">
                <div className="j-type">{item.tag}</div>
                <h3 className="j-title">{item.title}</h3>
                <p className="j-desc">{item.summary}</p>
                <p className="j-desc">{item.highlight}</p>
                <Link href="/#cta" className="j-link">
                  Talk through this for my case →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <h2 className="cta-band-title">Want these insights on your numbers?</h2>
        <p className="cta-band-sub">
          We turn LinkedIn threads into concrete lender strategies for your business — with
          no obligation to apply.
        </p>
        <Link href="/#cta" className="btn-white">
          Get My Best Deal — free →
        </Link>
      </div>
    </>
  );
}

