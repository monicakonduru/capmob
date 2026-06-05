import type { Metadata } from "next";
import LegalPageShell from "@/components/capmob/LegalPageShell";
import PrivacyPolicy from "@/components/capmob/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — Capmob",
  description:
    "How Capmob collects, uses, and protects your personal and business information. Zero lender contact without your explicit consent.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell>
      <PrivacyPolicy />
    </LegalPageShell>
  );
}
