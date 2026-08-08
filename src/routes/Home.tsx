import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Experience from "../components/Experience";
import SkillsBento from "../components/SkillsBento";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <SkillsBento />
      <Certifications />
      <About />
      <Experience />
      <Contact />
    </>
  );
}