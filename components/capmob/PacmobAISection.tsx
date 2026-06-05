"use client";

import CapmobSection from "./CapmobSection";
import { PacmobAI } from "./PacmobAI";

export default function PacmobAISection() {
  return (
    <CapmobSection
      id="pacmob"
      eyebrow="PACMOB AI"
      title={
        <>
          Your <span className="text-gradient-orange">financial copilot</span>.
        </>
      }
      subtitle="An always-on intelligence trained on UAE lender behaviour. Ask anything about your funding profile."
    >
      <PacmobAI />
    </CapmobSection>
  );
}
