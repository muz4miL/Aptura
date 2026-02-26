"use client";

import DifferenceTop from "./DifferenceTop";
import DifferenceMid from "./DifferenceMid";

const DifferenceMain = () => {
  return (
    <div className="bg-[#000122] h-full w-full d-flex flex-col px-25 sm:px-10 py-20">
      <DifferenceTop />
      <DifferenceMid />
    </div>
  );
};

export default DifferenceMain;
