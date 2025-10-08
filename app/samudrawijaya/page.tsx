
import Footer from "@/components/Footer";
import GuestBook from "@/components/GuestBook";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Project />
      <Skill />
      <GuestBook />
      <Footer />
    </div>
  );
}
