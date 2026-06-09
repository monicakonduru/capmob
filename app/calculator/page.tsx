import type { Metadata } from "next";
import AmortizationCalculator from "@/components/capmob/AmortizationCalculator";
import LegalPageShell from "@/components/capmob/LegalPageShell";

export const metadata: Metadata = {
  title: "Loan Calculator — Capmob Financial Services",
  description:
    "Model SME loan payments, total interest, DSCR, and full amortization schedules for UAE facilities — before you apply.",
};

export default function CalculatorRoute() {
  return (
    <LegalPageShell>
      <AmortizationCalculator />
    </LegalPageShell>
  );
}
