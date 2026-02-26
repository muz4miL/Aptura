"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExpertiseComponent from "./ExpertiseComponent";

gsap.registerPlugin(ScrollTrigger);

const expertAreasAI = [
  "Generative AI",
  "LLM",
  "Machine learning",
  "Natural Language Processing (NLP)",
  "Generative AI consulting",
  "Predictive analytics",
  "AI automation",
  "Computer vision",
];
const expertAreasWeb = [
  "Web Applications",
  "CRMs",
  "ERPs",
  "CMS",
  "Learning Management Systems",
  "Responsive web Designs",
];
const expertAreasApp = [
  "Fintech Apps",
  "Cross Platform Apps",
  "Native Apps",
  "Enterprise Mobile Solutions",
];
const expertAreasCybersecurity = [
  "Network Security",
  "Cloud Security",
  "Application Security",
  "Penetration Testing",
  "Security Audits & Compliance",
];
const expertAreasUIDesign = [
  "Wireframing & Prototyping",
  "Responsive Web Design",
  "Mobile App Design",
  "User Journey Mapping",
  "Design Systems & Style Guides",
];
const expertAreasIoT = [
  "Smart Home Solutions",
  "Industrial IoT (IIoT)",
  "Wearable Tech",
  "IoT Device Integration",
  "Real-time Data Monitoring",
];

const ExpertiseMain = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isLargeScreen]);

  const sections = [
    {
      img: "/images/aiExp.jpeg",
      name: "Artificial Intelligence",
      desc: "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
      expertAreas: expertAreasAI,
    },
    {
      img: "/images/webExp.avif",
      name: "Web Development",
      desc: "Our Web Development services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
      expertAreas: expertAreasWeb,
    },
    {
      img: "/images/appExpertise.webp",
      name: "App Development",
      desc: "Our App Development services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
      expertAreas: expertAreasApp,
    },
    {
      img: "/images/cyberExpertise.jpg",
      name: "CyberSecurity",
      desc: "Our Cybersecurity solutions protect your digital assets with advanced threat detection, risk assessment, and proactive defense strategies.",
      expertAreas: expertAreasCybersecurity,
    },
    {
      img: "/images/uiExp.jpeg",
      name: "UI/UX Design",
      desc: "Our UI/UX Design services focus on creating intuitive, engaging, and user-centered experiences that drive customer satisfaction.",
      expertAreas: expertAreasUIDesign,
    },
    {
      img: "/images/iotExp.png",
      name: "IoT",
      desc: "Our IoT solutions connect devices, systems, and data to enable smarter operations and real-time decision-making.",
      expertAreas: expertAreasIoT,
    },
  ];

  return (
    <div className="w-[100%] bg-[#f4f8ff]">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`w-full flex lg:flex-row md:flex-row sm:flex-col lg:h-screen md:h-screen sm:h-full overflow-hidden border-t border-white ${
            isLargeScreen ? "panel" : ""
          }`}
        >
          <ExpertiseComponent
            img={section.img}
            name={section.name}
            desc={section.desc}
            expertAreas={section.expertAreas}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpertiseMain;
