export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">UAE Financial Intelligence</div>
          <h1 className="hero-title">
            Know your Best Deal,
            <em>before you apply.</em>
          </h1>
          <p className="hero-sub">
            We score 5 lender criteria most SME owners never see — then match you to the
            institution most likely to say yes, on the best available terms.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn-primary">
              Get My Best Deal →
            </a>
            <a href="#how" className="btn-ghost">
              How It Works
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">
                AED 5<span>M+</span>
              </div>
              <div className="stat-label">
                Funded for
                <br />
                UAE SMEs
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                40<span>+</span>
              </div>
              <div className="stat-label">
                Lenders in
                <br />
                our network
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                83<span>%</span>
              </div>
              <div className="stat-label">
                Of rejections had
                <br />a fixable gap
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-num">0</div>
              <div className="stat-label">
                Lender contacts
                <br />
                without consent
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="deal-card">
            <div className="card-tag">Best Deal Secured</div>
            <div className="card-status">
              <div className="status-dot" />
              <div className="status-text">Complete</div>
            </div>
            <div className="card-amount">AED 3,200,000</div>
            <div className="card-subtitle">Working capital facility approved</div>
            <div className="card-grid">
              <div className="card-field">
                <div className="field-label">Rate</div>
                <div className="field-val">Lowest Cost</div>
              </div>
              <div className="card-field">
                <div className="field-label">Tenure</div>
                <div className="field-val">12 months</div>
              </div>
              <div className="card-field">
                <div className="field-label">Collateral</div>
                <div className="field-val">None required</div>
              </div>
              <div className="card-field">
                <div className="field-label">Timeline</div>
                <div className="field-val">2 working days</div>
              </div>
            </div>
            <div className="card-trust">No credit impact · No obligation to proceed</div>
          </div>
          <div className="float-card fc-1">
            <div className="fc-mini">
              <div className="fc-name">Shwetha Menon</div>
              <div className="fc-detail">Pita Pan · F&B · Dubai</div>
              <div className="fc-amount">AED 1.2M approved ✓</div>
            </div>
          </div>
          <div className="float-card fc-2">
            <div className="fc-mini">
              <div className="fc-name">George Ivanov</div>
              <div className="fc-detail">Al NISCON · Trade</div>
              <div className="fc-amount">AED 800K approved ✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
