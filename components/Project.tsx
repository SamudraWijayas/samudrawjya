"use client";
import React, { JSX } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiFlask,
  SiMysql,
} from "react-icons/si";

// Mapping icon string ke komponen React
const iconComponents: { [key: string]: JSX.Element } = {
  FaReact: <FaReact className="w-6 h-6 text-blue-500" />,
  RiTailwindCssFill: <RiTailwindCssFill className="w-6 h-6 text-teal-400" />,
  FaNodeJs: <FaNodeJs className="w-6 h-6 text-green-500" />,
  SiMongodb: <SiMongodb className="w-6 h-6 text-green-700" />,
  RiNextjsLine: <RiNextjsLine className="w-6 h-6 text-gray-500" />,
  BsBootstrap: <BsBootstrap className="w-6 h-6 text-purple-600" />,
  FaFlutter: <FaFlutter className="w-6 h-6 text-blue-500" />,
  SiTypescript: <SiTypescript className="w-6 h-6 text-blue-500" />,
  SiFlask: <SiFlask className="w-6 h-6 text-blue-500" />,
  SiMysql: <SiMysql className="w-6 h-6 text-blue-500" />,
  IoLogoJavascript: <IoLogoJavascript className="w-6 h-6 text-yellow-300" />,
  FaPython: <FaPython className="w-6 h-6 text-yellow-300" />,
  SiExpress: <SiExpress className="w-6 h-6 text-gray-300" />,
};

const projects = [
  {
    id: 1,
    title: "Foofie Frame",
    description:
      "Sebuah website yang menghadirkan berbagai resep makanan tradisional dari berbagai daerah",
    image: "/project/foodieFrame.png",
    icon: ["FaReact", "FaNodeJs", "SiExpress"],
    link: "https://foodieframe.vercel.app/",
  },
  {
    id: 2,
    title: "Joki Ndess",
    description:
      " joki pembuatan website untuk berbagai kebutuhan, mulai dari bisnis, portofolio, hingga sistem berbasis web",
    image: "/project/jokiNdes.png",
    icon: ["RiNextjsLine", "RiTailwindCssFill", "SiTypescript", "SiMongodb"],
    link: "https://www.jokindess.com/",
  },
  {
    id: 3,
    title: "PRC Rental Mobil",
    description: " PRC Sewa Mobil Lampung",
    image: "/project/prc.png",
    icon: ["IoLogoJavascript", "BsBootstrap"],
    link: "https://prcsewamobillampung.vercel.app/",
  },
  {
    id: 4,
    title: "Yayasan Babunnajah",
    description:
      " Yayasan Babunnajah Almunawir merupakan lembaga pendidikan dasar dan menengah yang bernafaskan Islam dan bermutu di Provinsi Lampung.",
    image: "/project/babunnajah.png",
    icon: ["FaReact", "RiTailwindCssFill", "FaNodeJs", "SiMongodb"],
    link: "https://babunnajah.vercel.app/",
  },
  {
    id: 5,
    title: "Aplikasi Absensi QR Code",
    description:
      "Aplikasi berbasis android yang dibuat menggunakan flutter untuk absensi menggunakan QR Code",
    image: "/project/absen.png",
    icon: ["FaFlutter", "FaNodeJs", "SiExpress"],
    link: "",
  },
  {
    id: 6,
    title: "Aplikasi Sewa Bus",
    description:
      "Aplikasi Android untuk menentukan Harga Sewa Bus Pariwisata Menggunakan Algoritma Decision Tree",
    image: "/project/bus.jpg",
    icon: ["FaFlutter", "FaPython", "SiFlask", "SiMysql"],
    link: "https://github.com/SamudraWijayas/bus-rental-application.git",
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

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((projek) => (
          <div
            key={projek.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center"
          >
            <PinContainer title={projek.title} href={projek.link}>
              <div className="relative ">
                <Image
                  src={projek.image || "/samm4.png"}
                  alt={projek.title}
                  fill
                  className="object-cover"
                  priority
                />
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
