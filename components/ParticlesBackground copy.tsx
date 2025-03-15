"use client";

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";
import type { Engine, MoveDirection, OutMode } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Engine Init:", engine); // ✅ Debug apakah Engine terpanggil
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 150, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ff0000" },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none" as MoveDirection, // ✅ FIXED
        enable: true,
        outModes: { default: "bounce" as OutMode }, // ✅ FIXED
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        value: 100, // Pastikan di atas 0
        density: { enable: true, area: 800 },
      },

      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  console.log("Particles options:", particlesOptions);

  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10">
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={particlesOptions} // ✅ Hapus init
        url="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.json" // ✅ Pakai CDN untuk load plugin
      />
    </div>
  );
};

export default ParticlesBackground;
