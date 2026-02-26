"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── Accent colors ── */
const accents = [
  "#00f0ff",
  "#7c3aed",
  "#22d3ee",
  "#f43f5e",
  "#d4af37",
  "#10b981",
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

/* ── Direction each card flies FROM (toward center) — no measurements needed ── */
/* 3×2 grid: [col, row] → direction vector pointing from grid position toward center */
const flyDirections = [
  { x: 280, y: 120, rotate: -6 } /* top-left → flies from center-right-down */,
  { x: 0, y: 150, rotate: 3 } /* top-center → flies from center-down */,
  { x: -280, y: 120, rotate: 5 } /* top-right → flies from center-left-down */,
  { x: 280, y: -120, rotate: 4 } /* bottom-left → flies from center-right-up */,
  { x: 0, y: -150, rotate: -3 } /* bottom-center → flies from center-up */,
  {
    x: -280,
    y: -120,
    rotate: -5,
  } /* bottom-right → flies from center-left-up */,
];

/* ── Main Component ── */
const ExpertiseMain = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const glowRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    /* Wait a tick for Next.js hydration to complete */
    const frame = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const cards = cardsRef.current.filter(Boolean);
        if (!cards.length) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        /* Phase 1: Glow pulses in */
        tl.fromTo(
          glowRef.current,
          { scale: 0.3, opacity: 0 },
          { scale: 1.4, opacity: 1, duration: 0.2, ease: "power2.out" },
          0,
        );

        /* Phase 2: Header slides in */
        tl.fromTo(
          headerRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
          0.05,
        );

        /* Phase 3: Cards fly from center to grid — staggered */
        cards.forEach((card, i) => {
          const dir = flyDirections[i];
          tl.fromTo(
            card,
            {
              x: dir.x,
              y: dir.y,
              rotation: dir.rotate,
              scale: 0.35,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              duration: 0.25,
              ease: "back.out(1.4)",
            },
            0.25 + i * 0.08,
          );
        });

        /* Phase 4: Glow fades */
        tl.to(
          glowRef.current,
          { scale: 2.5, opacity: 0, duration: 0.15, ease: "power1.in" },
          0.6,
        );

        /* Phase 5: Hold so all cards are visible before unpin */
        tl.to({}, { duration: 0.15 });
      }, sectionRef);

      /* Store for cleanup */
      sectionRef.current._gsapCtx = ctx;
    });

    return () => {
      cancelAnimationFrame(frame);
      if (sectionRef.current?._gsapCtx) {
        sectionRef.current._gsapCtx.revert();
      }
    };
  }, []);

  /* 3D tilt on hover */
  const handleMouseMove = (e, idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 12,
      rotateX: -y * 8,
      scale: 1.03,
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
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <section ref={sectionRef} className="relative bg-[#050507]">
      <div
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center py-24 sm:py-16"
        style={{ perspective: "1000px" }}
      >
        {/* Center glow — the "source" where cards emerge from */}
        <div
          ref={glowRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,102,255,0.05) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Ambient bg accents */}
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.02] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#00f0ff]/60" />
              <span className="text-[#00f0ff] font-mono text-[0.65rem] tracking-[0.35em] uppercase">
                What We Do
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#00f0ff]/60" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]">
              Six disciplines.{" "}
              <span className="gradient-text">One vision.</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {disciplines.map((item, idx) => {
              const accent = accents[idx];
              const isHovered = hoveredIdx === idx;
              return (
                <Link
                  href={item.link}
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="group relative rounded-xl border bg-[#090c10]/90 backdrop-blur-sm overflow-hidden will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    borderColor: isHovered
                      ? `${accent}30`
                      : "rgba(255,255,255,0.04)",
                    boxShadow: isHovered
                      ? `0 20px 50px -15px ${accent}15, 0 0 0 1px ${accent}15, inset 0 1px 0 0 rgba(255,255,255,0.05)`
                      : "0 0 0 0 transparent, inset 0 1px 0 0 rgba(255,255,255,0.03)",
                    transition: "border-color 0.4s, box-shadow 0.4s",
                  }}
                  onMouseMove={(e) => {
                    setHoveredIdx(idx);
                    handleMouseMove(e, idx);
                  }}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  {/* Top gradient wash */}
                  <div
                    className="absolute top-0 left-0 right-0 h-24 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${accent}08 0%, transparent 60%)`,
                      opacity: isHovered ? 1 : 0.3,
                    }}
                  />

                  {/* Hover spotlight */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 120%, ${accent}0a 0%, transparent 50%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  <div className="relative z-10 p-5">
                    {/* Icon + Tagline row */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0 transition-all duration-400"
                        style={{
                          color: accent,
                          background: isHovered ? `${accent}15` : `${accent}06`,
                          borderColor: isHovered
                            ? `${accent}30`
                            : "rgba(255,255,255,0.06)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="font-mono text-[0.55rem] tracking-[0.22em] uppercase transition-opacity duration-300"
                        style={{ color: accent, opacity: isHovered ? 1 : 0.7 }}
                      >
                        {item.tagline}
                      </span>
                    </div>

                    {/* Name */}
                    <h3
                      className="text-[1.05rem] font-heading font-semibold mb-1.5 transition-colors duration-300"
                      style={{ color: isHovered ? accent : "#ffffff" }}
                    >
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#94a3b8] text-[0.8rem] leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Pills row */}
                    <div className="flex flex-wrap gap-1">
                      {item.pills.map((pill, i) => (
                        <span
                          key={i}
                          className="text-[0.6rem] px-2 py-0.5 rounded-full transition-all duration-300"
                          style={{
                            border: `1px solid ${isHovered ? `${accent}25` : "rgba(255,255,255,0.05)"}`,
                            color: isHovered
                              ? `${accent}cc`
                              : "rgba(255,255,255,0.3)",
                            background: isHovered
                              ? `${accent}06`
                              : "transparent",
                          }}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent 10%, ${accent}40 50%, transparent 90%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  {/* Corner arrow */}
                  <div
                    className="absolute top-4 right-4 transition-all duration-400"
                    style={{
                      color: isHovered ? accent : "transparent",
                      transform: isHovered
                        ? "translate(0,0)"
                        : "translate(-4px,4px)",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMain;
