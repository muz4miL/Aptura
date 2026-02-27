"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroPic = () => {
  const btnRef = useRef(null);
  const lineRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const shimmerRef = useRef(null);
  const marqueeRef = useRef(null);

  /* Magnetic button effect */
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

  /* ═══ GSAP cinematic sequence ═══ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      /* 1 — Decorative line draws from left */
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
          0,
        );
      }

      /* 2 — Headline words: clip-reveal slide-up from behind overflow mask */
      const words = headlineRef.current?.querySelectorAll(".word-inner");
      if (words?.length) {
        tl.fromTo(
          words,
          { yPercent: 120, rotateX: -10 },
          {
            yPercent: 0,
            rotateX: 0,
            duration: 1.3,
            stagger: 0.12,
            ease: "power4.out",
          },
          0.25,
        );
      }

      /* 3 — Shimmer sweep across gradient text */
      if (shimmerRef.current) {
        tl.fromTo(
          shimmerRef.current,
          { xPercent: -100 },
          {
            xPercent: 200,
            duration: 1.2,
            ease: "power2.inOut",
          },
          1.4,
        );
      }

      /* 4 — Subtitle words: blur-to-sharp reveal, one by one */
      const subWords = subtitleRef.current?.querySelectorAll(".sub-word");
      if (subWords?.length) {
        tl.fromTo(
          subWords,
          { autoAlpha: 0, y: 14, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.025,
            ease: "power2.out",
          },
          1.2,
        );
      }

      /* 5 — CTA buttons rise up */
      const buttons = ctaRef.current?.querySelectorAll(".cta-btn");
      if (buttons?.length) {
        tl.fromTo(
          buttons,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.3",
        );
      }

      /* 6 — Marquee fades in last */
      if (marqueeRef.current) {
        tl.fromTo(
          marqueeRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8, ease: "power1.out" },
          "-=0.3",
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const subtitleText =
    "Transforming complex data and logic into seamless, high-performance digital experiences.";

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
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/50 via-[#050507]/10 to-[#050507]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/30 via-transparent to-[#050507]/30" />

      {/* Dark vignette behind text area */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.7) 40%, rgba(5,5,7,0) 100%)",
        }}
      />

      {/* ═══ Content — pinned to bottom ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 lg:px-24 pb-8 md:pb-14">
        <div className="max-w-6xl mx-auto">
          {/* Decorative accent line */}
          <div
            ref={lineRef}
            className="w-16 h-[1.5px] mb-7"
            style={{
              background:
                "linear-gradient(90deg, #f4e1c1, rgba(0,128,128,0.4))",
            }}
          />

          {/* Headline — clip-reveal word by word */}
          <h1
            ref={headlineRef}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white"
            style={{
              textShadow: "0px 4px 20px rgba(0,0,0,0.7)",
              perspective: "800px",
            }}
          >
            {/* Each word wrapped in overflow-hidden container for clip reveal */}
            <span className="inline-block overflow-hidden mr-[0.22em] align-bottom">
              <span className="word-inner inline-block will-change-transform">
                Intelligence,
              </span>
            </span>
            <span className="relative inline-block overflow-hidden align-bottom">
              <span className="word-inner inline-block gradient-text will-change-transform">
                Engineered.
              </span>
              {/* Shimmer sweep overlay */}
              <span
                ref={shimmerRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(244,225,193,0.25) 45%, rgba(255,255,255,0.15) 50%, rgba(244,225,193,0.25) 55%, transparent 70%)",
                  mixBlendMode: "screen",
                }}
              />
            </span>
          </h1>

          {/* Subtitle — word-by-word blur-to-sharp deblur */}
          <p
            ref={subtitleRef}
            className="max-w-xl mt-5 leading-relaxed"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.5)" }}
          >
            {subtitleText.split(" ").map((word, i) => (
              <span
                key={i}
                className="sub-word inline-block text-white/70 text-sm sm:text-base md:text-lg mr-[0.28em] will-change-transform"
                style={{ visibility: "hidden" }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* CTA row */}
          <div ref={ctaRef} className="flex flex-wrap gap-3 mt-7">
            <Link
              href="/contact"
              ref={btnRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="cta-btn px-7 py-3 bg-[#f4e1c1] text-[#050507] font-heading font-semibold text-sm rounded-lg glow-btn transition-all duration-200"
              style={{ visibility: "hidden" }}
            >
              Let&apos;s Talk
            </Link>

            <Link
              href="/case-studies"
              className="cta-btn px-7 py-3 border border-white/20 text-white/90 font-heading font-medium text-sm rounded-lg hover:border-[#008080]/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              style={{ visibility: "hidden" }}
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        ref={marqueeRef}
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/5 bg-[#050507]/80 backdrop-blur-sm"
        style={{ visibility: "hidden" }}
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
      </div>
    </div>
  );
};

export default HeroPic;
