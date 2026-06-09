import type { Metadata } from "next";
import LegalPageShell from "@/components/capmob/LegalPageShell";
import InsightsPage from "@/components/capmob/InsightsPage";

export const metadata: Metadata = {
  title: "Insights — Capmob Financial Services",
  description:
    "Deep dives and field notes from Capmob’s work in the UAE SME funding market — from debt restructuring to BNPL, Islamic finance, and trade finance.",
};

export default function InsightsRoute() {
  return (
    <LegalPageShell>
      <InsightsPage />
    </LegalPageShell>
  );
}

