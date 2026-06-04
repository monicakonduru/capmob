const LENDERS = [
  "Emirates NBD",
  "First Abu Dhabi Bank",
  "Mashreq",
  "ADCB",
  "Dubai Islamic Bank",
  "RAKBANK",
  "Commercial Bank of Dubai",
  "Emirates Islamic",
  "HSBC",
  "Wio Bank",
  "+ 30 more institutions",
];

export default function Lenders() {
  return (
    <section id="lenders">
      <div className="max-w">
        <div className="lenders-label reveal">Our Lender Network · 40+ Institutions</div>
        <div className="lenders-grid reveal">
          {LENDERS.map((name) => (
            <div key={name} className="lender-pill">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
