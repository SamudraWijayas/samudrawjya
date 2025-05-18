"use client";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { FaCode, FaServer } from "react-icons/fa6";

import { BsPeopleFill } from "react-icons/bs";
import { PiClockClockwiseBold } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const skills = {
  frontend: [
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-gray-500" />, name: "Next.js" },
    { icon: <FaBootstrap className="text-indigo-500" />, name: "Bootstrap" },
    {
      icon: <SiTailwindcss className="text-teal-400" />,
      name: "Tailwind CSS",
    },
  ],
  backend: [
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
    { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
    { icon: <SiPhp className="text-indigo-700" />, name: "PHP" },
    { icon: <SiLaravel className="text-pink-600" />, name: "Laravel" },
  ],
  others: [
    {
      icon: <MdDesignServices className="text-pink-500" />,
      name: "UI/UX Design",
    },
    { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <BsPeopleFill className="text-green-600" />, name: "Teamwork" },
    {
      icon: <PiClockClockwiseBold className="text-blue-400" />,
      name: "Time Management",
    },
    {
      icon: <HiOutlineChatAlt2 className="text-teal-500" />,
      name: "Communication",
    },
  ],
};

const Skills = () => {
  return (
    <section className="py-16 px-6" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Skill & Expertise
        </h2>
        <p className="text-gray-400">
          Sederet keahlian dan teknologi yang saya kuasai untuk mendukung setiap
          project yang saya kerjakan.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Frontend */}
        <div className="bg-black rounded-lg shadow p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
            <FaCode className="mr-3 text-blue-600" /> Front-End Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-blue-400/20 text-sm px-3 py-1 rounded-full text-white dark:text-white"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-black rounded-lg shadow p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
            <FaServer className="mr-3 text-blue-600" /> Back-End Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-blue-400/20 text-sm px-3 py-1 rounded-full text-white"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="md:col-span-2 bg-black rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-white">
            🧠 Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.others.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-blue-400/20 text-sm px-3 py-1 rounded-full text-white"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
