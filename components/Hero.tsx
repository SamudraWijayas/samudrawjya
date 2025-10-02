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
          className="mt-6 flex justify-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/18TDYUg8Wl7QQ_xY2Q3pbNPDJxr35uUff/view?usp=sharing"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

          <a
            href="https://github.com/username" // ganti sama username GitHub lo
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-md transition text-sm sm:text-base flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* pakai icon github biar keren */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 .297a12 12 0 0 0-3.797 23.406c.6.111.82-.261.82-.577v-2.173c-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 6 0c2.291-1.552 3.298-1.23 3.298-1.23.654 1.652.242 2.873.118 3.176.768.84 1.235 1.91 1.235 3.221 0 4.61-2.803 5.628-5.475 5.924.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576A12 12 0 0 0 12 .297Z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>

      <BackgroundBeams />
    </section>
  );
}
