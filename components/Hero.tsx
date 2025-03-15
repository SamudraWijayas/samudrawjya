import "animate.css";
import { BackgroundBeams } from "../components/ui/background-beams";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-blackh-[40rem] h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4 ">
        <h1 className="relative z-10 text-[30px] md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Samodra Wijaya Samdoria
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Front End Developer
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
