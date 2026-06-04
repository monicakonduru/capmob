"use client";

const FAQ_ITEMS = [
  {
    q: "What is private finance and how is it different from a bank loan?",
    a: "Private finance in the UAE covers funding provided by non-bank lenders — private finance companies, NBFCs, and alternative lenders. They're typically faster, more flexible on structure, and willing to consider business profiles that banks decline. Rates can be slightly higher, but the speed and structure often more than compensate — especially when an opportunity has a time constraint.",
  },
  {
    q: "Will you share my name before I agree?",
    a: "No. Your name and company details are never shared with any lender until you've reviewed your offers and actively chosen to proceed. The pre-check and eligibility assessment are completely confidential — with zero credit impact.",
  },
  {
    q: "My bank already rejected me. Can you still help?",
    a: "Very likely, yes. A bank rejection is almost always a lender mismatch — not a verdict on your business. We work with 40+ lenders, including private finance companies and NBFCs actively deploying capital in sectors and structures that traditional banks currently avoid. Our first step is always to understand why the bank said no — because that tells us exactly where to go next.",
  },
  {
    q: "Do I need collateral?",
    a: "Not always. Unsecured working capital facilities exist for businesses with strong revenue and consistent banking history. Invoice discounting and factoring structures are secured against receivables, not property. We match the structure to your profile — not the other way around.",
  },
  {
    q: "How quickly can I expect offers after the pre-check?",
    a: "Most clients receive their first structured offers within 2 working days. Complex structures or larger deal sizes may take 3–5 days. We track every open case to ensure nothing sits.",
  },
  {
    q: "What does it cost me?",
    a: "The pre-check, eligibility assessment, lender matching, and offer presentation are free. We earn a transparent success fee only when funds are disbursed and your facility is live — paid by the lender, not added to your borrowing cost. No upfront charges, no obligation, no hidden fees.",
  },
];

export default function FAQ() {
  const toggleFaq = (el: HTMLElement) => {
    const item = el.parentElement;
    if (!item) return;
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  };

  return (
    <section id="faq">
      <div className="max-w">
        <div className="faq-layout">
          <div className="faq-left">
            <div className="section-label reveal">FAQs</div>
            <h2 className="section-title reveal" style={{ fontSize: "2.5rem" }}>
              What most SMEs ask
              <br />
              <em>before their first call.</em>
            </h2>
            <p className="section-sub reveal" style={{ fontSize: ".9rem", marginTop: "16px" }}>
              Still have questions? Message PACMOB on WhatsApp — it knows your case.
            </p>
          </div>
          <div className="faq-list reveal">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="faq-item">
                <div
                  className="faq-q"
                  onClick={(e) => toggleFaq(e.currentTarget)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFaq(e.currentTarget);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {item.q}
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
