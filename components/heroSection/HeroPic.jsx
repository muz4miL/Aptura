"use client";

import Image from "next/image";

const HeroPic = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden lg:px-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/main-video.mp4" type="video/mp4" />
      </video>

      {/* Aptura Badge */}
      <div className="absolute top-1/3 left-1/2 z-20 hidden lg:flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-3 px-6 py-3">
          <Image
            src="/logo.png"
            alt="Aptura Tech Solutions Logo"
            width={72}
            height={72}
            className="object-contain"
          />
          <span className="text-white font-extrabold text-4xl">
            Aptura Tech
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center lg:items-start md:items-start sm:items-center h-full lg:px-20 md:px-20 sm:px-2 text-white">
        <div>
          <h1 className="lg:text-5xl md:text-5xl sm:text-3xl sm:h-31 font-bold mb-4 lg:h-31 md:h-40 overflow-hidden lg:leading-17 md:leading-13 lg:w-full md:w-full sm:leading-10 sm:w-full">
            <div className="animate-slideUpText">
              FUELING DIGITAL DISRUPTION ACROSS TRANSFORMATIVE DOMAINS
            </div>
            <div className="animate-slideUpText">
              CUSTOM SOFTWARE SOLUTIONS FOR BUSINESS GROWTH
            </div>
            <div className="animate-slideUpText">
              AI-DRIVEN, CLOUD-POWERED, INDUSTRY-CHANGING
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroPic;
