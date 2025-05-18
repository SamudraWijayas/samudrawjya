import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import GuestBook from "../components/GuestBook";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <GuestBook />
      <Footer />
    </div>
  );
}
