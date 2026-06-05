"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  calculateAmortization,
  calculateDscr,
  formatAed,
  formatPercent,
  getFrequencyLabel,
  getYearSummaries,
  type PaymentFrequency,
} from "@/lib/amortization";

const LOAN_MIN = 50_000;
const LOAN_MAX = 10_000_000;
const TERM_MIN = 1;
const TERM_MAX = 25;
const RATE_MIN = 0;
const RATE_MAX = 20;

type ScheduleView = "yearly" | "full";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function dscrStatus(dscr: number): { label: string; tone: "good" | "warn" | "bad" } {
  if (dscr >= 1.5) return { label: "Strong — lenders typically prefer 1.25x+", tone: "good" };
  if (dscr >= 1.0) return { label: "Borderline — may need stronger cash flow", tone: "warn" };
  return { label: "Below 1.0x — high repayment risk", tone: "bad" };
}

export default function AmortizationCalculator() {
  const [principal, setPrincipal] = useState(1_500_000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [termYears, setTermYears] = useState(5);
  const [frequency, setFrequency] = useState<PaymentFrequency>("monthly");
  const [annualNoi, setAnnualNoi] = useState(600_000);
  const [scheduleView, setScheduleView] = useState<ScheduleView>("yearly");
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const result = useMemo(
    () =>
      calculateAmortization({
        principal: clamp(principal, LOAN_MIN, LOAN_MAX),
        annualRate: clamp(annualRate, RATE_MIN, RATE_MAX),
        termYears: clamp(termYears, TERM_MIN, TERM_MAX),
        frequency,
      }),
    [principal, annualRate, termYears, frequency],
  );

  const yearSummaries = useMemo(
    () => getYearSummaries(result.schedule, result.paymentsPerYear),
    [result.schedule, result.paymentsPerYear],
  );

  const annualDebtService = result.periodicPayment * result.paymentsPerYear;
  const dscr = calculateDscr(annualNoi, annualDebtService);
  const dscrInfo = dscr !== null ? dscrStatus(dscr) : null;
  const principalShare = result.totalPayment > 0 ? (principal / result.totalPayment) * 100 : 0;
  const interestShare = 100 - principalShare;

  const visibleSchedule =
    scheduleView === "yearly"
      ? null
      : showFullSchedule
        ? result.schedule
        : result.schedule.slice(0, 24);

  return (
    <>
      <div className="page-hero page-hero--centered">
        <div className="hero-grid" aria-hidden />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> › Loan Calculator
          </div>
          <h1 className="page-title reveal">
            Amortization
            <br />
            <em>dashboard.</em>
          </h1>
          <p className="page-sub reveal">
            Model your facility payment, total interest, and DSCR before you apply — the same
            metrics UAE lenders weigh when reviewing SME term loans.
          </p>
        </div>
      </div>

      <section className="calc-section">
        <div className="calc-max-w">
          <div className="calc-layout">
            <aside className="calc-inputs reveal">
              <div className="calc-panel">
                <div className="section-label">Loan inputs</div>
                <h2 className="calc-panel-title">Facility parameters</h2>

                <div className="calc-field">
                  <div className="calc-field-head">
                    <label htmlFor="loan-amount">Loan amount</label>
                    <span className="calc-field-val">{formatAed(principal)}</span>
                  </div>
                  <input
                    id="loan-amount"
                    type="range"
                    min={LOAN_MIN}
                    max={LOAN_MAX}
                    step={50_000}
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="calc-range"
                  />
                  <input
                    type="number"
                    min={LOAN_MIN}
                    max={LOAN_MAX}
                    step={10_000}
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value) || LOAN_MIN)}
                    className="calc-number"
                  />
                </div>

                <div className="calc-field">
                  <div className="calc-field-head">
                    <label htmlFor="interest-rate">Annual interest rate</label>
                    <span className="calc-field-val">{formatPercent(annualRate)}</span>
                  </div>
                  <input
                    id="interest-rate"
                    type="range"
                    min={RATE_MIN}
                    max={RATE_MAX}
                    step={0.1}
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="calc-range"
                  />
                  <input
                    type="number"
                    min={RATE_MIN}
                    max={RATE_MAX}
                    step={0.1}
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value) || 0)}
                    className="calc-number"
                  />
                </div>

                <div className="calc-field">
                  <div className="calc-field-head">
                    <label htmlFor="term-years">Term</label>
                    <span className="calc-field-val">
                      {termYears} year{termYears !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <input
                    id="term-years"
                    type="range"
                    min={TERM_MIN}
                    max={TERM_MAX}
                    step={1}
                    value={termYears}
                    onChange={(e) => setTermYears(Number(e.target.value))}
                    className="calc-range"
                  />
                  <input
                    type="number"
                    min={TERM_MIN}
                    max={TERM_MAX}
                    step={1}
                    value={termYears}
                    onChange={(e) => setTermYears(Number(e.target.value) || TERM_MIN)}
                    className="calc-number"
                  />
                </div>

                <div className="calc-field">
                  <label htmlFor="frequency">Payment frequency</label>
                  <select
                    id="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value as PaymentFrequency)}
                    className="calc-select"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                  </select>
                </div>

                <div className="calc-field calc-field--divider">
                  <div className="calc-field-head">
                    <label htmlFor="annual-noi">Annual NOI (for DSCR)</label>
                    <span className="calc-field-val">{formatAed(annualNoi)}</span>
                  </div>
                  <input
                    id="annual-noi"
                    type="range"
                    min={0}
                    max={5_000_000}
                    step={25_000}
                    value={annualNoi}
                    onChange={(e) => setAnnualNoi(Number(e.target.value))}
                    className="calc-range"
                  />
                  <p className="calc-hint">
                    Net operating income before debt service — used to estimate lender-readiness.
                  </p>
                </div>
              </div>
            </aside>

            <div className="calc-dashboard reveal reveal-delay-1">
              <div className="deal-card calc-deal-card">
                <div className="card-tag">Facility snapshot</div>
                <div className="card-status">
                  <span className="status-dot" />
                  <span className="status-text">Live calculation</span>
                </div>
                <div className="card-amount">{formatAed(result.periodicPayment)}</div>
                <div className="card-subtitle">
                  {getFrequencyLabel(frequency)} payment · {formatAed(principal)} principal ·{" "}
                  {formatPercent(annualRate)} p.a.
                </div>

                <div className="card-grid calc-kpi-grid">
                  <div className="card-field">
                    <div className="field-label">Total repayment</div>
                    <div className="field-val">{formatAed(result.totalPayment)}</div>
                  </div>
                  <div className="card-field">
                    <div className="field-label">Total interest</div>
                    <div className="field-val calc-accent">{formatAed(result.totalInterest)}</div>
                  </div>
                  <div className="card-field">
                    <div className="field-label">Annual debt service</div>
                    <div className="field-val">{formatAed(annualDebtService)}</div>
                  </div>
                  <div className="card-field">
                    <div className="field-label">DSCR</div>
                    <div className={`field-val ${dscrInfo ? `calc-dscr--${dscrInfo.tone}` : ""}`}>
                      {dscr !== null ? `${dscr.toFixed(2)}x` : "—"}
                    </div>
                  </div>
                </div>

                {dscrInfo && (
                  <p className={`calc-dscr-note calc-dscr-note--${dscrInfo.tone}`}>
                    {dscrInfo.label}
                  </p>
                )}

                <div className="calc-breakdown">
                  <div className="calc-breakdown-head">
                    <span>Principal vs interest</span>
                    <span>
                      {formatPercent(interestShare, 0)} interest over {termYears}y
                    </span>
                  </div>
                  <div className="calc-breakdown-bar" role="img" aria-label="Principal vs interest breakdown">
                    <div
                      className="calc-breakdown-principal"
                      style={{ width: `${principalShare}%` }}
                    />
                    <div
                      className="calc-breakdown-interest"
                      style={{ width: `${interestShare}%` }}
                    />
                  </div>
                  <div className="calc-breakdown-legend">
                    <span>
                      <i className="calc-dot calc-dot--principal" />
                      Principal {formatAed(principal)}
                    </span>
                    <span>
                      <i className="calc-dot calc-dot--interest" />
                      Interest {formatAed(result.totalInterest)}
                    </span>
                  </div>
                </div>

                <div className="card-trust">
                  {result.totalPeriods} payments · {termYears} year term · AED facility
                </div>
              </div>

              <div className="calc-schedule-panel">
                <div className="calc-schedule-head">
                  <div>
                    <div className="section-label">Amortization schedule</div>
                    <h3 className="calc-schedule-title">Payment breakdown</h3>
                  </div>
                  <div className="calc-view-toggle">
                    <button
                      type="button"
                      className={scheduleView === "yearly" ? "active" : ""}
                      onClick={() => setScheduleView("yearly")}
                    >
                      By year
                    </button>
                    <button
                      type="button"
                      className={scheduleView === "full" ? "active" : ""}
                      onClick={() => setScheduleView("full")}
                    >
                      By period
                    </button>
                  </div>
                </div>

                <div className="calc-table-wrap">
                  {scheduleView === "yearly" ? (
                    <table className="calc-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Principal</th>
                          <th>Interest</th>
                          <th>Ending balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearSummaries.map((row) => (
                          <tr key={row.year}>
                            <td>Year {row.year}</td>
                            <td>{formatAed(row.totalPrincipal)}</td>
                            <td className="calc-accent">{formatAed(row.totalInterest)}</td>
                            <td>{formatAed(row.endingBalance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <>
                      <table className="calc-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Payment</th>
                            <th>Principal</th>
                            <th>Interest</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {visibleSchedule?.map((row) => (
                            <tr key={row.period}>
                              <td>{row.period}</td>
                              <td>{formatAed(row.payment)}</td>
                              <td>{formatAed(row.principal)}</td>
                              <td className="calc-accent">{formatAed(row.interest)}</td>
                              <td>{formatAed(row.balance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {!showFullSchedule && result.schedule.length > 24 && (
                        <button
                          type="button"
                          className="calc-expand-btn"
                          onClick={() => setShowFullSchedule(true)}
                        >
                          Show all {result.totalPeriods} payments
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
