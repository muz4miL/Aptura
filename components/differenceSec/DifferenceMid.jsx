"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "We don't just build software — we architect competitive advantages that compound over time.";

const DifferenceMid = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".glow-word");
    gsap.set(words, { opacity: 0.15 });

    gsap.to(words, {
      opacity: 1,
      color: "#ffffff",
      stagger: 0.08,
      scrollTrigger: {
        trigger: textRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top 85%",
        end: "bottom 45%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative pl-6 sm:pl-10 border-l border-white/[0.06]">
      {/* Vertical teal accent */}
      <div
        className="absolute left-0 top-0 w-[2px] rounded-full"
        style={{ height: "40%", background: "linear-gradient(to bottom, #008080, transparent)" }}
      />

      <h2
        className="text-white/[0.15] w-full font-heading font-bold lg:text-6xl md:text-5xl sm:text-3xl lg:leading-[1.15] md:leading-[1.3] sm:leading-[1.4] tracking-tight"
        ref={textRef}
      >
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className="glow-word inline-block mr-3 transition duration-300"
          >
            {word}
          </span>
        ))}
      </h2>

      {/* Bottom detail row */}
      <div className="flex items-center gap-6 mt-10">
        <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #008080, transparent)" }} />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#94a3b8]/40">Est. 2024 · Islamabad & Peshawar</span>
      </div>
    </div>
  );
};

export default DifferenceMid;
