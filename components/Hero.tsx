"use client";

import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <div className="pb-20 pt-24 sm:pt-32 bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417] min-h-screen w-full relative flex flex-col items-center justify-center antialiased z-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold leading-tight mb-6"
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 75,
              cursor: "|",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Samodra Wijaya Samdoria")
                .callFunction(() => setTypingDone(true))
                .start();
            }}
          />
        </motion.h1>

        {/* Ini selalu dirender, tapi animasi berdasarkan typingDone */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={typingDone ? "show" : "hidden"}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-neutral-400 max-w-lg mx-auto mt-4 text-xl sm:text-2xl md:text-3xl font-medium z-10 h-10"
        >
          <Typewriter
            options={{
              strings: [
                "Front End Developer",
                "Back End Developer",
                "Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={typingDone ? "show" : "hidden"}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-10 mt-6 flex justify-center"
        >
          <a
            href="https://drive.google.com/file/d/1muxaeYl9nGnbE3cvQ-pyQs-BNRoEq15_/view?usp=sharing"
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition text-sm sm:text-base"
          >
            Download CV
          </a>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
