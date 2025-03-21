import React from "react";
import Image from "next/image";
import ParticlesBackground from "./ui/ParticlesBackground";

console.log("ParticlesBackground component is rendering!");

const About = () => {
  return (
    <section className="relative bg-transparent py-16 px-6 overflow-hidden" id="about">
      {/* Pastikan Particles berada di belakang */}
      <ParticlesBackground id="tsparticles" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/about.jpg"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg shadow-lg"
            alt="About me"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-white leading-relaxed max-w-prose">
            I am a fresh graduate Frontend Developer from IIB Darmajaya with
            expertise in
            <span className="font-semibold">
              {" "}
              HTML, CSS, JavaScript, React, Next.js,{" "}
            </span>
            and <span className="font-semibold"> Tailwind CSS</span>. I have
            experience in building responsive, interactive, and user-friendly
            interfaces through various projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
