import "animate.css";
import { BackgroundBeams } from "../components/ui/background-beams";

const Hero = () => {
  return (
    <div className="pb-20 pt-24 sm:pt-32 bg-neutral-950 min-h-screen w-full relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold leading-tight">
          Samodra Wijaya Samdoria
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm sm:text-base text-center relative z-10">
          Front End Developer
        </p>
        <div className="relative z-10 mt-6 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1k97noZZnf4ZJP5y9uy1GE28Jubml_i1e/view?usp=sharing"
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition text-sm sm:text-base"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Hero;
