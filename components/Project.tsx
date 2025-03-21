"use client";
import React, { JSX } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";


// Mapping icon string ke komponen React
const iconComponents: { [key: string]: JSX.Element } = {
  FaReact: <FaReact className="w-6 h-6 text-blue-500" />,
  RiTailwindCssFill: <RiTailwindCssFill className="w-6 h-6 text-teal-400" />,
  FaNodeJs: <FaNodeJs className="w-6 h-6 text-green-500" />,
  RiNextjsLine: <RiNextjsLine className="w-6 h-6 text-gray-500" />,
};

const projects = [
  {
    id: 1,
    title: "Foofie Frame",
    description:
      "Sebuah website yang menghadirkan berbagai resep makanan tradisional dari berbagai daerah",
    image: "/project/foodieFrame.png",
    icon: ["FaReact", "FaNodeJs"],
    link: "https://foodieframe.vercel.app/",
  },
  {
    id: 2,
    title: "Joki Ndess",
    description:
      " joki pembuatan website untuk berbagai kebutuhan, mulai dari bisnis, portofolio, hingga sistem berbasis web",
    image: "/project/jokiNdes.png",
    icon: ["RiNextjsLine", "RiTailwindCssFill"],
    link: "https://www.jokindess.com/",
  },
];

const Project = () => {
  return (
    <div className="py-20 text-white" id="project">
      <h1 className="heading text-4xl font-bold text-center text-white">
        A small selection of
        <span className="block text-emerald-400 text-2xl font-semibold">
          recent project
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((projek) => (
          <div
            key={projek.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={projek.title} href={projek.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src={projek.image || "/samm4.png"} // Gunakan projek.image jika ada, jika tidak pakai samm4.png
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="rounded-lg shadow-lg"
                    alt={projek.title}
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {projek.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {projek.description}
              </p>
              <div className="flex items-center justify-start mt-7 mb-3 space-x-3">
                {projek.icon.map((iconKey, index) =>
                  iconComponents[iconKey] ? (
                    <div
                      key={iconKey}
                      className="border border-white/[0.2] rounded-3xl bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 4}px)` }}
                    >
                      {iconComponents[iconKey]}
                    </div>
                  ) : null
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
