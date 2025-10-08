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
import { motion } from "framer-motion";
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
    <section className="py-20 text-white z-20" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        {/* === Heading === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-start mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              🧩 My Stacks
            </span>
          </h2>
          <p className="text-gray-400">
            Commitment to staying updated with the latest design trends and
            techniques.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 border-b border-neutral-800 w-full origin-left"
          ></motion.div>
        </motion.div>

        {/* === Animated Grid === */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 100%)",
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between bg-[#10172a]/60 border border-white/10 relative overflow-hidden rounded-xl p-4 cursor-pointer group z-10"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-2 bg-neutral-800 rounded-lg"
                >
                  {stack.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-base">{stack.title}</h3>
                  <p className="text-sm text-gray-400">{stack.desc}</p>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="text-gray-500 w-5 h-5 group-hover:text-blue-400 transition" />
              </motion.div>
              {/* Light sweep effect */}
              <span className="absolute inset-0 -left-10 bg-gradient-to-r from-white/10 to-transparent opacity-0 blur-md transform -translate-x-full group-hover:translate-x-full group-hover:opacity-40 transition-all duration-700"></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
