import Link from "next/link";

const STEPS = [
  {
    num: "01",
    dotClass: "yours",
    tag: "Step 01",
    title: "Pre-Check — No documents. No name shared.",
    desc: "Answer a few questions about your business — type, sector, years operating, approximate revenue. No personal data required. No documents. No credit bureau pull. This is purely used to establish your eligibility baseline and which lender criteria are most relevant to your profile.",
    owner: "Your part · ~8 minutes · No credit impact",
    ownerClass: "",
  },
  {
    num: "02",
    dotClass: "theirs",
    tag: "Step 02",
    title: "Real Eligibility Assessment — The Hidden 4 scored",
    desc: "Our advisors assess your profile against all 5 lender criteria: your AECB score in context, your Debt Service Coverage Ratio, revenue consistency over 3 years, banking behaviour signals, and business vintage. Most applicants only know about criterion 1. We give you the complete picture.",
    owner: "Capmob handles this · ~24 hours",
    ownerClass: "theirs",
  },
  {
    num: "03",
    dotClass: "theirs",
    tag: "Step 03",
    title: "Lender Matching — Right fit, right timing",
    desc: "We match your profile against 40+ institutions — banks, Islamic finance providers, private lenders, and NBFCs. We track which lenders are actively deploying capital in your sector right now. Only lenders whose current credit appetite genuinely fits your structure are shortlisted. Your name and company are still not shared at this stage.",
    owner: "Capmob handles this · Included in 24-hour window",
    ownerClass: "theirs",
  },
  {
    num: "04",
    dotClass: "theirs",
    tag: "Step 04",
    title: "Structured Offer Presentation — You choose",
    desc: "You receive a clear summary of available options: facility type, indicative rate, tenure, collateral requirement, and estimated timeline. You review everything before any lender knows your name. Only when you actively select an offer do we proceed — and we tell you exactly what information will be shared before we share it.",
    owner: "Your decision · Zero obligation to proceed",
    ownerClass: "",
  },
  {
    num: "05",
    dotClass: "theirs",
    tag: "Step 05",
    title: "Full Deal Management — We handle everything",
    desc: "Once you choose to proceed, we manage the entire application process with the chosen lender — documentation, structuring, credit committee preparation, and follow-up. You deal with one contact throughout. We track every open case to ensure nothing sits. Most facilities are fully approved within 2–5 working days.",
    owner: "Capmob handles this · Until funds disbursed",
    ownerClass: "theirs",
  },
] as const;

const JOURNEY_CARDS = [
  {
    type: "Planning to Apply",
    title: "I want to know my chances before I apply",
    desc: "Get your CapScore. See where you stand across all 5 lender criteria. Only apply when the numbers are in your favour.",
    href: "/#products",
    link: "Start with CapScore →",
    delay: "reveal-delay-1",
  },
  {
    type: "Recently Rejected",
    title: "I was told no and I don't know why",
    desc: "A rejection is a diagnosis waiting to happen. We identify which of The Hidden 4 failed and give you the 90-day fix plan.",
    href: "/#cta",
    link: "Diagnose my rejection →",
    delay: "reveal-delay-2",
  },
  {
    type: "Preparing Seriously",
    title: "I'm building toward a major facility",
    desc: "Build your CapReport now. Walk into every lender meeting with a profile formatted for their credit committee — before anyone else does.",
    href: "/#products",
    link: "Build my CapReport →",
    delay: "reveal-delay-3",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <div className="page-hero page-hero--centered">
        <div className="hero-grid" aria-hidden />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> › How It Works
          </div>
          <h1 className="page-title reveal">
            Your part takes 8 minutes.
            <br />
            <em>Ours takes years.</em>
          </h1>
          <p className="page-sub reveal">
            No sales call. No documents upfront. No obligation. Here&apos;s exactly what
            happens from first contact to funded.
          </p>
        </div>
      </div>

      <section className="steps-section">
        <div className="about-max-w">
          <div className="steps-timeline">
            {STEPS.map((step) => (
              <div key={step.num} className="step-row reveal">
                <div className={`step-dot ${step.dotClass}`}>{step.num}</div>
                <div className="step-content">
                  <div className="s-tag">{step.tag}</div>
                  <div className="s-title">{step.title}</div>
                  <div className="s-desc">{step.desc}</div>
                  <span className={`s-owner${step.ownerClass ? ` ${step.ownerClass}` : ""}`}>
                    {step.owner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-journey">
        <div className="about-max-w">
          <div className="section-label reveal">Where Are You?</div>
          <h2 className="section-title reveal">
            Find the right
            <br />
            <em>starting point for you.</em>
          </h2>
          <div className="journey-grid">
            {JOURNEY_CARDS.map((card) => (
              <div key={card.type} className={`journey-card reveal ${card.delay}`}>
                <div className="j-type">{card.type}</div>
                <div className="j-title">{card.title}</div>
                <div className="j-desc">{card.desc}</div>
                <Link href={card.href} className="j-link">
                  {card.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <h2 className="cta-band-title">Ready to begin?</h2>
        <p className="cta-band-sub">
          No documents upfront. No name shared. No credit impact. Results in 2 working days.
        </p>
        <Link href="/#cta" className="btn-white">
          Get My Best Deal — free →
        </Link>
      </div>
    </>
  );
}
