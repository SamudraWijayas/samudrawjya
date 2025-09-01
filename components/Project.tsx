"use client";
import React, { useEffect, useState, JSX } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaFlutter, FaPhp, FaLaravel } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiFlask,
  SiMysql,
  SiRadixui,
  SiAntdesign,
  SiLeaflet,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

// Icon mapping
const iconComponents: { [key: string]: JSX.Element } = {
  FaReact: <FaReact className="w-6 h-6 text-blue-500" />,
  RiTailwindCssFill: <RiTailwindCssFill className="w-6 h-6 text-teal-400" />,
  SiLeaflet: <SiLeaflet className="w-6 h-6 text-green-500" />,
  FaNodeJs: <FaNodeJs className="w-6 h-6 text-green-500" />,
  SiMongodb: <SiMongodb className="w-6 h-6 text-green-500" />,
  RiNextjsLine: <RiNextjsLine className="w-6 h-6 text-gray-500" />,
  BsBootstrap: <BsBootstrap className="w-6 h-6 text-purple-600" />,
  FaFlutter: <FaFlutter className="w-6 h-6 text-blue-500" />,
  SiTypescript: <SiTypescript className="w-6 h-6 text-blue-500" />,
  SiFlask: <SiFlask className="w-6 h-6 text-blue-500" />,
  SiMysql: <SiMysql className="w-6 h-6 text-blue-500" />,
  SiAntdesign: <SiAntdesign className="w-6 h-6 text-blue-700" />,
  FaPhp: <FaPhp className="w-6 h-6 text-blue-700" />,
  FaLaravel: <FaLaravel className="w-6 h-6 text-red-500" />,
  IoLogoJavascript: <IoLogoJavascript className="w-6 h-6 text-yellow-300" />,
  FaPython: <FaPython className="w-6 h-6 text-yellow-300" />,
  SiExpress: <SiExpress className="w-6 h-6 text-gray-300" />,
  SiRadixui: <SiRadixui className="w-6 h-6 text-gray-300" />,
};

// Data project
const projects = [
  {
    id: 1,
    title: "Foofie Frame",
    description: "Website resep makanan tradisional dari berbagai daerah.",
    image: "/project/foodieFrame.png",
    icon: ["FaReact", "SiAntdesign", "FaNodeJs", "SiExpress"],
    link: "https://foodieframe.vercel.app/",
  },
  {
    id: 2,
    title: "Joki Ndess",
    description:
      "Jasa pembuatan website untuk bisnis, portofolio, hingga sistem web.",
    image: "/project/jokiNdes.png",
    icon: [
      "RiNextjsLine",
      "RiTailwindCssFill",
      "SiRadixui",
      "SiTypescript",
      "SiMongodb",
    ],
    link: "https://www.jokindess.com/",
  },
  {
    id: 3,
    title: "PRC Rental Mobil",
    description: "Sewa Mobil dengan kenyamanan, keandalan, dan kemewahan.",
    image: "/project/prc.png",
    icon: ["IoLogoJavascript", "BsBootstrap"],
    link: "https://prcsewamobillampung.vercel.app/",
  },
  {
    id: 4,
    title: "Yayasan Babunnajah",
    description:
      "Lembaga pendidikan dasar dan menengah Islam bermutu di Lampung.",
    image: "/project/yba.png",
    icon: ["FaPhp", "FaLaravel", "RiTailwindCssFill", "SiMysql"],
    link: "https://babunnajah.jokindess.com/",
  },
  {
    id: 5,
    title: "Aplikasi Absensi QR Code",
    description: "Aplikasi Android absensi dengan QR Code (Flutter).",
    image: "/project/absen.png",
    icon: ["FaFlutter", "FaNodeJs", "SiExpress"],
    link: "",
  },
  {
    id: 6,
    title: "Aplikasi Sewa Bus",
    description:
      "Aplikasi Android menentukan harga sewa bus dengan Decision Tree.",
    image: "/project/bus.jpg",
    icon: ["FaFlutter", "FaPython", "SiFlask", "SiMysql"],
    link: "https://github.com/SamudraWijayas/bus-rental-application.git",
  },
  {
    id: 7,
    title: "Manajemen Database",
    description: "Sistem Manajemen pembinaan dari kecil hingga dewasa.",
    image: "/project/manajemen.png",
    icon: ["FaReact", "RiTailwindCssFill", "FaNodeJs", "SiExpress", "SiMysql"],
    link: "",
  },
  {
    id: 8,
    title: "Absensi Kegiatan",
    description: "Sistem absensi kegiatan berbasis web Laravel.",
    image: "/project/absen2.png",
    icon: ["FaPhp", "FaLaravel", "RiTailwindCssFill", "SiMysql"],
    link: "",
  },
  {
    id: 9,
    title: "Sistem Layanan Gas",
    description: "Sistem GIS Gas Subsidi dengan A* (A-Star) di Leaflet.",
    image: "/project/gas.png",
    icon: [
      "FaReact",
      "FaNodeJs",
      "SiExpress",
      "SiMysql",
      "RiTailwindCssFill",
      "SiLeaflet",
    ],
    link: "https://github.com/SamudraWijayas/sistem-layanan-gas.git",
  },
  {
    id: 10,
    title: "Sistem Prediksi Kemacetan",
    description: "Prediksi kemacetan dan waktu tempuh menggunakan LSTM.",
    image: "/project/kemacetan.png",
    icon: ["FaPython", "SiFlask", "RiTailwindCssFill", "SiLeaflet"],
    link: "https://github.com/SamudraWijayas/sistem-prediksi-kemacetan.git",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="py-20 text-white bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417]"
      id="project"
    >
      <h2 className="heading text-4xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent z-50">
        A small selection of
        <span className="block text-gray-400 text-2xl font-semibold">
          recent project
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-20 mt-10">
        {visibleProjects.map((projek, index) => (
          <div
            key={projek.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <PinContainer title={projek.title} href={projek.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10 rounded-3xl overflow-hidden bg-[#13162d]">
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
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                {projek.description}
              </p>

              <div className="flex items-center justify-start mt-7 mb-3 space-x-3">
                {projek.icon.map((iconKey, index) =>
                  iconComponents[iconKey] ? (
                    <div
                      key={iconKey}
                      className="border border-white/[0.2] rounded-3xl bg-[#10172a]/60 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
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

      <div
        className="text-center mt-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="relative overflow-hidden px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md transition-all duration-300 group"
        >
          <span className="relative z-10">
            {showAll ? "Show Less" : "See More"}
          </span>
          <span className="absolute inset-0 bg-white opacity-10 blur-md transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        </button>
      </div>
    </div>
  );
};

export default Project;
