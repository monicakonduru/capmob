const STEPS = [
  {
    num: "01",
    title: "Pre-Check",
    desc: "Answer a few questions. No documents. No name shared. No credit impact.",
    ours: "Your part · ~8 minutes",
    delay: "",
  },
  {
    num: "02",
    title: "Assess Real Eligibility",
    desc: "We score all 5 lender criteria — including The Hidden 4 — and identify any gaps before they cost you.",
    ours: "Our expertise · Capmob handles this",
    delay: " reveal-delay-1",
  },
  {
    num: "03",
    title: "Match to the Right Lenders",
    desc: "We match your profile against 40+ institutions. Only to lenders whose current appetite fits your structure.",
    ours: "Our expertise · Capmob handles this",
    delay: " reveal-delay-2",
  },
  {
    num: "04",
    title: "Present Structured Offers",
    desc: "You see all your options, on the best available terms, before committing to anything.",
    ours: "Our expertise · Capmob handles this",
    delay: " reveal-delay-3",
  },
  {
    num: "05",
    title: "Manage the Full Deal",
    desc: "From offer acceptance to funds in your account — we track every case so nothing sits.",
    ours: "Our expertise · Capmob handles this",
    delay: " reveal-delay-4",
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="max-w">
        <div className="section-label reveal">How It Works</div>
        <h2 className="section-title reveal">
          One conversation.
          <br />
          <em>We handle everything else.</em>
        </h2>
        <p className="section-sub reveal">
          Your part takes 8 minutes. Ours takes years of expertise. No sales call, no documents
          upfront, no obligation.
        </p>
        <div className="steps-layout">
          <div className="steps-visual reveal">
            <div className="step-phone">
              <div className="phone-bar" />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".65rem",
                  color: "var(--text-muted)",
                  letterSpacing: ".08em",
                  marginBottom: "16px",
                }}
              >
                PACMOB · WHATSAPP · ● Active
              </div>
              <div className="chat-bubble">
                Hi! I&apos;m PACMOB, your financial copilot. Let&apos;s check your funding
                readiness. What type of business do you run?
              </div>
              <div className="chat-bubble user">F&B — we run 3 restaurants in Dubai</div>
              <div className="chat-bubble">Got it. How many years have you been operating?</div>
              <div className="chat-bubble user">4 years</div>
              <div className="chat-score">
                <div className="score-num">64</div>
                <div className="score-label">CapScore™ · Building…</div>
                <div className="score-improve">↑ 2 improvements found</div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".65rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                LENDER MATCHES · ● 3 matched
              </div>
            </div>
          </div>
          <ul className="steps-list">
            {STEPS.map((step) => (
              <li key={step.num} className={`step-item reveal${step.delay}`}>
                <div className="step-num">{step.num}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <div className="step-our">{step.ours}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
