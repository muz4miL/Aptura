"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SavSplit",
    description:
      "Dual-mode app for personal and business use. Personal: split bills, track expenses. Business: manage inventory, record sales.",
    image: "/images/projects/app_project.png",
  },
  {
    title: "SEIZURE SENSE",
    description:
      "An AI/ML-based system that analyzes brain signals (EEG DATA) to predict epileptic seizures in advance.",
    image: "/images/projects/ai_project.png",
  },
  {
    title: "NovaSuite – AI SaaS Platform",
    description:
      "A powerful AI SaaS platform offering image generation, blog suggestions, background removal, resume review, and disease diagnostics.",
    image: "/images/projects/web_project1.png",
  },
  {
    title: "Custom LMS for Education",
    description:
      "Supports live classes, quizzes, certification, and user dashboards for students, instructors, and admins.",
    image: "/images/projects/web_project3.png",
  },
  {
    title: "Essence — E-commerce Platform",
    description:
      "A modern e-commerce app with smart search, secure checkout, and mobile-first design.",
    image: "/images/projects/web_project4.png",
  },
  {
    title: "Full-featured E-commerce & Admin Panel",
    description:
      "Complete solution with product management, orders, insights, and a sleek admin panel.",
    image: "/images/projects/web_project5.png",
  },
  {
    title: "VibeHive — Real-time Chat App",
    description:
      "Group chat, media sharing, presence indicators, and a clean UI for team communication.",
    image: "/images/projects/web_project6.png",
  },
  {
    title: "Inventory Management System",
    description:
      "Tracks real-time stock, reduces overstocking, and streamlines supply operations.",
    image: "/images/projects/web_project2.png",
  },
  {
    title: "Halatick — Restaurant App",
    description:
      "Order dine-in, takeaway, or delivery with digital menus, live order tracking, and table reservations.",
    image: "/images/projects/app_project2.png",
  },
];

const getGradientColor = (index) => {
  const blue = "#2a7de3";
  const yellow = "rgb(250, 204, 21)";
  const black = "rgb(30, 30, 30)";
  const gradients = [
    [blue, black],
    [black, yellow],
  ];
  return gradients[index % gradients.length];
};

const OurProjects = () => {
  return (
    <div className="w-full px-4 space-y-10 relative z-10">
      {projects.map((project, index) => {
        const isReversed = index % 2 === 1;
        const [startColor, endColor] = getGradientColor(index);

        return (
          <motion.div
            key={index}
            initial={{
              background: `linear-gradient(to right, ${startColor}, ${endColor})`,
            }}
            animate={{
              background: `linear-gradient(to right, ${startColor}, ${endColor})`,
            }}
            whileHover={{
              background: `linear-gradient(to right, ${endColor}, ${startColor})`,
              scale: 1.02,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden shadow-2xl text-white"
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              } items-center px-6 py-16 gap-8`}
            >
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-base text-white/90">{project.description}</p>
              </div>
              <div className="md:w-1/2 h-64">
                <motion.div
                  whileHover={{ y: -10, rotate: 1, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-64 flex items-center justify-center"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="max-h-full max-w-full object-contain drop-shadow-xl pointer-events-none"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OurProjects;
