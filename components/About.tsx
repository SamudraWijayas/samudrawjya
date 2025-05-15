import React from "react";
import Image from "next/image";
// import ParticlesBackground from "./ui/ParticlesBackground";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiPhp,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
} from "react-icons/si";

console.log("ParticlesBackground component is rendering!");

const About = () => {
  return (
    <section
      className="relative bg-blue-200 py-16 px-6 overflow-hidden"
      id="about"
    >
      {/* Pastikan Particles berada di belakang */}
      {/* <ParticlesBackground id="tsparticles" /> */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/about.jpg"
            fill
            priority
            alt="About me"
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-white leading-relaxed max-w-prose">
            I am a fresh graduate Frontend Developer from IIB Darmajaya with
            expertise in
            <span className="font-semibold">
              {" "}
              HTML, CSS, JavaScript, React, Next.js, PHP, Laravel, Express.js,
              MySQL, MongoDB,{" "}
            </span>
            and <span className="font-semibold"> Tailwind CSS</span>. I have
            experience in building responsive, interactive, and user-friendly
            interfaces through various projects.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start space-x-6 space-y-4 text-white text-3xl">
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-500" />
              <span className="text-sm mt-1 font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-500" />
              <span className="text-sm mt-1 font-semibold">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap className="text-purple-600" />
              <span className="text-sm mt-1 font-semibold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPhp className="text-indigo-600" />
              <span className="text-sm mt-1 font-semibold">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <SiLaravel className="text-red-600" />
              <span className="text-sm mt-1 font-semibold">Laravel</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-gray-700" />
              <span className="text-sm mt-1 font-semibold">Express.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-blue-700" />
              <span className="text-sm mt-1 font-semibold">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-green-700" />
              <span className="text-sm mt-1 font-semibold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-yellow-400" />
              <span className="text-sm mt-1 font-semibold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiHtml5 className="text-orange-600" />
              <span className="text-sm mt-1 font-semibold">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="text-blue-600" />
              <span className="text-sm mt-1 font-semibold">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-white" />
              <span className="text-sm mt-1 font-semibold">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
