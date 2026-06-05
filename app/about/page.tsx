import type { Metadata } from "next";
import AboutCapmob from "@/components/capmob/AboutCapmob";
import LegalPageShell from "@/components/capmob/LegalPageShell";

export const metadata: Metadata = {
  title: "About Capmob — Financial Intelligence for UAE SMEs",
  description:
    "Not a lender. Not a broker. Not a marketplace. Capmob is the intelligence layer between UAE SMEs and the capital they deserve.",
};

export default function AboutPage() {
  return (
    <LegalPageShell>
      <AboutCapmob />
    </LegalPageShell>
  );
}
