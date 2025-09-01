"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BackgroundBeams } from "../components/ui/background-beams";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const icons = [
  // kiri
  {
    src: "/icons/icon-react.jpg",
    alt: "React",
    className: "top-[120px] left-[40px] w-14 h-14",
  },
  {
    src: "/icons/icon-next.jpg",
    alt: "Next.js",
    className: "top-[260px] left-[100px] w-12 h-12",
  },
  {
    src: "/icons/icon-figma.jpg",
    alt: "Figma",
    className: "top-[400px] left-[60px] w-10 h-10",
  },
  {
    src: "/icons/icon-mongo.jpg",
    alt: "MongoDB",
    className: "top-1/2 left-[30px] w-12 h-12",
  },
  {
    src: "/icons/icon-node.jpg",
    alt: "Node.js",
    className: "bottom-[180px] left-[120px] w-14 h-14",
  },

  // kanan
  {
    src: "/icons/icon-ts.jpg",
    alt: "TypeScript",
    className: "top-[100px] right-[60px] w-12 h-12",
  },
  {
    src: "/icons/icon-tailwind.jpg",
    alt: "Tailwind",
    className: "top-[240px] right-[30px] w-11 h-11",
  },
  {
    src: "/icons/icon-express.jpg",
    alt: "Express",
    className: "top-[360px] right-[140px] w-14 h-14",
  },
  {
    src: "/icons/icon-js.jpg",
    alt: "JavaScript",
    className: "top-1/2 right-[20px] w-16 h-16",
  },
  {
    src: "/icons/icon-laravel.jpg",
    alt: "Laravel",
    className: "bottom-[160px] right-[100px] w-12 h-12",
  },
  {
    src: "/icons/icon-html.jpg",
    alt: "HTML",
    className: "bottom-[220px] right-[40px] w-10 h-10",
  },
  {
    src: "/icons/icon-css.jpg",
    alt: "CSS",
    className: "bottom-[80px] right-[160px] w-11 h-11",
  },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden z-1 bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417]">
      {/* Floating icons */}
      {icons.map((icon, idx) => (
        <Image
          key={idx}
          src={icon.src}
          alt={icon.alt}
          width={56}
          height={56}
          className={`absolute hidden sm:block ${icon.className}`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Samudra Wijaya
          </span>
        </motion.h2>

        <motion.h3
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-2xl sm:text-4xl font-extrabold text-neutral-400"
        >
          Full Stack Developer
        </motion.h3>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <a
            href="https://drive.google.com/file/d/18TDYUg8Wl7QQ_xY2Q3pbNPDJxr35uUff/view?usp=sharing"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition text-sm sm:text-base"
          >
            Belajar Sekarang
          </a>
        </motion.div>
      </div>

      <BackgroundBeams />
    </section>
  );
}
