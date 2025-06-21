"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions, Container } from "@tsparticles/engine";

type ParticlesComponentProps = {
  id: string;
};

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#3F4F44" },
        links: {
          color: "#3F4F44",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <div className="absolute inset-0 z-0 w-full h-full">
      {/* Gradient Background Layer */}
      <div className="relative min-h-screen w-full bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417] -z-1" />

      {/* Particles Layer */}
      <Particles
        id={id}
        className="absolute inset-0 z-10"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  ) : null;
};

export default ParticlesComponent;
