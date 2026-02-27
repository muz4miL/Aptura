"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaMobileAlt, FaBrain, FaShieldAlt, FaPencilRuler, FaMicrochip } from "react-icons/fa";
import UnlockComponent from "@/components/UnlockComponent";

const industries = ["SaaS Platforms", "E-Commerce", "FinTech", "HealthTech", "EdTech", "Real Estate", "Logistics", "Government"];

const capabilities = [
  { icon: <FaCode />, label: "Web Development" },
  { icon: <FaMobileAlt />, label: "App Development" },
  { icon: <FaBrain />, label: "AI & Machine Learning" },
  { icon: <FaShieldAlt />, label: "Cybersecurity" },
  { icon: <FaPencilRuler />, label: "UI/UX Design" },
  { icon: <FaMicrochip />, label: "IoT Solutions" },
];

export default function ClientsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const capsRef = useRef(null);
  const capsInView = useInView(capsRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-[#050507] min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute top-20 right-1/3 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,128,128,0.5) 0%, transparent 70%)", filter: "blur(120px)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#008080]/50" />
              <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">Our Clients</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#008080]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">Trusted by the<br /><span className="gradient-text">ambitious</span></h1>
            <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">We partner with forward-thinking businesses to deliver intelligent software, AI systems, and digital products that create real competitive advantage.</p>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Placeholders */}
      <section ref={gridRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#008080] to-transparent" />
              <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white max-w-xl">Companies we&apos;ve worked with</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative flex items-center justify-center h-36 rounded-2xl bg-[#0a0d14] border border-white/[0.06] hover:border-[#008080]/10 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,128,128,0.04) 0%, transparent 70%)" }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#008080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#008080]/10 to-[#f4e1c1]/10" />
                  </div>
                  <span className="text-[#94a3b8]/30 text-[11px] font-mono tracking-wider">Client Logo</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#008080]/50" />
            <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">Industries</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#008080]/50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">Across every vertical</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }} className="px-5 py-2.5 rounded-full border border-white/[0.06] bg-[#0a0d14] text-[#94a3b8]/70 text-sm font-medium hover:border-[#008080]/15 hover:text-[#f4e1c1]/70 transition-all duration-300 cursor-default">{industry}</motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section ref={capsRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-10 md:p-14">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={capsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">What we deliver</h3>
              <p className="text-[#94a3b8]/60 text-sm max-w-lg mx-auto">End-to-end capabilities across the full spectrum of modern software engineering.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={capsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.07 }} className="group flex items-center gap-3 p-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#008080]/[0.06] border border-[#008080]/10 text-[#008080]/60 group-hover:text-[#008080] transition-colors text-sm flex-shrink-0">{cap.icon}</div>
                  <span className="text-white/80 text-sm font-medium group-hover:text-[#f4e1c1] transition-colors">{cap.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <UnlockComponent />
    </div>
  );
}
