"use client";

const ExpertiseRight = ({ name, tagline, desc, expArea }) => {
  return (
    <div className="max-w-full bg-[#0f1115] lg:pl-40 md:pl-40 sm:pl-10 sm:py-20 pr-10 flex flex-col justify-center">
      {/* Tagline badge */}
      {tagline && (
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-[#00f0ff]/50" />
          <span className="text-[#00f0ff] font-mono text-xs tracking-[0.25em] uppercase">
            {tagline}
          </span>
        </div>
      )}

      <h2 className="text-4xl font-heading font-bold tracking-tight text-white mb-4">
        {name}
      </h2>
      <p className="text-[#94a3b8] text-lg mb-8 max-w-lg leading-8">{desc}</p>

      {/* Capabilities label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-white/40 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
          Capabilities
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Capability pills */}
      <div className="flex flex-wrap gap-2">
        {expArea.map((item, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-full text-sm text-[#94a3b8] border border-white/10 hover:border-[#00f0ff]/40 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseRight;
