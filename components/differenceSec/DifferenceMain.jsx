"use client";

import DifferenceTop from "./DifferenceTop";
import DifferenceMid from "./DifferenceMid";

const DifferenceMain = () => {
  return (
    <section className="relative bg-[#050507] w-full overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-20">
        <DifferenceTop />
        <DifferenceMid />
      </div>
    </section>
  );
};

export default DifferenceMain;
