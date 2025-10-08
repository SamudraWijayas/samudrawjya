"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BackgroundBeams } from "../components/ui/background-beams";
import Typewriter from "typewriter-effect";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// const icons = [
//   // kiri
//   {
//     src: "/icons/icon-react.jpg",
//     alt: "React",
//     className: "top-[120px] left-[40px] w-14 h-14",
//   },
//   {
//     src: "/icons/icon-next.jpg",
//     alt: "Next.js",
//     className: "top-[260px] left-[100px] w-12 h-12",
//   },
//   {
//     src: "/icons/icon-figma.jpg",
//     alt: "Figma",
//     className: "top-[400px] left-[60px] w-10 h-10",
//   },
//   {
//     src: "/icons/icon-mongo.jpg",
//     alt: "MongoDB",
//     className: "top-1/2 left-[30px] w-12 h-12",
//   },
//   {
//     src: "/icons/icon-node.jpg",
//     alt: "Node.js",
//     className: "bottom-[180px] left-[120px] w-14 h-14",
//   },

//   // kanan
//   {
//     src: "/icons/icon-ts.jpg",
//     alt: "TypeScript",
//     className: "top-[100px] right-[60px] w-12 h-12",
//   },
//   {
//     src: "/icons/icon-tailwind.jpg",
//     alt: "Tailwind",
//     className: "top-[240px] right-[30px] w-11 h-11",
//   },
//   {
//     src: "/icons/icon-express.jpg",
//     alt: "Express",
//     className: "top-[360px] right-[140px] w-14 h-14",
//   },
//   {
//     src: "/icons/icon-js.jpg",
//     alt: "JavaScript",
//     className: "top-1/2 right-[20px] w-16 h-16",
//   },
//   {
//     src: "/icons/icon-laravel.jpg",
//     alt: "Laravel",
//     className: "bottom-[160px] right-[100px] w-12 h-12",
//   },
//   {
//     src: "/icons/icon-html.jpg",
//     alt: "HTML",
//     className: "bottom-[220px] right-[40px] w-10 h-10",
//   },
//   {
//     src: "/icons/icon-css.jpg",
//     alt: "CSS",
//     className: "bottom-[80px] right-[160px] w-11 h-11",
//   },
// ];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden z-1 bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417]">
      {/* Floating icons */}
      {/* {icons.map((icon, idx) => (
        <Image
          key={idx}
          src={icon.src}
          alt={icon.alt}
          width={56}
          height={56}
          className={`absolute hidden sm:block ${icon.className}`}
        />
      ))} */}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* RIGHT SIDE (Image) — tampil di atas saat mobile */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center relative order-1 md:order-2"
        >
          <div className="relative">
            <Image
              src="/about.jpg"
              alt="Nurcahyo Prasetiyo"
              width={256}
              height={256}
              className="rounded-2xl object-cover border-4 border-neutral-800 w-56 h-56 sm:w-64 sm:h-64"
            />
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-500 rounded-bl-2xl" />
          </div>
        </motion.div>

        {/* LEFT SIDE (Text) — tampil di bawah saat mobile */}
        <div className="text-left order-2 md:order-1">
          <motion.h2
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium text-yellow-400 flex items-center gap-2"
          >
            👋 Hello, My Name is
          </motion.h2>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl sm:text-5xl md:text-4xl italic text-white mt-2"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Samudra Wijaya Samdoria
            </span>
          </motion.h1>

          <motion.h3
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl sm:text-2xl flex gap-3 text-white mt-4 font-semibold"
          >
            I`m a{" "}
            <span className="text-blue-400">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </motion.h3>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-white leading-relaxed text-xs sm:text-base"
          >
            A Web Developer from Lampung, Indonesia, with strong expertise in
            JavaScript and TypeScript, specializing in modern frontend
            development using React and Next.js. Experienced in all stages of
            the development lifecycle for web projects, and proficient in HTML5,
            PHP (OOP), CSS, and MySQL. Skilled in building responsive, scalable,
            and user-friendly web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1muxaeYl9nGnbE3cvQ-pyQs-BNRoEq15_/view?usp=sharing"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
              target="_blank"
              rel="noopener noreferrer"
            > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 16.5l4-4h-3V3h-2v9.5H8l4 4zm8 2.5H4v2h16v-2z" />
              </svg>
              Download CV
            </a>

            {/* Social Icons */}
            {/* <div className="flex gap-3">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full text-blue-400 transition"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full text-pink-400 transition"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div> */}
          </motion.div>
        </div>

        {/* Decorative motion divs */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block absolute right-82 top-16 -z-1 h-32 w-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block absolute right-26 bottom-20 z-0 h-22 w-22 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        ></motion.div>
      </div>

      <BackgroundBeams />
    </section>
  );
}
