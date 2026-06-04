export default function CTA() {
  return (
    <section id="cta">
      <div className="max-w" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="section-title reveal" style={{ color: "var(--white)" }}>
          The funding market is wider
          <br />
          than your bank told you.
          <br />
          <em style={{ color: "rgba(255,255,255,0.85)" }}>Let&apos;s find your deal.</em>
        </h2>
        <p
          className="section-sub reveal"
          style={{ color: "rgba(255,255,255,0.8)", margin: "24px auto 40px" }}
        >
          No documents upfront. No name shared. No credit impact. Just an honest view of
          what&apos;s available — in 2 working days.
        </p>
        <div className="cta-actions reveal">
          <a href="#" className="btn-white">
            Get My Best Deal — free →
          </a>
          <a href="#" className="btn-outline-white">
            Start on WhatsApp with PACMOB
          </a>
        </div>
        <div className="cta-note reveal">
          No documents upfront · No name shared · No credit impact · Results in 2 working days
        </div>
      </div>
    </section>
  );
}
