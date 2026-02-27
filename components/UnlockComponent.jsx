"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const UnlockComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url("/images/cta-bg.jpg")' }} />
      <div className="absolute inset-0 bg-[#050507]/70" />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(0,128,128,0.15) 0%, transparent 60%)" }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase mb-6">Ready to start?</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Let&apos;s build something <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether it&apos;s an AI-powered platform, a mobile app, or a full-scale digital transformation — we&apos;re ready when you are.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f4e1c1] text-[#050507] font-heading font-semibold text-base py-4 px-10 rounded-xl glow-btn transition-all duration-300">
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link href="/clients" className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-[#f4e1c1] hover:border-[#008080]/30 font-heading font-medium text-base py-4 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm">
            See Our Clients
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UnlockComponent;
