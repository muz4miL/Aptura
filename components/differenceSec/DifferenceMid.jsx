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
    <div>
      <h1
        className="text-white/20 w-full font-heading font-bold lg:text-6xl md:text-5xl sm:text-3xl lg:leading-[1.2] md:leading-[1.3] sm:leading-[1.4] tracking-tight"
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
      </h1>
    </div>
  );
};

export default DifferenceMid;
