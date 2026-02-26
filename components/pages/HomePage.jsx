"use client";

import CursorDot from "@/components/CursorDot";
import HeroMain from "@/components/heroSection/HeroMain";
import DifferenceMain from "@/components/differenceSec/DifferenceMain";
import GuidanceMain from "@/components/guidance/GuidanceMain";
import ExpertiseMain from "@/components/expertise/ExpertiseMain";
import NumbersMain from "@/components/numbers/NumbersMain";
import ServicesMain from "@/components/services/ServicesMain";
import UnlockComponent from "@/components/UnlockComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#001c3d] text-white">
      <CursorDot />
      <HeroMain />
      <DifferenceMain />
      <GuidanceMain />
      <ExpertiseMain />
      <NumbersMain />
      <ServicesMain />
      <UnlockComponent />
    </div>
  );
};

export default HomePage;
