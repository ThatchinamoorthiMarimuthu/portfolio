import React from "react";
import { motion } from "framer-motion";

export const Herosection = () => {
  const firstName = "THATCHINAMOORTHI";

  return (
    <>
    <section className="relative hidden sm:block w-full h-screen overflow-hidden bg-[#c4c4c4]">

      {/* LEFT SIDE */}
      <div className="absolute left-0 top-0 w-1/2 h-full z-10">
        <div className="flex items-center h-full px-16">

          <div>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-medium text-[#4b4b4b]"
            >
              Hello, I'm
            </motion.p>

            {/* Animated Name */}
            <div className="mt-4">

              <div className="flex flex-wrap gap-1 nameshadow">
                {firstName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.1,
                    }}
                    className="
                      text-6xl
                      xl:text-8xl
                      font-black
                      text-[#0b0b0b]
                      cursor-default
                    "
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

            </div>

            {/* Typing Role */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "fit-content" }}
              transition={{ duration: 1.2 }}
              className="
                overflow-hidden
                whitespace-nowrap
                border-r-2
                border-[#0b0b0b]
                mt-6
                text-lg
                font-medium
              "
            >
              Frontend Developer • UI Engineer
            </motion.div>

            <div className="w-32 h-[3px] bg-[#0b0b0b] mt-8 mb-8" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
                max-w-xl
                text-[#4b4b4b]
                text-lg
                leading-8
              "
            >
              Passionate about building enterprise-grade web
              applications with React, SvelteKit and modern
              frontend technologies. Focused on scalable UI
              systems, performance optimization and crafting
              exceptional user experiences.
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-5 mt-10">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(11,11,11,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative
                  overflow-hidden
                  px-10
                  py-4
                  rounded-full
                  bg-[#0b0b0b]
                  text-[#c4c4c4]
                  font-bold
                  group
                "
              >
                <span className="relative z-10">
                  Hire Me
                </span>

                <motion.div
                  animate={{
                    x: ["-100%", "250%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    h-full
                    w-16
                    bg-white/20
                    skew-x-12
                  "
                />
              </motion.button>

              <motion.button
              onClick={()=>{
                 document
    .getElementById("projects")
    ?.scrollIntoView({ behavior: "smooth" });
              }}
                whileHover={{
                  y: -5,
                  backgroundColor: "#0b0b0b",
                  color: "#c4c4c4",
                }}
                className="
                  px-10
                  py-4
                  rounded-full
                  border-2
                  border-[#0b0b0b]
                  font-bold
                  duration-300
                "
              >
                View Projects
              </motion.button>

            </div>

            {/* Socials */}

            <div className="flex gap-5 mt-12">

              <motion.a
                whileHover={{ y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:moorthithatchina123@gmail.com"
                className="
                  bg-white
                  p-3
                  rounded-xl
                  shadow-lg
                "
              >
                <img
                  src="/portfolio/email.svg"
                  alt="Email"
                  className="w-6 h-6"
                />
              </motion.a>

              <motion.a
                whileHover={{ y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/ThatchinamoorthiMarimuthu"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-white
                  p-3
                  rounded-xl
                  shadow-lg
                "
              >
                <img
                  src="/portfolio/github.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </motion.a>

              <motion.a
                whileHover={{ y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/thatchinamoorthi-marimuthu"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-white
                  p-3
                  rounded-xl
                  shadow-lg
                "
              >
                <img
                  src="/portfolio/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </motion.a>

            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[58%]
          h-full
          bg-[#0b0b0b]
          [clip-path:polygon(28%_0,100%_0,100%_100%,0%_100%)]
        "
      >
        <div className="relative w-full h-full overflow-hidden">

          {/* Developer Text */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-[15rem]
              xl:text-[15rem]
              font-black
              text-white/[0.08]
              pointer-events-none
              select-none
              z-0
            "
          >
            Developer
          </motion.div>

          {/* Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-1/2
              left-[55%]
              -translate-x-1/2
              -translate-y-1/2
              w-[500px]
              h-[500px]
              rounded-full
              border
              border-white/10
            "
          />

          {/* Glow */}

       

          {/* Image */}

          <motion.img
            src="/portfolio/self2.png"
            alt="Profile"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-0
              right-[8%]
              h-[82%]
              z-20
              object-contain
            "
          />
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-50
        "
      >
        <div className="w-6 h-10 border-2 border-[#0b0b0b] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#0b0b0b] rounded-full mt-2" />
        </div>
      </motion.div>

    </section>

    {/* ================= MOBILE HERO ================= */}

<section className="sm:hidden min-h-screen bg-[#c4c4c4] relative overflow-hidden">

  {/* Background Developer Text */}

  <div
    className="
      absolute
      top-20
      left-1/2
      -translate-x-1/2
      text-[5rem]
      font-black
      text-[#0b0b0b]/5
      select-none
      whitespace-nowrap
      pointer-events-none
    "
  >
    Developer
  </div>

  {/* Background Glow */}

  <div
    className="
      absolute
      top-20
      left-1/2
      -translate-x-1/2
      w-[300px]
      h-[300px]
      rounded-full
      bg-black/5
      blur-[80px]
    "
  />

  <div className="relative z-10 px-6 pt-20 pb-10 flex flex-col items-center text-center">

    {/* Profile */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[-12px]
          rounded-full
          border
          border-[#0b0b0b]/20
        "
      />

      <motion.img
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        src="/portfolio/self2.png"
        alt="Profile"
        className="
          w-72
          h-72
          object-cover
          rounded-full
          border-4
          border-[#0b0b0b]
          shadow-2xl
        "
      />
    </motion.div>

    {/* Hello */}

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="
        mt-10
        text-[#4b4b4b]
        font-medium
      "
    >
      Hello, I'm
    </motion.p>

    {/* Name */}

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="
        text-5xl
        font-black
        text-[#0b0b0b]
        leading-none
        mt-2
        nameshadow
      "
    >
      THATCHINA
      <br />
      MOORTHI
    </motion.h1>

    {/* Role */}

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "fit-content" }}
      transition={{ delay: 0.8, duration: 1 }}
      className="
        overflow-hidden
        whitespace-nowrap
        border-r-2
        border-[#0b0b0b]
        mt-5
        text-sm
        font-semibold
      "
    >
      Frontend Developer • UI Engineer
    </motion.div>

    {/* Divider */}

    <div className="w-24 h-[3px] bg-[#0b0b0b] my-8 rounded-full" />

    {/* Description */}

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="
        text-[#4b4b4b]
        leading-7
        text-base
        max-w-md
      "
    >
      Passionate about building enterprise-grade
      applications with React, SvelteKit and modern
      frontend technologies. Focused on scalable UI
      systems, performance optimization and creating
      exceptional digital experiences.
    </motion.p>

    {/* Buttons */}

    <div className="flex flex-col w-full gap-4 mt-10">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative
          overflow-hidden
          py-4
          rounded-full
          bg-[#0b0b0b]
          text-[#c4c4c4]
          font-bold
        "
      >
        Hire Me
      </motion.button>

      <motion.button
      onClick={()=>{
        document
    .getElementById("projects")
    ?.scrollIntoView({ behavior: "smooth" });
      }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          py-4
          rounded-full
          border-2
          border-[#0b0b0b]
          text-[#0b0b0b]
          font-bold
        "
      >
        View Projects
      </motion.button>

    </div>

    {/* Socials */}

    <div className="flex gap-5 mt-10">

      <motion.a
        whileHover={{ y: -5 }}
        href="mailto:moorthithatchina123@gmail.com"
        className="
          bg-white
          p-3
          rounded-xl
          shadow-lg
        "
      >
        <img
          src="/portfolio/email.svg"
          alt="Email"
          className="w-6 h-6"
        />
      </motion.a>

      <motion.a
        whileHover={{ y: -5 }}
        href="https://github.com/ThatchinamoorthiMarimuthu"
        target="_blank"
        rel="noreferrer"
        className="
          bg-white
          p-3
          rounded-xl
          shadow-lg
        "
      >
        <img
          src="/portfolio/github.svg"
          alt="GitHub"
          className="w-6 h-6"
        />
      </motion.a>

      <motion.a
        whileHover={{ y: -5 }}
        href="https://www.linkedin.com/in/thatchinamoorthi-marimuthu"
        target="_blank"
        rel="noreferrer"
        className="
          bg-white
          p-3
          rounded-xl
          shadow-lg
        "
      >
        <img
          src="/portfolio/linkedin.svg"
          alt="LinkedIn"
          className="w-6 h-6"
        />
      </motion.a>

    </div>

    {/* Scroll Indicator */}

    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="mt-12"
    >
      <div className="w-6 h-10 border-2 border-[#0b0b0b] rounded-full flex justify-center">
        <div className="w-1 h-3 bg-[#0b0b0b] rounded-full mt-2" />
      </div>
    </motion.div>

  </div>
</section>
    </>
  );
};