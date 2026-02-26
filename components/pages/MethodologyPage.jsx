"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function MethodologyPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-32 pb-20 px-4 md:px-24">
      {/* Our Methodology Section */}
      <section className="mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Methodology</span>
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-black rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Agile and Scrum shape how we build — iterative, adaptive, and
              focused on delivering actual value, not just features.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/methodology.jpg"
              alt="Methodology"
              width={500}
              height={400}
              className="w-full max-w-md md:max-w-lg rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Visual Banner */}
      <section className="relative mb-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/development.avif"
            alt="Agile Visual"
            width={1200}
            height={600}
            className="rounded-xl mx-auto w-full max-w-screen max-h-screen object-cover shadow-xl"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
          <h3 className="text-white text-2xl md:text-4xl font-semibold px-6 text-center">
            Building Together. Learning Fast. Delivering Value.
          </h3>
        </div>
      </section>

      {/* Sprint-Based Development */}
      <section className="mb-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sprint-Based <span className="text-blue-600">Development</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Short sprints help us build incrementally, stay on track, and
            continuously improve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/development.avif"
              alt="Scrum Cycle"
              width={600}
              height={400}
              className="rounded-xl w-full shadow-lg"
            />
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                title: "Planning",
                desc: "Define the sprint goal, select backlog items, and align the team.",
              },
              {
                title: "Daily Standups",
                desc: "Quick sync-ups to track progress and clear obstacles.",
              },
              {
                title: "Sprint Review",
                desc: "Show what's done, gather feedback, and improve.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                viewport={{ once: true }}
                className="p-6 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles & Collaboration */}
      <section className="mb-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Roles & <span className="text-blue-600">Collaboration</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agile puts people first. Every role matters in a high-performing
            team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {[
              {
                role: "Product Owner",
                detail:
                  "Drives the vision, prioritizes work, and ensures business value.",
              },
              {
                role: "Scrum Master",
                detail:
                  "Guides the process, clears blockers, and supports the team.",
              },
              {
                role: "Development Team",
                detail: "Builds, tests, and delivers high-quality solutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                viewport={{ once: true }}
                className="p-6 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/collaboration.webp"
              alt="Agile Roles"
              width={600}
              height={400}
              className="rounded-xl w-full shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why <span className="text-blue-600">It Works</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Agile keeps us focused. Scrum keeps us sharp. Together, they drive
          delivery, accountability, and constant improvement.
        </p>
      </section>
    </div>
  );
}
