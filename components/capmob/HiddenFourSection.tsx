"use client";

import CapmobSection from "./CapmobSection";
import { HiddenCube } from "./HiddenCube";

export default function HiddenFourSection() {
  return (
    <CapmobSection
      id="hidden"
      eyebrow="THE HIDDEN 4"
      title={
        <>
          Four signals decide
          <br />
          every <span className="text-gradient-orange">approval</span>.
        </>
      }
    >
      <HiddenCube />
    </CapmobSection>
  );
}
