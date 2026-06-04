const MARQUEE_LENDERS = [
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
  "40+ Lender Network",
];

export default function Marquee() {
  const items = [...MARQUEE_LENDERS, ...MARQUEE_LENDERS];

  return (
    <div className="marquee-section">
      <div className="marquee-track" id="marqueeTrack">
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className="marquee-item">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
