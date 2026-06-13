import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#c4c4c4] overflow-hidden flex items-center justify-center px-6"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="
            text-[5rem]
            md:text-[10rem]
            lg:text-[14rem]
            font-black
            text-[#0b0b0b]/5
            select-none
            whitespace-nowrap
          "
        >
          PROJECTS
        </h1>
      </div>

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-black/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Badge */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            bg-[#0b0b0b]
            text-[#c4c4c4]
            font-semibold
            mb-8
          "
        >
          🚀 Work In Progress
        </motion.div>

        {/* Title */}
        <h2
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            text-[#0b0b0b]
            leading-none
          "
        >
          Projects
          <br />
          Coming Soon
        </h2>

        {/* Line */}
        <div className="w-32 h-[4px] bg-[#0b0b0b] mx-auto rounded-full my-8" />

        {/* Description */}
        <p
          className="
            max-w-2xl
            mx-auto
            text-lg
            md:text-xl
            text-[#4b4b4b]
            leading-8
          "
        >
          I'm currently working on several frontend and enterprise
          applications built with React, SvelteKit, Tailwind CSS,
          and modern web technologies. These projects will be
          published here soon.
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-4 mt-12">
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
              className="
                w-4
                h-4
                rounded-full
                bg-[#0b0b0b]
              "
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}