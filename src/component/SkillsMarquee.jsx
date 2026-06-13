import React from "react";
import { motion } from "framer-motion";

export const SkillsMarquee = ({ array }) => {
  return (
    <div className="relative bg-[#0B0B0B] overflow-hidden py-8">
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent" />

      <div className="flex overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee items-center gap-6 px-6">
          {array.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -3 }}
              className="group flex items-center gap-3 rounded-full border border-[#222] bg-[#141414] px-5 py-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#82b7ef]" />
              <p className="whitespace-nowrap text-sm text-[#C4C4C4]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          className="flex min-w-full shrink-0 animate-marquee items-center gap-6 px-6"
          aria-hidden="true"
        >
          {array.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -3 }}
              className="group flex items-center gap-3 rounded-full border border-[#222] bg-[#141414] px-5 py-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#82b7ef]" />
              <p className="whitespace-nowrap text-sm text-[#C4C4C4]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};