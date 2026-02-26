"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Animated counter hook — only fires when triggered ── */
function useCounter(end, duration = 2200, startCounting = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startCounting || hasRun.current) return;
    hasRun.current = true;
    let start = 0;
    const step = end / (duration / 16);
    let raf;
    const tick = () => {
      start += step;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, startCounting]);

  return count;
}

/* ── Single stat card ── */
const StatCard = ({ item, index, inView }) => {
  const display = useCounter(item.numericValue, 2200, inView);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col items-center text-center p-10 rounded-2xl border border-white/[0.06] bg-[#0a0d12] hover:border-[#00f0ff]/20 transition-all duration-500"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        animation: inView
          ? `fadeUp 0.6s ${index * 0.15}s ease-out forwards`
          : "none",
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 80%, rgba(0,240,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Number */}
      <div className="relative z-10 mb-4">
        <span className="text-6xl lg:text-7xl font-heading font-bold tracking-tight gradient-text">
          {display}
          {item.suffix}
        </span>
      </div>

      {/* Divider */}
      <div className="w-8 h-px bg-[#00f0ff]/30 mb-4 group-hover:w-16 transition-all duration-500" />

      {/* Label */}
      <p className="relative z-10 text-[#94a3b8] text-sm font-mono tracking-[0.15em] uppercase group-hover:text-white/80 transition-colors duration-300">
        {item.title}
      </p>
    </div>
  );
};

/* ── Data ── */
const numbersData = [
  { title: "Projects Delivered", numericValue: 10, suffix: "+" },
  { title: "Engineers & Designers", numericValue: 10, suffix: "+" },
  { title: "Client Retention", numericValue: 100, suffix: "%" },
  { title: "Tech Stack Mastery", numericValue: 20, suffix: "+" },
];

/* ── Main ── */
const NumbersMain = () => {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%",
      once: true,
      onEnter: () => setTriggered(true),
    });

    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050507] py-28 px-6 overflow-hidden"
    >
      {/* fadeUp keyframes */}
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #00f0ff, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="flex items-center gap-4 mb-16"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: triggered ? "fadeUp 0.5s ease-out forwards" : "none",
          }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-[#00f0ff] to-transparent" />
          <span className="text-[#00f0ff] font-mono text-xs tracking-[0.3em] uppercase">
            By the Numbers
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {numbersData.map((item, idx) => (
            <StatCard key={idx} item={item} index={idx} inView={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersMain;
