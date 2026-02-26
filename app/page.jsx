import HeroMain from "@/components/heroSection/HeroMain";
import CursorDot from "@/components/CursorDot";
import DifferenceMain from "@/components/differenceSec/DifferenceMain";
import GuidanceMain from "@/components/guidance/GuidanceMain";
import ExpertiseMain from "@/components/expertise/ExpertiseMain";
import NumbersMain from "@/components/numbers/NumbersMain";
import ServicesMain from "@/components/services/ServicesMain";
import UnlockComponent from "@/components/UnlockComponent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-transparent text-white">
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
}
