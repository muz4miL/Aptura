"use client";

import { motion } from "framer-motion";

const DifferenceTop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-[#008080] to-transparent" />
        <span className="text-[#008080] font-mono text-xs tracking-[0.3em] uppercase">
          Why Aptura
        </span>
      </div>
    </motion.div>
  );
};

export default DifferenceTop;
