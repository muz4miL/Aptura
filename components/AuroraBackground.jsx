"use client";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary cyan orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)",
          top: "10%",
          left: "20%",
          filter: "blur(80px)",
        }}
      />
      {/* Secondary blue orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 animate-aurora-reverse"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)",
          bottom: "20%",
          right: "15%",
          filter: "blur(100px)",
        }}
      />
      {/* Tertiary subtle teal */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
          top: "60%",
          left: "50%",
          filter: "blur(90px)",
          animationDelay: "5s",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
