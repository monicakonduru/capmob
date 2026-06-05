"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CUBE_EDGE = 280;
const CUBE_HALF = CUBE_EDGE / 2;

const faces = [
  {
    key: "rev",
    title: "Revenue Consistency",
    value: "92%",
    desc: "12-month variance pattern that lenders silently grade.",
  },
  {
    key: "bank",
    title: "Banking Behaviour",
    value: "A+",
    desc: "Inflow rhythm, returned cheques, average balance shape.",
  },
  {
    key: "dscr",
    title: "DSCR",
    value: "1.84x",
    desc: "Debt service ratio — the silent gate of every credit committee.",
  },
  {
    key: "vint",
    title: "Business Vintage",
    value: "4.2y",
    desc: "Trade license age weighted against your sector's risk band.",
  },
];

const cubeFaces = [
  { transform: `rotateY(0deg) translate3d(0, 0, ${CUBE_HALF}px)` },
  { transform: `rotateY(180deg) translate3d(0, 0, ${CUBE_HALF}px)` },
  { transform: `rotateY(90deg) translate3d(0, 0, ${CUBE_HALF}px)` },
  { transform: `rotateY(-90deg) translate3d(0, 0, ${CUBE_HALF}px)` },
  { transform: `rotateX(90deg) translate3d(0, 0, ${CUBE_HALF}px)` },
  { transform: `rotateX(-90deg) translate3d(0, 0, ${CUBE_HALF}px)` },
];

export function HiddenCube() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-38, 360]);
  const cubeRotate = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2">
      <div className="cube-stage">
        <div className="pointer-events-none absolute inset-0 radial-orange opacity-25 blur-3xl" />
        <div className="cube-perspective">
          <motion.div
            className="cube-scene"
            style={{
              transform: cubeRotate,
              transformStyle: "preserve-3d",
            }}
          >
            {cubeFaces.map((face, i) => (
              <div
                key={i}
                className="cube-face"
                style={{
                  width: CUBE_EDGE,
                  height: CUBE_EDGE,
                  marginLeft: -CUBE_HALF,
                  marginTop: -CUBE_HALF,
                  transform: face.transform,
                }}
              >
                <div className="cube-face__fill" aria-hidden />
                {faces[i] ? (
                  <div className="cube-face__content">
                    <div className="cube-face__label">{faces[i].title}</div>
                    <div className="cube-face__value">{faces[i].value}</div>
                  </div>
                ) : (
                  <div className="cube-face__logo">C</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="space-y-4">
        {faces.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass group rounded-2xl p-6 transition-colors hover:border-[#FF6B00]/40"
          >
            <div className="flex items-baseline justify-between">
              <div className="text-xs tracking-[0.25em] text-[#FF8A00]">0{i + 1}</div>
              <div className="font-display text-3xl text-gradient-orange">{f.value}</div>
            </div>
            <div className="mt-2 font-display text-xl text-[#FFF8F0]">{f.title}</div>
            <p className="mt-1 text-sm text-[#B8B8B8]">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
