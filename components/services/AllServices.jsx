"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServicesComponent from "./ServicesComponent";

const services = [
  {
    title: "AI & Machine Learning",
    desc: "Custom AI models, automation pipelines, and intelligent systems that learn and improve continuously.",
    icon: "/images/services/ai_service.webp",
    link: "/service/ai",
  },
  {
    title: "App Development",
    desc: "Cross-platform and native mobile apps built for performance, scale, and seamless user experience.",
    icon: "/images/services/mobileDevService.webp",
    link: "/service/mobile-apps",
  },
  {
    title: "Web Development",
    desc: "Full-stack web applications, portals, and e-commerce platforms engineered for speed and reliability.",
    icon: "/images/services/webDevService.webp",
    link: "/service/web-development",
  },
  {
    title: "Cybersecurity",
    desc: "End-to-end security audits, threat detection, and zero-trust architecture implementation.",
    icon: "/images/services/it_consulting.webp",
    link: "/service/cybersecurity",
  },
  {
    title: "UI/UX Design",
    desc: "Research-driven design systems, prototyping, and interfaces that convert visitors into customers.",
    icon: "/images/services/software_development.webp",
    link: "/service/ui-ux",
  },
  {
    title: "IoT Solutions",
    desc: "Connected device ecosystems, edge computing, and real-time monitoring dashboards.",
    icon: "/images/services/ioT.webp",
    link: "/service/iot",
  },
];

const AllServices = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#050507] py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0066ff, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#00f0ff] to-transparent" />
            <span className="text-[#00f0ff] font-mono text-xs tracking-[0.3em] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight max-w-2xl">
            Solutions that scale with your ambition
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServicesComponent
                link={service.link}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
