"use client";

import { motion } from "framer-motion";
import ContactMain from "@/components/contact/ContactMain";

export default function TeamPage() {
  return (
    <>
      <section className="bg-white mt-24 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Meet <span className="text-blue-600">Our Team</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mb-16"
          >
            The minds shaping Aptura&apos;s vision, strategy, and success.
          </motion.p>

          {/* Team placeholder — to be filled when team data is available */}
          <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-md rounded-2xl p-8 w-80 transition-all hover:scale-105 hover:shadow-blue-300 text-center"
            >
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Team Member
              </h3>
              <p className="text-blue-700 font-medium">Role TBD</p>
              <p className="text-gray-600 mt-3 text-sm">
                Building innovative solutions at Aptura Tech.
              </p>
            </motion.div>
          </div>

          <p className="text-gray-500 mt-12 text-lg">
            Our team is growing! Check back soon for updates.
          </p>
        </div>
      </section>

      <ContactMain />
    </>
  );
}
