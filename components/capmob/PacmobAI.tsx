"use client";

import { motion } from "framer-motion";

const questions = [
  { q: "Can I get funding?", x: "4%", y: "6%" },
  { q: "Why was I rejected?", x: "68%", y: "12%" },
  { q: "Which lender fits me?", x: "8%", y: "74%" },
  { q: "How do I improve my profile?", x: "58%", y: "78%" },
];

export function PacmobAI() {
  return (
    <div className="relative mx-auto min-h-[520px] w-full max-w-[900px] overflow-hidden md:overflow-visible">
      <div className="absolute inset-x-8 top-16 bottom-12 rounded-full bg-[#FF6B00]/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
          <div className="absolute inset-0 radial-orange blur-3xl" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #FFD9A8 0%, #FF8A00 30%, #FF6B00 55%, #4a1500 100%)",
              boxShadow:
                "0 0 80px #FF6B00, 0 0 200px rgba(255,107,0,0.5), inset -20px -30px 60px rgba(0,0,0,0.6), inset 10px 15px 40px rgba(255,255,255,0.2)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-[-10%] rounded-full border border-[#FF6B00]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transform: "rotateX(70deg)" }}
          />
          <motion.div
            className="absolute inset-[-25%] rounded-full border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            style={{ transform: "rotateX(70deg) rotateZ(40deg)" }}
          />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#FF6B00]/40"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            />
          ))}
        </div>
      </div>

      {questions.map((qq, i) => (
        <motion.div
          key={qq.q}
          className="glass-strong absolute max-w-[210px] rounded-full px-4 py-2.5 text-xs text-[#FFF8F0] sm:px-5 sm:py-3 sm:text-sm"
          style={{ left: qq.x, top: qq.y }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.7 }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className="block"
          >
            <span className="mr-2 text-[#FF8A00]">›</span>
            {qq.q}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}
