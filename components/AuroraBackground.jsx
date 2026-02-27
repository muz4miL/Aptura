"use client";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-aurora" style={{ background: "radial-gradient(circle, rgba(0,128,128,0.3) 0%, transparent 70%)", top: "10%", left: "20%", filter: "blur(80px)" }} />
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 animate-aurora-reverse" style={{ background: "radial-gradient(circle, rgba(244,225,193,0.2) 0%, transparent 70%)", bottom: "20%", right: "15%", filter: "blur(100px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 animate-aurora" style={{ background: "radial-gradient(circle, rgba(95,158,160,0.25) 0%, transparent 70%)", top: "60%", left: "50%", filter: "blur(90px)", animationDelay: "5s" }} />
    </div>
  );
};

export default AuroraBackground;
