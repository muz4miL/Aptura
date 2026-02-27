"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

/* ── Accent colors ── */
const accents = [
  "#008080",
  "#c4956a",
  "#5f9ea0",
  "#d4a574",
  "#8fbc8f",
  "#b8860b",
];

/* ── Data ── */
const disciplines = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
    name: "Artificial Intelligence",
    tagline: "Intelligence at Scale",
    desc: "AI systems that think, learn, and adapt — turning raw data into strategic advantage.",
    pills: [
      "Generative AI",
      "LLM Fine-tuning",
      "Predictive Analytics",
      "NLP",
      "Computer Vision",
    ],
    link: "/service/ai",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    name: "Web Development",
    tagline: "Engineered for Speed",
    desc: "Scalable web platforms on modern architectures — millions of interactions, zero compromises.",
    pills: [
      "Web Apps",
      "Enterprise Portals",
      "Headless CMS",
      "PWA",
      "API Integration",
    ],
    link: "/service/web-development",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    name: "App Development",
    tagline: "Native & Cross-Platform",
    desc: "Pixel-perfect mobile experiences — from concept through launch across every platform.",
    pills: [
      "Cross-Platform",
      "Native iOS & Android",
      "Enterprise Mobility",
      "Offline-first",
    ],
    link: "/service/mobile-apps",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    name: "Cybersecurity",
    tagline: "Defense in Depth",
    desc: "Proactive strategies that identify vulnerabilities before attackers do.",
    pills: ["Threat Detection", "Pen Testing", "Cloud Security", "Zero-Trust"],
    link: "/service/cybersecurity",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    name: "UI/UX Design",
    tagline: "Design with Intent",
    desc: "Interfaces that feel intuitive, look stunning, and drive measurable outcomes.",
    pills: [
      "Design Systems",
      "User Research",
      "Prototyping",
      "Responsive",
      "Accessibility",
    ],
    link: "/service/ui-ux",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
        />
      </svg>
    ),
    name: "IoT Solutions",
    tagline: "Connected Intelligence",
    desc: "IoT ecosystems that transform raw sensor data into actionable real-time insights.",
    pills: [
      "Edge Computing",
      "Industrial IoT",
      "Sensor Integration",
      "Monitoring",
    ],
    link: "/service/iot",
  },
];

/* ── Direction each card flies FROM (toward center) ── */
const flyDirections = [
  { x: 280, y: 120, rotate: -6 },
  { x: 0, y: 150, rotate: 3 },
  { x: -280, y: 120, rotate: 5 },
  { x: 280, y: -120, rotate: 4 },
  { x: 0, y: -150, rotate: -3 },
  { x: -280, y: -120, rotate: -5 },
];

/* ── Main Component ── */
const ExpertiseMain = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const glowRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx;
    /* One rAF ensures the DOM is fully painted after Next.js hydration */
    const raf = requestAnimationFrame(() => {
      const section = sectionRef.current;
      const header = headerRef.current;
      const glow = glowRef.current;
      const cards = cardsRef.current.filter(Boolean);

      console.log("[Expertise] refs →", {
        section: !!section,
        header: !!header,
        glow: !!glow,
        cards: cards.length,
      });

      if (!section || !header || !glow || cards.length === 0) {
        console.warn("[Expertise] Aborting – missing refs");
        return;
      }

      ctx = gsap.context(() => {
        /* ─── Step 1: Hide everything with gsap.set (immediate) ─── */
        gsap.set(glow, { autoAlpha: 0, scale: 0.2 });
        gsap.set(header, { autoAlpha: 0, y: 40 });
        cards.forEach((card, i) => {
          const d = flyDirections[i];
          gsap.set(card, {
            autoAlpha: 0,
            scale: 0.35,
            x: d.x,
            y: d.y,
            rotation: d.rotate,
          });
        });

        /* ─── Step 2: Pinned scroll-driven timeline ─── */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            // markers: true,   // ← uncomment to debug
          },
        });

        console.log("[Expertise] ScrollTrigger timeline created");

        /* ─── Step 3: Animate IN using tl.to() ─── */

        /* 3a  – Glow pulses (0 → 1) */
        tl.to(
          glow,
          {
            autoAlpha: 1,
            scale: 1.5,
            duration: 1,
            ease: "power2.out",
          },
          0,
        );

        /* 3b  – Header slides in (0.3 → 1.3) */
        tl.to(
          header,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          0.3,
        );

        /* 3c  – Cards fan out from center, staggered (0.8 → varying) */
        cards.forEach((card, i) => {
          tl.to(
            card,
            {
              autoAlpha: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotation: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
            },
            0.8 + i * 0.2,
          );
        });

        /* 3d  – Hold phase so all cards stay visible */
        tl.to({}, { duration: 0.8 });

        /* 3e  – Glow fades during hold */
        tl.to(
          glow,
          {
            autoAlpha: 0,
            scale: 2.5,
            duration: 0.6,
          },
          "-=0.6",
        );
      }, section);

      /* Force ScrollTrigger to re-measure after layout settles */
      ScrollTrigger.refresh();
      console.log("[Expertise] ScrollTrigger.refresh() done");
    });

    return () => {
      cancelAnimationFrame(raf);
      if (ctx) ctx.revert();
    };
  }, []);

  /* ── 3D tilt on hover (only rotateX/Y — doesn't conflict with scroll timeline) ── */
  const handleMouseMove = (e, idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 14,
      rotateX: -y * 10,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    setHoveredIdx(null);
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section ref={sectionRef} className="relative bg-[#050507]">
      <div
        className="relative min-h-screen flex flex-col justify-center py-24 sm:py-16"
        style={{ perspective: "1000px" }}
      >
        {/* Center Glow */}
        <div
          ref={glowRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(0,128,128,0.1) 0%, rgba(196,149,106,0.05) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Background Decor */}
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.02] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #c4956a, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#008080]/60" />
              <span className="text-[#008080] font-mono text-[0.7rem] tracking-[0.35em] uppercase">
                What We Do
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#008080]/60" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1]">
              Six disciplines.{" "}
              <span className="gradient-text">One vision.</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {disciplines.map((item, idx) => {
              const accent = accents[idx];
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  className="group relative rounded-2xl border bg-[#090c10]/80 backdrop-blur-md will-change-transform h-full flex flex-col"
                  style={{
                    transformStyle: "preserve-3d",
                    borderColor: isHovered
                      ? `${accent}40`
                      : "rgba(255,255,255,0.06)",
                    boxShadow: isHovered
                      ? `0 20px 40px -10px ${accent}20, 0 0 0 1px ${accent}20`
                      : "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseMove={(e) => {
                    setHoveredIdx(idx);
                    handleMouseMove(e, idx);
                  }}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  {/* Card Gradients */}
                  <div
                    className="absolute top-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${accent}10 0%, transparent 60%)`,
                      opacity: isHovered ? 1 : 0.5,
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 120%, ${accent}08 0%, transparent 50%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  <div className="relative z-10 p-6 lg:p-8 flex flex-col flex-grow">
                    {/* Icon & Tagline */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-400"
                        style={{
                          color: accent,
                          background: isHovered ? `${accent}15` : `${accent}05`,
                          borderColor: isHovered
                            ? `${accent}40`
                            : "rgba(255,255,255,0.08)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="font-mono text-[0.6rem] tracking-[0.2em] uppercase transition-opacity duration-300 font-bold"
                        style={{ color: accent, opacity: isHovered ? 1 : 0.6 }}
                      >
                        {item.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl lg:text-2xl font-heading font-bold mb-3 transition-colors duration-300"
                      style={{ color: isHovered ? "#ffffff" : "#e2e8f0" }}
                    >
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-grow">
                      {item.desc}
                    </p>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.pills.map((pill, i) => (
                        <span
                          key={i}
                          className="text-[0.65rem] px-2.5 py-1 rounded-full transition-all duration-300 border"
                          style={{
                            borderColor: isHovered
                              ? `${accent}30`
                              : "rgba(255,255,255,0.08)",
                            color: isHovered
                              ? `${accent}`
                              : "rgba(255,255,255,0.4)",
                            background: isHovered
                              ? `${accent}08`
                              : "rgba(255,255,255,0.02)",
                          }}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent 10%, ${accent}60 50%, transparent 90%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMain;
