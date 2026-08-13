import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Experience from "../components/Experience";
import SkillsBento from "../components/SkillsBento";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import { useScrollToHash } from "../hooks/useScrollToHash";

export default function Home() {
  useScrollToHash();

  return (
    <>
      <div className="relative">
        <Hero />
      </div>
      <Experience />
      <SkillsBento />
      <Certifications />
      <About />
      <ProjectsGrid />
      <Contact />
    </>
  );
}