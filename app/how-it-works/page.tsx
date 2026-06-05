import type { Metadata } from "next";
import HowItWorksPage from "@/components/capmob/HowItWorksPage";
import LegalPageShell from "@/components/capmob/LegalPageShell";

export const metadata: Metadata = {
  title: "How It Works — Capmob",
  description:
    "No sales call. No documents upfront. No obligation. Here's exactly what happens from first contact to funded.",
};

export default function HowItWorksRoute() {
  return (
    <LegalPageShell>
      <HowItWorksPage />
    </LegalPageShell>
  );
}
