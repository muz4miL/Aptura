"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const HeroPic = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btnRef.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-transparent to-[#050507]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/20 via-transparent to-[#050507]/20" />

      {/* Content — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 lg:px-24 pb-8 md:pb-14">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
          >
            Build What&apos;s <span className="gradient-text">Next</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mt-4 leading-relaxed"
          >
            Software, AI & digital experiences — engineered to scale.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            <Link
              href="/contact"
              ref={btnRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="px-7 py-3 bg-[#f4e1c1] text-[#050507] font-heading font-semibold text-sm rounded-lg glow-btn transition-all duration-200"
            >
              Start a Project
            </Link>

            <Link
              href="/case-studies"
              className="px-7 py-3 border border-white/20 text-white/90 font-heading font-medium text-sm rounded-lg hover:border-[#008080]/40 hover:bg-white/5 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip at the very bottom edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/5 bg-[#050507]/80 backdrop-blur-sm"
      >
        <div className="animate-marquee flex whitespace-nowrap py-2.5 text-white/20 font-heading text-[11px] uppercase tracking-[0.3em]">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6">Software Engineering</span>
              <span className="mx-2 text-[#f4e1c1]/30">&#x2022;</span>
              <span className="mx-6">AI &amp; Machine Learning</span>
              <span className="mx-2 text-[#008080]/30">&#x2022;</span>
              <span className="mx-6">Cloud Architecture</span>
              <span className="mx-2 text-[#f4e1c1]/30">&#x2022;</span>
              <span className="mx-6">Cybersecurity</span>
              <span className="mx-2 text-[#008080]/30">&#x2022;</span>
              <span className="mx-6">UI/UX Design</span>
              <span className="mx-2 text-[#f4e1c1]/30">&#x2022;</span>
              <span className="mx-6">IoT Solutions</span>
              <span className="mx-2 text-[#008080]/30">&#x2022;</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroPic;
