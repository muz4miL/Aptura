"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "AI & Machine Learning", desc: "Custom AI models, automation pipelines, and intelligent systems that learn and improve continuously.", icon: "/images/services/ai_service.webp", tag: "Intelligence" },
  { title: "App Development", desc: "Cross-platform and native mobile apps built for performance, scale, and seamless user experience.", icon: "/images/services/mobileDevService.webp", tag: "Mobile" },
  { title: "Web Development", desc: "Full-stack web applications, portals, and e-commerce platforms engineered for speed and reliability.", icon: "/images/services/webDevService.webp", tag: "Full-Stack" },
  { title: "Cybersecurity", desc: "End-to-end security audits, threat detection, and zero-trust architecture implementation.", icon: "/images/services/it_consulting.webp", tag: "Security" },
  { title: "UI/UX Design", desc: "Research-driven design systems, prototyping, and interfaces that convert visitors into customers.", icon: "/images/services/software_development.webp", tag: "Design" },
  { title: "IoT Solutions", desc: "Connected device ecosystems, edge computing, and real-time monitoring dashboards.", icon: "/images/services/ioT.webp", tag: "Connected" },
];

const ServiceCard = ({ icon, title, desc, tag }) => (
  <div className="group relative flex flex-col justify-between flex-shrink-0 w-[340px] h-[280px] p-7 rounded-2xl bg-[#0a0d14] border border-white/[0.06] hover:border-[#008080]/20 overflow-hidden transition-all duration-500 cursor-default select-none">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(0,128,128,0.07) 0%, transparent 60%)" }} />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#008080]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-[#008080]/20 group-hover:bg-[#008080]/[0.04] transition-all duration-300">
          <Image src={icon} alt={title} width={28} height={28} className="w-7 h-7 object-contain opacity-60 group-hover:opacity-100 transition duration-300" />
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#008080]/40 group-hover:text-[#008080]/70 transition-colors border border-[#008080]/10 px-2.5 py-1 rounded-full">{tag}</span>
      </div>
      <h3 className="text-[17px] font-heading font-semibold text-white mb-2.5 group-hover:text-[#f4e1c1] transition-colors duration-300">{title}</h3>
      <p className="text-[#94a3b8]/80 text-[13px] leading-relaxed">{desc}</p>
    </div>
  </div>
);

const AllServices = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const duplicatedServices = [...services, ...services];

  return (
    <section ref={ref} className="relative bg-[#050507] py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, #f4e1c1, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02] pointer-events-none" style={{ background: "radial-gradient(circle, #008080, transparent 70%)" }} />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14 px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#008080] to-transparent" />
            <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">What We Build</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight max-w-2xl">Solutions that scale with your ambition</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />
            <div className="services-carousel flex gap-6 py-2">
              {duplicatedServices.map((service, index) => (
                <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} tag={service.tag} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServices;
