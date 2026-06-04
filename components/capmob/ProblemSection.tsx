export default function ProblemSection() {
  return (
    <section id="problem">
      <div className="max-w">
        <div className="section-label reveal">The Real Problem</div>
        <h2 className="section-title reveal">
          You&apos;re not unfundable.
          <br />
          <em>You were just talking to the wrong lender.</em>
        </h2>
        <p className="section-sub reveal">
          Banks have rigid credit appetites. If your business doesn&apos;t fit their template
          today, they say no. That&apos;s not a verdict on your business — it&apos;s a lender
          mismatch.
        </p>
        <div className="criteria-grid">
          <div className="criteria-left reveal">
            <div className="big-stat">83%</div>
            <div className="big-stat-label">
              of rejected UAE SMEs had a gap they could have identified and fixed before
              applying.
            </div>
            <br />
            <br />
            <div className="section-sub" style={{ fontSize: ".9rem" }}>
              Banks evaluate on <strong>5 criteria</strong>. Most owners only know 1. The
              Hidden 4 determine your outcome — silently.
            </div>
          </div>
          <div className="criteria-cards">
            <div className="criteria-card visible reveal reveal-delay-1">
              <span className="c-badge badge-visible">✓ Visible to you</span>
              <div className="c-title">AECB Credit Score</div>
              <div className="c-desc">
                UAE credit bureau score. The only factor most SME owners ever see before
                applying.
              </div>
            </div>
            <div className="criteria-card hidden-crit reveal reveal-delay-2">
              <span className="c-badge badge-hidden">Hidden from applicants</span>
              <div className="c-title">Debt Service Coverage Ratio</div>
              <div className="c-desc">
                Can your cash flow service new debt? The most common silent rejection reason.
              </div>
            </div>
            <div className="criteria-card hidden-crit reveal reveal-delay-1">
              <span className="c-badge badge-hidden">Hidden from applicants</span>
              <div className="c-title">Revenue Consistency</div>
              <div className="c-desc">
                Lenders weight 3-year trends. A strong latest year can&apos;t rescue an
                inconsistent history.
              </div>
            </div>
            <div className="criteria-card hidden-crit reveal reveal-delay-2">
              <span className="c-badge badge-hidden">Hidden from applicants</span>
              <div className="c-title">Banking Behaviour</div>
              <div className="c-desc">
                Average balances, overdraft patterns, payment behaviour — all scored, never
                disclosed.
              </div>
            </div>
            <div
              className="criteria-card hidden-crit reveal"
              style={{ gridColumn: "1 / -1" }}
            >
              <span className="c-badge badge-hidden">Hidden from applicants</span>
              <div className="c-title">Business Vintage</div>
              <div className="c-desc">
                How long you&apos;ve been operating. Under 2 years is a red flag. Over 5 unlocks
                premium rates. You&apos;re never told the thresholds.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
