"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";
import UnlockComponent from "@/components/UnlockComponent";

const values = [
  {
    icon: <FaBolt />,
    title: "Engineering Excellence",
    description:
      "We write code that lasts. Clean architecture, rigorous testing, and performance-first thinking in every line.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation-Driven",
    description:
      "We don't follow trends — we study them, then build something better. AI, IoT, and next-gen frameworks are our playground.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security by Default",
    description:
      "Zero-trust architecture, encrypted pipelines, and proactive threat modeling baked into every project from day one.",
  },
  {
    icon: <FaUsers />,
    title: "User-Centric Design",
    description:
      "Every pixel serves a purpose. We design for humans first — intuitive, accessible, and built to convert.",
  },
  {
    icon: <FaRocket />,
    title: "Ship Fast, Ship Right",
    description:
      "Agile sprints, CI/CD pipelines, and rapid iteration. We move with urgency without sacrificing quality.",
  },
  {
    icon: <FaHandshake />,
    title: "Radical Transparency",
    description:
      "No black boxes. Real-time dashboards, weekly demos, and honest communication at every stage of delivery.",
  },
];

const stats = [
  { value: "10+", label: "Projects Shipped", suffix: "" },
  { value: "20+", label: "Technologies Mastered", suffix: "" },
  { value: "10+", label: "Engineers & Designers", suffix: "" },
  { value: "99%", label: "Client Satisfaction", suffix: "" },
];

const timeline = [
  {
    year: "Founded",
    title: "The Beginning",
    description:
      "Aptura was born from a simple idea — build technology that actually works for the people using it. No bloat, no shortcuts.",
  },
  {
    year: "Growth",
    title: "Expanding Horizons",
    description:
      "Grew from a small team to a full-stack engineering force covering web, mobile, AI, cybersecurity, design, and IoT.",
  },
  {
    year: "Today",
    title: "Engineering the Future",
    description:
      "Operating from Islamabad and Peshawar, delivering production-grade software to ambitious businesses across industries.",
  },
];

export default function AboutUsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-[#050507] min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div
          className="absolute top-20 left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,128,128,0.5) 0%, transparent 70%)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,225,193,0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#008080]/50" />
              <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">About Aptura</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#008080]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">
              We engineer software<br /><span className="gradient-text">that matters</span>
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Aptura Tech Solutions is a product-minded engineering studio. We design, build, and ship intelligent software — from AI systems to full-stack platforms — for businesses that refuse to settle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story / Timeline */}
      <section ref={storyRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={storyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#008080] to-transparent" />
              <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white max-w-xl">From idea to engineering force</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[#008080]/30 via-[#008080]/10 to-transparent hidden md:block" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }} className="flex items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0 w-[38px] flex flex-col items-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#008080] shadow-[0_0_12px_rgba(0,128,128,0.4)]" />
                  </div>
                  <div className="bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-7 flex-1 hover:border-[#008080]/10 transition-colors duration-300">
                    <span className="text-[#008080]/50 font-mono text-[11px] tracking-[0.2em] uppercase">{item.year}</span>
                    <h3 className="text-white font-heading font-semibold text-xl mt-2 mb-3">{item.title}</h3>
                    <p className="text-[#94a3b8]/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#008080] to-transparent" />
              <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">What Drives Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white max-w-xl">Principles we build on</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-7 hover:border-[#008080]/15 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(0,128,128,0.05) 0%, transparent 60%)" }} />
                <div className="relative z-10">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#008080]/[0.06] border border-[#008080]/10 text-[#008080]/70 group-hover:text-[#008080] group-hover:border-[#008080]/20 transition-all duration-300 text-base mb-5">{val.icon}</div>
                  <h3 className="text-white font-heading font-semibold text-[16px] mb-3 group-hover:text-[#f4e1c1] transition-colors duration-300">{val.title}</h3>
                  <p className="text-[#94a3b8]/70 text-[13px] leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-10 md:p-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-[#94a3b8]/60 text-sm font-medium tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#008080]/50" />
            <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">Our Mission</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#008080]/50" />
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-snug mb-8">
            &ldquo;To create digital solutions that are fast, reliable, and genuinely useful —{" "}
            <span className="gradient-text">built with care, for real users.</span>&rdquo;
          </blockquote>
          <p className="text-[#94a3b8]/70 text-base max-w-2xl mx-auto leading-relaxed">
            We empower businesses by crafting technology that solves real problems and delivers meaningful impact — not just features, but outcomes that move the needle.
          </p>
        </div>
      </section>

      <UnlockComponent />
    </div>
  );
}
