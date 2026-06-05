export type PaymentFrequency = "monthly" | "quarterly" | "annually";

export type AmortizationInput = {
  principal: number;
  annualRate: number;
  termYears: number;
  frequency: PaymentFrequency;
};

export type AmortizationRow = {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};

export type AmortizationResult = {
  periodicPayment: number;
  totalPayment: number;
  totalInterest: number;
  schedule: AmortizationRow[];
  paymentsPerYear: number;
  totalPeriods: number;
};

export type YearSummary = {
  year: number;
  totalPrincipal: number;
  totalInterest: number;
  endingBalance: number;
};

export function getPaymentsPerYear(frequency: PaymentFrequency): number {
  switch (frequency) {
    case "monthly":
      return 12;
    case "quarterly":
      return 4;
    case "annually":
      return 1;
  }
}

export function getFrequencyLabel(frequency: PaymentFrequency): string {
  switch (frequency) {
    case "monthly":
      return "Monthly";
    case "quarterly":
      return "Quarterly";
    case "annually":
      return "Annually";
  }
}

export function calculateAmortization(input: AmortizationInput): AmortizationResult {
  const { principal, annualRate, termYears, frequency } = input;
  const paymentsPerYear = getPaymentsPerYear(frequency);
  const totalPeriods = Math.max(1, Math.round(termYears * paymentsPerYear));
  const periodicRate = annualRate / 100 / paymentsPerYear;

  let periodicPayment: number;
  if (periodicRate === 0) {
    periodicPayment = principal / totalPeriods;
  } else {
    const factor = Math.pow(1 + periodicRate, totalPeriods);
    periodicPayment = (principal * periodicRate * factor) / (factor - 1);
  }

  const schedule: AmortizationRow[] = [];
  let balance = principal;

  for (let period = 1; period <= totalPeriods; period++) {
    const interest = balance * periodicRate;
    const principalPaid = Math.min(periodicPayment - interest, balance);
    balance = Math.max(0, balance - principalPaid);

    schedule.push({
      period,
      payment: periodicPayment,
      principal: principalPaid,
      interest,
      balance,
    });
  }

  const totalPayment = periodicPayment * totalPeriods;
  const totalInterest = totalPayment - principal;

  return {
    periodicPayment,
    totalPayment,
    totalInterest,
    schedule,
    paymentsPerYear,
    totalPeriods,
  };
}

export function getYearSummaries(
  schedule: AmortizationRow[],
  paymentsPerYear: number,
): YearSummary[] {
  const years = Math.ceil(schedule.length / paymentsPerYear);
  const summaries: YearSummary[] = [];

  for (let year = 1; year <= years; year++) {
    const start = (year - 1) * paymentsPerYear;
    const end = Math.min(year * paymentsPerYear, schedule.length);
    const slice = schedule.slice(start, end);

    summaries.push({
      year,
      totalPrincipal: slice.reduce((sum, row) => sum + row.principal, 0),
      totalInterest: slice.reduce((sum, row) => sum + row.interest, 0),
      endingBalance: slice[slice.length - 1]?.balance ?? 0,
    });
  }

  return summaries;
}

export function calculateDscr(annualNoi: number, annualDebtService: number): number | null {
  if (annualNoi <= 0 || annualDebtService <= 0) return null;
  return annualNoi / annualDebtService;
}

export function formatAed(value: number, fractionDigits = 0): string {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatPercent(value: number, fractionDigits = 1): string {
  return `${value.toFixed(fractionDigits)}%`;
}
