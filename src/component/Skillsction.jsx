import React from "react";
import { motion } from "framer-motion";

export const Skillsction = ({ skills }) => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] py-20">
      {/* Heading */}
      <div className="container mx-auto flex justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold text-transparent pb-14 bg-gradient-to-r from-[#272626] to-[#C4C4C4] bg-clip-text text-center text-8xl"
        >
          Skills
          <span className="block text-xl text-[#C4C4C4] mt-2">
            that Fuel my Passion
          </span>
        </motion.h1>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              bg-[#1e1e1e]
              border
              border-[#2a2a2a]
              rounded-3xl
              p-5
              h-fit
              transition-all
              duration-500
              hover:border-[#82b7ef]/40
              shadow-[0_0_20px_rgba(130,183,239,0.35)]
            "
          >
            {/* Hover Gradient Overlay */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                pointer-events-none
                bg-gradient-to-br
                from-[#82b7ef]/5
                via-transparent
                to-transparent
              "
            />

            {/* Icons Section (Original Zig-Zag Layout) */}
            {skill?.icons && (
              <div className="flex flex-wrap items-center justify-evenly mb-4">
                {skill.icons.map((icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`
                      p-5
                      ${
                        Math.floor(idx / 4) % 2
                          ? "ml-12"
                          : ""
                      }
                    `}
                  >
                    <img
                      src={icon}
                      alt={skill.name}
                      className="w-[60%] transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Badges */}
            {skill?.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex flex-wrap gap-2 items-center mb-5"
              >
                {skill.badge.map((con, ix) => (
                  <div
                    key={ix}
                    className="
                      flex
                      items-center
                      gap-2
                      bg-[#141414]
                      border
                      border-[#252525]
                      rounded-xl
                      px-3
                      py-2
                      text-sm
                      text-[#C4C4C4]
                      transition-all
                      duration-300
                      hover:border-[#82b7ef]/40
                    "
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#82b7ef]" />
                    {con}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <h2
                className="
                  text-2xl
                  font-bold
                  text-white
                  mb-2
                  transition-all
                  duration-300
                  group-hover:text-[#82b7ef]
                "
              >
                {skill.name}
              </h2>

              <h3 className="text-md font-semibold text-[#82b7ef] mb-3">
                {skill.names}
              </h3>

              <p className="text-[#C4C4C4] leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Animated Bottom Line */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[3px]
                w-0
                bg-[#82b7ef]
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};