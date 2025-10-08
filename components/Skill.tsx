"use client";

import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiFramer,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stacks = [
  // === FRONTEND ===
  {
    icon: <FaReact className="text-sky-400 text-3xl" />,
    title: "React",
    desc: "Build interactive UIs",
  },
  {
    icon: <SiNextdotjs className="text-white text-3xl" />,
    title: "Next.js",
    desc: "Build SSR/SSG apps",
  },
  {
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
    title: "TypeScript",
    desc: "Add type safety to JS",
  },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    title: "Tailwind CSS",
    desc: "Style UI with utility classes",
  },
  {
    icon: <SiRedux className="text-purple-400 text-3xl" />,
    title: "Redux Toolkit",
    desc: "Manage global state",
  },

  {
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    title: "JavaScript",
    desc: "Program web interactivity",
  },
  {
    icon: <FaFigma className="text-pink-400 text-3xl" />,
    title: "Figma",
    desc: "Design and prototype UI",
  },
  {
    icon: <SiFramer className="text-white text-3xl" />,
    title: "Framer",
    desc: "Design interactive layouts",
  },

  // === BACKEND ===
  {
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    title: "Node.js",
    desc: "Build scalable backend services",
  },
  {
    icon: <SiExpress className="text-gray-400 text-3xl" />,
    title: "Express.js",
    desc: "Create fast backend APIs",
  },
  {
    icon: <SiPhp className="text-indigo-500 text-3xl" />,
    title: "PHP",
    desc: "Develop server-side logic",
  },
  {
    icon: <SiLaravel className="text-red-500 text-3xl" />,
    title: "Laravel",
    desc: "Elegant PHP web framework",
  },
  {
    icon: <SiMongodb className="text-green-600 text-3xl" />,
    title: "MongoDB",
    desc: "NoSQL database for modern apps",
  },
  {
    icon: <SiMysql className="text-blue-500 text-3xl" />,
    title: "MySQL",
    desc: "Relational database for structured data",
  },
];

export default function Skills() {
  return (
    <section className="py-20 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              🧩 My Stacks
            </span>
          </h2>
          <p className="text-gray-400">
            Commitment to staying updated with the latest design trends and
            techniques.
          </p>
          <div className="mt-6 border-b border-neutral-800 w-full"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex items-center justify-between bg-[#10172a]/60 border border-white/10 relative overflow-hidden duration-300 group hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  {stack.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base">{stack.title}</h3>
                  <p className="text-sm text-gray-400">{stack.desc}</p>
                </div>
              </div>
              <ArrowRight className="text-gray-500 w-5 h-5" />
              <span className="absolute inset-0 -left-10 bg-white opacity-6 blur-md transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
