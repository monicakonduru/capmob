"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Coins,
  CreditCard,
  Repeat,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";

type Node = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Angle on ring (degrees, 0 = right, 90 = bottom) */
  angle: number;
  /** Which ring (0..2) */
  ring: number;
  delay: number;
};

const NODES: Node[] = [
  { label: "Cash Flow", Icon: Activity, angle: -110, ring: 2, delay: 0.0 },
  { label: "Funding", Icon: Coins, angle: -55, ring: 2, delay: 0.3 },
  { label: "Risk", Icon: ShieldCheck, angle: 10, ring: 2, delay: 0.6 },
  { label: "Growth", Icon: TrendingUp, angle: 70, ring: 2, delay: 0.9 },
  { label: "Trade", Icon: Repeat, angle: 135, ring: 2, delay: 1.2 },
  { label: "Credit Health", Icon: CreditCard, angle: -175, ring: 2, delay: 1.5 },
];

export function Hero3D() {
  return (
    <section
      id="hero"
      className="hero-3d relative isolate min-h-screen overflow-hidden bg-[var(--ink)] pt-24 text-cream"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--cream) 30%, transparent) 1px, transparent 0)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%)",
          }}
        />
        <div className="absolute right-[-15%] top-1/2 h-[120vh] w-[120vh] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--ember)_20%,transparent)_0%,transparent_55%)]" />
        <div className="absolute right-[5%] top-[20%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--ember)_30%,transparent)_0%,transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
        {/* LEFT — copy */}
        <div className="hero-copy lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-copy__eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
            AI-Powered Financial Intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hero-copy__title"
          >
            <span className="hero-copy__title-line">
              Financial <span className="hero-copy__title-accent">Intelligence</span>
            </span>
            <span className="hero-copy__title-subline">for UAE SMEs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-copy__sub"
          >
            Turn fragmented financial data into actionable insights, funding readiness,
            and smarter growth decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hero-copy__actions"
          >
            <a href="#cta" className="hero-copy__btn-primary group">
              Get Your Financial Intelligence Score
              <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#cta" className="hero-copy__btn-ghost">
              Book a Strategy Session
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="hero-copy__trust-line">
              <ShieldCheck className="h-4 w-4 shrink-0 text-ember" aria-hidden />
              Trusted by ambitious SMEs across the UAE
            </p>
            <div className="hero-copy__trust-meta">
              <span>Bank-grade Security</span>
              <span className="hero-copy__trust-divider" aria-hidden />
              <span>AI-Powered Insights</span>
              <span className="hero-copy__trust-divider" aria-hidden />
              <span>UAE Focused</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — 3D orbital stage */}
        <div className="lg:col-span-6">
          <OrbitStage />
        </div>
      </div>
    </section>
  );
}

function OrbitStage() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotY = useTransform(sx, [-1, 1], [-14, 14]);
  const rotX = useTransform(sy, [-1, 1], [10, -10]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[600px]"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute left-1/2 top-[68%] h-[40%] w-[80%] -translate-x-1/2 rounded-[50%] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse, color-mix(in oklab, var(--ember) 35%, transparent) 0%, transparent 65%)",
            filter: "blur(30px)",
            transform: "rotateX(75deg)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            transform: "rotateX(68deg) rotateZ(-12deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {[0.5, 0.72, 0.95].map((scale, i) => (
            <Ring key={i} scale={scale} index={i} mounted={mounted} />
          ))}

          <div
            className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--ember) 50%, transparent) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-1/2 h-[30%] w-[30%]"
          style={{
            transform: "translate3d(-50%, -50%, 80px)",
            transformStyle: "preserve-3d",
          }}
        >
          <Core />
        </div>

        <div
          className="absolute inset-0"
          style={{
            transform: "rotateX(68deg) rotateZ(-12deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {NODES.map((n) => (
            <NodeOnRing key={n.label} node={n} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Ring({
  scale,
  index,
  mounted,
}: {
  scale: number;
  index: number;
  mounted: boolean;
}) {
  const size = `${scale * 100}%`;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        translate: "-50% -50%",
        background:
          "conic-gradient(from 0deg, transparent 0%, color-mix(in oklab, var(--ember) 60%, transparent) 25%, transparent 50%, color-mix(in oklab, var(--ember) 30%, transparent) 75%, transparent 100%)",
        WebkitMask:
          "radial-gradient(circle, transparent calc(50% - 1.5px), black calc(50% - 1.5px), black calc(50% + 0.5px), transparent calc(50% + 0.5px))",
        mask: "radial-gradient(circle, transparent calc(50% - 1.5px), black calc(50% - 1.5px), black calc(50% + 0.5px), transparent calc(50% + 0.5px))",
        opacity: mounted ? 0.9 : 0,
        transition: "opacity 1s ease",
      }}
      animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
      transition={{ duration: 50 + index * 18, ease: "linear", repeat: Infinity }}
    >
      <span
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full"
        style={{
          background: "var(--ember)",
          boxShadow:
            "0 0 12px var(--ember), 0 0 28px color-mix(in oklab, var(--ember) 60%, transparent)",
        }}
      />
    </motion.div>
  );
}

function Core() {
  return (
    <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
      <div
        className="absolute -inset-6 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ember) 60%, transparent) 0%, transparent 65%)",
          filter: "blur(28px)",
        }}
      />
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative grid h-full w-full place-items-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #fff7ec 0%, color-mix(in oklab, var(--ember) 85%, white) 18%, var(--ember) 45%, #4a1a08 88%, #1a0a04 100%)",
          boxShadow: [
            "inset 0 -22px 40px color-mix(in oklab, var(--ember) 30%, black)",
            "inset 0 12px 24px rgba(255,255,255,0.18)",
            "0 30px 60px -15px color-mix(in oklab, var(--ember) 65%, transparent)",
            "0 0 0 1px color-mix(in oklab, var(--ember) 40%, transparent)",
          ].join(", "),
        }}
      >
        <div
          className="absolute left-[18%] top-[12%] h-[30%] w-[35%] rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, transparent 70%)",
            filter: "blur(4px)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--ember) 80%, white) 0%, transparent 30%)",
            mixBlendMode: "screen",
          }}
        />
        <div className="relative z-10 text-center">
          <div
            className="font-display text-2xl leading-none md:text-3xl"
            style={{
              color: "#fff",
              textShadow: "0 2px 10px rgba(0,0,0,0.4)",
            }}
          >
            CAPMOB
          </div>
          <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-cream/90 md:text-[10px]">
            Intelligence Engine
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function NodeOnRing({ node }: { node: Node }) {
  const { Icon, label, angle, ring, delay } = node;
  const ringScale = [0.5, 0.72, 0.95][ring];
  const radius = ringScale * 50;
  const rad = (angle * Math.PI) / 180;
  const left = `calc(50% + ${Math.cos(rad) * radius}%)`;
  const top = `calc(50% + ${Math.sin(rad) * radius}%)`;

  return (
    <motion.div
      className="absolute"
      style={{
        left,
        top,
        translate: "-50% -50%",
        transform: "rotateZ(12deg) rotateX(-68deg) translateZ(40px)",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 + delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5 + delay, ease: "easeInOut", repeat: Infinity, delay }}
        className="relative grid h-16 w-16 place-items-center rounded-2xl md:h-20 md:w-20"
      >
        <div
          className="absolute -inset-2 rounded-2xl opacity-70"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--ember) 50%, transparent) 0%, transparent 70%)",
            filter: "blur(14px)",
          }}
        />
        <div
          className="absolute inset-0 rounded-2xl border border-cream/15"
          style={{
            background:
              "linear-gradient(145deg, color-mix(in oklab, var(--cream) 14%, transparent) 0%, color-mix(in oklab, var(--cream) 4%, transparent) 100%)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: [
              "inset 0 1px 0 rgba(255,255,255,0.25)",
              "inset 0 -16px 28px color-mix(in oklab, var(--ember) 18%, transparent)",
              "0 14px 30px -10px rgba(0,0,0,0.5)",
            ].join(", "),
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-1 px-1 text-center">
          <Icon className="h-5 w-5 text-ember md:h-6 md:w-6" />
          <span className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-cream/95 md:text-[9px]">
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
