"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const UnlockComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#050507] py-32 px-6 overflow-hidden"
    >
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.5) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00f0ff] font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Ready to start?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether it&apos;s an AI-powered platform, a mobile app, or a
            full-scale digital transformation — we&apos;re ready when you are.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#050507] font-heading font-semibold text-base py-4 px-10 rounded-xl glow-btn transition-all duration-300"
          >
            Start a Conversation
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-white/10 text-white/70 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 font-heading font-medium text-base py-4 px-10 rounded-xl transition-all duration-300"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UnlockComponent;
