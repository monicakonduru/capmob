export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w">
        <div className="section-label reveal">What Businesses Say</div>
        <h2 className="section-title reveal">
          What changes when you
          <br />
          <em>finally see the picture.</em>
        </h2>
        <div className="testi-grid">
          <div className="testi-card reveal reveal-delay-1">
            <div className="testi-quote">
              We&apos;d been banking with the same institution for years. Capmob showed us options
              we didn&apos;t know existed and structured our funding in a way that actually matched
              our cash cycle. The process was smooth and the result was better than anything the
              bank had offered us.
            </div>
            <div className="testi-author">
              <div className="testi-avatar">SM</div>
              <div>
                <div className="testi-name">Shwetha Menon</div>
                <div className="testi-role">Founder, Pita Pan · F&B · Dubai</div>
                <div className="testi-result">→ AED 1.2M working capital approved</div>
              </div>
            </div>
          </div>
          <div className="testi-card reveal reveal-delay-2">
            <div className="testi-quote">
              We&apos;d applied to three banks and been rejected by all of them. Capmob diagnosed
              exactly what was failing in our profile, fixed the presentation, and had us funded
              within a week. It was night and day.
            </div>
            <div className="testi-author">
              <div className="testi-avatar">GI</div>
              <div>
                <div className="testi-name">George Ivanov</div>
                <div className="testi-role">Al NISCON · Trade</div>
                <div className="testi-result">→ AED 800K approved</div>
              </div>
            </div>
          </div>
          <div className="testi-card founder-card reveal">
            <div className="testi-quote">
              I&apos;ve spent years working inside the UAE SME funding market — not as a bank
              employee managing a book, but as an advisor sitting on the same side of the table as
              business owners. I&apos;ve seen what kills deals in credit committee. I know which
              lenders are actively deploying capital in which sectors right now. Capmob was built
              on one principle: you should see all your options, on the best available terms,
              before you commit to anything.
            </div>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: "rgba(255,255,255,0.2)" }}>
                RG
              </div>
              <div>
                <div className="testi-name">Ritesh Gupta</div>
                <div className="testi-role">Founder, Capmob · SME Finance Advisor, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
