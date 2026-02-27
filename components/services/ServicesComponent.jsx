"use client";

import Link from "next/link";
import Image from "next/image";

const ServicesComponent = ({ icon, title, desc, link }) => {
  return (
    <div
      className="group relative flex flex-col p-8 rounded-2xl transition-all duration-400 bg-[#0a0d12] border border-white/[0.06] hover:border-[#008080]/25 overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 100%, rgba(0,128,128,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-[#008080]/20 transition-all duration-300">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-lg font-heading font-semibold text-white mb-3 group-hover:text-[#f4e1c1] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-[#94a3b8] text-sm leading-relaxed mb-6 flex-1">
        {desc}
      </p>

      {/* ...arrow and explore removed... */}
    </div>
  );
};

export default ServicesComponent;
