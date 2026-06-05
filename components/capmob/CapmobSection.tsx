"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CapmobSectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
};

export default function CapmobSection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: CapmobSectionProps) {
  return (
    <section id={id} className="lovable-section relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="text-xs tracking-[0.3em] text-[#FF8A00]">{eyebrow}</div>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] md:text-6xl">{title}</h2>
          {subtitle ? (
            <p className="mt-5 max-w-xl text-lg text-[#B8B8B8]">{subtitle}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
