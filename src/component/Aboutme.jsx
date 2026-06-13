import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-[#c4c4c4] lg:py-24 px-4 overflow-hidden">
      <div className="w-full  hidden lg:block">
        <motion.h1 
         initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-7xl md:text-8xl font-black mb-8 bg-gradient-to-r from-[#0b0b0b]  to-[#c4c4c4] bg-clip-text text-transparent">
          About Me
        </motion.h1>

        <div className="relative h-[850px] rounded-[40px] bg-[#040812] overflow-hidden border border-cyan-500/20 shadow-2xl">

          {/* Background Effects */}
          <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-20 top-40 w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full" />
          <div className="absolute right-20 bottom-40 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

          {/* CIRCUIT LINES */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pipeGlow">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* LEFT CONNECTION */}
            <path
              d="M 420 450 H 650"
              stroke="url(#pipeGlow)"
              strokeWidth="8"
              fill="none"
              filter="url(#glow)"
            />

            {/* RIGHT CONNECTION */}
            <path
              d="M 950 450 H 1180"
              stroke="url(#pipeGlow)"
              strokeWidth="8"
              fill="none"
              filter="url(#glow)"
            />

            {/* TOP PIPE */}
            <path
              d="M650 450 V180 H950 V450"
              stroke="url(#pipeGlow)"
              strokeWidth="6"
              fill="none"
              filter="url(#glow)"
            />

            {/* Small Nodes */}
            <circle cx="650" cy="450" r="8" fill="#22d3ee" />
            <circle cx="950" cy="450" r="8" fill="#22d3ee" />
            <circle cx="800" cy="180" r="8" fill="#22d3ee" />
          </svg>

          {/* LEFT CIRCLE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-10 top-1/2 -translate-y-1/2"
          >
            <div className="relative w-[380px] h-[380px] rounded-full border-[4px] border-orange-400 bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(251,146,60,0.4)]">

              <div className="absolute inset-4 rounded-full border border-orange-300/40" />
              <div className="absolute inset-8 rounded-full border border-orange-300/20" />

              <div className="h-full flex items-center justify-center text-center px-10">
                <div>
                  <h2 className="text-3xl font-bold text-orange-300 mb-6">
                    Enterprise Applications
                  </h2>

                  <p className="text-gray-300 leading-7">
                    Experienced in developing enterprise-grade
                    applications using Svelte, SvelteKit and
                    JavaScript. I focus on creating scalable
                    architectures, reusable components and
                    workflow-driven systems that improve
                    operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CENTER CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative w-[520px] h-[520px] rounded-full border-[6px] border-cyan-400 bg-[#07101f] shadow-[0_0_120px_rgba(34,211,238,0.7)]">

              <div className="absolute inset-4 rounded-full border border-cyan-400/50 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/20" />
              <div className="absolute inset-12 rounded-full border border-cyan-400/10" />

              <div className="h-full flex items-center justify-center text-center px-14">
                <div>
                  <h2 className="text-6xl font-black text-cyan-300 leading-tight">
                    FRONTEND
                    <br />
                    DEVELOPER
                  </h2>

                  <div className="mt-4 text-cyan-100 font-semibold text-xl">
                    1.6 YEARS EXPERIENCE
                  </div>

                  <div className="w-48 h-[2px] bg-cyan-400 mx-auto my-6" />

                  <p className="text-gray-300 leading-8 text-lg">
                    Frontend developer specializing in React,
                    SvelteKit, JavaScript and Tailwind CSS.
                    Passionate about building scalable user
                    interfaces, reusable component systems and
                    high-performance web applications that solve
                    real-world business challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CIRCLE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-10 top-1/2 -translate-y-1/2"
          >
            <div className="relative w-[380px] h-[380px] rounded-full border-[4px] border-purple-400 bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(168,85,247,0.4)]">

              <div className="absolute inset-4 rounded-full border border-purple-300/40" />
              <div className="absolute inset-8 rounded-full border border-purple-300/20" />

              <div className="h-full flex items-center justify-center text-center px-10">
                <div>
                  <h2 className="text-3xl font-bold text-purple-300 mb-6">
                    UI Engineering
                  </h2>

                  <p className="text-gray-300 leading-7">
                    Specialized in crafting reusable design
                    systems, responsive user interfaces and
                    complex REST API integrations. I strive to
                    create intuitive, accessible and visually
                    engaging digital experiences across modern
                    web platforms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      {/* ================= MOBILE ABOUT ================= */}

<div className="lg:hidden">

  <motion.h1 
     initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
  className="text-center text-5xl font-black mb-10 bg-gradient-to-r from-[#0b0b0b] to-gray-500 bg-clip-text text-transparent">
    About Me
  </motion.h1>

  <div className="relative rounded-[30px] bg-[#040812] overflow-hidden p-6">

    {/* Background Glow */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-cyan-500/20 blur-[120px] rounded-full" />
    </div>

    <div className="relative z-10 flex flex-col gap-8">

      {/* CENTER CARD */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        className="
          rounded-[30px]
          border-2
          border-cyan-400
          bg-[#07101f]
          p-8
          shadow-[0_0_50px_rgba(34,211,238,0.35)]
        "
      >
        <h2 className="text-3xl font-black text-cyan-300 text-center">
          FRONTEND
          <br />
          DEVELOPER
        </h2>

        <p className="text-center text-cyan-100 mt-3 font-semibold">
          1.6+ Years Experience
        </p>

        <div className="w-24 h-[2px] bg-cyan-400 mx-auto my-5" />

        <p className="text-gray-300 leading-7 text-center">
          Frontend developer specializing in React,
          SvelteKit, JavaScript and Tailwind CSS.
          Passionate about building scalable user
          interfaces, reusable component systems and
          high-performance web applications.
        </p>
      </motion.div>

      {/* ENTERPRISE */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-[30px]
          border-2
          border-orange-400
          bg-black/50
          p-8
          shadow-[0_0_40px_rgba(251,146,60,0.25)]
        "
      >
        <h3 className="text-2xl font-bold text-orange-300 text-center mb-4">
          Enterprise Applications
        </h3>

        <p className="text-gray-300 leading-7 text-center">
          Experienced in developing enterprise-grade
          applications using Svelte, SvelteKit and
          JavaScript. Focused on scalable architecture,
          reusable components and workflow-driven
          solutions.
        </p>
      </motion.div>

      {/* CONNECTOR */}

      <div className="flex justify-center">
        <div className="w-[2px] h-16 bg-gradient-to-b from-orange-400 to-purple-400" />
      </div>

      {/* UI ENGINEERING */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-[30px]
          border-2
          border-purple-400
          bg-black/50
          p-8
          shadow-[0_0_40px_rgba(168,85,247,0.25)]
        "
      >
        <h3 className="text-2xl font-bold text-purple-300 text-center mb-4">
          UI Engineering
        </h3>

        <p className="text-gray-300 leading-7 text-center">
          Specialized in crafting reusable design
          systems, responsive interfaces and REST API
          integrations while creating intuitive and
          visually engaging user experiences.
        </p>
      </motion.div>

    </div>
  </div>

</div>
    </section>
  );
}