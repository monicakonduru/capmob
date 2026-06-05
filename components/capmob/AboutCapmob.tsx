import Link from "next/link";

const VALUES = [
  {
    num: "01 · PRINCIPLE",
    title: "Your data's defense",
    desc: "Zero lender contact without explicit consent. Your name and company are never shared until you choose to proceed. This is a product commitment, not a legal formality.",
    delay: "reveal-delay-1",
  },
  {
    num: "02 · PRINCIPLE",
    title: "Full transparency",
    desc: "We show you the complete lender view of your business — including the criteria banks use but never explain. No hidden scoring. No information asymmetry.",
    delay: "reveal-delay-2",
  },
  {
    num: "03 · PRINCIPLE",
    title: "No upfront cost. Ever.",
    desc: "Pre-check, assessment, lender matching, and offer presentation are always free. We earn a success fee only when funds are disbursed — paid by the lender, not you.",
    delay: "reveal-delay-3",
  },
  {
    num: "04 · PRINCIPLE",
    title: "Advisor, not vendor",
    desc: "We don't push products. We structure the right facility for how your business actually operates, then match it to the lender whose appetite fits. One relationship. Every type.",
    delay: "reveal-delay-1",
  },
  {
    num: "05 · PRINCIPLE",
    title: "Speed with substance",
    desc: "Most clients receive structured offers within 2 working days. Not by cutting corners — by doing the preparation work in advance that most applicants never do.",
    delay: "reveal-delay-2",
  },
  {
    num: "06 · PRINCIPLE",
    title: "The right lender wins",
    desc: "We track which lenders are actively deploying capital in which sectors right now. Matching to the right lender isn't just about eligibility — it's about timing and fit.",
    delay: "reveal-delay-3",
  },
] as const;

const STATS = [
  { value: "AED 5", suffix: "M+", label: "Total funded for UAE SMEs through our platform", delay: "reveal-delay-1" },
  { value: "40", suffix: "+", label: "Lenders in our network across all facility types", delay: "reveal-delay-2" },
  { value: "83", suffix: "%", label: "Of rejected SMEs had a gap they could have fixed", delay: "reveal-delay-3" },
  { value: "2", suffix: "", label: "Working days to receive your first structured offer", delay: "" },
] as const;

export default function AboutCapmob() {
  return (
    <>
      <div className="about-hero">
        <div className="hero-grid" aria-hidden />
        <div className="about-hero-inner">
          <div className="about-tag reveal">About Capmob</div>
          <h1 className="about-title reveal">
            We sit on <em>your side</em>
            <br />
            of the table.
          </h1>
          <p className="about-sub reveal">
            Not a lender. Not a broker. Not a marketplace. We are the intelligence layer
            between UAE SMEs and the capital they deserve — but couldn&apos;t access alone.
          </p>
        </div>
      </div>

      <section className="about-mission">
        <div className="about-max-w">
          <div className="about-two-col">
            <div>
              <div className="section-label reveal">Our Mission</div>
              <h2 className="section-title reveal">
                Clarity <em>moves</em>
                <br />
                capital.
              </h2>
              <div className="about-prose reveal">
                <p>
                  The UAE SME funding market is structurally unfair to business owners. Banks
                  evaluate applicants on 5 criteria, but only tell you about 1. Lenders have
                  rigid credit appetites and rigid templates. The moment your business doesn&apos;t
                  fit their current model — even temporarily — you get a rejection with no
                  explanation.
                </p>
                <p>
                  That rejection isn&apos;t a verdict on your business. It&apos;s a mismatch. And
                  it&apos;s fixable — if you have the right intelligence, and access to the right
                  lenders.
                </p>
                <p>
                  <strong>
                    Capmob was built to give every UAE SME owner the same information that a
                    seasoned credit advisor would have
                  </strong>{" "}
                  — the lender view of their own business, the gaps that are silently killing
                  their applications, and a direct path to the institutions most likely to say
                  yes.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="big-quote">
                &ldquo;A bank rejection is not a business problem. It&apos;s a lender mismatch.
                My job is to find the right lender for your structure.&rdquo;
              </div>
              <div className="quote-attribution">
                — Ritesh Gupta, Founder · Capmob
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-max-w">
          <div className="section-label reveal">What We Stand For</div>
          <h2 className="section-title reveal">
            The principles that
            <br />
            <em>define everything we build.</em>
          </h2>
          <div className="values-grid">
            {VALUES.map((value) => (
              <div key={value.num} className={`value-card reveal ${value.delay}`}>
                <div className="v-num">{value.num}</div>
                <div className="v-title">{value.title}</div>
                <div className="v-desc">{value.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="about-max-w">
          <div className="section-label reveal">From the Founder</div>
          <h2 className="section-title reveal">
            Built by someone who&apos;s been
            <br />
            on <em>both sides</em> of the deal.
          </h2>
          <div className="founder-card">
            <div>
              <div className="founder-img">
                <div className="founder-img-label">
                  <div className="fil-name">Ritesh Gupta</div>
                  <div className="fil-role">Founder · SME Finance Advisor, UAE</div>
                </div>
              </div>
            </div>
            <div className="founder-prose reveal reveal-delay-2">
              <p>
                I&apos;ve spent years working inside the UAE SME funding market — not as a bank
                employee managing a book, but as an advisor sitting on the same side of the
                table as business owners.
              </p>
              <p>
                I&apos;ve watched perfectly viable businesses get rejected, not because they
                weren&apos;t fundable, but because they walked into the wrong bank, at the wrong
                moment, with their story told in the wrong language.
              </p>
              <p>
                I&apos;ve seen what kills deals in credit committee. I know which lenders are
                actively deploying capital in which sectors right now. And I understand that for
                an SME owner, delayed funding isn&apos;t an inconvenience —{" "}
                <strong>it&apos;s a threat to everything you&apos;ve built.</strong>
              </p>
              <div className="founder-highlight">
                <p>
                  &ldquo;Capmob was built on one principle: you should see all your options, on
                  the best available terms, before you commit to anything. That&apos;s what we
                  deliver.&rdquo;
                </p>
              </div>
              <p>
                Every product we&apos;ve built — CapScore, CapReport, PACMOB — exists to transfer
                that insider knowledge to you. To close the information gap between what banks know
                about your business and what you know about yourself.
              </p>
              <p>The funding market is wider than your bank told you. Let&apos;s find your deal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-numbers">
        <div className="about-max-w">
          <div className="section-label reveal">By the Numbers</div>
          <h2 className="section-title reveal">
            The results speak
            <br />
            <em>for themselves.</em>
          </h2>
          <div className="numbers-grid">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`num-card reveal${stat.delay ? ` ${stat.delay}` : ""}`}
              >
                <div className="num-big">
                  {stat.value}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="num-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <h2 className="cta-band-title">Ready to see the full picture?</h2>
        <p className="cta-band-sub">No documents. No name shared. No credit impact. Just clarity.</p>
        <Link href="/#cta" className="btn-white">
          Get My Best Deal — free →
        </Link>
      </div>
    </>
  );
}
