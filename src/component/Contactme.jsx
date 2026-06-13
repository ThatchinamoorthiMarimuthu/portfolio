import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactMe() {
  return (
    <section className="relative min-h-screen bg-[#c4c4c4] overflow-hidden px-5 md:px-6 py-16 md:py-24">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-white/30 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-black/5 blur-[100px] rounded-full" />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1
          className="
          text-[4rem]
          sm:text-[6rem]
          md:text-[10rem]
          lg:text-[12rem]
          font-black
          text-black/5
          select-none
          whitespace-nowrap
        "
        >
          CONTACT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            bg-gradient-to-r
            from-[#0b0b0b]
            to-[#666]
            bg-clip-text
            text-transparent
          "
          >
            Contact Me
          </h2>

          <p className="text-[#4b4b4b] mt-3 text-sm sm:text-base md:text-lg">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <div className="relative">

              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-15px] rounded-full border border-black/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-30px] rounded-full border border-black/10"
              />

              {/* Image */}
              <div
                className="
                w-52 h-52
                sm:w-64 sm:h-64
                md:w-[280px] md:h-[280px]
                rounded-full
                overflow-hidden
                border-4
                border-[#0b0b0b]
                shadow-2xl
              "
              >
                <img
                  src="/assets/self2.png"
                  alt="Frontend Developer Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 order-2"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0b0b0b] text-[#c4c4c4] text-xs sm:text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available For Opportunities
            </div>

            {/* Intro */}
            <div>
              <h3
                className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                text-[#0b0b0b]
                leading-tight
              "
              >
                Let's Create
                <br />
                Something Great
              </h3>

              <p className="text-[#4b4b4b] mt-4 text-sm sm:text-base leading-7">
                Whether you're looking for a frontend developer,
                collaboration partner, or someone passionate about
                creating exceptional digital experiences, I'd love
                to hear from you.
              </p>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:moorthithatchina123@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-black/10 hover:border-black hover:-translate-y-1 transition-all"
            >
              <Mail size={22} />

              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#4b4b4b]">
                  Email
                </p>

                <p className="font-medium text-[#0b0b0b] text-sm break-all">
                  moorthithatchina123@gmail.com
                </p>
              </div>

              <ArrowRight className="group-hover:translate-x-2 transition" />
            </a>

            {/* PHONE */}
            <a
              href="tel:+919789271517"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-black/10 hover:border-black hover:-translate-y-1 transition-all"
            >
              <Phone size={22} />

              <div className="flex-1">
                <p className="text-xs text-[#4b4b4b]">
                  Phone
                </p>

                <p className="font-medium text-[#0b0b0b] text-sm">
                  +91 97892 71517
                </p>
              </div>

              <ArrowRight className="group-hover:translate-x-2 transition" />
            </a>

            {/* Socials */}
            <div className="flex gap-4 pt-2">

              <a
                href="https://www.linkedin.com/in/thatchinamoorthi-marimuthu"
                target="_blank"
                rel="noreferrer"
                className="bg-white/30 p-4 rounded-2xl hover:-translate-y-1 transition shadow-lg"
              >
                <img
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </a>

              <a
                href="https://github.com/ThatchinamoorthiMarimuthu"
                target="_blank"
                rel="noreferrer"
                className="bg-white/30 p-4 rounded-2xl hover:-translate-y-1 transition shadow-lg"
              >
                <img
                  src="/assets/github.svg"
                  alt="GitHub"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </a>

            </div>

            {/* CTA */}
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:moorthithatchina123@gmail.com"
              className="
              inline-flex
              w-full
              sm:w-auto
              justify-center
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-[#0b0b0b]
              text-[#c4c4c4]
              font-bold
            "
            >
              Let's Talk
            </motion.a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}